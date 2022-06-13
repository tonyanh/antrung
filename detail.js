import { render } from "./common";
import { WorkList } from "./data";

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua

const product = WorkList.find((item) => item.id == id);

const result = `
<h2 class="text-[#21243D] font-bold text-3xl md:text-4xl w-[340px] md:w-[506px]">${product.name}</h2>
<div class="flex space-x-4 items-center py-5">
    <span class="inline-block font-bold text-white py-1 px-2 rounded-2xl bg-[#FF7C7C]">2020</span>
    <span class="font-normal text-xl text-[#21243D]"> User Experience Design</span>
</div>
    <p class="font-normal text-[#21243D] w-[340px] md:w-[680px]">${product.description}</p>
<img src="${product.img}" alt="" class="w-[340px] h-[256px]  md:w-[680px] md:h-[460px] pt-5">
`;
render("works", result);