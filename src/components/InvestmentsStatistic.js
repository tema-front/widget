export const InvestmentsStatistic = () => {
    return (
        <div className="statistic">
            <div className="statistic-item left earn-pricing-item">
                <div className="statistic-item-child earn-pricing-left-item">
                    <span className="earn-pricing-item-title txt-regular">TVL</span>
                    <span className="earn-pricing-item-rate txt-bold">
                        <span className="earn-pricing-item-rate-simbol">$</span>
                        17 067.<span className="earn-pricing-item-rate-cents">05</span>
                    </span>
                </div>
                <div className="statistic-item-child earn-pricing-left-item">
                    <span className="earn-pricing-item-title txt-regular">Change 24H</span>
                    <span className="earn-pricing-item-rate txt-bold statistic-item-child-percent">
                        <span className="earn-pricing-item-rate-simbol">%</span>
                        11.<span className="earn-pricing-item-rate-cents">2</span>
                    </span>
                </div>
            </div>
            <div className="statistic-item right">
                <div className="statistic-item-child earn-pricing-right-item">
                    <span className="earn-pricing-item-title txt-regular">Earnings 24H</span>
                    <span className="earn-pricing-item-rate right txt-bold">
                        <span className="earn-pricing-item-rate-simbol">$</span>
                        2 067.<span className="earn-pricing-item-rate-cents">05</span>
                    </span>
                </div>
            </div>
        </div>
    )
}