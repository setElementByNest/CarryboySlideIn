import { useState } from 'react'
import './powergen.css'

function Powergen() {
    const [nowGen, setGen] = useState<number>(1)
    return (
        <div className='powergen'>
            <h2>Power Generator + Fitting</h2>
            <div className="powergen-content">
                <div className="powergen-n" onClick={() => setGen(1)} style={{outlineColor: nowGen == 1 ? '#cc0000' : '#cc000000'}}>
                    <h3>MaXpeedingrods</h3>
                    <h3>35,000 THB</h3>
                </div>
                <div className="powergen-n" onClick={() => setGen(2)} style={{outlineColor: nowGen == 2 ? '#cc0000' : '#cc000000'}}>
                    <h3>Dometic PGE121</h3>
                    <h3>42,000 THB</h3>
                </div>
            </div>
        </div>
    )
}

export default Powergen
