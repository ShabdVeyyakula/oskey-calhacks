<template>
  <div>
    <div class="uploadbox">
      <h1 class="title">Upload and attatch music mp3 file</h1>
      <p class="subtxt">Upload file in mp3 format to convert to sheet music</p>
      <div class="dragfile">
        <img class="icon" src="../assets/uploadfile.png" />
        <p class="click"><u>Click to Upload</u></p>
        <p>Maximum file size 50mb</p>
      </div>
      <FileUpload />
      <div class="button-container">
        <button v-on:onclick={goToHome();} class="sign">Cancel</button>
        <button class="demo">Convert</button>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from "./FileUpload";
import router from '../router/index'
export default {
  name: "UploadBox",
  components: {
    FileUpload,
  },
  methods: {
    goToHome() {
      router.push("/");
    },
  },
};
</script>

<style scoped>
.dragfile {
  border-color: black;
  border-width: 2px;
  border-style: dashed;
  border-radius: 15px;
}

.icon {
  width: 70px;
  margin-top: 15px;
}

.uploadbox {
  width: 35%;
  padding: 50px;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border-radius: 30px;
  margin-left: 28%;
}

.click:hover {
  cursor: pointer;
}

.divider {
  height: 1px;
  width: 100%;
  background-color: black;
}

.button-container {
  margin-top: 30px;
}

.demo {
  height: 50px;
  width: 175px;
  border-radius: 10px;
  border-color: transparent;
  color: white;
  background-color: black;
  margin-right: 30px;
}

.sign {
  height: 50px;
  width: 175px;
  border-radius: 10px;
  border-color: black;
  color: black;
  background-color: transparent;
  margin-right: 35px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  margin-left: 8%;
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
</style>
