const key = "udRkxudy3hwr9rMBr-B4X2eiDT9fcf8kNeGi9jyyCoU"
let search_fromEl = document.getElementById("search-from");
let search_inputEl = document.getElementById("search-input");
let search_resultEl = document.getElementById("search-result")
let show_more_btnEl = document.getElementById("show-more-btn");
let search_btnEl = document.getElementById("search-btn");

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = search_inputEl.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`

    let res = await fetch(url)
    let data = await res.json();
    if(page === 1){
        search_resultEl.innerHTML=" "
    }
    
    let results = data.results;
    results.map((result)=>{
        let image = document.createElement("img");
        image.src=result.urls.small;
        
        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        imageLink.target = "_blank"

        imageLink.appendChild(image);

        search_resultEl.appendChild(imageLink);
        // search_resultEl.insertAdjacentElement("afterbegin",imageLink)
        show_more_btnEl.style.display="block"

    })
}

search_fromEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage()
})

show_more_btnEl.addEventListener("click",()=>{
    page++
    searchImage()
})
search_btnEl.addEventListener("click",()=>{
    // page++;
    searchImage()
})
