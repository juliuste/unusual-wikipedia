'use strict'

const tape = require('tape')
const unusual = require('./index')

tape('unusual-wikipedia', async (t) => {
	const articles = await unusual()
	t.ok(articles.length > 500, 'length')
	const birTawil = articles.find((x) => x.title === 'Bir Tawil')
	t.ok(birTawil.title.length, 'article title')
	t.ok(birTawil.url === 'https://en.wikipedia.org/wiki/Bir_Tawil', 'article description')
	t.ok(birTawil.description.length > 10, 'article description')
	t.end()
})
