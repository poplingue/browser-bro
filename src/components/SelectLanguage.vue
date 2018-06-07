<!-- src/components/SelectLanguage.vue -->
<template>
    <div>
        <select name="language" id="">
            <option value="webpack">webpack</option>
            <option value="js">js</option>
            <option value="css">css</option>
            <option value="python">python</option>
        </select>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props: [],
        data() {
            return {}
        },
        methods: {
            trySomething(){

            }
        },
        computed: {}
    });
</script>

<style>
</style>
