<template>
  <div class="min-h-screen bg-gray-100">
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="flex flex-col space-y-6">
          <CodeEditor @compile="handleCompile" />
          <div v-if="compileResult" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ParseTree :data="compileResult" />
            <OutputDisplay :data="compileResult" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import CodeEditor from '@/components/CodeEditor.vue'
import ParseTree from '@/components/ParseTree.vue'
import OutputDisplay from '@/components/OutputDisplay.vue'

export default {
  components: {
    CodeEditor,
    ParseTree,
    OutputDisplay,
  },
  setup() {
    const compileResult = ref(null)

    const handleCompile = async (code) => {
      try {
        const response = await fetch('http://127.0.0.1:5000/compile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        })
        const data = await response.json()
        compileResult.value = data
      } catch (error) {
        console.error('Compilation error:', error)
        // You might want to handle this error in the UI
      }
    }

    return {
      compileResult,
      handleCompile,
    }
  },
}
</script>
