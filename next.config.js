const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix : isProd ? "/tim-portfolio/" : "",
  reactStrictMode: true,
  swcMinify: true,
  images.unoptimized = true
}
