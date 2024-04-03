import { useState } from 'react'
import emailjs from '@emailjs/browser';
import './customer.css'

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
    nowCustom: customIntf,
    nowCost: costIntf,
    num2thb: (num: number, unit: boolean) => string,
    nowFinance: number,
    nowLoan: number,
}

function Customer({ nowCustom, nowCost, num2thb, nowFinance, nowLoan }: Prop) {

    interface statusIntf {
        name: boolean,
        lastname: boolean,
        phone: boolean,
        email: boolean,
    }
    const [nowSent, setSent] = useState<boolean>(false)
    const [nowName, setName] = useState<string>('')
    const [nowLastName, setLastName] = useState<string>('')
    const [nowPhone, setPhone] = useState<string>('')
    const [nowMail, setMail] = useState<string>('')
    const [nowStatus, setStatus] = useState<statusIntf>({
        name: false,
        lastname: false,
        phone: false,
        email: false
    })

    const nowprice = nowCost.carcost + nowCost.laminate + nowCost.aircon + nowCost.powergen + nowCost.rearbox + nowCost.suspension;
    return (
        <div className='customer'>
            <h3 style={{ color: nowStatus.name ? '#cc0000' : '#000000aa' }}>First Name</h3>
            <input type="text" onChange={(e) => { setName(e.target.value) }} style={{outline: nowSent ? '#00ddaa solid 2px' : ''}}/>
            <h3 style={{ color: nowStatus.lastname ? '#cc0000' : '#000000aa' }}>Last Name</h3>
            <input type="text" onChange={(e) => { setLastName(e.target.value) }} style={{outline: nowSent ? '#00ddaa solid 2px' : ''}}/>
            <h3 style={{ color: nowStatus.phone ? '#cc0000' : '#000000aa' }}>Phone</h3>
            <input type="phone" onChange={(e) => { setPhone(e.target.value) }} style={{outline: nowSent ? '#00ddaa solid 2px' : ''}}/>
            <h3 style={{ color: nowStatus.email ? '#cc0000' : '#000000aa' }}>E-mail</h3>
            <input type="email" onChange={(e) => { setMail(e.target.value) }} style={{outline: nowSent ? '#00ddaa solid 2px' : ''}}/>
            <p>
                We will send the your Camper design to Carryboy's seller
                and you follow your contact information above after
                you press order request button below.
            </p>
            <div className="customer-bt" style={{ opacity: nowSent ? '0.4' : '1' }} onClick={() => {
                if (!nowSent) {
                    if (nowName == '' || nowPhone == '' || nowMail == '') {
                        setStatus(prev => ({
                            ...prev,
                            name: nowName == '' ? true : false,
                            lastname: nowLastName == '' ? true : false,
                            phone: nowPhone == '' ? true : false,
                            email: nowMail == '' ? true : false,
                        }))
                        setTimeout(() => {
                            setStatus(prev => ({
                                ...prev,
                                name: false,
                                lastname: false,
                                phone: false,
                                email: false,
                            }))
                        }, 1000)
                    } else {
                        // console.log(nowName, nowLastName, nowPhone, nowMail)
                        let params = {
                            name: nowName + " " + nowLastName,
                            call: nowPhone,
                            email: nowMail,
                            brand: nowCustom.carmodel,
                            laminate: nowCustom.laminate,
                            laminate_cst: num2thb(nowCost.laminate, true),
                            air: nowCustom.aircon,
                            air_cst: num2thb(nowCost.aircon, true),
                            gen: nowCustom.powergen,
                            gen_cst: num2thb(nowCost.powergen, true),
                            rearbox: nowCustom.rearbox,
                            rearbox_cst: num2thb(nowCost.rearbox, true),
                            sus: nowCustom.suspension,
                            sus_cst: num2thb(nowCost.suspension, true),
                            financetype: nowFinance == 0 ? 'Cash' : 'Loan : ' + nowLoan + ' months',
                            sumbill: num2thb(nowprice, true)
                        }
                        emailjs.init("Xl290X9BDIVu9ojp8");
                        emailjs
                            .send("service_abs7yam", "template_8f4k9ej", params)
                            .then(() => { setSent(true) })
                            .catch((e: string) => console.log(e));
                    }
                }
            }}>{nowSent ? 'Sent' : 'Order request'}</div>
        </div>
    )
}

export default Customer
