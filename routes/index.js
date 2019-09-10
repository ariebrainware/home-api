const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).send([
    {
      project: 'Ticket Xpo',
      url: 'https://api.ariebrainware.com/xpo/v1',
    },
    {
      project: 'Galonku API',
      url: 'https://api.ariebrainware.com/galonku/v1',
    },
    {
      project: 'Paylist API',
      url: 'https://api.ariebrainware.com/paylist/v1'
    }
  ])
})

module.exports = router
