<template>
  <div class="bg-white shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900 mb-4">Output</h3>
      <div class="overflow-auto max-h-96">
        <div v-if="error" class="text-red-600 p-4 bg-red-50 rounded">
          {{ error }}
        </div>
        <div v-else-if="data && data.output" class="space-y-2">
          <div v-for="(line, index) in data.output" :key="index" class="p-2 bg-gray-50 rounded">
            {{ line }}
          </div>
        </div>
        <div v-else class="text-gray-500 italic">Compile your code to see the output</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const error = computed(() => {
      return props.data?.error
    })

    return {
      error,
    }
  },
}
</script>
