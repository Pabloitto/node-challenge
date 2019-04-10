const SearchVideoTrackRoute = ({
  app
}) => {
  app.get('/videos/:id', async (req, res) => {
    const { VideoTracks } = req.models
    const video = await VideoTracks.findOne({
      where: req.params
    })
    if (!video) {
      return res.status(404).json({
        message: 'Video not found'
      })
    }
    return res.json(video)
  })
}

module.exports = SearchVideoTrackRoute
