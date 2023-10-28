<template>
  <div class="box">
    <div class="row">
      <div>
        <div class="imageBox">
            <img class="mp3" src="../assets/mp3.png"/>
        </div>
      </div>
        <p class="name">Name of File</p>
      <img class="closeIcon" src="../assets/closeicon.png"/>
    </div>
    <div class="loadingContainer"></div>
  </div>
</template>

<script>
export default {
    name: "FileUpload"
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 15%;
  border-radius: 15px;
  border-color: black;
  border-width: 2px;
  padding: 10px;
  margin-top: 15px
}

.imageBox {
  height: 40px;
  width: 40px;
  border-color: grey;
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  padding: 2px;
}

.mp3 {
    width: 30px;
    margin-top: 15%
}

.row {
    display: flex;
}

.closeIcon {
    width: 25px;
    height: 25px
}

.closeIcon:hover {
    cursor: pointer
}

.name {
    margin-left: 10px
}

</style>
