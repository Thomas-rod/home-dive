
class Crisp extends React.Component {
    componentDidMount () {
      // Include the Crisp code here, without the <script></script> tags
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "3b231159-5ec5-45c4-a668-76b9dc8d49da";
  
      (function() {
        var d = document;
        var s = d.createElement("script");
  
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  
    render () {
      return null;
    }
  }
  export default Crisp