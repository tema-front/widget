import { useEffect, useState } from "react"
import { BridgeModalWindow } from "./BridgeModalWindow"
import { Header } from "./Header";
import { SidePanel } from "./SidePanel"
import { Wallet } from "./Wallet";

export const Bridge = () => {

    const [isModalWindow, setIsModalWindow] = useState(false);
    const [modalWindowName, setModalWindowName] = useState('');
    const [modalWindowToken, setModalWindowToken] = useState(false);
    const [visibilityNameList, setVisibilityNameList] = useState(true);
    const [modalWindowID, setModalWindowID] = useState(0);
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState('Ethereum');
    const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('Polygon');
    const [selectedToken, setSelectedToken] = useState({});


    const handleOpeningModalWindow = (name, id) => {
        setIsModalWindow(true);
        setModalWindowToken(false);
        setModalWindowName(name);
        setModalWindowID(id)
    }

    const handleClosingModalWindow = () => {
        setIsModalWindow(false);
        setModalWindowToken(false);
    }

    const handleVisibilityNameList = () => {
        setVisibilityNameList(!visibilityNameList);
    }

    const handleChangeSelectedCurrency = (name) => {
        if (modalWindowID === 1) setSelectedCurrencyTo(name)
        else setSelectedCurrencyFrom(name);
    }

    const handleChangeSelectedToken = (tokenInfo) => {
        setSelectedToken(tokenInfo);
    }

    return (
        <div className="widget-wrp">
            <SidePanel />
            <main className="widget-content">
                <section className="widget-item bridge">
                    <Header />
                    <div className="widget-item-wrp transfer">
                        <div className="widget-item-title-wrp bridge">
                            <h3 className="widget-item-title bridge txt-bold">Bridge</h3>
                            <span className="widget-item-subtitle bridge txt-regular">Trade tokens in an instant</span>
                        </div>
                        <div className="bridge-transfer">
                            <span className="bridge-transfer-title txt-regular">Bridge transfer</span>
                            <div className="bridge-transfer-currencies-wrp">
                                <div className="bridge-transfer-currencies-title-wrp">
                                    <span className="bridge-transfer-currencies-title txt-regular">Transfer from</span>
                                    <span className="bridge-transfer-currencies-title txt-regular">Transfer to</span>
                                </div>
                                <div className="bridge-transfer-currencies">
                                    <button onClick={() => handleOpeningModalWindow('Transfer from', 0)} className="bridge-transfer-currencies-btn txt-regular">
                                        <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="18" fill="#C4C4C4" />
                                        </svg>
                                        {selectedCurrencyFrom}
                                        <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4 4L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                    <div className="bridge-transfer-currencies-translation-icon">
                                        <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.28572 5.71429C0.891226 5.71429 0.57143 5.39449 0.57143 5C0.57143 4.60551 0.891226 4.28572 1.28572 4.28572L10.9898 4.28572L7.92349 1.21936C7.64455 0.940414 7.64455 0.488154 7.92349 0.209208C8.20244 -0.0697374 8.6547 -0.0697374 8.93365 0.209208L13.2182 4.49374C13.2222 4.49778 13.2262 4.50186 13.2302 4.50599C13.2923 4.57075 13.3398 4.64432 13.3727 4.72257C13.4087 4.80786 13.4286 4.90161 13.4286 5C13.4286 5.19008 13.3543 5.36281 13.2333 5.49079C13.2282 5.49614 13.223 5.50142 13.2178 5.50661L8.93365 9.79079C8.6547 10.0697 8.20244 10.0697 7.92349 9.79079C7.64455 9.51184 7.64455 9.05958 7.92349 8.78064L10.9898 5.71429L1.28572 5.71429Z" fill="white" />
                                        </svg>
                                    </div>
                                    <button onClick={() => handleOpeningModalWindow('Transfer to', 1)} className="bridge-transfer-currencies-btn txt-regular">
                                        <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="18" fill="#C4C4C4" />
                                        </svg>
                                        {selectedCurrencyTo}
                                        <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4 4L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                </div>
                                <div className="bridge-transfer-sending-wrp">
                                    <span className="bridge-transfer-currencies-title txt-regular">You send</span>
                                    <div className="bridge-transfer-sending">
                                        <div onClick={() => handleOpeningModalWindow('Transfer from', 0)} className="bridge-transfer-sending-left-wrp">
                                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="18" cy="18" r="18" fill="#C4C4C4" />
                                            </svg>
                                            <div className="bridge-transfer-sending-left">
                                                <span className="bridge-transfer-sending-left-title txt-regular">{selectedCurrencyFrom.slice(0, 3).toUpperCase()}
                                                    <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4 4L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                </span>
                                                <span className="bridge-transfer-sending-left-subtitle txt-regular">0.032 {selectedCurrencyFrom}</span>
                                            </div>
                                        </div>
                                        <div className="bridge-transfer-sending-right-wrp">
                                            <button className="bridge-transfer-sending-right-btn txt-regular">max</button>
                                            <span className="bridge-transfer-sending-right-txt txt-regular">0.0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bridge-transfer-sending-wrp">
                                    <span className="bridge-transfer-currencies-title txt-regular">You recieve</span>
                                    <div className="bridge-transfer-sending">
                                        {Object.keys(selectedToken).length ?
                                            <>
                                                <div onClick={() => { handleOpeningModalWindow('Select a token'); setModalWindowToken(true) }} className="bridge-transfer-sending-left-wrp">
                                                    <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="18" cy="18" r="18" fill="#C4C4C4" />
                                                    </svg>
                                                    <div className="bridge-transfer-sending-left">
                                                        <span className="bridge-transfer-sending-left-title txt-regular">{selectedToken.tokenName}
                                                            <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4 4L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                        </span>
                                                        <span className="bridge-transfer-sending-left-subtitle txt-regular">{selectedToken.tokenTxt}</span>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="bridge-transfer-recieving">
                                                    <button onClick={() => { handleOpeningModalWindow('Select a token'); setModalWindowToken(true) }} className="bridge-transfer-recieving-btn txt-medium">Select a token
                                                        <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4 4L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </button>
                                                </div>
                                                <span className="bridge-transfer-sending-right-txt recieving txt-regular">0.0</span>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div onClick={handleVisibilityNameList} className="bridge-transfer-name-wrp">
                                    <div className="bridge-transfer-name">
                                        <span className="bridge-transfer-name-txt txt-regular">Bridge Name
                                            <span className="bridge-transfer-name-simbol">-</span>
                                        </span>
                                    </div>
                                    {visibilityNameList ?
                                        <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.5" d="M7 4L4 1L1 4" stroke="white" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        :
                                        <svg width="8" height="5" className="rotate" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.5" d="M7 4L4 1L1 4" stroke="white" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                </div>
                                {visibilityNameList &&
                                    <div className="bridge-transfer-name-list">
                                        <div className="bridge-transfer-name-list-item">
                                            <span className="bridge-transfer-name-list-item-txt txt-regular">Transaction time</span>
                                            <span className="bridge-transfer-name-list-item-simbol">-</span>
                                        </div>
                                        <div className="bridge-transfer-name-list-item">
                                            <span className="bridge-transfer-name-list-item-txt txt-regular">Bridge fee</span>
                                            <span className="bridge-transfer-name-list-item-simbol">-</span>
                                        </div>
                                        <div className="bridge-transfer-name-list-item">
                                            <span className="bridge-transfer-name-list-item-txt txt-regular">Network Fee</span>
                                            <span className="bridge-transfer-name-list-item-simbol">-</span>
                                        </div>
                                    </div>
                                }

                                <div className="bridge-transfer-btns">
                                    <button className="bridge-transfer-btn permission txt-regular">Give permission to transfer</button>
                                    <button className="bridge-transfer-btn transfer txt-regular">Transfer</button>
                                </div>
                            </div>
                            {isModalWindow &&
                                <BridgeModalWindow
                                    closeModalWindow={handleClosingModalWindow}
                                    changeSelectedCurrency={handleChangeSelectedCurrency}
                                    changeSelectedToken={handleChangeSelectedToken}
                                    name={modalWindowName}
                                    token={modalWindowToken}
                                />
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}