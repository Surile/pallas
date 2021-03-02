export default async function (token) {
  const payload = this._verifyToken(token)
  if (payload.code) {
    return payload
  }
  delete payload.iat
  delete payload.exp
  return payload
}
