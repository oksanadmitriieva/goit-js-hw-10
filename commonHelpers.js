import"./assets/reset-df635d97.js";import{f as S}from"./assets/vendor-77e16229.js";const h=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]");let c={};n.setAttribute("disabled","");const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){c=t[0],p(c)}};function p(t){const e=new Date;e.setHours(0,0,0,0),t<e||!t?(n.disabled=!0,iziToast.show({message:"Please choose a date in the future"})):n.disabled=!1}S(h,y);n.addEventListener("click",t=>{const e=c-Date.now();l(e),o(e)});function l(t){if(t<=0){console.log("Таймер завершено!");return}o(t),t>0&&setTimeout(()=>{l(t-1e3)},1e3)}function o(t){const a=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),r=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return m(a,s,r,f)}const m=(t,e,d,i)=>{const u=document.querySelector(".timer [data-days]"),a=document.querySelector(".timer [data-hours]"),s=document.querySelector(".timer [data-minutes]"),r=document.querySelector(".timer [data-seconds]");u.textContent=t.toString().padStart(2,"0"),a.textContent=e.toString().padStart(2,"0"),s.textContent=d.toString().padStart(2,"0"),r.textContent=i.toString().padStart(2,"0")};document.addEventListener("DOMContentLoaded",()=>{m(0,0,0,0)});console.log(o(2e3));console.log(o(14e4));console.log(o(2414e4));
//# sourceMappingURL=commonHelpers.js.map
