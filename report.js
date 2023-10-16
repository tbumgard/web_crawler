//Let's add a printReport(pages) function to a new file called report.js. 
//The purpose of this function is to convert the pages object into something that looks good and can be logged to the console.
//1. Print that the report is starting
//2. Sort the pages so that pages with the largest number of inbound internal links are first
//3. Print each page in a nice, formatted way. Something like: Found ${count} internal links to ${url}

function printReport(pages){
    console.log("Printing Report:")
    
    const entries = Object.entries(pages)
    entries.sort((x, y) => x[1] - y[1])  
    for (let entry of entries){
        console.log(`Found ${entry[1]} internal links to ${entry[0]}`)
    }
   
    //console.log(``)

}

module.exports = {
    printReport
}