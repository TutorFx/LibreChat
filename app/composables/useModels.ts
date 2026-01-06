export function useModels() {
  const { gemini } = useFeatures()
  const models = [
    'ollama/qwen3:8b',

    ...gemini
      ? [
          'google/gemini-3-flash-preview',
          'google/gemini-flash-latest'
        ]
      : []
  ]

  const model = useCookie<string>('model', { default: () => models[0] as string })

  if (!models.includes(model.value)) {
    model.value = models[0] as string
  }

  return {
    models,
    model
  }
}
