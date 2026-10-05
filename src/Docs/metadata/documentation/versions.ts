// src/Docs/data/versions.ts
export interface VersionEntry {
  version: string
  date: string // ISO: '2026-10-05'
  title?: string
  description: string
}

export const versions: VersionEntry[] = [
  {
    version: '0.1.0',
    date: '2026-10-05',
    title: 'versions.v010.title',
    description: 'versions.v010.description',
  },
]

export const latestVersion = versions[0]