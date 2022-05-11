
import { Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
//import data from '../dataMocked'
import '../styles/Activity.css'
import {BarChart} from "recharts";

function Activity(){
    const formatDay = (item) => (new Date(item)).getDate()
    const formatLegend = (value) => value === 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (kCal)'

    const data = [
        {
            day: '2020-07-01',
            kilogram: 80,
            calories: 240
        },
        {
            day: '2020-07-02',
            kilogram: 80,
            calories: 220
        },
        {
            day: '2020-07-03',
            kilogram: 81,
            calories: 280
        },
        {
            day: '2020-07-04',
            kilogram: 81,
            calories: 290
        },
        {
            day: '2020-07-05',
            kilogram: 80,
            calories: 160
        },
        {
            day: '2020-07-06',
            kilogram: 78,
            calories: 162
        },
        {
            day: '2020-07-07',
            kilogram: 76,
            calories: 390
        }
    ]
    return(
        <>
            <h2 className="chart-title">Activité quotidienne</h2>
            {/*
            <ul className="chart-legend">
                <li>Poids (kg)</li>
                <li>Calories brûlées (kCal)</li>
            </ul>
*/}

            <BarChart width={835} height={320}  data={data}>
                <CartesianGrid strokeDasharray="2" vertical={false}/>
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconSize={8}
                    iconType="circle"
                    height={100}
                    formatter={formatLegend}
                />
                <XAxis
                    dataKey="day"
                    tickMargin={16}
                    tickFormatter={formatDay}
                    tickSize={0}
                    minTickGap={30}
                />
                <YAxis
                    yAxisId="1"
                    dataKey="kilogram"
                    orientation='right'
                    tickMargin={40}
                    tickSize={0}
                    axisLine={false}
                    domain={['dataMin-5', 'dataMax+0']}
                    interval={'preserveEnd'}
                    tickCount={3}
                />
                <YAxis
                    yAxisId="2"
                    dataKey="calories"
                    orientation='left'
                    tickCount={5}
                    domain={['dataMin-100', 'dataMax+0']}
                    hide
                />

                <Tooltip />
                <Bar
                    yAxisId="1"
                    dataKey="kilogram"
                    fill="#282D30"
                    barSize={7}
                    radius={[3, 3, 0, 0]}
                />
                <Bar
                    yAxisId="2"
                    dataKey="calories"
                    fill="#E60000"
                    barSize={7}
                    radius={[3, 3, 0, 0]}
                />
            </BarChart>
        </>
    )
}
export default Activity;
