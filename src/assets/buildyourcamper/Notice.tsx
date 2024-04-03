import './notice.css'

interface costIntf {
    carcost: number,
    laminate: number,
    aircon: number,
    powergen: number,
    rearbox: number,
    suspension: number,
}

interface Prop {
    nowCost: costIntf,
    num2thb: (num:number, unit:boolean) => string,
}

function Notice({ nowCost, num2thb }: Prop) {
    return (
        <div className='notice'>
            <h2>{num2thb(nowCost.carcost + nowCost.laminate + nowCost.aircon + nowCost.powergen + nowCost.rearbox + nowCost.suspension, true)}</h2>
        </div>
    )
}

export default Notice
