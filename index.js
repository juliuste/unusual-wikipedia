'use strict'

const wiki = require('wikijs').default
const parser = require('cheerio')
const unionBy = require('lodash.unionby')

// todo: categories

const fetchHTML = () => wiki().page('Wikipedia:Unusual_articles').then((res) => res.html())

const extractList = (table) => {
    const list = []
    table = parser.load(table)
    const rows = Array.from(table('tr'))
    for(let row of rows){
        row = parser.load(row)
        const cells = Array.from(row('td')).map(parser.load)
        const link = cells[0]('b>a').first()
        const url = link.attr('href')
        if(url && cells.length === 2){
            const title = link.text().trim()
            const description = cells[1]('td').text().trim()
            list.push({url: 'https://en.wikipedia.org'+url, title, description})
        }
    }
    return list
}

const extractLists = (html) => {
    const $ = parser.load(html)
    const tables = Array.from($('.wikitable'))
    const lists = tables.map(extractList)
    return unionBy(...lists, (x) => x.url)
}

const unusual = () =>
    fetchHTML()
    .then(extractLists)

module.exports = unusual
