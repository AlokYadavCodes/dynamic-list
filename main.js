const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function addItem(){
        if (input.value === "") {
        alert("Mat kr lala!")
        return;
    }

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    li.textContent = input.value;

    delBtn.addEventListener("click", () => {
        li.remove();
    })

    li.appendChild(delBtn)
    list.appendChild(li);

    input.value = ""

    const listItem = li;
    const inputEl = document.createElement("input");

    li.addEventListener("dblclick", () => {
        console.log("db click");
        inputEl.value = listItem.childNodes[0].textContent;
        li.replaceWith(inputEl);
        inputEl.focus();

        inputEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                listItem.childNodes[0].textContent = inputEl.value;
                inputEl.replaceWith(listItem);
            }
        })
        inputEl.addEventListener("blur", () => {
            listItem.childNodes[0].textContent = inputEl.value;
            inputEl.replaceWith(listItem);
        })
    })

}
addBtn.addEventListener("click", addItem);
input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter") addItem();
})