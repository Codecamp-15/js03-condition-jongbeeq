let username = prompt()


if(username.trim() === '') {
    alert("username is required");
} else {
    let password = prompt()
    if(password.trim() === '') {
        alert("password is required");
    } else {
        if((username === "admin" && password === "1234"
        ) || username === "john" && password === "qwerty") {
            alert("Hello" + username);
        } else {
            alert("invalid username or password")
        }
    } 
}




