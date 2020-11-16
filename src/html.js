import React from "react"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <div
            dangerouslySetInnerHTML={{
              __html: `
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-R6RWRPWEN0');
                </script>
                <!-- Google Tag Manager -->
                <script>
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-K3PWLHV');
                </script>
                <!-- End Google Tag Manager -->
                <script>
                  window['_fs_debug'] = false;
                  window['_fs_host'] = 'fullstory.com';
                  window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
                  window['_fs_org'] = 'ZBX6Q';
                  window['_fs_namespace'] = 'FS';
                  (function(m,n,e,t,l,o,g,y){
                      if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                      g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
                      o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
                      y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                      g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
                      g.anonymize=function(){g.identify(!!0)};
                      g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
                      g.log = function(a,b){g("log",[a,b])};
                      g.consent=function(a){g("consent",!arguments.length||a)};
                      g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                      g.clearUserCookie=function(){};
                      g.setVars=function(n, p){g('setVars',[n,p]);};
                      g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
                      if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
                      g._v="1.3.0";
                  })(window,document,window['_fs_namespace'],'script','user');
                </script>
                <noscript>
                  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3PWLHV" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                </noscript>
              `,
            }}
          />
        </body>
      </html>
    )
  }
}