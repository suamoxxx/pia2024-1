const path = require('path');
// Webpack toma  el archivo .js index  de react con notacion JSX  y lo empaqueta en el archivo .js bundle 
module.exports = {
            entry: './app/index.js',
            output: {
                path:__dirname + '/public/',
                filename: 'bundle.js'
            },
            module: {
                    rules: [
                        {
                            test: /\.js$/, 
                            exclude: /node_modules/,
                            use: {
                                loader:  'babel-loader',
                                options: {
                                    presets: []
                                }
                            }
                        },
                        
                        {
                            test: /\.css$/, 
                            use:  ['style-loader','css-loader']
                            }, {
                                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                                loader: require.resolve(‘url-loader’)
                            }
                        
                   ]
            }
};