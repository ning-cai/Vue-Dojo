Vue.component("backpack-svg", {
  props: {
    color: {
      type: String,
      required: false
    }
  },
  template: `<div v-bind:class='color'><svg height='240pt' viewBox='-8 0 480 480' width='240pt' xmlns='http://www.w3.org/2000/svg'><path d='m344 304h-224c-4.417969 0-8 3.582031-8 8v128c0 4.417969 3.582031 8 8 8h224c4.417969 0 8-3.582031 8-8v-128c0-4.417969-3.582031-8-8-8zm-8.441406 16c-4.117188 36.421875-34.90625 63.957031-71.558594 64h-24v-8c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v8h-24c-36.652344-.042969-67.441406-27.578125-71.558594-64zm.441406 112h-208v-69.558594c16.433594 23.515625 43.308594 37.535156 72 37.558594h24v8c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-8h24c28.691406-.023438 55.566406-14.042969 72-37.558594zm0 0'  /><path   d='m424 288h-24v-128.800781c18.613281-3.828125 31.976562-20.199219 32-39.199219v-48c-.027344-22.082031-17.917969-39.972656-40-40h-96.800781c-3.828125-18.613281-20.199219-31.9765625-39.199219-32h-48c-19 .0234375-35.371094 13.386719-39.199219 32h-96.800781c-22.082031.027344-39.972656 17.917969-40 40v48c.023438 19 13.386719 35.371094 32 39.199219v128.800781h-24c-22.082031.027344-39.9726562 17.917969-40 40v64c.0273438 22.082031 17.917969 39.972656 40 40h24v8c.027344 22.082031 17.917969 39.972656 40 40h256c22.082031-.027344 39.972656-17.917969 40-40v-8h24c22.082031-.027344 39.972656-17.917969 40-40v-64c-.027344-22.082031-17.917969-39.972656-40-40zm-8-216v48c0 13.253906-10.746094 24-24 24h-40v-96h40c13.253906 0 24 10.746094 24 24zm-80-24v96h-16v-96zm-16 176h16v8c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0-16v-48h16v48zm-16-160v96h-144v-96zm-96-32h48c10.167969.011719 19.230469 6.417969 22.632812 16h-93.265624c3.402343-9.582031 12.464843-15.988281 22.632812-16zm-64 32v96h-16v-96zm-16 176h16v8c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0-16v-48h16v48zm-80-88v-48c0-13.253906 10.746094-24 24-24h40v96h-40c-13.253906 0-24-10.746094-24-24zm-8 296c-13.253906 0-24-10.746094-24-24v-64c0-13.253906 10.746094-24 24-24h24v112zm344 24c0 13.253906-10.746094 24-24 24h-256c-13.253906 0-24-10.746094-24-24v-280h32v48h-8c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h8v8c0 13.253906 10.746094 24 24 24s24-10.746094 24-24v-8h8c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-8v-48h144v48h-8c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h8v8c0 13.253906 10.746094 24 24 24s24-10.746094 24-24v-8h8c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-8v-48h32zm64-48c0 13.253906-10.746094 24-24 24h-24v-112h24c13.253906 0 24 10.746094 24 24zm0 0'  /></svg>
                <div>Icons made by
                    <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    is licensed by
                    <a
                      href="http://creativecommons.org/licenses/by/3.0/"
                      title="Creative Commons BY 3.0"
                      target="_blank"
                      >CC 3.0 BY</a
                    >
                </div>
            </div>`
});

Vue.component("test", {
  props: {
    colors: {
      type: Array,
      required: false
    }
  },
  template: `<div><ol><li v-for="color in colors" v-bind:colors="colors">{{color}}</li></ol></div>`
});

Vue.component("color-variant", {
  props: {
    colors: {
      type: Array,
      required: false
    }
  },
  template: `<div><ul><li v-for="color in colors" v-bind:colors="colors"><button class="badge badge-dark" v-on:click="onColorClick(color)">{{color}}</button></li></ul></div>`,
  methods: {
    onColorClick: function(color) {
      this.$emit("changecolor", color);
    }
  }
});

Vue.component("product-description", {
  props: {
    descriptions: {
      type: Array,
      required: true
    }
  },
  template: `<div><ul><li v-for="description in descriptions" v-bind:descriptions="descriptions">{{description}}</li><ul></div>`
});

const app = new Vue({
  el: "#app",
  data: {
    descriptions: ["100% Cotton", "Extra Warm", "Waterproof"],
    availableColors: ["black", "blue", "red", "purple"],
    colors: [{ id: 0, name: "black" }, { id: 1, name: "red" }],
    selectedColor: "black"
  },
  methods: {
    changecolor(color) {
      this.selectedColor = color;
    }
  }
});
