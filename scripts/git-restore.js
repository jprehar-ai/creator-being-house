const { execSync } = require('child_process');

try {
  // Check if git is available and has history
  const log = execSync('git log --oneline -10 2>&1', { cwd: '/vercel/share/v0-project' }).toString();
  console.log("Git log:", log);
  
  // Try to get the original page.tsx from the first commit or main branch
  const branches = execSync('git branch -a 2>&1', { cwd: '/vercel/share/v0-project' }).toString();
  console.log("Branches:", branches);
  
  // Try to show the file from HEAD~1 or origin/main
  try {
    const original = execSync('git show HEAD~1:app/page.tsx 2>&1', { cwd: '/vercel/share/v0-project' }).toString();
    console.log("Found from HEAD~1, length:", original.length);
    require('fs').writeFileSync('/vercel/share/v0-project/app/page.tsx', original);
    console.log("Restored from HEAD~1");
  } catch(e) {
    console.log("HEAD~1 failed, trying origin/main...");
    try {
      const original = execSync('git show origin/main:app/page.tsx 2>&1', { cwd: '/vercel/share/v0-project' }).toString();
      console.log("Found from origin/main, length:", original.length);
      require('fs').writeFileSync('/vercel/share/v0-project/app/page.tsx', original);
      console.log("Restored from origin/main");
    } catch(e2) {
      console.log("origin/main failed too:", e2.message);
      // Try listing all commits that touched page.tsx
      try {
        const fileLog = execSync('git log --all --oneline -- app/page.tsx 2>&1', { cwd: '/vercel/share/v0-project' }).toString();
        console.log("Commits touching page.tsx:", fileLog);
        
        // Get the earliest commit hash
        const lines = fileLog.trim().split('\n');
        if (lines.length > 0) {
          const firstCommit = lines[lines.length - 1].split(' ')[0];
          console.log("Trying earliest commit:", firstCommit);
          const original = execSync(`git show ${firstCommit}:app/page.tsx 2>&1`, { cwd: '/vercel/share/v0-project' }).toString();
          require('fs').writeFileSync('/vercel/share/v0-project/app/page.tsx', original);
          console.log("Restored from commit:", firstCommit, "length:", original.length);
        }
      } catch(e3) {
        console.log("All git approaches failed:", e3.message);
      }
    }
  }
} catch(e) {
  console.log("Git not available:", e.message);
}
