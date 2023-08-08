/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    //production
    BASE_URL:'https://api.gateway-vn.com',
    TOKEN:"a1ee9892c7f3fed9b575fe284d594692158405127622ee15f6ecc90d9e16d5ddb5f4e8e96e44e4fdd3d9797129ef334a7efd149295056a4d44bc24aaac0e3730d480dcf0a6af627415d56131f4962480e44493ffa7c33a488accec315dd2a35af65ad3db85295abb1df1d8eae94e23dab94e65a353c760f6b25886b218748df4"
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
