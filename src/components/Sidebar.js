import meditation from '../assets/meditation.svg'
import swim from '../assets/swim.svg'
import bike from '../assets/bike.svg'
import dumbbell from '../assets/dumbbell.svg'
import '../styles/Sidebar.css'

function Sidebar(){
    return(
        <aside className="sidebar">
            <ul className="sidebar-menu">
                <li className="sidebar-menu-link">
                    <img src={meditation} alt="Meditation" />
                </li>
                <li className="sidebar-menu-link">
                    <img src={swim} alt="Meditation" />
                </li>
                <li className="sidebar-menu-link">
                    <img src={bike} alt="Meditation" />
                </li>
                <li className="sidebar-menu-link">
                    <img src={dumbbell} alt="Meditation" />
                </li>
            </ul>
            <div className="sidebar-copyright"><span>Copyright, SportSee 2020</span></div>
        </aside>
    )
}
export default Sidebar;
