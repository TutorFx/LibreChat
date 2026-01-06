import { createGoogleGenerativeAI } from '@ai-sdk/google'

let gemini: ReturnType<typeof createGoogleGenerativeAI>

export function useGemini() {
  if (!gemini) {
    const config = useRuntimeConfig()
    gemini = createGoogleGenerativeAI({
      apiKey: config.gemini.apiKey
    })
  }

  return gemini
}
