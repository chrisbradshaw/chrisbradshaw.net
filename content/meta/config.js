const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Chris Bradshaw - NYC Front End Web Developer", // <title>
  shortSiteTitle: "Chris Bradshaw", // <title> ending for posts and pages
  siteDescription: "Javascript Front End Development Blog.",
  siteUrl: "https://chrisbradshaw.net",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Chris Bradshaw",
  authorTwitterAccount: "_chrisbradshaw",
  // info
  infoTitle: "Chris Bradshaw",
  infoTitleNote: "Javascript Developer",
  // manifest.json
  manifestName: "Chris Bradshaw - NYC Front End Web Developer",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "bradshaw.chris@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/chrisbradshaw" },
    { name: "twitter", url: "https://twitter.com/_chrisbradshaw" },
    { name: "facebook", url: "http://facebook.com/cbradshaw1" }
  ]
};
