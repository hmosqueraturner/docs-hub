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
  R3D: "🎮 AR/VR & 3D Projects",
  Other: "🧩 Other projects"
};

async function ask(question) {
  return new Promise(resolve => rl.question(question, ans => resolve(ans.trim())));
}

async function main() {
  console.log("\n🚀 Add a new project to your Docsify Hub\n");

  const name = await ask("Project Name for Internal set up (ej: monitoring-stack): ");
  const title = await ask("Visible Title (ej: 📊 Monitoring Stack): ");
  const description = await ask("Small Description: ");
  const repoUrl = await ask("Repository or Demo URL (ej: https://tuusuario.github.io/monitoring-stack/): ");

  console.log("\nAvailable Groups:");
  Object.keys(GROUPS).forEach(g => console.log(` - ${g}`));
  const group = await ask("Select a group (AI / DevOps / Cloud / R3D / Other): ");

  const groupKey = GROUPS[group] ? group : "Other";
  const groupName = GROUPS[groupKey];

  const mdFile = path.join(projectsPath, `${name}.md`);
  if (fs.existsSync(mdFile)) {
    console.error("❌ There is another file using THAT NAME in /projects/");
    process.exit(1);
  }

  // Create Markdown content for the new project
  const content = `# ${title}

## Description
${description}

---

## Embedded demo
> 🔗 [See full documentation at](${repoUrl})

<iframe
  src="${repoUrl}"
  width="100%"
  height="800"
  style="border:none;border-radius:12px;">
</iframe>

---

## Stack
- **(Describe your main stack tools here)**
`;

  fs.writeFileSync(mdFile, content, "utf8");

  // Read _sidebar.md
  const sidebar = fs.readFileSync(sidebarFile, "utf8").split("\n");

  // Find the block of the selected group
  const groupHeader = `* ${groupName}`;
  const insertLine = `  * [${title}](projects/${name}.md)`;

  const groupIndex = sidebar.findIndex(line => line.trim() === groupHeader.trim());
  if (groupIndex !== -1) {
    // To insert after the group
    sidebar.splice(groupIndex + 1, 0, insertLine);
  } else {
    // If group does not exist, then create it
    sidebar.push(groupHeader, insertLine);
  }

  fs.writeFileSync(sidebarFile, sidebar.join("\n"), "utf8");

  console.log(`\n✅ Project added successfully.`);
  console.log(`✅ File created: docs/projects/${name}.md`);
  console.log(`✅ Inserted in group: ${groupName}`);
  rl.close();
}

main();
