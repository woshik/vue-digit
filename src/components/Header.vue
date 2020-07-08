<template>
  <div class="header-wrapper">
    <div class="list">
      <div class="block">
        <DropDown
          :menuItems="menuItems"
          :displayName="displayName"
          :onClickHandler="dropDownItemClick"
        />
      </div>
      <div class="block">
        <h2>Total signups</h2>
        <p class="green">{{ totalSignupCount }}</p>
      </div>
      <div class="block">
        <h2>Last Week</h2>
        <p class="purple">{{lastWeek}}</p>
      </div>
      <div class="block">
        <h2>Total investments</h2>
        <p class="blue">{{totalInvestments}}</p>
      </div>
      <div class="block">
        <h2>Average investment</h2>
        <p>
          <span class="currency">{{currency}}</span>
          <span class="green">{{averageInvestment}}</span>
        </p>
      </div>
      <div class="block">
        <h2>Total exits</h2>
        <p class="purple">{{totalExit}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",

  components: {
    DropDown: () => import("./DropDown")
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: "option-1" },
        { id: 2, name: "option-2" },
        { id: 3, name: "option-3" }
      ],
      displayName: "Overview"
    };
  },
  methods: {
    dropDownItemClick(id) {
      const menuItem = this.menuItems.find(item => item.id === id);
      this.displayName = menuItem.name;
    }
  },
  computed: {
    ...mapGetters([
      "lastWeek",
      "totalInvestments",
      "currency",
      "averageInvestment",
      "totalExit",
      "companiesCount",
      "individualsCount"
    ]),
    totalSignupCount() {
      return this.companiesCount + this.individualsCount;
    }
  }
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  height: 80px;
  background-color: #0b0e19;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.list {
  position: relative;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 30%;
  color: #849fb4;
}

.block {
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.block h2 {
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  padding: 0;
}

.block p {
  font-size: 22px;
  width: 90%;
  text-align: center;
  font-weight: 700;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  transform: translateY(-10px);
}

.green {
  color: var(--tertiary-color);
  font-weight: 700;
}

.purple {
  color: var(--secondary-color);
}

.blue {
  color: var(--primary-color);
}

.currency {
  font-weight: 400;
  color: var(--tertiary-color);
}
</style>
