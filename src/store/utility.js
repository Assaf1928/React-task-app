export const updateObject = (oldObject, updatedProperties) => {
    console.log(oldObject,"old object")
    console.log(updatedProperties,"updatedProperties")

    return {
        ...oldObject,
        ...updatedProperties
    };
};