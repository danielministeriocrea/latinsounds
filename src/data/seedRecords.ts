import type { ArchiveRecord } from '../domain/archive'

// Development-only placeholders. Replace with verified archive records before public research use.
export const seedRecords: ArchiveRecord[] = [
  {
    id: 'dev-record-a',
    artist: 'Development Artist A',
    title: 'Placeholder Record 001',
    rack: 'A–F',
    developmentPlaceholder: true,
    sides: [{ id: 'dev-record-a-side-a', label: 'A', title: 'Side A', youtubeVideoId: 'M7lc1UVf-VE' }],
  },
  {
    id: 'dev-record-g',
    artist: 'Development Artist G',
    title: 'Placeholder Record 002',
    rack: 'G–L',
    developmentPlaceholder: true,
    sides: [
      { id: 'dev-record-g-side-a', label: 'A', title: 'Side A', youtubeVideoId: 'M7lc1UVf-VE' },
      { id: 'dev-record-g-side-b', label: 'B', title: 'Side B', youtubeVideoId: 'M7lc1UVf-VE' },
    ],
  },
  {
    id: 'dev-record-m',
    artist: 'Development Artist M',
    title: 'Placeholder Record 003',
    rack: 'M–R',
    developmentPlaceholder: true,
    sides: [{ id: 'dev-record-m-side-a', label: 'A', title: 'Side A', youtubeVideoId: 'M7lc1UVf-VE' }],
  },
]
