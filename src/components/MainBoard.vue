<template>
  <div class="main-board">
    <div class="vertical-wrapper">
      <VerticalPagination />
    </div>
    <div class="board">
      <HorizontalPagination />
      <div class="display">
        <div class="display-charts">
          <div class="upper-chart">
            <LineChart
              label="Individuals"
              :chartData="individualsChartData"
              :horizontalLabels="horizontalLabel"
            />
          </div>
          <div class="lower-chart">
            <LineChart
              label="Companies"
              :chartData="companiesChartData"
              :horizontalLabels="horizontalLabel"
              :chartColors="lowerChartColor"
            />
          </div>
        </div>
        <div class="display-info">
          <div class="total-signUp">
            <DoughnutChart
              :backgroundColor="totalSignupColor"
              :labels="totalSignupLabels"
              :chartData="[companiesCount, individualsCount]"
            />
          </div>

          <div class="sort">
            <GenderSort />
          </div>

          <div class="meetings">
            <Meetings />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainBoard",
  data() {
    return {
      lowerChartColor: ["rgba(255, 86, 238, 06)", "rgba(62, 87, 194, 0.6)"],
      totalSignupColor: ["rgb(27, 251, 228)", "rgb(255, 86, 238)"],
      totalSignupLabels: ["Individuals", "Companies"]
    };
  },
  components: {
    VerticalPagination: () => import("./Pagination/VerticalPagination"),
    HorizontalPagination: () => import("./Pagination/HorizontalPagination"),
    LineChart: () => import("./Chart/LineChart"),
    DoughnutChart: () => import("./Chart/DoughnutChart"),
    GenderSort: () => import("./GenderSort"),
    Meetings: () => import("./Meetings")
  },
  computed: {
    ...mapGetters([
      "horizontalLabel",
      "individualsChartData",
      "companiesChartData",
      "individualsCount",
      "companiesCount"
    ])
  },
  
};
</script>

<style scoped>
.main-board {
  position: relative;
  height: calc(100vh - 180px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical-wrapper {
  position: relative;
  width: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.board {
  height: 80vh;
  width: 70%;
  background-color: var(--main-background-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.display {
  height: calc(78vh - 5vh);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.display-charts,
.display-info {
  height: 100%;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.upper-chart,
.lower-chart {
  height: 48%;
  width: 98%;
  background-color: var(--borad-background-color);
  margin-bottom: 10px;
}

.meetings {
  height: 40%;
  width: 98%;
}

.sort {
  height: 15%;
  width: 98%;
  align-items: center;
  justify-content: center;
}

.total-signUp {
  height: 45%;
  width: 98%;
  background-color: var(--borad-background-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  margin-bottom: 20px;
}

.upper-chart div,
.lower-chart div,
.total-signUp div {
  width: 100% !important;
  height: 100% !important;
}
</style>