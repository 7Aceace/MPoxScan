const path = require('path');
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(path.resolve(__dirname), { isCSSEnabled: true });


module.exports = withNativeWind(config, { input: './global.css' });