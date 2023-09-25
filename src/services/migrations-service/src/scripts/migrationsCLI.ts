// src/services/migrations-service/src/scripts/migrationsCLI.ts

import Liftoff from 'liftoff';
import path from 'path';
import fs from 'fs';

const KyselyCLI = new Liftoff({
  name: 'kysely-cli',
  // processTitle: 'kyselyCli',
  // moduleName: 'kyselyCli',
  // configName: 'kyselyClifile',
  extensions: {
    '.ts': null,
  },
  //  v8flags: ['--harmony'],
});

export function createMigration(env) {
  const migrationName = process.argv[2];

  if (!migrationName) {
    console.error('Please provide a migration name.');
    process.exit(1);
  }

  const filename = `${new Date().toISOString().replace(/[:.-]/g, '')}_${migrationName}.ts`;
  const filePath = path.join(__dirname, '../../../database/migrations', filename);

  // Read the stub from the migrationStub.ts file
  const migrationStubPath = path.join(__dirname, 'migrationStub.ts');
  const migrationStub = fs.readFileSync(migrationStubPath, 'utf8');

  fs.writeFileSync(filePath, migrationStub);
  console.log(`Migration file created: ${filename}`);
}

// This is the main function that handles the command line arguments and determines what to do
function handleArguments(env) {
  // For now, we only have logic for creating migrations
  // Later, you can expand this with a switch-case structure for different commands like `migrate-latest` and `down`.
  createMigration(env);
}

// This is where Liftoff is used to prepare the environment and then execute the CLI logic
export function runCLI() {
  KyselyCLI.prepare({}, handleArguments);
}
