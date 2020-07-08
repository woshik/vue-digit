<template>
  <div class="wrapper">
    <div class="header">
      <h2>Latest Signups</h2>
      <div class="header-menu">
        <div class="inner-wrapper">
          <p class="name-menu">Name</p>
        </div>
        <div class="inner-wrapper">
          <p>Scheduled Meeting</p>
        </div>
      </div>
    </div>
    <div class="table">
      <div v-for="(meeting, index) in showMeetingData" :key="index" class="div-table">
        <div class="inner-wrapper">
          <p :class="['name', meeting.surname ? 'borderColor1' : 'borderColor2' ]">
            {{meeting.surname
            ? meeting.name + " " + meeting.surname
            : meeting.name}}
          </p>
        </div>

        <div class="inner-wrapper">
          <p>{{getFormatDate(meeting.meetingDate, true)}} - {{getFormatTime(meeting.meetingDate, true)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dateTime from "../mixins/dateTime";

export default {
  name: "Meetings",
  mixins: [dateTime],
  computed: {
    ...mapGetters(["companiesData", "individualsData"]),
    showMeetingData() {
      const allData = [...this.individualsData, ...this.companiesData];
      const currentData = allData.filter(c => c.meetingDate > new Date());
      const sortedData = currentData.sort(
        (a, b) => a.meetingDate - b.meetingDate
      );

      const shownData = sortedData.slice(0, 3);
      return shownData;
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-color: #0b0e19;
}

.header {
  position: relative;
  height: 38%;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: #050711;
}

.header h2 {
  font-size: 22px;
  color: var(--secondary-text-color);
  padding-left: 30px;
  font-weight: 600;
}

.header-menu {
  font-weight: 600;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--secondary-text-color);
}

.table {
  position: relative;
  height: 60%;
  width: 98%;
}

.div-table {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid #181922;
  color: var(--primary-text-color);
}

.name-menu {
  padding-left: 10px;
  transform: translateX(10px);
}

.name {
  transform: translateX(25px);
  padding-left: 10px;
  border-left: solid 7px black;
}

.inner-wrapper {
  width: 45%;
  padding-left: 10px;
}

.borderColor1 {
  border-color: var(--tertiary-color);
}

.borderColor2 {
  border-color: var(--secondary-color);
}
</style>