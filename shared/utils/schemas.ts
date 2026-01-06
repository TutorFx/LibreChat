import { z } from 'zod'
import type { AiProvider } from './constants'
import { AI_PROVIDERS } from './constants'

export const modelValidatorSchema = z.string()
  .refine(
    value =>
      (Object.values(AI_PROVIDERS) as string[]).some(provider =>
        value.startsWith(`${provider}/`)
      ),
    {
      message: 'Invalid model'
    }
  )
  .transform(
    value =>
      value as `${AiProvider}/${string}`
  )
