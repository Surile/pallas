module.exports = (options) => {
  return async function logger(ctx, next) {
    console.log('>> ', ctx.event)
    await next()
    console.log('<< ', ctx.body)
  }
}
