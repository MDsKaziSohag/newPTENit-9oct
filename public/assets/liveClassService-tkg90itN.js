import{H as l}from"./index-DmNAOTAK.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],v=l("calendar",N);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],w=l("shield",$);function d(e){if(!e.date||!e.time)return"scheduled";try{const[i,n,a]=e.date.split("-").map(Number),[r,o]=e.time.split(":").map(Number);if(isNaN(i)||isNaN(n)||isNaN(a)||isNaN(r)||isNaN(o))return"scheduled";const t=new Date(i,n-1,a,r,o,0,0).getTime(),u=e.durationMinutes&&e.durationMinutes>0?e.durationMinutes:90,m=t+u*60*1e3,c=Date.now();return c<t?"scheduled":c>=t&&c<=m?"live_now":"expired"}catch{return"scheduled"}}function g(e){return Array.isArray(e)?e.filter(n=>d(n)!=="expired").sort((n,a)=>{const r=d(n),o=d(a);if(r==="live_now"&&o!=="live_now")return-1;if(o==="live_now"&&r!=="live_now")return 1;const s=new Date(`${n.date}T${n.time||"00:00"}:00`).getTime()||0,t=new Date(`${a.date}T${a.time||"00:00"}:00`).getTime()||0;return s-t}):[]}function D(e,i){try{const[n,a,r]=e.split("-"),[o,s]=(i||"20:00").split(":"),t=parseInt(o,10),u=parseInt(s,10),m=t>=12,c=t%12===0?12:t%12,h=t>=5&&t<12?"সকাল":t>=12&&t<16?"দুপুর":t>=16&&t<19?"বিকাল":"রাত",p=`${r}/${a}/${n}`,y=`${h} ${c.toLocaleString("bn-BD")}:${u<10?"০":""}${u.toLocaleString("bn-BD")} মি.`;return`${p} (${y})`}catch{return`${e} ${i}`}}export{v as C,w as S,d as a,D as f,g};
