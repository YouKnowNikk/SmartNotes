shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    // console.log("addbtn called");
    let addtxt = document.getElementById("form-control1")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    // console.log(notesobj);
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2 notecard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button onclick="deletenote(this.id)" id="${index}" class="btn btn-primary">Delete</button>
        </div>
      </div>`
    });
    let notesELM = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesELM.innerHTML = html;
    }
    else{
        notesELM.innerHTML=`<p> Nothing To Do</p>`
    }
};
function deletenote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}
let search = document.getElementById('search');
search.addEventListener('input',function() {
    let inputval = search.value.toLowerCase();
    let notecard=document.getElementsByClassName('notecard');
    Array.from(notecard).forEach((element)=>{
    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    if(cardtxt.includes(inputval)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
    })
})
