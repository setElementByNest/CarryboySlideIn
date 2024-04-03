import React from 'react'
import './finance.css'

interface costIntf {
    carcost: number,
    laminate: number,
    aircon: number,
    powergen: number,
    rearbox: number,
    suspension: number,
}
interface Prop {
    nowCost: costIntf,
    num2thb: (num: number, unit: boolean) => string,
    setFinance: (value: React.SetStateAction<number>) => void,
    setLoan: (value: React.SetStateAction<number>) => void,
    nowFinance: number,
    nowLoan: number,
}

function Finance({ nowCost, num2thb, setFinance, nowFinance, setLoan, nowLoan }: Prop) {
    const nowprice = nowCost.carcost + nowCost.laminate + nowCost.aircon + nowCost.powergen + nowCost.rearbox + nowCost.suspension;
    const priceDown = Math.trunc(nowprice * 0.5);
    const priceLoan = Math.trunc((priceDown + priceDown * 0.035 * (nowLoan / 12)) / nowLoan) + 1
    return (
        <div className='finance'>
            <h2>Finance Option</h2>
            <p>Finance option and terms will be confirmed after order.</p>
            <div className="finance-bt">
                <div className="finance-bt-n" style={{
                    background: nowFinance == 0 ? '#ffffff' : 'none',
                    boxShadow: nowFinance == 0 ? '0px 1px 4px 1px #00000044' : 'none',
                }} onClick={() => {
                    setFinance(0);
                }}>Cash</div>
                <div className="finance-bt-n" style={{
                    background: nowFinance == 1 ? '#ffffff' : 'none',
                    boxShadow: nowFinance == 1 ? '0px 1px 4px 1px #00000044' : 'none',
                }} onClick={() => {
                    setFinance(1);
                }}>Loan</div>
            </div>
            <div className="finance-list">
                <h3>Net Price (Vat 7%)</h3>
                <h3>{num2thb(nowprice, true)}</h3>
            </div>
            <hr style={{ margin: '10px 0' }} />
            <div style={{ display: nowFinance == 1 ? '' : 'none' }}>
                <div className="finance-list">
                    <h3>Downpayment 50%</h3>
                    <h3>{num2thb(priceDown, true)}</h3>
                </div>
                <div className="finance-list">
                    <h3>Term :</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="loan-n" style={{ outlineColor: nowLoan == 24 ? '#cc0000' : '#cc000000' }} onClick={() => {
                            setLoan(24);
                        }}>24</div>
                        <div className="loan-n" style={{ outlineColor: nowLoan == 36 ? '#cc0000' : '#cc000000' }} onClick={() => {
                            setLoan(36);
                        }}>36</div>
                        <div className="loan-n" style={{ outlineColor: nowLoan == 48 ? '#cc0000' : '#cc000000' }} onClick={() => {
                            setLoan(48);
                        }}>48</div>
                        <h3 style={{ margin: '0 0 0 10px' }}>months</h3>
                    </div>
                </div>
                <hr style={{ margin: '5px 0 10px' }} />
                <div className="finance-list">
                    <h3>Loan Payment</h3>
                    <h3>{num2thb(priceLoan, true)} /month</h3>
                </div>
                <hr style={{ margin: '5px 0 10px' }} />
            </div>
            {/* <div className="finance-list">
                <h4>Insurance costs and the Act</h4>
                <h4>{num2thb(43662, true)}</h4>
            </div>
            <div className="finance-list">
                <h4>Vehicle registration fee</h4>
                <h4>{num2thb(20000, true)}</h4>
            </div>
            <div className="finance-list">
                <h4>Red license plate (refundable)</h4>
                <h4>{num2thb(3000, true)}</h4>
            </div>
            <hr style={{ margin: '10px 0 5px' }} />
            <div className="finance-list">
                <h3>Total cost at pickup day</h3>
                <h3>{num2thb(66662, true)}</h3>
            </div>
            <hr style={{ margin: '5px 0 10px' }} /> */}
        </div>
    )
}

export default Finance
