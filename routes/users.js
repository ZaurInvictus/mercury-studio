const router = require("express").Router()
const { check, validationResult } = require("express-validator");
const Users = require("../models/user-models")



// GET ALL USERS
router.get('/', (req, res) => {
  Users.find()
   .then(listings => {
      res.status(200).json(listings)
   })
    .catch(err => res.send(err))
})


// POST USER
router.post('/',
  [
    check("first_name", "First name is required").exists().not().isEmpty(),
    check("last_name", "Last name is required").exists().not().isEmpty(),
    check("email", "Please include a valid email").isEmail().normalizeEmail(),
    check("date", "Date is required").exists().not().isEmpty(),
  ],
    async (req, res) => {

    const errors = validationResult(req)
        
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
        
    let { first_name, last_name, email, date } = req.body
        
    try {
      const newUser = await Users.add({ first_name, last_name, email, date })

      res.status(200).json({
        newUser,
        message: `Welcome ${first_name}! You have been successfully registered for the event!`
      })
    } catch (error) {
       res.status(500).json({
         errors:[error, { msg: 'Sorry, but something went wrong while adding data.' }]
       })
    }
  }
)


module.exports = router