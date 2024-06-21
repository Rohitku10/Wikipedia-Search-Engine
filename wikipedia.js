let inputValueEl=document.getElementById("searchInput");
let searchResultEl=document.getElementById("searchResults")

let spinnerEl=document.getElementById("spinner")

function createAndAppendSearchResults(result){
    //creating result item

    let resultItemEl=document.createElement("div")
    resultItemEl.classList.add("result-item")
    searchResultEl.appendChild(resultItemEl);

    //creating Title Element

    let{link,title,description}=result;
    let resultTitleEl=document.createElement("a");
    resultTitleEl.href=link;
    resultTitleEl.target="_blank";
    resultTitleEl.textContent=title;
    resultTitleEl.classList.add("result-title")
    resultItemEl.appendChild(resultTitleEl);

    //creating Break Element

    let titleBreakEl=document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    // creating Url Element

    let urlEl=document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href=link;
    urlEl.target="_blank";
    urlEl.textContent=link;
    resultItemEl.appendChild(urlEl);

    //creating Break Element 

    let lineBreakEl=document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);

    //creating Description Element

    let descriptionEl=document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent=description;
    resultItemEl.appendChild(descriptionEl);


}

function displayResults(searchResults){
    spinnerEl.classList.toggle("d-none");
    for (let result of searchResults)
    createAndAppendSearchResults(result);
}

function searchWikipedia(event){
    if(event.key === "Enter"){
        spinnerEl.classList.toggle("d-none");
        searchResultEl.textContent='';
        inputElementValue=inputValueEl.value;
        url="https://apis.ccbp.in/wiki-search?search=" + inputElementValue;
        console.log(url);
        Options={
            method:"GET"
        }
        fetch(url,Options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            let {search_results}=jsonData;
            displayResults(search_results);
        });
    }
}


inputValueEl.addEventListener("keydown",searchWikipedia);