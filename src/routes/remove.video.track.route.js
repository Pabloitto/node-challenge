const RemoveVideoTrackRoute = ({
  app
}) => {
  app.delete('/videos/:id', async (req, res) => {
    const { VideoTracks } = req.models
    const count = await VideoTracks.destroy({
      where: req.params
    })
    return res.json({
      removed: count > 0
    })
  })
}

module.exports = RemoveVideoTrackRoute
