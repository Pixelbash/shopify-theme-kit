export default class Vectors {

  //Add vectors
  add(p1,p2) {
    return {
      x:p1.x + p2.x,
      y:p1.y + p2.y
    };
  }

  //Multiply vector
  multiply(p1,val) {
    return {
      x: p1.x * val,
      y: p1.y * val
    };
  }

  //Normalizes the vector to values between -1 and 1
  normalise(p1, newLength) {
    var l = this.length(p1);
    
    return {
      x: (p1.x / l) * newLength,
      y: (p1.y / l) * newLength
    };
  }

  //Returns the vector between two points.
  between(p1,p2) {
    return {
      x: p1.x - p2.x,
      y: p1.y - p2.y
    };
  }

  //Get length of vector
  length(p) { 
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }
} 