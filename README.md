todo

- handle STOP
- add semantic-release
- make `require('surveillance/sinks/keen')` work
- format events correctly for GA
- maybe switch up surveillance.pipeline.build api (see readme)

# Surveillance.js

> Monitor the shit out of your hapless users

Surveillance.js is a small and extensible library for event pipelines in the browser.

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
