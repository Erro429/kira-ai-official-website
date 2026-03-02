import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = ['public/logo.png', 'public/founders-hero.png'];

files.forEach(file => {
    const input = path.resolve(file);
    const output = input.replace('.png', '.webp');

    if (fs.existsSync(input)) {
        sharp(input)
            .toFile(output)
            .then(info => console.log(`Converted ${file} to WebP:`, info))
            .catch(err => console.error(`Error converting ${file}:`, err));
    } else {
        console.error(`File not found: ${file}`);
    }
});
