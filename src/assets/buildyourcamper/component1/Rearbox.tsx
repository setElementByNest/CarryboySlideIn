import { useState } from 'react'
import './rearbox.css'

function Rearbox() {
    const [nowRB, setRB] = useState<number>(1)
    return (
        <div className='rearbox'>
            <h2>Rear Box</h2>
            <div className="rearbox-group">
                <div className="rearbox-congroup" onClick={() => setRB(1)}>
                    <div className="rearbox-frame rearbox-frame-1" style={{outlineColor: nowRB == 1 ? '#cc0000' : '#cc000000'}}></div>
                    <h3>Matt Black</h3>
                </div>
                <div className="rearbox-congroup" onClick={() => setRB(2)}>
                    <div className="rearbox-frame rearbox-frame-2" style={{outlineColor: nowRB == 2 ? '#cc0000' : '#cc000000'}}></div>
                    <h3>Gross White</h3>
                </div>
            </div>
        </div>
    )
}

export default Rearbox
