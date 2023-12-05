function initializeAddButton(btn, table, subjectInput, cInput, ysInput, dayInput, timeInput, roomInput, unitsInput, facultyInput) {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let subject = subjectInput.value;
        let c = cInput.value;
        let ys = ysInput.value
        let day = dayInput.value;
        let time = timeInput.value;
        let room = roomInput.value;
        let units = unitsInput.value;
        let facultyname = facultyInput.value;

        let template = `
            <tr>
                <td>${subject}</td>
                <td>${c}</td>
                <td>${ys}</td>
                <td>${day}</td>
                <td>${time}</td>
                <td>${room}</td>
                <td>${units}</td>
                <td>${facultyname}</td>
            </tr>`;
        table.innerHTML += template;

        clearFields([subjectInput, cInput, ysInput, dayInput, timeInput, roomInput, unitsInput, facultyInput]);
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
const cInput1 = document.querySelector('#c1');
const ysInput1 = document.querySelector('#ys1');
const dayInput1 = document.querySelector('#day1');
const timeInput1 = document.querySelector('#time1');
const roomInput1 = document.querySelector('#room1');
const unitsInput1 = document.querySelector('#units1');
const facultyInput1 = document.querySelector('#facultyname1');

initializeAddButton(btnAdd1, table1, subjectInput1, cInput1, ysInput1, dayInput1, timeInput1, roomInput1, unitsInput1, facultyInput1);


function showAlert() {
    alert("Form submitted!");
}
