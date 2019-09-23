var app = new Vue({
    el: "#app",
    data() {
        return {
            chart: null,
            cartTitle: null,
            subTitle: null,
            selectedYear: "2016",
            yearsList: [
                { id: 2016, title: "Top computer languages (Jun - 2016)", subTitle: 'Top 10 in TIOBE index. Source: <a href="https://fossbytes.com/top-100-most-popular-programming-languages-of-2016/" target="_blank">fossbytes.com/top-100-most-popular-programming-languages-of-2016/</a>', languages: [{ name: "Java", y: 20.7 }, { name: "C", y: 12.3 }, { name: "C++", y: 6.1 }, { name: "Python", y: 3.9 }, { name: "C#", y: 3.7 }, { name: "PHP", y: 3.2 }, { name: "JavaScript", y: 2.5 }, { name: "Perl", y: 2.3 }, { name: " VB.Net", y: 2.3 }, { name: "Ruby", y: 2.3 }] },
                { id: 2017, title: "Top computer languages (December - 2017)", subTitle: 'Top 10 in TIOBE index. Source: <a href="http://qa-essence.blogspot.com/2017/12/most-popular-and-influential.html" target="_blank">qa-essence.blogspot.com/2017/12/most-popular-and-influential.html</a>', languages: [{ name: "Java", y: 13.2 }, { name: "C", y: 10.1 }, { name: "C++", y: 4.7 }, { name: "Python", y: 3.8 }, { name: "C#", y: 2.8 }, { name: "JavaScript", y: 2.4 }, { name: "VB.Net", y: 2.4 }, { name: "R", y: 1.9 }, { name: " PHP", y: 1.5 }, { name: "Matlab", y: 1.5 }] },
                { id: 2018, title: "Top computer languages (July - 2018)", subTitle: 'Top 10 in TIOBE index. Source: <a href="https://hackernoon.com/top-3-most-popular-programming-languages-in-2018-and-their-annual-salaries-51b4a7354e06" target="_blank">hackernoon.com/top-3-most-popular-programming-languages-in-2018-and-their-annual-salaries-51b4a7354e06</a>', languages: [{ name: "Java", y: 16.4 }, { name: "C", y: 14.2 }, { name: "C++", y: 7.3 }, { name: "Python", y: 6.1 }, { name: "VB.Net", y: 4.8 }, { name: "C#", y: 4.6 }, { name: "PHP", y: 3.2 }, { name: "JavaScript", y: 3.1 }, { name: "SQL", y: 2.6 }, { name: "Objective-C", y: 2.1 }] },
                { id: 2019, title: "Top computer languages (May - 2019)", subTitle: 'Top 10 in PYPL index. Source: <a href="http://statisticstimes.com/tech/top-computer-languages.php" target="_blank">statisticstimes.com/tech/top-computer-languages.php</a>', languages: [{ name: "Python", y: 27.3 }, { name: "Java", y: 20.3 }, { name: "JavaScript", y: 8.5 }, { name: "C#", y: 7.4 }, { name: "PHP", y: 7.3 }, { name: "C/C++", y: 6.0 }, { name: "Objective-c", y: 2.9 }, { name: "Swift", y: 2.5 }, { name: "Matlab", y: 2.0 }, { name: "Ruby", y: 1.4 }] }
            ]
        }

    },
    methods: {
        addData() {
            if (this.cartTitle) {
                //Update title of chart
                this.chart.setTitle({ text: this.cartTitle });
            }
            if (this.subTitle) {
                //Update subtitle of chart
                this.chart.setTitle(null, { text: this.subTitle });
            }

        },
        changeYear() {
            this.yearsList.forEach(yearData => {
                if (yearData.id === Number(this.selectedYear)) {
                    //Update programing languages list in the chart
                    this.chart.series[0].update({
                        data: yearData.languages
                    }, true);

                    //Update title of chart
                    this.chart.setTitle({ text: yearData.title });

                    //Update subtitle of chart
                    this.chart.setTitle(null, { text: yearData.subTitle });
                }
            });

            //Clear input value
            this.cartTitle = '';
            this.subTitle ='';
        }
    },
    mounted() {
        //configure charts
        var highchartsOptions = {
            chart: {
                type: 'column',
                renderTo: 'grafic'
            },
            title: {
                text: 'Top computer languages (Jun 2016)'
            },
            subtitle: {
                text: 'Top 10 in TIOBE index. Source: <a href="https://fossbytes.com/top-100-most-popular-programming-languages-of-2016/" target="_blank">fossbytes.com/top-100-most-popular-programming-languages-of-2016/</a>'
            },
            xAxis: {
                title: {
                    text: 'Languages'
                },
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Share(%)'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: [
                {
                    name: "Languages",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Java",
                            y: 20.7
                        },
                        {
                            name: "C",
                            y: 12.3
                        },
                        { 
                            name: "C++", 
                            y: 6.1 }, 
                        { 
                            name: "Python", 
                            y: 3.9 }, 
                        { 
                            name: "C#", 
                            y: 3.7 },
                        { 
                            name: "PHP", 
                            y: 3.2
                        }, 
                        { 
                            name: "JavaScript", 
                            y: 2.5 
                        }, 
                        { 
                            name: "Perl", 
                            y: 2.3
                        }, 
                        { 
                            name: " VB.Net", 
                            y: 2.3 
                        }, 
                        { 
                            name: "Ruby", 
                            y: 2.3 
                        }
                    ],
                }
            ],


        }
        
        //Import Highcharts to chart
        this.chart = new Highcharts.chart(highchartsOptions)
    }
})

// const Chart = Vue.component('Chart', {
//     props: ['data', 'steven', 'agePotValue'],
//     template: `
// 	<div>
// 		<div id="thechart"></div>
// 	</div>
// 	`,
//     data() {
//         return {
//             chart: undefined
//         }
//     },
//     methods: {
//         redraw() {
//             this.chart.series[0].setData(this.agePotValue, true);
//         }
//     },
//     watch: {
//         data() { this.redraw() },
//         steven() { this.redraw() },
//         agePotValue() { this.redraw() },
//     },
//     mounted() {
//         var highchartsOptions = {
//             chart: {
//                 type: 'area',
//                 renderTo: 'thechart'
//             },
//             credits: {
//                 enabled: false
//             },
//             tooltip: {
//                 enabled: false
//             },
//             title: {
//                 text: 'Test'
//             },
//             xAxis: {
//                 allowDecimals: false,
//                 title: {
//                     text: 'Age'
//                 }
//             },
//             yAxis: {
//                 title: {
//                     text: 'Pot Value'
//                 },
//                 labels: {
//                     formatter: function () {
//                         return 'R$' + this.value / 1000 + 'k';
//                     }
//                 },
//                 opposite: true,
//             },
//             plotOptions: {},
//             series: [{
//                 name: 'Teste',
//                 data: this.agePotValue
//             }],
//             credits: false

//         }
//         this.chart = new Highcharts.chart(highchartsOptions)
//     }
// });

// new Vue({
//     el: '#app',
//     data: {
//         age: 55,
//         currentPensionValue: 22000,
//         retireAge: 87
//     },
//     computed: {
//         data() { return (this.currentPensionValue) / (this.retireAge - this.age) },
//         steven() { return this.data * 1.4 },
//         agePotValue() {
//             var vm = this;
//             var agePotValue = [[vm.age, (vm.data)], [vm.retireAge, vm.currentPensionValue]];

//             return agePotValue;
//         }
//     },
//     components: { Chart }
// })



