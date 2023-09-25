// src/lib/migration/types.ts

// lib/migration/types.ts
interface MigrationService {
  migrate(): Promise<void>;
  createEmptyFile(): Promise<void>;
}
