import { Router } from "express"

const router = Router()

// Routing
router.get('/', (req, res) => {

    res.json('get')
})

router.post('/', (req, res) => {

    res.json('post')
})

router.put('/', (req, res) => {

    res.json('put')
})

router.patch('/', (req, res) => {

    res.json('patch')
})

router.delete('/', (req, res) => {

    res.json('delete')
})

export default router