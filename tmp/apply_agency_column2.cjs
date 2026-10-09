
const fs = require("fs");

const files = [
  "public/assets/MarketplaceSection-BHf5AuVp.js",
  "dist/assets/MarketplaceSection-BHf5AuVp.js"
];

const AgencyHubCol2Code = `
const AgencyHubCol2 = ({
  services = [],
  products = [],
  courses = [],
  onSelectService,
  onSelectProduct,
  onSelectCourse,
  onViewAllProducts,
  onViewAllCourses,
  onViewAllServices,
  onBack,
  activeSubTab = "agency",
  isSeller = !1
}) => {
  const [subFilter, setSubFilter] = s.useState("all");

  return e.jsxDEV("div", {
    className: "space-y-4 w-full font-bengali animate-fadeIn",
    children: [
      e.jsxDEV("div", {
        className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs space-y-3",
        children: [
          e.jsxDEV("div", {
            className: "flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800 gap-2",
            children: [
              e.jsxDEV("div", {
                className: "flex items-center gap-2.5 min-w-0",
                children: [
                  e.jsxDEV("div", {
                    className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#006A4E] to-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs",
                    children: e.jsxDEV(cn, { className: "w-5 h-5 text-white" }, void 0, !1)
                  }, void 0, !1),
                  e.jsxDEV("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      e.jsxDEV("div", {
                        className: "flex items-center gap-1.5 flex-wrap",
                        children: [
                          e.jsxDEV("h2", {
                            className: "text-sm sm:text-base md:text-lg font-black text-slate-900 dark:text-white leading-tight",
                            children: "PTENit অফিসিয়াল এজেন্সি হাব"
                          }, void 0, !1),
                          e.jsxDEV("span", {
                            className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-[#006A4E] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
                            children: "১০০% ভেরিফাইড"
                          }, void 0, !1)
                        ]
                      }, void 0, !0),
                      e.jsxDEV("p", {
                        className: "text-[11.5px] text-slate-500 dark:text-slate-400 truncate mt-0.5",
                        children: "ডিজিটাল প্রোডাক্টস, একাডেমি কোর্স ও অফিশিয়াল আইটি সার্ভিস"
                      }, void 0, !1)
                    ]
                  }, void 0, !0)
                ]
              }, void 0, !0),
              e.jsxDEV("button", {
                type: "button",
                onClick: onBack,
                className: "py-1.5 px-3 rounded-xl text-xs font-semibold bg-[#F0F2F5] hover:bg-[#E4E6EB] dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer shrink-0 active:scale-95 border-0",
                children: "মার্কেটপ্লেসে ফিরুন"
              }, void 0, !1)
            ]
          }, void 0, !0),
          e.jsxDEV("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-2 pt-0.5",
            children: [
              e.jsxDEV("button", {
                type: "button",
                onClick: () => {
                  setSubFilter(subFilter === "services" ? "all" : "services");
                  if (onViewAllServices) onViewAllServices();
                },
                className: "p-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between cursor-pointer active:scale-98 border-0 " + (subFilter === "services" ? "bg-[#006A4E] text-white shadow-xs" : "bg-[#F0F2F5] hover:bg-[#E4E6EB] dark:bg-slate-800 text-slate-800 dark:text-slate-200"),
                children: [
                  e.jsxDEV("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsxDEV(gi, { className: "w-4 h-4 " + (subFilter === "services" ? "text-white" : "text-[#006A4E] dark:text-emerald-400") }, void 0, !1),
                      e.jsxDEV("span", { children: "ডিজিটাল সাভিস দেখুন" }, void 0, !1)
                    ]
                  }, void 0, !0),
                  e.jsxDEV("span", {
                    className: "px-1.5 py-0.5 rounded-full text-[10px] font-black " + (subFilter === "services" ? "bg-white/20 text-white" : "bg-emerald-100 text-[#006A4E] dark:bg-emerald-950 dark:text-emerald-300"),
                    children: [(services || []).length, "টি"]
                  }, void 0, !0)
                ]
              }, void 0, !0),
              e.jsxDEV("button", {
                type: "button",
                onClick: () => {
                  if (onViewAllProducts) onViewAllProducts();
                  else setSubFilter("products");
                },
                className: "p-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between cursor-pointer active:scale-98 border-0 " + (subFilter === "products" ? "bg-[#006A4E] text-white shadow-xs" : "bg-[#F0F2F5] hover:bg-[#E4E6EB] dark:bg-slate-800 text-slate-800 dark:text-slate-200"),
                children: [
                  e.jsxDEV("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsxDEV(Ue, { className: "w-4 h-4 " + (subFilter === "products" ? "text-white" : "text-amber-500") }, void 0, !1),
                      e.jsxDEV("span", { children: "ডিজিটাল প্রডাক্ট সবগুলো দেখুন" }, void 0, !1)
                    ]
                  }, void 0, !0),
                  e.jsxDEV("span", {
                    className: "px-1.5 py-0.5 rounded-full text-[10px] font-black " + (subFilter === "products" ? "bg-white/20 text-white" : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"),
                    children: [(products || []).length, "টি"]
                  }, void 0, !0)
                ]
              }, void 0, !0),
              e.jsxDEV("button", {
                type: "button",
                onClick: () => {
                  if (onViewAllCourses) onViewAllCourses();
                  else setSubFilter("courses");
                },
                className: "p-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between cursor-pointer active:scale-98 border-0 " + (subFilter === "courses" ? "bg-[#006A4E] text-white shadow-xs" : "bg-[#F0F2F5] hover:bg-[#E4E6EB] dark:bg-slate-800 text-slate-800 dark:text-slate-200"),
                children: [
                  e.jsxDEV("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsxDEV(Qe, { className: "w-4 h-4 " + (subFilter === "courses" ? "text-white" : "text-blue-500") }, void 0, !1),
                      e.jsxDEV("span", { children: "একাডেমি কোর্স সবগুলো দেখুন" }, void 0, !1)
                    ]
                  }, void 0, !0),
                  e.jsxDEV("span", {
                    className: "px-1.5 py-0.5 rounded-full text-[10px] font-black " + (subFilter === "courses" ? "bg-white/20 text-white" : "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"),
                    children: [(courses || []).length, "টি"]
                  }, void 0, !0)
                ]
              }, void 0, !0)
            ]
          }, void 0, !0)
        ]
      }, void 0, !0),

      (subFilter === "all" || subFilter === "services") && e.jsxDEV("div", {
        className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs space-y-3",
        children: [
          e.jsxDEV("div", {
            className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800",
            children: [
              e.jsxDEV("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsxDEV(gi, { className: "w-4 h-4 text-[#006A4E] dark:text-emerald-400" }, void 0, !1),
                  e.jsxDEV("h3", { className: "text-sm sm:text-base font-bold text-slate-900 dark:text-white", children: "ডিজিটাল সাভিস" }, void 0, !1),
                  e.jsxDEV("span", { className: "px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#006A4E] dark:text-emerald-400 text-[10.5px] font-bold border border-emerald-200 dark:border-emerald-800", children: [(services || []).length, "টি"] }, void 0, !0)
                ]
              }, void 0, !0),
              e.jsxDEV("button", {
                type: "button",
                onClick: () => {
                  setSubFilter(subFilter === "services" ? "all" : "services");
                },
                className: "text-xs font-bold text-[#006A4E] dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer border-0 bg-transparent",
                children: [
                  e.jsxDEV("span", { children: subFilter === "services" ? "সংক্ষেপ দেখুন" : "ডিজিটাল সাভিস দেখুন" }, void 0, !1),
                  e.jsxDEV(pt, { className: "w-3.5 h-3.5" }, void 0, !1)
                ]
              }, void 0, !0)
            ]
          }, void 0, !0),
          e.jsxDEV("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: (subFilter === "services" ? (services || []) : (services || []).slice(0, 4)).map(t => e.jsxDEV("div", {
              className: "group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:border-[#006A4E]/50 transition-all flex flex-col justify-between",
              children: [
                e.jsxDEV("div", {
                  className: "relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer",
                  onClick: () => onSelectService && onSelectService(t),
                  children: [
                    e.jsxDEV("img", { src: t.thumbnail, alt: t.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }, void 0, !1),
                    e.jsxDEV("div", {
                      className: "absolute top-2 left-2 z-10",
                      children: e.jsxDEV("span", { className: "px-2 py-0.5 rounded-md bg-[#006A4E] text-white font-bold text-[9px] shadow-xs flex items-center gap-1", children: [e.jsxDEV(na, { className: "w-3 h-3 text-white" }, void 0, !1), " অফিসিয়াল"] }, void 0, !0)
                    }, void 0, !1)
                  ]
                }, void 0, !0),
                e.jsxDEV("div", {
                  className: "p-2.5 sm:p-3 flex-1 flex flex-col justify-between space-y-2",
                  children: [
                    e.jsxDEV("h4", {
                      onClick: () => onSelectService && onSelectService(t),
                      className: "text-xs sm:text-[13.5px] font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#006A4E] dark:group-hover:text-emerald-400 transition-colors cursor-pointer line-clamp-2 leading-snug",
                      children: t.title
                    }, void 0, !1),
                    e.jsxDEV("div", {
                      className: "space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800",
                      children: (t.features || []).slice(0, 2).map((feat, fi) => e.jsxDEV("div", {
                        className: "flex items-center gap-1 text-[10.5px] text-slate-500 dark:text-slate-400",
                        children: [e.jsxDEV($, { className: "w-3 h-3 text-[#006A4E] dark:text-emerald-400 shrink-0" }, void 0, !1), e.jsxDEV("span", { className: "truncate", children: feat }, void 0, !1)]
                      }, fi, !0))
                    }, void 0, !1)
                  ]
                }, void 0, !0),
                e.jsxDEV("div", {
                  className: "p-2 sm:p-2.5 bg-[#F0F2F5]/60 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1.5 rounded-b-xl",
                  children: [
                    e.jsxDEV("div", {
                      className: "min-w-0",
                      children: [
                        e.jsxDEV("span", { className: "text-[9px] text-slate-400 font-bold block uppercase", children: "শুরু মাত্র" }, void 0, !1),
                        e.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#006A4E] dark:text-emerald-400 block truncate", children: t.priceText }, void 0, !1)
                      ]
                    }, void 0, !0),
                    e.jsxDEV("button", {
                      type: "button",
                      onClick: () => onSelectService && onSelectService(t),
                      className: "py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-[#006A4E] hover:bg-[#047857] shadow-xs transition cursor-pointer flex items-center gap-1 active:scale-95 shrink-0 border-0",
                      children: [e.jsxDEV("span", { children: "বিস্তারিত ও অর্ডার" }, void 0, !1), e.jsxDEV(pt, { className: "w-3 h-3 text-white" }, void 0, !1)]
                    }, void 0, !0)
                  ]
                }, void 0, !0)
              ]
            }, t.id, !0))
          }, void 0, !1)
        ]
      }, void 0, !0),

      (subFilter === "all" || subFilter === "products") && e.jsxDEV("div", {
        className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs space-y-3",
        children: [
          e.jsxDEV("div", {
            className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800",
            children: [
              e.jsxDEV("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsxDEV(Ue, { className: "w-4 h-4 text-amber-500" }, void 0, !1),
                  e.jsxDEV("h3", { className: "text-sm sm:text-base font-bold text-slate-900 dark:text-white", children: "ডিজিটাল প্রডাক্ট" }, void 0, !1),
                  e.jsxDEV("span", { className: "px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[10.5px] font-bold border border-amber-200 dark:border-amber-800", children: [(products || []).length, "টি"] }, void 0, !0)
                ]
              }, void 0, !0),
              e.jsxDEV("button", {
                type: "button",
                onClick: onViewAllProducts,
                className: "text-xs font-bold text-[#006A4E] dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer border-0 bg-transparent",
                children: [
                  e.jsxDEV("span", { children: "ডিজিটাল প্রডাক্ট সবগুলো দেখুন" }, void 0, !1),
                  e.jsxDEV(pt, { className: "w-3.5 h-3.5" }, void 0, !1)
                ]
              }, void 0, !0)
            ]
          }, void 0, !0),
          e.jsxDEV("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: (products || []).slice(0, 4).map(t => e.jsxDEV("div", {
              className: "group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:border-[#006A4E]/50 transition-all flex flex-col justify-between",
              children: [
                e.jsxDEV("div", {
                  className: "relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer",
                  onClick: () => onSelectProduct && onSelectProduct(t),
                  children: [
                    e.jsxDEV("img", { src: t.thumbnail, alt: t.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }, void 0, !1),
                    e.jsxDEV("div", {
                      className: "absolute top-2 left-2 z-10",
                      children: e.jsxDEV("span", { className: "px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[9px] shadow-xs", children: t.category || "প্রডাক্ট" }, void 0, !1)
                    }, void 0, !1)
                  ]
                }, void 0, !0),
                e.jsxDEV("div", {
                  className: "p-2.5 sm:p-3 flex-1 flex flex-col justify-between space-y-1.5",
                  children: [
                    e.jsxDEV("h4", {
                      onClick: () => onSelectProduct && onSelectProduct(t),
                      className: "text-xs sm:text-[13.5px] font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#006A4E] dark:group-hover:text-emerald-400 transition-colors cursor-pointer line-clamp-2 leading-snug",
                      children: t.title
                    }, void 0, !1),
                    e.jsxDEV("div", {
                      className: "flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400",
                      children: [e.jsxDEV("span", { className: "text-amber-500 font-bold", children: ["★ ", t.rating || "5.0"] }, void 0, !0), e.jsxDEV("span", { children: "•" }, void 0, !1), e.jsxDEV("span", { children: [t.downloads || 0, " ডাউনলোড"] }, void 0, !0)]
                    }, void 0, !0)
                  ]
                }, void 0, !0),
                e.jsxDEV("div", {
                  className: "p-2 sm:p-2.5 bg-[#F0F2F5]/60 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1.5 rounded-b-xl",
                  children: [
                    e.jsxDEV("div", {
                      className: "min-w-0",
                      children: [
                        e.jsxDEV("span", { className: "text-[9px] text-slate-400 font-bold block uppercase", children: "মূল্য" }, void 0, !1),
                        e.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#006A4E] dark:text-emerald-400 block truncate", children: ["৳", (t.price || 0).toLocaleString("en-US")] }, void 0, !0)
                      ]
                    }, void 0, !0),
                    e.jsxDEV("button", {
                      type: "button",
                      onClick: () => onSelectProduct && onSelectProduct(t),
                      className: "py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-[#006A4E] hover:bg-[#047857] shadow-xs transition cursor-pointer flex items-center gap-1 active:scale-95 shrink-0 border-0",
                      children: [e.jsxDEV("span", { children: "বিস্তারিত" }, void 0, !1), e.jsxDEV(pt, { className: "w-3 h-3 text-white" }, void 0, !1)]
                    }, void 0, !0)
                  ]
                }, void 0, !0)
              ]
            }, t.id, !0))
          }, void 0, !1)
        ]
      }, void 0, !0),

      (subFilter === "all" || subFilter === "courses") && e.jsxDEV("div", {
        className: "bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs space-y-3",
        children: [
          e.jsxDEV("div", {
            className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800",
            children: [
              e.jsxDEV("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsxDEV(Qe, { className: "w-4 h-4 text-blue-500" }, void 0, !1),
                  e.jsxDEV("h3", { className: "text-sm sm:text-base font-bold text-slate-900 dark:text-white", children: "একাডেমি কোর্স" }, void 0, !1),
                  e.jsxDEV("span", { className: "px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10.5px] font-bold border border-blue-200 dark:border-blue-800", children: [(courses || []).length, "টি"] }, void 0, !0)
                ]
              }, void 0, !0),
              e.jsxDEV("button", {
                type: "button",
                onClick: onViewAllCourses,
                className: "text-xs font-bold text-[#006A4E] dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer border-0 bg-transparent",
                children: [
                  e.jsxDEV("span", { children: "একাডেমি কোর্স সবগুলো দেখুন" }, void 0, !1),
                  e.jsxDEV(pt, { className: "w-3.5 h-3.5" }, void 0, !1)
                ]
              }, void 0, !0)
            ]
          }, void 0, !0),
          e.jsxDEV("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: (courses || []).slice(0, 4).map(t => e.jsxDEV("div", {
              className: "group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs hover:border-[#006A4E]/50 transition-all flex flex-col justify-between",
              children: [
                e.jsxDEV("div", {
                  className: "relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer",
                  onClick: () => onSelectCourse && onSelectCourse(t),
                  children: [
                    e.jsxDEV("img", { src: t.thumbnail, alt: t.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }, void 0, !1),
                    e.jsxDEV("div", {
                      className: "absolute top-2 left-2 z-10",
                      children: e.jsxDEV("span", { className: "px-2 py-0.5 rounded-md bg-[#006A4E] text-white font-bold text-[9px] shadow-xs uppercase", children: t.category || "কোর্স" }, void 0, !1)
                    }, void 0, !1)
                  ]
                }, void 0, !0),
                e.jsxDEV("div", {
                  className: "p-2.5 sm:p-3 flex-1 flex flex-col justify-between space-y-1.5",
                  children: [
                    e.jsxDEV("h4", {
                      onClick: () => onSelectCourse && onSelectCourse(t),
                      className: "text-xs sm:text-[13.5px] font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#006A4E] dark:group-hover:text-emerald-400 transition-colors cursor-pointer line-clamp-2 leading-snug",
                      children: t.title
                    }, void 0, !1),
                    e.jsxDEV("div", {
                      className: "flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400",
                      children: [e.jsxDEV("span", { children: t.duration || "৪ সপ্তাহ" }, void 0, !1), e.jsxDEV("span", { children: "•" }, void 0, !1), e.jsxDEV("span", { children: [(t.lessonsCount || 1), " ক্লাস"] }, void 0, !0)]
                    }, void 0, !0)
                  ]
                }, void 0, !0),
                e.jsxDEV("div", {
                  className: "p-2 sm:p-2.5 bg-[#F0F2F5]/60 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1.5 rounded-b-xl",
                  children: [
                    e.jsxDEV("div", {
                      className: "min-w-0",
                      children: [
                        e.jsxDEV("span", { className: "text-[9px] text-slate-400 font-bold block uppercase", children: "কোর্স ফি" }, void 0, !1),
                        e.jsxDEV("span", { className: "text-xs sm:text-sm font-bold text-[#006A4E] dark:text-emerald-400 block truncate", children: t.isFree ? "সম্পূর্ণ ফ্রি" : ["৳", (t.discountPrice || t.price || 0).toLocaleString("en-US")] }, void 0, !0)
                      ]
                    }, void 0, !0),
                    e.jsxDEV("button", {
                      type: "button",
                      onClick: () => onSelectCourse && onSelectCourse(t),
                      className: "py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-[#006A4E] hover:bg-[#047857] shadow-xs transition cursor-pointer flex items-center gap-1 active:scale-95 shrink-0 border-0",
                      children: [e.jsxDEV("span", { children: "বিস্তারিত" }, void 0, !1), e.jsxDEV(pt, { className: "w-3 h-3 text-white" }, void 0, !1)]
                    }, void 0, !0)
                  ]
                }, void 0, !0)
              ]
            }, t.id, !0))
          }, void 0, !1)
        ]
      }, void 0, !0)
    ]
  });
};
`;

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.warn("File not found:", f);
    return;
  }
  let c = fs.readFileSync(f, "utf8");

  // 1. Insert AgencyHubCol2 right before _f=
  if (!c.includes("const AgencyHubCol2=")) {
    c = c.replace("_f=", AgencyHubCol2Code + "\n_f=");
    console.log("Inserted AgencyHubCol2 in " + f);
  }

  // 2. Buyer Column 2: Insert AgencyHubCol2 rendering before at==="all-digital-products"
  const buyerCol2Target = "at===\"all-digital-products\"?e.jsxDEV(Um,{products:Er,onBack:()=>se(\"gigs\"),onSelectProduct:t=>Zt(t)";
  const buyerCol2Replacement = "(at===\"agency\"||at===\"all-agency-services\")?e.jsxDEV(AgencyHubCol2,{services:Fe,products:te,courses:j,onSelectService:t=>vl(t),onSelectProduct:t=>Zt(t),onSelectCourse:t=>(M?M(t.id):i&&i(\"courses\")),onViewAllProducts:()=>se(\"all-digital-products\"),onViewAllCourses:()=>se(\"all-courses\"),onViewAllServices:()=>se(\"all-agency-services\"),onBack:()=>se(\"gigs\"),activeSubTab:at},void 0,!1):at===\"all-digital-products\"?e.jsxDEV(Um,{products:Er,onBack:()=>se(\"agency\"),onSelectProduct:t=>Zt(t)";
  if (c.includes(buyerCol2Target)) {
    c = c.replace(buyerCol2Target, buyerCol2Replacement);
    console.log("Updated Buyer Column 2 in " + f);
  }

  // Also in Buyer Column 2 for courses back button: onBack:()=>se("agency")
  const buyerCourseBackTarget = "at===\"all-courses\"?e.jsxDEV(Jm,{courses:Dr,onBack:()=>se(\"gigs\")";
  const buyerCourseBackReplacement = "at===\"all-courses\"?e.jsxDEV(Jm,{courses:Dr,onBack:()=>se(\"agency\")";
  if (c.includes(buyerCourseBackTarget)) {
    c = c.replace(buyerCourseBackTarget, buyerCourseBackReplacement);
    console.log("Updated Buyer courses back button in " + f);
  }

  // 3. Seller Column 2: Insert AgencyHubCol2 rendering before q==="marketplace"&&(P===\"gigs\"||P===\"overview\")&&at==="all-digital-products"
  const sellerCol2Target = "q===\"marketplace\"&&(P===\"gigs\"||P===\"overview\")&&at===\"all-digital-products\"?e.jsxDEV(Um,{products:Er,onBack:()=>se(\"gigs\"),onSelectProduct:a=>Zt(a)";
  const sellerCol2Replacement = "(at===\"agency\"||at===\"all-agency-services\")?e.jsxDEV(AgencyHubCol2,{services:Fe,products:te,courses:j,onSelectService:a=>vl(a),onSelectProduct:a=>Zt(a),onSelectCourse:a=>(M?M(a.id):i&&i(\"courses\")),onViewAllProducts:()=>se(\"all-digital-products\"),onViewAllCourses:()=>se(\"all-courses\"),onViewAllServices:()=>se(\"all-agency-services\"),onBack:()=>se(\"gigs\"),activeSubTab:at,isSeller:!0},void 0,!1):q===\"marketplace\"&&(P===\"gigs\"||P===\"overview\")&&at===\"all-digital-products\"?e.jsxDEV(Um,{products:Er,onBack:()=>se(\"agency\"),onSelectProduct:a=>Zt(a)";
  if (c.includes(sellerCol2Target)) {
    c = c.replace(sellerCol2Target, sellerCol2Replacement);
    console.log("Updated Seller Column 2 in " + f);
  }

  // Also in Seller Column 2 for courses back button:
  const sellerCourseBackTarget = "q===\"marketplace\"&&(P===\"gigs\"||P===\"overview\")&&at===\"all-courses\"?e.jsxDEV(Jm,{courses:Dr,onBack:()=>se(\"gigs\")";
  const sellerCourseBackReplacement = "q===\"marketplace\"&&(P===\"gigs\"||P===\"overview\")&&at===\"all-courses\"?e.jsxDEV(Jm,{courses:Dr,onBack:()=>se(\"agency\")";
  if (c.includes(sellerCourseBackTarget)) {
    c = c.replace(sellerCourseBackTarget, sellerCourseBackReplacement);
    console.log("Updated Seller courses back button in " + f);
  }

  // 4. Buyer Menubar Agency Button: Click sets at="agency", scrolls col 2, and active when at==="agency"
  const buyerAgencyBtnTarget = "onClick:()=>{w(null),k(\"ptenit-services\")},className:`h-full flex-1 flex items-center justify-center relative px-3 lg:px-5 transition cursor-pointer group active:scale-95 ${y===\"ptenit-services\"?"text-[#006A4E]":"text-slate-500 hover:text-slate-900 hover:bg-slate-100/80"}`,title:"PTENit এজেন্সি সার্ভিস","aria-label":"PTENit এজেন্সি সার্ভিস",children:[e.jsxDEV(cn,{className:`w-5 h-5 transition group-hover:scale-105 ${y===\"ptenit-services\"?"text-[#006A4E] stroke-[2.4]":"text-slate-500 stroke-[1.8]"}`},void 0,!1,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5362,columnNumber:23},void 0),y===\"ptenit-services\"&&e.jsxDEV("span",{className:"absolute bottom-0 left-2 right-2 h-[3px] bg-[#006A4E] rounded-t-full shadow-xs"}";
  const buyerAgencyBtnReplacement = "onClick:()=>{w(null),se(\"agency\"),y!==\"gigs\"&&k(\"gigs\"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{const t=document.getElementById(\"marketplace-column-2\");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},60)},className:`h-full flex-1 flex items-center justify-center relative px-3 lg:px-5 transition cursor-pointer group active:scale-95 ${(at===\"agency\"||at===\"all-agency-services\"||y===\"ptenit-services\")?"text-[#006A4E]":"text-slate-500 hover:text-slate-900 hover:bg-slate-100/80"}`,title:"PTENit এজেন্সি সার্ভিস","aria-label":"PTENit এজেন্সি সার্ভিস",children:[e.jsxDEV(cn,{className:`w-5 h-5 transition group-hover:scale-105 ${(at===\"agency\"||at===\"all-agency-services\"||y===\"ptenit-services\")?"text-[#006A4E] stroke-[2.4]":"text-slate-500 stroke-[1.8]"}`},void 0,!1,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5362,columnNumber:23},void 0),(at===\"agency\"||at===\"all-agency-services\"||y===\"ptenit-services\")&&e.jsxDEV("span",{className:"absolute bottom-0 left-2 right-2 h-[3px] bg-[#006A4E] rounded-t-full shadow-xs"}";
  if (c.includes(buyerAgencyBtnTarget)) {
    c = c.replace(buyerAgencyBtnTarget, buyerAgencyBtnReplacement);
    console.log("Updated Buyer Menubar Agency Button in " + f);
  }

  // 5. Buyer Menubar Feed Button: Clicking resets se("gigs"), and active when at!=="agency"
  const buyerFeedBtnTarget = "onClick:()=>{w(null),Q(\"buying\"),k(\"gigs\"),We(\"All\"),He(\"\"),window.scrollTo({top:0,behavior:"smooth"})},className:`h-full flex-1 flex items-center justify-center relative px-3 lg:px-5 transition cursor-pointer group active:scale-95 ${y===\"gigs\"&&!et?"text-[#006A4E]":"text-slate-500 hover:text-slate-900 hover:bg-slate-100/80"}`,title:"মার্কেটপ্লেস ফিড","aria-label":"মার্কেটপ্লেস ফিড",children:[e.jsxDEV(Si,{className:`w-5 h-5 transition group-hover:scale-105 ${y===\"gigs\"&&!et?"text-[#006A4E] stroke-[2.4]":"text-slate-500 stroke-[1.8]"}`},void 0,!1,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5264,columnNumber:23},void 0),y===\"gigs\"&&!et&&e.jsxDEV("span",{className:"absolute bottom-0 left-2 right-2 h-[3px] bg-[#006A4E] rounded-t-full shadow-xs"}";
  const buyerFeedBtnReplacement = "onClick:()=>{w(null),Q(\"buying\"),se(\"gigs\"),k(\"gigs\"),We(\"All\"),He(\"\"),window.scrollTo({top:0,behavior:"smooth"})},className:`h-full flex-1 flex items-center justify-center relative px-3 lg:px-5 transition cursor-pointer group active:scale-95 ${y===\"gigs\"&&!et&&at!==\"agency\"&&at!==\"all-agency-services\"?"text-[#006A4E]":"text-slate-500 hover:text-slate-900 hover:bg-slate-100/80"}`,title:"মার্কেটপ্লেস ফিড","aria-label":"মার্কেটপ্লেস ফিড",children:[e.jsxDEV(Si,{className:`w-5 h-5 transition group-hover:scale-105 ${y===\"gigs\"&&!et&&at!==\"agency\"&&at!==\"all-agency-services\"?"text-[#006A4E] stroke-[2.4]":"text-slate-500 stroke-[1.8]"}`},void 0,!1,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5264,columnNumber:23},void 0),y===\"gigs\"&&!et&&at!==\"agency\"&&at!==\"all-agency-services\"&&e.jsxDEV("span",{className:"absolute bottom-0 left-2 right-2 h-[3px] bg-[#006A4E] rounded-t-full shadow-xs"}";
  if (c.includes(buyerFeedBtnTarget)) {
    c = c.replace(buyerFeedBtnTarget, buyerFeedBtnReplacement);
    console.log("Updated Buyer Menubar Feed Button in " + f);
  }

  // 6. Seller Menubar: Add Agency button right after button 4 (ব্যালেন্স ও ক্যাশআউট)
  const sellerBtn4Target = "{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5723,columnNumber:19},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5634,columnNumber:17}";
  const sellerAgencyBtnCode = ",e.jsxDEV("button",{type:"button",onClick:()=>{w(null),se(\"agency\"),U(\"marketplace\"),F(\"gigs\"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{const t=document.getElementById(\"marketplace-column-2-seller\");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},60)},className:`h-full flex-1 flex items-center justify-center relative px-3 lg:px-4 transition cursor-pointer group active:scale-95 ${(at===\"agency\"||at===\"all-agency-services\")?"text-[#E11D48]":"text-slate-500 hover:text-slate-900 hover:bg-slate-100/80"}`,title:"PTENit এজেন্সি সার্ভিস",children:[e.jsxDEV(cn,{className:`w-5 h-5 transition group-hover:scale-105 ${(at===\"agency\"||at===\"all-agency-services\")?"text-[#E11D48] stroke-[2.4]":"text-slate-500 stroke-[1.8]"}`},void 0,!1,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5740,columnNumber:21},void 0),(at===\"agency\"||at===\"all-agency-services\")&&e.jsxDEV("span",{className:"absolute bottom-0 left-2 right-2 h-[3px] bg-[#E11D48] rounded-t-full shadow-xs"},void 0,!1,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5744,columnNumber:23},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5723,columnNumber:19},void 0)";
  const sellerBtn4Replacement = "{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5723,columnNumber:19},void 0)" + sellerAgencyBtnCode + "]},void 0,!0,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5634,columnNumber:17}";

  // Let us check sellerBtn4Target precisely
  if (c.includes(sellerBtn4Target)) {
    c = c.replace(sellerBtn4Target, "{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5723,columnNumber:19},void 0)" + sellerAgencyBtnCode + "]},void 0,!0,{fileName:"/app/applet/src/components/MarketplaceSection.tsx",lineNumber:5634,columnNumber:17}");
    console.log("Added Agency button to Seller Menubar in " + f);
  }

  // 7. Seller Menubar Home button: reset se("gigs") and active when at!=="agency"
  const sellerHomeBtnTarget = "onClick:()=>{w(null),Q(\"selling\"),se(\"gigs\"),U(\"marketplace\"),F(\"gigs\"),fa(\"total\"),window.scrollTo({top:0,behavior:"smooth"})},className:`h-full flex-1 flex items-center justify-center relative px-3 lg:px-4 transition cursor-pointer group active:scale-95 ${t?"text-[#E11D48]":"text-slate-500 hover:text-slate-900 hover:bg-slate-100/80"}`";
  const sellerHomeBtnReplacement = "onClick:()=>{w(null),Q(\"selling\"),se(\"gigs\"),U(\"marketplace\"),F(\"gigs\"),fa(\"total\"),window.scrollTo({top:0,behavior:"smooth"})},className:`h-full flex-1 flex items-center justify-center relative px-3 lg:px-4 transition cursor-pointer group active:scale-95 ${t&&at!==\"agency\"&&at!==\"all-agency-services\"?"text-[#E11D48]":"text-slate-500 hover:text-slate-900 hover:bg-slate-100/80"}`";
  if (c.includes(sellerHomeBtnTarget)) {
    c = c.replace(sellerHomeBtnTarget, sellerHomeBtnReplacement);
    console.log("Updated Seller Home button in " + f);
  }

  fs.writeFileSync(f, c);
  console.log("Successfully wrote updated " + f);
});
