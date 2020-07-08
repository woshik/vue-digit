<template>
  <div class="vertical-pagination-wrapper">
    <div
      v-for="item in paginationItems"
      :key="item.id"
      @click="menuIconClick(item.id)"
      :class="{'active': active === item.id}"
    >
      <img :src="item.icon" />
    </div>
  </div>
</template>

<script>
import growth from "../../assets/icons/growth.svg";
import funds from "../../assets/icons/funds.svg";
import sync from "../../assets/icons/sync.svg";
import history from "../../assets/icons/history.svg";
import verification from "../../assets/icons/verification.svg";
import lockedPad from "../../assets/icons/lockedPad.svg";

export default {
  name: "VerticalPagination",
  data() {
    return {
      paginationItems: [
        { id: 1, icon: growth },
        { id: 2, icon: funds },
        { id: 3, icon: sync },
        { id: 4, icon: history },
        { id: 5, icon: verification },
        { id: 6, icon: lockedPad }
      ],
      active: 1
    };
  },
  methods: {
    menuIconClick(id) {
      this.active = id;
    }
  }
};
</script>

<style scoped>
.vertical-pagination-wrapper {
  height: 60%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  transform: translateY(-115px);
}

.vertical-pagination-wrapper div {
  width: 80px;
  height: 65px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.vertical-pagination-wrapper div img {
  width: 35px;
  height: 35px;
}

.active {
  background-color: #090c16;
  border: none;
  border-radius: 5px;
}
</style>