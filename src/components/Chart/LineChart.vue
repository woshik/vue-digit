/*

Features
 ::

  - Line Chart

Usage
 ::

    HTML
       <LineChart
          label="Individuals"
          :chartData="individualsChartData"
          :horizontalLabels="horizontalLabel"
        />
    
Props
 ::

    +------------------------------+---------------------+------------+----------------------------------------------------+ 
    | Prop                         |     Type            |  Required  | Description                                        |   
    +==============================+=====================+============+====================================================+ 
    | labels                       |     Array           |   True     | chart labels array                                 |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | chartColors                  |     Array           |   True     | chart background color                             |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | chartData                    |     Array           |   True     | chart data set                                     |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | horizontalLabels             |     Array           |   True     | chart horizontal labels                            |
    +------------------------------|---------------------|------------|----------------------------------------------------- 
    | options                      |     Object          |            | pass differents type of chart option pass on it    |
    +------------------------------|---------------------|------------|----------------------------------------------------- 

*/



<script>
import { Line } from "vue-chartjs";
export default {
  name: "LineChart",
  extends: Line,
  props: {
    horizontalLabels: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    chartData: {
      type: Array,
      required: true
    },
    chartColors: {
      type: Array,
      default: function() {
        return ["rgba(78, 255, 207, 0.6)", "rgba(8, 164, 188, 0.6)"];
      }
    },
    options: {
      type: Object,
      default: function() {
        return {
          maintainAspectRatio: false,
          responsive: true,
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
    const gradientFill = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(500, 0, 100, 0);
    gradientFill.addColorStop(0, this.chartColors[0]);
    gradientFill.addColorStop(1, this.chartColors[1]);

    this.renderChart(
      {
        labels: this.horizontalLabels,
        datasets: [
          {
            label: this.label,
            data: this.chartData,
            backgroundColor: gradientFill
          }
        ]
      },
      this.options
    );
  }
};
</script>