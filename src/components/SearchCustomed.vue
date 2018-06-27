<!-- src/components/SearchCustomed.vue -->
<template>
    <div>
      <input
        @keyup="updateSearch"
        type="text"
        placeholder="Search">
    </div>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from "vue-property-decorator";
    import {EventValue} from "../elements/EventValue";

    @Component
    export default class SearchCustomed extends Vue{

      @Prop() search: string;

      updateSearch(e: EventValue){
        this.$emit('updateSearch', e.target.value)
      }

    }
</script>

<style>
</style>
