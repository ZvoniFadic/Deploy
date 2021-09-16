const merge = require('webpack-merge');
const baseConfigGenerator = require('./webpack.config.base.js'); const prodConfig = require('./webpack.config.prod.js');
const devConfig = require('./webpack.config.dev.js');

// new LoaderOptionsPlugin({
//     options: {
//       context: process.cwd() // or the same value as `context`
//     }
//   })
  
function webpackEnviromentSelector(env) { 
    let config;
    if (env.production) config = prodConfig;
    if (env.development) config = devConfig; 
    const baseConfig = baseConfigGenerator(env); 
    return merge(baseConfig, config); 
}
module.exports = webpackEnviromentSelector; 

