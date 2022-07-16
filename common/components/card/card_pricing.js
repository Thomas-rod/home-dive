import Button_Form from '../button/button_form'

import cardStyle from '../../styles/components/card.module.css'
import pricingPageStyle from '../../styles/pricing.module.css'
import iconStyle from '../../styles/components/icon.module.css'


import { faBan, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

<i class="fa-solid fa-circle-check"></i>
export default function CardPricing({pricingPlan}) {
    return (
        <div className={`${cardStyle.container} ${cardStyle.container_pricing_card} `}>
            <div className={`${cardStyle.block_pricing_card}`}>
                 <h3>{pricingPlan.title}</h3>
                 <p className={`${pricingPageStyle.subtitle}`}>{pricingPlan.subtitle}</p>
             </div>
             <div className={`${cardStyle.block_pricing_card}`}>
                    {
                        (pricingPlan.price > 0) ?
                        <span><p>$</p><h3>{pricingPlan.price}</h3><p> / per month</p></span> 
                        : <h3>Custom</h3>
                    }
                    
                 <Button_Form type="submit" text={pricingPlan.button_text}  page={"pricing"} withForm={true}/>
                 <p className={`${pricingPageStyle .microtitle}`}>No credit card required</p>
             </div>
             <div className={`${cardStyle.block_pricing_card}`}>
                 <h4 className={`${pricingPageStyle.h4}`}>Access</h4>
                 <ul>
                     {
                         pricingPlan.access.map((access_obj) => {
                             return (
                                <li>
                                    <p>{access_obj.title}</p>
                                    {
                                        (access_obj.value === true)
                                        ? <p><FontAwesomeIcon icon={faCheckCircle} className={`${iconStyle.icon_pricing_active}`} /></p>
                                        : (access_obj.value === false)
                                        ? <p><FontAwesomeIcon icon={faBan} className={`${iconStyle.icon_pricing_disable}`}/></p>
                                        : <p>{access_obj.value}</p>

                                    }
                                </li>
                             )
                         })
                     }
                 </ul>
             </div>
             <div className={`${cardStyle.block_pricing_card}`}>
                <h4 className={`${pricingPageStyle.h4}`}>Features</h4>
                 <ul>
                    {
                         pricingPlan.features.map((feature_obj) => {
                            return (
                                <li>
                                    <p>{feature_obj.title}</p>
                                    {
                                        (feature_obj.value === true)
                                        ? <p><FontAwesomeIcon icon={faCheckCircle} className={`${iconStyle.icon_pricing_active}`} /></p>
                                        : (feature_obj.value === false)
                                        ? <p><FontAwesomeIcon icon={faBan} className={`${iconStyle.icon_pricing_disable}`}/></p>
                                        : <p>{feature_obj.value}</p>

                                    }
                                </li>
                            )
                        })
                    }
                 </ul>
             </div>
             <div className={`${cardStyle.block_pricing_card}`}>
                <h4 className={`${pricingPageStyle.h4}`}>Support</h4>
                 <ul>
                    {
                         pricingPlan.supports.map((support_obj) => {
                            return (
                                <li>
                                    <p>{support_obj.title}</p>
                                    {
                                        (support_obj.value === true)
                                        ? <p><FontAwesomeIcon icon={faCheckCircle} className={`${iconStyle.icon_pricing_active}`} /></p>
                                        : (support_obj.value === false)
                                        ? <p><FontAwesomeIcon icon={faBan} className={`${iconStyle.icon_pricing_disable}`}/></p>
                                        : <p>{support_obj.value}</p>

                                    }
                                </li>
                            )
                        })
                    }
                 </ul>
             </div> 
        </div>
    )
}
