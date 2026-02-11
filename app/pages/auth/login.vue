<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['not-authed'],
  colorMode: 'dark'
})

useHead({
  meta: [
    {
      name: 'theme-color',
      content: '#000'
    }
  ]
})
</script>

<template>
  <AuthPage>
    <UCard class="bg-black/50 ring-0 backdrop-blur-xl">
      <AuthLogin @submit="() => { navigateTo(`/`) }">
        <template #description>
          <div class="grid grid-flow-row place-items-center gap-2">
            <!-- Icon removed -->

            <h1 class="text-3xl font-semibold text-default">
              Bem-vindo ao <span class="text-primary">LibreChat</span>
            </h1>

            <p class="text-sm text-default">
              Entre com seu e-mail e senha
            </p>
          </div>
        </template>
      </AuthLogin>
    </UCard>
  </AuthPage>
</template>
