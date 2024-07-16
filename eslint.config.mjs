import { GLOB_TS, GLOB_TSX, dndxdnd } from '@dndxdnd/eslint-config'
import { fixupPluginRules } from '@eslint/compat'
// @ts-expect-error types
import nextPlugin from '@next/eslint-plugin-next'

export default dndxdnd([
  {
    files: [GLOB_TS, GLOB_TSX],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...fixupPluginRules(nextPlugin).configs['core-web-vitals']['rules'],
      'import/no-default-export': 'off',
    },
  },
])
