import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const indexHtml = path.join(distDir, 'index.html');
const notFoundHtml = path.join(distDir, '404.html');

console.log('Building 404.html for GitHub Pages...');

try {
    if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, notFoundHtml);
        console.log('✅ Success: Copied index.html to 404.html');
    } else {
        console.error('❌ Error: dist/index.html not found. Make sure to run "vite build" first.');
        process.exit(1);
    }
} catch (err) {
    console.error('❌ Error creating 404.html:', err);
    process.exit(1);
}
