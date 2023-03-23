/**
 * @swagger
 *  components:
 *      schemas:
 *          Authentication:
 *              type: object
 *              required: 
 *                  -   phone
 *                  -   password
 *              properties:
 *                  phone:
 *                      type: string
 *                      description: the Phone Number
 *                  password:
 *                      type: string
 *                      description: the Password
 */
/**
 * @swagger
 *  /auth/add:
 *      post:
 *          tags: [GrpcServer(AuthService)]
 *          summary: Authentication
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Authentication'
 *          responses:
 *              200:
 *                  description: successfully
 */

