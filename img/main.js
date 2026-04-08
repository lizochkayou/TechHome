function checkForm(el){
   var name = el.name.value;
   var pass = el.pass.value;
   var repass = el.repass.value;

var fail= "";

if(name=="" ||pass==""||repass=="")
    fail = "Заполните все поля";
    else if(name.length<2 || name.length > 20)
    fail = "Введите корректное имя";
else if(pass!=repass)
    fail = "Пароли должны совпадать";

if (fail !=""){
    document.getElementById('error').innerHTML = fail;
}else{
    alert("всё окей");
}

}

