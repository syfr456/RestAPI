'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_alamat",{
     id_alamat: {
       type: Sequelize.INTEGER(20),
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     id_nsbh: {
       type: Sequelize.INTEGER(20),
       unique: true,
       allowNull: false
     },
     alamat: {
       type: Sequelize.TEXT('100'),
       allowNull: false
     }
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_alamat");
  }
};
