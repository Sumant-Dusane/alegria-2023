/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp4|mp3)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos/',
                    outputPath: 'static/videos/'
                },
            },
        });

        return config;
    }
}

module.exports = nextConfig
