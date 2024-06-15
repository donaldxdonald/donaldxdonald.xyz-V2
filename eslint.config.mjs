import { dndxdnd } from '@dndxdnd/eslint-config'
import next from '@next/eslint-plugin-next'
import { fixupPluginRules } from "@eslint/compat"

export default dndxdnd([
  {
    plugins: {
      '@next': fixupPluginRules(next)['configs']['core-web-vitals'],
    },
  },
])
