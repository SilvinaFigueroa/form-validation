
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
    let unique = 0;
    
    console.log(/n?/g.exec(name.target.value));

    for (const i of name.target.value) {
        let nameChar = name.target.value.split(i).length - 1;
        // console.log(`nameChar ${nameChar}`)
        if (nameChar === 1)
            unique++;
    }
    console.log(`unique ${unique}`)
    if (unique >= 2) {
        console.log(`Unique letters ${unique}`)
        return true;
    }
    else {
        username.focus();
        alert(
            "The username must contain at least two unique characters."
        );
        return false;
    }
}

