# RAG Azure Solution

## Description

RAG Azure-based solution for automated regression test management

- Components: Python
- Infrastructure: Bicep, Docker, ACR, AKS
- Main Stack: CosmoDB, Cognitive Search, Azure Container Apps, Chron Jobs

---

## Architecture

```mermaid
graph TD
  A[User] -->|Interacts| B[Frontend App]
  B --> C[Backend API]
  C --> D[(Database)]
  C --> E[External Services]
```

> 💡 RAG Specific Architecture.

---

## Demo / Documentation

🔗 [See full documentation](https://github.com/hmosqueraturner/smart-regression/blob/main/apps/update-rag/)

<div style="position:relative; padding-bottom:60%; height:0; overflow:hidden; border-radius:12px; background:#f5f5f5;">
  <iframe
    src="https://hmosqueraturner.github.io/smart-regression"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:12px;"
    allowfullscreen
    loading="lazy"
    onerror="this.outerHTML='<div style=\'padding:2em;text-align:center;color:#666;background:#fafafa;border-radius:12px;\'>
    ⚠️ Could not load the embedded demo.<br> GitHub may block embedded views.<br>
    <a href=https://github.com/hmosqueraturner/smart-regression/blob/main/apps/update-rag/README.md target=_blank>
    Open it directly here</a>.</div>'">
  </iframe>
</div>

---

## Tech Stack

- Main language: Python
- Infrastructure: Bicep Azure
- CI/CD: Bicep, Github Actions
- Other components: CosmoDB, Cognitive Search, Azure Container Apps, Chron Jobs

---

## Notes

> Add design decisions, related links or references here.
