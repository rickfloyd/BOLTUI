// diagnose-firebase.js
// Detects common Firebase web build + deploy problems and explains them clearly.

import { exec } from "child_process";
import fs from "fs";

function run(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) reject(stderr || err.message);
      else resolve(stdout || stderr);
    });
  });
}

async function checkFirebaseProject() {
  console.log("🧠 Checking Firebase project configuration...\n");

  try {
    // 1️⃣ Check for firebase.json
    if (!fs.existsSync("firebase.json")) {
      console.error(
        "❌ Missing firebase.json — Firebase CLI can't detect your project.",
      );
      console.log("Fix: Run 'firebase init hosting' to rebuild config.\n");
      return;
    }

    // 2️⃣ Validate firebase.json content
    const config = JSON.parse(fs.readFileSync("firebase.json", "utf8"));
    if (!config.hosting) {
      console.error("❌ firebase.json missing 'hosting' property.");
      console.log(
        "Fix: Add a 'hosting' section with your public directory (e.g., 'dist' or 'build').\n",
      );
    }

    // 3️⃣ Detect build folder
    const folder = config.hosting?.source;
    if (!folder || !fs.existsSync(folder)) {
      console.error(`❌ Build folder '${folder || "undefined"}' not found.`);
      console.log(
        "Fix: Check your framework build output. Try 'npm run build' before deploying.\n",
      );
    } else {
      console.log(`✅ Found build directory: ${folder}`);
    }

    // 4️⃣ Check for index.html (or Next.js build output)
    if (!fs.existsSync(`.next`)) {
      console.error("❌ Missing .next build directory.");
      console.log(
        "Fix: Verify your build process creates a .next folder. Run 'npm run build'.\n",
      );
    } else {
      console.log("✅ .next directory present.");
    }

    // 5️⃣ Check if firebase tools are installed
    try {
      const version = await run("firebase --version");
      console.log(`✅ Firebase CLI version detected: ${version.trim()}`);
    } catch {
      console.error("❌ Firebase CLI not found.");
      console.log("Fix: Run 'npm install -g firebase-tools'.\n");
    }

    // 6️⃣ Check if user is logged in
    try {
      await run("firebase login:list");
      console.log("✅ You are logged into Firebase.");
    } catch {
      console.error("❌ Not logged into Firebase.");
      console.log("Fix: Run 'firebase login'.\n");
    }

    // 7️⃣ Check deployed service logs
    console.log(
      "\n📡 Checking Google Cloud Run logs (if using Firebase Hosting with SSR)...",
    );
    try {
      const projectsList = await run("firebase projects:list --json");
      const projects = JSON.parse(projectsList);
      if (projects.result.length > 0) {
        const projectId = projects.result[0].id;
        const logs = await run(
          `gcloud logs read "resource.type=cloud_run_revision" --limit=10 --project=${projectId}`,
        );
        console.log("✅ Cloud Run logs found:\n", logs.slice(0, 500));
      } else {
        console.warn("⚠️ No Firebase projects found.");
      }
    } catch (e) {
      console.warn(
        "⚠️ Unable to fetch Cloud Run logs automatically — may require gcloud CLI setup or permissions.\n",
        e.message,
      );
    }

    console.log(
      "\n🩵 Diagnostics completed. See above for any ❌ issues or ⚠️ warnings.",
    );
  } catch (err) {
    console.error("🔥 Fatal error during diagnostics:", err);
  }
}

checkFirebaseProject();
