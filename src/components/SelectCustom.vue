<!-- src/components/SelectCustom.vue -->
<template>
    <div>
        <select @change="updateCustom" name="custom" id="">
            <option value="webpack">webpack</option>
            <option value="js">js</option>
            <option value="css">css</option>
            <option value="python">python</option>
        </select>
      <div>{{custom}}</div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Emit} from "vue-property-decorator";

    @Component
    export default class SelectCustom extends Vue{

      // get prop data from parent component
      @Prop()
      custom: string

      // @Emit('updateCustom')
      updateCustom(v){
        // emit event from parent component
        this.$emit('updateCustom', v.target.value)
      }

    }
</script>

<style>
</style>
