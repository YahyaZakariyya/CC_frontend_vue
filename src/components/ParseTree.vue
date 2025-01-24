<template>
  <div class="bg-white shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900 mb-4">Parse Tree</h3>
      <div class="overflow-auto max-h-[600px]">
        <div v-if="error" class="text-red-600 bg-red-50 p-4 rounded">
          {{ error }}
        </div>
        <div v-else-if="data" class="tree-container">
          <TreeNode :node="data.parse_tree" />
        </div>
        <div v-else class="text-gray-500 italic">Compile your code to see the parse tree</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import TreeNode from './TreeNode.vue'

export default {
  components: {
    TreeNode,
  },
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

<style scoped>
.tree-container {
  padding: 1rem;
  font-family: monospace;
}
</style>
