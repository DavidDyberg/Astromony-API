$(function () {
    
    const API_ADRESS = "https://api.nasa.gov/planetary/apod?api_key=0jDaNafvhParBigJzA2ftAGXoxVtDFMRAP0pdcfy";

    getImageOfTheDay();

    function getImageOfTheDay() {
        fetch(API_ADRESS)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            } else {
                return response.json()
            }
        })
            
             
        .then((data) => {
            console.log(data);
            $("h2").text(data.title);
            $(".image-explanation").text(data.explanation);
            $(".date").text(data.date);
            $("h3").text("copyright:" + " " + data.copyright);
            $(".img").attr("src", data.url);
            
        })
        .catch(error => {
            $("main").append($("<div class='error'>").text("Something went wrong: " + error));
        })
    }
})