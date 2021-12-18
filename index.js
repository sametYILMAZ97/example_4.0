document.querySelector("#button1").addEventListener("click", getApi);

//github api'den veri
function getApi(){
    fetch("https://api.github.com/users").then(response => response.json()).then(users => {

        let output = "<ul>";

        users.forEach(function(user){

            output += `<li>Kullanıcı Adı: ${user.login}</li>`;

        });

        document.getElementById("output").innerHTML += output;

    });


}