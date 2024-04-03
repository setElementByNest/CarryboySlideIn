import { useState } from 'react'
import './powergen.css'

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

function Powergen({ setCustom, setCost, setImg }: Prop) {
    const [nowGen, setGen] = useState<number>(1)
    const dataName: string[] = ["No", "MaXpeedingrods", "Dometic PGE121"]
    const dataCost: number[] = [0, 35000, 42000]
    const dataImg: string[] = ['#aaaaaa', '#a0a2a0', '#aa000a']
    const [nowThisImg, setThisImg] = useState<string>(dataImg[0])
    return (
        <div className='powergen'>
            <h2>Power Generator + Fitting</h2>
            <div className='lo1-img-mobile' style={{background: nowThisImg}}></div>
            <div className="powergen-content">
                <div className="powergen-n" onClick={() => {
                    setGen(1);
                    setCustom((prev) => ({ ...prev, powergen: dataName[0] }))
                    setCost((prev) => ({ ...prev, powergen: dataCost[0] }))
                    setImg(dataImg[0])
                    setThisImg(dataImg[0])
                }} style={{ outlineColor: nowGen == 1 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[0]}</h3>
                </div>
                <div className="powergen-n" onClick={() => {
                    setGen(2);
                    setCustom((prev) => ({ ...prev, powergen: dataName[1] }))
                    setCost((prev) => ({ ...prev, powergen: dataCost[1] }))
                    setImg(dataImg[1])
                    setThisImg(dataImg[1])
                }} style={{ outlineColor: nowGen == 2 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[1]}</h3>
                    <h3>35,000 THB</h3>
                </div>
                <div className="powergen-n" onClick={() => {
                    setGen(3);
                    setCustom((prev) => ({ ...prev, powergen: dataName[2] }))
                    setCost((prev) => ({ ...prev, powergen: dataCost[2] }))
                    setImg(dataImg[2])
                    setThisImg(dataImg[2])
                }} style={{ outlineColor: nowGen == 3 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[2]}</h3>
                    <h3>42,000 THB</h3>
                </div>
            </div>
        </div>
    )
}

export default Powergen
