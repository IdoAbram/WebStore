function func(){//reveals the code and hides the reveal code button
    let button= document.getElementById("reveal");
    button.classList.add("hide");
    const hidden = document.getElementById("hidden");
    hidden.classList.remove("hide");
}