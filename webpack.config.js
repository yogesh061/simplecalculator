
module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output:{
    filename: './public/bundel.js'
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modulesDirectories:[
      'node_modules',
      './app/components'
    ],
    extensions: ['','.js','.jsx']
  }
}
