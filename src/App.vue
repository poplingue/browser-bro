<!-- src/components/App.vue -->
<template>
  <section class="hero is-info is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">
        <h1 class="title">{{title}}</h1>
        <!--<h2 class="subtitl:e">-->
          <!--$this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.-->
        <!--</h2>-->
        <section class="box">
          <SelectCustom
            @updateCustom="updateCustom"
            :customs="customs"
            :custom="custom">
          </SelectCustom>
        </section>
        <section class="box">
          <SearchCustomed
            @updateSearch="updateSearch"
            :search="search">
          </SearchCustomed>
        </section>
          <!--<div>Custom value = {{custom || "None" }}</div>-->
      </div>
    </div>
  </div>
  </section>
</template>

<script lang="ts">
  import {Vue, Component, Provide, Emit, Watch} from "vue-property-decorator";
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

    @Watch('search')
    goLycos(val: string, oldVal: string) {
      console.log('GO LYCOS');
    }
  }
</script>

<style>
  html,body {
    font-family: 'Open Sans', serif;
  }
  .hero.is-info {
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .hero .subtitle {
    padding: 3rem 0;
    line-height: 1.5;
  }
</style>
