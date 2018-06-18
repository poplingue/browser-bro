<!-- src/components/SearchCustomed.vue -->
<template>
    <div>
      <input type="text" placeholder="Search">
    </div>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class SearchCustomed extends Vue{

      constructor(){
        super();


      }

    }
</script>

<style>
</style>
