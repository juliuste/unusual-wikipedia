# unusual-wikipedia

List of [unusual Wikipedia articles](https://en.wikipedia.org/wiki/Wikipedia:Unusual_articles).

[![npm version](https://img.shields.io/npm/v/unusual-wikipedia.svg)](https://www.npmjs.com/package/unusual-wikipedia)
[![Build Status](https://travis-ci.org/juliuste/unusual-wikipedia.svg?branch=master)](https://travis-ci.org/juliuste/unusual-wikipedia)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/unusual-wikipedia.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/unusual-wikipedia.svg)](https://david-dm.org/juliuste/unusual-wikipedia)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/unusual-wikipedia.svg)](https://david-dm.org/juliuste/unusual-wikipedia#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/unusual-wikipedia.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```bash
npm install --save unusual-wikipedia
```

## Usage

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) that will resolve in a list of objects that looks as follows:

```js
[
    {
        "url": "https://en.wikipedia.org/wiki/Breast-shaped_hill",
        "title": "Breast-shaped hill",
        "description": "Laid bare in many places around the world. May have given their name to Manchester."
    },
    {
        "url": "https://en.wikipedia.org/wiki/Folly",
        "title": "Folly",
        "description": "Buildings prized for their uselessness."
    },
    {
        "url": "https://en.wikipedia.org/wiki/Gravity_hill",
        "title": "Gravity hill",
        "description": "A hill that gives the illusion of objects rolling up it."
    },
    {
        "url": "https://en.wikipedia.org/wiki/List_of_Eiffel_Tower_replicas",
        "title": "List of Eiffel Tower replicas",
        "description": "Not as unique as you might have thought."
    },
    {
        "url": "https://en.wikipedia.org/wiki/List_of_fictional_island_nations",
        "title": "List of fictional island nations",
        "description": "These islands have not been mistaken for submarines."
    },
    {
        "url": "https://en.wikipedia.org/wiki/List_of_tautological_place_names",
        "title": "List of tautological place names",
        "description": "Place names that contain truisms and say what they are."
    }
    // …
]
```

Please note that entries with more than 2 columns like "List of unexplained sounds" and entries containung multiple articles like "Covered smut / False loose smut / Loose smut" are **not** included.

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/unusual-wikipedia/issues).
