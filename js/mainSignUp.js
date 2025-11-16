const app = Vue.createApp({
  data() {
    return {
      submitF: "Sign Up",
       form: {
        email: "",
        name: "",
        password: "",
      }
    };
  },
  methods: {
   submitForm() {
      console.log("formulario enviado");
      window.location.href = './menu.html'; 
    }
  },
});
