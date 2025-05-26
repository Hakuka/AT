import { execSync } from 'child_process';

function checkInstallation(command: string): string {
  try {
    const output = execSync(command, { encoding: 'utf8' }).trim();
    return output;
  } catch (error) {
    return 'NOT INSTALLED';
  }
}

const nodeVersion = checkInstallation('node -v');
const npmVersion = checkInstallation('npm -v');
const tscVersion = checkInstallation('tsc -v');
const cypressVersion = checkInstallation('npx cypress --version');

console.log('=== Environment Check ===');
console.log(`Node.js version: ${nodeVersion}`);
console.log(`npm version: ${npmVersion}`);
console.log(`TypeScript (tsc) version: ${tscVersion}`);
console.log(`${cypressVersion}`);
