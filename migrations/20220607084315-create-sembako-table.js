'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_sembako",{
     id_sembako: {
       type: Sequelize.INTEGER(20),
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     nama_sembako: {
       type: Sequelize.STRING(50),
       allowNull: false
     },
     harga: {
       type: Sequelize.INTEGER(20),
       allowNull: false
     },
     satuan: {
       type: Sequelize.STRING(10),
       allowNull: false
     }
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_sembako");
  }
};
