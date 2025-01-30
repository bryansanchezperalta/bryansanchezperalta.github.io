'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "843043d39273f623e44f82ac505b716b",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "7fd1f2a54c8583ae436fec4177c283ad",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "0d67afd1e443eee8d2a47dc79bcd683c",
".git/config": "a13aa3c2d8ee0e58f91ce568918daffc",
".git/objects/0d/50e83b76545513426e2afad13aaf8a6dfddf4e": "fe7604eb6a348655a0f1d1bf0765ec59",
".git/objects/59/46147103bca8d53a6f1e93c03f0b5b16fb0224": "96a20a4f1e97273b729e85c9ef95d08e",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/a05438d089eb5aec224650dc394bda79f90c04": "b7a3a7e9394b81671e02cb28ebd98021",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/03/d2ff3e7e3dd387955005a648f72727192253d0": "7cf6dd36fa0ac7d3cbc3480a8c5ee9ce",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3c/cfaadfa8f46f827fc5e8211d9f407551d64c27": "e9cfe9daa4b6c17409e5fc1c5f3d65c0",
".git/objects/9d/3c8714f832006f1fbd1ddfb47b907a2928e02a": "4541ea912c8a6890b4785826f1583cbf",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a4/b862b7461660cba51f7012bece0a298e054085": "7e92c4ecf296749228b31340adf0189a",
".git/objects/a3/cfbd572047e605e7e582933f74a720dfb98074": "f56a47dcdbbb261d5c9e8d1552c3bc97",
".git/objects/ad/dbffd5dac7ca6cc8da24a4448232665b68e702": "57af000715da13b544eeedddfad85400",
".git/objects/bb/54efca5b1fb628531f0167c193fa260f0cf8a5": "7c57bbae8e7d57f2d97bb1130c3da039",
".git/objects/d7/2efd55ad469fe2c7c7745fb6aa62472bfd23a6": "6523df1a9ad00a3552486db61df92c4d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/6b462a67695a325b9a641502bc12b1c03b5e22": "240bb5673843377e14621db63490f885",
".git/objects/da/b19f78725581b618a6bdda01fd2d07b68c813f": "d28b7a4656715e5011c2e7367f54810d",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/57877c6c15089b538c8e6d21ed5145c47bd4b3": "eb37b9ec4a88cd9c69ca3eb1fa79f07a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a71401f6bd41afe66d1346cd54baba3369ab7c": "b9ae55884043bc9c9e2c065b6aee3c20",
".git/objects/f3/ca55116fb82987fcf35caff5a7516478cc6bee": "0f1da71dcf173339280c77022e0bea3a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/46f23d343bb43b9e8b88d4ef0691bf53b77fc8": "701a7ba8986ce4e957c54b0d860c540d",
".git/objects/ee/836b990012285d4d7c78456aec7b6f4c383f5e": "c4790bff665a7f0e1f6fb3be3692d465",
".git/objects/ee/92e98c1d71e00fb6d9f3402bfd0cff68d31dc9": "1a048c37ff5cde7a780882f22650a7e5",
".git/objects/fc/6ee9dad09f3f0d110496d2fdcbefe9e2dcc21c": "fbb9a683c205e727eca7cae5da443ba8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ae38365f9c55ffed8d65ff75c9adf1cc670b2d": "a7e6e044c046f453030c5e7fe1d031cf",
".git/objects/e3/9cdf9dd870a9f7370ec44c042b0139a9de35f2": "e8ccd3a5c293c518f71e4d3ad7fac2c6",
".git/objects/e3/e8efa1879d77daf6840a2eebfe2b3ca44a67b9": "ce46051cab7353ca5c86a291c090624d",
".git/objects/e3/05b6d07092837e256b763db632892b0c7e5bb2": "594e99a87544e796b49a2c801737b7e4",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/fb592cf17bf0adabfd80c6c56000dff5911313": "03b47ed7146bd2cf86c807c8ffb73f73",
".git/objects/c1/03c63834b86eee3f0d298502a5d1eca1ce715b": "69f76baf1de12173d646800538d5e05e",
".git/objects/c1/a943e336cb49a9d804ce1bcbdea5b34ef06fab": "ab89d2c505d149acb196d2d198d21b99",
".git/objects/c6/3b03e37ebbb7c2784507889a03e863c39f5e53": "74e92edb6ba03fd40c30485440f15e2a",
".git/objects/c6/f12f833a07cf1ac4a77d10872957f268d2294a": "e7476e0557d460d3b5b6804928d4b0ba",
".git/objects/4e/016486914c324bfe3d16e79a26b7552277f29f": "1ba1c6845543a5a32e70d671b4f79ee9",
".git/objects/4b/38b632d2a7c79b9ed51b9324e61baa2315bffd": "ee5f015b9ae80ead5827da9983eba98e",
".git/objects/29/13265de9f24c555a8e3f7dd8785b6c098820c7": "fc99bc87f3cb0ce4936c63fba4c4ad1a",
".git/objects/16/c7b7363232b1de1cf6d0de9cd2c36dc593e113": "c127f4a472d1f4591a343ce324fea593",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/81c11e1adc73034deea4d0ca936dc64b399f25": "ea0e54fdb0ec48c201804416e22253d6",
".git/objects/80/685b0503882363f3c299671badec6f8df2657c": "3aab74f857876b9f12466eecb94b74da",
".git/objects/8f/f00b2a9bd777539e5ff165b54121a19ac2f288": "074ba8c250b1fdee952ec585a47841b8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/e9568ffc7ca833825a8155ec3a6995aa08d97c": "884e34b6bf0fd98466022e6d178be1df",
".git/objects/21/cf3b9977afe625e5fb3dc195c5a43a4cbb7fae": "2cac8d7ec622bbb22d6e7cf2fd189dee",
".git/objects/86/b92ac2898297f7bee673732ea563f1a4d9276d": "88a347d57618634d4c51cec123acb4be",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/54329709a7f83f9e7304c902dd087db5832a4e": "eb7ad3cd7610d2bfe1d6f450f30e9c35",
".git/objects/43/321e443704fe1dd0e489f75d9fab16600840df": "8356995cc2dccfcd008d9246e9ef0f9d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/8d8528c3a099fa9e52fa990cb026a888e54820": "3cf5b7f0ef9d314b4795d3856f384414",
".git/objects/00/0b10f0c617a057d1d9f3c200d5531f502828ab": "85267a4cb76f68e0ce230d0842820966",
".git/objects/36/faa304785afa517f496c8abcf4ac62895d5f4f": "009cde5bebbfdca9796fd6e97ea86c68",
".git/objects/5d/1ddd5581dacc44b2dc27e691916f4d692f916f": "46ee1d344d576efddf39e86c19e0844e",
".git/objects/65/c916cf5d3a121a615288b03658b9069ee43666": "8d9db3823d369113cbd4e6be396785b2",
".git/objects/62/e7c0c57c0d2fb520b68650e5989ca7a992d2b3": "53fac7637f7b1ee8440dca6de7e38e28",
".git/objects/96/f2034667eb2b5ac6b088913cb2c2253e2ef339": "e7df4b20efe92886ad2354b4c158a12b",
".git/objects/96/0c2fcab63050a44e5018ba5e9b755f843656c2": "6e45491bbac9b79a99763b500740edeb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/8f4ab5c38b3730d447bc5ae1a80cf8893d0a4b": "250bec86dfe2a69b0a7c4a445f1a04d1",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5b/9c8ecf8d8211f9e58154510e85347ad2df4528": "d142f8801c2c577926af8c4d9951f1a5",
".git/objects/5b/83c93644c628f43c96c8d90fa2e456fd77a7cf": "9521937725a73da69e6aeaae3b6a23a6",
".git/objects/08/7ae2ca711909c29b47d8dc72eed52fad330a3d": "1d8f05e0413406a2886d5b5ac6568211",
".git/objects/08/24c6b0d4c9049aa3d3ec9c67d7866559ad9861": "6dcca88735014d82933f6c2022a85e0e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/39/40614a41879fd8fd7a528187edab91ca54f21b": "f12d7ac7b03954631b40d1ad0a237509",
".git/objects/52/f8988c50c9fda0ae8502b3b78cd42310cca030": "fea9a479bfed5a2cb1e5798aed19729e",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/63/6094bc17946f27add73864c555b19fb9c2586a": "95999cb8cc136779e638c5aae2658fa5",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/9bf2d054bab98abaec26e859b94fc4514843b0": "346c3a96d0bfc2b0fa5c0799bcd2819e",
".git/objects/a0/300f4590b01b4ac8983a3e3e13cff6cd9f17bd": "f4e54f96f8e6ac529aa0e5292481a8e7",
".git/objects/b8/3d5d2a87daf5ce8462d71a1bb1a866da7d5c00": "33c4dc7f56c42a5f704a45dec3a75637",
".git/objects/b8/6bf687062e1c525837abf55ff4cd42235dafa2": "4cb4f28fca0c9daa974d8c9488d4cb4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d2/10708317842e24543e0156427ae717c0b90ede": "b9669fd5a77c01bdfb65d6599795982a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/7196e2169c0b7d4ecd909f1c663be5d7cc2b2d": "9f9dab99d519114ba299b84295d3d22c",
".git/objects/a8/18b4436d7a2fd346bd3752db0cc5f9e2ea45b7": "75d6a4bfc83b0beff80096cb7c5cbb35",
".git/objects/a6/8a1448eb9e2491a989207fbd194da75c04969c": "dc5f20533b98cbeb9e21459945fe19ef",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/421dbf14b98372aa8cdcfd7cf159a0317d17e6": "d61471b8ebb2df7b9561b1b1984e0b52",
".git/objects/ea/961c0162ac24a2b7b069c34b687ca529a3844e": "66c61211edb1993e1d8483077ae71121",
".git/objects/ea/50e1244733efb3fba87911eafc2c9040932ac5": "bbe0fd7e14d425e705a4f2225a0490c7",
".git/objects/cc/76bdeae2e1acaf5b3616f71e608d1933c03210": "e3ded7fb75fffeea2e072f385399161d",
".git/objects/e6/c2bb529bb52fed339b4fdd0c294b42cc12eb48": "bcfefcb6412510847aa2b43a19369791",
".git/objects/f9/49c55bfd12e0556ca8fea4ab16d8d617ae82bb": "dbf61ceefa523ab6a4be34f45c6b0877",
".git/objects/f7/2f36d6832c7d4db6eb02a739684de39c4322e6": "c59e3c7abb6f95c8ee2c793d13fde254",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/2c/8ce770b67eb4cd88504b387d7383c1e1ff067b": "d0fc71dc79fba861d7a7c88057959163",
".git/objects/2d/edf9ce08707fd02305d5b985cc76f2df768128": "79b98174a8a6b56dee75a0f3c49980b4",
".git/objects/2d/f4c3cf6a3cfb131164e9cfdfcb4302a7e30bc9": "d63667c6022b04d9c8551d0b0e428af7",
".git/objects/83/ef85cf6404f2e5e780ea9ce83bf40ece6ae2f7": "0fcf80c6881723166520d71ec9b2c710",
".git/objects/84/f4aa4dceb8f767576772fce11f7a8100491f0b": "c18269295ea271408a5550bcddad934e",
".git/objects/84/4185efe45572a1a7a711b9ad54b1ff4058c3ff": "5355e168cdf735f93dfb6a39a4cb70c3",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/b613795faf8caaa4c3f6712c32e86576794a20": "7fc6f3e0c60e1aee0a244ffa83d9e0a6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8c/0f75731b3c51971a2dde6f02ffcc4f421a4c03": "92df42d4693c2e10154082ef3012670d",
".git/objects/8c/44c78e744e297976b77e19e6ac876ae6829ad8": "c0933647ec87e85497062b80df39c835",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/9d0b0f7696614dc1fe129210fcbf00b06b8649": "18d0dafc0b557250be927f8b8949cb2f",
".git/objects/1c/43b431e5fbb4de79db0543148f5d1492fc04e4": "e3902b078d179b30f0561553c1c20999",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/74690d31bb7c481f5a23a63e76bfe1f5b60383": "84f4cc025ba8209fadf2adad837e2f6d",
".git/objects/8e/1e3b80c3dfac57f817e9fc652af97f3efc47d8": "2f7e8417b326dce946715ea21e613d6c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dfadd4dee2d0082c73edead993a979d1",
".git/logs/refs/heads/main": "26a03e8bddf86b633a7b230b2b80ffb8",
".git/logs/refs/remotes/origin/main": "d4886897e555c5ac996e42b919d4d9ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0d67afd1e443eee8d2a47dc79bcd683c",
".git/refs/remotes/origin/main": "0d67afd1e443eee8d2a47dc79bcd683c",
".git/index": "08693ae1749680bf34d96a10cd52c9cf",
".git/COMMIT_EDITMSG": "65f80fda81b97994d8acdf9dff1d5d2b",
".git/FETCH_HEAD": "b2a8ee5638ecab36506c68c4133f73e3",
"assets/profile_image.jpg": "a2d463274d161b40032f35d5c5e8937f",
"assets/projects/rhd/app_images/myRHD.png": "035e26713207de93b3539a553ec5e0d9",
"assets/projects/rhd/app_images/tickets.png": "24ed1ea3863cf61658f51193cf01eed8",
"assets/projects/rhd/app_images/splash.png": "8948d68a6e85af594bffce4e2e9071d7",
"assets/projects/rhd/app_images/dashboards.png": "bbfdb9c832ec226e1d1be042f1df9970",
"assets/projects/spark/app_images/garage_modal.png": "204acab16996e71195970ad052a1ce4c",
"assets/projects/spark/app_images/map.png": "98c278aa47eda2ba41209bdc96ecdbc2",
"assets/projects/spark/app_images/profile.png": "faff49f60ff0c52a292c95b3dca52235",
"assets/projects/spark/app_images/garage.png": "0d40becc864428104b81efc334487c27",
"assets/AssetManifest.json": "014ce5078903966594c1d8fa4c9d9e81",
"assets/NOTICES": "32c5dfc17c89489cf4dec283e9ab6c0f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "28a372f1c71cabad3b13f857ba27be79",
"assets/icons/realitykit.jpg": "5cff02d8fed0b84a32a6c6076b59e231",
"assets/icons/evergreen.jpg": "a3a931e5f291c00e43b2dfbd02f6be00",
"assets/icons/flutter.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/icons/google_maps.jpeg": "14e797b966ffda76b4eff07a28feca56",
"assets/icons/homext.jpeg": "37f54d1b224ad01059c0695a5647487a",
"assets/icons/spark.png": "5e6811ae7cee6f34504c99fa659ca0fc",
"assets/icons/firebase.png": "c9fbd6e9e7f0d8d3d46b7843c0425ad0",
"assets/icons/filemaker.png": "06609edc238e372591b872bb2467f663",
"assets/icons/google_cloud.jpg": "9104b3eab8008e47760b97f2fd6fe5af",
"assets/icons/homekit.png": "b8b287c8677eebe1f84cad8d50c37c9f",
"assets/icons/swiftui.png": "868e15ce3b534d053c3e18fb73c65d6d",
"assets/icons/rhd.png": "e95b033eb19209ec760ea3dae65e4a37",
"assets/icons/mapkit.jpg": "ec9304091c739e1eaf98d03e405d32f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4b838227af759d1fa1080b37c7f5be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d9602df7b7c223e3bb2ee39f9cae3ebf",
"assets/fonts/MaterialIcons-Regular.otf": "6f6be7425d0535076b9c6100c34eb1ce",
"assets/assets/profile_image.jpg": "a2d463274d161b40032f35d5c5e8937f",
"assets/assets/projects/rhd/app_images/myRHD.png": "035e26713207de93b3539a553ec5e0d9",
"assets/assets/projects/rhd/app_images/Group%25202.png": "8e4aa0930244806468934f1be96856f1",
"assets/assets/projects/rhd/app_images/tickets.png": "24ed1ea3863cf61658f51193cf01eed8",
"assets/assets/projects/rhd/app_images/splash.png": "8948d68a6e85af594bffce4e2e9071d7",
"assets/assets/projects/rhd/app_images/dashboards.png": "bbfdb9c832ec226e1d1be042f1df9970",
"assets/assets/projects/spark/app_images/garage_modal.png": "204acab16996e71195970ad052a1ce4c",
"assets/assets/projects/spark/app_images/map.png": "98c278aa47eda2ba41209bdc96ecdbc2",
"assets/assets/projects/spark/app_images/profile.png": "faff49f60ff0c52a292c95b3dca52235",
"assets/assets/projects/spark/app_images/garage.png": "0d40becc864428104b81efc334487c27",
"assets/assets/icons/realitykit.jpg": "5cff02d8fed0b84a32a6c6076b59e231",
"assets/assets/icons/evergreen.jpg": "a3a931e5f291c00e43b2dfbd02f6be00",
"assets/assets/icons/flutter.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/assets/icons/homext.jpeg": "37f54d1b224ad01059c0695a5647487a",
"assets/assets/icons/spark.png": "5e6811ae7cee6f34504c99fa659ca0fc",
"assets/assets/icons/firebase.png": "c9fbd6e9e7f0d8d3d46b7843c0425ad0",
"assets/assets/icons/google_cloud.jpg": "9104b3eab8008e47760b97f2fd6fe5af",
"assets/assets/icons/homekit.png": "b8b287c8677eebe1f84cad8d50c37c9f",
"assets/assets/icons/swiftui.png": "868e15ce3b534d053c3e18fb73c65d6d",
"assets/assets/icons/rhd.png": "e95b033eb19209ec760ea3dae65e4a37",
"assets/assets/cv.pdf": "c24eb3813ded96a9834fa096b1b9cfdf",
"assets/cv.pdf": "c24eb3813ded96a9834fa096b1b9cfdf",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
