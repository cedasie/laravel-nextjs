/** @type {import('next').NextConfig} */

const NextConfig = {
    rewrites: () => {
        return [
            {
                source: '/:path*',
                destination: 'https://langasia.com/:path*',
            },
        ]
    },
}

module.exports = NextConfig
