function initializeAddButton(btn, table, subjectInput, sInput, dayInput, timeInput, roomInput, unitsInput, facultyInput) {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let subject = subjectInput.value;
        let s = sInput.value;
        let day = dayInput.value;
        let time = timeInput.value;
        let room = roomInput.value;
        let units = unitsInput.value;
        let facultyname = facultyInput.value;

        let template = `
            <tr>
                <td>${subject}</td>
                <td>${s}</td>
                <td>${day}</td>
                <td>${time}</td>
                <td>${room}</td>
                <td>${units}</td>
                <td>${facultyname}</td>
            </tr>`;
        table.innerHTML += template;

        clearFields([subjectInput, sInput, dayInput, timeInput, roomInput, unitsInput, facultyInput]);
    });
    }

function clearFields(inputs) {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    }

    const btnAdd2 = document.querySelector('#btnAdd2');
    const table2 = document.querySelector('#table2');
    const subjectInput2 = document.querySelector('#subject2');
    const sInput2 = document.querySelector('#s2');
    const dayInput2 = document.querySelector('#day2');
    const timeInput2 = document.querySelector('#time2');
    const roomInput2 = document.querySelector('#room2');
    const unitsInput2 = document.querySelector('#units2');
    const facultyInput2 = document.querySelector('#facultyname2');

    initializeAddButton(btnAdd2, table2, subjectInput2, sInput2, dayInput2, timeInput2, roomInput2, unitsInput2, facultyInput2);

function showAlert() {
    alert("Form submitted!");
}
