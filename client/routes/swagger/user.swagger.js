/**
 * @swagger
 *  components:
 *      schemas:
 *          Create-User:
 *              type: object
 *              required: 
 *                  -   firstName
 *                  -   lastName
 *                  -   email
 *                  -   phone
 *                  -   password
 *              properties:
 *                  firstName:
 *                      type: string
 *                      description: the First Name 
 *                      example: Ali
 *                  lastName:
 *                      type: string
 *                      description: the Last Name
 *                      example: mohammadI
 *                  email:
 *                      type: string
 *                      description: the Email Address
 *                      example: example@gmail.com
 *                  phone:
 *                      type: string
 *                      description: the Phone Number
 *                  password:
 *                      type: string
 *                      description: the Password
 */
/**
 * @swagger
 *  /user/add:
 *      post:
 *          tags: [GrpcServer(User)]
 *          summary: create a user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Create-User'
 *          responses:
 *              200:
 *                  description: successfully
 */