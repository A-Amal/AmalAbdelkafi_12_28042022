import data from '../dataMocked'
import Activity from "../components/Activity";
import '../styles/Home.css'
import AverageSessions from "../components/AverageSessions";
import Performance from "../components/Performance";
import Score from "../components/Score";
import Stat from "../components/Stat";
import {useEffect, useState} from "react";
import {getUser, getUserActivity, getUserAverageSessions, getUserPerformance} from "../Service";
import {Link, useParams} from "react-router-dom";
import {MoonLoader} from "react-spinners";


function Home() {
    const params = useParams()
    const [userApi, setUserApi] = useState()
    const [activityApi, setActivityApi] = useState()
    const [sessionsApi, setSessionsApi] = useState()
    const [performanceApi, setPerformanceApi] = useState()


    useEffect(() => {
        if (process.env.REACT_APP_USE_API === 'true') {
            console.log("v1 mock")
            setUserApi(data.USER_MAIN_DATA.find(x => x.id == params.id))
            setActivityApi(data.USER_ACTIVITY.find(x => x.userId == params.id))
            setSessionsApi(data.USER_AVERAGE_SESSIONS.find(x => x.userId == params.id))
            setPerformanceApi(data.USER_PERFORMANCE.find(x => x.userId == params.id))
        }
        if (process.env.REACT_APP_USE_API === "false") {
            console.log("v2 Api")
            getUser(params.id).then(setUserApi)
            getUserActivity(params.id).then(setActivityApi)
            getUserAverageSessions(params.id).then(setSessionsApi)
            getUserPerformance(params.id).then(setPerformanceApi)
        }
    }, [params.id])

    return (<>
            {params.id === '12' || params.id === '18' ? (
                <section className="homepage">
                    <header className="section-header">
                        <h1 className="section-title">Bonjour {userApi ? userApi.userInfos.firstName :
                            <MoonLoader color={" #FF0000"} />}</h1>
                        <p className="section-secondary">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </header>
                    <div className="homepage-grid">
                        <div className="chart-activity-stats">
                            <div className="chart-activity">
                                {activityApi ? <Activity data={activityApi.sessions}/> :
                                    <MoonLoader color={" #FF0000"}/>}
                            </div>
                            <div className="chart-sessions-performance-score">
                                <div className="chart-average-sessions">
                                    {sessionsApi ? <AverageSessions data={sessionsApi.sessions}/> :
                                        <MoonLoader color={" #FF0000"} />}
                                </div>
                                <div className="chart-performance">
                                    {performanceApi ?
                                        <Performance data={performanceApi.data} kind={performanceApi.kind}/> :
                                        <MoonLoader color={" #FF0000"}/>}
                                </div>
                                <div className="chart-score">
                                    {userApi ? <Score data={userApi.score || userApi.todayScore}/> :
                                        <MoonLoader color={" #FF0000"} />}
                                </div>
                            </div>
                        </div>
                        <div className="stats">
                            {userApi ? (Object.keys(userApi.keyData).map((key) => (
                                <Stat type={key} value={userApi.keyData[key]} key={key}/>
                            ))) : <MoonLoader color={" #FF0000"} />}
                        </div>
                    </div>
                </section>) : (
                <section className="homepage">
                    <div className="page-error404">
                        <h1 className="page-error404-title">404</h1>
                        <p className="page-error404-secondary">Oups! La page que vous demandez n'existe pas.</p>
                        <Link to="/" className="page-error404-link">Retourner sur la page d’accueil</Link>
                    </div>
                </section>)
            }
        </>
    )
}

export default Home;
