const path = require('path');

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
                            }
                        
                   ]
            }
};