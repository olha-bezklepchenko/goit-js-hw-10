import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as u}from"./assets/vendor-77e16229.js";const i=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),g=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");o.disabled=!0;let a=null,c=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(u.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(a=e,o.disabled=!1)}};h(i,S);o.addEventListener("click",x);function x(){a&&(C(a),o.disabled=!0,i.disabled=!0)}function C(t){c=setInterval(()=>{const e=new Date().getTime(),n=t-e;if(n<0){clearInterval(c),i.disabled=!1,o.disabled=!0;return}const r=v(n);D(r)},1e3)}function v(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%36e5/6e4),f=Math.floor(t%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:f}}function s(t){return String(t).padStart(2,"0")}function D({days:t,hours:e,minutes:n,seconds:r}){g.textContent=s(t),p.textContent=s(e),y.textContent=s(n),b.textContent=s(r)}u.settings({class:"izi-toast",titleSize:"16px",titleFontWeight:"700",messageSize:"16px",messageFontWeight:"400",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",iconUrl:"./img/icon-x.svg",theme:"dark",maxWidth:"302px"});
//# sourceMappingURL=commonHelpers.js.map
