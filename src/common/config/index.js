const config = {
  database: 'video-tracks',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'video-tracks.sqlite',
    define: {
      underscored: true
    }
  }
}

const override = process.env.NODE_ENV ? require(`./environments/${process.env.NODE_ENV}`) : {}

module.exports = Object.assign({}, config, override)
