<template>
  <span>{{ foo }}</span>
  <span>test</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const foo = 'bar';
    return { foo };
  },

  name: 'Test',
});
</script>
