import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import styles from '../styles/TermsOfUse.module.css'
import teamStyle from '../styles/Team.module.css'
import utilStyle from '../styles/utils.module.css'

export default function TermsOfUse() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={teamStyle.containerTeam}>
                <h1 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Terms of Use</h1>
                <p className={utilStyle.headingSubTitle}>Updated 13 Wednesday of January 2020</p>
                <div className={styles.container}>
                    <h2 className={styles.header}>1. GENERAL</h2>
                    <p className={styles.paragraphe}>1.1 These General Terms and Conditions of Use together with the Order Confirmation and Special Terms (as defined in the Order Confirmation), if any, constitute the entire “Agreement” between the Parties. The “Parties” are the “Company” and the “Customer,” collectively, or a “Party” separately, and are defined as follows: (a) the “Company” or “Dive”, and (b) the “Customer” refers to and describes the customer/subscriber accessing, having the ability to access, or otherwise has the Company’s permission, authorization, or confirmation to access Company’s Dive subscription or otherwise its services, products, and/or content.  “Dive” refers to and describes any Dive product and/or service, as well as any other product and/or service affiliated with or otherwise connected to the Dive product and/or service. The “Order Confirmation” refers to and describes the approval, authorization, or otherwise the confirmation received upon subscribing to or agreeing to be subscribed to Dive.</p>
                    <p className={styles.paragraphe}>1.2 This Agreement shall govern Customer’s access to and use of Dive and the Company’s products and services purchased by Customer as listed in the Order Confirmation (collectively, “Dive”).  Dive is a subscription provided by Company and its third party providers, as applicable, on and through the domain and sub-domains of Company.</p>
                    <h2 className={styles.header}>2. RIGHT OF USE</h2>
                    <p className={styles.paragraphe}>2.1 Upon receipt of the Order Confirmation, or otherwise after signing up for the Company’s subscription, Customer is authorized and permitted to access and use Dive, and any content accessed by or provided therein, in accordance with all applicable laws, rules and regulations and agrees to accept Company’s privacy policy. Company reserves the right to make changes to its General Terms and Conditions of Use, policies and Dive at any time. Subject to the terms and conditions of the Agreement, Company shall grant Customer a non-exclusive and non-transferable right to permit authorized users to use Dive for internal-Customer purposes; Customer shall be solely and exclusively responsible for the management, authorization, access controls, actions, inactions, or otherwise, of those that Customer deems to be “authorized users.”  Customer shall be permitted to engage external consultants as users of Dive on the premise of legal contractual agreements and to the extent that they will use Dive exclusively for the Customer.</p>
                    <p className={styles.paragraphe}>2.2 Customers who are any type of agency, entity, business, or company that provides any range of marketing or consulting services to their clients, customers, or otherwise may use Dive on behalf of their client(s) but only if all of the following conditions are met: (i) Customer agrees that Company and its licensors and/or providers are not parties to the agreement between Customer and its client(s); (ii) Customer’s payment obligations pursuant to this Agreement are not dependent upon receiving payment from Customer’s clients nor are they dependent on the Customer and/or client(s) otherwise complying with the agreement between the two; (iii) Customer must obtain client’s credentials for authorizing Customer to provide client information as necessary for Company to perform under this Agreement; (iv) the agreement between Customer and its client(s) is at least as restrictive and protective of Company’s and its licensors’ and/or its providers’ rights as this Agreement. Customer shall be solely responsible for and shall comply with all laws, rules, regulations and directives in delivering and providing the Customer’s agency services, including but not limited to, any laws regarding privacy and the use and disclosure of personal data and any advertising and/or marketing laws.</p>
                    <h2 className={styles.header}>3. PREREQUISITES</h2>
                    <p className={styles.paragraphe}>3.1 Customer shall be responsible for obtaining and maintaining all hardware, software, communications equipment and network infrastructures required to access and use Dive and for paying all third-party fees and access charges incurred while using Dive.</p>
                    <h2 className={styles.header}>4. ACCOUNT AND PASSWORD</h2>
                    <p className={styles.paragraphe}>4.1 Customer will receive credentials to log in to Dive. Customer shall have sole responsibility for all activities relating to such Customer’s subscription account and shall immediately inform Company of any unauthorized use of the Customer’s subscription account.</p>
                    <h2 className={styles.header}>5. THIRD PARTY DATA SOURCES</h2>
                    <p className={styles.paragraphe}>5.1 Dive includes links to third party data sources. Customer is responsible for evaluating whether to access or use a Third Party Data Source and agrees to be bound by any applicable terms found therein. Company does not screen, audit or endorse any Third Party Data Source. Customer agrees it will not copy, reproduce, distribute, transmit, broadcast, modify, display, sell, license or otherwise exploit Third Party Data Sources except in strict compliance with the rights, if any, granted to Customer by any third party. Customer warrants that all content uploaded and distributed via Dive by Customer shall comply with all applicable law. Company will terminate the account of any Customer, and block access of any user, who infringes any Company’s or third party intellectual property right(s).  Company or otherwise Dive does not support the use or assure performance when using automated tools to access the Dive system, including but not limited to, unauthorized API access or browser automations.</p>
                    <h2 className={styles.header}>6. TERM AND FEES</h2>
                    <p className={styles.paragraphe}>6.1 Customer agrees to an annual subscription term, unless otherwise specified in the Agreement, as well as agrees to the annual price of such subscription, effective upon the Customer’s signing, acknowledging, agreeing to, or otherwise subscribing to Dive, whether such signing, acknowledging, agreeing to, subscribing or otherwise was completed via hand signature, electronic signature, checking a box, clicking a button, entering a hyperlink, receiving the Order Confirmation, or otherwise.</p>
                    <p className={styles.paragraphe}>6.2 No early termination; no refunds. The Subscription Term will end on the expiration date and the subscription cannot be cancelled early. We do not provide refunds if you decide to stop using your Dive subscription during your Subscription Term.</p>
                    <p className={styles.paragraphe}>6.3 When the subscription is effective, as referenced in Section 6.1, you are expressly agreeing that Company is permitted to bill you the applicable fees, any applicable tax and any other charges you may incur with the Company in connection with your subscription and that the fees will be billed to the credit card you provide in accordance with the billing terms in effect at the time a fee or charge is due and payable. Subscription fees are payable in U.S. Dollars and based on the terms of your subscription not on actual usage. You will provide Company with valid and updated credit card information and you authorize Company to charge such credit card for all subscriptions and renewals. Refer to table for annual subscription fee schedule.</p>
                    <p className={styles.paragraphe}>6.4 Unless otherwise stated, Company’s annual subscription fees do not include any taxes, levies, duties or similar governmental assessments of any nature, including but not limited to value-added, sales and use, or withholding taxes, assessable by any local, state, provincial, federal or foreign jurisdiction (collectively, “Taxes”).  If, under relevant law, Company has the legal obligation to pay or collect Taxes for which Customer is responsible, the appropriate amount shall be invoiced to and paid by Customer, unless Customer provides Company with a valid tax exemption certificate from the appropriate taxing authority.</p>
                    <p className={styles.paragraphe}>6.5 If Customer is in breach of this Section, Company shall be entitled to charge default interest on the outstanding fees in the maximum amount allowable by law and/or suspend or terminate Customer’s access to Dive at Company’s sole option, with or without notice to Customer. Additional claims for payment default remain reserved.</p>
                    <p className={styles.paragraphe}>6.6 Automatic renewal: The Dive subscription will automatically renew for the period of the original subscription term, unless Customer terminates its subscription 30 days prior to the renewal period.  Customer acknowledges and agrees that Company will automatically charge its credit card on record with Company for the then-current subscription period upon the commencement of any renewal period.  Customer materially breaches this Agreement if it cancels or otherwise causes its credit card on record to prohibit, prevent, or avoid charges during any term and during any renewal. Customer’s subscription will terminate following the full duration of its subscription term, so long as within at least thirty (30) days prior to the automatic renewal, the Customer provided written notice to Company of such termination.</p>
                    <h2 className={styles.header}>7. INTELLECTUAL PROPERTY</h2>
                    <p className={styles.paragraphe}>7.1 Subject to applicable law, the content of Dive, except for the content created by users and third parties if any, including without limitation, software, code, forms, text and other materials, trademarks, service marks or logos contained therein (“Marks”), are owned by or licensed to Company. Customer’s use of Dive is limited to the rights granted to Customer under this Agreement and Company reserves all rights not expressly granted herein.</p>
                    <h2 className={styles.header}>8. LIABILITY AND WARRANTY</h2>
                    <p className={styles.paragraphe}>8.1 To the maximum extent permitted by applicable law, either Party’s total, aggregate liability arising out of or in connection with this Agreement shall in no event exceed the total amount of payments due by Customer to Company during the initial term or the then applicable renewal term of the Agreement.</p>
                    <p className={styles.paragraphe}>8.2 To the maximum extent permitted by applicable law, in no event shall either Party be liable for any, indirect, incidental, special, consequential or exemplary damages, however caused and under any theory of liability arising out of or in connection with this Agreement. This shall include, but not be limited to, any loss of; profit, goodwill or business reputation, any loss of data suffered, cost of procurement of substitute goods or services, or other intangible loss.</p>
                    <p className={styles.paragraphe}>8.3 Company warrants that it has the legal power and authority to enter into this Agreement. Except as provided herein, Company provides Dive “as is” without any warranty or condition of any kind, express or implied. Company does not guarantee uninterrupted, secure or error-free operation of Dive. Company makes no representation or warranty as to the accuracy, timeliness, quality, completeness, suitability or reliability of any information or data accessed on or through Dive. No information obtained from Company or through Dive, whether oral or written, shall create any warranty not expressly stated in this Agreement.</p>
                    <h2 className={styles.header}>9. OPERATING HOURS AND SYSTEM MAINTENANCE</h2>
                    <p className={styles.paragraphe}>9.1 Company shall use commercially reasonable efforts to ensure that the Customer receives uninterrupted and continuing service throughout the term of the Agreement, and renewals if any.  Company may need to carry out routine maintenance or urgent maintenance or Dive may become unavailable for reasons not within Company’s control. In such case, Company shall use commercially reasonable efforts to inform the Customer of any downtime and restore Dive as soon as reasonably practicable.</p>
                    <h2 className={styles.header}>10. ADDITIONAL PROVISIONS</h2>
                    <p className={styles.paragraphe}>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of 5 Villa Hersent, 75015 Paris.</p>
                    <h2 className={styles.header}>10. CONTACT</h2>
                    <p className={styles.paragraphe}>Questions about the Terms of Service should be sent at <a className={utilStyle.textUnderline} href="mailto:alexis@diveanalytics.co">alexis@diveanalytics.co.</a></p>
                </div>
            </div>
        </Layout>
    )
  }