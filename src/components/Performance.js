import {RadarChart, Legend, PolarAngleAxis, PolarGrid, Radar, PolarRadiusAxis} from "recharts";

function Performance(){
    const data = [
        {
            value: 80,
            kind: 'Cardio'
        },
        {
            value: 120,
            kind:'Energie'
        },
        {
            value: 140,
            kind: 'Endurance'
        },
        {
            value: 50,
            kind: 'Force'
        },
        {
            value: 200,
            kind: 'Vitesse'
        },
        {
            value: 90,
            kind: 'Intensité'
        }
    ]
    // Rotate radar to start with intensity
    const angleStart = 210

    // Format kind
    const titleKind = {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité',
    }

    const formatKind = (id) => titleKind[data.find(item => item.kind[id])]
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
