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

// More on this topic: https://datatracker.ietf.org/doc/html/rfc3986

/**
 * This function counts how many unique normalized valid URLs were passed to the function
 *
 * Accepts a list of URLs
 *
 * Example:
 *
 * input: ['https://example.com']
 * output: 1
 *
 * Notes:
 *  - assume none of the URLs have authentication information (username, password).
 *
 * Normalized URL:
 *  - process in which a URL is modified and standardized: https://en.wikipedia.org/wiki/URL_normalization
 *
 *    For example.
 *    These 2 urls are the same:
 *    input: ["https://example.com", "https://example.com/"]
 *    output: 1
 *
 *    These 2 are not the same:
 *    input: ["https://example.com", "http://example.com"]
 *    output 2
 *
 *    These 2 are the same:
 *    input: ["https://example.com?", "https://example.com"]
 *    output: 1
 *
 *    These 2 are the same:
 *    input: ["https://example.com?a=1&b=2", "https://example.com?b=2&a=1"]
 *    output: 1
 */


// Further Improvement : 
// remove duplicate query params with the same key/value, handle cases while sorting params where value or key includes non English chars
// Check reserved chars are correctly encoded and decoded

function normalizeURL(url: string): string {
  try {
      const parsedURL = new URL(url);
      const urlQueryParams = new URLSearchParams(parsedURL.search);

      // hostname and protocol are case-sensitive, fragment identifiers are not necessary
      parsedURL.hash = "";
      parsedURL.hostname = parsedURL.hostname.toLowerCase();
      parsedURL.protocol = parsedURL.protocol.toLowerCase();

      // remove dot segments and trailing slashes from path
      parsedURL.pathname = removeDotSegments(parsedURL.pathname)
      parsedURL.pathname = parsedURL.pathname.replace(/\/+$/, "");

      // sort the query params
      urlQueryParams.sort();
      parsedURL.search = urlQueryParams.toString(); 

      // remove default ports if included
      if(
          (parsedURL.protocol === "https" && parsedURL.port === "443") ||
          (parsedURL.protocol === "http" && parsedURL.port === "80")
      ) {
          parsedURL.port = "";
      };

      // remove "www." prefix from hostname if included
      if(parsedURL.hostname.startsWith("www.")) {
          parsedURL.hostname = parsedURL.hostname.slice(4)
      };

      return parsedURL.toString();

  } catch (error) {
      throw new Error("Invalid URL")  
  }
}

function removeDotSegments(path: string): string {
  const pathNames = path.split("/");
  const output: string[] = [];

  pathNames.forEach((segment) => {
      if(segment === "..") {
          output.pop();
      } else if (segment !== ".") {
          output.push(segment);
      }
  });

  return (path.startsWith("/") ? "" : "/") + output.join("/");
}

export function countUniqueUrls(urls?: string[]): number {
  const countSet = new Set();

  if(urls) {
      for(let i = 0; i < urls.length; i++) {
          const normalizedURL = normalizeURL(urls[i]);
          countSet.add(normalizedURL);
      }
  }

  return countSet.size;
}

/**
* This function counts how many unique normalized valid URLs were passed to the function per top level domain
*
* A top level domain is a domain in the form of example.com. Assume all top level domains end in .com
* subdomain.example.com is not a top level domain.
*
* Accepts a list of URLs
*
* Example:
*
* input: ["https://example.com"]
* output: Hash["example.com" => 1]
*
* input: ["https://example.com", "https://subdomain.example.com"]
* output: Hash["example.com" => 2]
*
*/

function getTopLevelDomain(url: string): string {
  const parsedURL = new URL(normalizeURL(url));
  const domainParts = parsedURL.hostname.split('.');

  if (domainParts.length > 2) {
    return domainParts.slice(1).join('.');
  } else {
    return domainParts.join('.');
  }
}

export function countUniqueUrlsPerTopLevelDomain(urls?: string[]): Record<string, number> {
  const TLDRecord: Record<string, number> = {};

  if(urls) {
      for(const url of urls) {
          const TLDomain = getTopLevelDomain(url);
          if(TLDRecord[TLDomain]) {
              TLDRecord[TLDomain]++;
          } else {
              TLDRecord[TLDomain] = 1;
          }
      }
  }
  return TLDRecord;
}