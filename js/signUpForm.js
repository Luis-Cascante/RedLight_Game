app.component('signup-form', {
props: {
    
    form: { type: Object, required: true }

  },
 
  methods: {  
     submitForm() {
      this.$emit('submit-form');
    }
  },

 template: /*html*/ `


<section> 
  <h2>CREATE ACCOUNT</h2>

  <div>
    <label >User Name</label>
    <input type="text" v-model="form.name" placeholder="Enter your name" required>
  </div> 

  <div>
    <label>Email </label>
    <input type="email" v-model="form.email" placeholder="your.email@example.com" required>
  </div>

  <div>
    <label>Password</label>
    <input type="password" v-model="form.password" placeholder="Create a password" required>
  </div>


  <div>

    <label>Farm Name</label>
    <input type="text" v-model="form.farmName" placeholder="Name your farm" required>

  </div>

    <div> 

    <button @click="submitForm" type="button" class="button-form">Sign Up</button>
    <a href="login.html">Login</a>

</div>
</section>
 `
});
