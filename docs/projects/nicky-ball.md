# 🤖 NICKY BALL 

AI-assisted Project scaffolder

# nicky-ball CLI
Use this CLI to scaffold frontend and backend boilerplates with optional AI hooks and workflow services.
Basic usage:
`nix`
`npx nicky-ball create my-game --type TR3F --with-workflows --generate`
Flags:
`--with-workflows`: includes n8n and Flowise docker-compose and example flows.
- `--generate`: attempt to call local model (Ollama/Jan/LMStudio) to generate `scripts/ai_overview.md`.
- `--gen-images`: also try to generate images via local model.
- `--render-diagrams`: render PlantUML diagrams (requires external setup).

---

## Embedded demo
> 🔗 [See full documentation at](https://hmosqueraturner.github.io/nicky-ball/)

---

<iframe
  src="https://hmosqueraturner.github.io/nicky-ball/"
  width="100%"
  height="800"
  style="border:none;border-radius:12px;">
</iframe>
---


