// Here is an example of calback hell, which means there are callbacks after callbacks
window.onload = function(){
  //console.log("callback here we come")
  // Much simplified version and removing callback hell
  function tweets(data){
    console.log(data);
    return($.get("friends.json",friends));
  };

  function friends(data){
    console.log(data)
    return($.get("videos.json",videos));
  };

  function videos(data){
    console.log(data)
  };

  $.get("tweets.json", tweets);

// Callback hell
/*
  $.get("tweets.json", function(data){
    console.log(data);
    return ($.get("friends.json", function(data){
                console.log(data);
                return ($.get("videos.json", function(data){
                  console.log(data)
                }));
    }));
  });
*/
  console.log("Test this");
};
