import './carmodel.css'
import React, { useState } from 'react'

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

function Carmodel({ setCustom, setCost, setImg }: Prop) {
    const dataName: string[] = ["TOYOTA HILUX", "ISUZU", "FORD", "MITSUBISHI"]
    const dataCost: number[] = [0, 0, 0, 0]
    const dataImg: string[] = ['#cccccc', '#00aa00', '#0000aa', '#000000']
    const [nowCar, setCar] = useState<number>(1)
    const [nowThisImg, setThisImg] = useState<string>(dataImg[0])
    return (
        <div className='carmodel'>
            <h2>Car Model</h2>
            <div className='lo1-img-mobile' style={{background: nowThisImg}}></div>
            <h4>D/CAB</h4>
            <div className="carmodel-content">
                <div className="carmodel-n" onClick={() => {
                    setCar(1);
                    setCustom((prev) => ({ ...prev, carmodel: dataName[0] }))
                    setCost((prev) => ({ ...prev, carcost: dataCost[0] }))
                    setImg(dataImg[0])
                    setThisImg(dataImg[0])
                }} style={{ outlineColor: nowCar == 1 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[0]}</h3>
                    {/* <h3>{dataCost[0]}</h3> */}
                </div>
                <div className="carmodel-n" onClick={() => {
                    setCar(2);
                    setCustom((prev) => ({ ...prev, carmodel: dataName[1] }))
                    setCost((prev) => ({ ...prev, carcost: dataCost[1] }))
                    setImg(dataImg[1])
                    setThisImg(dataImg[1])
                }} style={{ outlineColor: nowCar == 2 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[1]}</h3>
                    {/* <h3>{dataCost[1]}</h3> */}
                </div>
                <div className="carmodel-n" onClick={() => {
                    setCar(3);
                    setCustom((prev) => ({ ...prev, carmodel: dataName[2] }))
                    setCost((prev) => ({ ...prev, carcost: dataCost[2] }))
                    setImg(dataImg[2])
                    setThisImg(dataImg[2])
                }} style={{ outlineColor: nowCar == 3 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[2]}</h3>
                    {/* <h3>{dataCost[0]}</h3> */}
                </div>
                <div className="carmodel-n" onClick={() => {
                    setCar(4);
                    setCustom((prev) => ({ ...prev, carmodel: dataName[3] }))
                    setCost((prev) => ({ ...prev, carcost: dataCost[3] }))
                    setImg(dataImg[3])
                    setThisImg(dataImg[3])
                }} style={{ outlineColor: nowCar == 4 ? '#cc0000' : '#cc000000' }}>
                    <h3>{dataName[3]}</h3>
                    {/* <h3>{dataCost[1]}</h3> */}
                </div>
            </div>
        </div>
    )
}

export default Carmodel
