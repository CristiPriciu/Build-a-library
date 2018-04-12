class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(isCheckedOut) {
    return this._isCheckedOut;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  } 
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return ratingsSum / lengthOfArray;
  } 
 addRating(newRating) {
   this.ratings.push(newRating);
 }
}
 class Book extends Media {
    constructor(author,title,pages) {
    super(title);
    this._author = author;
    this._pages = 0;  
  }
   get author() {
    return this._author;
  }    
   get pages() {
    return this._pages;
  }
 }
class Movie extends Media {
  constructor(director,title,runTime) {
    super(title);
    this._director = director;
    this._runTime = 0;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log('Is A Short History of Nearly Everything checked out? ' + historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log('Average rating for the book A Short History of Nearly Everything: ' + historyOfEverything.getAverageRating());
const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log('Is Speed checked out? ' + speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log('Average rating for the movie Speed: ' + speed.getAverageRating());