import path from 'path'
import webpack from 'webpack'

module.exports = {

    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js'),
    ],
    output: {
        path:'/',
        filename:'bundle.js',
        publicPath: '/'
    },
    plugins:[
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders:['babel-loader'] 
            }
            

        ]
    },
    
    

}


