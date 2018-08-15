class MultiplicatorUnitFailure extends Error {
	putItOutThere(){
    	console.log("This was a shameful error");
    }
}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while(true){
    try{
    return (primitiveMultiply(a,b));
  	}catch(e){
    	if(e instanceof MultiplicatorUnitFailure){
    		e.putItOutThere();
    }
    else{
      throw(e)
    	}
  	}
  }
}

console.log(reliableMultiply(8, 8));
// → 64