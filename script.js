const snake = new Snake();

document.addEventListener("keydown",(event)=>{
    event.preventDefault(); 
    playerMove(event.key)
})

