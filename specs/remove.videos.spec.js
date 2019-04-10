const { VideoTracks } = models

describe('remove videos test', () => {
  beforeEach((done) => {
    VideoTracks.destroy({
      where: {}
    }).then(() => done())
  })
  it('should remove one video', (done) => {
    const payload = { title: 'test 1', url: 'some url' }
    VideoTracks.create(payload).then(({
      id
    }) => {
      request.delete(`/videos/${id}`)
      .expect(200)
      .end((err, res) => {
        expect(res.body.removed).to.eql(true)
        VideoTracks.findOne({
          where: { id }
        }).then((video) => {
          expect(video).to.equal(null)
          done(err)
        })
      })
    })
  })
})
