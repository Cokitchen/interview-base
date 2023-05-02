const serve = require('koa-static');
const send = require('koa-send');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(serve(`${__dirname}/build`));

router.get('/.well-known/apple-app-site-association', async ctx => {
  ctx.set('Content-Type', 'application/json');
  await send(ctx, 'src/Website/data/apple.json');
});
router.get('/.well-known/assetlinks.json', async ctx => {
  await send(ctx, 'src/Website/data/android.json');
});

router.get('/(.*)', async ctx => {
  await send(ctx, 'build/index.html');
});

app.use(router.routes());

const PORT = process.env.PORT || 3096;

app.listen(PORT, console.log(`🌎 Listening on port ${PORT}`));
