import { useState } from 'react';
import Customer from './Customer';
import Finance from './Finance';
import Listorder from './Listorder';
import './layout1page2.css'

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
    nowCustom: customIntf,
    nowCost: costIntf,
    num2thb: (num:number, unit:boolean) => string,
}

function Layout1Page2({ nowCustom, nowCost, num2thb }: Prop) {
    const [nowFinance, setFinance] = useState<number>(0);
    const [nowLoan, setLoan] = useState<number>(24);
    return (
        <div className='layout1page2' id='layout1page2'>
            <div className="lo2-back">
                <h3 onClick={() => {
                const IDpage1 = document.getElementById('layout1') as HTMLElement;
                const IDpage2 = document.getElementById('layout1page2') as HTMLElement;
                IDpage1.scrollTop = 0;
                IDpage2.style.transform = 'translate(0, 100vh)';
            }}><i className="material-icons">&#xe5cb;</i>Edit your CAMPER</h3>
            </div>
            <Listorder nowCustom={nowCustom} nowCost={nowCost} num2thb={num2thb}/>
            <Finance nowCost={nowCost} num2thb={num2thb} setFinance={setFinance} nowFinance={nowFinance} setLoan={setLoan} nowLoan={nowLoan}/>
            <Customer nowCustom={nowCustom} nowCost={nowCost} num2thb={num2thb} nowFinance={nowFinance} nowLoan={nowLoan}/>
        </div>
    )
}

export default Layout1Page2
