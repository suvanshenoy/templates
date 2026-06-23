import { execSync } from "node:child_process";
import { formatGhOutput } from "@/utils";

export const repo = `suvanshenoy/${formatGhOutput(execSync("gh repo view --json name"))?.name}`;
export const apiUrl = `/repos/${repo}/deployments`;
export const ghApiCmd = 'gh api -H "Accept: application/vnd.github+json"';
