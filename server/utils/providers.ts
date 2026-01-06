export function getProvider<T extends ValueOf<typeof AI_PROVIDERS>>(provider: T) {
  if (provider === AI_PROVIDERS.OLLAMA)
    return useOllama()
  if (provider === AI_PROVIDERS.GEMINI)
    return useGemini()
  else throw new Error('Invalid provider')
}
