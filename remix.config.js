/** @type {import('@remix-run/dev').AppConfig} */
export default {
    tailwind: true,
    postcss: true,
};

module.exports = {
    appDirectory: "app", // ✅ make sure this matches
    // other config
};
require("dotenv").config();