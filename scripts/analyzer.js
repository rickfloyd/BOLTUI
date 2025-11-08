// scripts/analyzer.js
import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';

const API_ROUTE_DIR = './src/app/api';
const ENV_FILE = './.env.local';

// Helper to run shell commands
function run(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(`Exec error for command "${command}":`, stderr);
        reject(stderr || err.message);
      } else {
        resolve(stdout || stderr);
      }
    });
  });
}

async function checkApiRoutes() {
  console.log('--- 🔎 Analyzing API Routes ---');
  let hasErrors = false;

  try {
    const envContent = await fs.readFile(ENV_FILE, 'utf8');
    const definedKeys = new Set(envContent.split('\n').map(line => line.split('=')[0]));
    console.log(`✅ Found ${definedKeys.size} keys in ${ENV_FILE}`);

    const files = await fs.readdir(API_ROUTE_DIR, { withFileTypes: true });

    for (const file of files) {
      // We only care about directories, as routes are defined in 'route.ts' inside them.
      if (file.isDirectory()) {
        const routeFilePath = path.join(API_ROUTE_DIR, file.name, 'route.ts');
        try {
          const content = await fs.readFile(routeFilePath, 'utf8');
          const apiKeyVar = content.match(/process\.env\.([A-Z0-9_]+_API_KEY)/);
          
          if (apiKeyVar && apiKeyVar[1]) {
            const keyName = apiKeyVar[1];
            if (!definedKeys.has(keyName)) {
              console.error(`❌ Error in ${routeFilePath}: Uses API key "${keyName}" but it's not defined in .env.local.`);
              hasErrors = true;
            } else {
              console.log(`✅ OK: ${file.name} uses a valid API key (${keyName}).`);
            }
          }
        } catch (e) {
          // Could fail if route.ts doesn't exist, which is fine.
        }
      }
    }
  } catch (err) {
    console.error(`🔥 Fatal error reading .env.local or API directory: ${err.message}`);
    hasErrors = true;
  }
  
  if (!hasErrors) {
    console.log('--- ✅ API Route analysis passed! ---');
  } else {
     console.log('--- ❌ API Route analysis failed! ---');
  }
  
  return hasErrors;
}

async function runLinter() {
    console.log('\n--- 💅 Running ESLint & Prettier ---');
    try {
        await run('npm install -g eslint prettier');
        console.log('Linting source files...');
        const lintOutput = await run('eslint "src/**/*.{js,ts,tsx}" --fix');
        console.log(lintOutput || '✅ ESLint finished with no issues.');
        return false;
    } catch(e) {
        console.error('❌ Linter failed. Please check the errors above.');
        return true;
    }
}


async function main() {
  const routeErrors = await checkApiRoutes();
  const lintErrors = await runLinter();

  if (routeErrors || lintErrors) {
    console.error('\n🔥🔥 Analysis complete. Errors found. Please review the logs. 🔥🔥');
    process.exit(1); // Exit with error code
  } else {
    console.log('\n🎉🎉 Analysis complete. All checks passed! 🎉🎉');
  }
}

main();
