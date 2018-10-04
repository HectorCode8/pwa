//Service Worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('SW cargado correctamente', reg))
        .catch(err => console.warn('Registro del sw incorrecto', err))
    }else{
    console.log("No se puede");
}

//Scroll suavizado  
$(document).ready(function(){
    $("#menu a ").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});


