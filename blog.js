import { blogList } from "./data";
import { render } from "./common";

function showBlog(blogs) {
    if (!Array.isArray(blogList) || blogList.length == 0) return [];

    // xử lý
    let result = "";
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        result += `
        <h2 class="mb-5"><a href="" class="font-bold text-2xl w-[370px]">${blog.name}</a></h2>
               <div class="flex py-0.5 space-x-4 text-[#21243D] mb-5">
                   <span class="font-normal text-lg">${blog.date}</span>
                   <span>|</span>
                   <span class="font-normal text-lg text-[#8695A4]">${blog.tag}</span>
               </div>
               <p class="font-normal text-base text-[#21243D] md:w-[580px] ">${blog.description}</p>
        `;
    }
    // return
    return result;
}

render("blogs", showBlog(blogList));


