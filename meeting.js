// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

function meeting(s) {
    let news = s.split(';')
    // console.log(news)
    let arr = []
    for(i=0; i<=news.length-1; i++){
        // console.log(news[i])
        for(j=0; j<=news[i].length-1; j++){
            // console.log(news[i][j])
            if(news[i][j] == ':'){
                // console.log(news[i].indexOf(news[i][j]))
                // console.log(news[i].slice(0, news[i].indexOf(news[i][j])))
                // console.log(news[i].indexOf(news[i][j])+1)
                // console.log(news[i].length)
                // console.log(news[i].slice(news[i].indexOf(news[i][j])+1, news[i].length))
                // arr.push(news[i].slice(0, news[i].indexOf(news[i][j])).toUpperCase()+':'+news[i].slice(news[i].indexOf(news[i][j])+1, news[i].length).toUpperCase())

                arr.push(news[i].slice(news[i].indexOf(news[i][j])+1, news[i].length).toUpperCase() + ', ' + news[i].slice(0, news[i].indexOf(news[i][j])).toUpperCase())
            }
        }
        // console.log('========')
    }
    // console.log(arr)
    arr.sort()
    
    let arrstr = []
    for(i=0; i<=arr.length-1; i++){
        // console.log(`(${arr[i]})`)
        arrstr.push(`(${arr[i]})`)
    }
    console.log(arrstr.join(''))
}
meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")
console.log('========')
meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn")
console.log('========')
meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern")