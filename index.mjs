#!/usr/bin/env node

import { exec } from 'child_process';

const url = process.argv.slice(2);
const file = 'example.ts';
console.log(`url: ${url}`);

// Use ts-node to run the TypeScript file
exec(`npm ts-node ${file}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});