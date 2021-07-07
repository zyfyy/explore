const path = require('path');

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-scss-typescript`,
            options: {
                declartionOptions: {
                    prettierConfigFile: path.resolve(__dirname, './.prettier.js'),
                }
            }
        }
    ]
};
