<template>
  <div class="body">
    <div class="topbar">
      <h1>OsKey</h1>
      <div>
        <button class="login">Login</button>
        <button class="signup">SignUp</button>
      </div>
    </div>

    <UploadBox/>
    <!-- <LoadingGif /> -->

  </div>
</template>

<script>
import UploadBox from '../components/UploadBox.vue'
// import LoadingGif from '../components/LoadingGif.vue'
export default {
  name: "ConversionPage",
  components: {
      UploadBox,
    //   LoadingGif
  },

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Raleway:wght@300&display=swap");

.body {
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
</style>
