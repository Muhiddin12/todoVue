const app = Vue.createApp({
  data() {
    return {
      items: [],
      enteredValue: "",
    };
  },

  methods: {
    addTodo() {
      if (this.enteredValue == "") {
        alert("Input is empty");
      } else {
        this.items.unshift(this.enteredValue);
        this.enteredValue = "";
      }
    },
    clearList() {
      this.items = [];
    },
  },
});

//  bu darsda todo list yasalgan

app.mount("#app");
