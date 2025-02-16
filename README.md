
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d6a38ef88cf741f6a350e1fedf59311c)](https://app.codacy.com/gh/vinod827/k8s-nest?utm_source=github.com&utm_medium=referral&utm_content=vinod827/k8s-nest&utm_campaign=Badge_Grade_Settings)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/665c8926c3374c3bb8c19f6932e5eee2)](https://app.codacy.com/gh/vinod827/k8s-nest?utm_source=github.com&utm_medium=referral&utm_content=vinod827/k8s-nest&utm_campaign=Badge_Grade_Settings)

# k8s-nest

## Overview
`k8s-nest` is a collection of Kubernetes configurations, Infrastructure as Code (IaC) templates, and deployment strategies designed to simplify cloud-native application management. It includes Helm charts, KEDA-based autoscaling, CI/CD configurations, and other resources to help developers and DevOps engineers manage Kubernetes workloads efficiently.

## Features
- **KEDA-based Autoscaling**: Implement event-driven auto-scaling for Kubernetes workloads.
- **Helm Charts**: Predefined Helm charts for Kubernetes applications.
- **CI/CD Pipelines**: GitHub Actions workflows for automated deployments.
- **Infrastructure as Code (IaC)**: Terraform and Kubernetes YAML manifests for easy provisioning.
- **Security Policies**: Kyverno policies for Kubernetes governance.

## Repository Structure
```plaintext
k8s-nest/
│-- .github/workflows/     # CI/CD workflows for GitHub Actions
│-- iac/                   # Infrastructure as Code resources
│   ├── k8s/               # Kubernetes-specific configurations
│   ├── terraform/         # Terraform modules
│-- webapp/                # Sample application for deployment
│-- Dockerfile             # Containerization setup
│-- allow.yaml             # Security policy example
│-- disallow.yaml          # Security restriction policy
```

## Getting Started
### Prerequisites
- Kubernetes Cluster (Minikube, EKS, GKE, etc.)
- Helm
- kubectl
- Terraform (optional for IaC deployments)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/vinod827/k8s-nest.git
   cd k8s-nest
   ```
2. Deploy using Helm:
   ```sh
   helm install my-app ./helm-chart
   ```
3. Apply Kubernetes manifests manually:
   ```sh
   kubectl apply -f iac/k8s/
   ```

## Contributing
Contributions are welcome! Please submit a pull request or create an issue for discussions.

## License
This project is licensed under the MIT License.

---

### Author
**Vinod Kumar Nair**  
📧 vinod827@gmail.com  
📍 [GitHub](https://github.com/vinod827)  

