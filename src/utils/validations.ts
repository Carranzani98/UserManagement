export const validateEmail = (email: string): boolean => {
  const regex = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
  return regex.test(String(email).toLowerCase())
}

export const validatePhone = (phone: string): boolean => {
  const regex = new RegExp(/^\+?[\d\-]+(?:\s*x[\d]+)?$/)
  return regex.test(phone)
}
