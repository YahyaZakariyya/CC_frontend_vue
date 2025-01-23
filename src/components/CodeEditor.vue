<template>
  <div class="bg-white shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <div class="flex flex-col space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Code Editor</h3>
          <div class="flex space-x-4">
            <button
              @click="loadSample"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Load Sample
            </button>
            <button
              @click="compile"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Compile & Run
            </button>
          </div>
        </div>
        <div id="editor" class="h-[400px] border rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue'
import * as monaco from 'monaco-editor'

export default {
  emits: ['compile'],
  setup(props, { emit }) {
    let editor = null

    const sampleCode =
      'gimme x = 5;\ngimme you = 78;\nyo (x < 10) {\n    say "x is less than 10";\n}'

    onMounted(() => {
      editor = monaco.editor.create(document.querySelector('#editor'), {
        value: sampleCode,
        language: 'javascript',
        theme: 'vs',
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: true,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        padding: { top: 10 },
      })
    })

    onBeforeUnmount(() => {
      if (editor) {
        editor.dispose()
      }
    })

    const compile = () => {
      const code = editor.getValue()
      emit('compile', code)
    }

    const loadSample = () => {
      editor.setValue(sampleCode)
    }

    return {
      compile,
      loadSample,
    }
  },
}
</script>
