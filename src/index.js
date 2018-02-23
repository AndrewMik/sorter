class Sorter {
  constructor() {
    // your implementation
    this.name = "Sorter";
    this.elements = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.elements.push(element);
  }

  at(index) {
    // your implementation
    return this.elements[index];
  }

  get length() {
    // your implementation
    return this.elements.length;
  }

  toArray() {
    // your implementation
    return this.elements;
  }

  sort(indices) {
    // your implementation
    if(indices.length <= 1) return;

    var buf, index1, index2;
    var swap = false;

    for (var i = 0; i < indices.length; i++) {
      for (var j = 0; j < indices.length-1; j++) {
        index1 = indices[j];
        index2 = indices[j+1];

        if (index1 > index2) {
          buf = index2;
          index2 = index1;
          index1 = buf;
        }
        
        if (this.comparator(this.elements[index1], this.elements[index2]) > 0) {
          buf = this.elements[index2];
          this.elements[index2] = this.elements[index1];
          this.elements[index1] = buf;

          swap = true;
        }
      }
      if (!swap && (j == indices.length - 1)) break; 
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;