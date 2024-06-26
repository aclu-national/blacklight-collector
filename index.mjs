#!/usr/bin/env node

import { exec } from 'child_process';

const url = process.argv.slice(2);
const file = 'example.ts';
console.log(`url: ${url}`);

exec(`npm ts-node ${file} ${url}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${file}: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error output from ${file}: ${stderr}`);
      return;
    }
    console.log("script run, output produced")
  });



