function verifyForm1() {
    event.preventDefault();
    let branch = document.forms ["studentInfoForm"] ["branch"].value;
    if (branch == ""){
        alert("Please Fill out the Branch Field")
        return false;
    }
    let name = document.forms ["studentInfoForm"] ["name"].value;
    if (name == ""){
        alert("Please Fill out the Name Field")
        return false;
    }
    let message = document.forms ["studentInfoForm"] ["message"].value;
    if (message == ""){
        alert("Please Fill out your Reasoning Field")
        return false;
    }

    var rdb1 = document.getElementById("1stSem");
    var rdb2 = document.getElementById("2ndSem");
    var rdb3 = document.getElementById("Summer");

    if(rdb1.checked == true || rdb2.checked == true || rdb3.checked == true){
        alert("Student Info Fill Out Complete");
    }
    else{
        alert("Please Fill out the Semester Field")
        return false;
    }
}

const btn2 = document.getElementById("btnAdd1");
btn2.disabled=true;

function verifyForm2(){
    event.preventDefault();

    const btn1 = document.getElementById("btnVerify");
    const btn2 = document.getElementById("btnAdd1");
    btn2.disabled=true;

        let subject1 = document.forms ["subjectForm1"] ["subject1"].value;
        if (subject1 == ""){
            alert("Please Fill out the Subject Code Field")
            return false;
        }
        let cys1 = document.forms ["subjectForm1"] ["cys1"].value;
        if (cys1 == ""){
            alert("Please Fill out the Course, Year, & Section Field")
            return false;
        }
        let dayandtime1 = document.forms ["subjectForm1"] ["dayandtime1"].value;
        if (dayandtime1 == ""){
            alert("Please Fill out the Date and Time Field")
            return false;
        }
        let room1 = document.forms ["subjectForm1"] ["room1"].value;
        if (room1 == ""){
            alert("Please Fill out the Room Field")
            return false;
        }
        let units1 = document.forms ["subjectForm1"] ["units1"].value;
        if (units1 == ""){
            alert("Please Fill out the Units Field")
            return false;
        }
        let facultyname1 = document.forms ["subjectForm1"] ["facultyname1"].value;
        if (facultyname1 == ""){
            alert("Please Fill out the Faculty Name Field")
            return false;
        }
        else{
            alert("Subject Info Fill Out Complete");
            btn2.disabled=false;
        }    
}

const btn3 = document.getElementById("btnAdd2");
btn3.disabled=true;

const input1 = document.getElementById("hoursenrolled");
input1.disabled=true;
const input2 = document.getElementById("unitandhoursadded");
input2.disabled=true;
const input3 = document.getElementById("totalunitandhoursenrolled");
input3.disabled=true;

function verifyForm3(){
    event.preventDefault();

    const btn1 = document.getElementById("btnVerify");
    const btn3 = document.getElementById("btnAdd2");
    btn3.disabled=true;

        let subject2 = document.forms ["subjectForm2"] ["subject2"].value;
        if (subject2 == ""){
            alert("Please Fill out the Subject Code Field")
            return false;
        }
        let cys2 = document.forms ["subjectForm2"] ["cys2"].value;
        if (cys2 == ""){
            alert("Please Fill out the Course, Year, & Section Field")
            return false;
        }
        let dayandtime2 = document.forms ["subjectForm2"] ["dayandtime2"].value;
        if (dayandtime2 == ""){
            alert("Please Fill out the Date and Time Field")
            return false;
        }
        let room2 = document.forms ["subjectForm2"] ["room2"].value;
        if (room2 == ""){
            alert("Please Fill out the Room Field")
            return false;
        }
        let units2 = document.forms ["subjectForm2"] ["units2"].value;
        if (units2 == ""){
            alert("Please Fill out the Units Field")
            return false;
        }
        let facultyname2 = document.forms ["subjectForm2"] ["facultyname2"].value;
        if (facultyname2 == ""){
            alert("Please Fill out the Faculty Name Field")
            return false;
        }
        else{
            alert("Subject Info Fill Out Complete");
            btn3.disabled=false;
        }    
}

function submitForm1(){
    let studentnumber = document.forms ["studForm"] ["studentnumber"].value;
    if (studentnumber == ""){
        alert("Please Fill out the Student Number Field")
        return false;
    }
    let course = document.forms ["studForm"] ["course"].value;
    if (course == ""){
        alert("Please Fill out the Student Number Field")
        return false;
    }
    let yrandsec = document.forms ["studForm"] ["yrandsec"].value;
    if (yrandsec == ""){
        alert("Please Fill out the Student Number Field")
        return false;
    }
    let email = document.forms ["studForm"] ["email"].value;
    if (email == ""){
        alert("Please Fill out the Student Number Field")
        return false;
    }

}

function initializeAddButton(btn, table, subjectInput, cysInput, datInput, roomInput, unitsInput, facultyInput) {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let subject = subjectInput.value;
        let cys = cysInput.value;
        let dayandtime = datInput.value;
        let room = roomInput.value;
        let units = unitsInput.value;
        let facultyname = facultyInput.value;

        let template = `
            <tr>
                <td>${subject}</td>
                <td>${cys}</td>
                <td>${dayandtime}</td>
                <td>${room}</td>
                <td>${units}</td>
                <td>${facultyname}</td>
            </tr>`;
        table.innerHTML += template;

        clearFields([subjectInput, cysInput, datInput, roomInput, unitsInput, facultyInput]);
    });
}

function clearFields(inputs) {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

const btnAdd1 = document.querySelector('#btnAdd1');
const table1 = document.querySelector('#table1');
const subjectInput1 = document.querySelector('#subject1');
const cysInput1 = document.querySelector('#cys1');
const datInput1 = document.querySelector('#dayandtime1');
const roomInput1 = document.querySelector('#room1');
const unitsInput1 = document.querySelector('#units1');
const facultyInput1 = document.querySelector('#facultyname1');

initializeAddButton(btnAdd1, table1, subjectInput1, cysInput1, datInput1, roomInput1, unitsInput1, facultyInput1);


const btnAdd2 = document.querySelector('#btnAdd2');
const table2 = document.querySelector('#table2');
const subjectInput2 = document.querySelector('#subject2');
const cysInput2 = document.querySelector('#cys2');
const datInput2 = document.querySelector('#dayandtime2');
const roomInput2 = document.querySelector('#room2');
const unitsInput2 = document.querySelector('#units2');
const facultyInput2 = document.querySelector('#facultyname2');

initializeAddButton(btnAdd2, table2, subjectInput2, cysInput2, datInput2, roomInput2, unitsInput2, facultyInput2);


