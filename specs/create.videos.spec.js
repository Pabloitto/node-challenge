const { VideoTracks } = models

describe('create videos test', () => {
  beforeEach((done) => {
    VideoTracks.destroy({
      where: {}
    }).then(() => done())
  })
  it('should save one video', (done) => {
    const payload = { title: 'test 1', url: 'some url' }
    request.post(`/videos`)
      .send(payload)
      .expect(200)
      .end((err, res) => {
        VideoTracks.findOne({
          where: { id: res.body.id }
        }).then((video) => {
          expect(res.body.title).to.eql(payload.title)
          expect(res.body.url).to.eql(payload.url)
          expect(video.title).to.eql(payload.title)
          expect(video.url).to.eql(payload.url)
          done(err)
        })
      })
  })
})
