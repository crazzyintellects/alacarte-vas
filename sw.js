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

workboxSW.precache([
  {
    "url": "bundle.js",
    "revision": "a5a4142a1559daecfadedbf12c47a3e9"
  },
  {
    "url": "src/App.js",
    "revision": "3ba04c76534ecefcec4ccb68d88788e4"
  },
  {
    "url": "src/assets/airbnb.JPG",
    "revision": "af9e532be54a8f80d355fa333396dc71"
  },
  {
    "url": "src/assets/AutoPurchaseProgram.jpg",
    "revision": "2aebd1658583b200d0fd9853c41f9b22"
  },
  {
    "url": "src/assets/Baggage.JPG",
    "revision": "face5288ec1cc52f5cdb3c0b6b583fc7"
  },
  {
    "url": "src/assets/Boingo.JPG",
    "revision": "cd9fb822a03a56740e369c67b764b611"
  },
  {
    "url": "src/assets/CarIcon.jpg",
    "revision": "46e156bb29ccaea61ec724785e708f0e"
  },
  {
    "url": "src/assets/CompanionCertificateOpen.jpg",
    "revision": "a29280f759894b59b35e752a9b907325"
  },
  {
    "url": "src/assets/everyday.jpg",
    "revision": "7b34cc25fb2264e06f781679d071cecb"
  },
  {
    "url": "src/assets/ExtendedWarranty.jpg",
    "revision": "48b29b2095506bdd39b7418dfc9dcd4f"
  },
  {
    "url": "src/assets/FirstBagFree.jpg",
    "revision": "ce50cbc3ce554680c52c566649a31125"
  },
  {
    "url": "src/assets/green.png",
    "revision": "1c40eb2f2c73afc2672b2630b5448b59"
  },
  {
    "url": "src/assets/hilton-honors.png",
    "revision": "6b155164348d67cb42d2469510313f0a"
  },
  {
    "url": "src/assets/lounge.JPG",
    "revision": "bc190f5106a00d37e33548e709f53d2f"
  },
  {
    "url": "src/assets/platinum-delta-skymiles.png",
    "revision": "e0a090f9991463e47625910e4e29ba96"
  },
  {
    "url": "src/assets/platinum.png",
    "revision": "cd6fca6da75b1cc9a00ecd29ba7961b5"
  },
  {
    "url": "src/assets/premier-rewards-gold.png",
    "revision": "108cd58cc28ce87d78e25faea172f6c8"
  },
  {
    "url": "src/assets/prioirty-pass-ascend.jpg",
    "revision": "b398e26e36269faf0b6e3734138daca8"
  },
  {
    "url": "src/assets/PriorityBoardingDelta.jpg",
    "revision": "d3e9a2e9b71ea541005229e294b395ce"
  },
  {
    "url": "src/assets/PurchaseProtection.jpg",
    "revision": "d503d0d596b95caa7544e243271567b0"
  },
  {
    "url": "src/assets/reward.JPG",
    "revision": "82c7dd567427ce1833fbf527f4ea4372"
  },
  {
    "url": "src/assets/smButton.png",
    "revision": "8b2cd2d8ef44806ccd999525f553e52d"
  },
  {
    "url": "src/assets/SPG_NoForeignTransFees.jpg",
    "revision": "6b5bfd391db53d384f871530b81e8b63"
  },
  {
    "url": "src/assets/starwood-preferred-guest.png",
    "revision": "2410c1260b2f5539ccddce7fb88bfe31"
  },
  {
    "url": "src/assets/TravelAccidentInsurance.jpg",
    "revision": "a93ae7d57ee38c3e63c1aa3bd09d365f"
  },
  {
    "url": "src/axiosInstance.js",
    "revision": "38ea9abf1e6093c55c3e510210cf424b"
  },
  {
    "url": "src/components/CardDetail/CardDetail.css",
    "revision": "619999c68c5fc309aac28056a24ed7fb"
  },
  {
    "url": "src/components/CardDetail/CardDetail.js",
    "revision": "7f510e5971a3c9fa7d0db97fd06ccb86"
  },
  {
    "url": "src/components/CardItem/CardItem.js",
    "revision": "ecf8e1fbd6ab96cecb0416642f91d3a9"
  },
  {
    "url": "src/components/CardsSection/CardsSection.js",
    "revision": "15fedde2623aca5d949d8e10d6f6c46a"
  },
  {
    "url": "src/components/notifications/notifications.js",
    "revision": "2198a8b00d912dad04e65a9a163b9780"
  },
  {
    "url": "src/components/PaymentDetails/tabs.js",
    "revision": "1d3adcef1d1f3fba995df3cd2f99c09c"
  },
  {
    "url": "src/components/PaymentDetails/transactionSection.js",
    "revision": "12c3332a08c0db23b11c903a271b1bb2"
  },
  {
    "url": "src/components/PaymentDetails/transactionSectionTable.js",
    "revision": "466b4eb98b7afdb1c3cb6a17c94f111e"
  },
  {
    "url": "src/components/ValueAddedServices/IncludedVAS/IncludedVAS.js",
    "revision": "272eee3a228262b82b02c8bef2cedf27"
  },
  {
    "url": "src/components/ValueAddedServices/ToBeAddedVAS/ToBeAddedVAS.js",
    "revision": "873a5ae7741cad719c94eb57d7f13470"
  },
  {
    "url": "src/containers/FeatureSection/FeatureSection.js",
    "revision": "714a0e2b9d1d31f5e4954053e36849fb"
  },
  {
    "url": "src/containers/Header/HeaderNav.js",
    "revision": "dfeb8adbef98bb8193deab3dedaa1c30"
  },
  {
    "url": "src/containers/Header/LeftNavData.js",
    "revision": "1cd1a324eca748f71164536eb91b33c5"
  },
  {
    "url": "src/containers/Pages/dynamicNotifications.js",
    "revision": "697160c4b68b39c7758cb3aada9c89e3"
  },
  {
    "url": "src/containers/Pages/FeaturesPage.js",
    "revision": "84e3d51e6c1743d1ae1932dfe62cf715"
  },
  {
    "url": "src/containers/Pages/HomePage.js",
    "revision": "8ccc03718a41a91aea1a5ce81b5afe0f"
  },
  {
    "url": "src/containers/Pages/transactions.js",
    "revision": "dbd774e5cb6d2bc9f4641102915346f9"
  },
  {
    "url": "src/firebaseInstance.js",
    "revision": "a5e65098704fe5c87ec2fdf39dcfd955"
  },
  {
    "url": "src/index.js",
    "revision": "9e0cca2cf27294085ec5f9c2f0aaf274"
  },
  {
    "url": "src/jsUtilities/idb.js",
    "revision": "017ced36d82bea1e08b08393361e354d"
  },
  {
    "url": "src/jsUtilities/promise.js",
    "revision": "10c2238dcd105eb23f703ee53067417f"
  },
  {
    "url": "src/jsUtilities/utility.js",
    "revision": "499c99fda9b6b8225c116e37e823e325"
  },
  {
    "url": "sw_init.js",
    "revision": "76b3129cd5c3856f0930605d9f64ae6b"
  },
  {
    "url": "sw.js",
    "revision": "4f35c10d2e45f74cfe935dc438667be9"
  },
  {
    "url": "swbase.js",
    "revision": "933c9a4585552cf45adf880ad0dcba17"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  },
  {
    "url": "index.html",
    "revision": "3f56c30ac883dc4c93f134173f622191"
  },
  {
    "url": "public/index.html",
    "revision": "f4c1ef861316c08352f5ca98bc6223c7"
  }
]);