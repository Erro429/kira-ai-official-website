
import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Use the path found in package.json "main"
const pdf = require('./node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs');

const dataBuffer = fs.readFileSync('Blog post.pdf');

if (typeof pdf === 'function') {
    pdf(dataBuffer).then(function (data) {
        console.log("---START TEXT---");
        console.log(data.text);
        console.log("---END TEXT---");
    }).catch(function (error) {
        console.error("Error extracting PDF:", error);
    });
} else {
    // Check if it has a default export
    if (pdf.default && typeof pdf.default === 'function') {
        pdf.default(dataBuffer).then(function (data) {
            console.log("---START TEXT---");
            console.log(data.text);
            console.log("---END TEXT---");
        }).catch(function (error) {
            console.error("Error extracting PDF:", error);
        });
    } else {
        console.error("pdf export is valid but not a function:", Object.keys(pdf));
    }
}
