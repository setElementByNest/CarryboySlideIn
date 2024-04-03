import './listorder.css'

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

function Listorder({ nowCustom, nowCost, num2thb }: Prop) {
    return (
        <div className='listorder'>
            <div className="listorder-head">
                <h2>Total Price</h2>
                <h2>{num2thb(nowCost.carcost + nowCost.laminate + nowCost.aircon + nowCost.powergen + nowCost.rearbox + nowCost.suspension, true)}</h2>
            </div>
            <hr style={{margin: '10px 0'}}/>
            <div className="listorder-list">
                <h3 style={{fontWeight: '400', fontSize: '20px'}}>{nowCustom.carmodel}</h3>
                {/* <h3>{num2thb(nowCost.carcost, true)}</h3> */}
            </div>
            <div className="listorder-list">
                <h3>Laminate : {nowCustom.laminate}</h3>
                <h3>{num2thb(nowCost.laminate, true)}</h3>
            </div>
            <div className="listorder-list">
                <h3>Air Condition : {nowCustom.aircon}</h3>
                <h3>{num2thb(nowCost.aircon, true)}</h3>
            </div>
            <div className="listorder-list">
                <h3>Generator : {nowCustom.powergen}</h3>
                <h3>{num2thb(nowCost.powergen, true)}</h3>
            </div>
            <div className="listorder-list">
                <h3>Rear Box : {nowCustom.rearbox}</h3>
                <h3>{num2thb(nowCost.rearbox, true)}</h3>
            </div>
            <div className="listorder-list">
                <h3>Suspenson : {nowCustom.suspension}</h3>
                <h3>{num2thb(nowCost.suspension, true)}</h3>
            </div>
            <hr style={{margin: '10px 0'}}/>
        </div>
    )
}

export default Listorder
