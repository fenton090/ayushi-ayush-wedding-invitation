import fs from "fs";
import path from "path";

const galleryDirectory = path.join(
  process.cwd(),
  "public",
  "images",
  "gallery"
);

const outputFile = path.join(
  process.cwd(),
  "config",
  "galleryPhotos.generated.ts"
);

const supportedExtensions = [".jpg", ".jpeg", ".png", ".JPG"];

if (!fs.existsSync(galleryDirectory)) {
  throw new Error(`Gallery folder not found: ${galleryDirectory}`);
}

const files = fs
  .readdirSync(galleryDirectory)
  .filter((file) =>
    supportedExtensions.includes(path.extname(file).toLowerCase())
  )
  .sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );

const galleryPhotos = files.map((file, index) => {
  const name = path
    .parse(file)
    .name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const readableName = name.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  return {
    id: `g${index + 1}`,
    src: `/images/gallery/${file}`,
    alt: readableName || `Wedding photograph ${index + 1}`,
    title: readableName || "A Beautiful Memory",
    caption: "A moment we will always keep close.",
  };
});

const output = `// Automatically generated. Do not edit manually.

export const galleryPhotos = ${JSON.stringify(
  galleryPhotos,
  null,
  2
)};
`;

fs.writeFileSync(outputFile, output);

console.log(`Generated ${galleryPhotos.length} gallery photos.`);