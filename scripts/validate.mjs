import { resolve } from 'node:path';
import { readdir } from 'node:fs/promises';
import { exit } from 'node:process';

import { parse } from 'tsconfck';

try {
  const path = resolve(process.cwd(), 'packages');
  const packages = await readdir(path);
  console.log(`Validating tsconfig for packages: ${packages.join(',')}`);

  for await (const { tsconfigFile } of packages.map(pkg =>
    parse(resolve(path, pkg, 'tsconfig.json'), {
      ignoreNodeModules: true
    })
  )) {
    console.info(`- ${tsconfigFile} ✅`);
  }
  console.info('All configurations are valid.');
  exit(0);
} catch (err) {
  console.error(err);
  exit(1);
}
