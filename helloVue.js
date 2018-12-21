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
