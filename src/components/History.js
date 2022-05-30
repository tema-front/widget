import { SidePanel } from "./SidePanel"

export const History = () => {
    return (
       <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content">
                <section className="widget-item history">
                    <h3 className="widget-item-title">History</h3>
                </section>
            </main>
        </div>
    )
}