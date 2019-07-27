import React from 'react';
import ReactDOM from 'react-dom';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';

const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
];

const cols = {
  sold: { alias: 'Sold' },
  genre: { alias: 'Genre' }
};

export default function SampleChart() {
    //  dy={-20} />
    return (
        <Chart width={600} height={400} data={data} scale={cols}>
            <Axis name="genre" title/>
            <Axis name="sold" title/>
            <Legend position="top" />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
    )
}
