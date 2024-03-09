/** @type {import('next').NextConfig} */
module.exports = {
    async redirects() {
        return [
            {
                // Redirect all all reauest to /refs/** to Exocortex
                source: '/refs/:path*',
                destination: 'https://exocortex.sehn.dev/refs/:path*',
                permanent: true,
                // Redirect all all reauest to /zettel/** to Exocortex
                source: '/zettel/:path*',
                destination: 'https://exocortex.sehn.dev/concepts/:path*',
                permanent: true,
            },
        ];
    }
}
