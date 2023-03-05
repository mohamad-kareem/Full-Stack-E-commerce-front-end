const category_buttons = document.getElementsByClassName("Category-Buttons");
const category_list = document.getElementsByClassName("List-block");
const user_header = document.getElementById("User-header");
const user_list = document.getElementById("User-list");

for(let i=0; i< category_buttons.length; i++){
    category_buttons[i].addEventListener("click", () => {
        let button = category_buttons[i];;
        TurnOffEveryButton();
        TurnOnTheSelectedButton(button);
        ActivateTheCorrespondingTable(button);
    });
}

const TurnOffEveryButton = () => {
    for(let i=0; i<category_buttons.length; i++){
        category_buttons[i].classList.remove("Button-enabled");
    }
}

const TurnOnTheSelectedButton = (button) => button.classList.add("Button-enabled");

const ActivateTheCorrespondingTable = (button) => {
    if (button.textContent == "List of Users") {
        DisableEveryTable();
        category_list[0].classList.remove("List-disabled");
    }else if (button.textContent == "List of Phones") {
        DisableEveryTable();
        category_list[1].classList.remove("List-disabled");
    }else if (button.textContent == "List of Laptops") {
        DisableEveryTable();
        category_list[2].classList.remove("List-disabled");
    }else if (button.textContent == "List of Accessories") {
        DisableEveryTable();
        category_list[3].classList.remove("List-disabled");
    }
}

const DisableEveryTable = () => {
    for(let i=0; i<category_list.length; i++){
        category_list[i].classList.add("List-disabled");
    }
}


axios.get('http://localhost/-Full-Stack-E-commerce--back-end-/getallusers.php').then(function (res) {
    let users = res.data;
    GetEachUser(users);
}).catch(function (err) {
    console.log(err);
})

const GetEachUser = (users) => {
    for(let i=0; i<users.length; i++){
        console.log(users[i]);
        PrintUserInTable(users[i]);
    }
}

const PrintUserInTable = (user) => {

    // Adding new row for the new elements to go into
    let new_row = document.createElement("tr");
    user_list.insertAdjacentElement('beforeend', new_row);
    
    // let user_id = document.createElement("td");
    // user_id.textContent = user.id;
    // new_row.insertAdjacentElement('beforeend', user_id);
    AddThisElementToRow(new_row, user.id);
    AddThisElementToRow(new_row, user.fname);
    AddThisElementToRow(new_row, user.lname);
    AddThisElementToRow(new_row, user.email);
    AddThisElementToRow(new_row, user.password);
    AddThisElementToRow(new_row, user.phone);
    AddThisElementToRow(new_row, user.address);
}

const AddThisElementToRow = (row, text_in_element) => {
    let new_element = document.createElement("td");
    new_element.textContent = text_in_element;
    row.insertAdjacentElement('beforeend', new_element);
}