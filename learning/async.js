// Working with async javascript
window.onload = function(){
  /* This part uses the standard vanilla javascript method  */

  var http = new XMLHttpRequest();

  http.onreadystatechange =  function(){
    if(http.readyState == 4){
        console.log(JSON.parse(http.response));
    }
  };

  http.open("GET","tweets.json",true);
  http.send(); // This is the part from where the execution becomes asynchronous. HTTP request is sent to the
  // an external thread and js execution thread continues onto printing the next console.log
  //console.log(http);
  console.log("Test this");


  // Using jquery method for creating async javascript requests

  // The function below is a callback function which means it is called after the get function fetches the data from the file. In the
  // meanwhile, the function just sits there waiting
  $.get("tweets.json", function(data){
    console.log(data);
  });

  console.log("Test this with jquery");
};
