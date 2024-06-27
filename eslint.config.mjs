import { GLOB_TS, GLOB_TSX, dndxdnd } from '@dndxdnd/eslint-config'
import { fixupPluginRules } from '@eslint/compat'
// @ts-expect-error types
import nextPlugin from '@next/eslint-plugin-next'
import stylistic from '@stylistic/eslint-plugin'

export default dndxdnd([
  stylistic.configs['recommended-flat'],
  {
    files: [GLOB_TS, GLOB_TSX],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...fixupPluginRules(nextPlugin).configs['core-web-vitals']['rules'],
      'import/no-default-export': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      }],
    },
  },
])
