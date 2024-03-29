import './carmodel.css'
import { useState } from 'react'
import { Select } from 'antd';

function Carmodel() {
    interface CarOptionInf {
        value: string;
        label: string;
    }

    const [nowCarbase, setCarbase] = useState<number>(0);
    const [nowCarmodel, setCarmodel] = useState<string>('');
    const [nowVB, setVB] = useState<string>('');
    const [nowList, setList] = useState<CarOptionInf[]>([]);
    const optioncar0: CarOptionInf[] = [
        { value: 'TOYOTA HILUX REVO', label: 'TOYOTA HILUX REVO' },
        { value: 'TOYOTA HILUX CHAMP', label: 'TOYOTA HILUX CHAMP' },
        { value: 'MITSUBISHI TRITON', label: 'MITSUBISHI TRITON' },
    ]
    const optioncar1: CarOptionInf[] = [
        { value: '2.4 ENTRY 2WD A/T', label: '2.4 ENTRY 2WD A/T' },
        { value: '2.8 ENTRY 2WD M/T', label: '2.8 ENTRY 2WD M/T' },
        { value: '2.8 ENTRY 4WD M/T', label: '2.8 ENTRY 4WD M/T' },
        { value: '2.8 ENTRY 4WD A/T', label: '2.8 ENTRY 4WD A/T' },
    ]
    const optioncar2: CarOptionInf[] = [
        { value: '2.4 Diesel AT LWB', label: '2.4 Diesel AT LWB' },
    ]
    const optioncar3: CarOptionInf[] = [
        { value: '2.4 Pro 4WD A/T', label: '2.4 Pro 4WD A/T' },
    ]
    return (
        <div className='carmodel'>
            <h2>Vehicle Base</h2>
            <h3>{nowCarbase == 0 ? "Please Select" : "Your car is : "}</h3>
            <h3>{nowCarbase == 1 ? nowVB : ""}</h3>
            <h3>{nowCarbase == 2 ? nowVB + " - " + nowCarmodel : ""}</h3>
            <div className="carbase">
                <h4 style={{color: nowCarbase < 1 ? '#cc0000' : '#000000'}}>Vehicle Base</h4>
                <Select
                    defaultValue="-- Select Vehicle Base --"
                    value={nowCarbase > 0 ? nowVB : "-- Select Vehicle Base --"}
                    className='carbase-select'
                    // status={nowCarbase === 1 ? "error" : ''} 
                    onChange={(value: string) => {
                        setCarbase(1);
                        setCarmodel('')
                        setVB(value);
                        switch (value) {
                            case 'TOYOTA HILUX REVO':
                                setList(optioncar1);
                                break;
                            case 'TOYOTA HILUX CHAMP':
                                setList(optioncar2);
                                break;
                            case 'MITSUBISHI TRITON':
                                setList(optioncar3);
                                break;
                        }
                    }}
                    options={optioncar0}
                />
                <h4 style={{color: nowCarbase < 2 ? '#cc0000' : '#000000'}}>Car Model</h4>
                <Select
                    defaultValue="-- Select Car Model --"
                    value={nowCarbase < 2 ? "-- Select Car Model --" : nowCarmodel}
                    className='carbase-select'
                    onChange={(value: string) => { setCarbase(2); setCarmodel(value); }}
                    options={
                        nowList
                    }
                />
                {/* <div className="carbase-n" style={{ background: nowCarbase == 0 ? '#ffffff' : '#ffffff00' }} onClick={() => setCarbase(0)}>HILUX<i className="material-icons">{nowCarbase == 0 ? '\ue837' : '\ue836'}</i></div>
                <div className="carbase-n" style={{ background: nowCarbase == 1 ? '#ffffff' : '#ffffff00' }} onClick={() => setCarbase(1)}>ISUZU<i className="material-icons">{nowCarbase == 1 ? '\ue837' : '\ue836'}</i></div>
                <div className="carbase-n" style={{ background: nowCarbase == 2 ? '#ffffff' : '#ffffff00' }} onClick={() => setCarbase(2)}>FORD<i className="material-icons">{nowCarbase == 2 ? '\ue837' : '\ue836'}</i></div>
                <div className="carbase-n" style={{ background: nowCarbase == 3 ? '#ffffff' : '#ffffff00' }} onClick={() => setCarbase(3)}>MITSUBISHI<i className="material-icons">{nowCarbase == 3 ? '\ue837' : '\ue836'}</i></div> */}
            </div>
        </div>
    )
}

export default Carmodel
