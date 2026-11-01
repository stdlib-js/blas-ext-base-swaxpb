"use strict";var j=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var x=j(function(Q,R){
var A=require('@stdlib/blas-ext-base-swapx/dist').ndarray,B=require('@stdlib/blas-ext-base-swax/dist').ndarray,i=require('@stdlib/number-float64-base-to-float32/dist'),c=5;function C(u,r,n,v,o,f,e,y,m){var a,q,t,s;if(u<=0)return e;if(r===1)return A(u,n,v,o,f,e,y,m);if(n===0)return B(u,r,v,o,f,e,y,m);if(a=f,q=m,o===1&&y===1){if(t=u%c,t>0)for(s=0;s<t;s++)e[q]=i(i(r*v[a])+n),a+=o,q+=y;if(u<c)return e;for(s=t;s<u;s+=c)e[q]=i(i(r*v[a])+n),e[q+1]=i(i(r*v[a+1])+n),e[q+2]=i(i(r*v[a+2])+n),e[q+3]=i(i(r*v[a+3])+n),e[q+4]=i(i(r*v[a+4])+n),a+=c,q+=c;return e}for(s=0;s<u;s++)e[q]=i(i(r*v[a])+n),a+=o,q+=y;return e}R.exports=C
});var M=j(function(S,E){
var _=require('@stdlib/strided-base-stride2offset/dist'),D=x();function F(u,r,n,v,o,f,e){return D(u,r,n,v,o,_(u,o),f,e,_(u,e))}E.exports=F
});var k=j(function(T,g){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=M(),H=x();G(O,"ndarray",H);g.exports=O
});var I=require("path").join,J=require('@stdlib/utils-try-require/dist'),K=require('@stdlib/assert-is-error/dist'),L=k(),p,z=J(I(__dirname,"./native.js"));K(z)?p=L:p=z;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
