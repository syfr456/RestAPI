'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_jmptSmph",{
     id_jmpt: {
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
     jumlah: {
       type: Sequelize.INTEGER(20),
       allowNull: false
     },
     tanggal_penjemputan: {
       type: Sequelize.DATE,
       allowNull: false
     },
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_jmptSmph");
  }
};
