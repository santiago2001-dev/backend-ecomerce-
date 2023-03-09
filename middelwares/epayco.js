var epayco = require('epayco-sdk-node')({
    apiKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    lang: 'ES',
    test: false
})

module.exports = {
    epayco
}