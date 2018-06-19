<!-- src/components/App.vue -->
<template>
  <div>
    <h1>{{title}}</h1>
    <SelectCustom
      @updateCustom="updateCustom"
      :customs="customs"
      :custom="custom">
    </SelectCustom>
    <SearchCustomed
      @updateSearch="updateSearch"
      :search="search">
    </SearchCustomed>
    <!--<div>Custom value = {{custom || "None" }}</div>-->
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Provide, Emit} from "vue-property-decorator";
  import SelectCustom                    from "./components/SelectCustom";
  import SearchCustomed                  from "./components/SearchCustomed";
  import Customs                         from "./Services/Customs";
  import {custom}                        from "./elements/Custom";

  @Component({
    components: {
      SelectCustom,
      SearchCustomed
    }
  })

  export default class App extends Vue {

    title: string = "Browser bro'";

    // send data to child component
    @Provide() customs: custom[] = [];
    @Provide() custom: string = "";
    @Provide() search: string = "";

    async created(){

      this.customs = await new Customs().initDatas();

    }

    @Emit()
    updateCustom(value: string) {
      // update custom value based on select child component
      this.custom = value;
    }


    @Emit()
    updateSearch(value: string) {
      this.search = value;
    }
  }
</script>

<style>
  h1 {
    color: #f55;
  }
</style>
