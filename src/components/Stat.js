import apple from "../assets/apple.svg"
import energy from "../assets/energy.svg"
import chicken from "../assets/chicken.svg"
import cheeseburger from "../assets/cheeseburger.svg"
import '../styles/Stat.css'
import * as propTypes from "prop-types";



function Stat({type, value}){

    let stat = { icon: '', color: '', unit: '', title: ''}

    switch (type) {
        case 'calorieCount':
            stat = {
                icon: energy,
                color: 'red',
                unit: 'kCal',
                title: 'Calories'
            }
            break
        case 'carbohydrateCount':
            stat = {
                icon: chicken,
                color: 'blue',
                unit: 'g',
                title: 'Protéines'
            }
            break
        case 'lipidCount':
            stat = {
                icon: apple,
                color: 'yellow',
                unit: 'g',
                title: 'Glucides'
            }
            break
        case 'proteinCount':
            stat = {
                icon: cheeseburger,
                color: 'pink',
                unit: 'g',
                title: 'Lipides'
            }
            break
        default: break
    }

    return(
        <>
            <div className="stat">
                <div className={`stat-icon icon-${stat.color}`}>
                    <img src={stat.icon} className={"img"} alt={stat.title} />
                </div>
                <div className="stat-content">
                    <h2 className="stat-title">{value}{stat.unit}</h2>
                    <p className="stat-secondary">{stat.title}</p>
                </div>
            </div>

        </>
    )
}
export default Stat;

// Props types
Stat.propTypes = {
    type: propTypes.string.isRequired,
    value: propTypes.number.isRequired,
}
