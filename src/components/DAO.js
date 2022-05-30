import { SidePanel } from "./SidePanel"

export const DAO = () => {
    return (
       <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content">
                <section className="widget-item DAO">
                    <h3 className="widget-item-title">DAO</h3>
                </section>
            </main>
        </div>
    )
}