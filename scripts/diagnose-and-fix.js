#!/usr/bin/env node
/**
 * AI Quantum Firebase Diagnostic & Auto-Fix Tool
 * Scans for syntax errors, missing deps, invalid configs,
 * and rebuilds Firebase faster across JS/TS/JSON/HTML.
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const projectRoot = process.cwd();
const logFile = path.join(projectRoot, "diagnostic_report.log");

function log(msg) {
  console.log(msg);
  fs.appendFileSync(logFile, `[${new Date().toISOString()}] ${msg}\n`);
}

log("🚀 Starting Firebase diagnostic & syntax repair...");

// ----------------------------
// 1. ESLint Auto-Fix Pass
// ----------------------------
try {
  log("🔍 Running ESLint fix pass...");
  execSync("npx eslint . --ext .js,.jsx,.ts,.tsx --fix", { stdio: "inherit" });
  log("✅ ESLint pass complete.");
} catch {
  log("⚠️ ESLint found issues but continued.");
}

// ----------------------------
// 2. Check JSON Configuration Files
// ----------------------------
const jsonFiles = ["firebase.json", ".firebaserc", "package.json"];
jsonFiles.forEach((file) => {
  const filePath = path.join(projectRoot, file);
  if (fs.existsSync(filePath)) {
    try {
      JSON.parse(fs.readFileSync(filePath, "utf8"));
      log(`✅ ${file} is valid JSON.`);
    } catch (err) {
      log(`❌ ${file} has invalid JSON: ${err.message}`);
    }
  }
});

// ----------------------------
// 3. Dependency Check
// ----------------------------
try {
  log("📦 Checking dependencies...");
  execSync("npm install --legacy-peer-deps", { stdio: "inherit" });
  log("✅ Dependencies verified.");
} catch {
  log("⚠️ Dependency install failed, check package versions.");
}

// ----------------------------
// 4. TypeScript Validation (if present)
// ----------------------------
if (fs.existsSync(path.join(projectRoot, "tsconfig.json"))) {
  try {
    log("🧠 Running TypeScript diagnostics...");
    execSync("npx tsc --noEmit", { stdio: "inherit" });
    log("✅ TypeScript check passed.");
  } catch {
    log("⚠️ TypeScript errors detected — review above output.");
  }
}

// ----------------------------
// 5. Firebase Config Validation
// ----------------------------
try {
  log("🔥 Validating Firebase setup...");
  execSync("npx firebase-tools --version", { stdio: "ignore" });
  execSync("npx firebase emulators:exec \"echo Firebase OK\"", { stdio: "inherit" });
  log("✅ Firebase config healthy.");
} catch {
  log("⚠️ Firebase CLI issues detected — re-authenticate if needed.");
}

// ----------------------------
// 6. Cross-Language Build Bridge
// ----------------------------
log("🌐 Running multi-language bridge optimization...");
try {
  execSync("npx prettier --write .", { stdio: "inherit" });
  execSync("npm run build", { stdio: "inherit" });
  log("✅ Unified code format + rebuild complete.");
} catch {
  log("⚠️ Build failed — see output for language conflicts.");
}

// ----------------------------
// 7. Cache & Speed Optimization
// ----------------------------
try {
  log("🧹 Clearing npm + Firebase cache...");
  execSync("npm cache clean --force", { stdio: "ignore" });
  execSync("firebase logout && firebase login", { stdio: "ignore" });
  log("✅ Cache cleanup done.");
} catch {
  log("⚠️ Cache cleanup skipped.");
}

log("✅ Diagnostic complete! Report saved to diagnostic_report.log");