export const DashboardChart = () => {
    return (
        <section className="dashboard-content-balance">
            <h4 className="widget-item-subtitle txt-medium">
                Total balance
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" fill="#F0F0F0"/>
                    <g clipPath="url(#clip0_301_403)">
                    <rect width="1440" height="900" transform="translate(-535 -215)" fill="#1D1D28"/>
                    <g filter="url(#filter0_f_301_403)">
                    <circle cx="905" cy="685" r="576" fill="#52FF00" fillOpacity="0.07"/>
                    </g>
                    <path opacity="0.3" d="M7.4675 10.4675C7.43525 10.5031 7.40519 10.5407 7.3775 10.58C7.34912 10.6218 7.32642 10.6672 7.31 10.715C7.28838 10.7575 7.27321 10.803 7.265 10.85C7.26132 10.8999 7.26132 10.9501 7.265 11C7.26247 11.0984 7.28302 11.196 7.325 11.285C7.35869 11.3781 7.41243 11.4626 7.48242 11.5326C7.55241 11.6026 7.63693 11.6563 7.73 11.69C7.81978 11.7297 7.91685 11.7502 8.015 11.7502C8.11316 11.7502 8.21023 11.7297 8.3 11.69C8.39308 11.6563 8.4776 11.6026 8.54759 11.5326C8.61758 11.4626 8.67132 11.3781 8.705 11.285C8.73831 11.1938 8.75359 11.097 8.75 11C8.75058 10.9013 8.73166 10.8034 8.69433 10.7121C8.65701 10.6207 8.60202 10.5376 8.5325 10.4675C8.46278 10.3972 8.37983 10.3414 8.28844 10.3033C8.19704 10.2653 8.09901 10.2457 8 10.2457C7.901 10.2457 7.80297 10.2653 7.71157 10.3033C7.62018 10.3414 7.53723 10.3972 7.4675 10.4675ZM8 0.5C6.51664 0.5 5.0666 0.939867 3.83323 1.76398C2.59986 2.58809 1.63856 3.75943 1.07091 5.12987C0.50325 6.50032 0.354725 8.00832 0.644114 9.46318C0.933503 10.918 1.64781 12.2544 2.6967 13.3033C3.7456 14.3522 5.08197 15.0665 6.53683 15.3559C7.99168 15.6453 9.49968 15.4968 10.8701 14.9291C12.2406 14.3614 13.4119 13.4001 14.236 12.1668C15.0601 10.9334 15.5 9.48336 15.5 8C15.5 7.01509 15.306 6.03982 14.9291 5.12987C14.5522 4.21993 13.9997 3.39314 13.3033 2.6967C12.6069 2.00026 11.7801 1.44781 10.8701 1.0709C9.96019 0.693993 8.98492 0.5 8 0.5ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14ZM8 4.25C7.6048 4.24975 7.2165 4.35359 6.87419 4.55108C6.53187 4.74857 6.2476 5.03274 6.05 5.375C5.99574 5.46036 5.9593 5.55582 5.94288 5.65563C5.92647 5.75544 5.93041 5.85754 5.95448 5.95579C5.97854 6.05404 6.02223 6.1464 6.08292 6.22733C6.1436 6.30825 6.22003 6.37606 6.30761 6.42668C6.39518 6.4773 6.49209 6.50969 6.5925 6.52188C6.69292 6.53408 6.79476 6.52584 6.89191 6.49766C6.98905 6.46947 7.07949 6.42193 7.15779 6.35789C7.23609 6.29385 7.30062 6.21463 7.3475 6.125C7.41358 6.01055 7.50873 5.91559 7.62331 5.84973C7.7379 5.78388 7.86785 5.74948 8 5.75C8.19892 5.75 8.38968 5.82902 8.53033 5.96967C8.67099 6.11032 8.75 6.30109 8.75 6.5C8.75 6.69891 8.67099 6.88968 8.53033 7.03033C8.38968 7.17098 8.19892 7.25 8 7.25C7.80109 7.25 7.61033 7.32902 7.46967 7.46967C7.32902 7.61032 7.25 7.80109 7.25 8V8.75C7.25 8.94891 7.32902 9.13968 7.46967 9.28033C7.61033 9.42098 7.80109 9.5 8 9.5C8.19892 9.5 8.38968 9.42098 8.53033 9.28033C8.67099 9.13968 8.75 8.94891 8.75 8.75V8.615C9.24603 8.43502 9.66302 8.08642 9.92808 7.63015C10.1931 7.17388 10.2894 6.63897 10.2001 6.11892C10.1107 5.59887 9.8414 5.12676 9.43925 4.78514C9.03709 4.44351 8.52766 4.25409 8 4.25Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_301_403" x="-631" y="-851" width="3072" height="3072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
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
                        <span className="dashboard-balance txt-bold">$ 1 340.85</span>
                        <span className="dashboard-balance-txt txt-medium">
                            <svg width="8" height="6" viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.8186 0.561871C2.9049 0.451915 3.00794 0.354611 3.12438 0.273115C3.77688 -0.183564 4.69788 -0.0542838 5.1815 0.56187L7.71087 3.78444C7.89864 4.02366 8 4.31355 8 4.61133C8 5.37827 7.3416 6 6.52942 6L1.47068 6C1.15534 6 0.848351 5.90428 0.595012 5.72697C-0.0574847 5.27029 -0.194389 4.40059 0.289225 3.78444L2.8186 0.561871Z"/>
                            </svg>
                            1.03% ($ 12.36)
                        </span>
                    </div>
                    <div className="dashboard-balance-hug">
                        <div className="dashboard-balance-hug-item">
                            <input type='radio' name="balance-period-btn" id="balance-period-1h" className="dashboard-balance-period-input" />
                            <label className="dashboard-balance-hug-btn txt-medium" htmlFor="balance-period-1h">1H</label>
                        </div>
                        <div className="dashboard-balance-hug-item">
                            <input type='radio' name="balance-period-btn" id="balance-period-7d" className="dashboard-balance-period-input" />
                            <label className="dashboard-balance-hug-btn txt-medium" htmlFor="balance-period-7d">7D</label>
                        </div>
                        <div className="dashboard-balance-hug-item">
                            <input defaultChecked type='radio' name="balance-period-btn" id="balance-period-1w" className="dashboard-balance-period-input"  />
                            <label className="dashboard-balance-hug-btn txt-medium" htmlFor="balance-period-1w">1W</label>
                        </div>
                        <div className="dashboard-balance-hug-item">
                            <input type='radio' name="balance-period-btn" id="balance-period-1m" className="dashboard-balance-period-input" />
                            <label className="dashboard-balance-hug-btn txt-medium" htmlFor="balance-period-1m">1M</label>
                        </div>
                        <div className="dashboard-balance-hug-item">
                            <input type='radio' name="balance-period-btn" id="balance-period-1y" className="dashboard-balance-period-input" />
                            <label className="dashboard-balance-hug-btn txt-medium" htmlFor="balance-period-1y">1Y</label>
                        </div>
                    </div>
                </div>

                <div className="dashboard-content-chart">
                    {/* Блок для графика */}
                </div>
            </div>
        </section>
    )
}