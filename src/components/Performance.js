import {RadarChart, Legend, PolarAngleAxis, PolarGrid, Radar, PolarRadiusAxis} from "recharts";

function Performance({data, kind}){
    // Rotate radar to start with intensity
    const angleStart = 210
   // Format kind
    const titlekind = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité',
    }
    const formatKind = (id) => titlekind[kind[id]]

    return (
        <>
            <RadarChart cx="50%"
                        cy="50%"
                        outerRadius="65%"
                        startAngle={angleStart}
                        endAngle={angleStart + 360}
                        width={250}
                        height={260}
                        data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind"
                                tickFormatter={formatKind}
                                tick={{ fill: 'white', fontSize: '0.875em'}}
                />
                <Radar legendType="none"
                       dataKey="value"
                       stroke="#E60000"
                       fill="#E60000"
                       fillOpacity={0.7}
                />
                <Legend />
            </RadarChart>

        </>
    )
}
export default Performance;
