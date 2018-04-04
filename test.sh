set -e

yes "" | ./node_modules/.bin/vue init . tpltest

cd tpltest
npm install
npm run lint
npm test
npm run build
