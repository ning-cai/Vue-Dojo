const app = new Vue({
  el: "#app",
  data: {
    title: "Choose Your Faviourate Badge",
    className: "badge badge-primary",
    currentVariant: "primary",
    variants: [
      { id: 0, type: "primary" },
      { id: 1, type: "secondary" },
      { id: 2, type: "success" },
      { id: 3, type: "danger" },
      { id: 4, type: "warning" }
    ]
  },
  methods: {
    changeVariant: function(type) {
      this.className = "badge badge-" + type;
      this.currentVariant = type;
    }
  }
});
