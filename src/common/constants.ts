// APIGateway関係
export const API_NAME = "tashiro-cdk-restApi";
export const API_ENDPOINT =
  "https://z7eokf1c27.execute-api.ap-northeast-1.amazonaws.com/dev";

// Lambda関係
export const USERINFO_RESOURCE = "/userInfo";
export const TOURNAMENT_RESOURCE = "/tournament";
export const TOURNAMENTS_RESOURCE = "/tournaments";
export const APPLICATIONS_RESOURCE = "/applications";
export const SINGLES_APPLICATIONS_RESOURCE = "/singlesApplications";
export const TEAM_APPLICATIONS_RESOURCE = "/teamApplications";
export const TEAMS_RESOURCE = "/teams";
export const SINGLES_HISTORY_RESOURCE = "/singlesHistory";
export const TEAM_HISTORY_RESOURCE = "/teamHistory";
export const TOURNAMENTS_HISTORY_RESOURCE = "/tournamentsHistory";

// プルダウン
export const tournamentClasses = [
  {
    index: 0,
    label: "団体戦",
  },
  {
    index: 1,
    label: "シングルス",
  },
  // {
  //   index: 2,
  //   label: "ダブルス",
  // },
];

export const zones = [
  { index: 0, label: "実業団・クラブチーム" },
  { index: 1, label: "高体連第１地区" },
  { index: 2, label: "高体連第２地区" },
  { index: 3, label: "高体連第３地区" },
  { index: 4, label: "高体連第４地区" },
  { index: 5, label: "高体連第５地区" },
  { index: 6, label: "高体連第６地区" },
  { index: 7, label: "高体連第７地区" },
  { index: 8, label: "高体連第８地区" },
  { index: 9, label: "高体連第９地区" },
  { index: 10, label: "高体連第１０地区" },
  { index: 11, label: "高体連第１１地区" },
  { index: 12, label: "高体連第１２地区" },
  { index: 13, label: "中体連千葉支部" },
  { index: 14, label: "中体連市原支部" },
  { index: 15, label: "中体連習志野支部" },
  { index: 16, label: "中体連八千代支部" },
  { index: 17, label: "中体連船橋支部" },
  { index: 18, label: "中体連市川・浦安支部" },
  { index: 19, label: "中体連松戸支部" },
  { index: 20, label: "中体連柏支部" },
  { index: 21, label: "中体連葛北支部" },
  { index: 22, label: "中体連葛南支部" },
  { index: 23, label: "中体連印旛支部" },
  { index: 24, label: "中体連香取支部" },
  { index: 25, label: "中体連東総支部" },
  { index: 26, label: "中体連山武支部" },
  { index: 27, label: "中体連長生支部" },
  { index: 28, label: "中体連夷隅支部" },
  { index: 29, label: "中体連安房支部" },
  { index: 30, label: "中体連木更津・袖ヶ浦支部" },
  { index: 31, label: "中体連君津支部" },
  { index: 32, label: "千葉県卓球連盟" },
];

