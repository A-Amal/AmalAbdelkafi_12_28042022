
import { Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import '../styles/Activity.css'
import {BarChart} from "recharts";

function Activity({data}){
    const ActivityTooltipStyle ={
        display:' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '16px',
        padding:' 16px 6px',
        backgroundColor:'#E60000',
        color: 'white',
        fontSize: '7px',
    }
    const formatDay = (item) => (new Date(item)).getDate()
    const formatLegend = (value) => value === 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (kCal)'
    return(
        <>
            <div className="header-activity">
                <h2 className="chart-title">Activité quotidienne</h2>
                <ul className="chart-legend">
                    <li>Poids (kg)</li>
                    <li>Calories brûlées (kCal)</li>
                </ul>
            </div>
            <BarChart width={835} height={320}   data={data}>
                <CartesianGrid strokeDasharray="2" vertical={false}/>
                {/*
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconSize={8}
                    iconType="circle"
                    height={100}
                    formatter={formatLegend}
                />
                */}
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

                <Tooltip itemStyle={ActivityTooltipStyle} content={<CustomTooltip />}/>
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

const CustomTooltip = ({ active, payload }) => active ? (
    <div className="chart-tooltip-activity">
        <div>{payload[0].value}kg</div>
        <div>{payload[1].value}kCal</div>
    </div>
) : null
