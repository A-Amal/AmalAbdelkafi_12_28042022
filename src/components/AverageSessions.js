import {Line, LineChart,  Tooltip, XAxis, YAxis} from "recharts";
import '../styles/AverageSessions.css'
import * as propTypes from "prop-types";

function AverageSessions({data}){
    const sessionStyleTooltip = {
        width:"39px",
        hide:"25px",
        color: 'black',
        backgroundColor:'white',
        fontSize: '7px'
    };
    const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
    const formatDay = (item) => daysWeek[item]
    return(
        <div>
            <h2 className="chart-title-session">Durée moyenne des sessions</h2>
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
                <Tooltip contentStyle={sessionStyleTooltip} content={<CustomTooltip />} />
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

const CustomTooltip = ({ active, payload }) => active ? (
    <div className="chart-tooltip-session">
        <div>{payload[0].value} min</div>
    </div>
) : null

// Props types
AverageSessions.propTypes = {
    data: propTypes.array.isRequired,
};
CustomTooltip.propTypes = {
    active: propTypes.bool,
    payload: propTypes.array,
};
