import apple from "../assets/apple.svg"
import energy from "../assets/energy.svg"
import chicken from "../assets/chicken.svg"
import cheeseburger from "../assets/cheeseburger.svg"


function Stat(){
    const data = {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
    }
    let stat = { icon: '', color: '', unit: '', title: ''}
    {/*
    switch () {
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
    }*/}

    return(
        <>
            <div className="stat">
                <div className={`stat-icon icon-red`}>
                    <img src={energy} alt={'Calories'} />
                </div>
                <div className="stat-content">
                    <h2 className="stat-title">{data.calorieCount}{"kCal"}</h2>
                    <p className="stat-secondary">{'Calories'}</p>
                </div>
            </div>
            <div className="stat">
                <div className={`stat-icon icon-blue`}>
                    <img src={chicken} alt={'Protéines'} />
                </div>
                <div className="stat-content">
                    <h2 className="stat-title">{data.carbohydrateCount}{"g"}</h2>
                    <p className="stat-secondary">{'Protéines'}</p>
                </div>
            </div>
            <div className="stat">
                <div className={`stat-icon icon-yellow`}>
                    <img src={apple} alt={'Glucides'} />
                </div>
                <div className="stat-content">
                    <h2 className="stat-title">{data.lipidCount}{"g"}</h2>
                    <p className="stat-secondary">{'Glucides'}</p>
                </div>
            </div>
            <div className="stat">
                <div className={`stat-icon icon-pink`}>
                    <img src={cheeseburger} alt={'Lipides'} />
                </div>
                <div className="stat-content">
                    <h2 className="stat-title">{data.proteinCount}{"g"}</h2>
                    <p className="stat-secondary">{'Lipides'}</p>
                </div>
            </div>
        </>
    )
}
export default Stat;