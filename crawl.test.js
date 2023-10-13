const { test, expect } = require('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require('./crawl.js')

const url1 = "https://blog.boot.dev/path/"
const url2 = "https://blog.boot.dev/path"
const url3 = "http://blog.boot.dev/path/"
const url4 = "http://blog.boot.dev/path"
const expectedUrl = "blog.boot.dev/path"

test(`Normalizing ${url1}`, () => {
    expect(normalizeURL(url1)).toBe(expectedUrl);
})

test(`Normalizing ${url2}`, () => {
    expect(normalizeURL(url2)).toBe(expectedUrl);
})

test(`Normalizing ${url3}`, () => {
    expect(normalizeURL(url3)).toBe(expectedUrl);
})

test(`Normalizing ${url4}`, () => {
    expect(normalizeURL(url4)).toBe(expectedUrl);
})
