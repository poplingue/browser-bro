<!-- src/components/SearchCustomed.vue -->
<template>
    <div>
      <input
        @change="search"
        type="text"
        placeholder="Search">
    </div>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class SearchCustomed extends Vue{

      search(){

      }

    }
</script>

<style>
</style>
