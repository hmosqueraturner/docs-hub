import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const docsPath = path.resolve("docs");
const projectsPath = path.join(docsPath, "projects");
const sidebarFile = path.join(docsPath, "_sidebar.md");

const GROUPS = {
  AI: "🤖 AI Projects",
  DevOps: "⚙️ DevOps Pipelines",
  Cloud: "☁️ Cloud Automation",
  Data: "📊 Data Systems",
  R3D: "🎮 AR/VR & 3D Projects",
  Other: "🧩 Other Projects"
};

async function ask(question) {
  return new Promise(resolve => rl.question(question, ans => resolve(ans.trim())));
}

async function main() {
  console.log("\n🚀 Add a new project to the Docsify Hub (advanced version with Mermaid + responsive iframe)\n");

  const name = await ask("Internal project name (e.g. monitoring-stack): ");
  const title = await ask("Visible title (e.g. 📊 Monitoring Stack): ");
  const description = await ask("Short description: ");
  const repoUrl = await ask("Repository or live demo URL (e.g. https://youruser.github.io/monitoring-stack/): ");

  console.log("\nAvailable groups:");
  Object.keys(GROUPS).forEach(g => console.log(` - ${g}`));
  const group = await ask("Select group (AI / DevOps / Cloud / Data / R3D / Other): ");

  const groupKey = GROUPS[group] ? group : "Other";
  const groupName = GROUPS[groupKey];

  const mdFile = path.join(projectsPath, `${name}.md`);
  if (fs.existsSync(mdFile)) {
    console.error("❌ A project with this name already exists in /projects/");
    process.exit(1);
  }

  // Detect non-embeddable GitHub URLs and auto-adjust to htmlpreview
  let embedUrl = repoUrl;
  if (repoUrl.includes("github.com") && !repoUrl.includes(".github.io")) {
    embedUrl = `https://htmlpreview.github.io/?${repoUrl}`;
    console.log("⚠️ URL automatically adjusted for GitHub preview embedding.");
  }

  // 🎨 Default Mermaid architecture diagram
  const mermaidDiagram = `
\`\`\`mermaid
graph TD
  A[User] -->|Interacts| B[Frontend App]
  B --> C[Backend API]
  C --> D[(Database)]
  C --> E[External Services]
\`\`\`
`;

  // 🌐 Responsive iframe block with graceful fallback
  const iframeBlock = `
<div style="position:relative; padding-bottom:60%; height:0; overflow:hidden; border-radius:12px; background:#f5f5f5;">
  <iframe
    src="${embedUrl}"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:12px;"
    allowfullscreen
    loading="lazy"
    onerror="this.outerHTML='<div style=\\'padding:2em;text-align:center;color:#666;background:#fafafa;border-radius:12px;\\'>⚠️ Could not load the embedded demo.<br> GitHub may block embedded views.<br><a href=${embedUrl} target=_blank>Open it directly here</a>.</div>'">
  </iframe>
</div>
`;

  // 🧱 Markdown template for the new project page
  const content = `# ${title}

## Description
${description}

---

## Architecture (editable)
${mermaidDiagram}

> 💡 Edit the diagram above to match your real architecture.

---

## Demo / Documentation
🔗 [Open full demo or documentation](${embedUrl})

${iframeBlock}

---

## Tech Stack
- Main language:
- Infrastructure:
- CI/CD:
- Other components:

---

## Notes
> Add design decisions, related links or references here.
`;

  // Create markdown file
  fs.writeFileSync(mdFile, content, "utf8");

  // Update sidebar
  const sidebar = fs.readFileSync(sidebarFile, "utf8").split("\n");
  const groupHeader = `* ${groupName}`;
  const insertLine = `  * [${title}](projects/${name}.md)`;
  const groupIndex = sidebar.findIndex(line => line.trim() === groupHeader.trim());

  if (groupIndex !== -1) {
    sidebar.splice(groupIndex + 1, 0, insertLine);
  } else {
    sidebar.push("", groupHeader, insertLine);
  }

  fs.writeFileSync(sidebarFile, sidebar.join("\n"), "utf8");

  console.log(`\n✅ Project added: ${title}`);
  console.log(`📁 File: docs/projects/${name}.md`);
  console.log(`📚 Group: ${groupName}`);
  console.log(`🌐 Embedded URL: ${embedUrl}`);
  console.log("🧩 Includes Mermaid diagram and responsive iframe with fallback.\n");
  rl.close();
}

main();
