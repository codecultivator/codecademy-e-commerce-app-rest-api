/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The name of your product
 *       example:
 *         id: 1
 *         name: Widget
 */

const express = require('express')
const db = require('../db/queries')

router = express.Router()

router.get('/', async(request, response, next) => {
    db.getProducts()
        .then(results => response.status(200).json(results.rows))
        .catch(err => response.status(500).send(err));
  }
)

router.get('/:id', async(request, response, next) => {
    const id = parseInt(request.params.id)

    db.getProductById(id)
        .then(results => {
            if(results.rows.length === 0 ) {
                response.status(200).json(results.rows)
            } else {
                response.status(400).json("Product not found.")
            }
        })
        .catch(err => response.status(500).send(err));
  }
)

router.post('/', async(request, response, next) => {
    const { name } = request.body

    db.createProduct(name)
        .then(results => {
            response.status(201).send(`Product added with ID: ${results.rows[0].id}`)
        })
        .catch(err => response.status(500).send(err));
  }
)

router.put('/:id', async(request, response, next) => {
    const id = parseInt(request.params.id)
    const { name } = request.body

    db.updateProduct(id, name)
        .then(() => {
            response.status(200).send(`Product modified with ID: ${id}`)
    })
    .catch(err => response.status(500).send(err));
})

router.delete('/:id', async(request, response, next) => {
    const id = parseInt(request.params.id)

    db.deleteProduct(id)
        .then((results) => { 
            response.status(200).send(`Product deleted with ID: ${id}`)
    })
    .catch(err => response.status(500).send(err));
})

module.exports = router
