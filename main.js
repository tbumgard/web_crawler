const { crawlPage } = require("./crawl")

async function main(){
    if (process.argv.length < 3){
        console.log("Too few arguments")
        return -1
    }
    if (process.argv.length > 3){
        console.log("Too many arguments")
        return -1
    }

    const baseUrl = process.argv[2]

    console.log(`Starting crawl of: ${baseUrl}`)
    const pages = await crawlPage(baseUrl, baseUrl, {})
    console.log(pages)

    
    
}

main()