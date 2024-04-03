import { useState } from 'react'
import './suspension.css'

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

function Suspension({ setCustom, setCost, setImg }: Prop) {
    const [nowSus, setSus] = useState<number>(1)
    const dataName: string[] = ["Standard", "AC-Power"]
    const dataCost: number[] = [0, 42000]
    const dataImg: string[] = ['#aaa0a2', '#aaaa00']
    const [nowThisImg, setThisImg] = useState<string>(dataImg[0])
    return (
        <div className='suspension'>
            <h2>Suspension upgrade</h2>
            <div className='lo1-img-mobile' style={{background: nowThisImg}}></div>
            <div className="suspension-content">
                <div className="suspension-n" onClick={() => {
                    setSus(1);
                    setCustom((prev) => ({ ...prev, suspension: dataName[0] }))
                    setCost((prev) => ({ ...prev, suspension: dataCost[0] }))
                    setImg(dataImg[0])
                    setThisImg(dataImg[0])
                }} style={{ outlineColor: nowSus == 1 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[0]}</h3>
                    <h3>Include</h3>
                </div>
                <div className="suspension-n" onClick={() => {
                    setSus(2);
                    setCustom((prev) => ({ ...prev, suspension: dataName[1] }))
                    setCost((prev) => ({ ...prev, suspension: dataCost[1] }))
                    setImg(dataImg[1])
                    setThisImg(dataImg[1])
                }} style={{ outlineColor: nowSus == 2 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[1]}</h3>
                    <h3>42,000 THB</h3>
                </div>
            </div>
        </div>
    )
}

export default Suspension
