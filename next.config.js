/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BASE_URL:'https://api.gateway-vn.com',
    //production
    TOKEN:"5380834b1e1141e0eed96a7fadcd2e0a28fd3c4053668c3a51c6cd69df0ef683477e60919213eb2cf5cfbc14f127f66b6af67d13a39e1872aca0b684ae04697e47a51cef5200c3e9e8802bdfbe5ccb500884ac682338bab7b767788b4924b3611c81096f1e6d3b5eaa340b1c7db3231a6be6f500a2ee82cd220f07a7815869e4"
    //local
    // TOKEN:'24e922e6fc38a3f58353810eadb3a30a8c069a6e3c9336fae3c1a3f22ee8853973d694a5e8599d24042827cf5d3f6a24b412c6c7b508478ddfdac14ac7363ef41b74d485bdfc3f8cdec6f827cd5ab9ba36228fe86f1ba51a1f0e07be4a55c1ade69e7e38f4e808ebddb1d30b6e7920374236cab6abe0266b97490565d00d180d',
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
