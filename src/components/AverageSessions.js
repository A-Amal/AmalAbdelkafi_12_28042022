import {Line, LineChart,  Tooltip, XAxis, YAxis} from "recharts";
import '../styles/AverageSessions.css'

function AverageSessions(){
    const data=[
        {
            day: 1,
            sessionLength: 30
        },
        {
            day: 2,
            sessionLength: 40
        },
        {
            day: 3,
            sessionLength: 50
        },
        {
            day: 4,
            sessionLength: 30
        },
        {
            day: 5,
            sessionLength: 30
        },
        {
            day: 6,
            sessionLength: 50
        },
        {
            day: 7,
            sessionLength: 50
        }
    ]
    const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
    const formatDay = (item) => daysWeek[item]
    return(
        <div>
            <h2 className="chart-title">Durée moyenne des sessions</h2>
            <LineChart data={data} width={260}
                       height={150}>
                <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickFormatter={formatDay}
                    tick={{fill: '#FFFFFF'}}
                    tickMargin={10}
                    tickSize={0}
                    padding={{ left: 5, right: 5 }}
                />
                <YAxis
                    hide
                    domain={['dataMin-10', 'dataMax+1']}
                />
                <Tooltip  />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#FFFFFF"
                    activeDot={{ r: 6}}
                    dot={{r: 0}}
                    strokeWidth={2}
                />
            </LineChart>

        </div>
    )
}
export default AverageSessions;
