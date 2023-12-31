const { JSDOM } = require('jsdom')

const webPage = `<html><body><a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a><a href="http://www.google.com"><span>Go to Google</span></body></html>'

<!DOCTYPE html>
<html lang="en-us">

<head>
	<meta name="generator" content="Hugo 0.110.0">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>
    Lane&#39;s Blog
  </title>

  <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
  <link rel="manifest" href="/favicons/site.webmanifest">
  <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">

  
  <link href="/css/tail-out.min.css" rel="stylesheet">

  
  <link href="/css/style.min.css" rel="stylesheet">

  <meta property="og:title" content="Lane&#39;s Blog" />
<meta property="og:description" content="I write about code, business, philosophy, or whatever else is interesting to me" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://wagslane.dev/" />

  <meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Lane&#39;s Blog"/>
<meta name="twitter:description" content="I write about code, business, philosophy, or whatever else is interesting to me"/>

  <meta itemprop="name" content="Lane&#39;s Blog">
<meta itemprop="description" content="I write about code, business, philosophy, or whatever else is interesting to me">
</head>

<body class="bg-gray-100 text-gray-800">
  <nav class="z-50 text-gray-800 p-2">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 top-nav-bar-height">
    <div class="relative flex items-center justify-between h-full">

      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" onclick="clickMobileMenuToggle()"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="h-10"></div>

      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-evenly">
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4 h-full items-center">
            <a href="/" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Articles
            </a>

            <a href="/tags/" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Tags
            </a>

            <a href="/about/" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              About
            </a>

            <a href="/index.xml" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              RSS
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu" style="display:none">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
        Articles
      </a>

      <a href="/tags/" class="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        Tags
      </a>

      <a href="/about/" class="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        About
      </a>

      <a href="/index.xml" class="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        RSS
      </a>
    </div>
  </div>
</nav>

<script>
  
  function clickMobileMenuToggle() {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.style.display === "none") {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none";
    }
  }
</script>

  <div class="text-center top-0 bg-gray-800 p-4 sticky z-50 text-xl">
  <a href="https://boot.dev" class="underline hover:text-gray-300 text-white">
    Learn backend development with my current project: Boot.dev
  </a>
</div>



<div class="max-w-3xl m-auto p-4">

  <h1 class="text-4xl">Lane&rsquo;s Blog</h1>

  <hr>

  

  <ul class="list-disc">
    
    
    
    <li class="ml-4">
      <span>Jan 08, 2023 -</span>
      <a class="link" href="/posts/zen-of-proverbs/">The Zen of Proverbs</a>
    </li>
    
    <li class="ml-4">
      <span>Dec 17, 2022 -</span>
      <a class="link" href="/posts/college-a-solution-in-search-of-a-problem/">College: A Solution in Search of a Problem</a>
    </li>
    
    <li class="ml-4">
      <span>Nov 05, 2022 -</span>
      <a class="link" href="/posts/guard-keyword-error-handling-golang/">Thoughts on the &ldquo;Guard&rdquo; Proposal for Go&rsquo;s Error Handling</a>
    </li>
    
    <li class="ml-4">
      <span>Aug 29, 2022 -</span>
      <a class="link" href="/posts/no-one-does-devops/">Devops: An Idea so Good, No One Admits They Don’t Do It</a>
    </li>
    
    <li class="ml-4">
      <span>Jun 27, 2022 -</span>
      <a class="link" href="/posts/developers-learn-to-say-no/">Learn to Say &lsquo;No&rsquo;</a>
    </li>
    
    <li class="ml-4">
      <span>Jun 17, 2022 -</span>
      <a class="link" href="/posts/dark-patterns/">Businesses that Use Dark Patterns Deserve to Go Under</a>
    </li>
    
    <li class="ml-4">
      <span>May 17, 2022 -</span>
      <a class="link" href="/posts/func-y-json-api/">Func-y JSON, an alternative to REST</a>
    </li>
    
    <li class="ml-4">
      <span>May 09, 2022 -</span>
      <a class="link" href="/posts/seo-is-a-scam-job/">SEO is One Giant Scam of a Job</a>
    </li>
    
    <li class="ml-4">
      <span>May 01, 2022 -</span>
      <a class="link" href="/posts/things-i-dont-want-to-do-to-grow-business/">Things I don&rsquo;t want to do to grow my side project</a>
    </li>
    
    <li class="ml-4">
      <span>Mar 05, 2022 -</span>
      <a class="link" href="/posts/what-a-crazy-religion/">The Craziest Thing to Hear After Leaving Mormonism</a>
    </li>
    
    <li class="ml-4">
      <span>Sep 13, 2021 -</span>
      <a class="link" href="/posts/collapsing-quality-of-devto/">The Collapsing Quality of Dev.to</a>
    </li>
    
    <li class="ml-4">
      <span>Jun 30, 2021 -</span>
      <a class="link" href="/posts/keep-your-data-raw-at-rest/">Keep Your Data Raw at Rest</a>
    </li>
    
    <li class="ml-4">
      <span>Apr 12, 2021 -</span>
      <a class="link" href="/posts/continuous-deployments-arent-continuous-disruptions/">Continuous Deployments != Continuous Disruptions</a>
    </li>
    
    <li class="ml-4">
      <span>Jan 05, 2021 -</span>
      <a class="link" href="/posts/kanban-vs-scrum/">Kanban vs Scrum – Why Kanban is More Agile</a>
    </li>
    
    <li class="ml-4">
      <span>Sep 15, 2020 -</span>
      <a class="link" href="/posts/gos-major-version-handling/">Go’s Major Versioning Sucks – From a Fanboy</a>
    </li>
    
    <li class="ml-4">
      <span>Aug 15, 2020 -</span>
      <a class="link" href="/posts/optimize-for-simplicit-first/">Optimize For Simplicity First</a>
    </li>
    
    <li class="ml-4">
      <span>Aug 07, 2020 -</span>
      <a class="link" href="/posts/go-struct-ordering/">Saving a Third of Our Memory by Re-ordering Go Struct Fields</a>
    </li>
    
    <li class="ml-4">
      <span>Jul 14, 2020 -</span>
      <a class="link" href="/posts/managers-that-cant-code/">Your Manager Can’t Code? They Shouldn’t Be Your Manager</a>
    </li>
    
    <li class="ml-4">
      <span>May 18, 2020 -</span>
      <a class="link" href="/posts/leave-scrum-to-rugby/">Leave Scrum to Rugby, I Like Getting Stuff Done</a>
    </li>
    
    <li class="ml-4">
      <span>Aug 25, 2019 -</span>
      <a class="link" href="/posts/a-case-against-a-case-for-the-book-of-mormon/">A Case Against &ldquo;A Case for the Book of Mormon&rdquo;</a>
    </li>
    
  </ul>
</div>

<footer class="p-4">
  <hr />
  <div class="text-center">
    <span>&copy; Lane Wagner</span>
    <a class="link" href="https://github.com/wagslane">Github</a>
    <a class="link" href="https://twitter.com/wagslane">Twitter</a>
  </div>
</footer>
</body>

</html>
`

