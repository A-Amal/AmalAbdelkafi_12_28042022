import {PieChart, Cell, Legend, Pie} from "recharts";
import '../styles/Score.css'

function Score({data}){
    return(
        <>
            <h2 className="chart-title-score">Score</h2>

                <PieChart width={260}
                          height={160}
                >
                    <Pie
                        cx={'50%'} cy={'50%'}
                        startAngle={90} endAngle={450}
                        innerRadius={'85%'} outerRadius={'100%'}
                        cornerRadius={'50%'}
                        dataKey="value"
                        data={[{name: 'score', value: data}, {name: 'total', value: 1 - data}]}
                    >
                        <Cell fill="#E60000" stroke="#E60000" />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>
                    <Pie
                        cx={'50%'} cy={'50%'}
                        outerRadius={'85%'}
                        fill="#FFFFFF"
                        data={[{name: 'ring', value: 100}]}
                        dataKey="value"
                    />
                    <Legend
                        verticalAlign="middle"
                        align="center"
                    />
                </PieChart>

        </>
    )
}
export default Score;
