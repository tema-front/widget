import { Assets } from "./Assets"
import { EarnFeatured } from "./EarnFeatured"
import { Header } from "./Header"
import { SidePanel } from "./SidePanel"
import { Wallet } from "./Wallet"

export const Earn = () => {
    return (
       <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content">
                <section className="widget-item earn">
                    <Header />                  
                    <h3 className="widget-item-title txt-bold">Earn</h3>
                    <div className="earn-pricing">
                        <div className="earn-pricing-item earn-pricing-left">
                            <div className="earn-pricing-left-item">
                                <span className="earn-pricing-item-title txt-regular">Holdings</span>
                                <span className="earn-pricing-item-rate txt-bold">
                                    <span className="earn-pricing-item-rate-simbol">$</span>
                                    0.<span className="earn-pricing-item-rate-cents">00</span>
                                </span>
                            </div>
                            <div className="earn-pricing-left-item">
                                <span className="earn-pricing-item-title txt-regular">Earnings</span>
                                <span className="earn-pricing-item-rate txt-bold">
                                    <span className="earn-pricing-item-rate-simbol">$</span>
                                    0.<span className="earn-pricing-item-rate-cents">00</span>
                                </span>
                            </div>
                        </div>
                        <div className="earn-pricing-item earn-pricing-right">
                            <div className="earn-pricing-right-item">
                                <span className="earn-pricing-item-title txt-regular">Est. yearly yield</span>
                                <span className="earn-pricing-item-rate right txt-bold">
                                    <span className="earn-pricing-item-rate-simbol">$</span>
                                    0.<span className="earn-pricing-item-rate-cents">00</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <EarnFeatured />
                    <Assets />
                </section>
            </main>
        </div>
    )
}