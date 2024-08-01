const textM =document.getElementById("taskCreator");
const btnS = document.getElementById("btnS");
const container = document.getElementById("containerT");
const taskList = document.getElementById("taskList");
const eventList =document.getElementById("eventList");
const selector = document.getElementById("selector");
const taskPriority = document.getElementById("taskPriority");

let textListTask =  JSON.parse(localStorage.getItem("taskText"))||[];
let textListEvent = JSON.parse(localStorage.getItem("eventText"))||[];

btnS.addEventListener("click", function () {
    const selection = selector.value
    localStorage.clear();

    
if (selection === 'Task') {
        const containerN =document.createElement("div")
        const pTag = document.createElement("p");
        pTag.id ="TextoP"
        const btnD = document.createElement("button");
        const btnE = document.createElement("button");
        containerN.appendChild(pTag);
        containerN.appendChild(btnD);
        containerN.appendChild(btnE);
        let taskConca = textM.value +" "+ taskPriority.value;
        pTag.innerHTML= taskConca
        btnD.innerHTML = "Delete Tasks"; 
        btnE.innerHTML = "Edit";
        taskList.appendChild(containerN);
        textListTask.push(taskConca);
        localStorage.setItem("taskText", JSON.stringify(textListTask));
    
if (btnE.addEventListener("click", function () {
        const btnA = document.createElement("button");
        containerN.appendChild(btnA); 
        btnA.innerHTML = "Apply";
        pTag.contentEditable = true;
        pTag.style.backgroundColor = "#666";
        pTag.style.color = "white";
        let = pastValueT =pTag.textContent
    
if (btnA.addEventListener("click", function () {
        pTag.contentEditable = false;
        let taskListEdited = JSON.parse(localStorage.getItem("taskText"))||[];
        console.log(pastValueT);
for (let index = 0; index < taskListEdited.length; index++) {
    if (taskListEdited[index]===pastValueT) {
                console.log(taskListEdited);
                console.log(pTag.textContent);
                taskListEdited[index]=pTag.textContent;
                localStorage.setItem("taskText", JSON.stringify(taskListEdited));
            }
        }
        pTag.style.backgroundColor = "rgb(132, 44, 44)";
        this.after(btnA.remove())
    })){}
    })){}
if (btnD.addEventListener("click", function () {
        let taskListDeleted =JSON.parse(localStorage.getItem("taskText"))||[];
        const taskListupdated = taskListDeleted.filter(eventTask => eventTask != pTag.textContent);
        localStorage.setItem("taskText", JSON.stringify(taskListupdated));
        btnD.remove()
        pTag.remove()
        btnE.remove()
        alert("Deleted Succesfully");
    })) {}
     
}else { if (selection === 'Event') {
    const containerN =document.createElement("div")
    const pTag = document.createElement("p");
    pTag.id ="TextoP"
    const btnD = document.createElement("button");
    const btnE = document.createElement("button");
    containerN.appendChild(pTag);
    containerN.appendChild(btnD);
    containerN.appendChild(btnE);
    let eventConca = textM.value +" "+ taskPriority.value;
    pTag.innerHTML = eventConca
    btnD.innerHTML = "Delete Tasks";
    btnE.innerHTML = "Edit";
    eventList.appendChild(containerN);
    textListEvent.push(eventConca);
    localStorage.setItem("eventText", JSON.stringify(textListEvent));

if (btnE.addEventListener("click", function () {
        const btnA = document.createElement("button");
        containerN.appendChild(btnA);
        btnA.innerHTML = "Apply";
        pTag.contentEditable = true;
        pTag.style.backgroundColor = "#666";
        pTag.style.color = "white";
        let pastValue = pTag.textContent
        console.log(pastValue);

    if (btnA.addEventListener("click", function () {
                pTag.contentEditable = false; 
                let eventListEdited = JSON.parse(localStorage.getItem("eventText"))||[];
                console.log(pastValue);
        for (let index = 0; index < eventListEdited.length; index++) {
            if (eventListEdited[index] === pastValue) {
                        console.log(eventListEdited);
                        console.log(pTag.textContent);
                         eventListEdited[index] = pTag.textContent;
                         localStorage.setItem("eventText", JSON.stringify(eventListEdited));
                    } 
                }   
                console.log(eventListEdited);
                pTag.style.backgroundColor="rgb(132, 44, 44)"
                pTag.style.color = "Black";
                this.after(btnA.remove());
            })){}
    })){}

if (btnD.addEventListener("click", function () {
        let eventListDeleted = JSON.parse(localStorage.getItem("eventText"))||[];
        const eventListUpdated = eventListDeleted.filter(taskEvent => taskEvent != pTag.textContent)
        localStorage.setItem("eventText", JSON.stringify(eventListUpdated))
       
        btnD.remove()
        pTag.remove()
        btnE.remove()

        console.log("eventText");
    })) {}
      
    
} }})
function reload() {
    let taskData = JSON.parse(localStorage.getItem("taskText"))||[];
    for (let index = 0; index < taskData.length; index++) {
        const containerR =document.createElement("div")
        const textTag = document.createElement("p");
        const dBtn = document.createElement("button");
        const eBtn = document.createElement("button");
        containerR.appendChild(textTag);
        containerR.appendChild(dBtn);
        containerR.appendChild(eBtn);
        let taskConcan = textM.value +" "+ taskPriority.value;
        textTag.innerHTML= taskConcan
        dBtn.innerHTML = "Delete Tasks"; 
        eBtn.innerHTML = "Edit";
        taskList.appendChild(containerR);
        textListTask.push(taskConcan);
        localStorage.setItem("taskText", JSON.stringify(taskData));
    
    eBtn.addEventListener("click", function () {
        const aBtn = document.createElement("button");
        containerR.appendChild(aBtn); 
        aBtn.innerHTML = "Apply";
        textTag.contentEditable = true;
        textTag.style.backgroundColor = "#666";
        textTag.style.color = "white";
        let = pastValueTR =textTag.textContent
    
    aBtn.addEventListener("click", function () {
        textTag.contentEditable = false;
        let taskListEditedR = JSON.parse(localStorage.getItem("taskText"))||[];
        console.log(pastValueT);
        for (let index = 0; index < taskListEditedR.length; index++) {
            if (taskListEditedR[index]===pastValueTR) {
                console.log(taskListEditedR);
                console.log(textTag.textContent);
                taskListEditedR[index]=textTag.textContent;
                localStorage.setItem("taskText", JSON.stringify(taskListEditedR));
            }
        }
        textTag.style.backgroundColor = "#e7e7e7";
        textTag.style.color = "Black";
        this.after(aBtn.remove())
    })})
    dBtn.addEventListener("click", function () {
        let taskListDeletedR =JSON.parse(localStorage.getItem("taskText"))||[];
        const taskListupdatedR = taskListDeletedR.filter(eventTaskR => eventTaskR != textTag.textContent);
        localStorage.setItem("taskText", JSON.stringify(taskListupdatedR));
        dBtn.remove()
        textTag.remove()
        eBtn.remove()
        alert("Deleted Succesfully");
    })
        
    }
////////////////////////////////////////////////////////////////////////////
let eventData =   JSON.parse(localStorage.getItem("eventText"))||[];
for (let index = 0; index < eventData.length; index++) {
    const containerER =document.createElement("div")
    const textER = document.createElement("p");
    const dBtnE = document.createElement("button");
    const eBtnE = document.createElement("button");
    containerER.appendChild(textER);
    containerER.appendChild(dBtnE);
    containerER.appendChild(eBtnE);
    let eventConcaE = textM.value +" "+ taskPriority.value;
    textER.innerHTML = eventConcaE
    dBtnE.innerHTML = "Delete Tasks";
    eBtnE.innerHTML = "Edit";
    eventList.appendChild(containerER);
    textListEvent.push(eventConcaE);
    localStorage.setItem("eventText", JSON.stringify(eventData));

    eBtnE.addEventListener("click", function () {
        const aBtnE = document.createElement("button");
        containerER.appendChild(aBtnE);
        aBtnE.innerHTML = "Apply";
        textER.contentEditable = true;
        textER.style.backgroundColor = "#666";
        textER.style.color = "white";
        let pastValueER = pTag.textContent
        console.log(pastValueER);
        aBtnE.addEventListener("click", function () {
            textER.contentEditable = false; 
                let eventListEditedR = JSON.parse(localStorage.getItem("eventText"))||[];
                console.log(pastValueER);
               for (let index = 0; index < eventListEditedR.length; index++) {
                    if (eventListEditedR[index] === pastValueER) {
                        console.log(eventListEditedR);
                        console.log(textER.textContent);
                        eventListEditedR[index] = textER.textContent;
                         localStorage.setItem("eventText", JSON.stringify(eventListEditedR));
                    } 
                }   
                console.log(eventListEditedR);
                textER.style.backgroundColor="#e7e7e7"
                textER.style.color = "Black";
                this.after(aBtnE.remove());
            })})
    if (dBtnE.addEventListener("click",  function () {
        let eventListDeletedR = JSON.parse(localStorage.getItem("eventText"))||[];
        const eventListUpdatedR = eventListDeletedR.filter(taskEventR => taskEventR != textER.textContent)
        localStorage.setItem("eventText", JSON.stringify(eventListUpdatedR))
       
        dBtnE.remove()
        textER.remove()
        eBtnE.remove()

        console.log("eventText");
        alert("Deleted succesfully")
    })) {}

}
    alert("Sirve")
}
