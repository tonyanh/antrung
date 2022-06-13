import { WorkList } from "./data";
import { render } from "./common";

function showWorks(products) {
    if (!Array.isArray(WorkList) || WorkList.length == 0) return [];
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const works = products[i];
        result += `
        <div class="">
        <img src="${works.img}" alt="" class="w-full">
         </div> 
        <div class="column">
        <h3><a href="/detail.html?id=${works.id}" class="font-bold text-3xl text-[#21243D]">${works.name}</a></h3>
        <div class="flex space-x-4 items-center py-5">
        <span class="inline-block font-bold text-white py-1 px-2 rounded-2xl bg-[#142850]">${works.date}</span>
        <span class="font-normal text-xl text-[#8695A4]">${works.tag}</span>
        </div>
        <p class="font-normal text-[#21243D] w-[580px]">${works.description}</p>
        
        </div>
        `;
    }
    // return
    return result;
  }
  
  render("works", showWorks(WorkList));
  