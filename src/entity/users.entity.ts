import { Model, Table, Column, TableOptions, DataType } from 'sequelize-typescript';

// Tabel options config
const tableOption: TableOptions = { timestamps: true }; 

@Table(tableOption)
export class Users extends Model<Users> {
    @Column({ 
        type: DataType.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
        unique: true
    })
    idUser: number;

    @Column
    first_name: string;
    
    @Column
    last_name: string;
    
    @Column
    phone: string;

    @Column
    email: string;

    @Column
    createdAt: Date;

    @Column
    updatedAt: Date;

    @Column
    deletedAt: Date;
};

