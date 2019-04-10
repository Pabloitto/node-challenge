const CreateVideoTrackRoute = ({
  app
}) => {
  app.post('/videos', async (req, res) => {
    const { VideoTracks } = req.models
    const saved = await VideoTracks.create(req.body)
    return res.json(saved)
  })
}

module.exports = CreateVideoTrackRoute
