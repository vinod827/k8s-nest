# k8s-nest

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d6a38ef88cf741f6a350e1fedf59311c)](https://app.codacy.com/gh/vinod827/k8s-nest?utm_source=github.com&utm_medium=referral&utm_content=vinod827/k8s-nest&utm_campaign=Badge_Grade_Settings)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/665c8926c3374c3bb8c19f6932e5eee2)](https://app.codacy.com/gh/vinod827/k8s-nest?utm_source=github.com&utm_medium=referral&utm_content=vinod827/k8s-nest&utm_campaign=Badge_Grade_Settings)

All k8s manifests lives here


1) ECS Cluster with Service, Task definitions and Load Balancers




Creating AWS EKS version 1.21 with containerd as CRI:-

EKS_VERSION=1.21

AMI_ID=$(aws ssm get-parameter \
    --name /aws/service/eks/optimized-ami/${EKS_VERSION}/amazon-linux-2/recommended/image_id \
    --query "Parameter.Value" --output text)

AWS_REGION=${AWS_DEFAULT_REGION:-us-east-1}

CLUSTER_NAME=containerd-eks

cat > eksctl-containerd.yaml <<EOF
--- 
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: ${CLUSTER_NAME}
  region: ${AWS_REGION}
  version: "${EKS_VERSION}"
managedNodeGroups:
  - name: containerd
    ami: ${AMI_ID}
    overrideBootstrapCommand: |
      #!/bin/bash
      /etc/eks/bootstrap.sh ${CLUSTER_NAME} --container-runtime containerd
EOF

eksctl create cluster -f eksctl-containerd.yaml

eksctl delete nodegroup --cluster=containerd-eks --name=containerd

eksctl create nodegroup --cluster=containerd-eks --spot --instance-types=t3.medium

eksctl utils associate-iam-oidc-provider \
    --region us-east-1 \
    --cluster containerd-eks \
    --approve


eksctl create fargateprofile \
    --cluster containerd-eks \
    --name containerd-fp \
    --namespace game-2048


kubectl annotate serviceaccount -n kube-system alb-ingress-controller \
eks.amazonaws.com/role-arn=arn:aws:iam::195725532069:role/eks-alb-ingress-controller


eksctl create iamserviceaccount \
                --name my-serviceaccount \
                --namespace kube-system \
                --cluster containerd-eks \
                --attach-policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess \
                --approve

             

CLUSTER_NAME=eks-fargate-alb-demo

eksctl create cluster --name eks-fargate-alb-demo --region us-east-1 --fargate

eksctl utils associate-iam-oidc-provider --cluster eks-fargate-alb-demo --approve

STACK_NAME=eksctl-eks-fargate-alb-demo-cluster
VPC_ID=$(aws cloudformation describe-stacks --stack-name "$STACK_NAME" | jq -r '[.Stacks[0].Outputs[] | {key: .OutputKey, value: .OutputValue}] | from_entries' | jq -r '.VPC')
AWS_ACCOUNT_ID=$(aws sts get-caller-identity | jq -r '.Account')

eksctl create iamserviceaccount \
--name alb-ingress-controller \
--namespace kube-system \
--cluster $CLUSTER_NAME \
--attach-policy-arn arn:aws:iam::$AWS_ACCOUNT_ID:policy/ALBIngressControllerIAMPolicy \
--approve


