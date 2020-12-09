export const changeObjectInArray = (items: any, objPropName: any, objId: any, newObjProps: any ) => {
    return items.map((u: any) => {
        if (u[objPropName] === objId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}