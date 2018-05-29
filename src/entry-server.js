import createApp from './app';

export default context => new Promise((resolve, reject) => {
  const { app, router } = createApp();

  const { url } = context;
  const { fullPath } = router.resolve(url).route;

  if (fullPath !== url) {
    return reject({ url: fullPath });
  }

  router.push(url);

  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents();

    if (!matchedComponents.length) {
      return reject({ code: 404 });
    }

    Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
      route: router.currentRoute,
    }))).then(() => {
      resolve(app);
    }).catch(reject);
    return null;
  }, reject);
  return null;
});
