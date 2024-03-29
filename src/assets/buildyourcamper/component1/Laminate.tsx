import { useState } from 'react'
import './laminate.css'

function Laminate() {
    const [nowLaminate, setLaminate] = useState<number>(1)
    return (
        <div className='laminate'>
            <h2>Laminate</h2>
            <div className="laminate-group">
                <div className="laminate-congroup" onClick={() => setLaminate(1)}>
                    <div className="laminate-frame laminate-frame-1" style={{outlineColor: nowLaminate == 1 ? '#cc0000' : '#cc000000'}}></div>
                    <h3>Lite</h3>
                </div>
                <div className="laminate-congroup" onClick={() => setLaminate(2)}>
                    <div className="laminate-frame laminate-frame-2" style={{outlineColor: nowLaminate == 2 ? '#cc0000' : '#cc000000'}}></div>
                    <h3>Classic</h3>
                </div>
            </div>
        </div>
    )
}

export default Laminate
