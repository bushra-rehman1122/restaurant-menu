const search_Icon2 = document.getElementById("searchIcon2");
const hidden_Icon2 = document.getElementById("hiddenIcon2");
const search_Here2 = document.getElementById("searchHere2");
// const search_Icon1 = document.getElementById("searchIcon1");
// const hidden_Icon1 = document.getElementById("hiddenIcon1");
// const search_Here1 = document.getElementById("searchHere1");
const bar = document.querySelector(".bar");
const header_bar = document.querySelector(".headerbar");
const cross = document.getElementById("cross");
const bar_icon = document.getElementById("barIcon");

search_Icon2.addEventListener('click',function(){
    search_Here2.style.display = "flex";
    // hidden_Icon2.style.display = "none";
    search_Icon2.style.display = "none";

})
hidden_Icon2.addEventListener('click',function(){
 search_Here2.style.display = "none";
 search_Icon2.style.display = "flex";

})

// search_Icon1.addEventListener('click',function(){
//     search_Here1.style.display = "flex";
//     // hidden_Icon2.style.display = "none";
//     search_Icon1.style.display = "none";

// })
// hidden_Icon1.addEventListener('click',function(){
//  search_Here1.style.display = "none";
//  search_Icon1.style.display = "flex";

// })



bar_icon.addEventListener('click',function(){
    setTimeout(() => {
    cross.style.display = 'block';
    }, 200);
    header_bar.style.right ='0%' ;
})


cross.addEventListener('click',function(event){
      console.log("Cross clicked!");
    cross.style.display = 'none';
      header_bar.style.right ='-100%' ;
     
})
