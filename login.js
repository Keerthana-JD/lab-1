function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("message").innerHTML = "Login Successful!";
        document.getElementById("message").style.color = "green";
        return false;
    } else {
        document.getElementById("message").innerHTML = "Invalid Credentials!";
        document.getElementById("message").style.color = "red";
        return false;
    }
}
