<template>
    <div id="chart">
        <apexchart
            type="radar"
            height="350"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'RadarWithPolygonFill',
    components: {},
    setup() {
        const series = [
            {
                name: 'Series 1',
                data: [20, 100, 40, 30, 50, 80, 33],
            },
        ];
        const chartOptions = {
            chart: {
                height: 350,
                type: 'radar',
            },
            dataLabels: {
                enabled: true,
            },
            plotOptions: {
                radar: {
                    size: 140,
                    polygons: {
                        strokeColors: '#e9e9e9',
                        fill: {
                            colors: ['#f8f8f8', '#fff'],
                        },
                    },
                },
            },
            title: {
                text: 'Radar with Polygon Fill',
            },
            colors: ['#FF4560'],
            markers: {
                size: 4,
                colors: ['#fff'],
                strokeColor: '#FF4560',
                strokeWidth: 2,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
            xaxis: {
                categories: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ],
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: function (val, i) {
                        if (i % 2 === 0) {
                            return val;
                        } else {
                            return '';
                        }
                    },
                },
            },
        };
        return {
            series,
            chartOptions,
        };
    },
});
</script>
