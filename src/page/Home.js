
import data from '../dataMocked'
import Activity from "../components/Activity";
import '../styles/Home.css'
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";

function Home(){
    const userinfo = data.USER_MAIN_DATA.find(x => x.id = 12)
    console.log(userinfo.userInfos.firstName)

    return(
            <section className="homepage">
                        <header className="section-header">
                            <h1 className="section-title">Bonjour {userinfo.userInfos.firstName}</h1>
                            <p className="section-secondary">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        </header>
                        <div className="homepage-grid">
                            <div className="chart-activity">
                                <Activity />
                            </div>
                            <div className="chart-average-sessions">
                               <AverageSessions />
                            </div>
                            <div className="chart-performance">
                                <Performance />
                            </div>
                            <div className="chart-score">
                                <p>score</p>
                            </div>
                            <div className="stats">
                                <p>stat</p>
                            </div>
                        </div>
            </section>

    )
}
export default Home;
