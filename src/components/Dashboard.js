import { Assets } from "./Assets"
import { DashboardChart } from "./DashboardChart"
import { DashboardHistory } from "./DashboardHistory"
import { Header } from "./Header"
import { SidePanel } from "./SidePanel"
import { Wallet } from "./Wallet"

export const Dashboard = () => {

    return (
       <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content">
                <section className="widget-item dashboard">
                    <Header />
                    <h3 className="widget-item-title txt-bold">Dashboard</h3>
                    <div className="dashboard-content-wrp">
                        <DashboardChart />
                        <DashboardHistory />
                    </div>
                    <Assets />
                </section>
            </main>
        </div>
    )
}