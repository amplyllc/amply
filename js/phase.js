function logIn() {
    let x = document.getElementById("password").value;
    let form = document.getElementById("login-form");
    let div = document.getElementById('incorrect')

    if (x != "123") {
        div.className = "show";
        console.log('incorrect');
        return false
    } else {
        form.className = "hide";
        console.log('correct')
        return true
    }
}