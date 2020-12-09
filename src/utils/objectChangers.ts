export const changeObjectInArray = (items, objPropName, objId, newObjProps ) => {
    return items.map(u => {
        if (u[objPropName] === objId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}