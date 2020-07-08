<template>
  <div class="horizontal-pagination-wrapper">
    <h3
      v-for="item in paginationItems"
      :key="item.id"
      @click="menuIconClick(item.id)"
      :class="{'active': active === item.id}"
    >{{ item.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "HorizontalPagination",
  data() {
    return {
      paginationItems: [
        { id: 1, name: "Signups" },
        { id: 2, name: "Investment" },
        { id: 3, name: "Revenue" },
        { id: 4, name: "Exits" },
        { id: 5, name: "Trades" }
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
.horizontal-pagination-wrapper {
  position: relative;
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #181922;
}

.horizontal-pagination-wrapper h3 {
  position: relative;
  height: 100%;
  color: var(--secondary-text-color);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 12%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.horizontal-pagination-wrapper .active {
  color: var(--primary-color);
}
</style>