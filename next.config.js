/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BASE_URL:'http://127.0.0.1:1337',
    TOKEN:'24e922e6fc38a3f58353810eadb3a30a8c069a6e3c9336fae3c1a3f22ee8853973d694a5e8599d24042827cf5d3f6a24b412c6c7b508478ddfdac14ac7363ef41b74d485bdfc3f8cdec6f827cd5ab9ba36228fe86f1ba51a1f0e07be4a55c1ade69e7e38f4e808ebddb1d30b6e7920374236cab6abe0266b97490565d00d180d',
  },
  images: {
    domains: ['localhost',"gate-way-bucket.s3.ap-southeast-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
