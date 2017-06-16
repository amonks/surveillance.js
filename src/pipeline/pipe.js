const pipe = (...fns) => {
  const composedFns = fns.reverse().reduce((fn, prev) => v => fn(prev(v)))
  return data => composedFns(data)
}

export default pipe
