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
  {
    version: '0.1.8',
    date: '2026-10-15',
    title: 'versions.v018.title',
    description: 'versions.v018.description',
  },
  {
    version: '0.1.9',
    date: '2026-10-19',
    title: 'versions.v019.title',
    description: 'versions.v019.description',
  },
  {
    version: '0.1.10',
    date: '2026-10-19',
    title: 'versions.v0110.title',
    description: 'versions.v0110.description',
  },
  {
    version: '0.1.12',
    date: '2026-10-21',
    title: 'versions.v0112.title',
    description: 'versions.v0112.description',
  },
]

export const latestVersion = versions[0]