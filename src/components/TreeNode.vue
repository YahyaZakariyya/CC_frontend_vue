<template>
  <div class="tree-node">
    <div
      class="node-content p-2 bg-gray-50 rounded border border-gray-200 hover:bg-gray-100 cursor-pointer"
      @click="toggleExpanded"
    >
      <span class="font-medium">{{ nodeType }}</span>
      <span v-if="nodeValue" class="ml-2 text-gray-600">: {{ nodeValue }}</span>
    </div>
    <div v-if="expanded" class="children ml-6 mt-2 border-l-2 border-gray-200 pl-4">
      <div v-for="(child, key) in children" :key="key" class="mt-2">
        <div v-if="isObject(child)" class="child-label text-sm text-gray-500 mb-1">{{ key }}:</div>
        <TreeNode v-if="isObject(child)" :node="child" class="mt-1" />
        <div v-else-if="Array.isArray(child)" class="child-label text-sm text-gray-500">
          {{ key }}:
          <div class="ml-4">
            <TreeNode v-for="(item, index) in child" :key="index" :node="item" class="mt-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const expanded = ref(true)

    const nodeType = computed(() => props.node.type)

    const nodeValue = computed(() => {
      if (props.node.value !== undefined) return props.node.value
      if (props.node.name !== undefined) return props.node.name
      if (props.node.identifier !== undefined) return props.node.identifier
      return null
    })

    const children = computed(() => {
      const result = {}
      Object.entries(props.node).forEach(([key, value]) => {
        if (key !== 'type' && key !== 'value' && key !== 'name' && key !== 'identifier') {
          if (isObject(value) || Array.isArray(value)) {
            result[key] = value
          }
        }
      })
      return result
    })

    const isObject = (item) => {
      return item && typeof item === 'object' && !Array.isArray(item)
    }

    const toggleExpanded = () => {
      expanded.value = !expanded.value
    }

    return {
      expanded,
      nodeType,
      nodeValue,
      children,
      isObject,
      toggleExpanded,
    }
  },
}
</script>
