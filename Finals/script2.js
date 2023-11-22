function initializeAddButton(btn, table, subjectInput, cysInput, dayInput, timeInput, roomInput, unitsInput, facultyInput) {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let subject = subjectInput.value;
        let cys = cysInput.value;
        let day = dayInput.value;
        let time = timeInput.value;
        let room = roomInput.value;
        let units = unitsInput.value;
        let facultyname = facultyInput.value;

        let template = `
            <tr>
                <td>${subject}</td>
                <td>${cys}</td>
                <td>${day}</td>
                <td>${time}</td>
                <td>${room}</td>
                <td>${units}</td>
                <td>${facultyname}</td>
            </tr>`;
        table.innerHTML += template;

        clearFields([subjectInput, cysInput, dayInput, timeInput, roomInput, unitsInput, facultyInput]);
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
    const cysInput2 = document.querySelector('#cys2');
    const dayInput2 = document.querySelector('#day2');
    const timeInput2 = document.querySelector('#time2');
    const roomInput2 = document.querySelector('#room2');
    const unitsInput2 = document.querySelector('#units2');
    const facultyInput2 = document.querySelector('#facultyname2');

    initializeAddButton(btnAdd2, table2, subjectInput2, cysInput2, dayInput2, timeInput2, roomInput2, unitsInput2, facultyInput2);

    document.getElementById('myForm2').addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Data has been submitted!');
    });