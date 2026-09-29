// ==========================================
// 1. DỮ LIỆU BÀI HỌC (MINNA NO NIHONGO 1-10)
// ==========================================
const minnaData = {
  lesson1: {
    title: "Bài 1: Giới thiệu bản thân",
    vocab: [
      { id: 1, jp: "わたし", romaji: "watashi", vi: "Tôi", audioText: "わたし" },
      { id: 2, jp: "あなた", romaji: "anata", vi: "Bạn / Anh / Chị", audioText: "あなた" },
      { id: 3, jp: "あのひと", romaji: "ano hito", vi: "Người kia", audioText: "あのひと" },
      { id: 4, jp: "あのかた", romaji: "ano kata", vi: "Vị kia (lịch sự)", audioText: "あのかた" },
      { id: 5, jp: "みなさん", romaji: "minasan", vi: "Mọi người", audioText: "みなさん" },
      { id: 6, jp: "～さん", romaji: "~san", vi: "Anh / Chị / Ông / Bà", audioText: "さん" },
      { id: 7, jp: "～ちゃん", romaji: "~chan", vi: "Bé (xưng hô trẻ em)", audioText: "ちゃん" },
      { id: 8, jp: "～じん", romaji: "~jin", vi: "Người (nước...)", audioText: "じん" },
      { id: 9, jp: "せんせい", romaji: "sensei", vi: "Thầy / Cô giáo", audioText: "せんせい" },
      { id: 10, jp: "きょうし", romaji: "kyoushi", vi: "Giáo viên (nghề nghiệp)", audioText: "きょうし" },
      { id: 11, jp: "がくせい", romaji: "gakusei", vi: "Học sinh / Sinh viên", audioText: "がくせい" },
      { id: 12, jp: "かいしゃいん", romaji: "kaishain", vi: "Nhân viên công ty", audioText: "かいしゃいん" },
      { id: 13, jp: "しゃいん", romaji: "shain", vi: "Nhân viên công ty (đi kèm tên)", audioText: "しゃいん" },
      { id: 14, jp: "ぎんこういん", romaji: "ginkouin", vi: "Nhân viên ngân hàng", audioText: "ぎんこういん" },
      { id: 15, jp: "いしゃ", romaji: "isha", vi: "Bác sĩ", audioText: "いしゃ" },
      { id: 16, jp: "けんきゅうしゃ", romaji: "kenkyuusha", vi: "Nhà nghiên cứu", audioText: "けんきゅうしゃ" },
      { id: 17, jp: "エンジニア", romaji: "enjinia", vi: "Kỹ sư", audioText: "エンジニア" },
      { id: 18, jp: "だいがく", romaji: "daigaku", vi: "Trường đại học", audioText: "だいがく" },
      { id: 19, jp: "びょういん", romaji: "byouin", vi: "Bệnh viện", audioText: "びょういん" },
      { id: 20, jp: "でんき", romaji: "denki", vi: "Điện / Đèn điện", audioText: "でんき" },
      { id: 21, jp: "だれ（どなた）", romaji: "dare (donata)", vi: "Ai (Vị nào)", audioText: "だれ" },
      { id: 22, jp: "～さい", romaji: "~sai", vi: "Tuổi", audioText: "さい" },
      { id: 23, jp: "なんさい", romaji: "nansai", vi: "Mấy tuổi", audioText: "なんさい" },
      { id: 24, jp: "はい", romaji: "hai", vi: "Vâng / Đúng vậy", audioText: "はい" },
      { id: 25, jp: "いいえ", romaji: "iie", vi: "Không / Không phải", audioText: "いいえ" },
      { id: 26, jp: "はじめまして", romaji: "hajimemashite", vi: "Rất hân hạnh được gặp bạn", audioText: "はじめまして" },
      { id: 27, jp: "～からきました", romaji: "~kara kimashita", vi: "Tôi đến từ...", audioText: "からきました" },
      { id: 28, jp: "どうぞよろしくおねがいします", romaji: "douzo yoroshiku onegaishimasu", vi: "Rất mong được giúp đỡ", audioText: "どうぞよろしくおねがいします" },
      { id: 29, jp: "しつれいですが", romaji: "shitsurei desu ga", vi: "Xin lỗi / Xin mạn phép...", audioText: "しつれいですが" },
      { id: 30, jp: "おなまえは？", romaji: "onamae wa?", vi: "Tên bạn là gì?", audioText: "おなまえは" }
    ],
    grammar: [
      { pattern: "N1 は N2 です", meaning: "N1 là N2", example: "わたしは がくせいです。", exampleVi: "Tôi là sinh viên." },
      { pattern: "N1 は N2 じゃ ありません", meaning: "N1 không phải là N2", example: "わたしは いしゃじゃ ありません。", exampleVi: "Tôi không phải bác sĩ." },
      { pattern: "S + か", meaning: "Câu hỏi nghi vấn", example: "あのひとは せんせいですか。", exampleVi: "Người kia có phải giáo viên không?" },
      { pattern: "N も", meaning: "N cũng là...", example: "サントスさんも かいしゃいんです。", exampleVi: "Anh Santos cũng là nhân viên." },
      { pattern: "N1 の N2", meaning: "N2 thuộc/của N1", example: "ミラーさんは IMCの しゃいんです。", exampleVi: "Anh Miller là nhân viên IMC." }
    ],
    fillBlanks: [
      { id: 1, question: "わたし [blank] がくせいです。", answer: "は", options: ["は", "が", "の", "も"] },
      { id: 2, question: "あのひとは いしゃ [blank] ありません。", answer: "じゃ", options: ["じゃ", "は", "か", "と"] },
      { id: 3, question: "ミラーさんは IMC [blank] しゃいんです。", answer: "の", options: ["の", "は", "も", "で"] },
      { id: 4, question: "サントスさん [blank] かいしゃいんですか。", answer: "も", options: ["も", "の", "へ", "で"] },
      { id: 5, question: "あのかたは [blank] ですか。- マイクさんです。", answer: "どなた", options: ["どなた", "なんさい", "なん", "どこ"] },
      { id: 6, question: "たなかさんは 30さい [blank]。", answer: "です", options: ["です", "じゃ", "か", "の"] }
    ],
    quiz: [
      { q: "ぎんこういん nghĩa là gì?", options: ["Bác sĩ", "Nhân viên ngân hàng", "Giáo viên", "Học sinh"], a: 1 },
      { q: "Từ nào nghĩa là 'Thầy/Cô giáo'?", options: ["がくせい", "いしゃ", "せんせい", "かいしゃいん"], a: 2 },
      { q: "Mẫu câu 'A cũng là B' dùng trợ từ nào?", options: ["は", "の", "も", "で"], a: 2 },
      { q: "Cách hỏi tuổi lịch sự là gì?", options: ["なんさい", "おいくつ", "どなた", "どちら"], a: 1 },
      { q: "Từ nào dùng để nói 'Đến từ...'", options: ["～からきました", "～からいきました", "～へいきました", "～ではありません"], a: 0 },
      { q: "'Nhà nghiên cứu' tiếng Nhật là gì?", options: ["いしゃ", "けんきゅうしゃ", "エンジニア", "きょうし"], a: 1 }
    ]
  },

  lesson2: {
    title: "Bài 2: Đồ vật xung quanh",
    vocab: [
      { id: 1, jp: "これ", romaji: "kore", vi: "Cái này (gần người nói)", audioText: "これ" },
      { id: 2, jp: "それ", romaji: "sore", vi: "Cái đó (gần người nghe)", audioText: "それ" },
      { id: 3, jp: "あれ", romaji: "are", vi: "Cái kia (xa cả hai)", audioText: "あれ" },
      { id: 4, jp: "この N", romaji: "kono N", vi: "Cái N này", audioText: "この" },
      { id: 5, jp: "その N", romaji: "sono N", vi: "Cái N đó", audioText: "その" },
      { id: 6, jp: "あの N", romaji: "ano N", vi: "Cái N kia", audioText: "あの" },
      { id: 7, jp: "ほん", romaji: "hon", vi: "Sách", audioText: "ほん" },
      { id: 8, jp: "じしょ", romaji: "jisho", vi: "Từ điển", audioText: "じしょ" },
      { id: 9, jp: "ざっし", romaji: "zasshi", vi: "Tạp chí", audioText: "ざっし" },
      { id: 10, jp: "しんぶん", romaji: "shinbun", vi: "Tờ báo", audioText: "しんぶん" },
      { id: 11, jp: "ノート", romaji: "nooto", vi: "Vở / Sổ tay", audioText: "ノート" },
      { id: 12, jp: "てちょう", romaji: "techou", vi: "Sổ tay cá nhân", audioText: "てちょう" },
      { id: 13, jp: "めいし", romaji: "meishi", vi: "Danh thiếp", audioText: "めいし" },
      { id: 14, jp: "カード", romaji: "kaado", vi: "Thẻ / Card", audioText: "カード" },
      { id: 15, jp: "えんぴつ", romaji: "enpitsu", vi: "Bút chì", audioText: "えんぴつ" },
      { id: 16, jp: "ボールペン", romaji: "boorupen", vi: "Bút bi", audioText: "ボールペン" },
      { id: 17, jp: "シャープペンシル", romaji: "shaapupenshiru", vi: "Bút chì kim", audioText: "シャープペンシル" },
      { id: 18, jp: "かぎ", romaji: "kagi", vi: "Chìa khóa", audioText: "かぎ" },
      { id: 19, jp: "とけい", romaji: "tokei", vi: "Đồng hồ", audioText: "とけい" },
      { id: 20, jp: "かさ", romaji: "kasa", vi: "Cái ô / Dù", audioText: "かさ" },
      { id: 21, jp: "かばん", romaji: "kaban", vi: "Cặp sách / Túi", audioText: "かばん" },
      { id: 22, jp: "テレビ", romaji: "terebi", vi: "Tivi", audioText: "テレビ" },
      { id: 23, jp: "ラジオ", romaji: "rajio", vi: "Đài Radio", audioText: "ラジオ" },
      { id: 24, jp: "カメラ", romaji: "kamera", vi: "Máy ảnh", audioText: "カメラ" },
      { id: 25, jp: "コンピューター", romaji: "konpyuutaa", vi: "Máy tính", audioText: "コンピューター" },
      { id: 26, jp: "じどうしゃ", romaji: "jidousha", vi: "Xe ô tô", audioText: "じどうしゃ" },
      { id: 27, jp: "つくえ", romaji: "tsukue", vi: "Bàn học", audioText: "つくえ" },
      { id: 28, jp: "いす", romaji: "isu", vi: "Cái ghế", audioText: "いす" },
      { id: 29, jp: "チョコレート", romaji: "chokoreeto", vi: "Sô-cô-la", audioText: "チョコレート" },
      { id: 30, jp: "コーヒー", romaji: "koohee", vi: "Cà phê", audioText: "コーヒー" }
    ],
    grammar: [
      { pattern: "これ / それ / あれ は N です", meaning: "Cái này / đó / kia là N", example: "これは ほんです。", exampleVi: "Cái này là quyển sách." },
      { pattern: "この N / その N / あの N", meaning: "Cái N này / đó / kia", example: "この ほんは わたしのです。", exampleVi: "Quyển sách này là của tôi." },
      { pattern: "N1 の N2", meaning: "Sở hữu / Nội dung", example: "これは にほんごの ほんです。", exampleVi: "Cái này là sách tiếng Nhật." }
    ],
    fillBlanks: [
      { id: 1, question: "これ [blank] わたしの とけいです。", answer: "は", options: ["は", "の", "か", "も"] },
      { id: 2, question: "日本語 [blank] ほん", answer: "の", options: ["の", "は", "に", "で"] },
      { id: 3, question: "[blank] ほんは わたしのです。", answer: "この", options: ["この", "これ", "ここ", "どれ"] },
      { id: 4, question: "それは [blank] の かぎですか。 - 自動車の かぎです。", answer: "なん", options: ["なん", "だれ", "どこ", "どれ"] },
      { id: 5, question: "これは ボールペンですか、シャープペンシルですか。 - [blank] です。", answer: "ボールペン", options: ["ボールペン", "はい", "いいえ", "そうです"] }
    ],
    quiz: [
      { q: "Từ nào có nghĩa là 'Từ điển'?", options: ["ほん", "じしょ", "ざっし", "とけい"], a: 1 },
      { q: "'これ' dùng để chỉ vật ở đâu?", options: ["Gần người nói", "Gần người nghe", "Xa cả hai", "Không xác định"], a: 0 },
      { q: "Dịch: 'Cái chìa khóa này là của tôi'", options: ["これのかぎは わたしです。", "このかぎは わたしのです。", "それのかぎは わたしのです。", "このかぎは わたしのほんです。"], a: 1 },
      { q: "Từ 'しんぶん' nghĩa là gì?", options: ["Tạp chí", "Sổ tay", "Tờ báo", "Danh thiếp"], a: 2 },
      { q: "Để hỏi 'Cái này là cái gì?', dùng câu nào?", options: ["これは 何ですか。", "これは 誰ですか。", "これは どこですか。", "これは いくらですか。"], a: 0 }
    ]
  },

  lesson3: {
    title: "Bài 3: Địa điểm & Nơi chốn",
    vocab: [
      { id: 1, jp: "ここ", romaji: "koko", vi: "Chỗ này / Đây", audioText: "ここ" },
      { id: 2, jp: "そこ", romaji: "soko", vi: "Chỗ đó / Đó", audioText: "そこ" },
      { id: 3, jp: "あそこ", romaji: "asoko", vi: "Chỗ kia / Kia", audioText: "あそこ" },
      { id: 4, jp: "どこ", romaji: "doko", vi: "Ở đâu / Chỗ nào", audioText: "どこ" },
      { id: 5, jp: "こちら", romaji: "kochira", vi: "Phía này (lịch sự)", audioText: "こちら" },
      { id: 6, jp: "そちら", romaji: "sochira", vi: "Phía đó (lịch sự)", audioText: "そちら" },
      { id: 7, jp: "あちら", romaji: "achira", vi: "Phía kia (lịch sự)", audioText: "あちら" },
      { id: 8, jp: "どちら", romaji: "dochira", vi: "Phía nào / Ở đâu", audioText: "どちら" },
      { id: 9, jp: "きょうしつ", romaji: "kyoushitsu", vi: "Lớp học", audioText: "きょうしつ" },
      { id: 10, jp: "しょくどう", romaji: "shokudou", vi: "Nhà ăn / Căn tin", audioText: "しょくどう" },
      { id: 11, jp: "じむしょ", romaji: "jimusho", vi: "Văn phòng", audioText: "じむしょ" },
      { id: 12, jp: "かいぎしつ", romaji: "kaigishitsu", vi: "Phòng họp", audioText: "かいぎしつ" },
      { id: 13, jp: "うけつけ", romaji: "uketsuke", vi: "Bàn lễ tân", audioText: "うけつけ" },
      { id: 14, jp: "ロビー", romaji: "robee", vi: "Sảnh chờ", audioText: "ロビー" },
      { id: 15, jp: "へや", romaji: "heya", vi: "Căn phòng", audioText: "へや" },
      { id: 16, jp: "トイレ", romaji: "toire", vi: "Nhà vệ sinh", audioText: "トイレ" },
      { id: 17, jp: "かいだん", romaji: "kaidan", vi: "Cầu thang bộ", audioText: "かいだん" },
      { id: 18, jp: "エレベーター", romaji: "erebeetaa", vi: "Thang máy", audioText: "エレベーター" },
      { id: 19, jp: "じどうはんばいき", romaji: "jidouhanbaiki", vi: "Máy bán hàng tự động", audioText: "じどうはんばいき" },
      { id: 20, jp: "でんわ", romaji: "denwa", vi: "Điện thoại", audioText: "でんわ" }
    ],
    grammar: [
      { pattern: "ここ / そこ / あそこ は N です", meaning: "Nơi này / đó / kia là N", example: "ここは きょうしつです。", exampleVi: "Nơi này là phòng học." },
      { pattern: "N は どこ / どちら ですか", meaning: "N ở đâu / phía nào?", example: "お手洗いは どこですか。", exampleVi: "Nhà vệ sinh ở đâu?" }
    ],
    fillBlanks: [
      { id: 1, question: "じむしょは [blank] ですか。", answer: "どこ", options: ["どこ", "なん", "だれ", "どれ"] },
      { id: 2, question: "エレベーターは [blank] ですか。（Lịch sự）", answer: "どちら", options: ["どちら", "どこ", "どれ", "なに"] },
      { id: 3, question: "ヤマダさんは [blank] ですか。 - かいぎしつです。", answer: "どこ", options: ["どこ", "だれ", "なん", "どの"] },
      { id: 4, question: "ワイン売り場は [blank] ですか。 - 地下1階です。", answer: "なんがい", options: ["なんがい", "いくら", "どこ", "どちら"] }
    ],
    quiz: [
      { q: "きょうしつ nghĩa là gì?", options: ["Văn phòng", "Lớp học", "Nhà ăn", "Căn phòng"], a: 1 },
      { q: "Từ lịch sự của 'どこ' là gì?", options: ["こちら", "そちら", "あちら", "どちら"], a: 3 },
      { q: "'Máy bán hàng tự động' tiếng Nhật là gì?", options: ["エレベーター", "じどうはんばいき", "エスカレーター", "でんわ"], a: 1 },
      { q: "Hỏi giá tiền dùng từ nào?", options: ["なんがい", "いくら", "どちら", "なんさい"], a: 1 }
    ]
  },

  lesson4: {
    title: "Bài 4: Thời gian & Động từ",
    vocab: [
      { id: 1, jp: "おきます", romaji: "okimasu", vi: "Thức dậy", audioText: "おきます" },
      { id: 2, jp: "ねます", romaji: "nemasu", vi: "Đi ngủ", audioText: "ねます" },
      { id: 3, jp: "はたらきます", romaji: "hatarakimasu", vi: "Làm việc", audioText: "はたらきます" },
      { id: 4, jp: "やすみます", romaji: "yasumimasu", vi: "Nghỉ ngơi", audioText: "やすみます" },
      { id: 5, jp: "べんきょうします", romaji: "benkyou shimasu", vi: "Học tập", audioText: "べんきょうします" },
      { id: 6, jp: "おわります", romaji: "owarimasu", vi: "Kết thúc", audioText: "おわります" },
      { id: 7, jp: "ぎんこう", romaji: "ginkou", vi: "Ngân hàng", audioText: "ぎんこう" },
      { id: 8, jp: "ゆうびんきょく", romaji: "yuubinkyoku", vi: "Bưu điện", audioText: "ゆうびんきょく" },
      { id: 9, jp: "としょかん", romaji: "toshokan", vi: "Thư viện", audioText: "としょかん" },
      { id: 10, jp: "びじゅつかん", romaji: "bijutsukan", vi: "Bảo tàng mỹ thuật", audioText: "びじゅつかん" },
      { id: 11, jp: "いま", romaji: "ima", vi: "Bây giờ", audioText: "いま" },
      { id: 12, jp: "～じ", romaji: "~ji", vi: "~ Giờ", audioText: "じ" },
      { id: 13, jp: "～ふん", romaji: "~fun", vi: "~ Phút", audioText: "ふん" },
      { id: 14, jp: "はん", romaji: "han", vi: "Rưỡi / Nửa", audioText: "はん" },
      { id: 15, jp: "なんじ", romaji: "nanji", vi: "Mấy giờ", audioText: "なんじ" }
    ],
    grammar: [
      { pattern: "いま ～じ ～ふんです", meaning: "Bây giờ là ~ giờ ~ phút", example: "いま ７じはんです。", exampleVi: "Bây giờ là 7 giờ rưỡi." },
      { pattern: "N (thời gian) に V", meaning: "Làm gì vào lúc N", example: "６じに おきます。", exampleVi: "Tôi thức dậy lúc 6 giờ." },
      { pattern: "N1 から N2 まで", meaning: "Từ N1 đến N2", example: "９じから ５じまで はたらきます。", exampleVi: "Tôi làm việc từ 9h đến 5h." }
    ],
    fillBlanks: [
      { id: 1, question: "わたしは ６じ [blank] おきます。", answer: "に", options: ["に", "で", "を", "へ"] },
      { id: 2, question: "きのう べんきょう [blank]。", answer: "しました", options: ["します", "しました", "しません", "しましたか"] },
      { id: 3, question: "ぎんこうは ９じ [blank] ３じまでです。", answer: "から", options: ["から", "まで", "に", "と"] },
      { id: 4, question: "まいあさ 何時に [blank] か。 - 6時に 起きます。", answer: "おきます", options: ["おきます", "ねます", "はたらきます", "おわります"] }
    ],
    quiz: [
      { q: "Động từ 'Thức dậy' là gì?", options: ["ねます", "おきます", "やすみます", "はたらきます"], a: 1 },
      { q: "Từ nào nghĩa là 'Hôm qua'?", options: ["きょう", "あした", "きのう", "おととい"], a: 2 },
      { q: "'Thư viện' tiếng Nhật là gì?", options: ["ぎんこう", "ゆうびんきょく", "としょかん", "びじゅつかん"], a: 2 },
      { q: "Quá khứ của 'します' là gì?", options: ["しました", "しません", "しました", "する"], a: 0 }
    ]
  },

  lesson5: {
    title: "Bài 5: Di chuyển & Phương tiện",
    vocab: [
      { id: 1, jp: "いきます", romaji: "ikimasu", vi: "Đi", audioText: "いきます" },
      { id: 2, jp: "きます", romaji: "kimasu", vi: "Đến", audioText: "きます" },
      { id: 3, jp: "かえります", romaji: "kaerimasu", vi: "Trở về", audioText: "かえります" },
      { id: 4, jp: "がっこう", romaji: "gakkou", vi: "Trường học", audioText: "がっこう" },
      { id: 5, jp: "スーパー", romaji: "suupaa", vi: "Siêu thị", audioText: "スーパー" },
      { id: 6, jp: "えき", romaji: "eki", vi: "Nhà ga", audioText: "えき" },
      { id: 7, jp: "ひこうき", romaji: "hikouki", vi: "Máy bay", audioText: "ひこうき" },
      { id: 8, jp: "でんしゃ", romaji: "densha", vi: "Tàu điện", audioText: "でんしゃ" },
      { id: 9, jp: "タクシー", romaji: "takushii", vi: "Xe taxi", audioText: "タクシー" },
      { id: 10, jp: "じてんしゃ", romaji: "jitensha", vi: "Xe đạp", audioText: "じてんしゃ" },
      { id: 11, jp: "あるいて", romaji: "aruite", vi: "Đi bộ", audioText: "あるいて" },
      { id: 12, jp: "ともだち", romaji: "tomodachi", vi: "Bạn bè", audioText: "ともだち" },
      { id: 13, jp: "ひとり で", romaji: "hitori de", vi: "Một mình", audioText: "ひとりで" }
    ],
    grammar: [
      { pattern: "N (Địa điểm) へ いきます / きます / かえります", meaning: "Đi / Đến / Về địa điểm N", example: "がっこうへ いきます。", exampleVi: "Tôi đi đến trường." },
      { pattern: "N (Phương tiện) で いきます", meaning: "Đi bằng phương tiện N", example: "でんしゃで いきます。", exampleVi: "Đi bằng tàu điện." },
      { pattern: "N (Người) と いきます", meaning: "Đi cùng với N", example: "ともだちと いきます。", exampleVi: "Đi cùng bạn." }
    ],
    fillBlanks: [
      { id: 1, question: "でんしゃ [blank] いきます。", answer: "で", options: ["で", "へ", "に", "を"] },
      { id: 2, question: "とうきょう [blank] いきます。", answer: "へ", options: ["へ", "で", "に", "を"] },
      { id: 3, question: "ともだち [blank] にほんへ きました。", answer: "と", options: ["と", "で", "へ", "に"] },
      { id: 4, question: "どこ[blank] 行きませんか。 - ええ、行きません。", answer: "へも", options: ["へも", "へ", "で", "に"] }
    ],
    quiz: [
      { q: "Phương tiện 'Tàu điện' là gì?", options: ["ひこうき", "でんしゃ", "バス", "タクシー"], a: 1 },
      { q: "Ngày mùng 1 hàng tháng đọc là gì?", options: ["ついたち", "ふつか", "みっか", "はつか"], a: 0 },
      { q: "Từ nào nghĩa là 'Đi bộ'?", options: ["あるいて", "じてんしゃ", "ひとり で", "タクシー"], a: 0 },
      { q: "Hỏi 'Khi nào/Bao giờ' dùng từ gì?", options: ["いつ", "どこ", "だれ", "なん"], a: 0 }
    ]
  },

  lesson6: {
    title: "Bài 6: Tân ngữ & Mời mọc",
    vocab: [
      { id: 1, jp: "たべます", romaji: "tabemasu", vi: "Ăn", audioText: "たべます" },
      { id: 2, jp: "のみます", romaji: "nomimasu", vi: "Uống", audioText: "のみます" },
      { id: 3, jp: "みます", romaji: "mimasu", vi: "Xem / Nhìn", audioText: "みます" },
      { id: 4, jp: "ききます", romaji: "kikimasu", vi: "Nghe", audioText: "ききます" },
      { id: 5, jp: "よみます", romaji: "yomimasu", vi: "Đọc", audioText: "よみます" },
      { id: 6, jp: "かきます", romaji: "kakimasu", vi: "Viết / Vẽ", audioText: "かきます" },
      { id: 7, jp: "かいます", romaji: "kaimasu", vi: "Mua", audioText: "かいます" },
      { id: 8, jp: "とります", romaji: "torimasu", vi: "Chụp (ảnh)", audioText: "とります" },
      { id: 9, jp: "します", romaji: "shimasu", vi: "Làm / Chơi", audioText: "します" },
      { id: 10, jp: "あいます", romaji: "aimasu", vi: "Gặp (bạn)", audioText: "あいます" },
      { id: 11, jp: "ごはん", romaji: "gohan", vi: "Cơm / Bữa ăn", audioText: "ごはん" },
      { id: 12, jp: "みず", romaji: "mizu", vi: "Nước", audioText: "みず" },
      { id: 13, jp: "おちゃ", romaji: "ocha", vi: "Trà", audioText: "おちゃ" },
      { id: 14, jp: "いっしょに", romaji: "isshoni", vi: "Cùng nhau", audioText: "いっしょに" }
    ],
    grammar: [
      { pattern: "N を V", meaning: "Thực hiện hành động V lên N", example: "ごはんを たべます。", exampleVi: "Tôi ăn cơm." },
      { pattern: "N (Địa điểm) で V", meaning: "Làm gì tại địa điểm N", example: "レストランで たべます。", exampleVi: "Tôi ăn ở nhà hàng." },
      { pattern: "V ませ ん か", meaning: "Cùng làm... không? (Rủ rê)", example: "おちゃを のみませんか。", exampleVi: "Uống trà cùng tôi không?" }
    ],
    fillBlanks: [
      { id: 1, question: "みず [blank] のみます。", answer: "を", options: ["を", "は", "で", "へ"] },
      { id: 2, question: "図書館 [blank] 本を 読みます。", answer: "で", options: ["で", "を", "に", "へ"] },
      { id: 3, question: "いっしょに おちゃを [blank] か。", answer: "のみません", options: ["のみません", "のみます", "のぞみます", "のびます"] },
      { id: 4, question: "えきで ともだち [blank] あいます。", answer: "に", options: ["に", "を", "で", "へ"] }
    ],
    quiz: [
      { q: "Động từ 'Đọc' là gì?", options: ["みます", "ききます", "よみます", "かきます"], a: 2 },
      { q: "Mẫu câu dùng để rủ rê người khác làm gì?", options: ["~ましょうか", "~ませんか", "~てください", "~ています"], a: 1 },
      { q: "Trợ từ đứng trước động từ tác động trực tiếp (tân ngữ)?", options: ["は", "が", "を", "に"], a: 2 },
      { q: "'Chụp ảnh' dùng động từ nào?", options: ["とります", "かきます", "かいます", "みます"], a: 0 }
    ]
  },

  lesson7: {
    title: "Bài 7: Công cụ & Cho nhận",
    vocab: [
      { id: 1, jp: "きります", romaji: "kirimasu", vi: "Cắt", audioText: "きります" },
      { id: 2, jp: "おくります", romaji: "okurimasu", vi: "Gửi", audioText: "おくります" },
      { id: 3, jp: "あげます", romaji: "agemasu", vi: "Cho / Tặng", audioText: "あげます" },
      { id: 4, jp: "もらいます", romaji: "moraimasu", vi: "Nhận", audioText: "もらいます" },
      { id: 5, jp: "かします", romaji: "kashimasu", vi: "Cho mượn", audioText: "かします" },
      { id: 6, jp: "かります", romaji: "karimasu", vi: "Mượn", audioText: "かります" },
      { id: 7, jp: "おしえます", romaji: "oshiemasu", vi: "Dạy học", audioText: "おしえます" },
      { id: 8, jp: "ならいます", romaji: "naraimasu", vi: "Học từ ai", audioText: "ならいます" },
      { id: 9, jp: "はし", romaji: "hashi", vi: "Đũa", audioText: "はし" },
      { id: 10, jp: "はさみ", romaji: "hasami", vi: "Cái kéo", audioText: "はさみ" },
      { id: 11, jp: "プレゼント", romaji: "purezento", vi: "Quà tặng", audioText: "プレゼント" },
      { id: 12, jp: "もう", romaji: "mou", vi: "Đã / Rồi", audioText: "もう" },
      { id: 13, jp: "まだ", romaji: "mada", vi: "Chưa", audioText: "まだ" }
    ],
    grammar: [
      { pattern: "N (Công cụ) で V", meaning: "Làm gì bằng công cụ N", example: "はしで たべます。", exampleVi: "Ăn bằng đũa." },
      { pattern: "N1 に N2 を あげます", meaning: "Tặng N2 cho N1", example: "ヤマダさんに はなを あげました。", exampleVi: "Tặng hoa cho cô Yamada." },
      { pattern: "N1 に N2 を もらいます", meaning: "Nhận N2 từ N1", example: "ミラーさんに ほんを もらいました。", exampleVi: "Nhận sách từ anh Miller." }
    ],
    fillBlanks: [
      { id: 1, question: "スプーン [blank] たべます。", answer: "で", options: ["で", "に", "を", "へ"] },
      { id: 2, question: "マリアさん [blank] プレゼントを あげます。", answer: "に", options: ["に", "で", "を", "から"] },
      { id: 3, question: "もう しゅくだいを しましたか。 - いいえ、[blank] です。", answer: "まだ", options: ["まだ", "もう", "ぜんぜん", "よく"] },
      { id: 4, question: "「Thank you」は 日本語[blank] 何ですか。", answer: "で", options: ["で", "に", "を", "は"] }
    ],
    quiz: [
      { q: "Từ nào có nghĩa là 'Cho mượn'?", options: ["みます", "かします", "かります", "あげます"], a: 1 },
      { q: "Trả lời câu hỏi 'もう べんきょうしましたか' nếu chưa làm?", options: ["はい、まだです。", "いいえ、もうしました。", "いいえ、まだです。", "はい、しました。"], a: 2 },
      { q: "'Nhận' trong tiếng Nhật là gì?", options: ["あげます", "もらいます", "かします", "おくります"], a: 1 },
      { q: "'Đũa' đọc là gì?", options: ["ナイフ", "フォーク", "はし", "はさみ"], a: 2 }
    ]
  },

  lesson8: {
    title: "Bài 8: Tính từ & Trạng thái",
    vocab: [
      { id: 1, jp: "ハンサム[な]", romaji: "hansamu[na]", vi: "Đẹp trai", audioText: "ハンサムな" },
      { id: 2, jp: "きれい[な]", romaji: "kirei[na]", vi: "Đẹp / Sạch sẻ", audioText: "きれいな" },
      { id: 3, jp: "しずか[な]", romaji: "shizuka[na]", vi: "Yên tĩnh", audioText: "しずかな" },
      { id: 4, jp: "にぎやか[な]", romaji: "nigiyaka[na]", vi: "Nhộn nhịp", audioText: "にぎやかな" },
      { id: 5, jp: "ゆうめい[な]", romaji: "yuumei[na]", vi: "Nổi tiếng", audioText: "ゆうめいな" },
      { id: 6, jp: "しんせつ[な]", romaji: "shinsetsu[na]", vi: "Tốt bụng", audioText: "しんせつな" },
      { id: 7, jp: "おおきい", romaji: "ookii", vi: "To / Lớn", audioText: "おおきい" },
      { id: 8, jp: "ちいさい", romaji: "chiisai", vi: "Nhỏ / Bé", audioText: "ちいさい" },
      { id: 9, jp: "あたらしい", romaji: "atarashii", vi: "Mới", audioText: "あたらしい" },
      { id: 10, jp: "ふるい", romaji: "furui", vi: "Cũ", audioText: "ふるい" },
      { id: 11, jp: "いい（よい）", romaji: "ii (yoi)", vi: "Tốt / Hay", audioText: "いい" },
      { id: 12, jp: "たかい", romaji: "takai", vi: "Đắt / Cao", audioText: "たかい" },
      { id: 13, jp: "やすい", romaji: "yasui", vi: "Rẻ", audioText: "やすい" },
      { id: 14, jp: "おもしろい", romaji: "omoshiroi", vi: "Thú vị", audioText: "おもしろい" }
    ],
    grammar: [
      { pattern: "N は Tính từ -i / -na です", meaning: "N thì...", example: "ふじさんは たかいです。", exampleVi: "Núi Phú Sĩ cao." },
      { pattern: "Phủ định Tính từ -i: bỏ i + くないです", meaning: "Không...", example: "おもしろくないです。", exampleVi: "Không thú vị." },
      { pattern: "Phủ định Tính từ -na: + じゃ ありません", meaning: "Không...", example: "しずかじゃ ありません。", exampleVi: "Không yên tĩnh." }
    ],
    fillBlanks: [
      { id: 1, question: "この ほんは あまり [blank] です。", answer: "おもしろくない", options: ["おもしろくない", "おもしろい", "おもしろくありません", "おもしろいじゃありません"] },
      { id: 2, question: "マイクさんは [blank] ひとです。", answer: "しんせつな", options: ["しんせつな", "しんせつ", "しんせつの", "しんせつい"] },
      { id: 3, question: "にほんの たべものは おいしいですが、[blank] です。", answer: "たかい", options: ["たかい", "やすい", "おもしろい", "つめたい"] }
    ],
    quiz: [
      { q: "Dạng phủ định của tính từ 'たかい' là gì?", options: ["たかいくないです", "たかくないです", "たかいじゃありません", "たかくありませんでした"], a: 1 },
      { q: "Tính từ đuôi -na có nghĩa là 'Yên tĩnh'?", options: ["にぎやか", "しずか", "きれい", "ゆうめい"], a: 1 },
      { q: "Từ nào nghĩa là 'Nổi tiếng'?", options: ["ゆうめい", "しんせつ", "すてき", "ハンサム"], a: 0 },
      { q: "Phủ định của 'きれい[な]' là gì?", options: ["きれいくないです", "きれいじゃ ありません", "きれいではない", "きれいではありません"], a: 1 }
    ]
  },

  lesson9: {
    title: "Bài 9: Sở thích & Lý do",
    vocab: [
      { id: 1, jp: "わかります", romaji: "wakarimasu", vi: "Hiểu", audioText: "わかります" },
      { id: 2, jp: "あります", romaji: "arimasu", vi: "Có (đồ vật)", audioText: "あります" },
      { id: 3, jp: "すき[な]", romaji: "suki[na]", vi: "Thích", audioText: "すき" },
      { id: 4, jp: "きらい[な]", romaji: "kirai[na]", vi: "Ghét", audioText: "きらい" },
      { id: 5, jp: "じょうず[な]", romaji: "jouzu[na]", vi: "Giỏi", audioText: "じょうず" },
      { id: 6, jp: "へた[な]", romaji: "heta[na]", vi: "Kém / Dở", audioText: "へた" },
      { id: 7, jp: "りょうり", romaji: "ryouri", vi: "Món ăn", audioText: "りょうり" },
      { id: 8, jp: "スポーツ", romaji: "supootsu", vi: "Thể thao", audioText: "スポーツ" },
      { id: 9, jp: "おんがく", romaji: "ongaku", vi: "Âm nhạc", audioText: "おんがく" },
      { id: 10, jp: "かんじ", romaji: "kanji", vi: "Chữ Hán", audioText: "かんじ" },
      { id: 11, jp: "じかん", romaji: "jikan", vi: "Thời gian", audioText: "じかん" },
      { id: 12, jp: "ようじ", romaji: "youji", vi: "Việc bận", audioText: "ようじ" },
      { id: 13, jp: "ぜんぜん", romaji: "zenzen", vi: "Hoàn toàn không", audioText: "ぜんぜん" }
    ],
    grammar: [
      { pattern: "N が すきです / じょうずです", meaning: "Thích / Giỏi cái N", example: "イタリアりょうりが すきです。", exampleVi: "Tôi thích món Ý." },
      { pattern: "N が わかります / あります", meaning: "Hiểu / Có cái N", example: "にほんごが わかります。", exampleVi: "Tôi hiểu tiếng Nhật." },
      { pattern: "S1 から、S2", meaning: "Vì S1 nên S2", example: "じかんが ありませんから、いきません。", exampleVi: "Vì không có thời gian nên tôi không đi." }
    ],
    fillBlanks: [
      { id: 1, question: "わたしは にほんご [blank] わかります。", answer: "が", options: ["が", "を", "に", "は"] },
      { id: 2, question: "じかんが ありません [blank]、えいがを 見ません。", answer: "から", options: ["から", "まで", "で", "と"] },
      { id: 3, question: "日本語が [blank] わかりません。", answer: "ぜんぜん", options: ["ぜんぜん", "よく", "たくさん", "だいたい"] }
    ],
    quiz: [
      { q: "Phó từ đi với thể phủ định mang nghĩa 'Hoàn toàn không'?", options: ["よく", "だいたい", "すこし", "ぜんぜん"], a: 3 },
      { q: "Từ nào nghĩa là 'Việc bận / Công chuyện'?", options: ["やくそく", "ようじ", "じかん", "チケット"], a: 1 },
      { q: "Chỉ lý do trong tiếng Nhật dùng từ gì ở cuối vế?", options: ["から", "まで", "だから", "ので"], a: 0 },
      { q: "Từ trái nghĩa với 'すき' là gì?", options: ["じょうず", "へた", "きらい", "いい"], a: 2 }
    ]
  },

  lesson10: {
    title: "Bài 10: Sự tồn tại",
    vocab: [
      { id: 1, jp: "あります", romaji: "arimasu", vi: "Có (vật vô giác)", audioText: "あります" },
      { id: 2, jp: "います", romaji: "imasu", vi: "Có (người, động vật)", audioText: "います" },
      { id: 3, jp: "おとこのひと", romaji: "otoko no hito", vi: "Người đàn ông", audioText: "おとこのひと" },
      { id: 4, jp: "おんなのひと", romaji: "onna no hito", vi: "Người phụ nữ", audioText: "おんなのひと" },
      { id: 5, jp: "いぬ", romaji: "inu", vi: "Con chó", audioText: "いぬ" },
      { id: 6, jp: "ねこ", romaji: "neko", vi: "Con mèo", audioText: "ねこ" },
      { id: 7, jp: "れいぞうこ", romaji: "reizouko", vi: "Tủ lạnh", audioText: "れいぞうこ" },
      { id: 8, jp: "うえ", romaji: "ue", vi: "Trên", audioText: "うえ" },
      { id: 9, jp: "した", romaji: "shita", vi: "Dưới", audioText: "した" },
      { id: 10, jp: "まえ", romaji: "mae", vi: "Trước", audioText: "まえ" },
      { id: 11, jp: "うしろ", romaji: "ushiro", vi: "Sau", audioText: "うしろ" },
      { id: 12, jp: "なか", romaji: "naka", vi: "Bên trong", audioText: "なか" },
      { id: 13, jp: "となり", romaji: "tonari", vi: "Bên cạnh", audioText: "となり" },
      { id: 14, jp: "あいだ", romaji: "aida", vi: "Ở giữa", audioText: "あいだ" }
    ],
    grammar: [
      { pattern: "N (Địa điểm) に N2 が あります / います", meaning: "Ở N1 có N2", example: "へやに つくえが あります。", exampleVi: "Trong phòng có cái bàn." },
      { pattern: "N1 は N2 (Địa điểm) に あります / います", meaning: "N1 ở N2", example: "ほんは つくえの うえに あります。", exampleVi: "Sách ở trên bàn." }
    ],
    fillBlanks: [
      { id: 1, question: "へやに テレビ [blank] あります。", answer: "が", options: ["が", "を", "に", "は"] },
      { id: 2, question: "いぬは つくえの [blank] に います。", answer: "した", options: ["した", "どこ", "なに", "だれ"] },
      { id: 3, question: "はおの なかに てがみ [blank] しゃしんが あります。", answer: "や", options: ["や", "と", "も", "で"] },
      { id: 4, question: "あそこに おんなのひとが [blank]。", answer: "います", options: ["います", "あります", "します", "いきます"] }
    ],
    quiz: [
      { q: "Động từ chỉ sự tồn tại của người hoặc động vật?", options: ["あります", "います", "いきます", "します"], a: 1 },
      { q: "'Bên cạnh' trong tiếng Nhật đọc là gì?", options: ["うえ", "した", "となり", "あいだ"], a: 2 },
      { q: "Chỉ sự tồn tại của đồ vật, cây cối dùng động từ nào?", options: ["います", "あります", "とまります", "おきます"], a: 1 },
      { q: "Từ nào có nghĩa là 'Tủ lạnh'?", options: ["テーブル", "ベッド", "れいぞうこ", "たな"], a: 2 }
    ]
  }
};

