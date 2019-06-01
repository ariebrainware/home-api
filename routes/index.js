const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).send([
    {
      project: 'Ticket Xpo',
      url: 'https://api.ariebrainware/xpo/v1',
    }
  ])
})

module.exports = router
