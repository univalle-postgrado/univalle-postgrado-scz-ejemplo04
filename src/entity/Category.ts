import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('categories')
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    description: string

}
