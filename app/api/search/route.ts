import { createFromSource } from 'fumadocs-core/search/server'
import { createTokenizer } from '@orama/tokenizers/mandarin'
import { stopwords as mandarinStopwords } from '@orama/stopwords/mandarin'
import { weeklySource } from '../../source'

export const { staticGET: GET } = createFromSource(weeklySource, {
  tokenizer: createTokenizer({
    stopWords: mandarinStopwords,
    language: 'mandarin',
  }),
})
