
import data from '../dataMocked'
import Activity from "../components/Activity";
import '../styles/Home.css'
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";
import Score from "../components/Score";
import Stat from "../components/Stat";
import {useEffect, useState} from "react";
import {getUser, getUserActivity, getUserAverageSessions, getUserPerformance} from "../Service";
import {useParams} from "react-router-dom";


function Home(){
    const params = useParams()
    const [userApi, setUserApi] = useState()
    const [activityApi, setActivityApi] = useState()
    const [sessionsApi, setSessionsApi] = useState()
    const [performanceApi, setPerformanceApi] = useState()

    useEffect(() => {
        if(!process.env.REACT_APP_USE_API) {
            setUserApi( data.USER_MAIN_DATA.find(x => x.id === params.id))
            setActivityApi( data.USER_ACTIVITY.find(x => x.userId === userApi.id))
            setSessionsApi(data.USER_AVERAGE_SESSIONS.find(x => x.userId === userApi.id))
            setPerformanceApi( data.USER_PERFORMANCE.find(x => x.userId === userApi.id))
        }
        else{
            getUser(params.id).then(setUserApi)
            getUserActivity(params.id).then(setActivityApi)
            getUserAverageSessions(params.id).then(setSessionsApi)
            getUserPerformance(params.id).then(setPerformanceApi)
        }

    }, [])
    console.log(userApi)
    console.log(activityApi)
    console.log(sessionsApi)
    console.log(performanceApi)

    return(
            <section className="homepage">
                        <header className="section-header">
                            <h1 className="section-title">Bonjour {userApi && userApi.userInfos.firstName}</h1>
                            <p className="section-secondary">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        </header>
                        <div className="homepage-grid">
                            <div className="chart-activity-stats">
                                <div className="chart-activity">
                                    {activityApi && <Activity data={activityApi.sessions}/>}
                                </div>
                                <div className="chart-sessions-performance-score">
                                    <div className="chart-average-sessions">
                                        {sessionsApi && <AverageSessions data={sessionsApi.sessions}/>}
                                    </div>
                                    <div className="chart-performance">
                                        {performanceApi && <Performance data={performanceApi.data}  kind={performanceApi.kind}/>}
                                    </div>
                                    <div className="chart-score">
                                        {userApi && <Score data={userApi.score||userApi.todayScore}/>}
                                    </div>
                                </div>
                            </div>
                            <div className="stats">
                                {userApi && Object.keys(userApi.keyData).map((key) => (
                                    <Stat type={key} value={userApi.keyData[key]} key={key} />
                                ))}
                            </div>
                        </div>
            </section>

    )
}
export default Home;
