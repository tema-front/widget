import { SidePanel } from "./SidePanel"

export const Settings = () => {
    return (
       <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content">
                <section className="widget-item settings">
                    <h3 className="widget-item-title">Settings</h3>
                </section>
            </main>
        </div>
    )
}