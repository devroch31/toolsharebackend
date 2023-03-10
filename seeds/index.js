const sequelize = require('../config/connection');
const { User, Type } = require('../models');

const users = [
    {
        username:"evan",
        email:"evan@evan.com",
        password:"evanpassword"
    },
    {
        username:"andrew",
        email:"andrew@andrew.com",
        password:"andrewpassword"
    }
];

const types = [
    {
        categoryname:"Saw"
    },
    {
        categoryname:"Drill"
    },
    {
        categoryname:"Sander"
    }
];

const shares = [
    {
        date: new Data(),
        notes: 'text aobut tool',
        borrowed_by: '1',
        tool_id: "1",
        owner_id: "2"
    },
    {
        date: new Data(),
        notes: "text aobut tool",
        borrowed_by: '2',
        tool_id: "2",
        owner_id: "1"
    },
];

const seed = async () => {
    await sequelize.sync({ force: true });
    const seededUsers = await User.bulkCreate(users, {
      individualHooks: true,
    });
    const seededTypes = await Type.bulkCreate(types);
    const seededShares = await Share.bulkCreate(shares);
    process.exit(0);
  };

seed();