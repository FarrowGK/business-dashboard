import React from 'react';
import { Card } from './Card';

import Highcharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';
import { charData } from './Data';

const options = {
    chart: {
        height: '360px',
        type: 'column',
        style: {
            fontFamily: `Blinker, sans-serif`
        }
    },
    title: {
        text: "Revenue by Product"
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: "Billions of Dollars"
        }
    },
    toolTip: {
        pointFormat: '<span style="color:{series.color}>{series.name}</span>: <b>{point.y}</br> ({point.percentage:.0f}%)</br>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 0
        }
    },
    series: charData,
}

export function Chart() {
    return <Card height={400}>
        <HighChartsReact highcharts={Highcharts}
        options={options}
        />
    </Card>
}