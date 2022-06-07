'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_pencairan",{
     id_pencairan: {
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
     tanggal_pencairan: {
       type: Sequelize.DATE,
       allowNull: false
     },
     nominal_pencairan: {
       type: Sequelize.INTEGER(20),
       allowNull: false
     }
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_pencairan");
  }
};
