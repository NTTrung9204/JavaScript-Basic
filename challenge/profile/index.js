var postComment = document.getElementsByClassName("post__comment")[0]
var postReactionInteract = document.getElementsByClassName("post__reaction__interact")[1]
postReactionInteract.addEventListener("click", ()=>{
    // postComment.toggleAttribute("style")
    postComment.style.maxHeight = "5000px"
})