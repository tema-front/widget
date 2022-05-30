import { useState } from "react";
import { BridgeModalWindow } from "./BridgeModalWindow";
import { SwapModalWindow } from "./SwapModalWindow";

export const Swapper = () => {

    const [isModalWindow, setIsModalWindow] = useState(false);
    const [currentModalWindow, setCurrentModalWindow] = useState('');
    const [selectedTokenFrom, setSelectedTokenFrom] = useState({});
    const [selectedTokenTo, setSelectedTokenTo] = useState({});

    const handleOpeningModalWindow = (id) => {
        setIsModalWindow(true);
        setCurrentModalWindow(id)
    }

    const handleClosingModalWindow = () => {
        setIsModalWindow(false);
    }

    const handleChangeSelectedToken = (tokenInfo) => {
        if (currentModalWindow === 0) setSelectedTokenFrom(tokenInfo);
        else setSelectedTokenTo(tokenInfo);
    }

    return (
        <div className="swapper">
            <div className="swapper-from-wrp">
                <span className="bridge-transfer-currencies-title txt-regular">
                    From
                </span>
                {Object.keys(selectedTokenFrom).length ?
                    <div class="bridge-transfer-sending swap">
                        <div onClick={() => handleOpeningModalWindow(0)} class="bridge-transfer-sending-left-wrp">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="16" cy="16" r="16" fill="#8247E5"></circle>
                                <path
                                    d="M20.3864 13.1958C20.0392 12.9941 19.5927 12.9941 19.1958 13.1958L16.4178 14.8605L14.5326 15.9199L11.8042 17.5846C11.4569 17.7864 11.0104 17.7864 10.6136 17.5846L8.48042 16.273C8.13316 16.0712 7.88512 15.6677 7.88512 15.2136V12.6914C7.88512 12.2878 8.08355 11.8843 8.48042 11.632L10.6136 10.3709C10.9608 10.1691 11.4073 10.1691 11.8042 10.3709L13.9373 11.6825C14.2846 11.8843 14.5326 12.2878 14.5326 12.7418V14.4065L16.4178 13.2967V11.5816C16.4178 11.178 16.2193 10.7745 15.8225 10.5223L11.8538 8.15134C11.5065 7.94955 11.0601 7.94955 10.6632 8.15134L6.5953 10.5727C6.19843 10.7745 6 11.178 6 11.5816V16.3234C6 16.727 6.19843 17.1306 6.5953 17.3828L10.6136 19.7537C10.9608 19.9555 11.4073 19.9555 11.8042 19.7537L14.5326 18.1395L16.4178 17.0297L19.1462 15.4154C19.4935 15.2137 19.9399 15.2137 20.3368 15.4154L22.47 16.6766C22.8172 16.8783 23.0653 17.2819 23.0653 17.7359V20.2582C23.0653 20.6617 22.8668 21.0653 22.47 21.3175L20.3864 22.5786C20.0392 22.7804 19.5927 22.7804 19.1958 22.5786L17.0627 21.3175C16.7154 21.1157 16.4674 20.7122 16.4674 20.2582V18.6439L14.5822 19.7537V21.4184C14.5822 21.822 14.7807 22.2255 15.1775 22.4777L19.1958 24.8487C19.5431 25.0504 19.9896 25.0504 20.3864 24.8487L24.4047 22.4777C24.752 22.276 25 21.8724 25 21.4184V16.6261C25 16.2226 24.8016 15.819 24.4047 15.5668L20.3864 13.1958Z"
                                    fill="white"
                                ></path>
                            </svg>
                            <div class="bridge-transfer-sending-left">
                                <span class="bridge-transfer-sending-left-title txt-regular">
                                    {selectedTokenFrom.tokenName}
                                    <svg
                                        width="8"
                                        height="5"
                                        viewBox="0 0 8 5"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L4 4L7 1"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </span>
                                <span class="bridge-transfer-sending-left-subtitle txt-regular">
                                    {selectedTokenFrom.tokenTxt}
                                </span>
                            </div>
                        </div>
                        <div class="bridge-transfer-sending-right-wrp">
                            <button class="bridge-transfer-sending-right-btn txt-regular">
                                max
                            </button>
                            <span class="bridge-transfer-sending-right-txt txt-regular">
                                0.0
                            </span>
                        </div>
                        <div className="bridge-transfer-currencies-translation-icon swap">
                            <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.28572 5.71429C0.891226 5.71429 0.57143 5.39449 0.57143 5C0.57143 4.60551 0.891226 4.28572 1.28572 4.28572L10.9898 4.28572L7.92349 1.21936C7.64455 0.940414 7.64455 0.488154 7.92349 0.209208C8.20244 -0.0697374 8.6547 -0.0697374 8.93365 0.209208L13.2182 4.49374C13.2222 4.49778 13.2262 4.50186 13.2302 4.50599C13.2923 4.57075 13.3398 4.64432 13.3727 4.72257C13.4087 4.80786 13.4286 4.90161 13.4286 5C13.4286 5.19008 13.3543 5.36281 13.2333 5.49079C13.2282 5.49614 13.223 5.50142 13.2178 5.50661L8.93365 9.79079C8.6547 10.0697 8.20244 10.0697 7.92349 9.79079C7.64455 9.51184 7.64455 9.05958 7.92349 8.78064L10.9898 5.71429L1.28572 5.71429Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    :
                    <div className="bridge-transfer-sending swap from">
                        <div className="bridge-transfer-recieving">
                            <button onClick={() => handleOpeningModalWindow(0)} className="bridge-transfer-recieving-btn txt-medium">
                                Select a token
                                <svg
                                    width="8"
                                    height="5"
                                    viewBox="0 0 8 5"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1L4 4L7 1"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <span className="bridge-transfer-sending-right-txt recieving txt-regular">
                            0.0
                        </span>
                        <div className="bridge-transfer-currencies-translation-icon swap">
                            <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.28572 5.71429C0.891226 5.71429 0.57143 5.39449 0.57143 5C0.57143 4.60551 0.891226 4.28572 1.28572 4.28572L10.9898 4.28572L7.92349 1.21936C7.64455 0.940414 7.64455 0.488154 7.92349 0.209208C8.20244 -0.0697374 8.6547 -0.0697374 8.93365 0.209208L13.2182 4.49374C13.2222 4.49778 13.2262 4.50186 13.2302 4.50599C13.2923 4.57075 13.3398 4.64432 13.3727 4.72257C13.4087 4.80786 13.4286 4.90161 13.4286 5C13.4286 5.19008 13.3543 5.36281 13.2333 5.49079C13.2282 5.49614 13.223 5.50142 13.2178 5.50661L8.93365 9.79079C8.6547 10.0697 8.20244 10.0697 7.92349 9.79079C7.64455 9.51184 7.64455 9.05958 7.92349 8.78064L10.9898 5.71429L1.28572 5.71429Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                }






                <span className="bridge-transfer-currencies-title txt-regular">To</span>
                {Object.keys(selectedTokenTo).length ?
                    <div class="bridge-transfer-sending">
                        <div onClick={() => handleOpeningModalWindow(1)} class="bridge-transfer-sending-left-wrp">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="16" cy="16" r="16" fill="#8247E5"></circle>
                                <path
                                    d="M20.3864 13.1958C20.0392 12.9941 19.5927 12.9941 19.1958 13.1958L16.4178 14.8605L14.5326 15.9199L11.8042 17.5846C11.4569 17.7864 11.0104 17.7864 10.6136 17.5846L8.48042 16.273C8.13316 16.0712 7.88512 15.6677 7.88512 15.2136V12.6914C7.88512 12.2878 8.08355 11.8843 8.48042 11.632L10.6136 10.3709C10.9608 10.1691 11.4073 10.1691 11.8042 10.3709L13.9373 11.6825C14.2846 11.8843 14.5326 12.2878 14.5326 12.7418V14.4065L16.4178 13.2967V11.5816C16.4178 11.178 16.2193 10.7745 15.8225 10.5223L11.8538 8.15134C11.5065 7.94955 11.0601 7.94955 10.6632 8.15134L6.5953 10.5727C6.19843 10.7745 6 11.178 6 11.5816V16.3234C6 16.727 6.19843 17.1306 6.5953 17.3828L10.6136 19.7537C10.9608 19.9555 11.4073 19.9555 11.8042 19.7537L14.5326 18.1395L16.4178 17.0297L19.1462 15.4154C19.4935 15.2137 19.9399 15.2137 20.3368 15.4154L22.47 16.6766C22.8172 16.8783 23.0653 17.2819 23.0653 17.7359V20.2582C23.0653 20.6617 22.8668 21.0653 22.47 21.3175L20.3864 22.5786C20.0392 22.7804 19.5927 22.7804 19.1958 22.5786L17.0627 21.3175C16.7154 21.1157 16.4674 20.7122 16.4674 20.2582V18.6439L14.5822 19.7537V21.4184C14.5822 21.822 14.7807 22.2255 15.1775 22.4777L19.1958 24.8487C19.5431 25.0504 19.9896 25.0504 20.3864 24.8487L24.4047 22.4777C24.752 22.276 25 21.8724 25 21.4184V16.6261C25 16.2226 24.8016 15.819 24.4047 15.5668L20.3864 13.1958Z"
                                    fill="white"
                                ></path>
                            </svg>
                            <div class="bridge-transfer-sending-left">
                                <span class="bridge-transfer-sending-left-title txt-regular">
                                    {selectedTokenTo.tokenName}
                                    <svg
                                        width="8"
                                        height="5"
                                        viewBox="0 0 8 5"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L4 4L7 1"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </span>
                                <span class="bridge-transfer-sending-left-subtitle txt-regular">
                                    {selectedTokenTo.tokenTxt}
                                </span>
                            </div>
                        </div>
                        <div class="bridge-transfer-sending-right-wrp">
                            <button class="bridge-transfer-sending-right-btn txt-regular">
                                max
                            </button>
                            <span class="bridge-transfer-sending-right-txt txt-regular">
                                0.0
                            </span>
                        </div>

                    </div>
                    :
                    <div className="bridge-transfer-sending swap from">
                        <div className="bridge-transfer-recieving">
                            <button onClick={() => handleOpeningModalWindow(1)} className="bridge-transfer-recieving-btn txt-medium">
                                Select a token
                                <svg
                                    width="8"
                                    height="5"
                                    viewBox="0 0 8 5"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 1L4 4L7 1"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <span className="bridge-transfer-sending-right-txt recieving txt-regular">
                            0.0
                        </span>
                    </div>
                }
                {/* <div className="bridge-transfer-sending">
                    <div className="bridge-transfer-recieving">
                        <button onClick={() => handleOpeningModalWindow(1)} className="bridge-transfer-recieving-btn txt-medium">
                            Select a token
                            <svg
                                width="8"
                                height="5"
                                viewBox="0 0 8 5"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L4 4L7 1"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <span className="bridge-transfer-sending-right-txt recieving txt-regular">
                        0.0
                    </span>
                </div> */}
            </div>
            <div className="bridge-transfer-btns">
                <button className="bridge-transfer-btn permission txt-regular">
                    Give permission to swap
                </button>
                <button className="bridge-transfer-btn transfer txt-regular">
                    Swap
                </button>
            </div>
            {isModalWindow &&
                <SwapModalWindow
                    closeModalWindow={handleClosingModalWindow}
                    currentModalWindow={currentModalWindow}
                    name={'Select a token'}
                    changeSelectedToken={handleChangeSelectedToken}
                />
            }
        </div>
    );
};
