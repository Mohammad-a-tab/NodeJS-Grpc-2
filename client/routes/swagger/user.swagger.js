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
 *          Update-User:
 *              type: object
 *              properties:
 *                  firstName:
 *                      type: string
 *                      description: the First Name 
 *                  lastName:
 *                      type: string
 *                      description: the Last Name
 *                  email:
 *                      type: string
 *                      description: the Email Address
 *                  phone:
 *                      type: string
 *                      description: the Phone Number
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
/**
 * @swagger
 *  /user/list:
 *      get:
 *          tags: [GrpcServer(User)]
 *          summary: Gets a list of User
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /user/{id}:
 *      get:
 *          tags: [GrpcServer(User)]
 *          summary: Get a User
 *          parameters:
 *              -   in: path
 *                  required: true
 *                  name: id
 *                  type: string
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /user/update/{id}:
 *      put:
 *          tags: [GrpcServer(User)]
 *          summary: update a User
 *          parameters:
 *              -   in: path
 *                  required: true
 *                  name: id
 *                  type: string
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Update-User'
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /user/remove/{id}:
 *      delete:
 *          tags: [GrpcServer(User)]
 *          summary: remove a User
 *          parameters:
 *              -   in: path
 *                  required: true
 *                  name: id
 *                  type: number
 *          responses:
 *              200:
 *                  description: successfully
 */