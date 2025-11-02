/**
 * Search result types for Fumadocs Orama search
 * These types align with Fumadocs' search response format
 */

export interface SearchResult {
  id: string
  url: string
  title: string
  type: 'page' | 'heading' | 'text'
  content: string
}

// Re-export for backwards compatibility
export type SortedResult = SearchResult
