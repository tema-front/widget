import { useState } from "react";
import { WalletModalWindow } from "./WalletModalWindow"

export const Wallet = () => {

    const [visibilityModalWindow, setVisibilityModalWindow] = useState(false);

    const [walletsList, setWalletsList] = useState([
        {number: '0x879e...8ae2', account: 1340.85, id: 0, img: ''},
        {number: '0x879e...3ec8', account: 540.03, id: 1, img: ''},
    ]);

    const [currentWalletID, setCurrentWalletID] = useState(0);

    const handleClosingModalWindow = () => {
        setVisibilityModalWindow(false);
    }

    const changeCurrentWallet = (ID) => {
        setCurrentWalletID(ID);
    }

    return (
        <div onClick={() => setVisibilityModalWindow(!visibilityModalWindow)} className="widget-item-top-wallet-wrp">
            <div className="widget-item-top-wallet-img">
                <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                </svg>
            </div>
            <div className="widget-item-top-wallet-info">
                <span className="widget-item-top-wallet txt-regular">{ walletsList[currentWalletID].number }</span>
                <span className="widget-item-top-wallet-score txt-regular">$ { walletsList[currentWalletID].account }</span>
            </div>
            <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {visibilityModalWindow && 
                <WalletModalWindow 
                closeModalWindow={handleClosingModalWindow} 
                walletsList={walletsList} 
                changeCurrentWallet={changeCurrentWallet}
            />}
        </div>
    )
} 