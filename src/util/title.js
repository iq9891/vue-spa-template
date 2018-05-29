function getTitle(vm) {
  const { title } = vm.$options;
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title;
  }
  return null;
}

const clientTitleMixin = {
  mounted() {
    const pageTitle = getTitle(this);
    const title = pageTitle ? ` | ${pageTitle}` : '';
    if (pageTitle) {
      document.title = `${TITLE}${title}`;
    }
  },
};

export default clientTitleMixin;
