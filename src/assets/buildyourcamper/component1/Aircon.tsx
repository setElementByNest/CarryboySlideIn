import { useState } from 'react'
import './aircon.css'

function Aircon() {
    const [nowAir, setAir] = useState<number>(1)
    return (
        <div className='aircon'>
            <h2>Air Condition</h2>
            <div className="aircon-content">
                <div className="aircon-n" onClick={() => setAir(1)} style={{outlineColor: nowAir == 1 ? '#cc0000' : '#cc000000'}}>
                    <h3>Standard</h3>
                    <h3>Include</h3>
                </div>
                <div className="aircon-n" onClick={() => setAir(2)} style={{outlineColor: nowAir == 2 ? '#cc0000' : '#cc000000'}}>
                    <h3>Harrier Plus</h3>
                    <h3>67,500 THB</h3>
                </div>
            </div>
        </div>
    )
}

export default Aircon
