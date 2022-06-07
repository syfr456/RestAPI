'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("tb_rek",{
     id_rek: {
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
     jenis_tabungan: {
       type: Sequelize.ENUM('Reguler', 'Pendidikan', 'Lebaran/Natal', 'Sosial'),
       allowNull: false
     },
     saldo: {
       type: Sequelize.INTEGER(20),
       allowNull: false
     },
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("tb_rek");
  }
};
