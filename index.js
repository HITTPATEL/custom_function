function म्हारो_अरे(){                             // म्हारो_अरे=My own array
  Object.defineProperty(this,"length",{
      value:0,
      writable:true,
      enumerable:false,

  })

    this.length=arguments.length
    // console.log(arguments)

    for(let i=0; i<this.length; i++){
       this[i]=arguments[i];
    }
}
let अरे= new म्हारो_अरे("राम","सीता","लक्ष्मण","हनुमान"); // म्हारो_अरे=My own array


म्हारो_अरे.prototype.अन्दर_चलीजा=function(value){   // अन्दर_चलीजा= My own push function
    this[this.length]=value;
    this.length++

}

म्हारो_अरे.prototype.बायरे_अयजा=function(){   // बायरे_अयजा= My own pop function
    delete this[this.length-1];
    this.length--;
}

म्हारो_अरे.prototype.आखरी_दिखईदे=function(){   // आखरी_दिखईदे= My own peek/top function
  console.log(this[this.length-1])
}

म्हारो_अरे.prototype.सीधो_छापिदे=function(){   // सीधो_छापिदे= My own print function
    let झोलो="";      
  for(let i=0; i<this.length; i++){
    झोलो+=this[i]+ " ";
    
  }
  console.log(झोलो)
}

म्हारो_अरे.prototype.उल्टो_छापिदे=function(){   // उल्टो_छापिदे= My own printReverse function
    let झोलो="";      
  for(let i=this.length-1; i>=0; i--){
    झोलो+=this[i]+ " ";
    
  }
  console.log(झोलो)
}

म्हारो_अरे.prototype.लम्बाई_दिखईदे=function(){   // लम्बाई_दिखईदे= My own size function
  console.log(this.length)
}

अरे.अन्दर_चलीजा("रावण")   // अन्दर_चलीजा= My own push function
console.log(अरे)

अरे.अन्दर_चलीजा("बाली")   // अन्दर_चलीजा= My own push function
console.log(अरे)

अरे.बायरे_अयजा()      // बायरे_अयजा= My own pop function
console.log(अरे)

अरे.बायरे_अयजा()      // बायरे_अयजा= My own pop function
console.log(अरे)

अरे.आखरी_दिखईदे()         // आखरी_दिखईदे= My own peek/top function

अरे.सीधो_छापिदे()        //  सीधो_छापिदे= My own print function

अरे.उल्टो_छापिदे()        //  उल्टो_छापिदे= My own print function

अरे.लम्बाई_दिखईदे()         // लम्बाई_दिखईदे= My own size function
