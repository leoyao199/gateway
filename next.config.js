/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    // production
    BASE_URL:'https://api.gateway-vn.com',
    TOKEN:"9912bded75a9f5b1f6ceec32d47b6d92d7a27b8c0f64f6ddb641b70e6f5238c1dbee3d59f47a69fe1ad76ff8e5eb142d28c37a02f4eb9f9433fbf42a9015be9faae1cb4dc8b05e018facb2513b088ab69fe290caf8a5770ed5090d3dd5478a86fe1415965e2d245f268646354156689d0bcd6d7edb5cf205e65583d51a9c5bbc"
    //local
    // BASE_URL:'http://localhost:1337',
    // TOKEN:'b814de94d8e9122d987c9ee87731fcd8d2d2d8d6201a695330f38593f3fe07aa5c40196cef5ae4da163fe703517af4721d74e3098e9d05ee5f73c1b0fcd9f735d139b1ccdfa4adc1a0c101b58cd08826733ca5da81c219cc91f2fecb001651751aa104e45dff40c8b8ed50c71662dd13f98187d0744bdc06c13170ba9936c073',
  },
  images: {
    domains: ['localhost',"gate-way.s3.ap-southeast-1.amazonaws.com"],
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
