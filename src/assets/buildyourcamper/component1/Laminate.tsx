import { useState } from 'react'
import './laminate.css'

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

function Laminate({ setCustom, setCost, setImg }: Prop) {
    const [nowLaminate, setLaminate] = useState<number>(1)
    const dataName: string[] = ["Lite", "Classic"]
    const dataCost: number[] = [0, 0]
    const dataImg: string[] = ['#a0a000', '#000a40']
    const [nowThisImg, setThisImg] = useState<string>(dataImg[0])
    return (
        <div className='laminate'>
            <h2>Laminate</h2>
            <div className='lo1-img-mobile' style={{background: nowThisImg}}></div>
            <div className="laminate-group">
                <div className="laminate-congroup" onClick={() => {
                    setLaminate(1);
                    setCustom((prev) => ({ ...prev, laminate: dataName[0] }))
                    setCost((prev) => ({ ...prev, laminate: dataCost[0] }))
                    setImg(dataImg[0])
                    setThisImg(dataImg[0])
                }}>
                    <div className="laminate-frame laminate-frame-1" style={{ outlineColor: nowLaminate == 1 ? '#cc0000' : '#cc000000' }}></div>
                    <h3>Lite</h3>
                </div>
                <div className="laminate-congroup" onClick={() => {
                    setLaminate(2);
                    setCustom((prev) => ({ ...prev, laminate: dataName[1] }))
                    setCost((prev) => ({ ...prev, laminate: dataCost[1] }))
                    setImg(dataImg[1])
                    setThisImg(dataImg[1])
                }}>
                    <div className="laminate-frame laminate-frame-2" style={{ outlineColor: nowLaminate == 2 ? '#cc0000' : '#cc000000' }}></div>
                    <h3>Classic</h3>
                </div>
            </div>
        </div>
    )
}

export default Laminate
