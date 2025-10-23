# Nicky Bucket VSCode Extension

## Description

A powerful Visual Studio Code extension designed to streamline the management of static assets stored in **Cloudflare R2** buckets, directly within your IDE.

---

## Architecture

```mermaid
graph TD
    subgraph VSCode Explorer (Local)
        A[File/Folder] --> B(Command: nicky-bucket.copyLocalPath)
    end
    
    subgraph Extension Context (Clipboard State)
        B --> C{State: localFileToCopy = File URI}
    end
    
    subgraph R2 Explorer (Cloud)
        D[R2 Folder Node] --> E(Command: nicky-bucket.pasteToR2)
    end
    
    E --> F{Check: Local URI in Clipboard?}
    F -- Yes --> G[Get R2 Folder Key]
    G --> H(Upload Logic: uploadDirectory/uploadFile)
    
    subgraph AWS SDK / R2 API
        H --> I(AWS SDK: PutObjectCommand)
        I -- Success --> J[R2 Bucket]
    end
    
    J --> K(R2TreeDataProvider.refresh)
    K --> D
    F -- No --> L[Error: Nothing Copied]
```

> 🚧 Real architectures in progress.

---

## Demo / Documentation

🔗 [See full documentation at](https://hmosqueraturner.github.io/nicky-bucket/)

<div style="position:relative; padding-bottom:60%; height:0; overflow:hidden; border-radius:12px; background:#f5f5f5;">
  <iframe
    src="https://hmosqueraturner.github.io/nicky-bucket/"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:12px;"
    allowfullscreen
    loading="lazy"
    onerror="this.outerHTML='<div style=\'padding:2em;text-align:center;color:#666;background:#fafafa;border-radius:12px;\'>⚠️ Could not load the embedded demo.<br> GitHub may block embedded views.<br><a href=https://hmosqueraturner.github.io/nicky-bucket/ target=_blank>Open it directly here</a>.</div>'">
  </iframe>
</div>

---

## Tech Stack

- Main language: **TypeScript, Node.js**
- Infrastructure:**VS Code Extension API**
- CI/CD: **Webpack, Node.js**
- Other components: **AWS SDK for JavaScript (v3)**

---

## Notes

> Design decisions, related links or references here.
