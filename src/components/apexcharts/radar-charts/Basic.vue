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
    name: 'BasicRadar',
    components: {},
    setup() {
        const series = [
            {
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            },
        ];
        const chartOptions = {
            chart: {
                height: 350,
                type: 'radar',
            },
            title: {
                text: 'Basic Radar Chart',
            },
            xaxis: {
                categories: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                ],
            },
        };
        return {
            series,
            chartOptions,
        };
    },
});
</script>
