import {  Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
// import { TimeAgoPipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote:Quote;

  @Output() isComplete= new EventEmitter<boolean>();
 

  quotes = [
      // new Quote(0,'','','',new Date()),
      new Quote(1,'The Way Get Started Is To Quit Talking And Begin Doing.','Walt Disney','Marcus-Jean-Louis',new Date(2019,2,20)),
      new Quote(2,'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.','Albert Einstein','Marcus-Jean-Louis',new Date(2018,9,18)),
      new Quote(3,'Don’t Let Yesterday Take Up Too Much Of Today.','Will Rogers','Marcus-Jean-Louis',new Date(2019,7,7)),
    
]

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote} ?`)
    if(toDelete) {
      this.quotes.splice(index,1);
    }  
  }
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

upvotes = 0;
downvotes = 0;
timePass = 0;

tPassed(){
  this.timePass = 0;

}

upVote(i){
  this.quotes[i].upvotes +=1;
}

downVote(i){
  this.quotes[i].downvotes +=1;
}

startNum:number
lastNum:number
ctr:number

hUpvote(){

  this.startNum = 0
  this.lastNum = 0

   for(this.ctr=0 ; this.ctr < this.quotes.length; this.ctr++) {
    this.lastNum = this.quotes[this.ctr].upvotes;
    if(this.lastNum > this.startNum){
      this.startNum = this.lastNum
    }
  }
      
  return  this.startNum
}

  constructor() { }

  ngOnInit() {
  }

}