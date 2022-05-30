import { InvestmentsListDAO } from "./InvestmentsListDAO"
import { InvestmentsListReyna } from "./InvestmentsListReyna"

export const InvestmentsTabs = ({ tab }) => {
    return (
        <>
            {(tab === 'dao') && <div className='widget-item'><InvestmentsListDAO full={true} /></div>}
            {(tab === 'reyna') && <div className='widget-item'><InvestmentsListReyna full={true} /></div>}
        </>
    )
}