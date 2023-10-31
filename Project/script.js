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
    });
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
