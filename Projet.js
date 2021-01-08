

jQuery(document).ready(function () {
    $.ajax({
        url:"https://newsapi.org/v2/everything?q=bitcoin&apiKey=038248c19a7f4e5a8982fb95b9e155f7",
        method: "GET",
        dataType : "json",
        success: function (data) {
            console.log(data);
            for(i=0; i < data.articles.length; i++){
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img> <p>Titre de l'article :</p>  </br> <br> "+ data.articles[i].title +" </br> <br> <p>Description de l'article :</p> <h2>" + data.articles[i].description + "</h2><a href="+ data.articles[i].url +"<button type=\"button\" onclick>Lire l'article</button></div>");
            }
        },
        error: function(error, message){
            alert("Echec");
        }
        
    });

});



if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/service_worker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }



