# ⚙️ ACiD

## Description
Project demonstrating modern DevOps practices for elaborating custom suites for building, testing, packaging, and deploying applications using costom tools from SCM to Deploy providers.

---

## Diagram

```mermaid
graph TD
    subgraph CI/CD Pipeline
        A[GitHub Actions] --> B[Docker Build]
        B --> C[SonarCloud Analysis]
        B --> D[Nexus Publish]
        D --> E[Terraform Apply]
    end
    subgraph Azure
        F[Azure Container Apps]
    end
    E --> F
    F --> G[Running React App]
```
>🚧 Real architectures in progress.

---

## Embedded demo
> 🔗 [See full documentation at](https://hmosqueraturner.github.io/ACiD/)

<iframe
  src="https://hmosqueraturner.github.io/ACiD/"
  width="100%"
  height="800"
  style="border:none;border-radius:12px;">
</iframe>
---

## Stack
- **Github Actions, Jenkins**
- **Terraform + Bicep**
- **Ansible, Maven, JUnit**