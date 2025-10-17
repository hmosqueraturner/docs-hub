# 🎬 Real-time Omniverse Scene Ctrl

## Description
Visualization of 3D models and multimedia assets using glb/glt or glb + tsx to interact with the content. 

---

## Architecture

```mermaid
graph TD
  A[User] -->|Interacts| B[Frontend App]
  B --> C[Backend API]
  C --> D[(Database)]
  C --> E[External Services]
```


> 💡 Architecture details including NVIDIA Omnivrse Workflow.

---

## Demos
🎬 [Demo pure GLB manipulation](https://hmosqueraturner.github.io/scene-controller)
🎬 [Demo GLB + Typescript](https://hmosqueraturner.github.io/scene-controller-types)


## Documentation
🔗 [Open documentation](https://hmosqueraturner.github.io/scene-controller-types)

<div style="position:relative; padding-bottom:60%; height:0; overflow:hidden; border-radius:12px; background:#f5f5f5;">
  <iframe
    src="https://hmosqueraturner.github.io/scene-controller"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:12px;"
    allowfullscreen
    loading="lazy"
    onerror="this.outerHTML='<div style=\'padding:2em;text-align:center;color:#666;background:#fafafa;border-radius:12px;\'>⚠️ Could not load the embedded demo.<br> GitHub may block embedded views.<br><a href=https://hmosqueraturner.github.io/scene-controller target=_blank>Open it directly here</a>.</div>'">
  </iframe>
</div>


---

## Tech Stack
- Main language: Typescript
- Infrastructure: Vercel
- CI/CD: Github Actions
- Other components: Nvidia Omniverse, React, Three, Fiber, Vite, Drei

---

## Notes
> Add design decisions, related links or references here.
