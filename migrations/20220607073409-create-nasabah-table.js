'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_nasabah",{
     id_nsbh: {
       type: Sequelize.INTEGER(20),
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     id_alamat: {
      type: Sequelize.INTEGER(20),
       unique: true,
       allowNull: false
     },
     username: {
       type: Sequelize.STRING(20),
       allowNull: false
     },
     nama: {
       type: Sequelize.STRING(50),
       allowNull: false
     },
     no_hp: {
       type: Sequelize.INTEGER(12),
       allowNull: false
     },
     nik: {
       type: Sequelize.INTEGER(16),
       allowNull: false
     },
     ktp: {
       type: Sequelize.STRING(100),
       allowNull: false
     },
     password: {
       type: Sequelize.STRING(8),
       allowNull: false
     },

   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_nasabah");
  }
};
