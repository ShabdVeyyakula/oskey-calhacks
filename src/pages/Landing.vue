<template>
  <div class="landing-page">
    <header>
      <h1>Welcome to Our Website!</h1>
    </header>
    
    <section class="intro">
      <p>Discover the best of our products and services.</p>
    </section>

    <section class="cta">
      <button @click="navigateToSignup">Sign Up Now</button>
    </section>
    
    <footer>
      <p>© 2023 Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  methods: {
    navigateToSignup() {
      // Logic to navigate to the sign-up page.
      // This can be a simple window.location change, or using Vue Router's this.$router.push() method.
      console.log('Navigate to Signup Page');
    }
  }
}
</script>

<style scoped>
.landing-page {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

header, .intro, .cta, footer {
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>
