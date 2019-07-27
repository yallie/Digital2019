import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

const data = [
	{ "maxTime": 1, "vehicleCount": 31000 },
	{ "maxTime": 2, "vehicleCount": 15500 },
	{ "maxTime": 3, "vehicleCount": 10335 },
	{ "maxTime": 4, "vehicleCount": 7750 },
	{ "maxTime": 5, "vehicleCount": 6200 },
	{ "maxTime": 6, "vehicleCount": 5169 },
	{ "maxTime": 7, "vehicleCount": 4431 },
	{ "maxTime": 8, "vehicleCount": 3875 },
	{ "maxTime": 9, "vehicleCount": 3448 },
	{ "maxTime": 10, "vehicleCount": 3100 },
	{ "maxTime": 11, "vehicleCount": 2820 },
	{ "maxTime": 12, "vehicleCount": 2585 },
	{ "maxTime": 13, "vehicleCount": 2386 },
	{ "maxTime": 14, "vehicleCount": 2217 },
	{ "maxTime": 15, "vehicleCount": 2069 },
	{ "maxTime": 16, "vehicleCount": 1939 },
	{ "maxTime": 17, "vehicleCount": 1827 },
	{ "maxTime": 18, "vehicleCount": 1726 },
	{ "maxTime": 19, "vehicleCount": 1635 },
	{ "maxTime": 20, "vehicleCount": 1550 },
	{ "maxTime": 21, "vehicleCount": 1480 },
	{ "maxTime": 22, "vehicleCount": 1411 },
	{ "maxTime": 23, "vehicleCount": 1350 },
	{ "maxTime": 24, "vehicleCount": 1294 },
	{ "maxTime": 25, "vehicleCount": 1240 },
	{ "maxTime": 26, "vehicleCount": 1194 },
	{ "maxTime": 27, "vehicleCount": 1153 },
	{ "maxTime": 28, "vehicleCount": 1110 },
	{ "maxTime": 29, "vehicleCount": 1071 },
	{ "maxTime": 30, "vehicleCount": 1035 },
	{ "maxTime": 31, "vehicleCount": 1003 },
	{ "maxTime": 32, "vehicleCount": 971 },
	{ "maxTime": 33, "vehicleCount": 942 },
	{ "maxTime": 34, "vehicleCount": 915 },
	{ "maxTime": 35, "vehicleCount": 889 },
	{ "maxTime": 36, "vehicleCount": 864 },
	{ "maxTime": 37, "vehicleCount": 843 },
	{ "maxTime": 38, "vehicleCount": 818 },
	{ "maxTime": 39, "vehicleCount": 798 },
	{ "maxTime": 40, "vehicleCount": 775 },
	{ "maxTime": 41, "vehicleCount": 758 },
	{ "maxTime": 42, "vehicleCount": 742 },
	{ "maxTime": 43, "vehicleCount": 724 },
	{ "maxTime": 44, "vehicleCount": 707 },
	{ "maxTime": 45, "vehicleCount": 692 },
	{ "maxTime": 46, "vehicleCount": 677 },
	{ "maxTime": 47, "vehicleCount": 663 },
	{ "maxTime": 48, "vehicleCount": 649 },
	{ "maxTime": 49, "vehicleCount": 636 },
	{ "maxTime": 50, "vehicleCount": 620 },
	{ "maxTime": 51, "vehicleCount": 612 },
	{ "maxTime": 52, "vehicleCount": 599 },
	{ "maxTime": 53, "vehicleCount": 588 },
	{ "maxTime": 54, "vehicleCount": 578 },
	{ "maxTime": 55, "vehicleCount": 566 },
	{ "maxTime": 56, "vehicleCount": 556 },
	{ "maxTime": 57, "vehicleCount": 548 },
	{ "maxTime": 58, "vehicleCount": 537 },
	{ "maxTime": 59, "vehicleCount": 527 },
	{ "maxTime": 60, "vehicleCount": 519 },
	{ "maxTime": 61, "vehicleCount": 510 },
	{ "maxTime": 62, "vehicleCount": 503 },
	{ "maxTime": 63, "vehicleCount": 495 },
	{ "maxTime": 64, "vehicleCount": 488 },
	{ "maxTime": 65, "vehicleCount": 479 },
	{ "maxTime": 66, "vehicleCount": 473 },
	{ "maxTime": 67, "vehicleCount": 464 },
	{ "maxTime": 68, "vehicleCount": 459 },
	{ "maxTime": 69, "vehicleCount": 451 },
	{ "maxTime": 70, "vehicleCount": 446 },
	{ "maxTime": 71, "vehicleCount": 441 },
	{ "maxTime": 72, "vehicleCount": 433 },
	{ "maxTime": 73, "vehicleCount": 428 },
	{ "maxTime": 74, "vehicleCount": 423 },
	{ "maxTime": 75, "vehicleCount": 415 },
	{ "maxTime": 76, "vehicleCount": 411 },
	{ "maxTime": 77, "vehicleCount": 403 },
	{ "maxTime": 78, "vehicleCount": 401 },
	{ "maxTime": 79, "vehicleCount": 395 },
	{ "maxTime": 80, "vehicleCount": 389 },
	{ "maxTime": 81, "vehicleCount": 386 },
	{ "maxTime": 82, "vehicleCount": 380 },
	{ "maxTime": 83, "vehicleCount": 378 },
	{ "maxTime": 84, "vehicleCount": 371 },
	{ "maxTime": 85, "vehicleCount": 368 },
	{ "maxTime": 86, "vehicleCount": 364 },
	{ "maxTime": 87, "vehicleCount": 358 },
	{ "maxTime": 88, "vehicleCount": 355 },
	{ "maxTime": 89, "vehicleCount": 351 },
	{ "maxTime": 90, "vehicleCount": 348 },
	{ "maxTime": 91, "vehicleCount": 341 },
	{ "maxTime": 92, "vehicleCount": 340 },
	{ "maxTime": 93, "vehicleCount": 337 },
	{ "maxTime": 94, "vehicleCount": 333 },
	{ "maxTime": 95, "vehicleCount": 330 },
	{ "maxTime": 96, "vehicleCount": 326 },
	{ "maxTime": 97, "vehicleCount": 322 },
	{ "maxTime": 98, "vehicleCount": 320 },
	{ "maxTime": 99, "vehicleCount": 317 }
];

const cols = {
  vehicleCount: { alias: 'Vehicle Count' },
  maxTime: { alias: 'Max. Time' }
};

export default function OptimizerChart() {
    //  dy={-20} />
    return (
        <Chart width={800} height={600} data={data} scale={cols}>
            <Axis name="maxTime" title/>
            <Axis name="vehicleCount" title/>
            <Legend position="top" />
            <Tooltip />
            <Geom type="interval" position="maxTime*vehicleCount" color="genre" />
        </Chart>
    )
}