const path = require('path');
require('dotenv').config({
    path: '.env'
});

module.exports = {
    flags: {
        DEV_SSR: false
    },
    siteMetadata: {
        title: 'My Github Explore',
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: []
};
