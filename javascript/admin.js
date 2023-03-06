const category_buttons = document.getElementsByClassName("Category-Buttons");
const category_list = document.getElementsByClassName("List-block");
const user_list = document.getElementById("User-list");
const phone_list = document.getElementById("Phone-list");
const laptop_list = document.getElementById("Laptop-list");

const control_users_block = document.getElementById("Control-users-block");
const control_users_title = document.getElementById("Control-users-title");
const add_users_buttons = document.getElementsByClassName("Add-user");
const add_users_block = document.getElementById("Add-users-block");
const remove_users_buttons = document.getElementsByClassName("Remove-user");
const remove_users_block = document.getElementById("Remove-users-block");
const edit_users_buttons = document.getElementsByClassName("Edit-user");
const edit_users_block = document.getElementById("Edit-users-block");

const control_phones_block = document.getElementById("Control-phones-block");
const control_phones_title = document.getElementById("Control-phones-title");
const add_phones_buttons = document.getElementsByClassName("Add-phone");
const add_phones_block = document.getElementById("Add-phones-block");
const remove_phones_buttons = document.getElementsByClassName("Remove-phone");
const remove_phones_block = document.getElementById("Remove-phones-block");
const edit_phones_buttons = document.getElementsByClassName("Edit-phone");
const edit_phones_block = document.getElementById("Edit-phones-block");

const control_laptops_block = document.getElementById("Control-laptops-block");
const control_laptops_title = document.getElementById("Control-laptops-title");
const add_laptops_buttons = document.getElementsByClassName("Add-laptop");
const add_laptops_block = document.getElementById("Add-laptops-block");
const remove_laptops_buttons = document.getElementsByClassName("Remove-laptop");
const remove_laptops_block = document.getElementById("Remove-laptops-block");
const edit_laptops_buttons = document.getElementsByClassName("Edit-laptop");
const edit_laptops_block = document.getElementById("Edit-laptops-block");


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

// Start of manipulating sections

// For manipulating users

const ToggleAddUserInterface = () => {
    DisableEveryTable();
    control_users_block.classList.remove("List-disabled");
    control_users_title.textContent = "Add User";
    add_users_block.classList.remove("List-disabled");
    edit_users_block.classList.add("List-disabled");
    remove_users_block.classList.add("List-disabled");
}

const ToggleRemoveUserInterface = () => {
        DisableEveryTable();
        control_users_block.classList.remove("List-disabled");
        control_users_title.textContent = "Remove User Based On Id";
        remove_users_block.classList.remove("List-disabled");
        add_users_block.classList.add("List-disabled");
        edit_users_block.classList.add("List-disabled");
}

const ToggleEditUserInterface = () => {
        DisableEveryTable();
        control_users_block.classList.remove("List-disabled");
        control_users_title.textContent = "Edit User Based On Email";
        edit_users_block.classList.remove("List-disabled");
        remove_users_block.classList.add("List-disabled");
        add_users_block.classList.add("List-disabled");

}

for(let i=0; i<add_users_buttons.length; i++) {
    add_users_buttons[i].addEventListener("click", ToggleAddUserInterface );
}
for(let i=0; i<remove_users_buttons.length; i++) {
    remove_users_buttons[i].addEventListener("click", ToggleRemoveUserInterface );
}
for(let i=0; i<edit_users_buttons.length; i++) {
    edit_users_buttons[i].addEventListener("click", ToggleEditUserInterface );
}

// For manipulating phones

const ToggleAddPhoneInterface = () => {
    DisableEveryTable();
    control_phones_block.classList.remove("List-disabled");
    control_phones_title.textContent = "Add Phone";
    add_phones_block.classList.remove("List-disabled");
    edit_phones_block.classList.add("List-disabled");
    remove_phones_block.classList.add("List-disabled");
}

const ToggleRemovePhoneInterface = () => {
        DisableEveryTable();
        control_phones_block.classList.remove("List-disabled");
        control_phones_title.textContent = "Remove Phone Based On Id";
        remove_phones_block.classList.remove("List-disabled");
        add_phones_block.classList.add("List-disabled");
        edit_phones_block.classList.add("List-disabled");
}

