
module.exports = {
  
  webpack: {
    configure: (webpackConfig) => {
      //console.log('webpackConfig', webpackConfig.module.rules[1].oneOf[1]);
     // throw new Error('error');

      webpackConfig.module.rules[1].oneOf[1] = {
        test: /\.(jpe?g|png|webp)$/i,
        
        use: {
          loader: 'responsive-loader',

          options: {
            adapter: require('responsive-loader/sharp'),
            name: 'static/media/[name]-[width].[hash:8].[ext]',
          },
        },
      }
      /*
      webpackConfig.module.rules.push(
        {
          test: /\.(jpe?g|png|webp)$/i,
          use: {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
            },
          },
        }
      );
      */
      //console.log(webpackConfig.module.rules[1].oneOf);
      //debugger;
     // throw new Error('error');
      return webpackConfig;
    }
  }
}