<template>
    <div id="chart">
        <apexchart
            type="pie"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BasicPic',
    components: {},
    setup() {
        const series = [44, 55, 13, 43, 22];
        const chartOptions = {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        };
        return {
            series,
            chartOptions,
        };
    },
});
</script>