const ToggleEditPhoneInterface = () => {
        DisableEveryTable();
        control_phones_block.classList.remove("List-disabled");
        control_phones_title.textContent = "Edit Phones Based On Id";
        edit_phones_block.classList.remove("List-disabled");
        remove_phones_block.classList.add("List-disabled");
        add_phones_block.classList.add("List-disabled");

}

for(let i=0; i<add_phones_buttons.length; i++) {
    add_phones_buttons[i].addEventListener("click", ToggleAddPhoneInterface );
}
for(let i=0; i<remove_users_buttons.length; i++) {
    remove_phones_buttons[i].addEventListener("click", ToggleRemovePhoneInterface );
}
for(let i=0; i<edit_users_buttons.length; i++) {
    edit_phones_buttons[i].addEventListener("click", ToggleEditPhoneInterface );
}

// For manipulating laptops

const ToggleAddlaptopInterface = () => {
    DisableEveryTable();
    control_laptops_block.classList.remove("List-disabled");
    control_laptops_title.textContent = "Add laptop";
    add_laptops_block.classList.remove("List-disabled");
    edit_laptops_block.classList.add("List-disabled");
    remove_laptops_block.classList.add("List-disabled");
}

const ToggleRemovelaptopInterface = () => {
        DisableEveryTable();
        control_laptops_block.classList.remove("List-disabled");
        control_laptops_title.textContent = "Remove laptop Based On Id";
        remove_laptops_block.classList.remove("List-disabled");
        add_laptops_block.classList.add("List-disabled");
        edit_laptops_block.classList.add("List-disabled");
}

const ToggleEditlaptopInterface = () => {
        DisableEveryTable();
        control_laptops_block.classList.remove("List-disabled");
        control_laptops_title.textContent = "Edit laptops Based On Id";
        edit_laptops_block.classList.remove("List-disabled");
        remove_laptops_block.classList.add("List-disabled");
        add_laptops_block.classList.add("List-disabled");

}

for(let i=0; i<add_laptops_buttons.length; i++) {
    add_laptops_buttons[i].addEventListener("click", ToggleAddlaptopInterface );
}
for(let i=0; i<remove_users_buttons.length; i++) {
    remove_laptops_buttons[i].addEventListener("click", ToggleRemovelaptopInterface );
}
for(let i=0; i<edit_users_buttons.length; i++) {
    edit_laptops_buttons[i].addEventListener("click", ToggleEditlaptopInterface );
}

// end of manipulating sections


// Start of button functions

// Adding elements to the DB

const AddUserToDatabase = () => {
    let first_name = document.getElementById('Add_user_First_name').value;
    let last_name = document.getElementById('Add_user_Last_name').value;
    let email = document.getElementById('Add_user_Email').value;
    let password = document.getElementById('Add_user_Password').value;
    let phone = document.getElementById('Add_user_Phone').value;
    let address = document.getElementById('Add_user_Address').value;

    let data = new FormData();
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', email);
    data.append('password', password);
    data.append('phone', phone);
    data.append('address', address);

    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/adduser.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("User Added!")
            window.location.href = 'admin.html';
        }
    }).catch((err) => {
        console.error(err)
    });
}

const AddPhoneToDatabase = () => {
    let brand = document.getElementById('Add_phone_brand').value;
    let model = document.getElementById('Add_phone_model').value;
    let price = document.getElementById('Add_phone_price').value;
    let amount = document.getElementById('Add_phone_amount').value;
    let memory = document.getElementById('Add_phone_memory').value;
    let imgurl = document.getElementById('Add_phone_imgurl').value;

    if(brand == "dell"){
        brand = 1;
    }else if(brand == "asus"){
        brand = 2;
    }else if(brand == "hp"){
        brand = 3;
    }else if(brand == "apple"){
        brand = 4;
    }else if(brand == "honor"){
        brand = 5;
    }else if(brand == "samsung"){
        brand = 6;
    }

    let data = new FormData();
    data.append('brand', brand);
    data.append('model', model);
    data.append('price', price);
    data.append('amount', amount);
    data.append('memory', memory);
    data.append('imgurl', imgurl);

    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/addphone.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("Phone Added!")
            window.location.href = 'admin.html';
        }
    }).catch((err) => {
        console.error(err)
    });
}


