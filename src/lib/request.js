const checkNotOk = res => res.ok
    ? res.json()
    : Promise.reject()

const request = (url, opts) => fetch(url, opts)
    .then(checkNotOk)

export default request
