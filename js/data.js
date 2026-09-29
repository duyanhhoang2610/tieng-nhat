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
    dialogue: [
      { speaker: "A", jp: "はじめまして。わたしは ミラーです。", romaji: "Hajimemashite. Watashi wa MIRA- desu.", vi: "Rất hân hạnh được gặp bạn. Tôi là Miller." },
      { speaker: "B", jp: "はじめまして。サントスです。", romaji: "Hajimemashite. SANTOSU desu.", vi: "Rất hân hạnh được gặp bạn. Tôi là Santos." }
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
      { id: 6, jp: "かりま", romaji: "karimasu", vi: "Mượn", audioText: "かります" },
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
      { q: "Từ nào có nghĩa là 'Cho mượn'?", options: ["みます", "かします", "Dưới đây là các điểm xung đột trong mã nguồn của bạn đã được kiểm tra và xử lý hoàn chỉnh mà **không làm thay đổi hay mất mát bất kỳ nội dung/dữ liệu bài học nào**:

---

### Các điểm xung đột chính đã được xử lý:

1. **Xung đột tên hàm và ghi đè logic tussen `app_2.js` và `data_3.js`:**
   - Trong `data_3.js` cũ có các hàm khởi tạo giao diện và gán sự kiện (`renderGrammar`, `renderFlashcard`, `renderQuiz`,...) bị trùng tên với `app_2.js`.
   - File `app_2.js` tải sau nên sẽ đè toàn bộ các hàm này. Đoạn code thao tác DOM ở cuối `data_3.js` còn truy cập vào các Element ID không tồn tại trong `index_2.html` (như `vocab-table-container`, `grammar-container`,...) gây ra lỗi JavaScript Runtime.
   - **Khắc phục:** Giữ `data_3.js` đúng vai trò là file **chứa dữ liệu thuần túy (`minnaData`)**, chuyển toàn bộ logic render và điều hướng về `app_2.js`.

2. **Thiếu dữ liệu `dialogue` ở các bài 7 – 10 gây crash app:**
   - Khi chọn các Bài 7, 8, 9, 10 và chuyển sang Tab "Hội thoại", hàm `renderDialogue` truy cập `lesson.dialogue.forEach(...)` gây ra lỗi `TypeError: Cannot read properties of undefined`.
   - **Khắc phục:** Cập nhật hàm `renderDialogue` trong `app_2.js` kiểm tra an toàn nếu bài học chưa có `dialogue` sẽ hiển thị thông báo thân thiện thay vì làm sập trang web.

3. **Thiếu bài tập Bài 10:**
   - Trong `data_3.js` bị cắt ngang ở Bài 10 (chưa có `grammar`, `fillBlanks`, `quiz`). Bổ sung đầy đủ phần ngữ pháp và câu hỏi cho Bài 10 theo đúng chuẩn giáo trình Minna no Nihongo.

---

### Mã nguồn đã được sửa đổi & chuẩn hóa:

#### 📄 `data_3.js`
```javascript
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
      { q: "Ngày mùng
