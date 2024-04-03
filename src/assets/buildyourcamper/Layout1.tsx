import { useState } from 'react'
import Aircon from './component1/Aircon'
import Carmodel from './component1/Carmodel'
import Laminate from './component1/Laminate'
import Layout1Head from './component1/Layout1Head'
import Layout1Next from './component1/Layout1Next'
import Powergen from './component1/Powergen'
import Rearbox from './component1/Rearbox'
import Suspension from './component1/Suspension'
import Layout1Page2 from './component2/Layout1Page2'
import './layout1.css'

interface customIntf {
    carbrand: string,
    carmodel: string,
    laminate: string,
    aircon: string,
    powergen: string,
    rearbox: string,
    suspension: string,
}
interface costIntf {
    carcost: number,
    laminate: number,
    aircon: number,
    powergen: number,
    rearbox: number,
    suspension: number,
}

interface Prop {
    setCustom: (value: React.SetStateAction<customIntf>) => void,
    setCost: (value: React.SetStateAction<costIntf>) => void,
    nowCustom: customIntf,
    nowCost: costIntf,
    num2thb: (num:number, unit:boolean) => string,
}

function Layout1({ setCustom, setCost, nowCustom, nowCost, num2thb }: Prop) {
    const [nowImg, setImg] = useState<string>('#cccccc')
    return (
        <div className='layout1' id='layout1'>
            <div className="layout1-content-1" style={{background: nowImg}}></div>
            <div className="layout1-content-2">
                <Layout1Head />
                <Carmodel setCustom={setCustom} setCost={setCost} setImg={setImg}/>
                <Laminate setCustom={setCustom} setCost={setCost} setImg={setImg}/>
                <Aircon setCustom={setCustom} setCost={setCost} setImg={setImg}/>
                <Powergen setCustom={setCustom} setCost={setCost} setImg={setImg}/>
                <Rearbox setCustom={setCustom} setCost={setCost} setImg={setImg}/>
                <Suspension setCustom={setCustom} setCost={setCost} setImg={setImg}/>
                <Layout1Next nowCustom={nowCustom} nowCost={nowCost} setImg={setImg}/>
                <Layout1Page2 nowCustom={nowCustom} nowCost={nowCost} num2thb={num2thb}/>
            </div>
        </div>
    )
}

export default Layout1
