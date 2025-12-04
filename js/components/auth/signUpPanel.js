app.component('sign-up-panel', {
  props: {
    selectedView: {
      type: String,
      default: "lobby",
    }
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    updateView(selectedView) {
      this.$emit("selected-view", selectedView);
    },

    async signUp() {
      this.errorMessage = "";

      if (!this.name || !this.email || !this.password) {
        this.errorMessage = "Please fill in all fields";
        return;
      }

      if (this.name.length < 3) {
        this.errorMessage = "Username must be at least 3 characters";
        return;
      }

      if (!this.email.includes('@') || !this.email.includes('.')) {
        this.errorMessage = "Invalid email address";
        return;
      }

      if (this.password.length < 6) {
        this.errorMessage = "Password must be at least 6 characters";
        return;
      }

      const result = await this.$root.registerUser(this.name, this.email, this.password);

      if (result.error) {
        this.errorMessage = result.error;
        return;
      }
      // Registra el usuario mediante la funcion en main.js 
      
      this.updateView('login');
    }
  },
  template: /*html*/`
        <div class="auth-card">
      <h2>Create account</h2>

      <div class="auth-row">
        <label for="username">User Name</label>
        <input id="username" type="text" placeholder="Enter your name" v-model="name">
      </div>

      <div class="auth-row">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="your.email@example.com" v-model="email">
      </div>

      <div class="auth-row">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Create a password" v-model="password">
      </div>

      <div v-if="errorMessage" style="color: purple; text-align: center; margin: 12px 0;">
        {{ errorMessage }}
      </div>

      <div class="auth-actions">
        <button v-on:click="signUp()" class="btn-primary">Sign Up</button>
        <button v-on:click="updateView('login')" class="btn-secondary">Login</button>
      </div>

    </div>
    `
});