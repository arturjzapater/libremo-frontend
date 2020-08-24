const isNotEmpty = x => x != ''
const validatePC = pc => pc.length === 5 && Number(pc) !== Number.NaN
const validateEmail = email => /\w+@\w+\.[a-b]{2,4}/i.test(email)

export default ({ _c_o, ...fields }) =>
    Object.values(fields).every(isNotEmpty)
    && validatePC(fields.postal_code)
    && validateEmail(fields.email)
