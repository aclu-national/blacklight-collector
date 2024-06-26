#!/usr/bin/env node

// import { exec } from 'child_process';

const url = process.argv.slice(2);
const file = 'example.ts';
console.log(`url: ${url}`);

const child = spawn('npx', ['ts-node', file], { stdio: 'inherit' });

child.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

// exec(`npx ts-node example.ts ${url}`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error executing ${file}: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Error output from ${file}: ${stderr}`);
//       return;
//     }
//     console.log("script run, output produced")
//   });



