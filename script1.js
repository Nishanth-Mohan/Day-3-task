//Question 3) Use the same rest countries and print all countries name, regions, sub-region and population.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);

    for(i=0;i<result.length;i++){
        console.log("countries name:"+result[i].name.common);
        console.log("region:"+result[i].region);
        console.log("subregion:"+result[i].subregion);
        console.log("population:"+result[i].population);
    }
}