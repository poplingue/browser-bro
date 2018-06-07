import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HelloDeco from "./components/HelloDecorator.vue";
import SelectLanguage from "./components/SelectLanguage.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <hello-deco>
            <h2>test</h2>
        </hello-deco>
        <h1>Browser bro' language</h1>
        <select-language />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent,
        HelloDeco,
        SelectLanguage
    }
});
