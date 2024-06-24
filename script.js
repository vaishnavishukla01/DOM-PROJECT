
var button = document.querySelector("button")  
var page = document.querySelector(".page")
let i=0;
button.addEventListener("click",function(){
if(i == 0){
    page.style.backgroundImage ="url(https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) ";
    i =1;
}
else if(i == 0){
  page.style.backgroundImage ="url(https://images.unsplash.com/photo-1706545512982-b457dbd80aeb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) ";


}
 else{page.style.backgroundImage ="url(https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) ";
 page.style.backgroundImage ="url(https://images.unsplash.com/photo-1706346798055-563385cf6bac?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) ";
 i =0;  
  }
})

// if(page.style.backgroundImage ==="url(https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) "){
//  page.style.backgroundImage ="url(https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
//  console.log("hie")
//      } 
//      else{
//          page.style.backgroundImage ="url(https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" 
//     }