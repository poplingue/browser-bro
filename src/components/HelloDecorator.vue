<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="test">TEST</button>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";

  @Component
  export default class HelloDecorator extends Vue {
    @Prop() name!: string;
    @Prop() initialEnthusiasm!: number;

    enthusiasm = this.initialEnthusiasm;

    test() {
      console.log('test');
      this.enthusiasm++;
    }

    get exclamationMarks(): string {
      return 'Test'
    }
  }
</script>

<style>
  .greeting {
    font-size: 20px;
  }

  h1 {
    color: #a91;
  }
</style>
