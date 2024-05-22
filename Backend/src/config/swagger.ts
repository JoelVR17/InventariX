import swaggerJSDoc from 'swagger-jsdoc'

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API Operations related to products'
            }
        ],
        info: {
            title: 'REST API - InventaryX',
            version: '1.0.0',
            description: 'API DOcs for Products'
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec