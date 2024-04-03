import './AppBuildCamper.css'
import type { ThemeConfig } from 'antd';
import { ConfigProvider } from 'antd';
import { useState } from 'react';
import Nav from './assets/all/Nav'
import Layout1 from './assets/buildyourcamper/Layout1'
import Notice from './assets/buildyourcamper/Notice';

function AppBuildCamper() {
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
  const firstCustom = {
    carbrand: '',
    carmodel: 'TOYOTA HILUX',
    laminate: 'Lite',
    aircon: 'Standard',
    powergen: 'No',
    rearbox: 'Matt Black',
    suspension: 'Standard',
  }
  const firstCost = {
    carcost: 0,
    laminate: 0,
    aircon: 0,
    powergen: 0,
    rearbox: 0,
    suspension: 0,
  }
  const [nowCustom, setCustom] = useState<customIntf>(firstCustom)
  const [nowCost, setCost] = useState<costIntf>(firstCost)
  const config: ThemeConfig = {
    token: {
      colorPrimary: '#cc0000',
    },
  };
  const num2thb = (num: number, unit: boolean) => {
    let num2str: string = String(num);
    let strlength: number = num2str.length;
    let thbstr: string = "";
    if (strlength == 0) {
      thbstr = "Include";
    }
    else {
      for (let i = 0; i < strlength; i++) {
        if (strlength - 3 == i && strlength > 3) {
          thbstr = thbstr + ",";
        }
        if (strlength - 6 == i && strlength > 6) {
          thbstr = thbstr + ",";
        }
        thbstr = thbstr + num2str[i];
      }
    }
    return unit ? thbstr + " THB" : thbstr
  }

  return (
    <div className='appBuildCamper'>
      <ConfigProvider theme={config}>
        <Nav />
        <Notice nowCost={nowCost} num2thb={num2thb}/>
        <Layout1 setCustom={setCustom} setCost={setCost} nowCustom={nowCustom} nowCost={nowCost} num2thb={num2thb}/>
      </ConfigProvider>
    </div>
  )
}

export default AppBuildCamper
