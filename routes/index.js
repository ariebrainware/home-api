const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).send([
    {
      project: 'Ticket Xpo',
      url: 'https://api.ariebrainware.com/v1/xpo',
    },
    {
      project: 'Galonku API',
      url: 'https://api.ariebrainware.com/v1/galonku',
    },
    {
      project: 'Paylist API',
      url: 'https://api.ariebrainware.com/v1/paylist'
    }
  ])
})

module.exports = router
