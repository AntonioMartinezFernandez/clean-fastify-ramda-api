import moduleAlias from 'module-alias';
import fs from 'fs';

export default function setupEnvironment(
  srcPath: string,
  envFile: string,
): void {
  moduleAlias.addAliases({
    '@': srcPath,
  });

  if (!fs.existsSync(envFile)) {
    throw new Error(`Environment file "${envFile}" not exists`);
  }
}
