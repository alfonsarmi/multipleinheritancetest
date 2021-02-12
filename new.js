class Car0 {
  constructor(brand) {    
    this.carname = brand;
  }
  present0() {
    return 'I have 1 ' + this.carname;
  }
//test
}

class Car1 extends Car0{
  constructor(brand) {    
    this.carname = brand;
  }
  present() {
    return 'I have 1 ' + this.carname;
  }
}

class Car2 {
  constructor(brand) {    
    this.carname = brand;
  }
  present() {
    return 'I have 2 ' + this.carname;
  }
}


class BaseTest extends Many(Car1, Car2) {  
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}