function normalizeURL(url){
    const urlObj = new URL(url);
    let normalizedURL = urlObj.hostname + urlObj.pathname
    if (normalizedURL.endsWith('/')){
        normalizedURL = normalizedURL.slice(0,-1)
    }
    return normalizedURL;
}

async function getURLsFromHTML(htmlBody, baseUrl){
    const dom = new JSDOM(htmlBody)
    const listUrls = dom.window._document.querySelectorAll('a')
    const extractedUrls = []
    const string = ""

    string.startsWith()
    for (let listedUrl of listUrls){
        if (listedUrl.href.startsWith('/')){
            extractedUrls.push(baseUrl + listedUrl.href)
        } else {
            extractedUrls.push(listedUrl.href)
        }
    }
    for (let extractedURL of extractedUrls){
        console.log(extractedURL)
    }
    return extractedUrls
}

async function crawlPage(baseUrl, currentUrl, pages){   
    //1. Make sure the currentURL is on the same domain as the baseURL. If it's not, just return the current pages. We don't want to crawl the entire internet, just the domain in question.
    const currentUrlObj = new URL(currentUrl)
    const baseUrlObj = new URL(baseUrl)
    if (currentUrlObj.hostname != baseUrlObj.hostname){
        console.log("url's hostname doesn't match baseUrl")
        console.log(`url: ${currentUrlObj}`)
        console.log(`url's hostname: ${currentUrlObj.hostname}`)
        console.log(`baseUrl: ${baseUrlObj.hostname}`)
        return pages
    }
    
    //2. Get a normalized version of the currentURL.
    const normalizedCurrentUrl = normalizeURL(currentUrl)

    //3. If the pages object already has an entry for the normalized version of the current URL, just increment the count and return the current pages.
    if (pages[normalizedCurrentUrl]){
        pages[normalizedCurrentUrl]++
        return pages
    } else {
    //4. Otherwise, add an entry to the pages object for the normalized version of the current URL, and set the count to 1 as long as the current url isn't the base url (the first page we're crawling). Set it to 0 if it is the base url.        
        if (normalizedCurrentUrl == baseUrlObj.hostname){
            pages[normalizedCurrentUrl] = 0
        } else {
            pages[normalizedCurrentUrl] = 1
        }            
    }

    //5. If we've gotten here, we haven't yet made a request to the current URL, so let's do that, and maybe add a console.log so you can watch your crawler go in real-time.
    try{
        const response = await fetch(currentUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {  
                'Content-Type': 'text/html'
            }
        })

        if (!response.headers.get('Content-Type').includes('text/html')){
            console.log("Error occured while trying to convert and display HTML text from stream")
            console.log(`The content-type is not HTML but rather ${response.headers.get('Content-Type')}`)
            return pages
        }

        try{
            const html = await response.text()
            console.log(html)
    //6. Assuming all went well with the fetch request, get all the URLs from the response body HTML
            const extractedURLs = await getURLsFromHTML(html, baseUrl)

    //7. Recursively crawl each URL you found on the page and update the pages to keep an aggregate count
            for (let eachUrl of extractedURLs){
                const normalizeEachUrl = normalizeURL(eachUrl)
                if (normalizeEachUrl != baseUrlObj.hostname){
                    pages = await crawlPage(baseUrl, eachUrl, pages)
                }
            }

    //8. Finally, return the updated pages object
            return pages
        } catch (err) {   
            console.log("Error occured while trying to convert and display HTML text from stream")
            console.log(err)
        }
    } catch (err) {
        console.log("Error occured while trying to fetch baseURL")
        console.log(err)
    }

    
}

module.exports = {
    normalizeURL, getURLsFromHTML, crawlPage
}

