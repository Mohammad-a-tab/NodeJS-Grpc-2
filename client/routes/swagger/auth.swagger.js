/**
 * @swagger
 *  /auth/add:
 *      post:
 *          tags: [GrpcServer(AuthService)]
 *          summary: create a user
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

