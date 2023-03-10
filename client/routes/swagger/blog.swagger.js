/**
 * @swagger
 *  components:
 *      schemas:
 *          Create-Blog:
 *              type: object
 *              required:
 *                  -   title
 *                  -   text
 *                  -   tags
 *                  -   image
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the title of the blog
 *                      example: Apple Watch
 *                  text:
 *                      type: string
 *                      description: the text of blog
 *                      example: New Blog
 *                  tags:
 *                      type: array
 *                      description: the list of tags for example(tag1#tag2#tag_foo)
 *                  image:
 *                      type: file
 *                      description: the index picture of blog
 *          Update-Blog:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: the id of the blog
 *                  title:
 *                      type: string
 *                      description: the title of the blog
 *                  text:
 *                      type: string
 *                      description: the text of blog
 *                  tags:
 *                      type: array
 *                      description: the list of tags for example(tag1#tag2#tag_foo)
 *                  image:
 *                      type: file
 *                      description: the index picture of blog
 */
/**
 * @swagger
 *  /blog/add:
 *      post:
 *          tags: [GrpcServer(Blog)]
 *          summary: create a blog
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/Create-Blog'
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /blog/list:
 *      get:
 *          tags: [GrpcServer(Blog)]
 *          summary: Gets a list of blogs
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /blog/{id}:
 *      get:
 *          tags: [GrpcServer(Blog)]
 *          summary: Get a blogs
 *          parameters:
 *              -   in: path
 *                  required: true
 *                  name: id
 *                  type: number
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /blog/update:
 *      put:
 *          tags: [GrpcServer(Blog)]
 *          summary: update a blog
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/Update-Blog'
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /blog/remove/{id}:
 *      delete:
 *          tags: [GrpcServer(Blog)]
 *          summary: remove a blogs
 *          parameters:
 *              -   in: path
 *                  required: true
 *                  name: id
 *                  type: number
 *          responses:
 *              200:
 *                  description: successfully
 */
