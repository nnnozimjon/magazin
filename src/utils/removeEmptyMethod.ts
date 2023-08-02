function removeEmptyOrNullProperties(params: any) {
  const result = { ...params }
  Object.keys(result).forEach(key => {
    if (result[key] === '' || result[key] === null) {
      delete result[key]
    }
  })
  return result
}
