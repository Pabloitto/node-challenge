const { VideoTracks } = models

describe('search videos test', () => {
  beforeEach((done) => {
    VideoTracks.destroy({
      where: {}
    }).then(() => done())
  })
  it('should get one video', (done) => {
    const payload = { title: 'test 1', url: 'some url' }
    VideoTracks.create(payload).then(({
      id
    }) => {
      request.get(`/videos/${id}`)
      .expect(200)
      .end((err, res) => {
        expect(res.body.title).to.eql(payload.title)
        expect(res.body.url).to.eql(payload.url)
        done(err)
      })
    })
  })
})
