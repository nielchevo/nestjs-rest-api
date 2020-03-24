
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IMutation {
    abstract createNewUser(firstname?: string, email?: string): Users | Promise<Users>;
}

export class Posts {
    postId: number;
    title?: string;
    body?: string;
}

export abstract class IQuery {
    abstract GetUserByID(id?: number): Users | Promise<Users>;
}

export class Users {
    id: number;
    firstName?: string;
    email?: string;
    refPostId?: number;
    post?: Posts[];
}
