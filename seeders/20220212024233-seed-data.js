const { faker } = require('@faker-js/faker');
// we are destructuring here because we are taking the "faker" key from the module's object

module.exports = {
  up: async (queryInterface) => {
    const itemsList = [];

    for (let i = 0; i < 100; i += 1) {
      itemsList.push({
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    try {
      const result = await queryInterface.bulkInsert('items', itemsList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('items', null, {});
  },
};
