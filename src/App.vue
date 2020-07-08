<template>
  <div class="body-wrapper">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/colors/colors.css";

export default {
  name: "App",
  components: {
    Navbar: () => import("./components/NavBar")
  }
};
</script>

<style>
@font-face {
  font-family: Montserrat;
  src: url("./assets/fonts/Montserrat/Montserrat-Regular.ttf")
    format("truetype");
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  font-family: "Montserrat";
  background-color: var(--main-background-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.body-wrapper {
  width: 100%;
  height: 100%;
}
</style>
