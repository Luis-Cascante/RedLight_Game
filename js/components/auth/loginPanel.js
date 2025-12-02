app.component('login-panel', {
  props: {
    selectedView: {
      type: String,
      default: "lobby",
    }
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {

    updateView(selectedView) {
      this.$emit("selected-view", selectedView);
    },

    login() {
      this.errorMessage = "";

      if (!this.email || !this.password) {
        this.errorMessage = "Please fill in all fields";
        return;
      }

      // Valida el usuario mediante la funcion en main.js
      const user = this.$root.validateUser(this.email, this.password);

      // Si no existe el usuario, muestra error
      if (!user) {
        this.errorMessage = "Incorrect email or password, please try again";
        return;
      }

      // Si el usuario existe, avanza al menu
      this.updateView('main-menu');
    }
  },

  template: /*html*/`
        <div class="auth-card">
  <h2>Access account</h2>

  <div class="auth-row">
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="your.email@example.com" v-model="email">
  </div>

  <div class="auth-row">
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Enter password" v-model="password">
  </div>

  <div v-if="errorMessage" style="color: red; text-align: center; margin: 12px 0;">
    {{ errorMessage }}
  </div>

  <div class="auth-actions btn-enter">
    <button v-on:click="login()" class="btn-primary">Login</button>
    <button v-on:click="updateView('signup')" class="btn-secondary">Sign Up</button>
  </div>

</div>
    `
});