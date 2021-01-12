import Layout from '../components/layout'
import styles from '../styles/Team.module.css'
import utilStyle from '../styles/utils.module.css'

export default function PrivacyPolicy() {
    return (
        <Layout>
            <div className={styles.containerTeam}>
                <h1 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Privacy Policy</h1>
                <p className={utilStyle.headingSubTitle}></p>
            </div>
        </Layout>
    )
  }