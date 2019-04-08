/*File generated with ../scripts/unicode.js using ../resources/Unicode/UnicodeData.txt.
  * As Java Identifiers may contains unicodes letters, this file defines two sets of unicode
  * characters, firstIdentChar used to help to determine if a character can be the first letter
  * of a JavaIdentifier and the other one (restIdentChar) to determine if it can be part of a
  * JavaIdentifier other than the first character.
  * Java uses the same file UnicodeData.txt as the unicode.js script to define the unicodes.
  * For more:
  *   https://github.com/jhipster/prettier-java/issues/116
  *   https://github.com/jhipster/prettier-java/pull/155
  */
"use strict";
const addRanges = (set, rangesArr) => {
  for (let i = 0; i < rangesArr.length; i++) {
    const range = rangesArr[i];
    const start = range[0];
    const end = range[1];
    for (let codePoint = start; codePoint <= end; codePoint++) {
      set.add(codePoint);
    }
  }
};
const fic = new Set([
  181,
  257,
  259,
  261,
  263,
  265,
  267,
  269,
  271,
  273,
  275,
  277,
  279,
  281,
  283,
  285,
  287,
  289,
  291,
  293,
  295,
  297,
  299,
  301,
  303,
  305,
  307,
  309,
  314,
  316,
  318,
  320,
  322,
  324,
  326,
  331,
  333,
  335,
  337,
  339,
  341,
  343,
  345,
  347,
  349,
  351,
  353,
  355,
  357,
  359,
  361,
  363,
  365,
  367,
  369,
  371,
  373,
  375,
  378,
  380,
  387,
  389,
  392,
  402,
  405,
  414,
  417,
  419,
  421,
  424,
  429,
  432,
  436,
  438,
  454,
  457,
  460,
  462,
  464,
  466,
  468,
  470,
  472,
  474,
  479,
  481,
  483,
  485,
  487,
  489,
  491,
  493,
  499,
  501,
  505,
  507,
  509,
  511,
  513,
  515,
  517,
  519,
  521,
  523,
  525,
  527,
  529,
  531,
  533,
  535,
  537,
  539,
  541,
  543,
  545,
  547,
  549,
  551,
  553,
  555,
  557,
  559,
  561,
  572,
  578,
  583,
  585,
  587,
  589,
  881,
  883,
  887,
  912,
  985,
  987,
  989,
  991,
  993,
  995,
  997,
  999,
  1001,
  1003,
  1005,
  1013,
  1016,
  1121,
  1123,
  1125,
  1127,
  1129,
  1131,
  1133,
  1135,
  1137,
  1139,
  1141,
  1143,
  1145,
  1147,
  1149,
  1151,
  1153,
  1163,
  1165,
  1167,
  1169,
  1171,
  1173,
  1175,
  1177,
  1179,
  1181,
  1183,
  1185,
  1187,
  1189,
  1191,
  1193,
  1195,
  1197,
  1199,
  1201,
  1203,
  1205,
  1207,
  1209,
  1211,
  1213,
  1215,
  1218,
  1220,
  1222,
  1224,
  1226,
  1228,
  1233,
  1235,
  1237,
  1239,
  1241,
  1243,
  1245,
  1247,
  1249,
  1251,
  1253,
  1255,
  1257,
  1259,
  1261,
  1263,
  1265,
  1267,
  1269,
  1271,
  1273,
  1275,
  1277,
  1279,
  1281,
  1283,
  1285,
  1287,
  1289,
  1291,
  1293,
  1295,
  1297,
  1299,
  1301,
  1303,
  1305,
  1307,
  1309,
  1311,
  1313,
  1315,
  1317,
  1319,
  1321,
  1323,
  1325,
  1327,
  7681,
  7683,
  7685,
  7687,
  7689,
  7691,
  7693,
  7695,
  7697,
  7699,
  7701,
  7703,
  7705,
  7707,
  7709,
  7711,
  7713,
  7715,
  7717,
  7719,
  7721,
  7723,
  7725,
  7727,
  7729,
  7731,
  7733,
  7735,
  7737,
  7739,
  7741,
  7743,
  7745,
  7747,
  7749,
  7751,
  7753,
  7755,
  7757,
  7759,
  7761,
  7763,
  7765,
  7767,
  7769,
  7771,
  7773,
  7775,
  7777,
  7779,
  7781,
  7783,
  7785,
  7787,
  7789,
  7791,
  7793,
  7795,
  7797,
  7799,
  7801,
  7803,
  7805,
  7807,
  7809,
  7811,
  7813,
  7815,
  7817,
  7819,
  7821,
  7823,
  7825,
  7827,
  7839,
  7841,
  7843,
  7845,
  7847,
  7849,
  7851,
  7853,
  7855,
  7857,
  7859,
  7861,
  7863,
  7865,
  7867,
  7869,
  7871,
  7873,
  7875,
  7877,
  7879,
  7881,
  7883,
  7885,
  7887,
  7889,
  7891,
  7893,
  7895,
  7897,
  7899,
  7901,
  7903,
  7905,
  7907,
  7909,
  7911,
  7913,
  7915,
  7917,
  7919,
  7921,
  7923,
  7925,
  7927,
  7929,
  7931,
  7933,
  8126,
  8458,
  8467,
  8495,
  8500,
  8505,
  8526,
  8580,
  11361,
  11368,
  11370,
  11372,
  11377,
  11393,
  11395,
  11397,
  11399,
  11401,
  11403,
  11405,
  11407,
  11409,
  11411,
  11413,
  11415,
  11417,
  11419,
  11421,
  11423,
  11425,
  11427,
  11429,
  11431,
  11433,
  11435,
  11437,
  11439,
  11441,
  11443,
  11445,
  11447,
  11449,
  11451,
  11453,
  11455,
  11457,
  11459,
  11461,
  11463,
  11465,
  11467,
  11469,
  11471,
  11473,
  11475,
  11477,
  11479,
  11481,
  11483,
  11485,
  11487,
  11489,
  11500,
  11502,
  11507,
  11559,
  11565,
  42561,
  42563,
  42565,
  42567,
  42569,
  42571,
  42573,
  42575,
  42577,
  42579,
  42581,
  42583,
  42585,
  42587,
  42589,
  42591,
  42593,
  42595,
  42597,
  42599,
  42601,
  42603,
  42605,
  42625,
  42627,
  42629,
  42631,
  42633,
  42635,
  42637,
  42639,
  42641,
  42643,
  42645,
  42647,
  42649,
  42651,
  42787,
  42789,
  42791,
  42793,
  42795,
  42797,
  42803,
  42805,
  42807,
  42809,
  42811,
  42813,
  42815,
  42817,
  42819,
  42821,
  42823,
  42825,
  42827,
  42829,
  42831,
  42833,
  42835,
  42837,
  42839,
  42841,
  42843,
  42845,
  42847,
  42849,
  42851,
  42853,
  42855,
  42857,
  42859,
  42861,
  42863,
  42874,
  42876,
  42879,
  42881,
  42883,
  42885,
  42887,
  42892,
  42894,
  42897,
  42903,
  42905,
  42907,
  42909,
  42911,
  42913,
  42915,
  42917,
  42919,
  42921,
  42927,
  42933,
  42935,
  42937,
  42939,
  42941,
  42943,
  42947,
  43002,
  119995,
  120779,
  748,
  750,
  884,
  890,
  1369,
  1600,
  2042,
  2074,
  2084,
  2088,
  2417,
  3654,
  3782,
  4348,
  6103,
  6211,
  6823,
  7544,
  8305,
  8319,
  11631,
  11823,
  12293,
  12347,
  40981,
  42508,
  42623,
  42864,
  42888,
  43471,
  43494,
  43632,
  43741,
  65392,
  94179,
  125259,
  170,
  186,
  443,
  660,
  1749,
  1791,
  1808,
  1969,
  2365,
  2384,
  2482,
  2493,
  2510,
  2556,
  2654,
  2749,
  2768,
  2809,
  2877,
  2929,
  2947,
  2972,
  3024,
  3133,
  3200,
  3261,
  3294,
  3389,
  3406,
  3517,
  3716,
  3749,
  3773,
  3840,
  4159,
  4193,
  4238,
  4696,
  4800,
  6108,
  6314,
  7418,
  12294,
  12348,
  12447,
  12543,
  13312,
  19968,
  42606,
  42895,
  42999,
  43259,
  43642,
  43697,
  43712,
  43714,
  43762,
  44032,
  64285,
  64318,
  67592,
  67644,
  68096,
  69415,
  69956,
  70006,
  70106,
  70108,
  70280,
  70461,
  70480,
  70751,
  70855,
  71236,
  71352,
  71935,
  72161,
  72163,
  72192,
  72250,
  72272,
  72349,
  72768,
  73030,
  73112,
  94032,
  94208,
  123214,
  126500,
  126503,
  126521,
  126523,
  126530,
  126535,
  126537,
  126539,
  126548,
  126551,
  126553,
  126555,
  126557,
  126559,
  126564,
  126590,
  131072,
  173824,
  177984,
  178208,
  183984,
  453,
  456,
  459,
  498,
  8124,
  8140,
  8188,
  256,
  258,
  260,
  262,
  264,
  266,
  268,
  270,
  272,
  274,
  276,
  278,
  280,
  282,
  284,
  286,
  288,
  290,
  292,
  294,
  296,
  298,
  300,
  302,
  304,
  306,
  308,
  310,
  313,
  315,
  317,
  319,
  321,
  323,
  325,
  327,
  330,
  332,
  334,
  336,
  338,
  340,
  342,
  344,
  346,
  348,
  350,
  352,
  354,
  356,
  358,
  360,
  362,
  364,
  366,
  368,
  370,
  372,
  374,
  379,
  381,
  388,
  418,
  420,
  425,
  428,
  437,
  444,
  452,
  455,
  458,
  461,
  463,
  465,
  467,
  469,
  471,
  473,
  475,
  478,
  480,
  482,
  484,
  486,
  488,
  490,
  492,
  494,
  497,
  500,
  506,
  508,
  510,
  512,
  514,
  516,
  518,
  520,
  522,
  524,
  526,
  528,
  530,
  532,
  534,
  536,
  538,
  540,
  542,
  544,
  546,
  548,
  550,
  552,
  554,
  556,
  558,
  560,
  562,
  577,
  584,
  586,
  588,
  590,
  880,
  882,
  886,
  895,
  902,
  908,
  975,
  984,
  986,
  988,
  990,
  992,
  994,
  996,
  998,
  1000,
  1002,
  1004,
  1006,
  1012,
  1015,
  1120,
  1122,
  1124,
  1126,
  1128,
  1130,
  1132,
  1134,
  1136,
  1138,
  1140,
  1142,
  1144,
  1146,
  1148,
  1150,
  1152,
  1162,
  1164,
  1166,
  1168,
  1170,
  1172,
  1174,
  1176,
  1178,
  1180,
  1182,
  1184,
  1186,
  1188,
  1190,
  1192,
  1194,
  1196,
  1198,
  1200,
  1202,
  1204,
  1206,
  1208,
  1210,
  1212,
  1214,
  1219,
  1221,
  1223,
  1225,
  1227,
  1229,
  1232,
  1234,
  1236,
  1238,
  1240,
  1242,
  1244,
  1246,
  1248,
  1250,
  1252,
  1254,
  1256,
  1258,
  1260,
  1262,
  1264,
  1266,
  1268,
  1270,
  1272,
  1274,
  1276,
  1278,
  1280,
  1282,
  1284,
  1286,
  1288,
  1290,
  1292,
  1294,
  1296,
  1298,
  1300,
  1302,
  1304,
  1306,
  1308,
  1310,
  1312,
  1314,
  1316,
  1318,
  1320,
  1322,
  1324,
  1326,
  4295,
  4301,
  7680,
  7682,
  7684,
  7686,
  7688,
  7690,
  7692,
  7694,
  7696,
  7698,
  7700,
  7702,
  7704,
  7706,
  7708,
  7710,
  7712,
  7714,
  7716,
  7718,
  7720,
  7722,
  7724,
  7726,
  7728,
  7730,
  7732,
  7734,
  7736,
  7738,
  7740,
  7742,
  7744,
  7746,
  7748,
  7750,
  7752,
  7754,
  7756,
  7758,
  7760,
  7762,
  7764,
  7766,
  7768,
  7770,
  7772,
  7774,
  7776,
  7778,
  7780,
  7782,
  7784,
  7786,
  7788,
  7790,
  7792,
  7794,
  7796,
  7798,
  7800,
  7802,
  7804,
  7806,
  7808,
  7810,
  7812,
  7814,
  7816,
  7818,
  7820,
  7822,
  7824,
  7826,
  7828,
  7838,
  7840,
  7842,
  7844,
  7846,
  7848,
  7850,
  7852,
  7854,
  7856,
  7858,
  7860,
  7862,
  7864,
  7866,
  7868,
  7870,
  7872,
  7874,
  7876,
  7878,
  7880,
  7882,
  7884,
  7886,
  7888,
  7890,
  7892,
  7894,
  7896,
  7898,
  7900,
  7902,
  7904,
  7906,
  7908,
  7910,
  7912,
  7914,
  7916,
  7918,
  7920,
  7922,
  7924,
  7926,
  7928,
  7930,
  7932,
  7934,
  8025,
  8027,
  8029,
  8031,
  8450,
  8455,
  8469,
  8484,
  8486,
  8488,
  8517,
  8579,
  11360,
  11367,
  11369,
  11371,
  11378,
  11381,
  11394,
  11396,
  11398,
  11400,
  11402,
  11404,
  11406,
  11408,
  11410,
  11412,
  11414,
  11416,
  11418,
  11420,
  11422,
  11424,
  11426,
  11428,
  11430,
  11432,
  11434,
  11436,
  11438,
  11440,
  11442,
  11444,
  11446,
  11448,
  11450,
  11452,
  11454,
  11456,
  11458,
  11460,
  11462,
  11464,
  11466,
  11468,
  11470,
  11472,
  11474,
  11476,
  11478,
  11480,
  11482,
  11484,
  11486,
  11488,
  11490,
  11499,
  11501,
  11506,
  42560,
  42562,
  42564,
  42566,
  42568,
  42570,
  42572,
  42574,
  42576,
  42578,
  42580,
  42582,
  42584,
  42586,
  42588,
  42590,
  42592,
  42594,
  42596,
  42598,
  42600,
  42602,
  42604,
  42624,
  42626,
  42628,
  42630,
  42632,
  42634,
  42636,
  42638,
  42640,
  42642,
  42644,
  42646,
  42648,
  42650,
  42786,
  42788,
  42790,
  42792,
  42794,
  42796,
  42798,
  42802,
  42804,
  42806,
  42808,
  42810,
  42812,
  42814,
  42816,
  42818,
  42820,
  42822,
  42824,
  42826,
  42828,
  42830,
  42832,
  42834,
  42836,
  42838,
  42840,
  42842,
  42844,
  42846,
  42848,
  42850,
  42852,
  42854,
  42856,
  42858,
  42860,
  42862,
  42873,
  42875,
  42880,
  42882,
  42884,
  42886,
  42891,
  42893,
  42896,
  42898,
  42902,
  42904,
  42906,
  42908,
  42910,
  42912,
  42914,
  42916,
  42918,
  42920,
  42934,
  42936,
  42938,
  42940,
  42942,
  42946,
  119964,
  119970,
  120134,
  120778,
  12295,
  66369,
  66378,
  36,
  1423,
  1547,
  2555,
  2801,
  3065,
  3647,
  6107,
  43064,
  65020,
  65129,
  65284,
  123647,
  126128,
  95,
  8276,
  65343
]);
const fic_a = [
  [97, 122],
  [223, 246],
  [248, 255],
  [311, 312],
  [328, 329],
  [382, 384],
  [396, 397],
  [409, 411],
  [426, 427],
  [441, 442],
  [445, 447],
  [476, 477],
  [495, 496],
  [563, 569],
  [575, 576],
  [591, 659],
  [661, 687],
  [891, 893],
  [940, 974],
  [976, 977],
  [981, 983],
  [1007, 1011],
  [1019, 1020],
  [1072, 1119],
  [1230, 1231],
  [1376, 1416],
  [4304, 4346],
  [4349, 4351],
  [5112, 5117],
  [7296, 7304],
  [7424, 7467],
  [7531, 7543],
  [7545, 7578],
  [7829, 7837],
  [7935, 7943],
  [7952, 7957],
  [7968, 7975],
  [7984, 7991],
  [8000, 8005],
  [8016, 8023],
  [8032, 8039],
  [8048, 8061],
  [8064, 8071],
  [8080, 8087],
  [8096, 8103],
  [8112, 8116],
  [8118, 8119],
  [8130, 8132],
  [8134, 8135],
  [8144, 8147],
  [8150, 8151],
  [8160, 8167],
  [8178, 8180],
  [8182, 8183],
  [8462, 8463],
  [8508, 8509],
  [8518, 8521],
  [11312, 11358],
  [11365, 11366],
  [11379, 11380],
  [11382, 11387],
  [11491, 11492],
  [11520, 11557],
  [42799, 42801],
  [42865, 42872],
  [42899, 42901],
  [43824, 43866],
  [43872, 43879],
  [43888, 43967],
  [64256, 64262],
  [64275, 64279],
  [65345, 65370],
  [66600, 66639],
  [66776, 66811],
  [68800, 68850],
  [71872, 71903],
  [93792, 93823],
  [119834, 119859],
  [119886, 119892],
  [119894, 119911],
  [119938, 119963],
  [119990, 119993],
  [119997, 120003],
  [120005, 120015],
  [120042, 120067],
  [120094, 120119],
  [120146, 120171],
  [120198, 120223],
  [120250, 120275],
  [120302, 120327],
  [120354, 120379],
  [120406, 120431],
  [120458, 120485],
  [120514, 120538],
  [120540, 120545],
  [120572, 120596],
  [120598, 120603],
  [120630, 120654],
  [120656, 120661],
  [120688, 120712],
  [120714, 120719],
  [120746, 120770],
  [120772, 120777],
  [125218, 125251],
  [688, 705],
  [710, 721],
  [736, 740],
  [1765, 1766],
  [2036, 2037],
  [7288, 7293],
  [7468, 7530],
  [7579, 7615],
  [8336, 8348],
  [11388, 11389],
  [12337, 12341],
  [12445, 12446],
  [12540, 12542],
  [42232, 42237],
  [42652, 42653],
  [42775, 42783],
  [43000, 43001],
  [43763, 43764],
  [43868, 43871],
  [65438, 65439],
  [92992, 92995],
  [94099, 94111],
  [94176, 94177],
  [123191, 123197],
  [13313, 19893],
  [19969, 40943],
  [44033, 55203],
  [94209, 100343],
  [131073, 173782],
  [173825, 177972],
  [177985, 178205],
  [178209, 183969],
  [183985, 191456],
  [448, 451],
  [1488, 1514],
  [1519, 1522],
  [1568, 1599],
  [1601, 1610],
  [1646, 1647],
  [1649, 1747],
  [1774, 1775],
  [1786, 1788],
  [1810, 1839],
  [1869, 1957],
  [1994, 2026],
  [2048, 2069],
  [2112, 2136],
  [2144, 2154],
  [2208, 2228],
  [2230, 2237],
  [2308, 2361],
  [2392, 2401],
  [2418, 2432],
  [2437, 2444],
  [2447, 2448],
  [2451, 2472],
  [2474, 2480],
  [2486, 2489],
  [2524, 2525],
  [2527, 2529],
  [2544, 2545],
  [2565, 2570],
  [2575, 2576],
  [2579, 2600],
  [2602, 2608],
  [2610, 2611],
  [2613, 2614],
  [2616, 2617],
  [2649, 2652],
  [2674, 2676],
  [2693, 2701],
  [2703, 2705],
  [2707, 2728],
  [2730, 2736],
  [2738, 2739],
  [2741, 2745],
  [2784, 2785],
  [2821, 2828],
  [2831, 2832],
  [2835, 2856],
  [2858, 2864],
  [2866, 2867],
  [2869, 2873],
  [2908, 2909],
  [2911, 2913],
  [2949, 2954],
  [2958, 2960],
  [2962, 2965],
  [2969, 2970],
  [2974, 2975],
  [2979, 2980],
  [2984, 2986],
  [2990, 3001],
  [3077, 3084],
  [3086, 3088],
  [3090, 3112],
  [3114, 3129],
  [3160, 3162],
  [3168, 3169],
  [3205, 3212],
  [3214, 3216],
  [3218, 3240],
  [3242, 3251],
  [3253, 3257],
  [3296, 3297],
  [3313, 3314],
  [3333, 3340],
  [3342, 3344],
  [3346, 3386],
  [3412, 3414],
  [3423, 3425],
  [3450, 3455],
  [3461, 3478],
  [3482, 3505],
  [3507, 3515],
  [3520, 3526],
  [3585, 3632],
  [3634, 3635],
  [3648, 3653],
  [3713, 3714],
  [3718, 3722],
  [3724, 3747],
  [3751, 3760],
  [3762, 3763],
  [3776, 3780],
  [3804, 3807],
  [3904, 3911],
  [3913, 3948],
  [3976, 3980],
  [4096, 4138],
  [4176, 4181],
  [4186, 4189],
  [4197, 4198],
  [4206, 4208],
  [4213, 4225],
  [4352, 4680],
  [4682, 4685],
  [4688, 4694],
  [4698, 4701],
  [4704, 4744],
  [4746, 4749],
  [4752, 4784],
  [4786, 4789],
  [4792, 4798],
  [4802, 4805],
  [4808, 4822],
  [4824, 4880],
  [4882, 4885],
  [4888, 4954],
  [4992, 5007],
  [5121, 5740],
  [5743, 5759],
  [5761, 5786],
  [5792, 5866],
  [5873, 5880],
  [5888, 5900],
  [5902, 5905],
  [5920, 5937],
  [5952, 5969],
  [5984, 5996],
  [5998, 6000],
  [6016, 6067],
  [6176, 6210],
  [6212, 6264],
  [6272, 6276],
  [6279, 6312],
  [6320, 6389],
  [6400, 6430],
  [6480, 6509],
  [6512, 6516],
  [6528, 6571],
  [6576, 6601],
  [6656, 6678],
  [6688, 6740],
  [6917, 6963],
  [6981, 6987],
  [7043, 7072],
  [7086, 7087],
  [7098, 7141],
  [7168, 7203],
  [7245, 7247],
  [7258, 7287],
  [7401, 7404],
  [7406, 7411],
  [7413, 7414],
  [8501, 8504],
  [11568, 11623],
  [11648, 11670],
  [11680, 11686],
  [11688, 11694],
  [11696, 11702],
  [11704, 11710],
  [11712, 11718],
  [11720, 11726],
  [11728, 11734],
  [11736, 11742],
  [12353, 12438],
  [12449, 12538],
  [12549, 12591],
  [12593, 12686],
  [12704, 12730],
  [12784, 12799],
  [40960, 40980],
  [40982, 42124],
  [42192, 42231],
  [42240, 42507],
  [42512, 42527],
  [42538, 42539],
  [42656, 42725],
  [43003, 43009],
  [43011, 43013],
  [43015, 43018],
  [43020, 43042],
  [43072, 43123],
  [43138, 43187],
  [43250, 43255],
  [43261, 43262],
  [43274, 43301],
  [43312, 43334],
  [43360, 43388],
  [43396, 43442],
  [43488, 43492],
  [43495, 43503],
  [43514, 43518],
  [43520, 43560],
  [43584, 43586],
  [43588, 43595],
  [43616, 43631],
  [43633, 43638],
  [43646, 43695],
  [43701, 43702],
  [43705, 43709],
  [43739, 43740],
  [43744, 43754],
  [43777, 43782],
  [43785, 43790],
  [43793, 43798],
  [43808, 43814],
  [43816, 43822],
  [43968, 44002],
  [55216, 55238],
  [55243, 55291],
  [63744, 64109],
  [64112, 64217],
  [64287, 64296],
  [64298, 64310],
  [64312, 64316],
  [64320, 64321],
  [64323, 64324],
  [64326, 64433],
  [64467, 64829],
  [64848, 64911],
  [64914, 64967],
  [65008, 65019],
  [65136, 65140],
  [65142, 65276],
  [65382, 65391],
  [65393, 65437],
  [65440, 65470],
  [65474, 65479],
  [65482, 65487],
  [65490, 65495],
  [65498, 65500],
  [65536, 65547],
  [65549, 65574],
  [65576, 65594],
  [65596, 65597],
  [65599, 65613],
  [65616, 65629],
  [65664, 65786],
  [66176, 66204],
  [66208, 66256],
  [66304, 66335],
  [66349, 66368],
  [66370, 66377],
  [66384, 66421],
  [66432, 66461],
  [66464, 66499],
  [66504, 66511],
  [66640, 66717],
  [66816, 66855],
  [66864, 66915],
  [67072, 67382],
  [67392, 67413],
  [67424, 67431],
  [67584, 67589],
  [67594, 67637],
  [67639, 67640],
  [67647, 67669],
  [67680, 67702],
  [67712, 67742],
  [67808, 67826],
  [67828, 67829],
  [67840, 67861],
  [67872, 67897],
  [67968, 68023],
  [68030, 68031],
  [68112, 68115],
  [68117, 68119],
  [68121, 68149],
  [68192, 68220],
  [68224, 68252],
  [68288, 68295],
  [68297, 68324],
  [68352, 68405],
  [68416, 68437],
  [68448, 68466],
  [68480, 68497],
  [68608, 68680],
  [68864, 68899],
  [69376, 69404],
  [69424, 69445],
  [69600, 69622],
  [69635, 69687],
  [69763, 69807],
  [69840, 69864],
  [69891, 69926],
  [69968, 70002],
  [70019, 70066],
  [70081, 70084],
  [70144, 70161],
  [70163, 70187],
  [70272, 70278],
  [70282, 70285],
  [70287, 70301],
  [70303, 70312],
  [70320, 70366],
  [70405, 70412],
  [70415, 70416],
  [70419, 70440],
  [70442, 70448],
  [70450, 70451],
  [70453, 70457],
  [70493, 70497],
  [70656, 70708],
  [70727, 70730],
  [70784, 70831],
  [70852, 70853],
  [71040, 71086],
  [71128, 71131],
  [71168, 71215],
  [71296, 71338],
  [71424, 71450],
  [71680, 71723],
  [72096, 72103],
  [72106, 72144],
  [72203, 72242],
  [72284, 72329],
  [72384, 72440],
  [72704, 72712],
  [72714, 72750],
  [72818, 72847],
  [72960, 72966],
  [72968, 72969],
  [72971, 73008],
  [73056, 73061],
  [73063, 73064],
  [73066, 73097],
  [73440, 73458],
  [73728, 74649],
  [74880, 75075],
  [77824, 78894],
  [82944, 83526],
  [92160, 92728],
  [92736, 92766],
  [92880, 92909],
  [92928, 92975],
  [93027, 93047],
  [93053, 93071],
  [93952, 94026],
  [100352, 101106],
  [110592, 110878],
  [110928, 110930],
  [110948, 110951],
  [110960, 111355],
  [113664, 113770],
  [113776, 113788],
  [113792, 113800],
  [113808, 113817],
  [123136, 123180],
  [123584, 123627],
  [124928, 125124],
  [126464, 126467],
  [126469, 126495],
  [126497, 126498],
  [126505, 126514],
  [126516, 126519],
  [126541, 126543],
  [126545, 126546],
  [126561, 126562],
  [126567, 126570],
  [126572, 126578],
  [126580, 126583],
  [126585, 126588],
  [126592, 126601],
  [126603, 126619],
  [126625, 126627],
  [126629, 126633],
  [126635, 126651],
  [194560, 195101],
  [8072, 8079],
  [8088, 8095],
  [8104, 8111],
  [65, 90],
  [192, 214],
  [216, 222],
  [376, 377],
  [385, 386],
  [390, 391],
  [393, 395],
  [398, 401],
  [403, 404],
  [406, 408],
  [412, 413],
  [415, 416],
  [422, 423],
  [430, 431],
  [433, 435],
  [439, 440],
  [502, 504],
  [570, 571],
  [573, 574],
  [579, 582],
  [904, 906],
  [910, 911],
  [913, 929],
  [931, 939],
  [978, 980],
  [1017, 1018],
  [1021, 1071],
  [1216, 1217],
  [1329, 1366],
  [4256, 4293],
  [5024, 5109],
  [7312, 7354],
  [7357, 7359],
  [7944, 7951],
  [7960, 7965],
  [7976, 7983],
  [7992, 7999],
  [8008, 8013],
  [8040, 8047],
  [8120, 8123],
  [8136, 8139],
  [8152, 8155],
  [8168, 8172],
  [8184, 8187],
  [8459, 8461],
  [8464, 8466],
  [8473, 8477],
  [8490, 8493],
  [8496, 8499],
  [8510, 8511],
  [11264, 11310],
  [11362, 11364],
  [11373, 11376],
  [11390, 11392],
  [42877, 42878],
  [42922, 42926],
  [42928, 42932],
  [42948, 42950],
  [65313, 65338],
  [66560, 66599],
  [66736, 66771],
  [68736, 68786],
  [71840, 71871],
  [93760, 93791],
  [119808, 119833],
  [119860, 119885],
  [119912, 119937],
  [119966, 119967],
  [119973, 119974],
  [119977, 119980],
  [119982, 119989],
  [120016, 120041],
  [120068, 120069],
  [120071, 120074],
  [120077, 120084],
  [120086, 120092],
  [120120, 120121],
  [120123, 120126],
  [120128, 120132],
  [120138, 120144],
  [120172, 120197],
  [120224, 120249],
  [120276, 120301],
  [120328, 120353],
  [120380, 120405],
  [120432, 120457],
  [120488, 120512],
  [120546, 120570],
  [120604, 120628],
  [120662, 120686],
  [120720, 120744],
  [125184, 125217],
  [5870, 5872],
  [8544, 8578],
  [8581, 8584],
  [12321, 12329],
  [12344, 12346],
  [42726, 42735],
  [65856, 65908],
  [66513, 66517],
  [74752, 74862],
  [162, 165],
  [2046, 2047],
  [2546, 2547],
  [8352, 8383],
  [65504, 65505],
  [65509, 65510],
  [73693, 73696],
  [8255, 8256],
  [65075, 65076],
  [65101, 65103]
];
addRanges(fic, fic_a);
const ricd = new Set([
  1471,
  1479,
  1648,
  1809,
  2045,
  2362,
  2364,
  2381,
  2433,
  2492,
  2509,
  2558,
  2620,
  2641,
  2677,
  2748,
  2765,
  2817,
  2876,
  2879,
  2893,
  2902,
  2946,
  3008,
  3021,
  3072,
  3076,
  3201,
  3260,
  3263,
  3270,
  3405,
  3530,
  3542,
  3633,
  3761,
  3893,
  3895,
  3897,
  4038,
  4226,
  4237,
  4253,
  6086,
  6109,
  6313,
  6450,
  6683,
  6742,
  6752,
  6754,
  6783,
  6964,
  6972,
  6978,
  7142,
  7149,
  7405,
  7412,
  8417,
  11647,
  42607,
  43010,
  43014,
  43019,
  43263,
  43443,
  43493,
  43587,
  43596,
  43644,
  43696,
  43713,
  43766,
  44005,
  44008,
  44013,
  64286,
  66045,
  66272,
  68159,
  69633,
  70003,
  70196,
  70206,
  70367,
  70464,
  70726,
  70750,
  70842,
  71229,
  71339,
  71341,
  71351,
  72160,
  72263,
  72767,
  73018,
  73031,
  73109,
  73111,
  94031,
  121461,
  121476,
  173,
  1564,
  1757,
  1807,
  2274,
  6158,
  65279,
  69821,
  69837,
  917505
]);
const ricd_a = [
  [768, 879],
  [1155, 1159],
  [1425, 1469],
  [1473, 1474],
  [1476, 1477],
  [1552, 1562],
  [1611, 1631],
  [1750, 1756],
  [1759, 1764],
  [1767, 1768],
  [1770, 1773],
  [1840, 1866],
  [1958, 1968],
  [2027, 2035],
  [2070, 2073],
  [2075, 2083],
  [2085, 2087],
  [2089, 2093],
  [2137, 2139],
  [2259, 2273],
  [2275, 2306],
  [2369, 2376],
  [2385, 2391],
  [2402, 2403],
  [2497, 2500],
  [2530, 2531],
  [2561, 2562],
  [2625, 2626],
  [2631, 2632],
  [2635, 2637],
  [2672, 2673],
  [2689, 2690],
  [2753, 2757],
  [2759, 2760],
  [2786, 2787],
  [2810, 2815],
  [2881, 2884],
  [2914, 2915],
  [3134, 3136],
  [3142, 3144],
  [3146, 3149],
  [3157, 3158],
  [3170, 3171],
  [3276, 3277],
  [3298, 3299],
  [3328, 3329],
  [3387, 3388],
  [3393, 3396],
  [3426, 3427],
  [3538, 3540],
  [3636, 3642],
  [3655, 3662],
  [3764, 3772],
  [3784, 3789],
  [3864, 3865],
  [3953, 3966],
  [3968, 3972],
  [3974, 3975],
  [3981, 3991],
  [3993, 4028],
  [4141, 4144],
  [4146, 4151],
  [4153, 4154],
  [4157, 4158],
  [4184, 4185],
  [4190, 4192],
  [4209, 4212],
  [4229, 4230],
  [4957, 4959],
  [5906, 5908],
  [5938, 5940],
  [5970, 5971],
  [6002, 6003],
  [6068, 6069],
  [6071, 6077],
  [6089, 6099],
  [6155, 6157],
  [6277, 6278],
  [6432, 6434],
  [6439, 6440],
  [6457, 6459],
  [6679, 6680],
  [6744, 6750],
  [6757, 6764],
  [6771, 6780],
  [6832, 6845],
  [6912, 6915],
  [6966, 6970],
  [7019, 7027],
  [7040, 7041],
  [7074, 7077],
  [7080, 7081],
  [7083, 7085],
  [7144, 7145],
  [7151, 7153],
  [7212, 7219],
  [7222, 7223],
  [7376, 7378],
  [7380, 7392],
  [7394, 7400],
  [7416, 7417],
  [7616, 7673],
  [7675, 7679],
  [8400, 8412],
  [8421, 8432],
  [11503, 11505],
  [11744, 11775],
  [12330, 12333],
  [12441, 12442],
  [42612, 42621],
  [42654, 42655],
  [42736, 42737],
  [43045, 43046],
  [43204, 43205],
  [43232, 43249],
  [43302, 43309],
  [43335, 43345],
  [43392, 43394],
  [43446, 43449],
  [43452, 43453],
  [43561, 43566],
  [43569, 43570],
  [43573, 43574],
  [43698, 43700],
  [43703, 43704],
  [43710, 43711],
  [43756, 43757],
  [65024, 65039],
  [65056, 65071],
  [66422, 66426],
  [68097, 68099],
  [68101, 68102],
  [68108, 68111],
  [68152, 68154],
  [68325, 68326],
  [68900, 68903],
  [69446, 69456],
  [69688, 69702],
  [69759, 69761],
  [69811, 69814],
  [69817, 69818],
  [69888, 69890],
  [69927, 69931],
  [69933, 69940],
  [70016, 70017],
  [70070, 70078],
  [70089, 70092],
  [70191, 70193],
  [70198, 70199],
  [70371, 70378],
  [70400, 70401],
  [70459, 70460],
  [70502, 70508],
  [70512, 70516],
  [70712, 70719],
  [70722, 70724],
  [70835, 70840],
  [70847, 70848],
  [70850, 70851],
  [71090, 71093],
  [71100, 71101],
  [71103, 71104],
  [71132, 71133],
  [71219, 71226],
  [71231, 71232],
  [71344, 71349],
  [71453, 71455],
  [71458, 71461],
  [71463, 71467],
  [71727, 71735],
  [71737, 71738],
  [72148, 72151],
  [72154, 72155],
  [72193, 72202],
  [72243, 72248],
  [72251, 72254],
  [72273, 72278],
  [72281, 72283],
  [72330, 72342],
  [72344, 72345],
  [72752, 72758],
  [72760, 72765],
  [72850, 72871],
  [72874, 72880],
  [72882, 72883],
  [72885, 72886],
  [73009, 73014],
  [73020, 73021],
  [73023, 73029],
  [73104, 73105],
  [73459, 73460],
  [92912, 92916],
  [92976, 92982],
  [94095, 94098],
  [113821, 113822],
  [119143, 119145],
  [119163, 119170],
  [119173, 119179],
  [119210, 119213],
  [119362, 119364],
  [121344, 121398],
  [121403, 121452],
  [121499, 121503],
  [121505, 121519],
  [122880, 122886],
  [122888, 122904],
  [122907, 122913],
  [122915, 122916],
  [122918, 122922],
  [123184, 123190],
  [123628, 123631],
  [125136, 125142],
  [125252, 125258],
  [917760, 917999],
  [1536, 1541],
  [8203, 8207],
  [8234, 8238],
  [8288, 8292],
  [8294, 8303],
  [65529, 65531],
  [78896, 78904],
  [113824, 113827],
  [119155, 119162],
  [917536, 917631]
];
addRanges(ricd, ricd_a);
const mac_a = [
  [0, 8],
  [14, 27],
  [127, 159],
  [768, 879],
  [6832, 6911],
  [7616, 7679],
  [8400, 8447],
  [65056, 65071],
  [48, 57]
];
addRanges(ricd, mac_a);
const ric = new Set(
  (function*() {
    yield* fic;
    yield* ricd;
  })()
);
module.exports = {
  firstIdentChar: fic,
  restIdentChar: ric
};
