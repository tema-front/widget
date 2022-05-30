export const BridgeModalWindow = ({closeModalWindow, changeSelectedCurrency, changeSelectedToken, name, token}) => {
    return (
        <section onClick={closeModalWindow} className="bridge-modalwindow-wrp">
            <div onClick={(event) => event.stopPropagation()} className="bridge-modalwindow">
                <button onClick={closeModalWindow} className="bridge-modalwindow-btn">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1L1 7L7 13" stroke="white" stroke-width="2" strokeLinejoin="round"/>
                    </svg>
                </button>
                <h4 className="bridge-modalwindow-title txt-bold">{ name }</h4>
                {token ? 
                    <>
                    <input type="search" className="bridge-modalwindow-search txt-regular" placeholder="Search name or paste address" />
                    <ul className="bridge-modalwindow-list token">
                        <li 
                            onClick={() => {changeSelectedToken(
                                {
                                    tokenName: 'BIT', 
                                    tokenTxt: '1254112.13 BitRewards ($ 0.002)',
                                    tokenRate: '1702'
                                }); 
                                closeModalWindow();
                            }} className="bridge-modalwindow-list-item token">
                            <div className="bridge-modalwindow-list-item-wrp">
                                <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                                </svg>
                                <div className="bridge-modalwindow-list-item-title-wrp">
                                    <span className="bridge-modalwindow-list-item-title token txt-medium">BIT</span>
                                    <span className="bridge-modalwindow-list-item-subtitle txt-regular">1254112.13 BitRewards ($ 0.002)</span>
                                </div>
                            </div>
                            <span className="bridge-modalwindow-list-item-rate txt-regular">$ 1702</span>
                        </li>
                        <li 
                            onClick={() => {changeSelectedToken(
                                {
                                    tokenName: 'GMY', 
                                    tokenTxt: '1254112.13 BitRewards ($ 0.002)',
                                    tokenRate: '1702'
                                }); 
                                closeModalWindow();
                            }} className="bridge-modalwindow-list-item token">
                            <div className="bridge-modalwindow-list-item-wrp">
                                <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                                </svg>
                                <div className="bridge-modalwindow-list-item-title-wrp">
                                    <span className="bridge-modalwindow-list-item-title token txt-medium">GMY</span>
                                    <span className="bridge-modalwindow-list-item-subtitle txt-regular">1254112.13 BitRewards ($ 0.002)</span>
                                </div>
                            </div>
                            <span className="bridge-modalwindow-list-item-rate txt-regular">$ 1702</span>
                        </li>
                        <li 
                            onClick={() => {changeSelectedToken(
                                {
                                    tokenName: 'BITTO', 
                                    tokenTxt: '1254112.13 BitRewards ($ 0.002)',
                                    tokenRate: '1702'
                                }); 
                                closeModalWindow();
                            }} className="bridge-modalwindow-list-item token">
                            <div className="bridge-modalwindow-list-item-wrp">
                                <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                                </svg>
                                <div className="bridge-modalwindow-list-item-title-wrp">
                                    <span className="bridge-modalwindow-list-item-title token txt-medium">BITTO</span>
                                    <span className="bridge-modalwindow-list-item-subtitle txt-regular">1254112.13 BitRewards ($ 0.002)</span>
                                </div>
                            </div>
                            <span className="bridge-modalwindow-list-item-rate txt-regular">$ 1702</span>
                        </li>
                        <li 
                            onClick={() => {changeSelectedToken(
                                {
                                    tokenName: 'Bird.Money', 
                                    tokenTxt: '1254112.13 BitRewards ($ 0.002)',
                                    tokenRate: '1702'
                                }); 
                                closeModalWindow();
                            }} className="bridge-modalwindow-list-item token">
                            <div className="bridge-modalwindow-list-item-wrp">
                                <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                                </svg>
                                <div className="bridge-modalwindow-list-item-title-wrp">
                                    <span className="bridge-modalwindow-list-item-title token txt-medium">Bird.Money</span>
                                    <span className="bridge-modalwindow-list-item-subtitle txt-regular">1254112.13 BitRewards ($ 0.002)</span>
                                </div>
                            </div>
                            <span className="bridge-modalwindow-list-item-rate txt-regular">$ 1702</span>
                        </li>
                        <li 
                            onClick={() => {changeSelectedToken(
                                {
                                    tokenName: 'BiFi', 
                                    tokenTxt: '1254112.13 BitRewards ($ 0.002)',
                                    tokenRate: '1702'
                                }); 
                                closeModalWindow();
                            }} className="bridge-modalwindow-list-item token">
                            <div className="bridge-modalwindow-list-item-wrp">
                                <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                                </svg>
                                <div className="bridge-modalwindow-list-item-title-wrp">
                                    <span className="bridge-modalwindow-list-item-title token txt-medium">BiFi</span>
                                    <span className="bridge-modalwindow-list-item-subtitle txt-regular">1254112.13 BitRewards ($ 0.002)</span>
                                </div>
                            </div>
                            <span className="bridge-modalwindow-list-item-rate txt-regular">$ 1702</span>
                        </li>
                    </ul>
                    </>
                    : 
                    <ul className="bridge-modalwindow-list">
                        <li onClick={() => {changeSelectedCurrency('Ethereum'); closeModalWindow()}} className="bridge-modalwindow-list-item">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                            </svg>
                            <span className="bridge-modalwindow-list-item-title txt-regular">Ethereum</span>
                        </li>
                        <li onClick={() => {changeSelectedCurrency('Polygon'); closeModalWindow()}} className="bridge-modalwindow-list-item">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                            </svg>
                            <span className="bridge-modalwindow-list-item-title txt-regular">Polygon</span>
                        </li>
                        <li onClick={() => {changeSelectedCurrency('Arbitrium'); closeModalWindow()}} className="bridge-modalwindow-list-item">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                            </svg>
                            <span className="bridge-modalwindow-list-item-title txt-regular">Arbitrium</span>
                        </li>
                        <li onClick={() => {changeSelectedCurrency('Optimism'); closeModalWindow()}} className="bridge-modalwindow-list-item">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                            </svg>
                            <span className="bridge-modalwindow-list-item-title txt-regular">Optimism</span>
                        </li>
                        <li onClick={() => {changeSelectedCurrency('BSC'); closeModalWindow()}} className="bridge-modalwindow-list-item">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                            </svg>
                            <span className="bridge-modalwindow-list-item-title txt-regular">BSC</span>
                        </li>
                        <li onClick={() => {changeSelectedCurrency('Avalanche'); closeModalWindow()}} className="bridge-modalwindow-list-item">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                            </svg>
                            <span className="bridge-modalwindow-list-item-title txt-regular">Avalanche</span>
                        </li>
                        <li onClick={() => {changeSelectedCurrency('Fantom'); closeModalWindow()}} className="bridge-modalwindow-list-item">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                            </svg>
                            <span className="bridge-modalwindow-list-item-title txt-regular">Fantom</span>
                        </li>
                    </ul>
                }
            </div>
        </section>
    )
}