// ==========================================
// 2. TRẠNG THÁI CỦA ỨNG DỤNG (APP STATE)
// ==========================================
let currentLessonKey = "lesson1";
let currentFlashcardIndex = 0;
let isFlipped = false;

// Trạng thái phần đục lỗ
let fillBlankIndex = 0;
let fillBlankScore = 0;

// Trạng thái phần Quiz
let quizIndex = 0;
let quizScore = 0;

// ==========================================
// 3. KHỞI TẠO VÀ BẮT ĐẦU (INITIALIZATION)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  setupLessonSelector();
  loadLesson(currentLessonKey);
});

function setupLessonSelector() {
  const selector = document.getElementById("lesson-select");
  if (!selector) return;
  selector.innerHTML = "";
  
  Object.keys(minnaData).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = minnaData[key].title;
    selector.appendChild(option);
  });

  selector.addEventListener("change", (e) => {
    currentLessonKey = e.target.value;
    loadLesson(currentLessonKey);
  });
}

function loadLesson(lessonKey) {
  const lesson = minnaData[lessonKey];
  if (!lesson) return;

  // Render Bảng từ vựng đầy đủ
  renderVocabTable(lesson.vocab);

  // Render Ngữ pháp
  renderGrammar(lesson.grammar);

  // Khởi tạo Flashcard
  currentFlashcardIndex = 0;
  isFlipped = false;
  renderFlashcard();

  // Khởi tạo Đục lỗ
  fillBlankIndex = 0;
  fillBlankScore = 0;
  renderFillInBlank();

  // Khởi tạo Quiz
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}

