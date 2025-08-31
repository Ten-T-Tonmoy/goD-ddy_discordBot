import { readdir } from "fs/promises";
// read directory then usage ig
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// dir of this file
const COMMANDS_DIRECTORY = path.join(__dirname, "..", "commands");
// imagine cmd: "folder\subfolder\file.txt"