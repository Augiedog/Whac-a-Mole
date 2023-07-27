const express = require('express')
const router = express.Router()

const Bread = require('../models/highscore')
const Baker = require('../models/bakers.js')
const oldBread = require('../models/old_bread.js')
const { populate } = require('../models/bread.js')

// INDEX landing page
router.get('/', async (req, res) => {
    try {
        const bread = await Bread.find()
        const baker = await Baker.find()
        res.render('index', {
            breads: bread,
            bakers: baker,
            title: 'Bread'
        })
    } catch (error) {
        console.log(error)
        res.send('ERROR')
    }    
})

// Breads/new Add new page
router.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {
                bakers: foundBakers
            })
        })
    
})


// SHOW page get bread by index
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const bread = await Bread.findById(id)
        .populate('baker')
        .then(foundBread => {
            res.render('show', {
            bread: foundBread
        })
        
    })
    } catch (error) {
        console.log(error)
        res.send("ERROR")
    }
})

// Create
router.post('/', async (req, res) => {
    try {
        if(!req.body.image) {
            delete req.body['image']
        }
        if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
        } else {
        req.body.hasGluten = false
        }
        await Bread.create(req.body)
        res.redirect('/breads')
    } catch (error) {
        console.log(error)
        res.send("ERROR")
    }
    
})

// Delete bread
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Bread.findByIdAndDelete(id)
        res.status(303).redirect('/breads')
    } catch (error) {
        console.log(error)
        res.send("ERROR")
    }    
})

// Get edit page
router.get('/:id/edit', async (req, res) => {
    const { id } = req.params
    const bread = await Bread.findById(id).populate('baker')
    const bakers = await Baker.find()
    res.render('edit', {
      bread,
      bakers
    })
})

// Update bread
router.put('/:id', async (req, res) => {
    const { id } = req.params
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    await Bread.findByIdAndUpdate(id, req.body)
    res.redirect(`/breads/${id}`)
})
  
module.exports = router