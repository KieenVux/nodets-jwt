export interface AccountDto{
    username:string;
    password:string;
    avatar:string;
    role_id:number;
}

export interface AccountDtoForGenerateToken{
    username:string;
    role:number;
}