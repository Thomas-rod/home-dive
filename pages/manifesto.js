import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Team.module.css'
import utilStyle from '../styles/utils.module.css'

export default function Manifesto() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.containerTeam}>
                <h1 className={`${utilStyle.headingTitle} ${utilStyle.bold}`}>Why do we create Dive ?</h1>
                <p className={utilStyle.headingSubTitle}>It's coming soon :D </p>
            </div>
        </Layout>
    )
  }