const currentRead={
    title:"Originals",
    author:"Adam Grant",
    pages:241
}

function bookSummary(){
      console.log(`I just finished reading a ${this.pages} book titled ${this.title} titled ${this.title}`)
}
// calling the booksummarry function without the apply/call will result in undefined.

bookSummary.call(currentRead);
bookSummary.apply(currentRead);