const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix : isProd ? "/tinthavong.github.io/" : '',
  reactStrictMode: true,
  swcMinify: true
}
