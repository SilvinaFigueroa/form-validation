
// form valiidation

// The username cannot be blank.  - HTML "Required"
// The username must be at least four characters long. Regex
// The username must contain at least two unique characters. Regex
// The username cannot contain any special characters or whitespace. Regex


const form = document.getElementById("registration");
const username = form.elements["username"]
const email = form.elements["email"]
const password = form.elements["password"]
const passwordCheck = form.elements["passwordCheck"]
const terms = form.elements["terms"]


username.addEventListener("change", validation);
console.log(username)

function validation(event) {

    uniqueChar(event)


}


function uniqueChar(name) {
    // let unique = "";
    // let counter = 0;


    let patternUnique = /[^A-Za-z0-9]/g
    let unique = patternUnique.test(name);
    console.log(unique) 

    // for (const i in name) {
    //     let strname = name.target.value.split(i);
    //     console.log(`split value ${strname}`)
    //     counter = strname.length
    //     console.log(counter)

    //     if (counter <= 1) {
    //         unique++
    //     }
    // }
    // console.log(`unique ${unique}`)
    // if (unique < 1) {
    //     return true;
    // }
    // else {
    //     username.focus();
    //     alert(
    //         "The username must contain at least two unique characters."
    //     );
    //     return false;
    // }
}

