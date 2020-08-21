const path = require('path');

module.exports = {
    module:{
        rules:[
            {
                test: /\.js$|\.css$/,
                exclude: /node_moduldes/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    }
}