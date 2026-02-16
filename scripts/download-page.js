const fs = require('fs');
const path = require('path');

const REPO = 'jprehar-ai/creator-being-house';
const BRANCH = 'main';
const BASE = 'https://api.github.com/repos/' + REPO;
const RAW = 'https://raw.githubusercontent.com/' + REPO + '/' + BRANCH + '/';
const ROOT = '/vercel/share/v0-project';

async function getTree() {
  const res = await fetch(BASE + '/git/trees/' + BRANCH + '?recursive=1');
  if (!res.ok) {
    console.log('Failed to get tree:', res.status, res.statusText);
    return [];
  }
  const data = await res.json();
  return data.tree.filter(t => t.type === 'blob');
}

async function downloadFile(filePath) {
  const url = RAW + filePath;
  const res = await fetch(url);
  if (!res.ok) {
    console.log('SKIP (failed):', filePath, res.status);
    return false;
  }
  const text = await res.text();
  const dest = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, text, 'utf-8');
  return true;
}

async function main() {
  console.log('Fetching repo file tree...');
  const files = await getTree();
  console.log('Found', files.length, 'files in repo');
  
  // Only restore app/ directory files and package.json (the ones we broke)
  const toRestore = files.filter(f => 
    f.path.startsWith('app/') || 
    f.path === 'package.json' ||
    f.path === 'postcss.config.mjs' ||
    f.path === 'next.config.mjs' ||
    f.path === 'tsconfig.json'
  );
  
  console.log('Restoring', toRestore.length, 'files...');
  
  let success = 0;
  for (const file of toRestore) {
    const ok = await downloadFile(file.path);
    if (ok) {
      success++;
      console.log('OK:', file.path);
    }
  }
  
  console.log('Done! Restored', success, '/', toRestore.length, 'files');
}

main().catch(e => console.log('Error:', e.message));
