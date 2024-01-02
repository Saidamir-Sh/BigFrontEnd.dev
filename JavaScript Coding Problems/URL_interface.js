// Before understanding how URL works we have to be familiar with its components

// Example URL:
// https://www.example.com:8080/path/to/page?query=value#section

// Components of URL:
// https: ---> Scheme(Protocol)
// www. ---> Subdomain
// example.com ---> Domain
// .com ---> Top Level Domain (TLD)
// www.example.com ---> host (hostname)
// :8080 ---> Port
// /path/to/page ---> Path
// ?query=value ---> query parameters
// #section ---> fragment identifier

// ┌─────────────────────────────────────────────────────────────────────────────────────────────┐
// │                                            href                                             │
// ├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
// │ protocol │  │        auth         │        host         │           path            │ hash  │
// │          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
// │          │  │                     │   hostname   │ port │ pathname │     search     │       │
// │          │  │                     │              │      │          ├─┬──────────────┤       │
// │          │  │                     │              │      │          │ │    query     │       │
// "  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
// │          │  │          │          │   hostname   │ port │          │                │       │
// │          │  │          │          ├──────────────┴──────┤          │                │       │
// │ protocol │  │ username │ password │        host         │          │                │       │
// ├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
// │   origin    │                     │       origin        │ pathname │     search     │ hash  │
// ├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
// │                                            href                                             │
// └─────────────────────────────────────────────────────────────────────────────────────────────┘

console.log('-------------------- URL Encoding and Decoding ----------------');

/*
Process of converting URL data and characters into format that will be transmitted safely over the internet.
This transformation ensurres that special characters, spaces and other reserved chars are correctly represented in url

URL encoding --> converting characters to a format that is secured to be transmitted,  (?, =, ' ', &, # ) following characters have special meaning in URL, so encoding is essential

How encoding works --> reserved characters are replaced with % following their ASCII code, prevent not allowed chars

URL decoding ---> reverse process of encoding

Importance of encoding and decoding ---> Data integrity, preventing SQL injection, XSS, Web Security

*/

console.log('-------------------- URL normalizing -------------------');
/*
Process of normalizing URL into standardized or canonical URL format. (canonical format means unique representatio of data like a primary data)

What is the purpose of normalizing URL ? 
To ensure that URLs are technically equivelant or represent same resource are represented uniformly, making it easier to manage, caching, indexing URLs. Helps to improve accuracy, efficiency of web crawlers, SEO opmitization

Common Aspects of Normalizing URL:
1. Scheme and Protocol -> should have consistent http or https. Normalized URLs to use https for secure connection
2. Hostname and Domain -> convert hostname to lowercase since all hostname are case-sensitive, remove www prefix(optional)
3. Path -> remove trailing slashes from path component, if necessary convert path to canon path to maintain consistency
4. Query Parameters -> sort query params alphabetically to maintain consistent ordering, remove duplicate params, ensure special chars are correctly used
5. Fragment identifiers -> fragment identifiers (#) are client-side and not sent to servers so standardize their usage can help avoid potential confusion
*/

console.log('-------------------- URL() -------------------');

// new URL() --> parse, constructor, normalize, encode URLs. works by providing properties that allows easily read and modify components of URL

// if browser does not support URL interface alternative is to use Window

const exampleURL =
  'https://www.example.com:8080/path/to/page?query1=value1&query2=value2#section';

const urlObject = new URL(exampleURL);

console.log(urlObject); // "https://www.example.com:8080/path/to/page?query=value#section"
console.log(urlObject.hash); // #section -> fragment identification
console.log(urlObject.host); // www.example.com:8080 -> subdomain.domain.tld:port
console.log(urlObject.hostname); // www.example.com -> subdomain.domain.tld
console.log(urlObject.href); // "https://www.example.com:8080/path/to/page?query=value#section" -> string representation
console.log(urlObject.origin); // https://www.example.com:8080 -> return string containing protocol://subdomain.domain.tld:port
console.log(urlObject.password); // empty string, because we dont have user before domain
console.log(urlObject.username); // empty string, because we dont have user before domain

console.log(urlObject.pathname); // /path/to/page
console.log(urlObject.port); // 8080 return port
console.log(urlObject.search); // ?query1=value1&query2=value2
console.log(urlObject.searchParams.get('query1')); // value1