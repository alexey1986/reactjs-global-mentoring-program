const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, './src/index')]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search',
                permanent: true
            }
        ]
    },
    future: {
        webpack5: true,
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
}
