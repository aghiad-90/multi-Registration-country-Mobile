


export const getValidUserName = (username : string) => {
    const arr = username.split('@');
    return arr[0]
}