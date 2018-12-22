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
