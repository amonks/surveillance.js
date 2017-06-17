### surveillance.pipeline.build

(conf | pipeline) -> Promise(Object -> Object)

build a reactiveish pipeline from a simple data structure

a conf looks like this:

```
const conf = {
  pipeline: 'fn',
  elements: {
    fn: event => {...event, annotation: 'fact'}
  }
}
```

a pipeline can be:

- a function
  - in which case it's used as-is.

- a promise that resolves to a function

- a string
  - in which case it's treated as a reference to a function in the elements object

- an array
  - in which case it's treated as an s-expression representing a function call. That call should return a function or a promise representing a function, which is used as-is.
  - the function position (first in array) is treated as a pipeline itself -- it can be a string reference, for example.



### surveillance.pipeline.fork

(...function) -> Object -> [Object]

splits a pipeline through multiple functions





### surveillance.pipeline.merge

(...Object) -> Object

takes a bunch of objects and merges them together



### surveillance.pipeline.mergeWith

Object -> (...Object) -> Object

Merges a bunch of objects with a given object



### surveillance.pipeline.pipe

(...function) -> Object -> Object

reverse-composes a bunch of pipelines



### surveillance.pipeline.queuedBuild

conf -> Object -> Object

like build, but returns immediately and enqueues events until the pipeline is built



### surveillance.pipeline.select

Select and possibly rename keys from an object.

two forms:

if the config argument is an array of string keys, select
will return a filtered object with only those keys.

if you want to rename the keys, pass an object that maps from
the old name to the new name.

See the tests for examples.



### surveillance.pipeline.stop

String

If a pipeline function returns this value, it skips the rest of the pipeline.

If a pipeline function _is_ this value, it skips the rest of the pipeline.

Use it kinda like a Maybe monad, except without the manual overhead.
