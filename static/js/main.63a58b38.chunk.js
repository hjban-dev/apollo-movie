(this["webpackJsonpapollo-movie"]=this["webpackJsonpapollo-movie"]||[]).push([[0],{45:function(t,n,e){t.exports=e(57)},57:function(t,n,e){"use strict";e.r(n);var i=e(1),r=e.n(i),a=e(34),o=e.n(a),c=e(20),u=e(17),l=e(4),d=e(16),v=e(18),m=e(9),g=e(43);function f(){var t=Object(l.a)(["\n\tbackground-image: url(",");\n\theight: 100%;\n\twidth: 100%;\n\tbackground-size: cover;\n\tbackground-position: center center;\n\tborder-radius: 7px;\n"]);return f=function(){return t},t}function b(){var t=Object(l.a)(["\n\theight: 400px;\n\tborder-radius: 7px;\n\twidth: 100%;\n\tbox-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\tbackground-color: transparent;\n"]);return b=function(){return t},t}function s(){var t=Object(l.a)(["\n\tmutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {\n\t\ttoggleLikeMovie(id: $id, isLiked: $isLiked) @client\n\t}\n"]);return s=function(){return t},t}var p=Object(d.b)(s()),h=m.a.div(b()),k=m.a.div(f(),(function(t){return t.bg})),x=function(t){var n=t.id,e=t.bg,i=t.isLiked,a=Object(v.a)(p,{variables:{id:parseInt(n),isLiked:i}}),o=Object(g.a)(a,1)[0];return r.a.createElement(h,null,r.a.createElement(c.b,{to:"/".concat(n)},r.a.createElement(k,{bg:e})),r.a.createElement("button",{onClick:o},i?"Unlike":"Like"))};function j(){var t=Object(l.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-gap: 25px;\n\twidth: 60%;\n\tmin-width: 850px;\n\tposition: relative;\n\ttop: -50px;\n"]);return j=function(){return t},t}function O(){var t=Object(l.a)(["\n\tfont-size: 18px;\n\topacity: 0.5;\n\tfont-weight: 500;\n\tmargin-top: 10px;\n"]);return O=function(){return t},t}function E(){var t=Object(l.a)(["\n\tfont-size: 35px;\n"]);return E=function(){return t},t}function L(){var t=Object(l.a)(["\n\tfont-size: 60px;\n\tfont-weight: 600;\n\tmargin-bottom: 20px;\n"]);return L=function(){return t},t}function w(){var t=Object(l.a)(["\n\tbackground-image: linear-gradient(-45deg, #d754ab, #fd723a);\n\theight: 45vh;\n\tcolor: white;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n"]);return w=function(){return t},t}function _(){var t=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 100%;\n"]);return _=function(){return t},t}function y(){var t=Object(l.a)(["\n\t{\n\t\tmovies {\n\t\t\tid\n\t\t\tmedium_cover_image\n\t\t\tisLiked @client\n\t\t}\n\t}\n"]);return y=function(){return t},t}var z=Object(d.b)(y()),M=m.a.div(_()),$=m.a.header(w()),I=m.a.h1(L()),B=m.a.h3(E()),J=m.a.div(O()),q=m.a.div(j()),A=function(){var t,n=Object(v.b)(z),e=n.loading,i=n.data;return r.a.createElement(M,null,r.a.createElement($,null,r.a.createElement(I,null,"Apollo 2020"),r.a.createElement(B,null,"I love GraphQL")),e&&r.a.createElement(J,null,"Loading..."),r.a.createElement(q,null,null===i||void 0===i?void 0:null===(t=i.movies)||void 0===t?void 0:t.map((function(t){return r.a.createElement(x,{key:t.id,id:t.id,isLiked:t.isLiked,bg:t.medium_cover_image})}))))};function C(){var t=Object(l.a)(["\n\twidth: 25%;\n\theight: 60%;\n\tbackground-color: transparent;\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\tbackground-position: center center;\n"]);return C=function(){return t},t}function D(){var t=Object(l.a)(["\n\tfont-size: 22px;\n\tline-height: 1.3;\n"]);return D=function(){return t},t}function G(){var t=Object(l.a)(["\n\tfont-size: 25px;\n\tmargin-bottom: 30px;\n"]);return G=function(){return t},t}function K(){var t=Object(l.a)(["\n\tfont-size: 55px;\n\tmargin-bottom: 10px;\n"]);return K=function(){return t},t}function N(){var t=Object(l.a)(["\n\tmargin-left: 10px;\n\twidth: 50%;\n"]);return N=function(){return t},t}function Q(){var t=Object(l.a)(["\n\theight: 100vh;\n\tbackground-image: linear-gradient(-45deg, #d754ab, #fd723a);\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tcolor: white;\n"]);return Q=function(){return t},t}function U(){var t=Object(l.a)(["\n\tquery getMovie($id: Int!) {\n\t\tmovie(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tmedium_cover_image\n\t\t\tlanguage\n\t\t\trating\n\t\t\tdescription_intro\n\t\t\tisLiked @client\n\t\t}\n\t\tsuggestions(id: $id) {\n\t\t\tid\n\t\t\tmedium_cover_image\n\t\t}\n\t}\n"]);return U=function(){return t},t}var F=Object(d.b)(U()),H=m.a.div(Q()),P=m.a.div(N()),R=m.a.h1(K()),S=m.a.h4(G()),T=m.a.p(D()),V=m.a.div(C(),(function(t){return t.bg})),W=function(){var t,n,e,i,a=Object(u.e)().id;a=parseInt(a);var o=Object(v.b)(F,{variables:{id:a}}),c=o.loading,l=o.data;return r.a.createElement(H,null,r.a.createElement(P,null,r.a.createElement(R,null,c?"Loading...":"".concat(l.movie.title," / ").concat(l.movie.isLiked?"OK":"NO")),r.a.createElement(S,null,null===l||void 0===l?void 0:null===(t=l.movie)||void 0===t?void 0:t.language," \xb7 ",null===l||void 0===l?void 0:null===(n=l.movie)||void 0===n?void 0:n.rating),r.a.createElement(T,null,null===l||void 0===l?void 0:null===(e=l.movie)||void 0===e?void 0:e.description_intro)),r.a.createElement(V,{bg:null===l||void 0===l?void 0:null===(i=l.movie)||void 0===i?void 0:i.medium_cover_image}))};var X=function(){return r.a.createElement(c.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:A}),r.a.createElement(u.a,{path:"/:id",component:W}))},Y=e(10),Z=new d.a({uri:"http://localhost:4000/",resolvers:{Movie:{isLiked:function(){return!1}},Mutation:{toggleLikeMovie:function(t,n,e){var i=n.id,r=n.isLiked;e.cache.writeData({id:"Movie:".concat(i),data:{isLiked:!r}})}}}});o.a.render(r.a.createElement(Y.a,{client:Z},r.a.createElement(X,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.63a58b38.chunk.js.map