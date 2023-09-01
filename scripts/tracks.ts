
/**
 * Inspired by https://github.com/wooorm/wooorm.github.io
 */

import { AccessToken, Page, SpotifyApi, Track as SpotifyTrack } from '@spotify/web-api-ts-sdk'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { Buffer } from 'node:buffer'
import fs from 'node:fs/promises'
import process from 'node:process'
import { Track } from '../app/(gallery)/listening/type'

dotenv.config()

const ref = process.env.SPOT_R_TOKEN
const cId = process.env.SPOT_C_ID
const cSecret = process.env.SPOT_C_SECRET

if (!ref) throw new Error('Missing `SPOT_R_TOKEN`')
if (!cId) throw new Error('Missing `SPOT_C_ID`')
if (!cSecret) throw new Error('Missing `SPOT_C_SECRET`')

const outUrl = new URL('../content/json/tracks.json', import.meta.url)

async function main() {
  const parameters = new URLSearchParams()
  parameters.append('grant_type', 'refresh_token')
  parameters.append('refresh_token', ref!)

  // Get token.
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' + Buffer.from(cId + ':' + cSecret).toString('base64'),
    },
    body: parameters,
  })
  const tokenData = (await tokenResponse.json()) as AccessToken

  const spotifyClient = SpotifyApi.withAccessToken(cId!, tokenData, {
    fetch: (req, init) => fetch(req as any, init as any) as any,
  })

  const tracksRes = (await spotifyClient.currentUser.topItems('tracks')) as any as Page<SpotifyTrack>

  const artists = tracksRes.items.map((d): Track => {
    return {
      name: d.name,
      url: d.uri,
      authorName: d.name,
      album: {
        name: d.album.name,
        url: d.album.uri,
        image: d.album.images[0],
      },
    }
  })

  await fs.mkdir(new URL('./', outUrl), { recursive: true })
  await fs.writeFile(outUrl, JSON.stringify(artists, null, 2) + '\n')
  console.log('--------  tracks generated  --------')
}

main()
