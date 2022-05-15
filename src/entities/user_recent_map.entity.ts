import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Map } from './map.entity';
import { User } from './user.entity';

export enum UserRecentMapActive {
    Inactive = 0,
    Active = 1
}

@Entity('user_recent_map')
export class UserRecentMap {
    @PrimaryGeneratedColumn('increment', { type: 'integer', unsigned: true })
    id: number;

    @CreateDateColumn({ type: 'integer' })
    created: Date;

    @UpdateDateColumn({ type: 'integer' })
    modified: Date;

    @Column({ type: 'integer' })
    user_id: number;

    @Column({ type: 'integer' })
    map_id: number;

    @Column({ type: 'integer', default: UserRecentMapActive.Active })
    active: UserRecentMapActive;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user?: User;

    @ManyToOne(() => Map)
    @JoinColumn({ name: 'map_id' })
    map?: Map;
}
