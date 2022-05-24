import { Dashboard } from "./Dashboard"
import { SidePanel } from "./SidePanel"

export const Widget = () => {
    return (
        <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content">
                <Dashboard />
            </main>
        </div>
    )
}