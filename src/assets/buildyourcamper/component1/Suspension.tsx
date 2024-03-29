import { useState } from 'react'
import './suspension.css'

function Suspension() {
    const [nowSus, setSus] = useState<number>(1)
    return (
        <div className='suspension'>
            <h2>Suspension upgrade</h2>
            <div className="suspension-content">
                <div className="suspension-n" onClick={() => setSus(1)} style={{outlineColor: nowSus == 1 ? '#cc0000' : '#cc000000'}}>
                    <h3>Standard</h3>
                    <h3>Include</h3>
                </div>
                <div className="suspension-n" onClick={() => setSus(2)} style={{outlineColor: nowSus == 2 ? '#cc0000' : '#cc000000'}}>
                    <h3>AC-Power</h3>
                    <h3>42,000 THB</h3>
                </div>
            </div>
        </div>
    )
}

export default Suspension
