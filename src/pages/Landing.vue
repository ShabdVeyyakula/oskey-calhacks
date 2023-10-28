<template>
  <div class="landing-page">
    <div class="topbar">
      <h1>OsKey</h1>
      <div>
        <button class="login">Login</button>
        <button class="signup">SignUp</button>
      </div>
    </div>
    <h1 class="title">
      Transform <br />
      audio to sheet music
    </h1>
    <p class="tagline">Transforming Audio to Sheet Music with Precision AI.</p>
    <div class="button-container">
      <button class="demo">Try Demo</button>
      <button class="sign">Sign In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  methods: {
    navigateToSignup() {
      // Logic to navigate to the sign-up page.
      // This can be a simple window.location change, or using Vue Router's this.$router.push() method.
      console.log("Navigate to Signup Page");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Raleway:wght@300&display=swap");

.landing-page {
  text-align: center;
  background-image: url("../assets/oskeybackground.png") no-repeat center center
    fixed;
  text-align: center;
  font-family: "Raleway", serif;
}

.topbar {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

.title {
  font-size: 4.5em;
}

.login {
  background-color: transparent;
  border-color: transparent;
  font-size: 20px;
  margin-right: 20px;
}

.signup {
  border-color: transparent;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  margin-right: 5px;
}

.tagline {
  font-size: 20px;
  font-weight: 300;
}

.demo {
  height: 50px;
  width: 175px;
  border-radius: 10px;
  border-color: transparent;
  color: white;
  background-color: black;
  margin-right: 30px;
  margin-left: 3%;
}

.sign {
  height: 50px;
  width: 175px;
  border-radius: 10px;
  border-color: black;
  color: black;
  background-color: transparent;
  margin-right: 45px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;

}

header,
.intro,
.cta,
footer {
  margin-bottom: 20px;
}

.demo:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  transition: box-shadow 0.5s;
  cursor: pointer;
}

.sign:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  transition: box-shadow 0.8s;
  cursor: pointer;
  border-width: 3px;
  transition: border-width 0.8s;
}

.signup:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  transition: box-shadow 0.8s;
  cursor: pointer;
}

.login:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  transition: box-shadow 0.8s;
  cursor: pointer;
}
</style>
