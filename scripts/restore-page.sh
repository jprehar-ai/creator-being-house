#!/bin/bash
# Try to restore the original page.tsx from git history
echo "=== Git log for page.tsx ==="
cd /vercel/share/v0-project
git log --oneline -5 -- app/page.tsx 2>&1

echo ""
echo "=== Attempting git show from main ==="
git show main:app/page.tsx 2>&1 | head -20

echo ""
echo "=== Attempting git stash list ==="
git stash list 2>&1

echo ""
echo "=== Git status ==="
git status --short 2>&1 | head -20

echo ""
echo "=== All commits ==="
git log --oneline -10 2>&1
