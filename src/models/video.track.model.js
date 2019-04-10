module.exports = (sequelize, DataType) => {
  const VideoTrackModel = sequelize.define('VideoTracks', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataType.STRING,
      allowNull: false
    },
    url: {
      type: DataType.STRING,
      allowNull: false
    }
  })
  return VideoTrackModel
}
