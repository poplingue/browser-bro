<!-- src/components/App.vue -->
<template>
  <div>
    <h1>{{title}}</h1>
    <SelectCustom @updateCustom="updateCustom" v-model="custom"></SelectCustom>
    <SearchCustomed></SearchCustomed>
    <div>Custom value = {{custom || "None" }}</div>
  </div>
</template>

<script lang="ts">
    import {Vue, Component, Provide, Emit } from "vue-property-decorator";
    import SelectCustom from "./components/SelectCustom";
    import SearchCustomed from "./components/SearchCustomed";

    @Component({
      components: {
        SelectCustom,
        SearchCustomed
      }
    })
    export default class App extends Vue {
      title: string = "Browser bro'"

      // send data to child component
      @Provide() custom: string = ""

      @Emit()
      updateCustom(value: string){
        // update custom value based on select child component
        this.custom = value
      }
    }
</script>

<style>
    h1 {
        color: #f55;
    }
</style>
