var epayco = require('epayco-sdk-node')({
    apiKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    lang: 'ES',
    test: true
})

module.exports = {
    epayco
}