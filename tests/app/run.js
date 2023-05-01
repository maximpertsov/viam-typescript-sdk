#!/usr/bin/env node

import * as dotenv from "dotenv";
dotenv.config();

import * as esbuild from "esbuild";

const port = 8001;

await esbuild.serve(
  {
    servedir: "static",
    port,
  },
  {
    entryPoints: ["src/main.ts"],
    bundle: true,
    outfile: "static/main.js",
    define: {
      "process.env.INTEGRATION_TEST_ADDRESS": JSON.stringify(
        process.env["INTEGRATION_TEST_ADDRESS"]
      ),
      "process.env.INTEGRATION_TEST_SECRET": JSON.stringify(
        process.env["INTEGRATION_TEST_SECRET"]
      ),
    },
  }
);

console.log(`serving on http://localhost:${port}`);
