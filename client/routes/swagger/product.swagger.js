/**
 * @swagger
 *  components:
 *      schemas:
 *          Create-Product:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the title of the product
 *                      example: Apple Watch
 *                  price:
 *                      type: string
 *                      description: the price of product
 *                      example: 25000
 */
/**
 * @swagger
 *  /product/create:
 *      post:
 *          tags: [GrpcServer]
 *          summary: create a Product
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Create-Product'
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /product/list:
 *      get:
 *          tags: [GrpcServer]
 *          summary: Gets a list of Products
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /product/{id}:
 *      get:
 *          tags: [GrpcServer]
 *          summary: Gets a list of Products
 *          parameters:
 *              -   in: path
 *                  required: true
 *                  name: id
 *                  type: number
 *          responses:
 *              200:
 *                  description: successfully
 */
