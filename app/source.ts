import { loader } from 'fumadocs-core/source'
import { blog as blogCollection, weekly as weeklyCollection } from '@/.source'
import type { InferPageType } from 'fumadocs-core/source'

// Blog loader
export const blogSource = loader({
  baseUrl: '/blog',
  source: blogCollection.toFumadocsSource(),
})

// Weekly loader
export const weeklySource = loader({
  baseUrl: '/weekly',
  source: weeklyCollection.toFumadocsSource(),
})

// Export helper functions
export const getBlogs = () => blogSource.getPages()

export const getWeeklies = () => weeklySource.getPages()

// Export types
export type BlogPost = InferPageType<typeof blogSource>
export type WeeklyPost = InferPageType<typeof weeklySource>
