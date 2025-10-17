# 🤖 AI Agent for Azure

## Description
Azure AI Agent for Release Intelligence developed using Flowise.

1. Queries Jira and Bitbucket to retrieve all information related to a release (fix version).
2. Indexes results using Azure Cognitive Search with OpenAI embeddings.
3. Allows semantic queries on indexed data using LangChain.

---

## Embedded demo
> 🔗 [See full documentation at](https://hmosqueraturner.github.io/ACiD/)

---

<iframe
  src="https://hmosqueraturner.github.io/ACiD/"
  width="100%"
  height="800"
  style="border:none;border-radius:12px;">
</iframe>
---

## Stack
- **Azure OpenAI**
- **Azure Functions**
- **Azure Cognitive Search**
- **JIRA Automation + Webhooks**
- **Python**
- **Jira API + Bitbucket API**
