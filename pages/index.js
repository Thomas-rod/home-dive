import Main_Banner from '../common/components/main_banner'
import Second_Banner from '../common/components/second_banner'
import Third_Banner from '../common/components/third_banner'
import Fourth_Banner from '../common/components/fourth_banner'
import Fifth_Banner from '../common/components/fifth_banner'
import Faq_Banner from '../common/components/faq_banner'
import Footer from '../common/components/footer'

import Layout from '../common/components/layout'

export default function Home() {
  return (
    <Layout>
      {/* <Cursor/> */}
      <Main_Banner/>
      <Second_Banner/>
      <Third_Banner/>
      <Fourth_Banner/>
      <Fifth_Banner/>
      <Faq_Banner/>
      <Footer/>
    </Layout>
  )
}
