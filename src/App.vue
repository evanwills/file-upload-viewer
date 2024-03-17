<template>
  <FileUploadViewer id="cool-files" label="my files">
    <template v-slot:headEmpty>
      <h2>File upload header</h2>
    </template>
  </FileUploadViewer>
</template>

<script setup lang="ts">
import FileUploadViewer from './components/FileUploadViewer.vue'
</script>

<style scoped>
</style>
