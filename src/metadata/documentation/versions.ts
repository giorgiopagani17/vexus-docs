// src/metadata/documentation/versions.ts
export interface VersionEntry {
  version: string
  date: string // ISO: '2026-10-05'
  title?: string
  description: string
}

export const versions: VersionEntry[] = [
  {
    version: '0.1.7',
    date: '2026-10-09',
    title: 'versions.v017.title',
    description: 'versions.v017.description',
  },
]

export const latestVersion = versions[0]