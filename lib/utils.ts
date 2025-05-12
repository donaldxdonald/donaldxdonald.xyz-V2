import { remove } from 'diacritics'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// string.js slugify drops non ascii chars so we have to
// use a custom implementation here
// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001F]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g

export const slugify = (str: string): string => {
  return (
    remove(str)
      // Remove control characters
      .replace(rControl, '')
      // Replace special characters
      .replace(rSpecial, '-')
      // Remove continuos separators
      .replace(/-{2,}/g, '-')
      // Remove prefixing and trailing separtors
      .replace(/^-+|-+$/g, '')
      // ensure it doesn't start with a number (#121)
      .replace(/^(\d)/, '_$1')
      // lowercase
      .toLowerCase()
  )
}

export function groupBy<T>(arr: T[], predicate: (item: T) => string): Record<string, T[]> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return arr.reduce((r, v, i, a, k = predicate(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
