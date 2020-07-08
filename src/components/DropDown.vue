/*

Features
 ::

  - Drop Down Menu
  - Click Function Handle  
  - Using stylus for CSS

Usage
 ::

    HTML
       <DropDown 
          :menuItems="menuItems" 
          :displayName="displayName" 
          :onClickHandler="dropDownItemClick"
          menuItemColor="#cccccc"
        />
    
Props
 ::

    +------------------------------+---------------------+------------+----------------------------------------------------+ 
    | Prop                         |     Type            |  Required  | Description                                        |   
    +==============================+=====================+============+====================================================+ 
    | menuItems                    |     Array           |   True     | Dropdown option [{id: 1, name: "select 1"}]        |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | displayName                  |     String          |   True     | display name                                       |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | onClickHandler               |     Function        |   True     | click handler                                      |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | dropDownStyle                |     Object          |            | button style object                                |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | iconStyle                    |     Object          |            | icon style object                                |
    +------------------------------|---------------------|------------|----------------------------------------------------- 

*/

<template>
  <div class="dropdown">
    <button class="dropdown-btn" :style="dropDownStyle">
      {{displayName}}
      <fa-icon icon="sort-down" :style="iconStyle" />
    </button>
    <div class="dropdown-content">
      <a
        v-for="item in menuItems"
        :key="item.id"
        @click="onClickHandler(item.id)"
        :style="{ color: dropDownStyle.color }"
      >{{item.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    onClickHandler: {
      type: Function,
      required: true
    },
    dropDownStyle: {
      type: Object,
      default: function() {
        return {
          color: "#849fb4",
          fontSize: "14px",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "1px"
        };
      }
    },
    iconStyle: {
      type: Object,
      default: function() {
        return {
          transform: "translateY(-50%) scale(2)"
        };
      }
    }
  }
};
</script>

<style  scoped>
.dropdown {
  position: relative;
  height: 100%;
  width: 80%;
  display: inline-block;
}

.dropdown-btn {
  position: relative;
  background-color: var(--borad-background-color);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: none;
  outline: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--borad-background-color);
  width: 100%;
  z-index: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.dropdown-content a {
  text-decoration: none;
  width: 100%;
  height: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.dropdown-content a:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.dropdown-content a:hover {
  background-color: #181922;
}

.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.dropdown:hover .dropdown-btn {
  background-color: #181922;
}
</style>