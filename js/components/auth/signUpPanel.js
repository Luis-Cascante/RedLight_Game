app.component('sign-up-panel', {
    props: {
      selectedView: {
            type: String,
            default: "lobby",
        }
    },
    methods: {
        updateView(selectedView) {
            this.$emit("selected-view", selectedView);
        },
    },
    template: /*html*/`
        <div class="auth-card">
      <h2>Create account</h2>

      <div class="auth-row">
        <label for="username">User Name</label>
        <input id="username" type="text" placeholder="Enter your name">
      </div>

      <div class="auth-row">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="your.email@example.com">
      </div>

      <div class="auth-row">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Create a password">
      </div>

      <div class="auth-actions">
        <button v-on:click="updateView('main-menu')"class="btn-primary">Sign Up</button>
        <button v-on:click="updateView('login')" class="btn-secondary">Login</button>
      </div>

    </div>
    `
});