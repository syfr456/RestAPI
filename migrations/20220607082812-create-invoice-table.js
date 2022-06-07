'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_invoice",{
     id_invoice: {
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
     id_rek: {
      type: Sequelize.INTEGER(20),
       unique: true,
       allowNull: false
     },
     id_sampah: {
      type: Sequelize.INTEGER(20),
       unique: true,
       allowNull: false
     },
     tanggal_transaksi: {
       type: Sequelize.DATE,
       allowNull: false
     },
     jenis: {
       type: Sequelize.STRING(10),
       allowNull: false
     },
     berat: {
       type: Sequelize.INTEGER(12),
       allowNull: false
     },
     total: {
       type: Sequelize.INTEGER(16),
       allowNull: false
     },

   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_invoice");
  }
};
