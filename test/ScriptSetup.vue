<template>
  <span>{{ foo }}</span>
</template>

<script setup lang="ts">
const foo = 'bar';

defineProps<{
  count: number;
}>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>
