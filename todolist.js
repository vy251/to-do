function btnclick(){
  const newtask=document.createElement('li');
  const tasklist=document.getElementById('to-do-cont');
  const textarea=document.getElementById('textarea')
  if (textarea.value === "") {
    alert("Please enter a task!");
    return;
}
  const checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.style.marginRight="10px";
  const textcont=document.createElement("span");
  textcont.textContent=textarea.value;
  const deletebtn=document.createElement("button");
  deletebtn.innerText="\u00d7";
  deletebtn.classList.add("del");
  const editbtn=document.createElement("button");
  editbtn.classList.add("edit");
  editbtn.innerText="edit";
  const savebtn=document.createElement("button");
  savebtn.classList.add("save");
  savebtn.innerText="save";
  newtask.appendChild(checkbox);
  newtask.appendChild(textcont);
  newtask.appendChild(deletebtn);
  newtask.appendChild(editbtn);
  newtask.appendChild(savebtn);
  tasklist.appendChild(newtask);
  textarea.value="";
  checkbox.addEventListener("click",()=>{
    if(checkbox.checked){
      textcont.style.textDecoration="line-through";
    }
    else{
      textcont.style.textDecoration="none";
    }
  })
   deletebtn.addEventListener("click",()=>{
    deletebtn.parentElement.remove();
   })
   editbtn.addEventListener("click",()=>{
    savebtn.style.display="inline";
    const currenttext=textcont.textContent;
    textcont.innerHTML=`<input type='text' value='${currenttext}'>`;
    textcont.style.backgroundColor="aliceblue";
    savechanges();
   })
   function savechanges(){
    savebtn.addEventListener("click",()=>{
      const inputField = textcont.querySelector("input");
      const updatedText = inputField.value;
      if(updatedText==""){
        alert("write something");
        return;
      }
      textcont.textContent = updatedText;
      textcont.style.backgroundColor = "transparent";
      savebtn.style.display = "none";  
    })
   }
}
// const textarea = document.getElementById("textarea");
// const addtodo = document.getElementById("addtodo");
// const todocont = document.getElementsByClassName("todocontainer")[0];

// addtodo.addEventListener("click", function () {
//   const todotext = textarea.value;
//   const todoitem = document.createElement("li");
//   todoitem.classList.add("todo-item");

//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";

//   const tododiv = document.createElement("div");
//   tododiv.innerText = todotext;
//   tododiv.classList.add("todo-item-text");
//   tododiv.style.display = "inline-block";


//   checkbox.addEventListener("click", function () {
//     if (checkbox.checked) {
//       tododiv.style.textDecoration = "line-through";
//     } else {
//       tododiv.style.textDecoration = "none";
//     }
//   });

//   const deletebtn = document.createElement("button");
//   deletebtn.innerText = "Delete";
//   deletebtn.classList.add("delete-btn");


//   deletebtn.addEventListener("click", function () {
//     deletebtn.parentElement.remove();
//   });


//   todoitem.appendChild(checkbox);
//   todoitem.appendChild(tododiv);
//   todoitem.appendChild(deletebtn);


//   todocont.append(todoitem);

//   textarea.value = "";
// });