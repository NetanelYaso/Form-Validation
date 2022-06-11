function clickSubmit(){
    if(checkFirstName() && checkLastName() && checkBirthDate() && checkPhone() && checkPassword()){
        return true
    }
    return false
}

function checkFirstName(){
    var fnameRegex = /^(?=.*[A-Za-z]){,10}/g; 
    if (fnameRegex.test(fname_input.value )) {
        return true;
    }
    fname_input.innerHTML = "Enter name correctly"
    fname_input.style.color ="red"
    return false;
}

function checkLastName(){
    var lnameRegex = /^(?=.*[A-Za-z]){,10}/g;
    if ( lnameRegex = lname_input.value) {
        return true;
    }
    return false;
}

function checkBirthDate(){
    var nowDate = new Date().getFullYear();
    console.log(nowDate);
    var myYear = document.getElementById("date_input").value.substr(7,10);
    console.log(myYear);
    var result = myYear - nowDate;
    console.log(result);
    if(myYear > nowDate){
        return true;
    }
    date_input.innerHTML = "Age below 18";
    date_input.style.color = "red";
    return false;
}

function checkPhone(){
    var phoneRegex =  /[0-9]\d{10}/g
    if(phoneRegex.matching(phone_input.value)){
        return true
    }
    tel_input.innerHTML = "phone number has to be with 10 numbers"
    return false
}

function checkPassword(){
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,12}/g
    if(password1_input.value[0] == password1_input.value[0].toUpperCase()){
        if(password1_input.value[1] == password1_input.value[1].toLowerCase()){
            if(passwordRegex.text(password1_input)){
                return true
            }
        }
    }
    password1_input.innerHTML = "password not strong enough"
    password1_input.style.color = "red"
    return false
}



















// function checkPassWord(){ לא קשור תמחק אחר כך 
//     if(password.value == passwordAgain.value){
//         alert("password are correct, welcome :)");
//         return true;
//     }
//     alert("password are not the same, try again :(");
//     return false
// }