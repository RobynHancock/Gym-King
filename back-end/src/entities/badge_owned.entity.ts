import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { badge } from "./badge.entity";
import { gym_user } from "./gym_user.entity";

@Entity()
export class badge_owned {
    @PrimaryColumn({length : 3})
    @ManyToOne(() => badge, (badge) => badge.B_ID)
    B_ID : badge

    @PrimaryColumn({length:320})
    @ManyToOne(() => gym_user, (gym_user) => gym_user.email)
    email : gym_user

    @Column({length : 50})
    username : string

    @Column({type:"int2",length : 300,default:1})
    Count : number

    @Column({length : 50})
    input1 : string

    @Column({length : 50})
    input2 : string

    @Column({length : 50})
    input3 : string

    @Column({type:"date", default: "now()"})
    Date : Date
}
