const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
if (!fs.existsSync(outDir)) {
  console.error("out/ folder not found. Did you run next build with output: 'export'?");
  process.exit(1);
}

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
console.log("Created out/.nojekyll");
