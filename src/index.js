class Sorter {
  constructor() {
    this.elements = [];
    this.sortedElements = [];
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    try {
      return this.elements[index];
    } catch (err) {
      console.log(err);
    }
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements.slice();
  }

  sort(indices) {
   let sortedElements = this.elements.filter((el, i) =>
     indices.includes(i))
     .sort(this.comparator); 
   let count = 0; 
   this.elements = this.elements.map((el, i) => {
     if (indices.includes(i)) {
       return sortedElements[count++];
     }
     return el;
   });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
