export interface UserInformation {
    userPrincipalName ?: string,
    mail ?: string,
    id?: string,
    name ?: string
}

export interface UserSlice{
    user : UserInformation;
}