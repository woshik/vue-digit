<template>
  <div>
    <Header />
    <MainBoard />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Header: () => import("../components/Header"),
    MainBoard: () => import("../components/MainBoard")
  },
  methods: {
    ...mapActions(["fetchIndividualsData", "fetchCompanyData"])
  },
  mounted() {
    this.fetchIndividualsData();
    this.fetchCompanyData();
  }
};
</script>