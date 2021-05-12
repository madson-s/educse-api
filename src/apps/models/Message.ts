import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('messages')
export default class Message {

  @PrimaryGeneratedColumn('increment')    
  id: number

  @Column()
  text: string

  @Column()
  origin: string

  @Column()
  sent_at: Date

  @Column()
  create_at: Date
}