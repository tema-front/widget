import { useEffect, useRef, useState } from "react"

export const DashboardHistory = ({ full }) => {

    const history = useRef(null);

    const [historyList, setHistoryList] = useState([
        {operation: 'Send', date: '12 Dec', value: '- 145.56 cake', id: 0},
        {operation: 'Receive', date: '24 Nov', value: '03.05 ETH', id: 1},
        {operation: 'Receive', date: '20 Nov', value: '34.07 REP', id: 2},
        {operation: 'Send', date: '16 Nov', value: '- 1 760.00 CRV', id: 3},
        {operation: 'Receive', date: '07 Oct', value: '744.47 LINK', id: 4}
    ]);

    useEffect(() => {
        if (full) history.current.classList.add('full');
    }, [])

    return (
        <section ref={history} className="dashboard-content-history">
            <div className="widget-item-subtitle-wrp">
                <h4 className="widget-item-subtitle txt-medium">History</h4>
                {!full && <button className="widget-item-subtitle-txt txt-medium">View all</button>}
            </div>
            <div className="dashboard-content">
                <ul className="history-list">
                    {historyList.map(item => 
                        <li key={item.id} className="history-list-item">
                            <div className="history-list-item-left-wrp">
                                <div className="history-list-item-left-icon">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                                    </svg>
                                </div>
                                <div className="history-list-item-left">
                                    <span className="history-list-item-left-operation txt-regular">{ item.operation }</span>
                                    <span className="history-list-item-left-date txt-regular">{ item.date }</span>
                                </div>
                            </div>
                            <div className="history-list-item-right">
                                <span className="history-list-item-right-txt txt-regular">{ item.value }</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}