
import data from '../dataMocked'
import Activity from "../components/Activity";
import '../styles/Home.css'
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";
import Score from "../components/Score";
import Stat from "../components/Stat";

function Home(){
    let user = data.USER_MAIN_DATA.find(x => x.id === 12)
    let activity = data.USER_ACTIVITY.find(x => x.userId === user.id)
    let sessions = data.USER_AVERAGE_SESSIONS.find(x => x.userId === user.id)
    let performance = data.USER_PERFORMANCE.find(x => x.userId === user.id)
    console.log(process.env.REACT_APP_USE_API)
    console.log(process.env.REACT_APP_API_URL)
    return(
            <section className="homepage">
                        <header className="section-header">
                            <h1 className="section-title">Bonjour {user.userInfos.firstName}</h1>
                            <p className="section-secondary">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        </header>
                        <div className="homepage-grid">
                            <div className="chart-activity-stats">
                                <div className="chart-activity">
                                    <Activity data={activity.sessions}/>
                                </div>
                                <div className="chart-sessions-performance-score">
                                    <div className="chart-average-sessions">
                                       <AverageSessions data={sessions.sessions}/>
                                    </div>
                                    <div className="chart-performance">
                                        <Performance data={performance.data}  kind={performance.kind}/>
                                    </div>
                                    <div className="chart-score">
                                        <Score data={user.score||user.todayScore}/>
                                    </div>
                                </div>
                            </div>
                            <div className="stats">
                                <Stat data={user.keyData}/>
                            </div>
                        </div>
            </section>

    )
}
export default Home;
