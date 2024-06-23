// ts-ignore
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
    plugins: [require('tailwindcss'), postcssPresetEnv({})],
}
