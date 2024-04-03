import { useState } from 'react'
import './rearbox.css'

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

function Rearbox({ setCustom, setCost, setImg }: Prop) {
    const [nowRB, setRB] = useState<number>(1)
    const dataName: string[] = ["Matt Black", "Gross White"]
    const dataCost: number[] = [0, 0]
    const dataImg: string[] = ['#aa0a2a', '#aaa000']
    const [nowThisImg, setThisImg] = useState<string>(dataImg[0])
    return (
        <div className='rearbox'>
            <h2>Rear Box</h2>
            <div className='lo1-img-mobile' style={{background: nowThisImg}}></div>
            <div className="rearbox-group">
                <div className="rearbox-congroup" onClick={() => {
                    setRB(1);
                    setCustom((prev) => ({ ...prev, rearbox: dataName[0] }))
                    setCost((prev) => ({ ...prev, rearbox: dataCost[0] }))
                    setImg(dataImg[0])
                    setThisImg(dataImg[0])
                }}>
                    <div className="rearbox-frame rearbox-frame-1" style={{ outlineColor: nowRB == 1 ? '#cc0000' : '#cc000000' }}></div>
                    <h3>{dataName[0]}</h3>
                </div>
                <div className="rearbox-congroup" onClick={() => {
                    setRB(2);
                    setCustom((prev) => ({ ...prev, rearbox: dataName[1] }))
                    setCost((prev) => ({ ...prev, rearbox: dataCost[1] }))
                    setImg(dataImg[1])
                    setThisImg(dataImg[1])
                }}>
                    <div className="rearbox-frame rearbox-frame-2" style={{ outlineColor: nowRB == 2 ? '#cc0000' : '#cc000000' }}></div>
                    <h3>{dataName[1]}</h3>
                </div>
            </div>
        </div>
    )
}

export default Rearbox
