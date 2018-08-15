// Your code here.
class Vec{
  constructor(x ,y){
    this.x = x;
    this.y = y;
  }
  
  plus(other){
    var x = this.x + other.x;
    var y = this.y + other.y;
    return(new Vec(x,y))
  }

  minus(other){
    var x = this.x - other.x;
    var y = this.y - other.y;
    return(new Vec(x,y))
  }
  
  get length(){
    return(Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2)))
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


class Group {
  // Your code here.
  constructor(x){
    this.group = x;
  }
  
  has(x){
  	if(this.group.includes(x)){
      return true;
    }
    return false;
  }
  
  add(x){
    if(!this.group.includes(x)){
      this.group.push(x);
    }
  }
  
  delete(x){
    for(var val of this.group){
      if(val === x){
        this.group = this.group.filter(val => val != x)
      }
    }
  }
  
  static from(x){
  	return (new Group(x))
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group)
group.delete(10);
console.log(group)
console.log(group.has(10));
// → false