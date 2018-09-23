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
   let sortingElements = this.elements.filter((el, i) => indices.includes(i));
   let notSortingElements = this.elements.filter((el, i) => !indices.includes(i));
   this.elements = [...sortingElements.sort(this.comparator), ...notSortingElements];
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
