import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

// vue fontawesome libraby add as a component
library.add(faSortDown);
Vue.component("fa-icon", FontAwesomeIcon);
