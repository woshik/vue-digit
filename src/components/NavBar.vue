<template>
  <nav>
    <div class="logo-wrapper">
      <router-link :to="{name: 'Home'}">
        <img src="../assets/images/logo.png" class="site-logo" alt="site logo" />
      </router-link>
    </div>
    <div class="links-wrapper">
      <div class="links">
        <router-link v-for="item in navItems" :key="item.id" :to="{name: item.name}">{{ item.name }}</router-link>
      </div>
      <div class="profile">
        <img src="../assets/images/avatar.png" class="profile-img" alt="user avatar" />
        <h1>{{ username }}</h1>
        <div class="date">
          <p>{{ date }}</p>
          <h1>{{ time }}</h1>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import dateTime from "../mixins/dateTime";

export default {
  name: "NavBar",
  data() {
    return {
      date: null,
      time: null,
      navItems: [
        {
          id: 1,
          name: "Account"
        },
        {
          id: 2,
          name: "Charts"
        },
        {
          id: 3,
          name: "Help"
        }
      ]
    };
  },
  mixins: [dateTime],
  mounted() {
    this.fetchUserData(1);
    setInterval(() => {
      this.date = this.getFormatDate(null, true);
    }, 1000);

    setInterval(() => {
      this.time = this.getFormatTime(null, true);
    }, 1000);
  },
  computed: {
    ...mapGetters(["username"]),
  },
  methods: {
    ...mapActions(["fetchUserData"])
  }
};
</script>

<style scoped>
nav {
  height: 80px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom: var(--primary-color) 1px solid;
}

.logo-wrapper {
  width: 33%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.site-logo {
  width: 170px;
}

.links-wrapper {
  width: 57%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.links {
  height: 100%;
  width: 55%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.links a {
  color: var(--secondary-text-color);
  width: 30%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
}

.links a:hover {
  background-color: #090c16;
}

.profile {
  position: relative;
  height: 100%;
  width: 40%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -moz-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  background: var(--primary-gradient);
  color: #fff;
}

.profile h1 {
  font-size: 16px;
  font-weight: 600;
}

.profile-img {
  position: absolute;
  left: -28px;
}

.date {
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
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -moz-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
}

.date p {
  font-weight: 600;
  font-size: 12px;
}
.date h1 {
  font-weight: 500;
  font-size: 20px;
}
</style>
