export const requiredField = (value) => {
    return value && value !== '' ? undefined : 'Filed is required';
}

export const maxLength = (max) => {
    return (value) => value && value.length > max ? `Must be ${max} characters or less` : undefined
}