const FetchVideoTrackRoute = ({
  app
}) => {
  app.get('/videos', async (req, res) => {
    const { VideoTracks } = req.models
    const videos = await VideoTracks.findAll({})
    return res.json(videos)
  })
}

module.exports = FetchVideoTrackRoute
