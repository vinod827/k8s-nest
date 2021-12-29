


### Hi there 👋


**k8s-nest** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.
Here are some ideas to get you started:

- 🔭 I’m currently working on Kubernetes Project
- 🌱 I’m currently learning Cloud Computing even though I have done multiple certifications, the technology keeps evolving and we should keep myself updated
- 👯 I’m looking to collaborate on this project
- 🤔 I’m looking for help with more IaC (Infrastructure as Code) for the vast open source community
- 💬 Ask me about AWS, Google Cloud Platform, JavaScript/NodeJS, Docker, Kubernetes, Java, ReactJS, Security best practices
- 📫 How to reach me: vinod827@gmail.com
- 😄 Pronouns: 
- ⚡ Fun fact: Life is beautiful, live each day




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




# Launch Templates

aws ec2 create-launch-template \
--launch-template-name myeks-cluster-managednodegroup \
--version-description "launch templated for creating and managing managed node groups" \
--launch-template-data '{"InstanceType": "t3.medium","TagSpecifications":[{"ResourceType":"instance","Tags":[{"Key":"purpose","Value":"eks-nodes"}]}] }'

aws eks create-nodegroup \
--cluster-name myeks-cluster \ 
--nodegroup-name myeks-nodegroup \
--subnets subnet-0d145ab4a17fcb368 subnet-01748f5bafb75e7a8 \
--node-role 'arn:aws:iam::195725532069:role/node-instance-role' \
--launch-template name=myeks-cluster-managednodegroup,version=1

aws ec2 create-launch-template-version \
--launch-template-name myeks-cluster-managednodegroup \
--version-description "New template version with the addition of key pair and security group allowing SSH access" \
--source-version 1 \
--launch-template-data '{ "KeyName":"eks-lt-keypair", "SecurityGroupIds":["sg-0e28306934fe7faeb"] }'

aws eks update-nodegroup-version \
--cluster-name my-eks-cluster-launch-template-demo \
--nodegroup-name myeks-nodegroup \
--launch-template name=myeks-cluster-managednodegroup,version=4


aws ec2 create-launch-template-version \
--launch-template-name myeks-cluster-managednodegroup \
--version-description "Changing the instance type to t2.xlarge" \
--source-version 1 \
--launch-template-data '{ "InstanceType":"t2.xlarge" }'

aws eks update-nodegroup-version \                                                               
--cluster-name my-eks-cluster-launch-template-demo \
--nodegroup-name myeks-nodegroup \
--launch-template name=myeks-cluster-managednodegroup,version=4
