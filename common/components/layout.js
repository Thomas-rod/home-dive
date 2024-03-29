import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer'

export const siteTitle = "Dive - Simple & powerful analytics tool"

export default function Layout({ children}) {
  return (
      <div>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico"/>
          
          {/* Open Graph */}
          <meta property="og:url" content="http://www.diveanalytics.co" key="ogurl" />
          <meta property="og:title" content={siteTitle} key="ogtitle" />
          <meta property="og:description" content="Simple & powerful analytics to unleash your brand growth" key="ogdesc" />
          <meta property="og:image" content="https://res.cloudinary.com/dad2k5sll/image/upload/v1642177813/og-image_dive_homepage.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KR6FGBNXQH"/>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KR6FGBNXQH', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function (d, u, h, s) {
                h = d.getElementsByTagName('head')[0];
                s = d.createElement('script');
                s.async = 1;
                s.src = u + new Date().getTime();
                h.appendChild(s);
              })(document, 'https://grow.clearbitjs.com/api/pixel.js?k=pk_cbdc92100dfc6544027abb31c4fc9836&v=');`
            }}
          />

            {/* GOOGLE TAG MANAGER */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PNBLMX4');`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="UFd3p9pk2UuA7TdDMtQ0d5SzBGKDZKoI";;analytics.SNIPPET_VERSION="4.15.3";
                analytics.load("UFd3p9pk2UuA7TdDMtQ0d5SzBGKDZKoI");
                analytics.page();
                }}();`
            }}
          />
          {/* <script data-ad-client="ca-pub-5619393240417230" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
        </Head>

        {/* GOOGLE TAG MANAGER (noscript) --> */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PNBLMX4"
          height="0" width="0" style="display:none;visibility:hidden">
          </iframe>`
        }}>
        </noscript>
        <script src="//embed.typeform.com/next/embed.js"></script>
        <main>
          {children}
        </main>
      </div>
  )
}