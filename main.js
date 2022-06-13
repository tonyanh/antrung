
import { productList } from "./data";
import { render } from "./common";
import { userList } from "./data";
import { WorkList } from "./data";
// selector đến element product
// khai báo hàm show product
function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(productList) || productList.length == 0) return [];

    // xử lý
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
        <div class="column py-8 px-5  rounded-md bg-white">
                   <h2 class="mb-5"><a href="" class="font-bold text-2xl w-[370px]">${product.name}</a></h2>
                  <div class="flex py-5 space-x-4 text-[#21243D] mb-5">
                      <span class="font-normal text-lg">${product.date}</span>
                      <span>|</span>
                      <span class="font-normal text-lg">${product.tags}</span>
                  </div>
                  <p class="font-normal text-base ">${product.description}</p>
              </div>
        `;
    }
    // return
    return result;
}

render("product", showProducts(productList));


//
function showInformation(products) {
      if (!Array.isArray(productList) || productList.length == 0) return [];
      let result = "";
      for (let i = 0; i < products.length; i++) {
          const information = products[i];
          result += `
          <div class=" md:col-span-2 order-2 md:order-1">
          <h2 class="font-bold text-3xl mt-10 md:mt-0 md:text-5xl md:leading-[60px]">${information.name}</h2>
          <p class="font-normal text-base my-5">${information.description}</p>
          <a href="" class="inline-block boder rounded-sm bg-red-600 px-10 py-5 text-white">Download Resume</a>         
      </div>
      <div class="md:col-span-1 order-1 md:order-2">
          <img class="mx-auto md:ml-auto md:mr-0" src="${information.img}" alt="">
      </div>
          `;
      }
      // return
      return result;
  }
  
  render("information", showInformation(userList));

  //
function showWorks(products) {
  if (!Array.isArray(productList) || productList.length == 0) return [];
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

