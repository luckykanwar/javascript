window.onload = function(){

  function get(url){
    return new Promise(function(resolve, reject){
      var http = new XMLHttpRequest();
      http.open("GET",url,true);
      http.onload = function(){
        if(http.status == 200){
          resolve(JSON.parse(http.response));
        }else{
          reject(http.statusText);
        }
      };
      http.onerror = function(){
        reject(http.statusText)
      };
      http.send();
    });
  };
  // jquery method of working with promises. The get function returns a promise which can be used with the then function on the
  // promises object.
  var tweets = get("tweets.json").then(function(tweets){
    console.log(tweets);
    return (get("friends.json"));
  }).then(function(friends){
    console.log(friends);
    return (get("videos.json"));
  }).then(function(videos){
    console.log(videos);
  }).catch(function(error){
    console.log(error);
  })

/*
  $.get("tweets.json").then(function(tweets){
    console.log(tweets);
    return($.get("friends.json"))
  }).then(function(friends){
    console.log(friends);
    return ($.get("videos.json"));
  }).then(function(videos){
    console.log(videos);
  });
*/
  console.log("Test this promises");
};
