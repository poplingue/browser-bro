<!-- src/components/SelectCustom.vue -->
<template>
    <div>
        <select @change="updateCustom" name="custom" id="">
          <option selected disabled value="">pick a value</option>
          <option
            v-for="custom in customs"
            :value="custom.value">
            {{ custom.title }}
          </option>
        </select>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Emit, Watch} from "vue-property-decorator";
    import {custom}                            from "../elements/Custom";

    @Component
    export default class SelectCustom extends Vue{

      constructor(){
        super();
      }

      // get prop data from parent component
      @Prop() custom: string;
      @Prop() customs: custom[];

      // check update of customs' value & update it
      @Watch('customs')
      update(val: custom[], oldVal: custom[]) {
        this.customs = val;
      }

      created(){

      }

      // @Emit('updateCustom')
      updateCustom(v){
        // emit event from parent component
        this.$emit('updateCustom', v.target.value)
      }

    }
</script>

<style>
</style>
