const fork = (...fns) => data => Promise.all(fns.map(f => f(data)))

export default fork
