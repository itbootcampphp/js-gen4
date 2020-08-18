console.log("ToDo1");

let liTasks = document.querySelectorAll('li');
liTasks.forEach(li => {
    li.addEventListener("click", () => {
        if(li.style.textDecoration == "line-through"){
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }
    });

    // 2. način
    /* Ukoliko postoji klasa .lineThrough skloniti je, 
       u suprotnom dodati tu klasu
    */
    // li.addEventListener("click", () => {
    // li.classList.toggle("lineThrough");
    // });
});
