module.exports = {
  devServer: {
    host: '192.168.1.177',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        pathRewire: {
          '/api': '  12'
        }
      }
    }
  }
}
