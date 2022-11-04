const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix : isProd ? "/tim-portfolio/" : "",
     images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};