// ==========================================
// 4. BẢNG TỪ VỰNG ĐẦY ĐỦ (VOCAB TABLE)
// ==========================================
function renderVocabTable(vocabList) {
  const container = document.getElementById("vocab-table-container");
  if (!container) return;

  let html = `
    <div style="margin-bottom: 15px; font-weight: bold; font-size: 1.1em; color: #2c3e50;">
      📚 Danh sách từ vựng (${vocabList.length} từ)
    </div>
    <div style="max-height: 400px; overflow-y: auto; border: 1px solid #e0e0e0; border-radius: 8px;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; background: #fff;">
        <thead>
          <tr style="background-color: #f5f7fa; border-bottom: 2px solid #e0e0e0; position: sticky; top: 0; z-index: 1;">
            <th style="padding: 10px; width: 10%;">STT</th>
            <th style="padding: 10px; width: 30%;">Tiếng Nhật</th>
            <th style="padding: 10px; width: 30%;">Romaji</th>
            <th style="padding: 10px; width: 30%;">Nghĩa Tiếng Việt</th>
          </tr>
        </thead>
        <tbody>
  `;

  vocabList.forEach((item, index) => {
    const bg = index % 2 === 0 ? "#ffffff" : "#f9fafb";
    html += `
      <tr style="background-color: ${bg}; border-bottom: 1px solid #eee;">
        <td style="padding: 10px; color: #7f8c8d;">${index + 1}</td>
        <td style="padding: 10px; font-weight: bold; color: #16a085; font-size: 1.1em;">${item.jp}</td>
        <td style="padding: 10px; color: #2980b9;">${item.romaji}</td>
        <td style="padding: 10px; color: #333;">${item.vi}</td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;
  container.innerHTML = html;
}

// ==========================================
// 5. NGỮ PHÁP (GRAMMAR)
// ==========================================
function renderGrammar(grammarList) {
  const container = document.getElementById("grammar-container");
  if (!container) return;

  if (!grammarList || grammarList.length === 0) {
    container.innerHTML = "<p>Không có dữ liệu ngữ pháp.</p>";
    return;
  }

  let html = `<div style="margin-bottom: 15px; font-weight: bold; font-size: 1.1em;">📖 Ngữ pháp trọng tâm</div>`;
  grammarList.forEach((g, index) => {
    html += `
      <div style="background: #f8f9fa; border-left: 4px solid #3498db; padding: 12px; margin-bottom: 10px; border-radius: 0 8px 8px 0;">
        <div style="font-weight: bold; color: #2c3e50;">${index + 1}. ${g.pattern}</div>
        <div style="color: #e67e22; margin: 4px 0;">👉 Ý nghĩa: ${g.meaning}</div>
        <div style="font-size: 0.95em; color: #555;">Ví dụ: <strong>${g.example}</strong> (${g.exampleVi})</div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// ==========================================
// 6. FLASHCARD (MẶT TRƯỚC: TIẾNG NHẬT, MẶT SAU: NGHĨA + ROMAJI)
// ==========================================
function renderFlashcard() {
  const container = document.getElementById("flashcard-container");
  if (!container) return;

  const vocabList = minnaData[currentLessonKey].vocab;
  if (!vocabList || vocabList.length === 0) {
    container.innerHTML = "<p>Không có dữ liệu thẻ từ vựng.</p>";
    return;
  }

  const cardData = vocabList[currentFlashcardIndex];

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
      <div style="font-size: 0.9em; color: #666;">
        Thẻ ${currentFlashcardIndex + 1} / ${vocabList.length}
      </div>
      
      <!-- Thẻ Flashcard -->
      <div id="flashcard-element" onclick="flipFlashcard()" style="
        width: 320px;
        height: 200px;
        background: ${isFlipped ? "#2c3e50" : "#ffffff"};
        color: ${isFlipped ? "#ffffff" : "#2c3e50"};
        border: 2px solid #3498db;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        transition: transform 0.3s, background 0.3s;
        text-align: center;
        padding: 15px;
        user-select: none;
      ">
        ${
          !isFlipped
            ? `<!-- MẶT TRƯỚC: CHỈ HIỆN TIẾNG NHẬT -->
               <div style="font-size: 2.2em; font-weight: bold; color: #27ae60;">${cardData.jp}</div>
               <div style="font-size: 0.85em; color: #888; margin-top: 15px;">(Bấm để xem nghĩa)</div>`
            : `<!-- MẶT SAU: HIỆN ROMAJI VÀ NGHĨA TIẾNG VIỆT -->
               <div style="font-size: 1.4em; font-weight: bold; color: #f1c40f; margin-bottom: 8px;">${cardData.romaji}</div>
               <div style="font-size: 1.3em; color: #ecf0f1;">${cardData.vi}</div>
               <div style="font-size: 0.8em; color: #bdc3c7; margin-top: 15px;">(Mặt sau - Tiếng Việt & Romaji)</div>`
        }
      </div>

      <!-- Điều hướng -->
      <div style="display: flex; gap: 10px;">
        <button onclick="prevFlashcard()" style="padding: 8px 16px; border-radius: 6px; border: none; background: #95a5a6; color: white; cursor: pointer;">⬅️ Câu trước</button>
        <button onclick="flipFlashcard()" style="padding: 8px 16px; border-radius: 6px; border: none; background: #3498db; color: white; cursor: pointer;">🔄 Lật thẻ</button>
        <button onclick="nextFlashcard()" style="padding: 8px 16px; border-radius: 6px; border: none; background: #2ecc71; color: white; cursor: pointer;">Câu tiếp ➡️</button>
      </div>
    </div>
  `;
}

function flipFlashcard() {
  isFlipped = !isFlipped;
  renderFlashcard();
}

function nextFlashcard() {
  const vocabList = minnaData[currentLessonKey].vocab;
  currentFlashcardIndex = (currentFlashcardIndex + 1) % vocabList.length;
  isFlipped = false;
  renderFlashcard();
}

function prevFlashcard() {
  const vocabList = minnaData[currentLessonKey].vocab;
  currentFlashcardIndex = (currentFlashcardIndex - 1 + vocabList.length) % vocabList.length;
  isFlipped = false;
  renderFlashcard();
}

// ==========================================
// 7. BÀI TẬP ĐỤC LỖ (FILL IN THE BLANKS)
// ==========================================
function renderFillInBlank() {
  const container = document.getElementById("fill-blank-container");
  if (!container) return;

  const fillList = minnaData[currentLessonKey].fillBlanks;
  if (!fillList || fillList.length === 0) {
    container.innerHTML = "<p>Bài học này chưa bổ sung bài tập đục lỗ.</p>";
    return;
  }

  if (fillBlankIndex >= fillList.length) {
    container.innerHTML = `
      <div style="text-align: center; padding: 20px; background: #e8f8f5; border-radius: 10px;">
        <h3 style="color: #27ae60;">🎉 Hoàn thành bài tập đục lỗ!</h3>
        <p>Kết quả của bạn: <strong>${fillBlankScore} / ${fillList.length}</strong> câu đúng.</p>
        <button onclick="resetFillInBlank()" style="padding: 8px 16px; border: none; background: #16a085; color: white; border-radius: 5px; cursor: pointer;">Làm lại bài này</button>
      </div>
    `;
    return;
  }

  const qData = fillList[fillBlankIndex];

  let html = `
    <div style="background: #fff; border: 1px solid #ddd; padding: 18px; border-radius: 10px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 12px; color: #7f8c8d; font-size: 0.9em;">
        <span>Câu hỏi đục lỗ ${fillBlankIndex + 1} / ${fillList.length}</span>
        <span>Điểm: ${fillBlankScore}</span>
      </div>

      <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 20px; color: #2c3e50;">
        ${qData.question.replace("[blank]", "<span style='text-decoration: underline; color: #e67e22; padding: 0 5px;'> _____ </span>")}
      </div>

      <div id="fill-options-box" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
  `;

  qData.options.forEach(opt => {
    html += `
      <button class="fill-opt-btn" onclick="checkFillAnswer('${opt}', '${qData.answer}', this)" style="
        padding: 12px;
        border: 2px solid #bdc3c7;
        background: #fdfdfd;
        border-radius: 8px;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s;
      ">${opt}</button>
    `;
  });

  html += `
      </div>
      <div id="fill-feedback" style="margin-top: 15px; font-weight: bold; text-align: center; min-height: 24px;"></div>
    </div>
  `;

  container.innerHTML = html;
}

function checkFillAnswer(selected, correctAnswer, btnElement) {
  const allButtons = document.querySelectorAll(".fill-opt-btn");
  allButtons.forEach(btn => (btn.disabled = true)); // Khóa nút bấm

  const feedback = document.getElementById("fill-feedback");

  if (selected === correctAnswer) {
    // ĐÚNG: ĐỔI MÀU XANH LÁ
    btnElement.style.backgroundColor = "#2ecc71";
    btnElement.style.color = "#ffffff";
    btnElement.style.borderColor = "#27ae60";
    if (feedback) {
      feedback.style.color = "#27ae60";
      feedback.textContent = " Chính xác!";
    }
    fillBlankScore++;
  } else {
    // SAI: ĐỔI MÀU ĐỎ VÀ HIỆN MÀU XANH CHO CÂU ĐÚNG
    btnElement.style.backgroundColor = "#e74c3c";
    btnElement.style.color = "#ffffff";
    btnElement.style.borderColor = "#c0392b";

    allButtons.forEach(btn => {
      if (btn.textContent.trim() === correctAnswer) {
        btn.style.backgroundColor = "#2ecc71";
        btn.style.color = "#ffffff";
        btn.style.borderColor = "#27ae60";
      }
    });

    if (feedback) {
      feedback.style.color = "#e74c3c";
      feedback.textContent = `❌ Sai rồi! Đáp án đúng là: "${correctAnswer}"`;
    }
  }

  setTimeout(() => {
    fillBlankIndex++;
    renderFillInBlank();
  }, 1400);
}

function resetFillInBlank() {
  fillBlankIndex = 0;
  fillBlankScore = 0;
  renderFillInBlank();
}

// ==========================================
// 8. BÀI TẬP QUIZ (TRẮC NGHIỆM)
// ==========================================
function renderQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  const quizList = minnaData[currentLessonKey].quiz;
  if (!quizList || quizList.length === 0) {
    container.innerHTML = "<p>Bài học này chưa có câu hỏi trắc nghiệm.</p>";
    return;
  }

  if (quizIndex >= quizList.length) {
    container.innerHTML = `
      <div style="text-align: center; padding: 20px; background: #eaf2f8; border-radius: 10px;">
        <h3 style="color: #2980b9;">🏆 Hoàn thành bài trắc nghiệm Quiz!</h3>
        <p>Kết quả của bạn: <strong>${quizScore} / ${quizList.length}</strong> câu đúng.</p>
        <button onclick="resetQuiz()" style="padding: 8px 16px; border: none; background: #2980b9; color: white; border-radius: 5px; cursor: pointer;">Làm lại Quiz</button>
      </div>
    `;
    return;
  }

  const qData = quizList[quizIndex];

  let html = `
    <div style="background: #fff; border: 1px solid #ddd; padding: 18px; border-radius: 10px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 12px; color: #7f8c8d; font-size: 0.9em;">
        <span>Câu hỏi Quiz ${quizIndex + 1} / ${quizList.length}</span>
        <span>Điểm: ${quizScore}</span>
      </div>

      <div style="font-size: 1.15em; font-weight: bold; margin-bottom: 20px; color: #2c3e50;">
        ${qData.q}
      </div>

      <div id="quiz-options-box" style="display: flex; flex-direction: column; gap: 10px;">
  `;

  qData.options.forEach((opt, idx) => {
    html += `
      <button class="quiz-opt-btn" onclick="checkQuizAnswer(${idx}, ${qData.a}, this)" style="
        padding: 12px;
        text-align: left;
        border: 2px solid #bdc3c7;
        background: #fdfdfd;
        border-radius: 8px;
        font-size: 1em;
        cursor: pointer;
        transition: all 0.2s;
      ">${String.fromCharCode(65 + idx)}. ${opt}</button>
    `;
  });

  html += `
      </div>
      <div id="quiz-feedback" style="margin-top: 15px; font-weight: bold; text-align: center; min-height: 24px;"></div>
    </div>
  `;

  container.innerHTML = html;
}

function checkQuizAnswer(selectedIndex, correctIndex, btnElement) {
  const allButtons = document.querySelectorAll(".quiz-opt-btn");
  allButtons.forEach(btn => (btn.disabled = true)); // Khóa các lựa chọn

  const feedback = document.getElementById("quiz-feedback");

  if (selectedIndex === correctIndex) {
    // ĐÚNG: ĐỔI MÀU XANH GREEN
    btnElement.style.backgroundColor = "#2ecc71";
    btnElement.style.color = "#ffffff";
    btnElement.style.borderColor = "#27ae60";
    if (feedback) {
      feedback.style.color = "#27ae60";
      feedback.textContent = " Chính xác!";
    }
    quizScore++;
  } else {
    // SAI: ĐỔI MÀU ĐỎ RED
    btnElement.style.backgroundColor = "#e74c3c";
    btnElement.style.color = "#ffffff";
    btnElement.style.borderColor = "#c0392b";

    // Tô màu xanh cho lựa chọn đúng
    if (allButtons[correctIndex]) {
      allButtons[correctIndex].style.backgroundColor = "#2ecc71";
      allButtons[correctIndex].style.color = "#ffffff";
      allButtons[correctIndex].style.borderColor = "#27ae60";
    }

    if (feedback) {
      feedback.style.color = "#e74c3c";
      feedback.textContent = "❌ Sai mất rồi!";
    }
  }

  setTimeout(() => {
    quizIndex++;
    renderQuiz();
  }, 1400);
}

function resetQuiz() {
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}
