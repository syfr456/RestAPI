module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        "Users",
        {
            id_nsbh: {
            type: DataTypes.INTEGER(20),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
            },
            id_alamat: {
            type: DataTypes.INTEGER(20),
            unique: true,
            allowNull: false
            },
            username: {
            type: DataTypes.STRING(20),
            allowNull: false
            },
            nama: {
            type: DataTypes.STRING(50),
            allowNull: false
            },
            no_hp: {
            type: DataTypes.INTEGER(12),
            allowNull: false
            },
            nik: {
            type: DataTypes.INTEGER(16),
            allowNull: false
            },
            ktp: {
            type: DataTypes.STRING(100),
            allowNull: false
            },
            password: {
            type: DataTypes.STRING(8),
            allowNull: false
            },
        },
        {
            tableName: "tb_nasabah",
        }
    );
    return Users;
}