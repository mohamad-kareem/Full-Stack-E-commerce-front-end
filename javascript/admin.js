const category_buttons = document.getElementsByClassName("Category-Buttons");
const category_list = document.getElementsByClassName("List-block");
const user_list = document.getElementById("User-list");
const phone_list = document.getElementById("Phone-list");
const laptop_list = document.getElementById("Laptop-list");
const add_user_button = document.getElementById("Add-user");
const control_user_block = document.getElementById("Control-users-block");
const control_users_title = document.getElementById("Control-users-title");
const add_users_block = document.getElementById("Add-users-block");

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
});

const GetEachUser = (users) => {
    for(let i=0; i<users.length; i++){
        PrintUserInTable(users[i]);
    }
}

const PrintUserInTable = (user) => {

    // Adding new row for the new elements to go into
    let new_row = document.createElement("tr");
    user_list.insertAdjacentElement('beforeend', new_row);
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


axios.get('http://localhost/-Full-Stack-E-commerce--back-end-/getallphones.php').then(function (res) {
    let phones = res.data;
    GetEachPhone(phones);
}).catch(function (err) {
    console.log(err);
});


const GetEachPhone = (phones) => {
    for(let i=0; i<phones.length; i++){
        PrintPhoneInTable(phones[i]);
    }
}

const PrintPhoneInTable = (phone) => {
    // Adding new row for the new elements to go into
    let new_row = document.createElement("tr");
    phone_list.insertAdjacentElement('beforeend', new_row);
    AddThisElementToRow(new_row, phone.id);
    AddThisElementToRow(new_row, phone.brand);
    AddThisElementToRow(new_row, phone.model);
    AddThisElementToRow(new_row, phone.price + "$");
    AddThisElementToRow(new_row, phone.amount);
    AddThisElementToRow(new_row, phone.memory);
}


axios.get('http://localhost/-Full-Stack-E-commerce--back-end-/getalllaptops.php').then(function (res) {
    let laptops = res.data;
    GetEachLaptop(laptops);
}).catch(function (err) {
    console.log(err);
});


const GetEachLaptop = (laptops) => {
    for(let i=0; i<laptops.length; i++){
        PrintLaptopInTable(laptops[i]);
    }
}

const PrintLaptopInTable = (laptop) => {
    // Adding new row for the new elements to go into
    let new_row = document.createElement("tr");
    laptop_list.insertAdjacentElement('beforeend', new_row);
    AddThisElementToRow(new_row, laptop.id);
    AddThisElementToRow(new_row, laptop.brand);
    AddThisElementToRow(new_row, laptop.model);
    AddThisElementToRow(new_row, laptop.price + "$");
    AddThisElementToRow(new_row, laptop.quantity);
    AddThisElementToRow(new_row, laptop.vga);
    AddThisElementToRow(new_row, laptop.processor_type);
    AddThisElementToRow(new_row, laptop.processor);
    AddThisElementToRow(new_row, laptop.ram);
}

const ButtonIsEnabled = (button) => !button.classList.contains("Off-button");
const DisableButton = (button) => {
    button.classList.add("Off-button");
}
const EnableButton = (button) => {
    button.classList.remove("Off-button");
}

const ToggleAddUserInterface = () => {
    if (ButtonIsEnabled(add_user_button)) {
        DisableEveryTable();
        control_user_block.classList.remove("List-disabled");
        control_users_title.textContent = "Add User";
        add_users_block.classList.remove("List-disabled");
    }
}

add_user_button.addEventListener("click", ToggleAddUserInterface );
