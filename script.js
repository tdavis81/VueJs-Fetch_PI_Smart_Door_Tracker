    const app = new Vue({
        el:'#app', 
        data: {
            total: 0,
            current: 0,
            left: 0,
            capacity: 500,
            percentage: 0
          },
        created () {
           setInterval(function () {

              fetch('https://api.myjson.com/bins/1g7bno')

                .then(response => response.json())
                .then(json => {
                this.total = json.doorData.total;
                this.current = json.doorData.current;
                this.left = json.doorData.left;
              
              });

          }.bind(this), 300); 
          
        },

        computed: {
          calculatedPercent () {
            if(this.percentage <=24){
               this.color = 'stroke:green'
            } else if (this.percentage <=49 && this.percentage >=25) {
               this.color ='stroke:blue'
            } else if (this.percentage <=74 && this.percentage >=50){
                this.color ='stroke:orange'
            } else {
                this.color ='stroke:red'
            }
              this.percentage = ((this.current / this.capacity) * 100).toFixed(2);
              return  `${this.percentage} ,100`;
          }
          
        }
    });


