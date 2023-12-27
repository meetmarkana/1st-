let books = [
    {title:"The Blue Umbrella",
     author:"Ruskin Bond",
     year:1974
     },

     {title:"Wings Of Fire",
     author:"A.P.J. Abdul Kalam",
     year:1999
     },

     {title:"God Of Small Things",
     author:"Roy Arundhati",
     year:2000
     },

     {title:"Train To Pakistan",
     author:"Singh Khushwant",
     year:1956
     },

     {title:"Harry Potter and the Philosopher's Stone",
     author:"J.K. Rowling",
     year:1997
     },
]
let library = []
function book(){
    for(i in books){
        if(books[i].year < 2000){
          library.push(books[i].title )
        }
    }
   console.log(library) 
}

book()
