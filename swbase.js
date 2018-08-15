importScripts('workbox-sw.prod.v2.1.3.js');

importScripts('/src/jsUtilities/idb.js');
importScripts('/src/jsUtilities/utility.js');

const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'google-fonts',
  cacheExpiration: {
    maxEntries: 3,
    maxAgeSeconds: 60 * 60 * 24 * 30
  }
}));

workboxSW.router.registerRoute('https://alacarte-vas.firebaseio.com/-LJu4D1RTmj_U1MGFR8i/cardbenefits.json', function(args) {
  return fetch(args.event.request)
    .then(function (res) {
      var clonedRes = res.clone();
      clearAllData('cardbenefits')
        .then(function () {
          return clonedRes.json();
        })
        .then(function (data) {
          //console.log("cache data " , data);
         for (var key in data) {
            writeData('cardbenefits', data[key].cardName,data[key].benefits);
            //console.log("data[key].cardName,data[key].benefit " , data[key].cardName,data[key].benefits);
           //console.log('cardbenefits'  + data[key].cardName + ' ' +  key);
          }
        });
      return res;
    });
});

workboxSW.precache([]);