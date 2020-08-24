const isNotEmpty = x => x != ''
const validatePC = pc => pc.length === 5 && Number(pc) !== Number.NaN
const validateEmail = email => /\w+@\w+\.[a-z]{2,4}/i.test(email)

export default fields => isNotEmpty(fields.name)
&& isNotEmpty(fields.address)
&& validatePC(fields.postal_code)
&& validateEmail(fields.email)
&& isNotEmpty(fields.phone)
