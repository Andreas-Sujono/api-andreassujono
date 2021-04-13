const cors_proxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '127.0.0.1';

// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;

const domain = [
    'andreassujono.xyz', 
    'andreassujono.com', 
    'andreassujono.tech', 
    'andreassujono.site', 
    'andreassujono.tk', 
    'andreassujono.ga', 
    'andreassujono.ml',
    'andreassujono.online',
    'andreassujono.link',  
    'www.andreassujono.com',
]
let whitelistDomain = domain.map(item => `http://${item}`)
whitelistDomain = [...whitelistDomain, ...domain.map(item => `https://${item}`)]

cors_proxy.createServer({
    originWhitelist: whitelistDomain, 
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
})