app.component('login-panel', {
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
  <h2>Access account</h2>

  <div class="auth-row">
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="your.email@example.com">
  </div>

  <div class="auth-row">
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Enter password">
  </div>

  <div class="auth-actions btn-enter">
    <button v-on:click="updateView('main-menu')" class="btn-primary" >tew</button>
    <button v-on:click="updateView('signup')" class="btn-secondary">Sign Up</button>
  </div>

</div>
    `
});