'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_pembelianSmbk",{
     id_pmblian: {
       type: Sequelize.INTEGER(20),
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
     id_sembako: {
       type: Sequelize.INTEGER(20),
       unique: true,
       allowNull: false
     },
     id_nsbh: {
       type: Sequelize.INTEGER(20),
       unique: true,
       allowNull: false
     },
     id_rek: {
       type: Sequelize.INTEGER(20),
       unique: true,
       allowNull: false
     },
     tanggal_pembelian: {
       type: Sequelize.DATE,
       allowNull: false
     },
     total: {
       type: Sequelize.INTEGER(20),
       allowNull: false
     }
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_pembelianSmbk");
  }
};
