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

export type ZONE = {
  index: number;
  label: string;
};

export type TEAM = {
  index: number;
  teamIndex: number;
  label: string;
};

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

export const teams: TEAM[] = [
  { index: 0, teamIndex: 1, label: "千葉県立市原高等学校" },
  { index: 1, teamIndex: 1, label: "千葉県立鶴舞桜が丘高等学校" },
  { index: 2, teamIndex: 1, label: "千葉県立京葉高等学校" },
  { index: 3, teamIndex: 1, label: "千葉県立市原緑高等学校" },
  { index: 4, teamIndex: 1, label: "千葉県立姉崎高等学校" },
  { index: 5, teamIndex: 1, label: "千葉県立市原八幡高等学校" },
  { index: 6, teamIndex: 1, label: "東海大付属望洋高等学校" },
  { index: 7, teamIndex: 1, label: "市原中央高等学校" },
  { index: 8, teamIndex: 1, label: "千葉県立袖ヶ浦高等学校" },
  { index: 9, teamIndex: 1, label: "千葉県立木更津高等学校" },
  { index: 10, teamIndex: 1, label: "千葉県立木更津東高等学校" },
  { index: 11, teamIndex: 1, label: "木更津総合高等学校" },
  { index: 12, teamIndex: 1, label: "拓殖大紅陵高等学校" },
  { index: 13, teamIndex: 1, label: "暁星国際高等学校" },
  { index: 14, teamIndex: 1, label: "志学館高等学校" },
  { index: 15, teamIndex: 2, label: "千葉県立君津高等学校" },
  { index: 16, teamIndex: 2, label: "千葉県立上総高等学校" },
  { index: 17, teamIndex: 2, label: "千葉県立君津青葉高等学校" },
  { index: 18, teamIndex: 2, label: "千葉県立君津商業高等学校" },
  { index: 19, teamIndex: 2, label: "千葉県立天羽高等学校" },
  { index: 20, teamIndex: 2, label: "千葉国際高等学校" },
  { index: 21, teamIndex: 2, label: "千葉県立安房高等学校" },
  { index: 22, teamIndex: 2, label: "千葉県立館山総合高等学校" },
  { index: 23, teamIndex: 2, label: "安房西高等学校" },
  { index: 24, teamIndex: 2, label: "千葉県立安房拓心高等学校" },
  { index: 25, teamIndex: 2, label: "千葉県立長狭高等学校" },
  { index: 26, teamIndex: 2, label: "鴨川令徳高等学校" },
  { index: 27, teamIndex: 3, label: "千葉県立勝浦若潮高等学校" },
  { index: 28, teamIndex: 3, label: "千葉県立大原高等学校" },
  { index: 29, teamIndex: 3, label: "千葉県立岬高等学校" },
  { index: 30, teamIndex: 3, label: "千葉県立大多喜高等学校" },
  { index: 31, teamIndex: 3, label: "千葉県立一宮商業高等学校" },
  { index: 32, teamIndex: 3, label: "千葉県立長生高等学校" },
  { index: 33, teamIndex: 3, label: "千葉県立茂原高等学校" },
  { index: 34, teamIndex: 3, label: "千葉県立茂原樟陽高等学校" },
  { index: 35, teamIndex: 3, label: "茂原北陵高等学校" },
  { index: 36, teamIndex: 3, label: "千葉県立大網高等学校" },
  { index: 37, teamIndex: 3, label: "千葉県立九十九里高等学校" },
  { index: 38, teamIndex: 3, label: "千葉県立東金高等学校" },
  { index: 39, teamIndex: 3, label: "千葉県立東金商業高等学校" },
  { index: 40, teamIndex: 3, label: "千葉学芸高等学校" },
  { index: 41, teamIndex: 3, label: "千葉県立成東高等学校" },
  { index: 42, teamIndex: 3, label: "千葉県立松尾高等学校" },
  { index: 43, teamIndex: 4, label: "横芝敬愛高等学校" },
  { index: 44, teamIndex: 4, label: "千葉県立匝瑳高等学校" },
  { index: 45, teamIndex: 4, label: "敬愛大八日市場高等学校" },
  { index: 46, teamIndex: 4, label: "千葉県立旭農業高等学校" },
  { index: 47, teamIndex: 4, label: "千葉県立東総工業高等学校" },
  { index: 48, teamIndex: 4, label: "千葉県立銚子高等学校" },
  { index: 49, teamIndex: 4, label: "千葉県立銚子商業高等学校" },
  { index: 50, teamIndex: 4, label: "千葉県立小見川高等学校" },
  { index: 51, teamIndex: 4, label: "千葉県立佐原高等学校" },
  { index: 52, teamIndex: 4, label: "千葉県立佐原白楊高等学校" },
  { index: 53, teamIndex: 4, label: "千葉県立佐原高等学校" },
  { index: 54, teamIndex: 4, label: "千葉萌陽高等学校" },
  { index: 55, teamIndex: 4, label: "千葉県立多古高等学校" },
  { index: 56, teamIndex: 4, label: "わせがく高等学校" },
  { index: 57, teamIndex: 5, label: "千葉県立下総高等学校" },
  { index: 58, teamIndex: 5, label: "千葉県立成田西陵高等学校" },
  { index: 59, teamIndex: 5, label: "千葉県立成田国際高等学校" },
  { index: 60, teamIndex: 5, label: "千葉県立成田北高等学校" },
  { index: 61, teamIndex: 5, label: "成田高等学校" },
  { index: 62, teamIndex: 5, label: "千葉県立富里高等学校" },
  { index: 63, teamIndex: 5, label: "千葉県立印旛明誠高等学校" },
  { index: 64, teamIndex: 5, label: "東京学館高等学校" },
  { index: 65, teamIndex: 5, label: "千葉県立佐倉高等学校" },
  { index: 66, teamIndex: 5, label: "千葉県立佐倉東高等学校" },
  { index: 67, teamIndex: 5, label: "千葉県立佐倉西高等学校" },
  { index: 68, teamIndex: 5, label: "千葉県立佐倉南高等学校" },
  { index: 69, teamIndex: 5, label: "千葉県立八街高等学校" },
  { index: 70, teamIndex: 5, label: "千葉黎明高等学校" },
  { index: 71, teamIndex: 5, label: "NHK学園千葉黎明高等学校" },
  { index: 72, teamIndex: 6, label: "千葉県立四街道高等学校" },
  { index: 73, teamIndex: 6, label: "千葉県立四街道北高等学校" },
  { index: 74, teamIndex: 6, label: "千葉敬愛高等学校" },
  { index: 75, teamIndex: 6, label: "愛国学園大附属四街道高等学校" },
  { index: 76, teamIndex: 6, label: "千葉県立八千代高等学校" },
  { index: 77, teamIndex: 6, label: "千葉県立八千代東高等学校" },
  { index: 78, teamIndex: 6, label: "千葉県立八千代西高等学校" },
  { index: 79, teamIndex: 6, label: "八千代松陰高等学校" },
  { index: 80, teamIndex: 6, label: "千葉英和高等学校" },
  { index: 81, teamIndex: 6, label: "秀明八千代高等学校" },
  { index: 82, teamIndex: 6, label: "千葉県立津田沼高等学校" },
  { index: 83, teamIndex: 6, label: "千葉県立実籾高等学校" },
  { index: 84, teamIndex: 6, label: "習志野市立習志野高等学校" },
  { index: 85, teamIndex: 6, label: "東邦大付属東邦高等学校" },
  { index: 86, teamIndex: 6, label: "わせがく勝田台高等学校" },
  { index: 87, teamIndex: 7, label: "千葉県立千葉高等学校" },
  { index: 88, teamIndex: 7, label: "千葉県立千葉商業高等学校" },
  { index: 89, teamIndex: 7, label: "千葉県立千葉工業高等学校" },
  { index: 90, teamIndex: 7, label: "千葉県立千葉南高等学校" },
  { index: 91, teamIndex: 7, label: "千葉県立若松高等学校" },
  { index: 92, teamIndex: 7, label: "千葉県立千城台高等学校" },
  { index: 93, teamIndex: 7, label: "千葉県立生浜高等学校" },
  { index: 94, teamIndex: 7, label: "千葉県立泉高等学校" },
  { index: 95, teamIndex: 7, label: "千葉県立千葉大宮高等学校" },
  { index: 96, teamIndex: 7, label: "千葉県立土気高等学校" },
  { index: 97, teamIndex: 7, label: "千葉県立千葉聾高等学校" },
  { index: 98, teamIndex: 7, label: "千葉明徳高等学校" },
  { index: 99, teamIndex: 7, label: "植草学園大附属高等学校" },
  { index: 100, teamIndex: 7, label: "千葉聖心高等学校" },
  { index: 101, teamIndex: 7, label: "桜林高等学校" },
  { index: 102, teamIndex: 7, label: "明聖高等学校" },
  { index: 103, teamIndex: 7, label: "クラーク記念国際千葉高等学校" },
  { index: 104, teamIndex: 8, label: "千葉県立千葉女子高等学校" },
  { index: 105, teamIndex: 8, label: "千葉県立千葉東高等学校" },
  { index: 106, teamIndex: 8, label: "千葉県立京葉工業高等学校" },
  { index: 107, teamIndex: 8, label: "千葉県立検見川高等学校" },
  { index: 108, teamIndex: 8, label: "千葉県立千葉北高等学校" },
  { index: 109, teamIndex: 8, label: "千葉県立磯辺高等学校" },
  { index: 110, teamIndex: 8, label: "千葉県立幕張総合高等学校" },
  { index: 111, teamIndex: 8, label: "千葉県立柏井高等学校" },
  { index: 112, teamIndex: 8, label: "千葉県立千葉西高等学校" },
  { index: 113, teamIndex: 8, label: "千葉県立犢橋高等学校" },
  { index: 114, teamIndex: 8, label: "千葉市立千葉高等学校" },
  { index: 115, teamIndex: 8, label: "千葉市立稲毛高等学校" },
  { index: 116, teamIndex: 8, label: "千葉経済大附属高等学校" },
  { index: 117, teamIndex: 8, label: "敬愛学園高等学校" },
  { index: 118, teamIndex: 8, label: "渋谷学園幕張高等学校" },
  { index: 119, teamIndex: 8, label: "昭和学院秀英高等学校" },
  { index: 120, teamIndex: 9, label: "千葉県立船橋高等学校" },
  { index: 121, teamIndex: 9, label: "千葉県立薬園台高等学校" },
  { index: 122, teamIndex: 9, label: "千葉県立船橋東高等学校" },
  { index: 123, teamIndex: 9, label: "千葉県立船橋啓明高等学校" },
  { index: 124, teamIndex: 9, label: "千葉県立船橋芝山高等学校" },
  { index: 125, teamIndex: 9, label: "千葉県立船橋二和高等学校" },
  { index: 126, teamIndex: 9, label: "千葉県立船橋古和釜高等学校" },
  { index: 127, teamIndex: 9, label: "千葉県立船橋法典高等学校" },
  { index: 128, teamIndex: 9, label: "千葉県立船橋豊富高等学校" },
  { index: 129, teamIndex: 9, label: "千葉県立船橋北高等学校" },
  { index: 130, teamIndex: 9, label: "船橋市立船橋高等学校" },
  { index: 131, teamIndex: 9, label: "千葉県立東葉高等学校" },
  { index: 132, teamIndex: 9, label: "日大習志野高等学校" },
  { index: 133, teamIndex: 9, label: "千葉日大一高等学校" },
  { index: 134, teamIndex: 9, label: "東京学館船橋高等学校" },
  { index: 135, teamIndex: 9, label: "千葉県立鎌ヶ谷高等学校" },
  { index: 136, teamIndex: 9, label: "千葉県立鎌ヶ谷西高等学校" },
  { index: 137, teamIndex: 9, label: "千葉県立白井高等学校" },
  { index: 138, teamIndex: 9, label: "中山学園高等学校" },
  { index: 139, teamIndex: 10, label: "千葉県立市川工業高等学校" },
  { index: 140, teamIndex: 10, label: "千葉県立国府台高等学校" },
  { index: 141, teamIndex: 10, label: "千葉県立国分高等学校" },
  { index: 142, teamIndex: 10, label: "千葉県立行徳高等学校" },
  { index: 143, teamIndex: 10, label: "千葉県立市川東高等学校" },
  { index: 144, teamIndex: 10, label: "千葉県立市川南高等学校" },
  { index: 145, teamIndex: 10, label: "千葉県立市川昴高等学校" },
  { index: 146, teamIndex: 10, label: "筑波大附聴覚特別支援高等学校" },
  { index: 147, teamIndex: 10, label: "市川高等学校" },
  { index: 148, teamIndex: 10, label: "和洋国府台女子高等学校" },
  { index: 149, teamIndex: 10, label: "千葉商科大付属高等学校" },
  { index: 150, teamIndex: 10, label: "日出学園高等学校" },
  { index: 151, teamIndex: 10, label: "国府台女子学院高等学校" },
  { index: 152, teamIndex: 10, label: "昭和学院高等学校" },
  { index: 153, teamIndex: 10, label: "不二女子高等学校" },
  { index: 154, teamIndex: 10, label: "千葉県立浦安高等学校" },
  { index: 155, teamIndex: 10, label: "千葉県立浦安南高等学校" },
  { index: 156, teamIndex: 10, label: "東海大付属浦安高等学校" },
  { index: 157, teamIndex: 10, label: "東京学館浦安高等学校" },
  { index: 158, teamIndex: 11, label: "千葉県立松戸高等学校" },
  { index: 159, teamIndex: 11, label: "千葉県立小金高等学校" },
  { index: 160, teamIndex: 11, label: "千葉県立松戸国際高等学校" },
  { index: 161, teamIndex: 11, label: "千葉県立松戸南高等学校" },
  { index: 162, teamIndex: 11, label: "千葉県立松戸六実高等学校" },
  { index: 163, teamIndex: 11, label: "千葉県立松戸馬橋高等学校" },
  { index: 164, teamIndex: 11, label: "千葉県立松戸向陽高等学校" },
  { index: 165, teamIndex: 11, label: "千葉県立市立松戸高等学校" },
  { index: 166, teamIndex: 11, label: "専修大松戸高等学校" },
  { index: 167, teamIndex: 11, label: "聖徳大附属女子高等学校" },
  { index: 168, teamIndex: 11, label: "千葉県立流山高等学校" },
  { index: 169, teamIndex: 11, label: "千葉県立流山おおたかの森高等学校" },
  { index: 170, teamIndex: 11, label: "千葉県立流山南高等学校" },
  { index: 171, teamIndex: 11, label: "千葉県立流山北高等学校" },
  { index: 172, teamIndex: 11, label: "千葉県立野田中央高等学校" },
  { index: 173, teamIndex: 11, label: "千葉県立清水高等学校" },
  { index: 174, teamIndex: 11, label: "千葉県立関宿高等学校" },
  { index: 175, teamIndex: 11, label: "千葉県立西武台千葉高等学校" },
  { index: 176, teamIndex: 11, label: "あずさ第一高等学校" },
  { index: 177, teamIndex: 12, label: "千葉県立東葛飾高等学校" },
  { index: 178, teamIndex: 12, label: "千葉県立柏高等学校" },
  { index: 179, teamIndex: 12, label: "千葉県立柏南高等学校" },
  { index: 180, teamIndex: 12, label: "千葉県立柏陵高等学校" },
  { index: 181, teamIndex: 12, label: "千葉県立柏の葉高等学校" },
  { index: 182, teamIndex: 12, label: "千葉県立柏中央高等学校" },
  { index: 183, teamIndex: 12, label: "千葉県立沼南高等学校" },
  { index: 184, teamIndex: 12, label: "千葉県立沼南高柳高等学校" },
  { index: 185, teamIndex: 12, label: "柏市立柏高等学校" },
  { index: 186, teamIndex: 12, label: "流通経済大付属柏高等学校" },
  { index: 187, teamIndex: 12, label: "二松学舎大附属柏高等学校" },
  { index: 188, teamIndex: 12, label: "麗澤高等学校" },
  { index: 189, teamIndex: 12, label: "柏日体高等学校" },
  { index: 190, teamIndex: 12, label: "芝浦工大柏高等学校" },
  { index: 191, teamIndex: 12, label: "千葉県立我孫子高等学校" },
  { index: 192, teamIndex: 12, label: "千葉県立我孫子東高等学校" },
  { index: 193, teamIndex: 12, label: "我孫子二階堂高等学校" },
  { index: 194, teamIndex: 12, label: "中央学院高等学校" },
  { index: 195, teamIndex: 12, label: "わせがく柏高等学校" },
  { index: 196, teamIndex: 12, label: "クラーク記念国際高等学校" },
  { index: 197, teamIndex: 12, label: "柏高等技術学園高等学校" },
  { index: 198, teamIndex: 25, label: "旭市立第一中学校" },
  { index: 199, teamIndex: 25, label: "旭市立第二中学校" },
  { index: 200, teamIndex: 25, label: "旭市立海上中学校" },
  { index: 201, teamIndex: 25, label: "旭市立干潟中学校" },
  { index: 202, teamIndex: 25, label: "旭市立飯岡中学校" },
  { index: 203, teamIndex: 22, label: "我孫子市立我孫子中学校" },
  { index: 204, teamIndex: 22, label: "我孫子市立久寺家中学校" },
  { index: 205, teamIndex: 22, label: "我孫子市立湖北台中学校" },
  { index: 206, teamIndex: 22, label: "我孫子市立湖北中学校" },
  { index: 207, teamIndex: 22, label: "我孫子市立白山中学校" },
  { index: 208, teamIndex: 22, label: "我孫子市立布佐中学校" },
  { index: 209, teamIndex: 28, label: "いすみ市立国吉中学校" },
  { index: 210, teamIndex: 28, label: "いすみ市立大原中学校" },
  { index: 211, teamIndex: 28, label: "いすみ市立岬中学校" },
  { index: 212, teamIndex: 18, label: "市川市立第一中学校" },
  { index: 213, teamIndex: 18, label: "市川市立第二中学校" },
  { index: 214, teamIndex: 18, label: "市川市立第三中学校" },
  { index: 215, teamIndex: 18, label: "市川市立第四中学校" },
  { index: 216, teamIndex: 18, label: "市川市立第五中学校" },
  { index: 217, teamIndex: 18, label: "市川市立第六中学校" },
  { index: 218, teamIndex: 18, label: "市川市立第七中学校" },
  { index: 219, teamIndex: 18, label: "市川市立第八中学校" },
  { index: 220, teamIndex: 18, label: "市川市立塩浜学園学校" },
  { index: 221, teamIndex: 18, label: "市川市立下貝塚中学校" },
  { index: 222, teamIndex: 18, label: "市川市立高谷中学校" },
  { index: 223, teamIndex: 18, label: "市川市立大洲中学校" },
  { index: 224, teamIndex: 18, label: "市川市立東国分中学校" },
  { index: 225, teamIndex: 18, label: "市川市立南行徳中学校" },
  { index: 226, teamIndex: 18, label: "市川市立福栄中学校" },
  { index: 227, teamIndex: 18, label: "市川市立妙典中学校" },
  { index: 228, teamIndex: 27, label: "一宮町立一宮中学校" },
  { index: 229, teamIndex: 14, label: "市原市立ちはら台西中学校" },
  { index: 230, teamIndex: 14, label: "市原市立ちはら台南中学校" },
  { index: 231, teamIndex: 14, label: "市原市立加茂中学校" },
  { index: 232, teamIndex: 14, label: "市原市立菊間中学校" },
  { index: 233, teamIndex: 14, label: "市原市立五井中学校" },
  { index: 234, teamIndex: 14, label: "市原市立国分寺台西中学校" },
  { index: 235, teamIndex: 14, label: "市原市立国分寺台中学校" },
  { index: 236, teamIndex: 14, label: "市原市立三和中学校" },
  { index: 237, teamIndex: 14, label: "市原市立姉崎中学校" },
  { index: 238, teamIndex: 14, label: "市原市立姉崎東中学校" },
  { index: 239, teamIndex: 14, label: "市原市立市原中学校" },
  { index: 240, teamIndex: 14, label: "市原市立市東中学校" },
  { index: 241, teamIndex: 14, label: "市原市立湿津中学校" },
  { index: 242, teamIndex: 14, label: "市原市立若葉中学校" },
  { index: 243, teamIndex: 14, label: "市原市立千種中学校" },
  { index: 244, teamIndex: 14, label: "市原市立双葉中学校" },
  { index: 245, teamIndex: 14, label: "市原市立辰巳台中学校" },
  { index: 246, teamIndex: 14, label: "市原市立東海中学校" },
  { index: 247, teamIndex: 14, label: "市原市立南総中学校" },
  { index: 248, teamIndex: 14, label: "市原市立八幡中学校" },
  { index: 249, teamIndex: 14, label: "市原市立八幡東中学校" },
  { index: 250, teamIndex: 14, label: "市原市立有秋中学校" },
  { index: 251, teamIndex: 23, label: "印西市立印西中学校" },
  { index: 252, teamIndex: 23, label: "印西市立印旛中学校" },
  { index: 253, teamIndex: 23, label: "印西市立原山中学校" },
  { index: 254, teamIndex: 23, label: "印西市立小林中学校" },
  { index: 255, teamIndex: 23, label: "印西市立西の原中学校" },
  { index: 256, teamIndex: 23, label: "印西市立船穂中学校" },
  { index: 257, teamIndex: 23, label: "印西市立滝野中学校" },
  { index: 258, teamIndex: 23, label: "印西市立本埜中学校" },
  { index: 259, teamIndex: 23, label: "印西市立木刈中学校" },
  { index: 260, teamIndex: 18, label: "浦安市立高洲中学校" },
  { index: 261, teamIndex: 18, label: "浦安市立浦安中学校" },
  { index: 262, teamIndex: 18, label: "浦安市立見明川中学校" },
  { index: 263, teamIndex: 18, label: "浦安市立日の出中学校" },
  { index: 264, teamIndex: 18, label: "浦安市立入船中学校" },
  { index: 265, teamIndex: 18, label: "浦安市立美浜中学校" },
  { index: 266, teamIndex: 18, label: "浦安市立富岡中学校" },
  { index: 267, teamIndex: 18, label: "浦安市立堀江中学校" },
  { index: 268, teamIndex: 18, label: "浦安市立明海中学校" },
  { index: 269, teamIndex: 26, label: "大網白里市立増穂中学校" },
  { index: 270, teamIndex: 26, label: "大網白里市立大網中学校" },
  { index: 271, teamIndex: 26, label: "大網白里市立白里中学校" },
  { index: 272, teamIndex: 28, label: "大多喜町立西中学校" },
  { index: 273, teamIndex: 28, label: "大多喜町立大多喜中学校" },
  { index: 274, teamIndex: 28, label: "御宿町立御宿中学校" },
  { index: 275, teamIndex: 20, label: "柏市立柏中学校" },
  { index: 276, teamIndex: 20, label: "柏市立柏第二中学校" },
  { index: 277, teamIndex: 20, label: "柏市立柏第三中学校" },
  { index: 278, teamIndex: 20, label: "柏市立柏第四中学校" },
  { index: 279, teamIndex: 20, label: "柏市立柏第五中学校" },
  { index: 280, teamIndex: 20, label: "柏市立光ヶ丘中学校" },
  { index: 281, teamIndex: 20, label: "柏市立逆井中学校" },
  { index: 282, teamIndex: 20, label: "柏市立高柳中学校" },
  { index: 283, teamIndex: 20, label: "柏市立手賀中学校" },
  { index: 284, teamIndex: 20, label: "柏市立酒井根中学校" },
  { index: 285, teamIndex: 20, label: "柏市立松葉中学校" },
  { index: 286, teamIndex: 20, label: "柏市立西原中学校" },
  { index: 287, teamIndex: 20, label: "柏市立大津ケ丘中学校" },
  { index: 288, teamIndex: 20, label: "柏市立中原中学校" },
  { index: 289, teamIndex: 20, label: "柏市立田中中学校" },
  { index: 290, teamIndex: 20, label: "柏市立土中学校" },
  { index: 291, teamIndex: 20, label: "柏市立南部中学校" },
  { index: 292, teamIndex: 20, label: "柏市立富勢中学校" },
  { index: 293, teamIndex: 20, label: "柏市立風早中学校" },
  { index: 294, teamIndex: 20, label: "柏市立豊四季中学校" },
  { index: 295, teamIndex: 28, label: "勝浦市立勝浦中学校" },
  { index: 296, teamIndex: 24, label: "香取市立栗源中学校" },
  { index: 297, teamIndex: 24, label: "香取市立香取中学校" },
  { index: 298, teamIndex: 24, label: "香取市立佐原第五中学校" },
  { index: 299, teamIndex: 24, label: "香取市立佐原中学校" },
  { index: 300, teamIndex: 24, label: "香取市立山田中学校" },
  { index: 301, teamIndex: 24, label: "香取市立小見川中学校" },
  { index: 302, teamIndex: 24, label: "香取市立新島中学校" },
  { index: 303, teamIndex: 22, label: "鎌ケ谷市立鎌ケ谷中学校" },
  { index: 304, teamIndex: 22, label: "鎌ケ谷市立第二中学校" },
  { index: 305, teamIndex: 22, label: "鎌ケ谷市立第三中学校" },
  { index: 306, teamIndex: 22, label: "鎌ケ谷市立第四中学校" },
  { index: 307, teamIndex: 22, label: "鎌ケ谷市立第五中学校" },
  { index: 308, teamIndex: 29, label: "鴨川市立安房東中学校" },
  { index: 309, teamIndex: 29, label: "鴨川市立鴨川中学校" },
  { index: 310, teamIndex: 29, label: "鴨川市立長狭中学校" },
  { index: 311, teamIndex: 24, label: "神崎町立神崎中学校" },
  { index: 312, teamIndex: 30, label: "木更津市立木更津第一中学校" },
  { index: 313, teamIndex: 30, label: "木更津市立木更津第二中学校" },
  { index: 314, teamIndex: 30, label: "木更津市立木更津第三中学校" },
  { index: 315, teamIndex: 30, label: "木更津市立鎌足中学校" },
  { index: 316, teamIndex: 30, label: "木更津市立岩根西中学校" },
  { index: 317, teamIndex: 30, label: "木更津市立岩根中学校" },
  { index: 318, teamIndex: 30, label: "木更津市立金田中学校" },
  { index: 319, teamIndex: 30, label: "木更津市立清川中学校" },
  { index: 320, teamIndex: 30, label: "木更津市立太田中学校" },
  { index: 321, teamIndex: 30, label: "木更津市立中郷中学校" },
  { index: 322, teamIndex: 30, label: "木更津市立波岡中学校" },
  { index: 323, teamIndex: 30, label: "木更津市立畑沢中学校" },
  { index: 324, teamIndex: 30, label: "木更津市立富来田中学校" },
  { index: 325, teamIndex: 31, label: "君津市立亀山中学校" },
  { index: 326, teamIndex: 31, label: "君津市立久留里中学校" },
  { index: 327, teamIndex: 31, label: "君津市立君津中学校" },
  { index: 328, teamIndex: 31, label: "君津市立周西中学校" },
  { index: 329, teamIndex: 31, label: "君津市立周西南中学校" },
  { index: 330, teamIndex: 31, label: "君津市立周南中学校" },
  { index: 331, teamIndex: 31, label: "君津市立小糸中学校" },
  { index: 332, teamIndex: 31, label: "君津市立小櫃中学校" },
  { index: 333, teamIndex: 31, label: "君津市立松丘中学校" },
  { index: 334, teamIndex: 31, label: "君津市立清和中学校" },
  { index: 335, teamIndex: 31, label: "君津市立八重原中学校" },
  { index: 336, teamIndex: 29, label: "鋸南町立鋸南中学校" },
  { index: 337, teamIndex: 26, label: "九十九里町立九十九里中学校" },
  { index: 338, teamIndex: 13, label: "県立千葉中学校" },
  { index: 339, teamIndex: 20, label: "県立東葛飾中学校" },
  { index: 340, teamIndex: 13, label: "国立千葉大附中学校" },
  { index: 341, teamIndex: 23, label: "栄町立栄中学校" },
  { index: 342, teamIndex: 23, label: "佐倉市立井野中学校" },
  { index: 343, teamIndex: 23, label: "佐倉市立臼井西中学校" },
  { index: 344, teamIndex: 23, label: "佐倉市立臼井中学校" },
  { index: 345, teamIndex: 23, label: "佐倉市立臼井南中学校" },
  { index: 346, teamIndex: 23, label: "佐倉市立根郷中学校" },
  { index: 347, teamIndex: 23, label: "佐倉市立佐倉中学校" },
  { index: 348, teamIndex: 23, label: "佐倉市立佐倉東中学校" },
  { index: 349, teamIndex: 23, label: "佐倉市立志津中学校" },
  { index: 350, teamIndex: 23, label: "佐倉市立上志津中学校" },
  { index: 351, teamIndex: 23, label: "佐倉市立西志津中学校" },
  { index: 352, teamIndex: 23, label: "佐倉市立南部中学校" },
  { index: 353, teamIndex: 26, label: "山武市立山武中学校" },
  { index: 354, teamIndex: 26, label: "山武市立山武南中学校" },
  { index: 355, teamIndex: 26, label: "山武市立松尾中学校" },
  { index: 356, teamIndex: 26, label: "山武市立成東中学校" },
  { index: 357, teamIndex: 26, label: "山武市立成東東中学校" },
  { index: 358, teamIndex: 26, label: "山武市立蓮沼中学校" },
  { index: 359, teamIndex: 23, label: "酒々井町立酒々井中学校" },
  { index: 360, teamIndex: 26, label: "芝山町立芝山中学校" },
  { index: 361, teamIndex: 30, label: "私立暁星国際中学校" },
  { index: 362, teamIndex: 18, label: "私立国府台女子学院中学校" },
  { index: 363, teamIndex: 18, label: "私立市川中学校" },
  { index: 364, teamIndex: 30, label: "私立志学館中学校" },
  { index: 365, teamIndex: 20, label: "私立芝浦工業大学柏中学校" },
  {
    index: 366,
    teamIndex: 16,
    label: "私立秀明大学学校教師学部附属秀明八千代中学校",
  },
  { index: 367, teamIndex: 13, label: "私立渋谷教育学園幕張中学校" },
  { index: 368, teamIndex: 18, label: "私立昭和学院中学校" },
  { index: 369, teamIndex: 13, label: "私立昭和学院秀英中学校" },
  { index: 370, teamIndex: 23, label: "私立成田高付属中学校" },
  { index: 371, teamIndex: 19, label: "私立聖徳大学附属女子中学校" },
  { index: 372, teamIndex: 21, label: "私立西武台千葉中学校" },
  { index: 373, teamIndex: 15, label: "私立千葉日本大学第一中学校" },
  { index: 374, teamIndex: 13, label: "私立千葉明徳中学校" },
  { index: 375, teamIndex: 19, label: "私立専修大学松戸中学校" },
  {
    index: 376,
    teamIndex: 18,
    label: "私立東海大学付属浦安高等学校中等部中学校",
  },
  { index: 377, teamIndex: 18, label: "私立東京学館浦安中学校" },
  { index: 378, teamIndex: 18, label: "私立東邦大学付属東邦中学校" },
  { index: 379, teamIndex: 20, label: "私立二松学舎大学附属柏中学校" },
  { index: 380, teamIndex: 18, label: "私立日出学園中学校" },
  { index: 381, teamIndex: 16, label: "私立八千代松陰中学校" },
  { index: 382, teamIndex: 20, label: "私立麗澤中学校" },
  { index: 383, teamIndex: 18, label: "私立和洋国府台女子中学校" },
  { index: 384, teamIndex: 31, label: "私立翔凜中学校" },
  { index: 385, teamIndex: 23, label: "白井市立桜台中学校" },
  { index: 386, teamIndex: 23, label: "白井市立七次台中学校" },
  { index: 387, teamIndex: 23, label: "白井市立大山口中学校" },
  { index: 388, teamIndex: 23, label: "白井市立南山中学校" },
  { index: 389, teamIndex: 23, label: "白井市立白井中学校" },
  { index: 390, teamIndex: 27, label: "白子町立白子中学校" },
  { index: 391, teamIndex: 25, label: "匝瑳市立八日市場第一中学校" },
  { index: 392, teamIndex: 25, label: "匝瑳市立八日市場第二中学校" },
  { index: 393, teamIndex: 25, label: "匝瑳市立野栄中学校" },
  { index: 394, teamIndex: 30, label: "袖ケ浦市立根形中学校" },
  { index: 395, teamIndex: 30, label: "袖ケ浦市立昭和中学校" },
  { index: 396, teamIndex: 30, label: "袖ケ浦市立蔵波中学校" },
  { index: 397, teamIndex: 30, label: "袖ケ浦市立長浦中学校" },
  { index: 398, teamIndex: 30, label: "袖ケ浦市立平川中学校" },
  { index: 399, teamIndex: 24, label: "多古町立多古中学校" },
  { index: 400, teamIndex: 29, label: "館山市立第一中学校" },
  { index: 401, teamIndex: 29, label: "館山市立第二中学校" },
  { index: 402, teamIndex: 29, label: "館山市立第三中学校" },
  { index: 403, teamIndex: 29, label: "館山市立房南中学校" },
  { index: 404, teamIndex: 13, label: "千葉市立幸町第一中学校" },
  { index: 405, teamIndex: 13, label: "千葉市立幸町第二中学校" },
  { index: 406, teamIndex: 13, label: "千葉市立高洲第一中学校" },
  { index: 407, teamIndex: 13, label: "千葉市立高洲第二中学校" },
  { index: 408, teamIndex: 13, label: "千葉市立磯辺中学校" },
  { index: 409, teamIndex: 13, label: "千葉市立おゆみ野南中学校" },
  { index: 410, teamIndex: 13, label: "千葉市立こてはし台中学校" },
  { index: 411, teamIndex: 13, label: "千葉市立さつきが丘中学校" },
  { index: 412, teamIndex: 13, label: "千葉市立花見川中学校" },
  { index: 413, teamIndex: 13, label: "千葉市立真砂中学校" },
  { index: 414, teamIndex: 13, label: "千葉市立みつわ台中学校" },
  { index: 415, teamIndex: 13, label: "千葉市立稲浜中学校" },
  { index: 416, teamIndex: 13, label: "千葉市立稲毛高校附属中学校" },
  { index: 417, teamIndex: 13, label: "千葉市立稲毛中学校" },
  { index: 418, teamIndex: 13, label: "千葉市立越智中学校" },
  { index: 419, teamIndex: 13, label: "千葉市立加曽利中学校" },
  { index: 420, teamIndex: 13, label: "千葉市立花園中学校" },
  { index: 421, teamIndex: 13, label: "千葉市立貝塚中学校" },
  { index: 422, teamIndex: 13, label: "千葉市立葛城中学校" },
  { index: 423, teamIndex: 13, label: "千葉市立更科中学校" },
  { index: 424, teamIndex: 13, label: "千葉市立高浜中学校" },
  { index: 425, teamIndex: 13, label: "千葉市立轟町中学校" },
  { index: 426, teamIndex: 13, label: "千葉市立山王中学校" },
  { index: 427, teamIndex: 13, label: "千葉市立若松中学校" },
  { index: 428, teamIndex: 13, label: "千葉市立小中台中学校" },
  { index: 429, teamIndex: 13, label: "千葉市立松ケ丘中学校" },
  { index: 430, teamIndex: 13, label: "千葉市立新宿中学校" },
  { index: 431, teamIndex: 13, label: "千葉市立星久喜中学校" },
  { index: 432, teamIndex: 13, label: "千葉市立生浜中学校" },
  { index: 433, teamIndex: 13, label: "千葉市立千城台西中学校" },
  { index: 434, teamIndex: 13, label: "千葉市立千城台南中学校" },
  { index: 435, teamIndex: 13, label: "千葉市立千草台中学校" },
  { index: 436, teamIndex: 13, label: "千葉市立川戸中学校" },
  { index: 437, teamIndex: 13, label: "千葉市立泉谷中学校" },
  { index: 438, teamIndex: 13, label: "千葉市立蘇我中学校" },
  { index: 439, teamIndex: 13, label: "千葉市立草野中学校" },
  { index: 440, teamIndex: 13, label: "千葉市立打瀬中学校" },
  { index: 441, teamIndex: 13, label: "千葉市立大宮中学校" },
  { index: 442, teamIndex: 13, label: "千葉市立大椎中学校" },
  { index: 443, teamIndex: 13, label: "千葉市立朝日ケ丘中学校" },
  { index: 444, teamIndex: 13, label: "千葉市立椿森中学校" },
  { index: 445, teamIndex: 13, label: "千葉市立天戸中学校" },
  { index: 446, teamIndex: 13, label: "千葉市立都賀中学校" },
  { index: 447, teamIndex: 13, label: "千葉市立土気中学校" },
  { index: 448, teamIndex: 13, label: "千葉市立土気南中学校" },
  { index: 449, teamIndex: 13, label: "千葉市立白井中学校" },
  { index: 450, teamIndex: 13, label: "千葉市立幕張西中学校" },
  { index: 451, teamIndex: 13, label: "千葉市立幕張中学校" },
  { index: 452, teamIndex: 13, label: "千葉市立幕張本郷中学校" },
  { index: 453, teamIndex: 13, label: "千葉市立末広中学校" },
  { index: 454, teamIndex: 13, label: "千葉市立有吉中学校" },
  { index: 455, teamIndex: 13, label: "千葉市立誉田中学校" },
  { index: 456, teamIndex: 13, label: "千葉市立緑が丘中学校" },
  { index: 457, teamIndex: 13, label: "千葉市立緑町中学校" },
  { index: 458, teamIndex: 13, label: "千葉市立犢橋中学校" },
  { index: 459, teamIndex: 25, label: "銚子市立第一中学校" },
  { index: 460, teamIndex: 25, label: "銚子市立第二中学校" },
  { index: 461, teamIndex: 25, label: "銚子市立第三中学校" },
  { index: 462, teamIndex: 25, label: "銚子市立第五中学校" },
  { index: 463, teamIndex: 25, label: "銚子市立第六中学校" },
  { index: 464, teamIndex: 25, label: "銚子市立第七中学校" },
  { index: 465, teamIndex: 25, label: "銚子市立銚子中学校" },
  { index: 466, teamIndex: 27, label: "長生村立長生中学校" },
  { index: 467, teamIndex: 27, label: "長南町立長南中学校" },
  { index: 468, teamIndex: 26, label: "東金市立西中学校" },
  { index: 469, teamIndex: 26, label: "東金市立東金中学校" },
  { index: 470, teamIndex: 26, label: "東金市立東中学校" },
  { index: 471, teamIndex: 26, label: "東金市立北中学校" },
  { index: 472, teamIndex: 24, label: "東庄町立東庄中学校" },
  { index: 473, teamIndex: 27, label: "長柄町立長柄中学校" },
  { index: 474, teamIndex: 21, label: "流山市立おおたかの森中学校" },
  { index: 475, teamIndex: 21, label: "流山市立常盤松中学校" },
  { index: 476, teamIndex: 21, label: "流山市立西初石中学校" },
  { index: 477, teamIndex: 21, label: "流山市立東深井中学校" },
  { index: 478, teamIndex: 21, label: "流山市立東部中学校" },
  { index: 479, teamIndex: 21, label: "流山市立南部中学校" },
  { index: 480, teamIndex: 21, label: "流山市立南流山中学校" },
  { index: 481, teamIndex: 21, label: "流山市立八木中学校" },
  { index: 482, teamIndex: 21, label: "流山市立北部中学校" },
  { index: 483, teamIndex: 15, label: "習志野市立第一中学校" },
  { index: 484, teamIndex: 15, label: "習志野市立第二中学校" },
  { index: 485, teamIndex: 15, label: "習志野市立第三中学校" },
  { index: 486, teamIndex: 15, label: "習志野市立第四中学校" },
  { index: 487, teamIndex: 15, label: "習志野市立第五中学校" },
  { index: 488, teamIndex: 15, label: "習志野市立第六中学校" },
  { index: 489, teamIndex: 15, label: "習志野市立第七中学校" },
  { index: 490, teamIndex: 23, label: "成田市立公津の杜中学校" },
  { index: 491, teamIndex: 23, label: "成田市立下総みどり学園学校" },
  { index: 492, teamIndex: 23, label: "成田市立遠山中学校" },
  { index: 493, teamIndex: 23, label: "成田市立久住中学校" },
  { index: 494, teamIndex: 23, label: "成田市立玉造中学校" },
  { index: 495, teamIndex: 23, label: "成田市立吾妻中学校" },
  { index: 496, teamIndex: 23, label: "成田市立成田中学校" },
  { index: 497, teamIndex: 23, label: "成田市立西中学校" },
  { index: 498, teamIndex: 23, label: "成田市立大栄中学校" },
  { index: 499, teamIndex: 23, label: "成田市立中台中学校" },
  { index: 500, teamIndex: 21, label: "野田市立第一中学校" },
  { index: 501, teamIndex: 21, label: "野田市立第二中学校" },
  { index: 502, teamIndex: 21, label: "野田市立関宿中学校" },
  { index: 503, teamIndex: 21, label: "野田市立岩名中学校" },
  { index: 504, teamIndex: 21, label: "野田市立川間中学校" },
  { index: 505, teamIndex: 21, label: "野田市立東部中学校" },
  { index: 506, teamIndex: 21, label: "野田市立南部中学校" },
  { index: 507, teamIndex: 21, label: "野田市立二川中学校" },
  { index: 508, teamIndex: 21, label: "野田市立福田中学校" },
  { index: 509, teamIndex: 21, label: "野田市立北部中学校" },
  { index: 510, teamIndex: 21, label: "野田市立木間ケ瀬中学校" },
  { index: 511, teamIndex: 31, label: "富津市立佐貫中学校" },
  { index: 512, teamIndex: 31, label: "富津市立大貫中学校" },
  { index: 513, teamIndex: 31, label: "富津市立天羽中学校" },
  { index: 514, teamIndex: 31, label: "富津市立天羽東中学校" },
  { index: 515, teamIndex: 31, label: "富津市立富津中学校" },
  { index: 516, teamIndex: 23, label: "富里市立富里中学校" },
  { index: 517, teamIndex: 23, label: "富里市立富里南中学校" },
  { index: 518, teamIndex: 23, label: "富里市立富里北中学校" },
  { index: 519, teamIndex: 17, label: "船橋市立旭中学校" },
  { index: 520, teamIndex: 17, label: "船橋市立海神中学校" },
  { index: 521, teamIndex: 17, label: "船橋市立葛飾中学校" },
  { index: 522, teamIndex: 17, label: "船橋市立宮本中学校" },
  { index: 523, teamIndex: 17, label: "船橋市立金杉台中学校" },
  { index: 524, teamIndex: 17, label: "船橋市立古和釜中学校" },
  { index: 525, teamIndex: 17, label: "船橋市立御滝中学校" },
  { index: 526, teamIndex: 17, label: "船橋市立行田中学校" },
  { index: 527, teamIndex: 17, label: "船橋市立高根台中学校" },
  { index: 528, teamIndex: 17, label: "船橋市立高根中学校" },
  { index: 529, teamIndex: 17, label: "船橋市立三山中学校" },
  { index: 530, teamIndex: 17, label: "船橋市立三田中学校" },
  { index: 531, teamIndex: 17, label: "船橋市立七林中学校" },
  { index: 532, teamIndex: 17, label: "船橋市立芝山中学校" },
  { index: 533, teamIndex: 17, label: "船橋市立若松中学校" },
  { index: 534, teamIndex: 17, label: "船橋市立習志野台中学校" },
  { index: 535, teamIndex: 17, label: "船橋市立小室中学校" },
  { index: 536, teamIndex: 17, label: "船橋市立船橋中学校" },
  { index: 537, teamIndex: 17, label: "船橋市立前原中学校" },
  { index: 538, teamIndex: 17, label: "船橋市立大穴中学校" },
  { index: 539, teamIndex: 17, label: "船橋市立坪井中学校" },
  { index: 540, teamIndex: 17, label: "船橋市立二宮中学校" },
  { index: 541, teamIndex: 17, label: "船橋市立八木が谷中学校" },
  { index: 542, teamIndex: 17, label: "船橋市立飯山満中学校" },
  { index: 543, teamIndex: 17, label: "船橋市立法田中学校" },
  { index: 544, teamIndex: 17, label: "船橋市立豊富中学校" },
  { index: 545, teamIndex: 17, label: "船橋市立湊中学校" },
  { index: 546, teamIndex: 19, label: "松戸市立第一中学校" },
  { index: 547, teamIndex: 19, label: "松戸市立第二中学校" },
  { index: 548, teamIndex: 19, label: "松戸市立第三中学校" },
  { index: 549, teamIndex: 19, label: "松戸市立第四中学校" },
  { index: 550, teamIndex: 19, label: "松戸市立第五中学校" },
  { index: 551, teamIndex: 19, label: "松戸市立第六中学校" },
  { index: 552, teamIndex: 19, label: "松戸市立旭町中学校" },
  { index: 553, teamIndex: 19, label: "松戸市立河原塚中学校" },
  { index: 554, teamIndex: 19, label: "松戸市立金ヶ作中学校" },
  { index: 555, teamIndex: 19, label: "松戸市立栗ヶ沢中学校" },
  { index: 556, teamIndex: 19, label: "松戸市立古ヶ崎中学校" },
  { index: 557, teamIndex: 19, label: "松戸市立根木内中学校" },
  { index: 558, teamIndex: 19, label: "松戸市立小金中学校" },
  { index: 559, teamIndex: 19, label: "松戸市立小金南中学校" },
  { index: 560, teamIndex: 19, label: "松戸市立小金北中学校" },
  { index: 561, teamIndex: 19, label: "松戸市立常盤平中学校" },
  { index: 562, teamIndex: 19, label: "松戸市立新松戸南中学校" },
  { index: 563, teamIndex: 19, label: "松戸市立牧野原中学校" },
  { index: 564, teamIndex: 19, label: "松戸市立六実中学校" },
  { index: 565, teamIndex: 19, label: "松戸市立和名ヶ谷中学校" },
  { index: 566, teamIndex: 29, label: "南房総市立嶺南中学校" },
  { index: 567, teamIndex: 29, label: "南房総市立三芳中学校" },
  { index: 568, teamIndex: 29, label: "南房総市立千倉中学校" },
  { index: 569, teamIndex: 29, label: "南房総市立白浜中学校" },
  { index: 570, teamIndex: 29, label: "南房総市立富浦中学校" },
  { index: 571, teamIndex: 29, label: "南房総市立富山中学校" },
  { index: 572, teamIndex: 27, label: "睦沢町立睦沢中学校" },
  { index: 573, teamIndex: 27, label: "茂原市立西陵中学校" },
  { index: 574, teamIndex: 27, label: "茂原市立早野中学校" },
  { index: 575, teamIndex: 27, label: "茂原市立東中学校" },
  { index: 576, teamIndex: 27, label: "茂原市立南中学校" },
  { index: 577, teamIndex: 27, label: "茂原市立冨士見中学校" },
  { index: 578, teamIndex: 27, label: "茂原市立本納中学校" },
  { index: 579, teamIndex: 27, label: "茂原市立茂原中学校" },
  { index: 580, teamIndex: 23, label: "八街市立八街中学校" },
  { index: 581, teamIndex: 23, label: "八街市立八街中央中学校" },
  { index: 582, teamIndex: 23, label: "八街市立八街南中学校" },
  { index: 583, teamIndex: 23, label: "八街市立八街北中学校" },
  { index: 584, teamIndex: 16, label: "八千代市立阿蘇中学校" },
  { index: 585, teamIndex: 16, label: "八千代市立萱田中学校" },
  { index: 586, teamIndex: 16, label: "八千代市立高津中学校" },
  { index: 587, teamIndex: 16, label: "八千代市立勝田台中学校" },
  { index: 588, teamIndex: 16, label: "八千代市立村上中学校" },
  { index: 589, teamIndex: 16, label: "八千代市立村上東中学校" },
  { index: 590, teamIndex: 16, label: "八千代市立大和田中学校" },
  { index: 591, teamIndex: 16, label: "八千代市立東高津中学校" },
  { index: 592, teamIndex: 16, label: "八千代市立八千代台西中学校" },
  { index: 593, teamIndex: 16, label: "八千代市立八千代中学校" },
  { index: 594, teamIndex: 16, label: "八千代市立睦中学校" },
  { index: 595, teamIndex: 26, label: "横芝光町立横芝中学校" },
  { index: 596, teamIndex: 26, label: "横芝光町立光中学校" },
  { index: 597, teamIndex: 23, label: "四街道市立旭中学校" },
  { index: 598, teamIndex: 23, label: "四街道市立四街道西中学校" },
  { index: 599, teamIndex: 23, label: "四街道市立四街道中学校" },
  { index: 600, teamIndex: 23, label: "四街道市立四街道北中学校" },
  { index: 601, teamIndex: 23, label: "四街道市立千代田中学校" },
  { index: 602, teamIndex: 32, label: "中山　孔夫" },
  { index: 603, teamIndex: 0, label: "千城クラブ" },
  { index: 604, teamIndex: 0, label: "トトロクラブ" },
  { index: 605, teamIndex: 0, label: "TOMAX" },
  { index: 606, teamIndex: 0, label: "あり-なJr" },
  { index: 607, teamIndex: 0, label: "流山アストロズ" },
  { index: 608, teamIndex: 0, label: "柏ソレイユ" },
  { index: 609, teamIndex: 0, label: "白山ジュニア" },
  { index: 610, teamIndex: 0, label: "木更津クラブ" },
  { index: 611, teamIndex: 0, label: "長生茂原卓球クラブ" },
  { index: 612, teamIndex: 0, label: "T-Field" },
  { index: 613, teamIndex: 0, label: "千葉クラブ" },
  { index: 614, teamIndex: 0, label: "アイ・ユ－" },
  { index: 615, teamIndex: 0, label: "SFC" },
  { index: 616, teamIndex: 0, label: "卓球技塾" },
  { index: 617, teamIndex: 0, label: "横芝スポ－ツ少年団" },
  { index: 618, teamIndex: 0, label: "マイダス（千）" },
  { index: 619, teamIndex: 0, label: "サイタスポ－ツ" },
  { index: 620, teamIndex: 0, label: "永享寺TTC" },
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
