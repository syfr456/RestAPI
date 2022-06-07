'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_sampah",{
     id_sampah: {
       type: Sequelize.INTEGER(20),
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     sampah: {
       type: Sequelize.STRING(20),
       allowNull: false
     },
     jenis_sampah: {
       type: Sequelize.STRING(100),
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
   await queryInterface.dropTable("tb_sampah");
  }
};
