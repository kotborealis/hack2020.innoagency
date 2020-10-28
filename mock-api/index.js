const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
        // backend API proxy
        app.use('/api/v1', createProxyMiddleware({
            target: 'http://127.0.0.1:3000',
            context: ['/api/v1'],
            pathRewrite: {'^/api/v1': ''},
        }));
    };