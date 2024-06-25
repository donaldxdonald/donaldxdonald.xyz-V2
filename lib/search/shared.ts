export interface SortedResult {
  id: string
  url: string
  title: string
  type: 'page' | 'heading' | 'text'
  content: string
  matched: string
}