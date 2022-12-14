const router = require('express').Router()
const sesssionRouter = require('./session')
const usersRouter = require('./users')

router.use('/session', sesssionRouter)
router.use('/users', usersRouter)


router.post('/test', (req, res) => {
    res.json({requestBody: req.body})
})

// GET /api/set-token-cookie
// const {setTokenCookie} = require('../../utils/auth.js')
// const {User} = require('../../db/models')
// router.get('/set-token-cookie', async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         }
//     })
//     setTokenCookie(res, user)
//     return res.json({user})
// })

// GET /api/restore-user
// const {restoreUser} = require('../../utils/auth.js')
// router.get('/restore-user', restoreUser, (req, res) => {
//     return res.json(req.user)
// })

// GET /api/require-auth
// const {requireAuth} = require('../../utils/auth')
// router.get('/require-auth', requireAuth, (req, res) => {
//     return res.json(req.user)
// })

module.exports = router
