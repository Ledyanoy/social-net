export type ValidatorType = (value: string) => string | undefined

export const requiredField: ValidatorType = (value) => {
    return value && value !== '' ? undefined : 'Filed is required';
}

export const maxLength = (max: number): ValidatorType => {
    return (value) => value && value.length > max ? `Must be ${max} characters or less` : undefined
}