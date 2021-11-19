function logIn() {
    let x = document.getElementById("password").value;
    let div = document.querySelector('#incorrect')

    if (x === "123") {
        window.location.replace("https://amply.llc/portal");
        console.log('correct')
    } else {
        div.className = "show";
        console.log('incorrect');
        return false
    }
}