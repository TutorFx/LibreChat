export const DEFAULT_FEATURES = {
  database: false,
  redis: false,
  ollama: false,
  kokoro: false,
  gemini: false,
  audio: false
}

export const AI_PROVIDERS = {
  OLLAMA: 'ollama',
  GEMINI: 'google'
} as const

export type AiProvider = typeof AI_PROVIDERS[keyof typeof AI_PROVIDERS]
