const fs = require('fs');

function updateFile(filePath, transforms) {
  if (!fs.existsSync(filePath)) {
    console.warn('File not found:', filePath);
    return;
  }
  let code = fs.readFileSync(filePath, 'utf8');
  transforms.forEach(([from, to, desc]) => {
    if (typeof from === 'string') {
      if (!code.includes(from)) {
        console.warn('Warning: Pattern not found in ' + filePath + ': ' + (desc || from.slice(0, 40)));
      } else {
        code = code.replaceAll(from, to);
        console.log('Applied in ' + filePath + ': ' + (desc || from.slice(0, 40)));
      }
    } else {
      code = code.replace(from, to);
    }
  });
  fs.writeFileSync(filePath, code);
}

const files = [
  'public/assets/MarketplaceSection-BHf5AuVp.js',
  'dist/assets/MarketplaceSection-BHf5AuVp.js'
];

files.forEach(f => {
  updateFile(f, [
    // 1. GigCard Title (make equal to name: text-[13.5px] sm:text-[14px] font-medium)
    [
      'className:"text-[13px] sm:text-[14px] lg:text-[15px] font-normal lg:font-medium text-slate-800 dark:text-slate-100 leading-snug line-clamp-2"',
      'className:"text-[13.5px] sm:text-[14px] font-medium text-slate-800 dark:text-slate-100 leading-snug line-clamp-2"',
      'GigCard line 726 title font size equal to name'
    ],
    // 2. GigCard badges (make equal to name: text-[13.5px] sm:text-[14px])
    [
      'className:"text-[11.5px] sm:text-xs font-bold text-[#006A4E] dark:text-emerald-400 flex items-center gap-1",children:"পাবলিক অফার"',
      'className:"text-[13.5px] sm:text-[14px] font-semibold text-blue-600 dark:text-sky-400 flex items-center gap-1",children:"পাবলিক অফার"',
      'GigCard public offer badge equal to name'
    ],
    [
      'className:"text-[11.5px] sm:text-xs font-bold text-[#E31E24] flex items-center gap-1",children:e.jsxDEV("span",{children:"⚡ আগে কাজ শুরু"}',
      'className:"text-[13.5px] sm:text-[14px] font-semibold text-[#E31E24] flex items-center gap-1",children:e.jsxDEV("span",{children:"⚡ আগে কাজ শুরু"}',
      'GigCard work first badge equal to name'
    ],
    [
      'className:"text-[11.5px] sm:text-xs font-bold text-[#006A4E] dark:text-emerald-400 flex items-center gap-1",children:[e.jsxDEV(la,{className:"w-3.5 h-3.5 fill-[#006A4E] text-[#006A4E] dark:fill-emerald-400 dark:text-emerald-400 shrink-0"},void 0,!1,{fileName:"/app/applet/src/components/GigCard.tsx",lineNumber:818,columnNumber:19},void 0),e.jsxDEV("span",{children:"প্রিমিয়াম গিগ"}',
      'className:"text-[13.5px] sm:text-[14px] font-semibold text-blue-600 dark:text-sky-400 flex items-center gap-1",children:[e.jsxDEV(la,{className:"w-3.5 h-3.5 fill-blue-600 text-blue-600 dark:fill-sky-400 dark:text-sky-400 shrink-0"},void 0,!1,{fileName:"/app/applet/src/components/GigCard.tsx",lineNumber:818,columnNumber:19},void 0),e.jsxDEV("span",{children:"প্রিমিয়াম গিগ"}',
      'GigCard premium badge equal to name'
    ],
    // 3. GigCard Price (make equal to name: text-[13.5px] sm:text-[14px])
    [
      'className:"font-bold text-xs sm:text-sm lg:text-[16px] text-[#006A4E] dark:text-emerald-400",children:["৳",xe.toLocaleString("en-US")]',
      'className:"font-bold text-[13.5px] sm:text-[14px] text-blue-600 dark:text-sky-400",children:["৳",xe.toLocaleString("en-US")]',
      'GigCard price equal to name'
    ],
    [
      'className:"text-slate-500 dark:text-slate-400 font-normal",children:R?"বাজেট:":ie?"বিল:":"Starts at"',
      'className:"text-[13.5px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-normal",children:R?"বাজেট:":ie?"বিল:":"Starts at"',
      'GigCard budget label equal to name'
    ],
    // 4. Second layout in GigCard
    [
      'className:"text-xs sm:text-base md:text-[17px] font-normal text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug hover:text-[#006A4E] transition-colors min-h-[2rem] sm:min-h-[2.25rem]",children:i.title',
      'className:"text-[13.5px] sm:text-[14px] font-medium text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug hover:text-blue-600 transition-colors min-h-[2rem] sm:min-h-[2.25rem]",children:i.title',
      'GigCard grid layout title equal to name'
    ],
    [
      'className:"text-sm sm:text-base md:text-lg lg:text-xl font-black text-[#006A4E] dark:text-emerald-400 block leading-tight",children:["৳",xe.toLocaleString("en-US")]',
      'className:"text-[13.5px] sm:text-[14px] font-bold text-blue-600 dark:text-sky-400 block leading-tight",children:["৳",xe.toLocaleString("en-US")]',
      'GigCard grid layout price equal to name'
    ],
    [
      'className:"text-xs text-slate-500 dark:text-slate-400 font-medium block leading-tight",children:R?"বাজেট:":ie?"বিল প্রদেয়":re?"০ টাকা অগ্রিম":"Starts at"',
      'className:"text-[13.5px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-normal block leading-tight",children:R?"বাজেট:":ie?"বিল প্রদেয়":re?"০ টাকা অগ্রিম":"Starts at"',
      'GigCard grid budget label equal to name'
    ],
    // 5. SellerFeedPostCard (Title, Price, Badge equal to name)
    [
      'className:"text-[11px] sm:text-[13px] lg:text-[14px] font-semibold text-[#E31E24] flex items-center gap-1",children:"Start Work First"',
      'className:"text-[13.5px] sm:text-[14px] font-semibold text-[#E31E24] flex items-center gap-1",children:"Start Work First"',
      'SellerFeedPostCard badge equal to name'
    ],
    [
      'className:"font-bold text-sm sm:text-base lg:text-[17px] text-[#006A4E] dark:text-emerald-400",children:["৳",Number(xn).toLocaleString("en-US")]',
      'className:"font-bold text-[13.5px] sm:text-[14px] text-[#006A4E] dark:text-emerald-400",children:["৳",Number(xn).toLocaleString("en-US")]',
      'SellerFeedPostCard price equal to name'
    ],
    [
      'className:"text-slate-500 dark:text-slate-400 font-normal",children:"Starts at"',
      'className:"text-[13.5px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-normal",children:"Starts at"',
      'SellerFeedPostCard Starts at equal to name'
    ],
    // 6. MarketplaceFeedShowcaseCards
    [
      'className:"font-black text-sm sm:text-base text-[#006A4E] dark:text-emerald-400",children:["৳",x.toLocaleString("bn-BD")]',
      'className:"font-bold text-[13.5px] sm:text-[14px] text-[#006A4E] dark:text-emerald-400",children:["৳",x.toLocaleString("bn-BD")]',
      'ShowcaseCards price equal to name'
    ]
  ]);
});

console.log('Done updating title, price, and badge sizes to match user name.');
