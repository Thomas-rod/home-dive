// COMPONENTS 
import Layout from '../common/components/layout'
import Navbar from '../common/components/navbar.js'
import CardPricing from '../common/components/card/card_pricing.js'
import Footer from '../common/components/footer'

// STYLES 
import fontStyle from '../common/styles/utils/fonts.module.css'
import mainBannerStyle from '../common/styles/mainBanner.module.css'
import pricingPageStyle from '../common/styles/pricing.module.css'

// DATA CONFIG
import pricingPlans from '../common/data/pricing'


export default function Pricing() {
    return (
        <Layout>
            <div className={`${mainBannerStyle.container}`}>
                {/* <div className={`${mainBannerStyle.container_bg}`}></div> */}
                <Navbar/>
                <br></br>
            </div>
            <div className={`${mainBannerStyle.container}`}>
                <h1 className={`
                    ${pricingPageStyle.h1}
                    ${fontStyle.__white}
                    ${fontStyle.__align_center}
                    ${fontStyle.p_fw__700}
                    ${fontStyle.p_ls__negative}
                    ${fontStyle.montSerrat}
                    
                `}>Pricing</h1>
                <div className={`${pricingPageStyle.container}`}>
                    {
                        pricingPlans.pricingPlans.map((obj) => (
                            <CardPricing
                                key={obj.id}
                                pricingPlan={obj}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </Layout>
    )
  }