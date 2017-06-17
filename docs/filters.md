### sample

({rate: number}) => (Object -> Object) | (Object -> Stop)

Sample takes a rate between 0 and 1, generates a random number between 0 and 1, and only continues the pipeline if the number is below the rate.



### surveillance.pipeline.select

Select and possibly rename keys from an object.

two forms:

if the config argument is an array of string keys, select
will return a filtered object with only those keys.

if you want to rename the keys, pass an object that maps from
the old name to the new name.

See the tests for examples.
