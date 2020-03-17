
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Posts {
    postId: number;
    title?: string;
    body?: string;
}

export abstract class IQuery {
    abstract GetUserByID(id?: number): Users | Promise<Users>;
}

export class Users {
    userId: number;
    firstName?: string;
    email?: string;
    refPostId?: number;
    post?: Posts[];
}
