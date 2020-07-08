const state = {
  headerInfo: {
    lastWeek: 12,
    totalInvestments: 102,
    currency: "NOK",
    averageInvestment: "345,565",
    totalExits: 23,
  },
  horizontalLabel: ["Jun'19", "Jul'19", "Aug'19", "Sep'19", "Oct'19", "Nov'19", "Dec'19"],
  individualsChartData: [0, 9, 3, 6, 4, 4, 3, 9, 8],
  companiesChartData: [0, 6, 4, 9, 7, 4, 5, 8, 5],
};

const getters = {
  lastWeek: ({ headerInfo }) => headerInfo.lastWeek,
  totalInvestments: ({ headerInfo }) => headerInfo.totalInvestments,
  currency: ({ headerInfo }) => headerInfo.currency,
  averageInvestment: ({ headerInfo }) => headerInfo.averageInvestment,
  totalExit: ({ headerInfo }) => headerInfo.totalExits,
  horizontalLabel: ({ horizontalLabel }) => horizontalLabel,
  individualsChartData: ({ individualsChartData }) => individualsChartData,
  companiesChartData: ({ companiesChartData }) => companiesChartData,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
