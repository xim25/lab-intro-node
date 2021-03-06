class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.length-1]
    }
  }
  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }
  average() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    } else {
       var suma = this.sum()
       return suma /this.items.length
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0
    } else {
      var suma = this.items.reduce(function(valorAnterior, valorActual){
        return valorAnterior + valorActual;
      });

      return suma 
      
    }
  }
};

module.exports = SortedList;
