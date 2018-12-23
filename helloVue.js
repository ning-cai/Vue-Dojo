const app = new Vue({
  el: "#title",
  data: {
    message: "Hello Vue."
  }
});

const hover = new Vue({
  el: "#hover",
  data: {
    label: "current date is " + new Date().toLocaleDateString()
  }
});

const appIf = new Vue({
  el: "#app-if",
  data: {
    display: true
  }
});

const appFor = new Vue({
  el: "#app-for",
  data: {
    todos: [
      { text: "Finish Introduction of Vue.js" },
      { text: "Read Chapter 14 of a mind for Numbers" },
      { text: "Check Emails" }
    ]
  }
});

const appOn = new Vue({
  el: "#app-on",
  data: {
    message: "Hello Vue.js!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split(" ")
        .reverse()
        .join(" ");
    }
  }
});

Vue.component("shopping-list", {
  props: ["elem"],
  template: "<li>{{elem.item}}</li>"
});

const appComponent = new Vue({
  el: "#component",
  data: {
    label: "Grocery shopping list:",
    shoppingList: [
      { id: 0, item: "Chinakohl" },
      { id: 1, item: "Lauch" },
      { id: 2, item: "Hackfleisch" }
    ]
  }
});

// Review Vue.js Introduction
Vue.component("tool", { props: ["elem"], template: "<li>{{elem.name}}</li>}" });

const reviewApp = new Vue({
  el: "#app",
  data: {
    tools: [
      { id: 0, name: "VSCode" },
      { id: 1, name: "IntelliJ" },
      { id: 2, name: "Chrome" }
    ]
  },
  methods: {
    addFiddler: function() {
      this.tools.push({ id: 3, name: "Fiddler" });
    }
  }
});