const AddlaptopToDatabase = () => {
    let brand = document.getElementById('Add_laptop_brand').value;
    let model = document.getElementById('Add_laptop_model').value;
    let price = document.getElementById('Add_laptop_price').value;
    let amount = document.getElementById('Add_laptop_amount').value;
    let vga = document.getElementById('Add_laptop_vga').value;
    let processor_type = document.getElementById('Add_laptop_processor_type').value;
    let processor = document.getElementById('Add_laptop_processor').value;
    let ram = document.getElementById('Add_laptop_ram').value;
    let imgurl = document.getElementById('Add_laptop_imgurl').value;

    if(brand == "dell"){
        brand = 1;
    }else if(brand == "asus"){
        brand = 2;
    }else if(brand == "hp"){
        brand = 3;
    }else if(brand == "apple"){
        brand = 4;
    }else if(brand == "honor"){
        brand = 5;
    }else if(brand == "samsung"){
        brand = 6;
    }

    let data = new FormData();
    data.append('brand', brand);
    data.append('model', model);
    data.append('price', price);
    data.append('amount', amount);
    data.append('vga', vga);
    data.append('processor_type', processor_type);
    data.append('processor', processor);
    data.append('ram', ram);
    data.append('imgurl', imgurl);

    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/addlaptop.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("Laptop Added!")
            window.location.href = 'admin.html';
        }
    }).catch((err) => {
        console.error(err)
    });
}


// Removing elements from the DB

const RemoveUserInDatabaseBasedOnID = () => {
    let user_id = document.getElementById('Remove_User_id').value;

    let data = new FormData();
    data.append('user_id', user_id);

    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/removeuser.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("User Removed!")
            window.location.href = 'admin.html';
        }
    }).catch((err) => {
        console.error(err)
    });
}

const RemovePhoneInDatabaseBasedOnID = () => {
    let phone_id = document.getElementById('Remove_phone_id').value;

    let data = new FormData();
    data.append('phone_id', phone_id);

    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/removephone.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("Phone Removed!")
            window.location.href = 'admin.html';
        }
    }).catch((err) => {
        console.error(err)
    });
}

const RemovelaptopInDatabaseBasedOnID = () => {
    let laptop_id = document.getElementById('Remove_laptop_id').value;

    let data = new FormData();
    data.append('laptop_id', laptop_id);

    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/removelaptop.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("Laptop Removed!")
            window.location.href = 'admin.html';
        }
    }).catch((err) => {
        console.error(err)
    });
}

// Editing elements in the DB

const EditUserInDatabaseBasedOnEmail = () => {
    let first_name = document.getElementById('Edit_user_First_name').value;
    let last_name = document.getElementById('Edit_user_Last_name').value;
    let email = document.getElementById('Edit_user_Email').value;
    let password = document.getElementById('Edit_user_Password').value;
    let phone = document.getElementById('Edit_user_Phone').value;
    let address = document.getElementById('Edit_user_Address').value;

    let data = new FormData();
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', email);
    data.append('password', password);
    data.append('phone', phone);
    data.append('address', address);

    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/edituser.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("User Edited!")
            window.location.href = 'admin.html';
        }
    }).catch((err) => {
        console.error(err)
    });
}


const EditPhoneInDatabaseBasedOnID = () => {
    let phone_id = document.getElementById('Edit_phone_id').value;
    let brand = document.getElementById('Edit_phone_brand').value;
    let model = document.getElementById('Edit_phone_model').value;
    let price = document.getElementById('Edit_phone_price').value;
    let amount = document.getElementById('Edit_phone_amount').value;
    let memory = document.getElementById('Edit_phone_memory').value;
    let imgurl = document.getElementById('Edit_phone_imgurl').value;

    if(brand == "dell"){
        brand = 1;
    }else if(brand == "asus"){
        brand = 2;
    }else if(brand == "hp"){
        brand = 3;
    }else if(brand == "apple"){
        brand = 4;
    }else if(brand == "honor"){
        brand = 5;
    }else if(brand == "samsung"){
        brand = 6;
    }

    let data = new FormData();
    data.append('phone_id', phone_id);
    data.append('brand', brand);
    data.append('model', model);
    data.append('price', price);
    data.append('amount', amount);
    data.append('memory', memory);
    data.append('imgurl', imgurl);

    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/editphone.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("Phone Edited!")
            window.location.href = 'admin.html';
        }
    }).catch((err) => {
        console.error(err)
    });
}