const User = require('../modals/user');

const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { email, password, name, picture } = req.body
        const user = await User.create({ name, email, password, picture });
        res.status(201).json(user)
    } catch (e) {
        console.log("eeeeeeeeeeee", e)
        let msg;
        if (e.code === 11000) {
            msg = "user already exits"
        } else {
            msg = e.message;
        }
        res.status(400).json(msg)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        user.status = 'online';
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        console.log("errrrrrrrrr", e)
        res.status(400).json(e.message)
    }
})

module.exports = router;