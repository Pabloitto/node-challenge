const { VideoTracks } = models

describe('fetch videos test', () => {
  beforeEach((done) => {
    VideoTracks.destroy({
      where: {}
    }).then(() => done())
  })
  it('should get an empty array of videos', (done) => {
    request.get('/videos')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.eql([])
        done(err)
      })
  })
})
