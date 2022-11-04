const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/tim-portfolio/" : "",
  images: {
    loader: "akamai",
    path: " ",
  },
  basePath: "/tim-portfolio",
  assetPrefix: "/tim-portfolio",
  reactStrictMode: true,
  swcMinify: true,
};
