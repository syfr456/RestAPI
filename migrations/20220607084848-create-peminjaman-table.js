'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_pinjaman",{
     id_pinjaman: {
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
     nominal_pinjaman: {
       type: Sequelize.INTEGER(10),
       allowNull: false
     },
     sktm: {
       type: Sequelize.STRING(100),
       allowNull: false
     },
     keperluan: {
       type: Sequelize.ENUM('Pendidikan', 'Kesehatan'),
       allowNull: false
     },
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_pinjaman");
  }
};
