/**
 * @swagger
 *  components:
 *      schemas:
 *          get_otp:
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
 *          check_otp:
 *              type: object
 *              required: 
 *                  -   phone
 *                  -   code
 *              properties:
 *                  phone:
 *                      type: string
 *                      description: the Phone Number
 *                  code:
 *                      type: string
 *                      description: the Code OTP
 */
/**
 * @swagger
 *  /auth/get-otp:
 *      post:
 *          tags: [GrpcServer(AuthService)]
 *          summary: Authentication
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/get_otp'
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /auth/check-otp:
 *      post:
 *          tags: [GrpcServer(AuthService)]
 *          summary: Authentication
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/check_otp'
 *          responses:
 *              200:
 *                  description: successfully
 */

