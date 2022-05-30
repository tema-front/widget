import { Header } from "./Header"
import { SidePanel } from "./SidePanel"
import { Swapper } from "./Swapper"

export const Swap = () => {
    return (
       <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content">
                <section className="widget-item swap">
                    <Header />
                    <div className="widget-item-title-wrp bridge">
                        <h3 className="widget-item-title bridge txt-bold">Swap</h3>
                        <span className="widget-item-subtitle bridge txt-regular">Trade tokens in an instant</span>
                    </div>
                    <Swapper />
                </section>
            </main>
        </div>
    )
}