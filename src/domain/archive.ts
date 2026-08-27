export type RecordSide = {
  id: string
  label: 'A' | 'B'
  title: string
  youtubeVideoId: string
}

export type ArchiveRecord = {
  id: string
  artist: string
  title: string
  rack: string
  originLabel?: string
  developmentPlaceholder?: boolean
  sides: RecordSide[]
}

export type DeckId = 'A' | 'B'
