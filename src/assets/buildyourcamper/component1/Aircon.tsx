import { useState } from 'react'
import './aircon.css'

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
    setImg: (value: React.SetStateAction<string>) => void,
}

function Aircon({ setCustom, setCost, setImg }: Prop) {
    const [nowAir, setAir] = useState<number>(1)
    const dataName: string[] = ["Standard", "Harrier Plus"]
    const dataCost: number[] = [0, 67500]
    const dataImg: string[] = ['#0a2a00', '#a000a4']
    const [nowThisImg, setThisImg] = useState<string>(dataImg[0])
    return (
        <div className='aircon'>
            <h2>Air Condition</h2>
            <div className='lo1-img-mobile' style={{background: nowThisImg}}></div>
            <div className="aircon-content">
                <div className="aircon-n" onClick={() => {
                    setAir(1);
                    setCustom((prev) => ({ ...prev, aircon: dataName[0] }))
                    setCost((prev) => ({ ...prev, aircon: dataCost[0] }))
                    setImg(dataImg[0])
                    setThisImg(dataImg[0])
                }} style={{ outlineColor: nowAir == 1 ? '#cc0000' : '#cc000000' }}>
                    <h3>Standard</h3>
                    <h3>Include</h3>
                </div>
                <div className="aircon-n" onClick={() => {
                    setAir(2);
                    setCustom((prev) => ({ ...prev, aircon: dataName[1] }))
                    setCost((prev) => ({ ...prev, aircon: dataCost[1] }))
                    setImg(dataImg[1])
                    setThisImg(dataImg[1])
                }} style={{ outlineColor: nowAir == 2 ? '#cc0000' : '#cc000000' }}>
                    <h3>Harrier Plus</h3>
                    <h3>67,500 THB</h3>
                </div>
            </div>
        </div>
    )
}

export default Aircon
