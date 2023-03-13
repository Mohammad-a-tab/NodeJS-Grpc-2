/**
 * @swagger
 *  components:
 *      schemas:
 *          Create-blog:
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
 *          Update-blog:
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
 *  /blog/create:
 *      post:
 *          tags: [GrpcServer]
 *          summary: create a blog
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Create-blog'
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /blog/list:
 *      get:
 *          tags: [GrpcServer]
 *          summary: Gets a list of blogs
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /blog/{id}:
 *      get:
 *          tags: [GrpcServer]
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
 *          tags: [GrpcServer]
 *          summary: update a blog
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Update-blog'
 *          responses:
 *              200:
 *                  description: successfully
 */
/**
 * @swagger
 *  /blog/remove/{id}:
 *      delete:
 *          tags: [GrpcServer]
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
