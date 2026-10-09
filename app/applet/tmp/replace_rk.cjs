const fs = require('fs');

const realAvatarsStr = '["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"]';

['public/assets/index-DmNAOTAK.js', 'dist/assets/index-DmNAOTAK.js'].forEach(f => {
  if (!fs.existsSync(f)) return;
  let code = fs.readFileSync(f, 'utf8');

  const startMarker = 'rk=({src:s,alt:e,className:t,fallbackClassName:a=""})=>{';
  const endMarker = '{fileName:"/app/applet/src/components/ui/AvatarImage.tsx",lineNumber:31,columnNumber:5},void 0)}';

  const startIdx = code.indexOf(startMarker);
  const endIdx = code.indexOf(endMarker, startIdx);

  if (startIdx !== -1 && endIdx !== -1) {
    const fullEnd = endIdx + endMarker.length;
    const replacement = 'rk=({src:s,alt:e,className:t,fallbackClassName:a=""})=>{const[r,l]=X.useState(null);const _uList=' + realAvatarsStr + ';const _uIdx=Math.abs((e||"User").split("").reduce((ac,ch)=>ac*31+ch.charCodeAt(0),0))%_uList.length;const _uImg=_uList[_uIdx];const _finalSrc=(s&&r!==s&&!s.includes("ui-avatars.com"))?s:_uImg;return d.jsxDEV("img",{src:_finalSrc,alt:e||"User",className:t,onError:()=>l(s||null)},void 0,!1,{fileName:"/app/applet/src/components/ui/AvatarImage.tsx",lineNumber:21,columnNumber:7},void 0)}';
    code = code.substring(0, startIdx) + replacement + code.substring(fullEnd);
    console.log('Successfully updated rk in', f);
    fs.writeFileSync(f, code);
  } else {
    console.warn('Could not find rk markers in', f, startIdx, endIdx);
  }
});

console.log('Avatar replacement script complete.');
