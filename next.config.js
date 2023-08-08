/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    //production
    BASE_URL:'https://api.gateway-vn.com',
    TOKEN:"5380834b1e1141e0eed96a7fadcd2e0a28fd3c4053668c3a51c6cd69df0ef683477e60919213eb2cf5cfbc14f127f66b6af67d13a39e1872aca0b684ae04697e47a51cef5200c3e9e8802bdfbe5ccb500884ac682338bab7b767788b4924b3611c81096f1e6d3b5eaa340b1c7db3231a6be6f500a2ee82cd220f07a7815869e4"
    //local
    // BASE_URL:'http://localhost:1337',
    // TOKEN:'b814de94d8e9122d987c9ee87731fcd8d2d2d8d6201a695330f38593f3fe07aa5c40196cef5ae4da163fe703517af4721d74e3098e9d05ee5f73c1b0fcd9f735d139b1ccdfa4adc1a0c101b58cd08826733ca5da81c219cc91f2fecb001651751aa104e45dff40c8b8ed50c71662dd13f98187d0744bdc06c13170ba9936c073',
  },
  images: {
    domains: ['localhost',"gate-way-image-bucket.s3.ap-southeast-1.amazonaws.com"],
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
