/*

Features
 ::

  - Doughut Chart

Usage
 ::

    HTML
       <DoughnutChart
          :backgroundColor="totalSignupColor"
          :labels="totalSignupLabels"
          :chartData="[companiesCount, individualsCount]"
        />
    
Props
 ::

    +------------------------------+---------------------+------------+----------------------------------------------------+ 
    | Prop                         |     Type            |  Required  | Description                                        |   
    +==============================+=====================+============+====================================================+ 
    | labels                       |     Array           |   True     | chart labels array                                 |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | backgroundColor              |     Array           |   True     | chart background color                             |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | chartData                    |     Array           |   True     | chart data set                                     |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | options                      |     Object          |            | pass differents type of chart option pass on it    |
    +------------------------------|---------------------|------------|----------------------------------------------------- 

*/



<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "DoughnutChart",
  extends: Doughnut,
  props: {
    labels: {
      type: Array,
      required: true
    },
    chartData: {
      type: Array,
      required: true
    },
    backgroundColor: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default: function() {
        return {
          responsive: true,
          maintainAspectRatio: false,
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        };
      }
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: this.backgroundColor
          }
        ]
      },
      this.options
    );
  },
};
</script>