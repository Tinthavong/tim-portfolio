const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/tim-portfolio/" : "",
  images: {
    unoptimized: true,
    loader: "akami",
    path: "",
  },
  basePath: "/tim-portfolio",
  assetPrefix: "/tim-portfolio",
  reactStrictMode: true,
  swcMinify: true,
};
