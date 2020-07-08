<template>
  <div class="gender-wrapper">
    <div class="name-wrapper">
      <h2 class="name">By Gender</h2>
    </div>
    <div class="dropdown-wrapper">
      <DropDown
        :menuItems="genderSortItem"
        :displayName="genderSortDisplay"
        :onClickHandler="genderClickItem"
        :dropDownStyle="dropDownStyle"
        :iconStyle="iconStyle"
      />
    </div>
    <div class="dropdown-wrapper">
      <DropDown
        :menuItems="typeSortItem"
        :displayName="typeSortDisplay"
        :onClickHandler="typeClickItem"
        :dropDownStyle="dropDownStyle"
        :iconStyle="iconStyle"
      />
    </div>
    <div class="value-wrapper">
      <h2>{{displayCount}}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GenderSort",
  components: {
    DropDown: () => import("./DropDown")
  },
  data() {
    return {
      genderSortItem: [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" }
      ],
      typeSortItem: [
        { id: 1, name: "Individuals" },
        { id: 2, name: "Companies" }
      ],
      genderSortDisplay: "Gender",
      typeSortDisplay: "Type",
      dropDownStyle: {
        color: "#cccccc",
        fontSize: "20px"
      },
      iconStyle: {
        transform: "translateY(-5px)"
      },
      displayCount: 0,
      genderSortId: 0,
      typeSortId: 0
    };
  },
  computed: {
    ...mapGetters([
      "companiesData",
      "individualsData",
      "companiesCount",
      "individualsCount"
    ])
  },
  mounted() {
    this.displayCount = this.companiesCount + this.individualsCount;
  },
  methods: {
    genderClickItem(id) {
      const gender = this.genderSortItem.find(item => item.id === id);
      this.genderSortDisplay = gender.name;
      this.genderSortId = id;
      this.updateDisplayCount();
    },
    typeClickItem(id) {
      const type = this.typeSortItem.find(item => item.id === id);
      this.typeSortDisplay = type.name;
      this.typeSortId = id;
      this.updateDisplayCount();
    },
    updateDisplayCount() {
      let data = null;
      this.typeSortId &&
        (data =
          this.typeSortId === 1 ? this.individualsData : this.companiesData);

      let gender = this.genderSortId
        ? this.genderSortItem[this.genderSortId - 1].name.toLowerCase()
        : "";

      if (data) {
        if (gender) {
          data = data.filter(item => item.gender.toLowerCase() === gender);
          data = data.length;
        } else {
          data = data.length;
        }
      } else {
        data = [...this.companiesData, ...this.individualsData];
        if (gender) {
          data = data.filter(item => item.gender.toLowerCase() === gender);
          data = data.length;
        } else {
          data = this.companiesCount + this.individualsCount;
        }
      }

      this.displayCount = data;
    }
  }
};
</script>

<style scoped>
.gender-wrapper {
  height: 75%;
  width: 100%;
  background-color: var(--borad-background-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
}

.dropdown-wrapper {
  position: relative;
  width: 23%;
  height: 80%;
  color: var(--primary-text-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.value-wrapper {
  position: relative;
  width: 15%;
  height: 80%;
  color: var(--tertiary-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.value-wrapper h2 {
  font-size: 18px;
  text-align: center;
  font-weight: 600;
}

.name-wrapper {
  position: relative;
  width: 23%;
  height: 40%;
  color: var(--primary-text-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  border-left: 7px solid var(--tertiary-color);
}

.name-wrapper .name {
  font-size: 20px;
  font-weight: 600;
  color: var(--secondary-text-color);
  user-select: none;
}
</style>