"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function checkInstallation(command) {
    try {
        const output = (0, child_process_1.execSync)(command, { encoding: "utf8" }).trim();
        return output;
    }
    catch (error) {
        return "NOT INSTALLED";
    }
}
console.log("=== TypeScript Environment Check ===");
const nodeVersion = checkInstallation("node -v");
const npmVersion = checkInstallation("npm -v");
const tscVersion = checkInstallation("tsc -v");
const cypressVersion = checkInstallation("npx cypress --version");
console.log(`Node.js version: ${nodeVersion}`);
console.log(`npm version: ${npmVersion}`);
console.log(`TypeScript (tsc) version: ${tscVersion}`);
console.log(`${cypressVersion}`);
