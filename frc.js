const form = document.getElementById('form');
const nameInp = document.getElementById('name');
const surInp = document.getElementById('surname');
const ageInp = document.getElementById('age');
const nation = document.getElementById('nation');
const exp = document.getElementById('exp');
let id = 0;
const div = document.getElementById('full');
const table = document.querySelector('.tab');
const tbody = document.querySelector('.tab tbody');

const users = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();//bu action bos olduguna gore yaziriq 
    let newUser = {
        id: id,
        name: nameInp.value,
        surname: surInp.value,
        age: ageInp.value,
        nation: nation.value,
        exp: exp.value,
    };
    if (newUser.name==''||newUser.surname==''||newUser.age=='') {
        alert('Bosluqlari doldurun')
        return
    }
    id++;
    users.push(newUser);
    renderRow(newUser);
}
);


const renderRow = (user) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.age}</td>
        <td>${user.nation}</td>
        <td>${user.exp}</td>
        <td>
            <button class="edit-btn" onclick="deleter(${user.id})"><i class="fas fa-trash-can"></i></button>
            <button class="del-btn" onclick="editer(${user.id})"><i class="fas fa-user-pen"></i></button>
        </td>
    `;
    tbody.appendChild(newRow);
};

const deleter = (id) => {
    let indexOfTarget = users.findIndex(user => user.id === id);
        users.splice(indexOfTarget, 1);
        renderUI(users);
};

const editer=(id=>{
    let target=users.findIndex(user => user.id === id);
    let newName=prompt('Ad Daxil Edin')
    let newSurname=prompt('Soy Ad Daxil Edin')
    let newAge=prompt('Yas Daxil Edin')
    users[target].name=newName
    users[target].surname=newSurname
    users[target].age=newAge
    renderUI(users)
})

const renderUI = (items) => {
    tbody.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        renderRow(items[i]);
    }
};