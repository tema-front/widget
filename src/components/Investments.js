import { useState } from "react"
import { Header } from "./Header";
import { InvestmentsStatistic } from "./InvestmentsStatistic";
import { InvestmentsTabs } from "./InvestmentsTabs";
import { SidePanel } from "./SidePanel"
import { Wallet } from "./Wallet"

export const Investments = () => {

    const [investmentsTab, setInvestmentsTab] = useState('dao');

    return (
       <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content investments">
                <section className="widget-item investments-wrp">
                    <div className="widget-item investments">
                        <Header />
                        <InvestmentsStatistic />
                        <div className="statistic-navigate">
                            <div className="statistic-navigate-item">
                                <input defaultChecked type="radio" className="statistic-navigate-radio" name="statistic-navigate" id="statistic-navigate-assets" />
                                <label onClick={() => setInvestmentsTab('dao')} htmlFor="statistic-navigate-assets" className="statistic-navigate-btn txt-regular">DAO</label>
                            </div>
                            <div className="statistic-navigate-item">
                                <input type="radio" className="statistic-navigate-radio" name="statistic-navigate" id="statistic-navigate-statistic" />
                                <label onClick={() => setInvestmentsTab('reyna')} htmlFor="statistic-navigate-statistic" className="statistic-navigate-btn txt-regular">Reyna Investments</label>   
                            </div>


                            {/* <button className="statistic-navigate-btn txt-regular active">My assets</button> */}
                            {/* <button className="statistic-navigate-btn txt-regular">Statistic</button>
                            <button className="statistic-navigate-btn txt-regular">History</button> */}
                        </div>
                    </div>
                </section>
                <div className="widget-content">
                    <InvestmentsTabs tab={investmentsTab} />
                </div>
            </main>
        </div>
    )
}