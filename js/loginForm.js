app.component('login-form', {
    
props: {
  submitF: { type: String, required: true },
    form: { type: Object, required: true }


  },

  
  methods: {
      submitForm() {
      this.$emit('submit-form');
    }
  },

template: /*html*/ `
<div class="auth-card">
  <h2>Access account</h2>

  <div class="auth-row">
    <label for="email">Email</label>
    <input id="email" type="email" v-model="form.email" placeholder="your.email@example.com">
  </div>

  <div class="auth-row">
    <label for="password">Password</label>
    <input id="password" type="password" v-model="form.password" placeholder="Enter password">
  </div>

  <div class="auth-actions btn-enter">
    <button class="btn-primary" @click="submitForm">{{ submitF }}</button>
    <a class="btn-secondary" href="signUp.html">Sign Up</a>
  </div>

</div>
`
});
