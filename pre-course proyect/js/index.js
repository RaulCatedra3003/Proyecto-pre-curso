//This functions looks for a valid name, if the user don´t instert name, a message error apears, else save the name for later use in localstorage and go to the next page.
function validation(){
    var unickName = document.startForm.nickname;
    var letters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var errorMesajeIndex = [];
    var errors = document.getElementById('error');

    if (unickName.value.match(letters)){
        var usersNames = [];
        var actualUser = unickName.value;
        if (localStorage.getItem("usersNames") === null) {
            usersNames.push(actualUser);
            localStorage.setItem("usersNames", JSON.stringify(usersNames));
            setTimeout("location.href='pages/quiz.html'", 0);
        } else {
            let beforeUsersNames = JSON.parse(localStorage.getItem("usersNames"));
            const searchLastName = beforeUsersNames.filter(nombre => nombre === actualUser);
            if (searchLastName == actualUser) {
                errorMesajeIndex.push('Nick en uso, escoja otro');
            } else {
                beforeUsersNames.push(actualUser);
                localStorage.setItem("usersNames", JSON.stringify(beforeUsersNames));
                setTimeout("location.href='pages/quiz.html'", 0);
            }
        }
    } else {
        errorMesajeIndex.push('Es necesario un nombre');
    }
    errors.innerHTML = errorMesajeIndex.join(', ');
    return false;
}