// src/metadata/documentation/versions.ts
export interface VersionEntry {
  version: string
  date: string // ISO: '2026-10-05'
  title?: string
  description: string
}

export const versions: VersionEntry[] = [
  {
    version: '0.1.0',
    date: '2026-10-06',
    title: 'versions.v010.title',
    description: 'versions.v010.description',
  },
  {
    version: '0.1.1',
    date: '2026-10-06',
    title: 'versions.v011.title',
    description: 'versions.v011.description',
  },
  {
    version: '0.1.2',
    date: '2026-10-06',
    title: 'versions.v012.title',
    description: 'versions.v012.description',
  },
]

export const latestVersion = versions[0]