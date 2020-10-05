//This functions looks for a valid name, if the user don´t instert name, a message error apears, else save the name for later use and go to the next page.
function validation(){
    var unickName = document.startForm.nickname;
    var letters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var errorMesajeIndex = [];
    var errors = document.getElementById('error');
    var userName;

    if (unickName.value.match(letters)){
        userName = unickName.value;
        console.log('nombre correcto');
        setTimeout("location.href='pages/quiz.html'", 0);
    } else {
        console.log('nombre incorrecto');
        errorMesajeIndex.push('Es necesario un nombre')
    }
    
    errors.innerHTML = errorMesajeIndex.join(', ');
    console.log(userName);
    return false;

}
