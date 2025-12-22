const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "public", "images");

fs.readdirSync(src)
  .filter((f) => /\.(png|jpg|jpeg)$/i.test(f))
  .forEach((file) => {
    const inPath = path.join(src, file);
    const name = path.parse(file).name;

    sharp(inPath)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(src, `${name}.webp`));

    sharp(inPath)
      .resize(800, null, { withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(path.join(src, `${name}@800.jpg`));
  });

console.log("Images optimized");
