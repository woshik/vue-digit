const dateTime = {
  methods: {
    getFormatDate: function(input, autoFormat) {
      let dateObj = input ? new Date(input) : new Date();
      let year = dateObj.getFullYear();
      let month = dateObj.getMonth() + 1;
      let day = dateObj.getDate();
      month = month.toString();
      day = day.toString();
      if (day.length === 1) day = "0" + day;
      if (month.length === 1) month = "0" + month;

      return autoFormat ? `${day}-${month}-${year}` : { year, month, day };
    },
    getFormatTime: function(input, autoFormat) {
      let date = input ? new Date(input) : new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let format = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return autoFormat ? `${hours}:${minutes} ${format}` : { hours, minutes, format };
    },
  },
};

export default dateTime;
