### sample

({rate: number}) => (Object -> Object) | (Object -> Stop)

Sample takes a rate between 0 and 1, generates a random number between 0 and 1, and only continues the pipeline if the number is below the rate.
