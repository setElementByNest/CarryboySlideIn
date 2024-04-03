import './layout1next.css'

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
    setImg: (value: React.SetStateAction<string>) => void,
}

function Layout1Next({ nowCustom, nowCost, setImg }: Prop) {
    const dataImg: string[] = ['#aa00aa']
    return (
        <div className='layout1next'>
            <h2>Order Your CAMPER</h2>
            <p>
                Continue to check list your CAMPER design and
                finance options and send your CAMPER design to
                Carryboy's seller
            </p>
            <div className="lo1-button" onClick={() => {
                console.log(nowCustom);
                console.log(nowCost);
                setImg(dataImg[0])

                const IDpage2 = document.getElementById('layout1page2') as HTMLElement;
                IDpage2.style.transform = 'translate(0, 0vh)';
            }}>Continue</div>
        </div>
    )
}

export default Layout1Next
