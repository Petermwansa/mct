import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import './Terms.css'

const Terms = () => {
  return (
    <div>
        <PageHeader title='Terms and Conditions' curPage={"Ts & Cs"}/>
        <div className='terms'>
            <h1 className='terms__title'>MC Telecoms Terms and Conditions</h1>
            <ol>
                <li>
                    <h5>Ordering of Products</h5>
                    <p>
                        To place a pre-order for a product for example an iPhone or 
                        EarPods, a partial deposit of the full price of the product must be made by a client in order 
                        for the order to confirmed in Russia, Zambia, Zimbabwe, Botswana and South Africa 
                        respectively. Once the order has been processed and confirmed, the client has 3 days to 
                        assess the terms of purchase and within these days, pre-order cancellation can be made 
                        if the client is not fully satisfied and a refund will be made. Order cancellation cannot be 
                        accepted after three days of placing the order.
                    </p>
                </li>
                <li>
                    <h5>Instant purchase of phones</h5>
                    <p>
                        you can contact us on +7 904 640 42-52/ +7 968 620-
                        14-61 / +260 96 1385378, on WhatsApp, or dm us on Instagram @mctelecoms to find 
                        out what phones we have in stock. A full deposit if the price must be made in order to 
                        take the product instantly.
                    </p>
                </li>
                <li>
                    <h5>First come, first served</h5>
                    <p>
                        The waiting list for clients willing to buy phones from us will 
                        be run centrally and stock will be allocated on a first come, first served basis.
                    </p>
                </li>
                <li>
                    <h5>Pricing and Payments</h5>
                    <p>
                        Please note that due to the fluctuating exchange rate we 
                        cannot confirm that pricing will remain the same by the time your product is available to 
                        be purchased. There is a chance that it may increase or decrease at time of purchase. 
                        Payments can be made via;
                        <ul>
                            <li>
                                <p>Cash</p>

                            </li>
                            <li>
                                <p>
                                    Online transfers <br />
                                    +7(904)6404252-Gabriel Chama (Bank Saint Petersburg) <br />
                                    +260773551502- Airtel Mobile Money <br />
                                    +260961385378- Angel Zulu (MTN) <br />
                                    +26776578902- Balozi Mbui (FNB) <br />
                                </p>
                            </li>
                        </ul>
                    </p>
                </li>
                <li>
                    <p>
                        Prior to the delivery of your product, which may take from 13 to 16 working days after 
                        4-day grace period for pre-orders, MC Telecoms will update you on the tracking 
                        records of your product from the point of departure until the product is delivered 
                        to you. A client has up to 20 working days to finish payment and then collect the 
                        product. In case of the client not being able to finish payment within 20 working days, a 
                        penalty fee of 200₽/$2.5 will be added every day until the client is ready.
                    </p>
                </li>
                <li>
                    <h5>Lay buy and Instalments</h5>
                    <p>
                        We have an exclusive agreement for clients looking to buy 
                        their phone within a 2-4 months period. Clients looking for this kind of deal, have to pay 
                        5000₽/ $70 in order for their order to be accepted and confirmed. Then, payment can be 
                        made in two weeks/ monthly instalments.
                    </p>
                </li>
                <li>
                    <p>
                        MC Telecoms will endeavour to ensure that pre-orders are fulfilled as soon as stock is 
                        available, however on occasion there may be delays due to supply constraints.
                    </p>
                </li>
                <li>
                    <h5>For iPhone 15</h5>
                    <p>
                        Note that pre-orders are slightly cheaper than the usual retail 
                        price the phone will be delivered within 3 weeks. Brand new and comes with a 6-month
                        warranty
                    </p>
                </li>
            </ol>

        </div>

    </div>
  )
}

export default Terms
