import Aircon from './component1/Aircon'
import Carmodel from './component1/Carmodel'
import Laminate from './component1/Laminate'
import Layout1Head from './component1/Layout1Head'
import Powergen from './component1/Powergen'
import Rearbox from './component1/Rearbox'
import Suspension from './component1/Suspension'
import './layout1.css'

function Layout1() {
    return (
        <div className='layout1'>
            <div className="layout1-content-1"></div>
            <div className="layout1-content-2">
                <Layout1Head />
                <Carmodel />
                <Laminate />
                <Aircon />
                <Powergen />
                <Rearbox />
                <Suspension />
            </div>
        </div>
    )
}

export default Layout1