export const teams = [
  { index: 0, label: "千葉県立市原高等学校" },
  { index: 1, label: "千葉県立鶴舞桜が丘高等学校" },
  { index: 2, label: "千葉県立京葉高等学校" },
  { index: 3, label: "千葉県立市原緑高等学校" },
  { index: 4, label: "千葉県立姉崎高等学校" },
  { index: 5, label: "千葉県立市原八幡高等学校" },
  { index: 6, label: "東海大付属望洋高等学校" },
  { index: 7, label: "市原中央高等学校" },
  { index: 8, label: "千葉県立袖ヶ浦高等学校" },
  { index: 9, label: "千葉県立木更津高等学校" },
  { index: 10, label: "千葉県立木更津東高等学校" },
  { index: 11, label: "木更津総合高等学校" },
  { index: 12, label: "拓殖大紅陵高等学校" },
  { index: 13, label: "暁星国際高等学校" },
  { index: 14, label: "志学館高等学校" },
  { index: 15, label: "千葉県立君津高等学校" },
  { index: 16, label: "千葉県立上総高等学校" },
  { index: 17, label: "千葉県立君津青葉高等学校" },
  { index: 18, label: "千葉県立君津商業高等学校" },
  { index: 19, label: "千葉県立天羽高等学校" },
  { index: 20, label: "千葉国際高等学校" },
  { index: 21, label: "千葉県立安房高等学校" },
  { index: 22, label: "千葉県立館山総合高等学校" },
  { index: 23, label: "安房西高等学校" },
  { index: 24, label: "千葉県立安房拓心高等学校" },
  { index: 25, label: "千葉県立長狭高等学校" },
  { index: 26, label: "鴨川令徳高等学校" },
  { index: 27, label: "千葉県立勝浦若潮高等学校" },
  { index: 28, label: "千葉県立大原高等学校" },
  { index: 29, label: "千葉県立岬高等学校" },
  { index: 30, label: "千葉県立大多喜高等学校" },
  { index: 31, label: "千葉県立一宮商業高等学校" },
  { index: 32, label: "千葉県立長生高等学校" },
  { index: 33, label: "千葉県立茂原高等学校" },
  { index: 34, label: "千葉県立茂原樟陽高等学校" },
  { index: 35, label: "茂原北陵高等学校" },
  { index: 36, label: "千葉県立大網高等学校" },
  { index: 37, label: "千葉県立九十九里高等学校" },
  { index: 38, label: "千葉県立東金高等学校" },
  { index: 39, label: "千葉県立東金商業高等学校" },
  { index: 40, label: "千葉学芸高等学校" },
  { index: 41, label: "千葉県立成東高等学校" },
  { index: 42, label: "千葉県立松尾高等学校" },
  { index: 43, label: "横芝敬愛高等学校" },
  { index: 44, label: "千葉県立匝瑳高等学校" },
  { index: 45, label: "敬愛大八日市場高等学校" },
  { index: 46, label: "千葉県立旭農業高等学校" },
  { index: 47, label: "千葉県立東総工業高等学校" },
  { index: 48, label: "千葉県立銚子高等学校" },
  { index: 49, label: "千葉県立銚子商業高等学校" },
  { index: 50, label: "千葉県立小見川高等学校" },
  { index: 51, label: "千葉県立佐原高等学校" },
  { index: 52, label: "千葉県立佐原白楊高等学校" },
  { index: 53, label: "千葉県立佐原高等学校" },
  { index: 54, label: "千葉萌陽高等学校" },
  { index: 55, label: "千葉県立多古高等学校" },
  { index: 56, label: "わせがく高等学校" },
  { index: 57, label: "千葉県立下総高等学校" },
  { index: 58, label: "千葉県立成田西陵高等学校" },
  { index: 59, label: "千葉県立成田国際高等学校" },
  { index: 60, label: "千葉県立成田北高等学校" },
  { index: 61, label: "成田高等学校" },
  { index: 62, label: "千葉県立富里高等学校" },
  { index: 63, label: "千葉県立印旛明誠高等学校" },
  { index: 64, label: "東京学館高等学校" },
  { index: 65, label: "千葉県立佐倉高等学校" },
  { index: 66, label: "千葉県立佐倉東高等学校" },
  { index: 67, label: "千葉県立佐倉西高等学校" },
  { index: 68, label: "千葉県立佐倉南高等学校" },
  { index: 69, label: "千葉県立八街高等学校" },
  { index: 70, label: "千葉黎明高等学校" },
  { index: 71, label: "NHK学園千葉黎明高等学校" },
  { index: 72, label: "千葉県立四街道高等学校" },
  { index: 73, label: "千葉県立四街道北高等学校" },
  { index: 74, label: "千葉敬愛高等学校" },
  { index: 75, label: "愛国学園大附属四街道高等学校" },
  { index: 76, label: "千葉県立八千代高等学校" },
  { index: 77, label: "千葉県立八千代東高等学校" },
  { index: 78, label: "千葉県立八千代西高等学校" },
  { index: 79, label: "八千代松陰高等学校" },
  { index: 80, label: "千葉英和高等学校" },
  { index: 81, label: "秀明八千代高等学校" },
  { index: 82, label: "千葉県立津田沼高等学校" },
  { index: 83, label: "千葉県立実籾高等学校" },
  { index: 84, label: "習志野市立習志野高等学校" },
  { index: 85, label: "東邦大付属東邦高等学校" },
  { index: 86, label: "わせがく勝田台高等学校" },
  { index: 87, label: "千葉県立千葉高等学校" },
  { index: 88, label: "千葉県立千葉商業高等学校" },
  { index: 89, label: "千葉県立千葉工業高等学校" },
  { index: 90, label: "千葉県立千葉南高等学校" },
  { index: 91, label: "千葉県立若松高等学校" },
  { index: 92, label: "千葉県立千城台高等学校" },
  { index: 93, label: "千葉県立生浜高等学校" },
  { index: 94, label: "千葉県立泉高等学校" },
  { index: 95, label: "千葉県立千葉大宮高等学校" },
  { index: 96, label: "千葉県立土気高等学校" },
  { index: 97, label: "千葉県立千葉聾高等学校" },
  { index: 98, label: "千葉明徳高等学校" },
  { index: 99, label: "植草学園大附属高等学校" },
  { index: 100, label: "千葉聖心高等学校" },
  { index: 101, label: "桜林高等学校" },
  { index: 102, label: "明聖高等学校" },
  { index: 103, label: "クラーク記念国際千葉高等学校" },
  { index: 104, label: "千葉県立千葉女子高等学校" },
  { index: 105, label: "千葉県立千葉東高等学校" },
  { index: 106, label: "千葉県立京葉工業高等学校" },
  { index: 107, label: "千葉県立検見川高等学校" },
  { index: 108, label: "千葉県立千葉北高等学校" },
  { index: 109, label: "千葉県立磯辺高等学校" },
  { index: 110, label: "千葉県立幕張総合高等学校" },
  { index: 111, label: "千葉県立柏井高等学校" },
  { index: 112, label: "千葉県立千葉西高等学校" },
  { index: 113, label: "千葉県立犢橋高等学校" },
  { index: 114, label: "千葉市立千葉高等学校" },
  { index: 115, label: "千葉市立稲毛高等学校" },
  { index: 116, label: "千葉経済大附属高等学校" },
  { index: 117, label: "敬愛学園高等学校" },
  { index: 118, label: "渋谷学園幕張高等学校" },
  { index: 119, label: "昭和学院秀英高等学校" },
  { index: 120, label: "千葉県立船橋高等学校" },
  { index: 121, label: "千葉県立薬園台高等学校" },
  { index: 122, label: "千葉県立船橋東高等学校" },
  { index: 123, label: "千葉県立船橋啓明高等学校" },
  { index: 124, label: "千葉県立船橋芝山高等学校" },
  { index: 125, label: "千葉県立船橋二和高等学校" },
  { index: 126, label: "千葉県立船橋古和釜高等学校" },
  { index: 127, label: "千葉県立船橋法典高等学校" },
  { index: 128, label: "千葉県立船橋豊富高等学校" },
  { index: 129, label: "千葉県立船橋北高等学校" },
  { index: 130, label: "船橋市立船橋高等学校" },
  { index: 131, label: "千葉県立東葉高等学校" },
  { index: 132, label: "日大習志野高等学校" },
  { index: 133, label: "千葉日大一高等学校" },
  { index: 134, label: "東京学館船橋高等学校" },
  { index: 135, label: "千葉県立鎌ヶ谷高等学校" },
  { index: 136, label: "千葉県立鎌ヶ谷西高等学校" },
  { index: 137, label: "千葉県立白井高等学校" },
  { index: 138, label: "中山学園高等学校" },
  { index: 139, label: "千葉県立市川工業高等学校" },
  { index: 140, label: "千葉県立国府台高等学校" },
  { index: 141, label: "千葉県立国分高等学校" },
  { index: 142, label: "千葉県立行徳高等学校" },
  { index: 143, label: "千葉県立市川東高等学校" },
  { index: 144, label: "千葉県立市川南高等学校" },
  { index: 145, label: "千葉県立市川昴高等学校" },
  { index: 146, label: "筑波大附聴覚特別支援高等学校" },
  { index: 147, label: "市川高等学校" },
  { index: 148, label: "和洋国府台女子高等学校" },
  { index: 149, label: "千葉商科大付属高等学校" },
  { index: 150, label: "日出学園高等学校" },
  { index: 151, label: "国府台女子学院高等学校" },
  { index: 152, label: "昭和学院高等学校" },
  { index: 153, label: "不二女子高等学校" },
  { index: 154, label: "千葉県立浦安高等学校" },
  { index: 155, label: "千葉県立浦安南高等学校" },
  { index: 156, label: "東海大付属浦安高等学校" },
  { index: 157, label: "東京学館浦安高等学校" },
  { index: 158, label: "千葉県立松戸高等学校" },
  { index: 159, label: "千葉県立小金高等学校" },
  { index: 160, label: "千葉県立松戸国際高等学校" },
  { index: 161, label: "千葉県立松戸南高等学校" },
  { index: 162, label: "千葉県立松戸六実高等学校" },
  { index: 163, label: "千葉県立松戸馬橋高等学校" },
  { index: 164, label: "千葉県立松戸向陽高等学校" },
  { index: 165, label: "千葉県立市立松戸高等学校" },
  { index: 166, label: "専修大松戸高等学校" },
  { index: 167, label: "聖徳大附属女子高等学校" },
  { index: 168, label: "千葉県立流山高等学校" },
  { index: 169, label: "千葉県立流山おおたかの森高等学校" },
  { index: 170, label: "千葉県立流山南高等学校" },
  { index: 171, label: "千葉県立流山北高等学校" },
  { index: 172, label: "千葉県立野田中央高等学校" },
  { index: 173, label: "千葉県立清水高等学校" },
  { index: 174, label: "千葉県立関宿高等学校" },
  { index: 175, label: "千葉県立西武台千葉高等学校" },
  { index: 176, label: "あずさ第一高等学校" },
  { index: 177, label: "千葉県立東葛飾高等学校" },
  { index: 178, label: "千葉県立柏高等学校" },
  { index: 179, label: "千葉県立柏南高等学校" },
  { index: 180, label: "千葉県立柏陵高等学校" },
  { index: 181, label: "千葉県立柏の葉高等学校" },
  { index: 182, label: "千葉県立柏中央高等学校" },
  { index: 183, label: "千葉県立沼南高等学校" },
  { index: 184, label: "千葉県立沼南高柳高等学校" },
  { index: 185, label: "柏市立柏高等学校" },
  { index: 186, label: "流通経済大付属柏高等学校" },
  { index: 187, label: "二松学舎大附属柏高等学校" },
  { index: 188, label: "麗澤高等学校" },
  { index: 189, label: "柏日体高等学校" },
  { index: 190, label: "芝浦工大柏高等学校" },
  { index: 191, label: "千葉県立我孫子高等学校" },
  { index: 192, label: "千葉県立我孫子東高等学校" },
  { index: 193, label: "我孫子二階堂高等学校" },
  { index: 194, label: "中央学院高等学校" },
  { index: 195, label: "わせがく柏高等学校" },
  { index: 196, label: "クラーク記念国際高等学校" },
  { index: 197, label: "柏高等技術学園高等学校" },
  { index: 198, label: "旭市立第一中学校" },
  { index: 199, label: "旭市立第二中学校" },
  { index: 200, label: "旭市立海上中学校" },
  { index: 201, label: "旭市立干潟中学校" },
  { index: 202, label: "旭市立飯岡中学校" },
  { index: 203, label: "我孫子市立我孫子中学校" },
  { index: 204, label: "我孫子市立久寺家中学校" },
  { index: 205, label: "我孫子市立湖北台中学校" },
  { index: 206, label: "我孫子市立湖北中学校" },
  { index: 207, label: "我孫子市立白山中学校" },
  { index: 208, label: "我孫子市立布佐中学校" },
  { index: 209, label: "いすみ市立国吉中学校" },
  { index: 210, label: "いすみ市立大原中学校" },
  { index: 211, label: "いすみ市立岬中学校" },
  { index: 212, label: "市川市立第一中学校" },
  { index: 213, label: "市川市立第二中学校" },
  { index: 214, label: "市川市立第三中学校" },
  { index: 215, label: "市川市立第四中学校" },
  { index: 216, label: "市川市立第五中学校" },
  { index: 217, label: "市川市立第六中学校" },
  { index: 218, label: "市川市立第七中学校" },
  { index: 219, label: "市川市立第八中学校" },
  { index: 220, label: "市川市立塩浜学園学校" },
  { index: 221, label: "市川市立下貝塚中学校" },
  { index: 222, label: "市川市立高谷中学校" },
  { index: 223, label: "市川市立大洲中学校" },
  { index: 224, label: "市川市立東国分中学校" },
  { index: 225, label: "市川市立南行徳中学校" },
  { index: 226, label: "市川市立福栄中学校" },
  { index: 227, label: "市川市立妙典中学校" },
  { index: 228, label: "一宮町立一宮中学校" },
  { index: 229, label: "市原市立ちはら台西中学校" },
  { index: 230, label: "市原市立ちはら台南中学校" },
  { index: 231, label: "市原市立加茂中学校" },
  { index: 232, label: "市原市立菊間中学校" },
  { index: 233, label: "市原市立五井中学校" },
  { index: 234, label: "市原市立国分寺台西中学校" },
  { index: 235, label: "市原市立国分寺台中学校" },
  { index: 236, label: "市原市立三和中学校" },
  { index: 237, label: "市原市立姉崎中学校" },
  { index: 238, label: "市原市立姉崎東中学校" },
  { index: 239, label: "市原市立市原中学校" },
  { index: 240, label: "市原市立市東中学校" },
  { index: 241, label: "市原市立湿津中学校" },
  { index: 242, label: "市原市立若葉中学校" },
  { index: 243, label: "市原市立千種中学校" },
  { index: 244, label: "市原市立双葉中学校" },
  { index: 245, label: "市原市立辰巳台中学校" },
  { index: 246, label: "市原市立東海中学校" },
  { index: 247, label: "市原市立南総中学校" },
  { index: 248, label: "市原市立八幡中学校" },
  { index: 249, label: "市原市立八幡東中学校" },
  { index: 250, label: "市原市立有秋中学校" },
  { index: 251, label: "印西市立印西中学校" },
  { index: 252, label: "印西市立印旛中学校" },
  { index: 253, label: "印西市立原山中学校" },
  { index: 254, label: "印西市立小林中学校" },
  { index: 255, label: "印西市立西の原中学校" },
  { index: 256, label: "印西市立船穂中学校" },
  { index: 257, label: "印西市立滝野中学校" },
  { index: 258, label: "印西市立本埜中学校" },
  { index: 259, label: "印西市立木刈中学校" },
  { index: 260, label: "浦安市立高洲中学校" },
  { index: 261, label: "浦安市立浦安中学校" },
  { index: 262, label: "浦安市立見明川中学校" },
  { index: 263, label: "浦安市立日の出中学校" },
  { index: 264, label: "浦安市立入船中学校" },
  { index: 265, label: "浦安市立美浜中学校" },
  { index: 266, label: "浦安市立富岡中学校" },
  { index: 267, label: "浦安市立堀江中学校" },
  { index: 268, label: "浦安市立明海中学校" },
  { index: 269, label: "大網白里市立増穂中学校" },
  { index: 270, label: "大網白里市立大網中学校" },
  { index: 271, label: "大網白里市立白里中学校" },
  { index: 272, label: "大多喜町立西中学校" },
  { index: 273, label: "大多喜町立大多喜中学校" },
  { index: 274, label: "御宿町立御宿中学校" },
  { index: 275, label: "柏市立柏中学校" },
  { index: 276, label: "柏市立柏第二中学校" },
  { index: 277, label: "柏市立柏第三中学校" },
  { index: 278, label: "柏市立柏第四中学校" },
  { index: 279, label: "柏市立柏第五中学校" },
  { index: 280, label: "柏市立光ヶ丘中学校" },
  { index: 281, label: "柏市立逆井中学校" },
  { index: 282, label: "柏市立高柳中学校" },
  { index: 283, label: "柏市立手賀中学校" },
  { index: 284, label: "柏市立酒井根中学校" },
  { index: 285, label: "柏市立松葉中学校" },
  { index: 286, label: "柏市立西原中学校" },
  { index: 287, label: "柏市立大津ケ丘中学校" },
  { index: 288, label: "柏市立中原中学校" },
  { index: 289, label: "柏市立田中中学校" },
  { index: 290, label: "柏市立土中学校" },
  { index: 291, label: "柏市立南部中学校" },
  { index: 292, label: "柏市立富勢中学校" },
  { index: 293, label: "柏市立風早中学校" },
  { index: 294, label: "柏市立豊四季中学校" },
  { index: 295, label: "勝浦市立勝浦中学校" },
  { index: 296, label: "香取市立栗源中学校" },
  { index: 297, label: "香取市立香取中学校" },
  { index: 298, label: "香取市立佐原第五中学校" },
  { index: 299, label: "香取市立佐原中学校" },
  { index: 300, label: "香取市立山田中学校" },
  { index: 301, label: "香取市立小見川中学校" },
  { index: 302, label: "香取市立新島中学校" },
  { index: 303, label: "鎌ケ谷市立鎌ケ谷中学校" },
  { index: 304, label: "鎌ケ谷市立第二中学校" },
  { index: 305, label: "鎌ケ谷市立第三中学校" },
  { index: 306, label: "鎌ケ谷市立第四中学校" },
  { index: 307, label: "鎌ケ谷市立第五中学校" },
  { index: 308, label: "鴨川市立安房東中学校" },
  { index: 309, label: "鴨川市立鴨川中学校" },
  { index: 310, label: "鴨川市立長狭中学校" },
  { index: 311, label: "神崎町立神崎中学校" },
  { index: 312, label: "木更津市立木更津第一中学校" },
  { index: 313, label: "木更津市立木更津第二中学校" },
  { index: 314, label: "木更津市立木更津第三中学校" },
  { index: 315, label: "木更津市立鎌足中学校" },
  { index: 316, label: "木更津市立岩根西中学校" },
  { index: 317, label: "木更津市立岩根中学校" },
  { index: 318, label: "木更津市立金田中学校" },
  { index: 319, label: "木更津市立清川中学校" },
  { index: 320, label: "木更津市立太田中学校" },
  { index: 321, label: "木更津市立中郷中学校" },
  { index: 322, label: "木更津市立波岡中学校" },
  { index: 323, label: "木更津市立畑沢中学校" },
  { index: 324, label: "木更津市立富来田中学校" },
  { index: 325, label: "君津市立亀山中学校" },
  { index: 326, label: "君津市立久留里中学校" },
  { index: 327, label: "君津市立君津中学校" },
  { index: 328, label: "君津市立周西中学校" },
  { index: 329, label: "君津市立周西南中学校" },
  { index: 330, label: "君津市立周南中学校" },
  { index: 331, label: "君津市立小糸中学校" },
  { index: 332, label: "君津市立小櫃中学校" },
  { index: 333, label: "君津市立松丘中学校" },
  { index: 334, label: "君津市立清和中学校" },
  { index: 335, label: "君津市立八重原中学校" },
  { index: 336, label: "鋸南町立鋸南中学校" },
  { index: 337, label: "九十九里町立九十九里中学校" },
  { index: 338, label: "県立千葉中学校" },
  { index: 339, label: "県立東葛飾中学校" },
  { index: 340, label: "国立千葉大附中学校" },
  { index: 341, label: "栄町立栄中学校" },
  { index: 342, label: "佐倉市立井野中学校" },
  { index: 343, label: "佐倉市立臼井西中学校" },
  { index: 344, label: "佐倉市立臼井中学校" },
  { index: 345, label: "佐倉市立臼井南中学校" },
  { index: 346, label: "佐倉市立根郷中学校" },
  { index: 347, label: "佐倉市立佐倉中学校" },
  { index: 348, label: "佐倉市立佐倉東中学校" },
  { index: 349, label: "佐倉市立志津中学校" },
  { index: 350, label: "佐倉市立上志津中学校" },
  { index: 351, label: "佐倉市立西志津中学校" },
  { index: 352, label: "佐倉市立南部中学校" },
  { index: 353, label: "山武市立山武中学校" },
  { index: 354, label: "山武市立山武南中学校" },
  { index: 355, label: "山武市立松尾中学校" },
  { index: 356, label: "山武市立成東中学校" },
  { index: 357, label: "山武市立成東東中学校" },
  { index: 358, label: "山武市立蓮沼中学校" },
  { index: 359, label: "酒々井町立酒々井中学校" },
  { index: 360, label: "芝山町立芝山中学校" },
  { index: 361, label: "私立暁星国際中学校" },
  { index: 362, label: "私立国府台女子学院中学校" },
  { index: 363, label: "私立市川中学校" },
  { index: 364, label: "私立志学館中学校" },
  { index: 365, label: "私立芝浦工業大学柏中学校" },
  { index: 366, label: "私立秀明大学学校教師学部附属秀明八千代中学校" },
  { index: 367, label: "私立渋谷教育学園幕張中学校" },
  { index: 368, label: "私立昭和学院中学校" },
  { index: 369, label: "私立昭和学院秀英中学校" },
  { index: 370, label: "私立成田高付属中学校" },
  { index: 371, label: "私立聖徳大学附属女子中学校" },
  { index: 372, label: "私立西武台千葉中学校" },
  { index: 373, label: "私立千葉日本大学第一中学校" },
  { index: 374, label: "私立千葉明徳中学校" },
  { index: 375, label: "私立専修大学松戸中学校" },
  { index: 376, label: "私立東海大学付属浦安高等学校中等部中学校" },
  { index: 377, label: "私立東京学館浦安中学校" },
  { index: 378, label: "私立東邦大学付属東邦中学校" },
  { index: 379, label: "私立二松学舎大学附属柏中学校" },
  { index: 380, label: "私立日出学園中学校" },
  { index: 381, label: "私立八千代松陰中学校" },
  { index: 382, label: "私立麗澤中学校" },
  { index: 383, label: "私立和洋国府台女子中学校" },
  { index: 384, label: "私立翔凜中学校" },
  { index: 385, label: "白井市立桜台中学校" },
  { index: 386, label: "白井市立七次台中学校" },
  { index: 387, label: "白井市立大山口中学校" },
  { index: 388, label: "白井市立南山中学校" },
  { index: 389, label: "白井市立白井中学校" },
  { index: 390, label: "白子町立白子中学校" },
  { index: 391, label: "匝瑳市立八日市場第一中学校" },
  { index: 392, label: "匝瑳市立八日市場第二中学校" },
  { index: 393, label: "匝瑳市立野栄中学校" },
  { index: 394, label: "袖ケ浦市立根形中学校" },
  { index: 395, label: "袖ケ浦市立昭和中学校" },
  { index: 396, label: "袖ケ浦市立蔵波中学校" },
  { index: 397, label: "袖ケ浦市立長浦中学校" },
  { index: 398, label: "袖ケ浦市立平川中学校" },
  { index: 399, label: "多古町立多古中学校" },
  { index: 400, label: "館山市立第一中学校" },
  { index: 401, label: "館山市立第二中学校" },
  { index: 402, label: "館山市立第三中学校" },
  { index: 403, label: "館山市立房南中学校" },
  { index: 404, label: "千葉市立幸町第一中学校" },
  { index: 405, label: "千葉市立幸町第二中学校" },
  { index: 406, label: "千葉市立高洲第一中学校" },
  { index: 407, label: "千葉市立高洲第二中学校" },
  { index: 408, label: "千葉市立磯辺中学校" },
  { index: 409, label: "千葉市立おゆみ野南中学校" },
  { index: 410, label: "千葉市立こてはし台中学校" },
  { index: 411, label: "千葉市立さつきが丘中学校" },
  { index: 412, label: "千葉市立花見川中学校" },
  { index: 413, label: "千葉市立真砂中学校" },
  { index: 414, label: "千葉市立みつわ台中学校" },
  { index: 415, label: "千葉市立稲浜中学校" },
  { index: 416, label: "千葉市立稲毛高校附属中学校" },
  { index: 417, label: "千葉市立稲毛中学校" },
  { index: 418, label: "千葉市立越智中学校" },
  { index: 419, label: "千葉市立加曽利中学校" },
  { index: 420, label: "千葉市立花園中学校" },
  { index: 421, label: "千葉市立貝塚中学校" },
  { index: 422, label: "千葉市立葛城中学校" },
  { index: 423, label: "千葉市立更科中学校" },
  { index: 424, label: "千葉市立高浜中学校" },
  { index: 425, label: "千葉市立轟町中学校" },
  { index: 426, label: "千葉市立山王中学校" },
  { index: 427, label: "千葉市立若松中学校" },
  { index: 428, label: "千葉市立小中台中学校" },
  { index: 429, label: "千葉市立松ケ丘中学校" },
  { index: 430, label: "千葉市立新宿中学校" },
  { index: 431, label: "千葉市立星久喜中学校" },
  { index: 432, label: "千葉市立生浜中学校" },
  { index: 433, label: "千葉市立千城台西中学校" },
  { index: 434, label: "千葉市立千城台南中学校" },
  { index: 435, label: "千葉市立千草台中学校" },
  { index: 436, label: "千葉市立川戸中学校" },
  { index: 437, label: "千葉市立泉谷中学校" },
  { index: 438, label: "千葉市立蘇我中学校" },
  { index: 439, label: "千葉市立草野中学校" },
  { index: 440, label: "千葉市立打瀬中学校" },
  { index: 441, label: "千葉市立大宮中学校" },
  { index: 442, label: "千葉市立大椎中学校" },
  { index: 443, label: "千葉市立朝日ケ丘中学校" },
  { index: 444, label: "千葉市立椿森中学校" },
  { index: 445, label: "千葉市立天戸中学校" },
  { index: 446, label: "千葉市立都賀中学校" },
  { index: 447, label: "千葉市立土気中学校" },
  { index: 448, label: "千葉市立土気南中学校" },
  { index: 449, label: "千葉市立白井中学校" },
  { index: 450, label: "千葉市立幕張西中学校" },
  { index: 451, label: "千葉市立幕張中学校" },
  { index: 452, label: "千葉市立幕張本郷中学校" },
  { index: 453, label: "千葉市立末広中学校" },
  { index: 454, label: "千葉市立有吉中学校" },
  { index: 455, label: "千葉市立誉田中学校" },
  { index: 456, label: "千葉市立緑が丘中学校" },
  { index: 457, label: "千葉市立緑町中学校" },
  { index: 458, label: "千葉市立犢橋中学校" },
  { index: 459, label: "銚子市立第一中学校" },
  { index: 460, label: "銚子市立第二中学校" },
  { index: 461, label: "銚子市立第三中学校" },
  { index: 462, label: "銚子市立第五中学校" },
  { index: 463, label: "銚子市立第六中学校" },
  { index: 464, label: "銚子市立第七中学校" },
  { index: 465, label: "銚子市立銚子中学校" },
  { index: 466, label: "長生村立長生中学校" },
  { index: 467, label: "長南町立長南中学校" },
  { index: 468, label: "東金市立西中学校" },
  { index: 469, label: "東金市立東金中学校" },
  { index: 470, label: "東金市立東中学校" },
  { index: 471, label: "東金市立北中学校" },
  { index: 472, label: "東庄町立東庄中学校" },
  { index: 473, label: "長柄町立長柄中学校" },
  { index: 474, label: "流山市立おおたかの森中学校" },
  { index: 475, label: "流山市立常盤松中学校" },
  { index: 476, label: "流山市立西初石中学校" },
  { index: 477, label: "流山市立東深井中学校" },
  { index: 478, label: "流山市立東部中学校" },
  { index: 479, label: "流山市立南部中学校" },
  { index: 480, label: "流山市立南流山中学校" },
  { index: 481, label: "流山市立八木中学校" },
  { index: 482, label: "流山市立北部中学校" },
  { index: 483, label: "習志野市立第一中学校" },
  { index: 484, label: "習志野市立第二中学校" },
  { index: 485, label: "習志野市立第三中学校" },
  { index: 486, label: "習志野市立第四中学校" },
  { index: 487, label: "習志野市立第五中学校" },
  { index: 488, label: "習志野市立第六中学校" },
  { index: 489, label: "習志野市立第七中学校" },
  { index: 490, label: "成田市立公津の杜中学校" },
  { index: 491, label: "成田市立下総みどり学園学校" },
  { index: 492, label: "成田市立遠山中学校" },
  { index: 493, label: "成田市立久住中学校" },
  { index: 494, label: "成田市立玉造中学校" },
  { index: 495, label: "成田市立吾妻中学校" },
  { index: 496, label: "成田市立成田中学校" },
  { index: 497, label: "成田市立西中学校" },
  { index: 498, label: "成田市立大栄中学校" },
  { index: 499, label: "成田市立中台中学校" },
  { index: 500, label: "野田市立第一中学校" },
  { index: 501, label: "野田市立第二中学校" },
  { index: 502, label: "野田市立関宿中学校" },
  { index: 503, label: "野田市立岩名中学校" },
  { index: 504, label: "野田市立川間中学校" },
  { index: 505, label: "野田市立東部中学校" },
  { index: 506, label: "野田市立南部中学校" },
  { index: 507, label: "野田市立二川中学校" },
  { index: 508, label: "野田市立福田中学校" },
  { index: 509, label: "野田市立北部中学校" },
  { index: 510, label: "野田市立木間ケ瀬中学校" },
  { index: 511, label: "富津市立佐貫中学校" },
  { index: 512, label: "富津市立大貫中学校" },
  { index: 513, label: "富津市立天羽中学校" },
  { index: 514, label: "富津市立天羽東中学校" },
  { index: 515, label: "富津市立富津中学校" },
  { index: 516, label: "富里市立富里中学校" },
  { index: 517, label: "富里市立富里南中学校" },
  { index: 518, label: "富里市立富里北中学校" },
  { index: 519, label: "船橋市立旭中学校" },
  { index: 520, label: "船橋市立海神中学校" },
  { index: 521, label: "船橋市立葛飾中学校" },
  { index: 522, label: "船橋市立宮本中学校" },
  { index: 523, label: "船橋市立金杉台中学校" },
  { index: 524, label: "船橋市立古和釜中学校" },
  { index: 525, label: "船橋市立御滝中学校" },
  { index: 526, label: "船橋市立行田中学校" },
  { index: 527, label: "船橋市立高根台中学校" },
  { index: 528, label: "船橋市立高根中学校" },
  { index: 529, label: "船橋市立三山中学校" },
  { index: 530, label: "船橋市立三田中学校" },
  { index: 531, label: "船橋市立七林中学校" },
  { index: 532, label: "船橋市立芝山中学校" },
  { index: 533, label: "船橋市立若松中学校" },
  { index: 534, label: "船橋市立習志野台中学校" },
  { index: 535, label: "船橋市立小室中学校" },
  { index: 536, label: "船橋市立船橋中学校" },
  { index: 537, label: "船橋市立前原中学校" },
  { index: 538, label: "船橋市立大穴中学校" },
  { index: 539, label: "船橋市立坪井中学校" },
  { index: 540, label: "船橋市立二宮中学校" },
  { index: 541, label: "船橋市立八木が谷中学校" },
  { index: 542, label: "船橋市立飯山満中学校" },
  { index: 543, label: "船橋市立法田中学校" },
  { index: 544, label: "船橋市立豊富中学校" },
  { index: 545, label: "船橋市立湊中学校" },
  { index: 546, label: "松戸市立第一中学校" },
  { index: 547, label: "松戸市立第二中学校" },
  { index: 548, label: "松戸市立第三中学校" },
  { index: 549, label: "松戸市立第四中学校" },
  { index: 550, label: "松戸市立第五中学校" },
  { index: 551, label: "松戸市立第六中学校" },
  { index: 552, label: "松戸市立旭町中学校" },
  { index: 553, label: "松戸市立河原塚中学校" },
  { index: 554, label: "松戸市立金ヶ作中学校" },
  { index: 555, label: "松戸市立栗ヶ沢中学校" },
  { index: 556, label: "松戸市立古ヶ崎中学校" },
  { index: 557, label: "松戸市立根木内中学校" },
  { index: 558, label: "松戸市立小金中学校" },
  { index: 559, label: "松戸市立小金南中学校" },
  { index: 560, label: "松戸市立小金北中学校" },
  { index: 561, label: "松戸市立常盤平中学校" },
  { index: 562, label: "松戸市立新松戸南中学校" },
  { index: 563, label: "松戸市立牧野原中学校" },
  { index: 564, label: "松戸市立六実中学校" },
  { index: 565, label: "松戸市立和名ヶ谷中学校" },
  { index: 566, label: "南房総市立嶺南中学校" },
  { index: 567, label: "南房総市立三芳中学校" },
  { index: 568, label: "南房総市立千倉中学校" },
  { index: 569, label: "南房総市立白浜中学校" },
  { index: 570, label: "南房総市立富浦中学校" },
  { index: 571, label: "南房総市立富山中学校" },
  { index: 572, label: "睦沢町立睦沢中学校" },
  { index: 573, label: "茂原市立西陵中学校" },
  { index: 574, label: "茂原市立早野中学校" },
  { index: 575, label: "茂原市立東中学校" },
  { index: 576, label: "茂原市立南中学校" },
  { index: 577, label: "茂原市立冨士見中学校" },
  { index: 578, label: "茂原市立本納中学校" },
  { index: 579, label: "茂原市立茂原中学校" },
  { index: 580, label: "八街市立八街中学校" },
  { index: 581, label: "八街市立八街中央中学校" },
  { index: 582, label: "八街市立八街南中学校" },
  { index: 583, label: "八街市立八街北中学校" },
  { index: 584, label: "八千代市立阿蘇中学校" },
  { index: 585, label: "八千代市立萱田中学校" },
  { index: 586, label: "八千代市立高津中学校" },
  { index: 587, label: "八千代市立勝田台中学校" },
  { index: 588, label: "八千代市立村上中学校" },
  { index: 589, label: "八千代市立村上東中学校" },
  { index: 590, label: "八千代市立大和田中学校" },
  { index: 591, label: "八千代市立東高津中学校" },
  { index: 592, label: "八千代市立八千代台西中学校" },
  { index: 593, label: "八千代市立八千代中学校" },
  { index: 594, label: "八千代市立睦中学校" },
  { index: 595, label: "横芝光町立横芝中学校" },
  { index: 596, label: "横芝光町立光中学校" },
  { index: 597, label: "四街道市立旭中学校" },
  { index: 598, label: "四街道市立四街道西中学校" },
  { index: 599, label: "四街道市立四街道中学校" },
  { index: 600, label: "四街道市立四街道北中学校" },
  { index: 601, label: "四街道市立千代田中学校" },
  { index: 602, label: "中山　孔夫" },
  { index: 603, label: "千城クラブ" },
  { index: 604, label: "トトロクラブ" },
  { index: 605, label: "TOMAX" },
  { index: 606, label: "あり-なJr" },
  { index: 607, label: "流山アストロズ" },
  { index: 608, label: "柏ソレイユ" },
  { index: 609, label: "白山ジュニア" },
  { index: 610, label: "木更津クラブ" },
  { index: 611, label: "長生茂原卓球クラブ" },
  { index: 612, label: "T-Field" },
  { index: 613, label: "千葉クラブ" },
  { index: 614, label: "アイ・ユ－" },
  { index: 615, label: "SFC" },
  { index: 616, label: "卓球技塾" },
  { index: 617, label: "横芝スポ－ツ少年団" },
  { index: 618, label: "マイダス（千）" },
  { index: 619, label: "サイタスポ－ツ" },
  { index: 620, label: "永享寺TTC" },
];

export const schoolYears = [
  {
    index: 0,
    label: "1",
  },
  {
    index: 1,
    label: "2",
  },
  {
    index: 2,
    label: "3",
  },
];

export const sexies = [
  {
    index: 0,
    label: "男子",
  },
  {
    index: 1,
    label: "女子",
  },
];
