export const Dashboard = () => {
    return (
        <section className="widget-item dashboard">
            <div className="widget-item-top dashboard">
                <div className="widget-item-top-search-wrp">
                    <input type="search" className="widget-item-top-search" placeholder="Search for tokens, pools, and vaults" />
                    <div className="widget-item-top-search-img">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M18.9009 17.5994L15.5 14.2261C16.8201 12.5802 17.4594 10.491 17.2864 8.38814C17.1135 6.28531 16.1414 4.32866 14.5701 2.92054C12.9988 1.51241 10.9477 0.759829 8.83855 0.817543C6.7294 0.875257 4.72253 1.73888 3.23058 3.23083C1.73863 4.72277 0.875013 6.72965 0.817299 8.83879C0.759585 10.9479 1.51216 12.999 2.92029 14.5703C4.32842 16.1416 6.28506 17.1137 8.38789 17.2867C10.4907 17.4597 12.5799 16.8204 14.2259 15.5003L17.5992 18.8736C17.6844 18.9595 17.7858 19.0277 17.8975 19.0743C18.0092 19.1208 18.129 19.1448 18.25 19.1448C18.371 19.1448 18.4909 19.1208 18.6026 19.0743C18.7143 19.0277 18.8157 18.9595 18.9009 18.8736C19.0661 18.7027 19.1584 18.4743 19.1584 18.2365C19.1584 17.9988 19.0661 17.7704 18.9009 17.5994ZM9.08337 15.5003C7.81427 15.5003 6.57367 15.1239 5.51846 14.4189C4.46324 13.7138 3.6408 12.7117 3.15514 11.5392C2.66948 10.3667 2.54241 9.07649 2.79 7.83178C3.03758 6.58707 3.64871 5.44373 4.5461 4.54634C5.44349 3.64896 6.58683 3.03783 7.83154 2.79024C9.07625 2.54265 10.3664 2.66972 11.5389 3.15538C12.7114 3.64105 13.7136 4.46349 14.4186 5.5187C15.1237 6.57392 15.5 7.81452 15.5 9.08361C15.5 10.7854 14.824 12.4175 13.6206 13.6209C12.4173 14.8242 10.7852 15.5003 9.08337 15.5003Z" />
                        </svg>
                    </div>
                </div>
                <div className="widget-item-top-right">
                    <div className="widget-item-top-prices-wrp">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8283 4.76551L16.4166 3.35384L15.1241 2.06134C15.0387 1.97587 14.9372 1.90807 14.8255 1.86182C14.7139 1.81556 14.5942 1.79176 14.4733 1.79176C14.3524 1.79176 14.2328 1.81556 14.1211 1.86182C14.0094 1.90807 13.9079 1.97587 13.8225 2.06134C13.737 2.14681 13.6692 2.24828 13.623 2.35995C13.5767 2.47162 13.5529 2.5913 13.5529 2.71217C13.5529 2.83305 13.5767 2.95273 13.623 3.0644C13.6692 3.17607 13.737 3.27754 13.8225 3.36301L14.7391 4.27967L13.9783 6.56217C13.8174 7.04711 13.7948 7.56728 13.913 8.06435C14.0312 8.56142 14.2855 9.01573 14.6475 9.37634L17.3516 12.1263V16.4163C17.3516 16.6595 17.2551 16.8926 17.0832 17.0645C16.9113 17.2364 16.6781 17.333 16.435 17.333C16.1919 17.333 15.9587 17.2364 15.7868 17.0645C15.6149 16.8926 15.5183 16.6595 15.5183 16.4163V14.583C15.5183 13.8537 15.2286 13.1542 14.7129 12.6385C14.1971 12.1227 13.4977 11.833 12.7683 11.833H11.8333V3.58301C11.8333 2.85366 11.5436 2.15419 11.0279 1.63846C10.5121 1.12274 9.81266 0.833008 9.08331 0.833008H3.58331C2.85397 0.833008 2.15449 1.12274 1.63877 1.63846C1.12304 2.15419 0.833313 2.85366 0.833313 3.58301V16.4163C0.833313 17.1457 1.12304 17.8452 1.63877 18.3609C2.15449 18.8766 2.85397 19.1663 3.58331 19.1663H9.08331C9.81266 19.1663 10.5121 18.8766 11.0279 18.3609C11.5436 17.8452 11.8333 17.1457 11.8333 16.4163V13.6663H12.75C12.9931 13.6663 13.2263 13.7629 13.3982 13.9348C13.5701 14.1067 13.6666 14.3399 13.6666 14.583V16.4163C13.6666 17.1457 13.9564 17.8452 14.4721 18.3609C14.9878 18.8766 15.6873 19.1663 16.4166 19.1663C17.146 19.1663 17.8455 18.8766 18.3612 18.3609C18.8769 17.8452 19.1666 17.1457 19.1666 16.4163V8.01051C19.1677 7.40821 19.0501 6.81161 18.8204 6.25481C18.5908 5.69801 18.2537 5.19193 17.8283 4.76551ZM9.99998 16.4163C9.99998 16.6595 9.9034 16.8926 9.73149 17.0645C9.55959 17.2364 9.32643 17.333 9.08331 17.333H3.58331C3.3402 17.333 3.10704 17.2364 2.93513 17.0645C2.76322 16.8926 2.66665 16.6595 2.66665 16.4163V9.99967H9.99998V16.4163ZM9.99998 8.16634H2.66665V3.58301C2.66665 3.33989 2.76322 3.10674 2.93513 2.93483C3.10704 2.76292 3.3402 2.66634 3.58331 2.66634H9.08331C9.32643 2.66634 9.55959 2.76292 9.73149 2.93483C9.9034 3.10674 9.99998 3.33989 9.99998 3.58301V8.16634ZM17.3333 9.46801L15.9216 8.05634C15.8054 7.9378 15.7235 7.7899 15.6848 7.62846C15.646 7.46701 15.6519 7.29807 15.7016 7.13967L16.1691 5.72801L16.5266 6.09467C17.0358 6.60315 17.3254 7.29095 17.3333 8.01051V9.46801Z"/>
                        </svg>
                        <span className="widget-item-top-prices">97</span>
                        <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4 4L7 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="widget-item-top-currency-wrp">
                        <span className="widget-item-top-currency">ETH</span>
                        <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4 4L7 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="widget-item-top-wallet-wrp">
                        <div className="widget-item-top-wallet-img">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="18" fill="#C4C4C4"/>
                            </svg>
                        </div>
                        <div className="widget-item-top-wallet-info">
                            <span className="widget-item-top-wallet">0x879e...8ae2</span>
                            <span className="widget-item-top-wallet-score">$ 1340.85</span>
                        </div>
                        <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4 4L7 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="widget-item-title-wrp">
                <h3 className="widget-item-title">Dashboard</h3>
                <button className="widget-item-networks-btn">
                    All networks

                    <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="dashboard-content-wrp">
                <section className="dashboard-content-balance">
                    <h4 className="widget-item-subtitle">
                        Total balance
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="16" height="16" fill="#F0F0F0"/>
                            <g clip-path="url(#clip0_301_403)">
                            <rect width="1440" height="900" transform="translate(-535 -215)" fill="#1D1D28"/>
                            <g filter="url(#filter0_f_301_403)">
                            <circle cx="905" cy="685" r="576" fill="#52FF00" fill-opacity="0.07"/>
                            </g>
                            <path opacity="0.3" d="M7.4675 10.4675C7.43525 10.5031 7.40519 10.5407 7.3775 10.58C7.34912 10.6218 7.32642 10.6672 7.31 10.715C7.28838 10.7575 7.27321 10.803 7.265 10.85C7.26132 10.8999 7.26132 10.9501 7.265 11C7.26247 11.0984 7.28302 11.196 7.325 11.285C7.35869 11.3781 7.41243 11.4626 7.48242 11.5326C7.55241 11.6026 7.63693 11.6563 7.73 11.69C7.81978 11.7297 7.91685 11.7502 8.015 11.7502C8.11316 11.7502 8.21023 11.7297 8.3 11.69C8.39308 11.6563 8.4776 11.6026 8.54759 11.5326C8.61758 11.4626 8.67132 11.3781 8.705 11.285C8.73831 11.1938 8.75359 11.097 8.75 11C8.75058 10.9013 8.73166 10.8034 8.69433 10.7121C8.65701 10.6207 8.60202 10.5376 8.5325 10.4675C8.46278 10.3972 8.37983 10.3414 8.28844 10.3033C8.19704 10.2653 8.09901 10.2457 8 10.2457C7.901 10.2457 7.80297 10.2653 7.71157 10.3033C7.62018 10.3414 7.53723 10.3972 7.4675 10.4675ZM8 0.5C6.51664 0.5 5.0666 0.939867 3.83323 1.76398C2.59986 2.58809 1.63856 3.75943 1.07091 5.12987C0.50325 6.50032 0.354725 8.00832 0.644114 9.46318C0.933503 10.918 1.64781 12.2544 2.6967 13.3033C3.7456 14.3522 5.08197 15.0665 6.53683 15.3559C7.99168 15.6453 9.49968 15.4968 10.8701 14.9291C12.2406 14.3614 13.4119 13.4001 14.236 12.1668C15.0601 10.9334 15.5 9.48336 15.5 8C15.5 7.01509 15.306 6.03982 14.9291 5.12987C14.5522 4.21993 13.9997 3.39314 13.3033 2.6967C12.6069 2.00026 11.7801 1.44781 10.8701 1.0709C9.96019 0.693993 8.98492 0.5 8 0.5ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14ZM8 4.25C7.6048 4.24975 7.2165 4.35359 6.87419 4.55108C6.53187 4.74857 6.2476 5.03274 6.05 5.375C5.99574 5.46036 5.9593 5.55582 5.94288 5.65563C5.92647 5.75544 5.93041 5.85754 5.95448 5.95579C5.97854 6.05404 6.02223 6.1464 6.08292 6.22733C6.1436 6.30825 6.22003 6.37606 6.30761 6.42668C6.39518 6.4773 6.49209 6.50969 6.5925 6.52188C6.69292 6.53408 6.79476 6.52584 6.89191 6.49766C6.98905 6.46947 7.07949 6.42193 7.15779 6.35789C7.23609 6.29385 7.30062 6.21463 7.3475 6.125C7.41358 6.01055 7.50873 5.91559 7.62331 5.84973C7.7379 5.78388 7.86785 5.74948 8 5.75C8.19892 5.75 8.38968 5.82902 8.53033 5.96967C8.67099 6.11032 8.75 6.30109 8.75 6.5C8.75 6.69891 8.67099 6.88968 8.53033 7.03033C8.38968 7.17098 8.19892 7.25 8 7.25C7.80109 7.25 7.61033 7.32902 7.46967 7.46967C7.32902 7.61032 7.25 7.80109 7.25 8V8.75C7.25 8.94891 7.32902 9.13968 7.46967 9.28033C7.61033 9.42098 7.80109 9.5 8 9.5C8.19892 9.5 8.38968 9.42098 8.53033 9.28033C8.67099 9.13968 8.75 8.94891 8.75 8.75V8.615C9.24603 8.43502 9.66302 8.08642 9.92808 7.63015C10.1931 7.17388 10.2894 6.63897 10.2001 6.11892C10.1107 5.59887 9.8414 5.12676 9.43925 4.78514C9.03709 4.44351 8.52766 4.25409 8 4.25Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_f_301_403" x="-631" y="-851" width="3072" height="3072" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="480" result="effect1_foregroundBlur_301_403"/>
                            </filter>
                            <clipPath id="clip0_301_403">
                            <rect width="1440" height="900" fill="white" transform="translate(-535 -215)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </h4>
                    <div className="dashboard-content-chart-wrp dashboard-content">
                        <div className="dashboard-balance-top">
                            <div className="dashboard-balance-wrp">
                                <span className="dashboard-balance">$ 1 340.85</span>
                                <span className="dashboard-balance-txt">
                                    <svg width="8" height="6" viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8186 0.561871C2.9049 0.451915 3.00794 0.354611 3.12438 0.273115C3.77688 -0.183564 4.69788 -0.0542838 5.1815 0.56187L7.71087 3.78444C7.89864 4.02366 8 4.31355 8 4.61133C8 5.37827 7.3416 6 6.52942 6L1.47068 6C1.15534 6 0.848351 5.90428 0.595012 5.72697C-0.0574847 5.27029 -0.194389 4.40059 0.289225 3.78444L2.8186 0.561871Z"/>
                                    </svg>
                                    1.03% ($ 12.36)
                                </span>
                            </div>
                            <div className="dashboard-balance-hug">
                                <button className="dashboard-balance-hug-btn">1H</button>
                                <button className="dashboard-balance-hug-btn">7D</button>
                                <button className="dashboard-balance-hug-btn">1W</button>
                                <button className="dashboard-balance-hug-btn">1M</button>
                                <button className="dashboard-balance-hug-btn">1Y</button>
                            </div>
                        </div>

                        <div className="dashboard-content-chart">

                        </div>
                    </div>
                </section>
                <section className="dashboard-content-history">
                    <div className="widget-item-subtitle-wrp">
                        <h4 className="widget-item-subtitle">History</h4>
                        <span className="widget-item-subtitle-txt">View all</span>
                    </div>
                    <div className="dashboard-content">
                        <ul className="history-list">
                            <li className="history-list-item">
                                <div className="history-list-item-left-wrp">
                                    <div className="history-list-item-left-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                                        </svg>
                                    </div>
                                    <div className="history-list-item-left">
                                        <span className="history-list-item-left-operation">Recieve</span>
                                        <span className="history-list-item-left-date">12 Dec</span>
                                    </div>
                                </div>
                                <div className="history-list-item-right">
                                    <span className="history-list-item-right-txt">03.05 ETH</span>
                                </div>
                            </li>
                            <li className="history-list-item">
                                <div className="history-list-item-left-wrp">
                                    <div className="history-list-item-left-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                                        </svg>
                                    </div>
                                    <div className="history-list-item-left">
                                        <span className="history-list-item-left-operation">Recieve</span>
                                        <span className="history-list-item-left-date">12 Dec</span>
                                    </div>
                                </div>
                                <div className="history-list-item-right">
                                    <span className="history-list-item-right-txt">03.05 ETH</span>
                                </div>
                            </li>
                            <li className="history-list-item">
                                <div className="history-list-item-left-wrp">
                                    <div className="history-list-item-left-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                                        </svg>
                                    </div>
                                    <div className="history-list-item-left">
                                        <span className="history-list-item-left-operation">Recieve</span>
                                        <span className="history-list-item-left-date">12 Dec</span>
                                    </div>
                                </div>
                                <div className="history-list-item-right">
                                    <span className="history-list-item-right-txt">03.05 ETH</span>
                                </div>
                            </li>
                            <li className="history-list-item">
                                <div className="history-list-item-left-wrp">
                                    <div className="history-list-item-left-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                                        </svg>
                                    </div>
                                    <div className="history-list-item-left">
                                        <span className="history-list-item-left-operation">Recieve</span>
                                        <span className="history-list-item-left-date">12 Dec</span>
                                    </div>
                                </div>
                                <div className="history-list-item-right">
                                    <span className="history-list-item-right-txt">03.05 ETH</span>
                                </div>
                            </li>
                            <li className="history-list-item">
                                <div className="history-list-item-left-wrp">
                                    <div className="history-list-item-left-icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                                        </svg>
                                    </div>
                                    <div className="history-list-item-left">
                                        <span className="history-list-item-left-operation">Recieve</span>
                                        <span className="history-list-item-left-date">12 Dec</span>
                                    </div>
                                </div>
                                <div className="history-list-item-right">
                                    <span className="history-list-item-right-txt">03.05 ETH</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <section className="dashboard-content-assets">
                <div className="widget-item-subtitle-wrp">
                    <h4 className="widget-item-subtitle">Assets</h4>
                </div>
                <table className="assets dashboard-content">
                    <tr className="assets-titles">
                        <th className="assets-title assets-titles-asset">Asset
                            <svg width="6" height="4" viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M1 1L3 3L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </th>
                        <th className="assets-title assets-titles-network">Network
                            <svg width="6" height="4" viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M1 1L3 3L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </th>
                        <th className="assets-title assets-titles-price">Price
                            <svg width="6" height="4" viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M1 1L3 3L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </th>
                        <th className="assets-title assets-titles-balance">Balance
                            <svg width="6" height="4" viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M1 1L3 3L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </th>
                        <th className="assets-title assets-titles-value">Value
                            <svg width="6" height="4" viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M1 1L3 3L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </th>
                    </tr>
                    <tr className="assets-item">
                        <th className="assets-item-title assets-list-item-asset-wrp">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                            </svg>
                            <div className="assets-list-item-asset">
                                <span className="assets-list-item-title">LINC</span>
                                <span className="assets-list-item-asset-txt">Chainlink</span>
                            </div>
                        </th>
                        <th  className="assets-item-title"><span className="assets-list-item-title">Etherium</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">$20.28</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">744.47 LINK</span></th>
                        <th className="assets-item-title assets-list-item-value-wrp">
                            <span className="assets-list-item-title">$ 12 856.32</span>
                            <span className="assets-list-item-value-subtitle">+10.9% ($ 2.04) </span>
                        </th>
                    </tr>
                    <tr className="assets-item">
                        <th className="assets-item-title assets-list-item-asset-wrp">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                            </svg>
                            <div className="assets-list-item-asset">
                                <span className="assets-list-item-title">LINC</span>
                                <span className="assets-list-item-asset-txt">Chainlink</span>
                            </div>
                        </th>
                        <th  className="assets-item-title"><span className="assets-list-item-title">Etherium</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">$20.28</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">744.47 LINK</span></th>
                        <th className="assets-item-title assets-list-item-value-wrp">
                            <span className="assets-list-item-title">$ 12 856.32</span>
                            <span className="assets-list-item-value-subtitle">+10.9% ($ 2.04) </span>
                        </th>
                    </tr>
                    <tr className="assets-item">
                        <th className="assets-item-title assets-list-item-asset-wrp">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                            </svg>
                            <div className="assets-list-item-asset">
                                <span className="assets-list-item-title">LINC</span>
                                <span className="assets-list-item-asset-txt">Chainlink</span>
                            </div>
                        </th>
                        <th  className="assets-item-title"><span className="assets-list-item-title">Etherium</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">$20.28</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">744.47 LINK</span></th>
                        <th className="assets-item-title assets-list-item-value-wrp">
                            <span className="assets-list-item-title">$ 12 856.32</span>
                            <span className="assets-list-item-value-subtitle">+10.9% ($ 2.04) </span>
                        </th>
                    </tr>
                    <tr className="assets-item">
                        <th className="assets-item-title assets-list-item-asset-wrp">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                            </svg>
                            <div className="assets-list-item-asset">
                                <span className="assets-list-item-title">LINC</span>
                                <span className="assets-list-item-asset-txt">Chainlink</span>
                            </div>
                        </th>
                        <th  className="assets-item-title"><span className="assets-list-item-title">Etherium</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">$20.28</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">744.47 LINK</span></th>
                        <th className="assets-item-title assets-list-item-value-wrp">
                            <span className="assets-list-item-title">$ 12 856.32</span>
                            <span className="assets-list-item-value-subtitle">+10.9% ($ 2.04) </span>
                        </th>
                    </tr>
                    <tr className="assets-item">
                        <th className="assets-item-title assets-list-item-asset-wrp">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#2992FA"/>
                            </svg>
                            <div className="assets-list-item-asset">
                                <span className="assets-list-item-title">LINC</span>
                                <span className="assets-list-item-asset-txt">Chainlink</span>
                            </div>
                        </th>
                        <th  className="assets-item-title"><span className="assets-list-item-title">Etherium</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">$20.28</span></th>
                        <th className="assets-item-title"><span className="assets-list-item-title">744.47 LINK</span></th>
                        <th className="assets-item-title assets-list-item-value-wrp">
                            <span className="assets-list-item-title">$ 12 856.32</span>
                            <span className="assets-list-item-value-subtitle">+10.9% ($ 2.04) </span>
                        </th>
                    </tr>
                </table>
            </section>
        </section>
    )
}