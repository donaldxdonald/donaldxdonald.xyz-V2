/**
 * Inspired by https://github.com/wooorm/wooorm.github.io
 */

import { Buffer } from 'node:buffer'
import fs from 'node:fs/promises'
import process from 'node:process'
import { configDotenv } from '@dotenvx/dotenvx'
import { AccessToken, Page, SpotifyApi, Track as SpotifyTrack } from '@spotify/web-api-ts-sdk'
import { Track } from '../app/(gallery)/listening/type'

configDotenv()

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

  const spotifyClient = SpotifyApi.withAccessToken(cId!, tokenData)

  const tracksRes = (await spotifyClient.currentUser.topItems('tracks', 'medium_term')) as Page<SpotifyTrack>

  const artists = tracksRes.items.map((d): Track => {
    return {
      name: d.name,
      url: d.uri,
      authorName: d.artists.map(v => v.name).join(', '),
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
