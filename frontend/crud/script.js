

function Submit(){
    var dataEnter = retrieveData()
    console.log(dataEnter);
    
     var readData = readFromlocalStorage(dataEnter)
     console.log(readData);

     insert(readData)
     update()
    
}

// create
// retrive data from form
function retrieveData(){
     arr=[Name.value,job.value,exp.value]
    
    return arr

}

// read
// data from ls
function readFromlocalStorage(data){

    // storing data
    localStorage.setItem("name",data[0])
    localStorage.setItem("job",data[1])
    localStorage.setItem("exp",data[2])

    // getting data
   var n= localStorage.getItem("name")
   var j= localStorage.getItem("job")
   var e= localStorage.getItem("exp")

   arr=[n,j,e]
   return arr

}

// insert
function insert(readData){
    row = table.insertRow()
    row.insertCell(0).innerHTML = readData[0]
    row.insertCell(1).innerHTML = readData[1]
    row.insertCell(2).innerHTML = readData[2]
    row.insertCell(3).innerHTML = `<button onclick="edit(this)">Edit</button> 
                                   <button onclick="remove(this)">delete</button>`


}

// edit
function edit(td){  // for by click in edit we need to see it in input for changing
    row=td.parentElement.parentElement
    Name.value= row.cells[0].innerHTML //input data assign to row cell data
    job.value= row.cells[1].innerHTML
    exp.value= row.cells[2].innerHTML


}

// update
function update(){ // after changing need to show in row
    row.cells[0].innerHTML= Name.value
    row.cells[1].innerHTML= job.value
    row.cells[2].innerHTML=  exp.value
}