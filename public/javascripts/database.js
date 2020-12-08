function select(id) {
    var testApi = "http://localhost:8080/api/test/" + id;
    // window.location.href("../../views/confirmed.ejs")
    location.href = "api/confirmed/:id";
    console.log(testApi);
    $.get(testApi, function(datafinal) {
        console.log(datafinal);
        console.log(datafinal.length);
    });
}