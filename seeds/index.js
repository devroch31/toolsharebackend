const sequelize = require('../config/connection');
const { user, toolType } = require('../models');

const seed = async () => {
    await sequelize.sync({force:true})
    const users = await user.bulkCreate([
        {
            username:"",
            email:"",
            password:""
        },
        {
            username:"",
            email:"",
            password:""
        },
        {
            username:"",
            email:"",
            password:""
        }
    ],{
        individualHooks:true
    })

    const toolTypes = await category.bulkCreate([
        {
            categoryname:""
        },
        {
            categoryname:""
        },
        {
            categoryname:""
        },
        {
            categoryname:""
        }, 
        {
            categoryname:""
        }
    ])
    process.exit(1)
}

seed();