(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(13),i=a.n(c),r=a(6),s=a(33),o=a(34),l=a(32),m=a(10),j=a(15),d=(a(17),a(1)),h=Object(m.a)((function(){var e=Object(n.useState)("curiosity"),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("fhaz"),m=Object(r.a)(i,2),h=m[0],b=m[1],u=Object(n.useState)("0"),O=Object(r.a)(u,2),v=O[0],f=O[1],p=Object(n.useState)([]),x=Object(r.a)(p,2),g=x[0],C=x[1],k=Object(n.useState)("bool"),N=Object(r.a)(k,2),y=N[0],S=N[1],w=Object(n.useState)(1),I=Object(r.a)(w,2),T=I[0],z=I[1];Object(n.useEffect)((function(){fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(a,"/photos?sol=").concat(v,"&camera=").concat(h,"&page=").concat(T,"&api_key=").concat("CaNQPl0BRDULI8HQT1eyjOg6TZIfP3ObkKTfPEvA")).then((function(e){return e.json()})).then((function(e){if(e.photos.length<=0)S(!1),M(),C([]),console.log("page: "+T);else{for(var t=0;t<e.photos.length;t++)C(e.photos);S(!0)}}))}),[a,v,h,T]);var E=g.map((function(e){return e.img_src})),M=function(){z(1)};return Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsxs)(s.a,{children:[Object(d.jsx)("h2",{children:"Rover"}),Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-center pover1",children:[Object(d.jsxs)("div",{className:"div1",children:[Object(d.jsx)(j.a,{src:"https://mars.nasa.gov/gltf_embed/24584",width:"350",height:"350px",frameborder:"0"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return c("curiosity")},className:"btnWithIframe",active:"curiosity"==="".concat(a),children:"Curiosity"})]}),Object(d.jsxs)("div",{className:"div1",children:[Object(d.jsx)(j.a,{src:"https://solarsystem.nasa.gov/gltf_embed/2370",width:"350",height:"350px",frameborder:"0"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return c("opportunity")},className:"btnWithIframe",active:"opportunity"==="".concat(a),children:"Opportunity"})]}),Object(d.jsxs)("div",{className:"div1",children:[Object(d.jsx)(j.a,{src:"https://mars.nasa.gov/gltf_embed/24883",width:"350",height:"350px",frameborder:"0"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return c("spirit")},className:"btnWithIframe",active:"spirit"==="".concat(a),children:"Spirit"})]})]}),Object(d.jsx)("h2",{style:{alignItems:"center",marginTop:30},children:"Camera"}),Object(d.jsxs)("div",{className:"mt-2 d-flex align-items-center justify-content-center",children:[Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("fhaz")},className:"btnCamera",active:"fhaz"==="".concat(h),children:"Front Hazard Avoidance Camer"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("rhaz")},className:"btnCamera",active:"rhaz"==="".concat(h),children:"Rear Hazard Avoidance Camera"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("mast")},className:"btnCamera",active:"mast"==="".concat(h),children:"Mast Camera"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("chemcam")},className:"btnCamera",active:"chemcam"==="".concat(h),children:"Chemistry and Camera Complex"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("mahli")},className:"btnCamera",active:"mahli"==="".concat(h),children:"Mars Hand Lens Imager"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("mardi")},className:"btnCamera",active:"mardi"==="".concat(h),children:"Mars Descent Imager"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("navcam")},className:"btnCamera",active:"navcam"==="".concat(h),children:"Navigation Camera"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("pancam")},className:"btnCamera",active:"pancam"==="".concat(h),children:"Panoramic Camera"}),Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){return b("minites")},className:"btnCamera",active:"minites"==="".concat(h),children:"Miniature Thermal Emission Spectrometer (Mini-TES)"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{style:{marginTop:30},children:"Sol"}),Object(d.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[Object(d.jsx)("p",{style:{fontSize:20},children:"Enter the day on Mars defined in Sol."}),Object(d.jsx)(s.a.Control,{className:"mt-1",style:{width:300,marginBottom:10},value:v,placeholder:"Enter the sol number: (0-n)",onChange:function(e){return f(e.target.value)}})]})]})]}),Object(d.jsxs)("div",{className:"gallery",children:[y?E.map((function(e){return Object(d.jsx)(l.a,{className:"centerImg",src:"".concat(e),width:450,height:450,style:{marginRight:10,marginLeft:10,marginBottom:10,marginTop:10}})})):Object(d.jsx)("p",{className:"p",children:"No photos! (Change camera or other settings...)"}),25===E.length?Object(d.jsx)(o.a,{variant:"outline-dark",onClick:function(){z(T+1)},style:{cursor:"pointer",width:350,height:60},children:"Add photo"}):Object(d.jsx)("p",{className:"p",children:"That's all..."})]})]})})),b=a.p+"static/media/1r.0541acca.png",u=Object(m.a)((function(){return Object(d.jsx)("div",{className:"container-fluid",style:{backgroundColor:"black"},children:Object(d.jsxs)("div",{className:"navbar-brand d-flex",children:[Object(d.jsx)("img",{src:b,alt:"logo",width:"80",height:"50",className:"d-inline-block align-text-top"}),Object(d.jsx)("p",{style:{marginTop:10,color:"white"},children:"Welcome to Mars!"})]})})})),O=a(21),v=Object(m.a)((function(){return Object(d.jsxs)(O.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(h,{})]})}));i.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5480fd41.chunk.js.map