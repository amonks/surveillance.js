todo

- document STOP
- add semantic-release
- document `require('surveillance/src/sinks/keen')`-style module-require
- format events correctly for GA
- add more elements!

# Surveillance.js

> Monitor the shit out of your hapless users

Surveillance.js is a small and extensible library for event pipelines in the browser.

[![Coverage Status](https://coveralls.io/repos/github/theuprising/surveillance.js/badge.svg?branch=master)](https://coveralls.io/github/theuprising/surveillance.js?branch=master)

## Example

```js
import s from 'surveillance'

// describe your pipeline
const pipeline = ['pipe'
  ['fork',
    s.annotators.addToken, s.annotators.addTimestamp],
  'merge',
  ['mergeWith', {key: 'value'}],
  ['fork',
    [s.sinks.keen, {projectId: '12345', writeKey: 'abcde'}],
    s.sinks.log(),
    [s.sinks.googleAnalytics {trackingId: 'u-12345'}]]
]

// build your pipeline
// if this compilation step takes time, events are queued
const track = s.pipeline.build(pipeline)

const event = {
  yourName: 'andrew'
}

// dispatch events on your pipeline
track(event)
```

## Facts

- you can use the umd module [dist/surveillance.min.js](https://unpkg.com/surveillance),
  - it's called window.Surveillance.
