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
  Agents: "🧠 AI Agents",
  Other: "🧩 Otros Proyectos"
};

async function ask(question) {
  return new Promise(resolve => rl.question(question, ans => resolve(ans.trim())));
}

async function main() {
  console.log("\n🚀 Añadir nuevo proyecto al Docsify Hub (modo avanzado)\n");

  const name = await ask("Nombre interno del proyecto (ej: monitoring-stack): ");
  const title = await ask("Título visible (ej: 📊 Monitoring Stack): ");
  const description = await ask("Descripción breve: ");
  const repoUrl = await ask("URL del repo o demo (ej: https://tuusuario.github.io/monitoring-stack/): ");

  console.log("\nGrupos disponibles:");
  Object.keys(GROUPS).forEach(g => console.log(` - ${g}`));
  const group = await ask("Selecciona grupo (AI / DevOps / Cloud / Data / Agents / Other): ");

  const groupKey = GROUPS[group] ? group : "Other";
  const groupName = GROUPS[groupKey];

  const mdFile = path.join(projectsPath, `${name}.md`);
  if (fs.existsSync(mdFile)) {
    console.error("❌ Ya existe un archivo con ese nombre en /projects/");
    process.exit(1);
  }

  // 🎨 Plantilla Mermaid por defecto
  const mermaidDiagram = `
\`\`\`mermaid
graph TD
  A[User] -->|Interacts| B[Frontend App]
  B --> C[Backend API]
  C --> D[(Database)]
  C --> E[External Services]
\`\`\`
`;

  // 🧱 Contenido Markdown del nuevo proyecto
  const content = `# ${title}

## Descripción
${description}

---

## Arquitectura (editable)
${mermaidDiagram}

> 💡 Puedes editar el diagrama directamente en este bloque para reflejar la arquitectura real del proyecto.

---

## Demo / Documentación
🔗 [Abrir demo o documentación completa](${repoUrl})

<iframe
  src="${repoUrl}"
  width="100%"
  height="800"
  style="border:none;border-radius:12px;">
</iframe>

---

## Stack Tecnológico
- Lenguaje principal: 
- Infraestructura: 
- CI/CD: 
- Otros componentes:

---

## Notas
> Añade aquí información adicional del proyecto (p. ej. decisiones arquitectónicas, links, diagramas complementarios).
`;

  // Crear archivo del proyecto
  fs.writeFileSync(mdFile, content, "utf8");

  // Leer y actualizar sidebar
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

  console.log(`\n✅ Proyecto añadido: ${title}`);
  console.log(`📁 Archivo: docs/projects/${name}.md`);
  console.log(`📚 Grupo: ${groupName}`);
  console.log("🧩 Incluye bloque Mermaid para diagrama de arquitectura.");
  rl.close();
}

main();
