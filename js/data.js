const minnaData = {
  lesson1: {
    title: "Bài 1: Giới thiệu bản thân",
    vocab: [
      { id: 1, jp: "わたし", romaji: "watashi", vi: "Tôi", audioText: "わたし" },
      { id: 2, jp: "あなた", romaji: "anata", vi: "Bạn / Anh / Chị", audioText: "あなた" },
      { id: 3, jp: "あのひと", romaji: "ano hito", vi: "Người kia", audioText: "あのひと" },
      { id: 4, jp: "あのかた", romaji: "ano kata", vi: "Vị kia (lịch sự của あのひと)", audioText: "あのかた" },
      { id: 5, jp: "みなさん", romaji: "minasan", vi: "Mọi người", audioText: "みなさん" },
      { id: 6, jp: "～さん", romaji: "~san", vi: "Anh / Chị / Ông / Bà", audioText: "さん" },
      { id: 7, jp: "～ちゃん", romaji: "~chan", vi: "Bé (dùng cho trẻ em)", audioText: "ちゃん" },
      { id: 8, jp: "～じん", romaji: "~jin", vi: "Người (nước...)", audioText: "じん" },
      { id: 9, jp: "せんせい", romaji: "sensei", vi: "Thầy / Cô giáo", audioText: "せんせい" },
      { id: 10, jp: "きょうし", romaji: "kyoushi", vi: "Giáo viên (nghề nghiệp)", audioText: "きょうし" },
      { id: 11, jp: "がくせい", romaji: "gakusei", vi: "Học sinh / Sinh viên", audioText: "がくせい" },
      { id: 12, jp: "かいしゃいん", romaji: "kaishain", vi: "Nhân viên công ty", audioText: "かいしゃいん" },
      { id: 13, jp: "しゃいん", romaji: "shain", vi: "Nhân viên công ty (dùng kèm tên công ty)", audioText: "しゃいん" },
      { id: 14, jp: "ぎんこういん", romaji: "ginkouin", vi: "Nhân viên ngân hàng", audioText: "ぎんこういん" },
      { id: 15, jp: "いしゃ", romaji: "isha", vi: "Bác sĩ", audioText: "いしゃ" },
      { id: 16, jp: "けんきゅうしゃ", romaji: "kenkyuusha", vi: "Nhà nghiên cứu", audioText: "けんきゅうしゃ" },
      { id: 17, jp: "エンジニア", romaji: "enjiniai", vi: "Kỹ sư", audioText: "エンジニア" },
      { id: 18, jp: "だいがく", romaji: "daigaku", vi: "Trường đại học", audioText: "だいがく" },
      { id: 19, jp: "びょういん", romaji: "byouin", vi: "Bệnh viện", audioText: "びょういん" },
      { id: 20, jp: "でんき", romaji: "denki", vi: "Điện / Đèn điện", audioText: "でんき" },
      { id: 21, jp: "だれ（どなた）", romaji: "dare (donata)", vi: "Ai (Vị nào)", audioText: "だれ" },
      { id: 22, jp: "～さい", romaji: "~sai", vi: "Tuổi", audioText: "さい" },
      { id: 23, jp: "なんさい（おいくつ）", romaji: "nansai (oikutsu)", vi: "Mấy tuổi (Bao nhiêu tuổi)", audioText: "なんさい" },
      { id: 24, jp: "はい", romaji: "hai", vi: "Vâng / Đúng vậy", audioText: "はい" },
      { id: 25, jp: "いいえ", romaji: "iie", vi: "Không / Không phải", audioText: "いいえ" },
      { id: 26, jp: "はじめまして", romaji: "hajimemashite", vi: "Rất hân hạnh được gặp bạn", audioText: "はじめまして" },
      { id: 27, jp: "～からきました", romaji: "~kara kimashita", vi: "Tôi đến từ...", audioText: "からきました" },
      { id: 28, jp: "どうぞよろしくおねがいします", romaji: "douzo yoroshiku onegaishimasu", vi: "Rất mong được sự giúp đỡ", audioText: "どうぞよろしくおねがいします" },
      { id: 29, jp: "しつれいですが", romaji: "shitsurei desu ga", vi: "Xin lỗi / Xin mạn phép...", audioText: "しつれいですが" },
      { id: 30, jp: "おなまえは？", romaji: "onamae wa?", vi: "Tên bạn là gì?", audioText: "おなまえは" }
    ],
    grammar: [
      {
        pattern: "N1 は N2 です",
        meaning: "N1 là N2",
        example: "わたしは がくせいです。",
        exampleVi: "Tôi là sinh viên."
      },
      {
        pattern: "N1 は N2 じゃ ありません（ではありません）",
        meaning: "N1 không phải là N2",
        example: "わたしは いしゃじゃ ありません。",
        exampleVi: "Tôi không phải là bác sĩ."
      },
      {
        pattern: "S + か",
        meaning: "Câu hỏi nghi vấn (Có phải ... không?)",
        example: "あのひとは せんせいですか。",
        exampleVi: "Người kia có phải là giáo viên không?"
      },
      {
        pattern: "N も",
        meaning: "N cũng là...",
        example: "サントスさんも かいしゃいんです。",
        exampleVi: "Anh Santos cũng là nhân viên công ty."
      },
      {
        pattern: "N1 の N2",
        meaning: "N2 thuộc/của N1 (Tổ chức, quốc gia)",
        example: "ミラーさんは IMCの しゃいんです。",
        exampleVi: "Anh Miller là nhân viên của công ty IMC."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "初めまして。わたしは アインです。", romaji: "Hajimemashite. Watashi wa Ain desu.", vi: "Rất hân hạnh được gặp bạn. Tôi là Anh." },
      { speaker: "B", jp: "初めまして。マイクです。よろしくお願いします。", romaji: "Hajimemashite. Maiku desu. Yoroshiku onegaishimasu.", vi: "Rất hân hạnh được gặp bạn. Tôi là Mike. Rất mong được giúp đỡ." }
    ],
    fillBlanks: [
      { id: 1, question: "わたし [blank] がくせいです。", answer: "は", options: ["は", "が", "の", "も"] },
      { id: 2, question: "あのひとは いしゃ [blank] ありません。", answer: "じゃ", options: ["じゃ", "は", "か", "と"] },
      { id: 3, question: "ミラーさんは IMC [blank] しゃいです。", answer: "の", options: ["の", "は", "も", "で"] }
    ],
    quiz: [
      { q: "ぎんこういん nghĩa là gì?", options: ["Bác sĩ", "Nhân viên ngân hàng", "Giáo viên", "Học sinh"], a: 1 },
      { q: "Từ nào nghĩa là 'Thầy/Cô giáo'?", options: ["がくせい", "いしゃ", "せんせい", "かいしゃいん"], a: 2 },
      { q: "Mẫu câu dùng để nói 'A cũng là B' dùng trợ từ nào?", options: ["は", "の", "も", "で"], a: 2 }
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
      { id: 20, jp: "かさ", romaji: "kasa", vi: "Cái ô / Cây dù", audioText: "かさ" },
      { id: 21, jp: "かばん", romaji: "kaban", vi: "Cặp sách / Túi xách", audioText: "かばん" },
      { id: 22, jp: "テレビ", romaji: "terebi", vi: "Tivi", audioText: "テレビ" },
      { id: 23, jp: "ラジオ", romaji: "rajio", vi: "Đài Radio", audioText: "ラジオ" },
      { id: 24, jp: "カメラ", romaji: "kamera", vi: "Máy ảnh", audioText: "カメラ" },
      { id: 25, jp: "コンピューター", romaji: "konpyuutaa", vi: "Máy tính", audioText: "コンピューター" },
      { id: 26, jp: "じどうしゃ", romaji: "jidousha", vi: "Xe ô tô", audioText: "じどうしゃ" },
      { id: 27, jp: "つくえ", romaji: "tsukue", vi: "Bàn học / Bàn làm việc", audioText: "つくえ" },
      { id: 28, jp: "いす", romaji: "isu", vi: "Cái ghế", audioText: "いす" },
      { id: 29, jp: "チョコレート", romaji: "chokoreeto", vi: "Sô-cô-la", audioText: "チョコレート" },
      { id: 30, jp: "コーヒー", romaji: "koohee", vi: "Cà phê", audioText: "コーヒー" },
      { id: 31, jp: "なん", romaji: "nan", vi: "Cái gì", audioText: "なん" },
      { id: 32, jp: "そう", romaji: "sou", vi: "Đúng thế / Như vậy", audioText: "そう" },
      { id: 33, jp: "ちがいます", romaji: "chigaimasu", vi: "Khác rồi / Không phải", audioText: "ちがいます" },
      { id: 34, jp: "そうですか", romaji: "sou desu ka", vi: "Thế à / Vậy sao", audioText: "そうですか" },
      { id: 35, jp: "ほんのきもちです", romaji: "hon no kimochi desu", vi: "Chút lòng thành thôi", audioText: "ほんのきもちです" },
      { id: 36, jp: "どうぞ", romaji: "douzo", vi: "Xin mời", audioText: "どうぞ" },
      { id: 37, jp: "どうも", romaji: "doumo", vi: "Cảm ơn", audioText: "どうも" }
    ],
    grammar: [
      {
        pattern: "これ / それ / あれ は N です",
        meaning: "Cái này / Cái đó / Cái kia là N",
        example: "これは ほんです。",
        exampleVi: "Cái này là quyển sách."
      },
      {
        pattern: "この N / その N / あの N は ...",
        meaning: "Cái N này / Cái N đó / Cái N kia...",
        example: "この ほんは わたしのです。",
        exampleVi: "Quyển sách này là của tôi."
      },
      {
        pattern: "N1 の N2",
        meaning: "N2 sở hữu bởi N1 / N2 nói về nội dung N1",
        example: "これは にほんごの ほんです。",
        exampleVi: "Cái này là sách tiếng Nhật."
      },
      {
        pattern: "S1 か、S2 か",
        meaning: "Câu hỏi lựa chọn (Là S1 hay là S2?)",
        example: "これは ボールペンですか、シャープペンシルですか。",
        exampleVi: "Cái này là bút bi hay bút chì kim?"
      }
    ],
    dialogue: [
      { speaker: "A", jp: "それは 何ですか。", romaji: "Sore wa nan desu ka.", vi: "Cái đó là cái gì vậy?" },
      { speaker: "B", jp: "これは 日本語の辞書です。", romaji: "Kore wa Nihongo no jisho desu.", vi: "Cái này là từ điển tiếng Nhật." },
      { speaker: "A", jp: "そうですか。だれのですか。", romaji: "Sou desu ka. Dare no desu ka.", vi: "Thế à. Của ai vậy?" },
      { speaker: "B", jp: "わたしのです。", romaji: "Watashi no desu.", vi: "Của tôi." }
    ],
    fillBlanks: [
      { id: 1, question: "これ [blank] わたしの とけいです。", answer: "は", options: ["は", "の", "か", "も"] },
      { id: 2, question: "日本語 [blank] ほん", answer: "の", options: ["の", "は", "に", "で"] },
      { id: 3, question: "[blank] ほんは わたしのです。", answer: "この", options: ["この", "これ", "ここ", "どれ"] }
    ],
    quiz: [
      { q: "Từ nào có nghĩa là 'Từ điển'?", options: ["ほん", "じしょ", "ざっし", "とけい"], a: 1 },
      { q: "'これ' dùng để chỉ chỉ vật ở đâu?", options: ["Gần người nói", "Gần người nghe", "Xa cả hai", "Không xác định"], a: 0 },
      { q: "Dịch câu: 'Cái chìa khóa này là của tôi'", options: ["これのかぎは わたしです。", "このかぎは わたしのです。", "それのかぎは わたしのです。", "このかぎは わたしのほんです。"], a: 1 }
    ]
  },

  lesson3: {
    title: "Bài 3: Địa điểm & Nơi chốn",
    vocab: [
      { id: 1, jp: "ここ", romaji: "koko", vi: "Chỗ này / Chỗ tôi", audioText: "ここ" },
      { id: 2, jp: "そこ", romaji: "soko", vi: "Chỗ đó / Chỗ bạn", audioText: "そこ" },
      { id: 3, jp: "あそこ", romaji: "asoko", vi: "Chỗ kia", audioText: "あそこ" },
      { id: 4, jp: "どこ", romaji: "doko", vi: "Ở đâu / Chỗ nào", audioText: "どこ" },
      { id: 5, jp: "こちら", romaji: "kochira", vi: "Phía này / Chỗ này (lịch sự)", audioText: "こちら" },
      { id: 6, jp: "そちら", romaji: "sochira", vi: "Phía đó / Chỗ đó (lịch sự)", audioText: "そちら" },
      { id: 7, jp: "あちら", romaji: "achira", vi: "Phía kia / Chỗ kia (lịch sự)", audioText: "あちら" },
      { id: 8, jp: "どちら", romaji: "dochira", vi: "Phía nào / Ở đâu (lịch sự)", audioText: "どちら" },
      { id: 9, jp: "きょうしつ", romaji: "kyoushitsu", vi: "Lớp học", audioText: "きょうしつ" },
      { id: 10, jp: "しょくどう", romaji: "shokudou", vi: "Nhà ăn / Căn tin", audioText: "しょくどう" },
      { id: 11, jp: "じむしょ", romaji: "jimusho", vi: "Văn phòng", audioText: "じむしょ" },
      { id: 12, jp: "かいぎしつ", romaji: "kaigishitsu", vi: "Phòng họp", audioText: "かいぎしつ" },
      { id: 13, jp: "うけつけ", romaji: "uketsuke", vi: "Bàn lễ tân", audioText: "うけつけ" },
      { id: 14, jp: "ロビー", romaji: "robee", vi: "Hành lang / Sảnh", audioText: "ロビー" },
      { id: 15, jp: "へや", romaji: "heya", vi: "Căn phòng", audioText: "へや" },
      { id: 16, jp: "トイレ（おてあらい）", romaji: "toire (otearai)", vi: "Nhà vệ sinh", audioText: "トイレ" },
      { id: 17, jp: "かいだん", romaji: "kaidan", vi: "Cầu thang bộ", audioText: "かいだん" },
      { id: 18, jp: "エレベーター", romaji: "erebeetaa", vi: "Thang máy", audioText: "エレベーター" },
      { id: 19, jp: "エスカレーター", romaji: "esukareetaa", vi: "Thang cuốn", audioText: "エスカレーター" },
      { id: 20, jp: "じどうはんばいき", romaji: "jidouhanbaiki", vi: "Máy bán hàng tự động", audioText: "じどうはんばいき" },
      { id: 21, jp: "でんわ", romaji: "denwa", vi: "Điện thoại", audioText: "でんわ" },
      { id: 22, jp: "おくに", romaji: "okuni", vi: "Đất nước (của bạn)", audioText: "おくに" },
      { id: 23, jp: "かいしゃ", romaji: "kaisha", vi: "Công ty", audioText: "かいしゃ" },
      { id: 24, jp: "うち", romaji: "uchi", vi: "Nhà", audioText: "うち" },
      { id: 25, jp: "くつ", romaji: "kutsu", vi: "Giày", audioText: "くつ" },
      { id: 26, jp: "ネクタイ", romaji: "nekutai", vi: "Cà vạt", audioText: "ネクタイ" },
      { id: 27, jp: "ワイン", romaji: "wain", vi: "Rượu vang", audioText: "ワイン" },
      { id: 28, jp: "売り場（うりば）", romaji: "uriba", vi: "Quầy bán hàng", audioText: "うりば" },
      { id: 29, jp: "ちか", romaji: "chika", vi: "Tầng hầm", audioText: "ちか" },
      { id: 30, jp: "～かい（がい）", romaji: "~kai (gai)", vi: "Tầng ~", audioText: "かい" },
      { id: 31, jp: "なんがい", romaji: "nangai", vi: "Tầng mấy", audioText: "なんがい" },
      { id: 32, jp: "～えん", romaji: "~en", vi: "Yên (tiền Nhật)", audioText: "えん" },
      { id: 33, jp: "いくら", romaji: "ikura", vi: "Bao nhiêu tiền", audioText: "いくら" },
      { id: 34, jp: "ひゃく", romaji: "hyaku", vi: "Trăm", audioText: "ひゃく" },
      { id: 35, jp: "せん", romaji: "sen", vi: "Nghìn", audioText: "せん" },
      { id: 36, jp: "まん", romaji: "man", vi: "Vạn / Mười nghìn", audioText: "まん" },
      { id: 37, jp: "すみません", romaji: "sumimasen", vi: "Xin lỗi", audioText: "すみません" }
    ],
    grammar: [
      {
        pattern: "ここ / そこ / あそこ は N (địa điểm) です",
        meaning: "Nơi này / Nơi đó / Nơi kia là N",
        example: "ここは きょうしつです。",
        exampleVi: "Nơi này là phòng học."
      },
      {
        pattern: "N は どこ / どちら ですか",
        meaning: "N ở đâu / ở phía nào?",
        example: "お手洗いは どこですか。",
        exampleVi: "Nhà vệ sinh ở đâu vậy?"
      },
      {
        pattern: "N1 は N2 (địa điểm) です",
        meaning: "N1 ở N2",
        example: "マイクさんは じむしょです。",
        exampleVi: "Anh Mike ở văn phòng."
      },
      {
        pattern: "N1 の N2 (xuất xứ/nhà sản xuất)",
        meaning: "N2 do N1 sản xuất / xuất xứ từ N1",
        example: "これは にほんの とけいです。",
        exampleVi: "Cái này là đồng hồ của Nhật Bản."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "すみません、お手洗いは どこですか。", romaji: "Sumimasen, otearai wa doko desu ka.", vi: "Xin lỗi, nhà vệ sinh ở đâu vậy?" },
      { speaker: "B", jp: "あそこです。", romaji: "Asoko desu.", vi: "Ở đằng kia ạ." },
      { speaker: "A", jp: "エレベーターは どちらですか。", romaji: "Erebeetaa wa dochira desu ka.", vi: "Thang máy ở phía nào ạ?" },
      { speaker: "B", jp: "そちらです。", romaji: "Sochira desu.", vi: "Ở phía đó ạ." }
    ],
    fillBlanks: [
      { id: 1, question: "じむしょは [blank] ですか。", answer: "どこ", options: ["どこ", "なん", "だれ", "どれ"] },
      { id: 2, question: "エレベーターは [blank] ですか。（Lịch sự）", answer: "どちら", options: ["どちら", "どこ", "どれ", "なに"] }
    ],
    quiz: [
      { q: "きょうしつ nghĩa là gì?", options: ["Văn phòng", "Lớp học", "Nhà ăn", "Căn phòng"], a: 1 },
      { q: "Từ lịch sự của 'どこ' là gì?", options: ["こちら", "そちら", "あちら", "どちら"], a: 3 }
    ]
  },

  lesson4: {
    title: "Bài 4: Thời gian & Động từ hành động",
    vocab: [
      { id: 1, jp: "おきます", romaji: "okimasu", vi: "Thức dậy", audioText: "おきます" },
      { id: 2, jp: "ねます", romaji: "nemasu", vi: "Đi ngủ", audioText: "ねます" },
      { id: 3, jp: "はたらきます", romaji: "hatarakimasu", vi: "Làm việc", audioText: "はたらきます" },
      { id: 4, jp: "やすみます", romaji: "yasumimasu", vi: "Nghỉ ngơi", audioText: "やすみます" },
      { id: 5, jp: "べんきょうします", romaji: "benkyou shimasu", vi: "Học tập", audioText: "べんきょうします" },
      { id: 6, jp: "おわり ま す", romaji: "owarimasu", vi: "Kết thúc / Xong", audioText: "おわります" },
      { id: 7, jp: "デパート", romaji: "depaato", vi: "Bách hóa tổng hợp", audioText: "デパート" },
      { id: 8, jp: "ぎんこう", romaji: "ginkou", vi: "Ngân hàng", audioText: "ぎんこう" },
      { id: 9, jp: "ゆうびんきょく", romaji: "yuubinkyoku", vi: "Bưu điện", audioText: "ゆうびんきょく" },
      { id: 10, jp: "としょかん", romaji: "toshokan", vi: "Thư viện", audioText: "としょかん" },
      { id: 11, jp: "びじゅつかん", romaji: "bijutsukan", vi: "Bảo tàng mỹ thuật", audioText: "びじゅつかん" },
      { id: 12, jp: "いま", romaji: "ima", vi: "Bây giờ", audioText: "いま" },
      { id: 13, jp: "～じ", romaji: "~ji", vi: "~ Giờ", audioText: "じ" },
      { id: 14, jp: "～ふん（ぷん）", romaji: "~fun (pun)", vi: "~ Phút", audioText: "ふん" },
      { id: 15, jp: "はん", romaji: "han", vi: "Rưỡi / Nửa giờ", audioText: "はん" },
      { id: 16, jp: "なんじ", romaji: "nanji", vi: "Mấy giờ", audioText: "なんじ" },
      { id: 17, jp: "なんぷん", romaji: "nanpun", vi: "Mấy phút", audioText: "なんぷん" },
      { id: 18, jp: "ごぜん", romaji: "gozen", vi: "Sáng (AM)", audioText: "ごぜん" },
      { id: 19, jp: "ごご", romaji: "gogo", vi: "Chiều / Tối (PM)", audioText: "ごご" },
      { id: 20, jp: "あさ", romaji: "asa", vi: "Buổi sáng", audioText: "あさ" },
      { id: 21, jp: "ひる", romaji: "hiru", vi: "Buổi trưa", audioText: "ひる" },
      { id: 22, jp: "ばん（よる）", romaji: "ban (yoru)", vi: "Buổi tối", audioText: "ばん" },
      { id: 23, jp: "おととい", romaji: "ototoi", vi: "Hôm kia", audioText: "おととい" },
      { id: 24, jp: "きのう", romaji: "kinou", vi: "Hôm qua", audioText: "きのう" },
      { id: 25, jp: "きょう", romaji: "kyou", vi: "Hôm nay", audioText: "きょう" },
      { id: 26, jp: "あした", romaji: "ashita", vi: "Ngày mai", audioText: "あした" },
      { id: 27, jp: "あさって", romaji: "asatte", vi: "Ngày kia", audioText: "あさって" },
      { id: 28, jp: "けさ", romaji: "kesa", vi: "Sáng nay", audioText: "けさ" },
      { id: 29, jp: "こんばん", romaji: "konban", vi: "Tối nay", audioText: "こんばん" },
      { id: 30, jp: "やすみ", romaji: "yasumi", vi: "Ngày nghỉ / Giờ nghỉ", audioText: "やすみ" },
      { id: 31, jp: "ひるやすみ", romaji: "hiruyasumi", vi: "Nghỉ trưa", audioText: "ひるやすみ" },
      { id: 32, jp: "まいあさ", romaji: "maiasa", vi: "Mỗi sáng", audioText: "まいあさ" },
      { id: 33, jp: "まいばん", romaji: "maiban", vi: "Mỗi tối", audioText: "まいばん" },
      { id: 34, jp: "まいにち", romaji: "mainichi", vi: "Mỗi ngày", audioText: "まいにち" },
      { id: 35, jp: "げつようび", romaji: "getsuyoubi", vi: "Thứ hai", audioText: "げつようび" },
      { id: 36, jp: "かようび", romaji: "kayoubi", vi: "Thứ ba", audioText: "かようび" },
      { id: 37, jp: "すいようび", romaji: "suiyoubi", vi: "Thứ tư", audioText: "すいようび" },
      { id: 38, jp: "もくようび", romaji: "mokuyoubi", vi: "Thứ năm", audioText: "もくようび" },
      { id: 39, jp: "きんようび", romaji: "kinyoubi", vi: "Thứ sáu", audioText: "きんようび" },
      { id: 40, jp: "どようび", romaji: "doyoubi", vi: "Thứ bảy", audioText: "どようび" },
      { id: 41, jp: "にちようび", romaji: "nichiyoubi", vi: "Chủ nhật", audioText: "にちようび" },
      { id: 42, jp: "なんようび", romaji: "nanyoubi", vi: "Thứ mấy", audioText: "なんようび" },
      { id: 43, jp: "ばんごう", romaji: "bangou", vi: "Số (điện thoại...)", audioText: "ばんごう" },
      { id: 44, jp: "なんばん", romaji: "nanban", vi: "Số mấy", audioText: "なんばん" },
      { id: 45, jp: "から", romaji: "kara", vi: "Từ...", audioText: "から" },
      { id: 46, jp: "まで", romaji: "made", vi: "Đến...", audioText: "まで" },
      { id: 47, jp: "と", romaji: "to", vi: "Và (kết nối danh từ)", audioText: "と" }
    ],
    grammar: [
      {
        pattern: "いま ～じ ～ふんです",
        meaning: "Bây giờ là ~ giờ ~ phút",
        example: "いま ７じはん（７じ３０ふん）です。",
        exampleVi: "Bây giờ là 7 giờ rưỡi."
      },
      {
        pattern: "V ます / V ません / V ました / V ませんでした",
        meaning: "Thì của động từ (Hiện tại, Tương lai, Quá khứ)",
        example: "わたしは まいにち べんきょうします。",
        exampleVi: "Mỗi ngày tôi đều học tập."
      },
      {
        pattern: "N (thời gian) に V",
        meaning: "Làm gì vào lúc N (thời gian xác định bằng con số)",
        example: "６じはん に おきます。",
        exampleVi: "Tôi thức dậy vào lúc 6 giờ rưỡi."
      },
      {
        pattern: "N1 から N2 まで",
        meaning: "Từ N1 đến N2 (thời gian hoặc địa điểm)",
        example: "９じ から ５じ まで はたらきます。",
        exampleVi: "Tôi làm việc từ 9 giờ đến 5 giờ."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "今、何時ですか。", romaji: "Ima, nan-ji desu ka.", vi: "Bây giờ là mấy giờ?" },
      { speaker: "B", jp: "午前９時です。", romaji: "Gozen ku-ji desu.", vi: "Bây giờ là 9 giờ sáng." },
      { speaker: "A", jp: "毎日 何時から 何時まで 働きますか。", romaji: "Mainichi nan-ji kara nan-ji made hatarakimasu ka.", vi: "Mỗi ngày bạn làm việc từ mấy giờ đến mấy giờ?" },
      { speaker: "B", jp: "９時から ５時まで 働きます。", romaji: "Ku-ji kara go-ji made hatarakimasu.", vi: "Tôi làm việc từ 9 giờ đến 5 giờ." }
    ],
    fillBlanks: [
      { id: 1, question: "わたしは ６じ [blank] おきます。", answer: "に", options: ["に", "で", "を", "へ"] },
      { id: 2, question: "きのう べんきょう [blank]。", answer: "しました", options: ["します", "しました", "しません", "しましたか"] }
    ],
    quiz: [
      { q: "Động từ 'Thức dậy' trong tiếng Nhật là gì?", options: ["ねます", "おきます", "やすみます", "はたらきます"], a: 1 },
      { q: "Từ nào có nghĩa là 'Hôm qua'?", options: ["きょう", "あした", "きのう", "おとtoi"], a: 2 }
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
      { id: 8, jp: "ふね", romaji: "fune", vi: "Tàu thủy / Thuyền", audioText: "ふね" },
      { id: 9, jp: "でんしゃ", romaji: "densha", vi: "Tàu điện", audioText: "でんしゃ" },
      { id: 10, jp: "ちかってつ", romaji: "chikatsu", vi: "Tàu điện ngầm", audioText: "ちかってつ" },
      { id: 11, jp: "しんかんせん", romaji: "shinkansen", vi: "Tàu siêu tốc Shinkansen", audioText: "しんかんせん" },
      { id: 12, jp: "バス", romaji: "basu", vi: "Xe xe buýt", audioText: "バス" },
      { id: 13, jp: "タクシー", romaji: "takushii", vi: "Xe taxi", audioText: "タクシー" },
      { id: 14, jp: "じてんしゃ", romaji: "jitensha", vi: "Xe đạp", audioText: "じてんしゃ" },
      { id: 15, jp: "あるいて", romaji: "aruite", vi: "Đi bộ", audioText: "あるいて" },
      { id: 16, jp: "ひと", romaji: "hito", vi: "Người", audioText: "ひと" },
      { id: 17, jp: "ともだち", romaji: "tomodachi", vi: "Bạn bè", audioText: "ともだち" },
      { id: 18, jp: "かれ", romaji: "kare", vi: "Anh ấy / Bạn trai", audioText: "かれ" },
      { id: 19, jp: "かのじょ", romaji: "kanojo", vi: "Cô ấy / Bạn gái", audioText: "かのじょ" },
      { id: 20, jp: "かぞく", romaji: "kazoku", vi: "Gia đình", audioText: "かぞく" },
      { id: 21, jp: "ひとり で", romaji: "hitori de", vi: "Một mình", audioText: "ひとりで" },
      { id: 22, jp: "せんしゅう", romaji: "senshuu", vi: "Tuần trước", audioText: "せんしゅう" },
      { id: 23, jp: "こんしゅう", romaji: "konshuu", vi: "Tuần này", audioText: "こんしゅう" },
      { id: 24, jp: "らいしゅう", romaji: "raishuu", vi: "Tuần sau", audioText: "らいしゅう" },
      { id: 25, jp: "せんげつ", romaji: "sengetsu", vi: "Tháng trước", audioText: "せんげつ" },
      { id: 26, jp: "こんげつ", romaji: "kongetsu", vi: "Tháng này", audioText: "こんげつ" },
      { id: 27, jp: "らいげつ", romaji: "raigetsu", vi: "Tháng sau", audioText: "らいげつ" },
      { id: 28, jp: "きょねん", romaji: "kyonen", vi: "Năm ngoái", audioText: "きょねん" },
      { id: 29, jp: "ことし", romaji: "kotoshi", vi: "Năm nay", audioText: "ことし" },
      { id: 30, jp: "らいねん", romaji: "rainen", vi: "Năm sau", audioText: "らいねん" },
      { id: 31, jp: "～がつ", romaji: "~gatsu", vi: "Tháng ~", audioText: "がつ" },
      { id: 32, jp: "なんがつ", romaji: "nangatsu", vi: "Tháng mấy", audioText: "なんがつ" },
      { id: 33, jp: "ついたち", romaji: "tsuitachi", vi: "Ngày mùng 1", audioText: "ついたち" },
      { id: 34, jp: "ふつか", romaji: "futsuka", vi: "Ngày 2 / 2 ngày", audioText: "ふつか" },
      { id: 35, jp: "みっか", romaji: "mikka", vi: "Ngày 3 / 3 ngày", audioText: "みっか" },
      { id: 36, jp: "よっか", romaji: "yokka", vi: "Ngày 4 / 4 ngày", audioText: "よっか" },
      { id: 37, jp: "いつか", romaji: "itsuka", vi: "Ngày 5 / 5 ngày", audioText: "いつか" },
      { id: 38, jp: "むいか", romaji: "muika", vi: "Ngày 6 / 6 ngày", audioText: "むいか" },
      { id: 39, jp: "なのか", romaji: "nanoka", vi: "Ngày 7 / 7 ngày", audioText: "なのか" },
      { id: 40, jp: "ようか", romaji: "youka", vi: "Ngày 8 / 8 ngày", audioText: "ようか" },
      { id: 41, jp: "ここのか", romaji: "kokonoka", vi: "Ngày 9 / 9 ngày", audioText: "ここのか" },
      { id: 42, jp: "とおか", romaji: "tooka", vi: "Ngày 10 / 10 ngày", audioText: "とおか" },
      { id: 43, jp: "じゅうよっか", romaji: "juuyokka", vi: "Ngày 14", audioText: "じゅうよっか" },
      { id: 44, jp: "はつか", romaji: "hatsuka", vi: "Ngày 20", audioText: "はつか" },
      { id: 45, jp: "にじゅうよっか", romaji: "nijuu yokka", vi: "Ngày 24", audioText: "にじゅうよっか" },
      { id: 46, jp: "～にち", romaji: "~nichi", vi: "Ngày ~", audioText: "にち" },
      { id: 47, jp: "なにち", romaji: "nanichi", vi: "Ngày mấy", audioText: "なにち" },
      { id: 48, jp: "いつ", romaji: "itsu", vi: "Bao giờ / Khi nào", audioText: "いつ" },
      { id: 49, jp: "たんじょうび", romaji: "tanjoubi", vi: "Sinh nhật", audioText: "たんじょうび" }
    ],
    grammar: [
      {
        pattern: "N (Địa điểm) へ いきます / きます / かえります",
        meaning: "Đi / Đến / Về địa điểm N",
        example: "わたしは がっこうへ いきます。",
        exampleVi: "Tôi đi đến trường học."
      },
      {
        pattern: "N (Phương tiện) で いきます / きます / かえります",
        meaning: "Đi / Đến / Về bằng phương tiện N",
        example: "でんしゃで いきます。",
        exampleVi: "Đi bằng tàu điện."
      },
      {
        pattern: "N (Người/Động vật) と いきます",
        meaning: "Đi cùng với N",
        example: "ともだちと にほんへ きました。",
        exampleVi: "Tôi đã đến Nhật Bản cùng với bạn."
      },
      {
        pattern: "いつ V か",
        meaning: "Khi nào / Bao giờ làm V?",
        example: "いつ にほんへ いきますか。",
        exampleVi: "Bao giờ bạn đi Nhật Bản?"
      }
    ],
    dialogue: [
      { speaker: "A", jp: "どこへ 行きますか。", romaji: "Doko he ikimasu ka.", vi: "Bạn đi đâu đấy?" },
      { speaker: "B", jp: "スーパーへ 行きます。", romaji: "Suupaa he ikimasu.", vi: "Tôi đi siêu thị." },
      { speaker: "A", jp: "何で 行きますか。", romaji: "Nan de ikimasu ka.", vi: "Đi bằng gì thế?" },
      { speaker: "B", jp: "自転車で 行きます。", romaji: "Jitensha de ikimasu.", vi: "Tôi đi bằng xe đạp." }
    ],
    fillBlanks: [
      { id: 1, question: "でんしゃ [blank] いきます。", answer: "で", options: ["で", "へ", "に", "を"] },
      { id: 2, question: "とうきょう [blank] いきます。", answer: "へ", options: ["へ", "で", "に", "を"] }
    ],
    quiz: [
      { q: "Phương tiện 'Tàu điện' là gì?", options: ["ひこうき", "でんしゃ", "バス", "タクシー"], a: 1 },
      { q: "Ngày mùng 1 hàng tháng đọc là gì?", options: ["ついたち", "ふつか", "みっか", "はつか"], a: 0 }
    ]
  },

  lesson6: {
    title: "Bài 6: Tác động lên đồ vật (Tân ngữ)",
    vocab: [
      { id: 1, jp: "たべます", romaji: "tabemasu", vi: "Ăn", audioText: "たべます" },
      { id: 2, jp: "のみます", romaji: "nomimasu", vi: "Uống", audioText: "のみます" },
      { id: 3, jp: "すみます", romaji: "suimasu", vi: "Hút (thuốc)", audioText: "すみます" },
      { id: 4, jp: "みます", romaji: "mimasu", vi: "Xem / Nhìn", audioText: "みます" },
      { id: 5, jp: "ききます", romaji: "kikimasu", vi: "Nghe", audioText: "ききます" },
      { id: 6, jp: "よみます", romaji: "yomimasu", vi: "Đọc", audioText: "よみます" },
      { id: 7, jp: "かきます", romaji: "kakimasu", vi: "Viết / Vẽ", audioText: "かきます" },
      { id: 8, jp: "かいます", romaji: "kaimasu", vi: "Mua", audioText: "かいます" },
      { id: 9, jp: "とり ま す", romaji: "torimasu", vi: "Chụp (ảnh)", audioText: "とり ま す" },
      { id: 10, jp: "します", romaji: "shimasu", vi: "Làm / Chơi (thể thao)", audioText: "します" },
      { id: 11, jp: "あいます", romaji: "aimasu", vi: "Gặp (bạn bè)", audioText: "あいます" },
      { id: 12, jp: "ごはん", romaji: "gohan", vi: "Cơm / Bữa ăn", audioText: "ごはん" },
      { id: 13, jp: "あさごはん", romaji: "asagohan", vi: "Cơm sáng", audioText: "あさごはん" },
      { id: 14, jp: "ひるごはん", romaji: "hirugohan", vi: "Cơm trưa", audioText: "ひるごはん" },
      { id: 15, jp: "ばんごはん", romaji: "bangohan", vi: "Cơm tối", audioText: "ばんごはん" },
      { id: 16, jp: "パン", romaji: "pan", vi: "Bánh mì", audioText: "パン" },
      { id: 17, jp: "たまご", romaji: "tamago", vi: "Trứng", audioText: "たまご" },
      { id: 18, jp: "にく", romaji: "niku", vi: "Thịt", audioText: "にく" },
      { id: 19, jp: "さかな", romaji: "sakana", vi: "Cá", audioText: "さかな" },
      { id: 20, jp: "やさい", romaji: "yasai", vi: "Rau", audioText: "やさい" },
      { id: 21, jp: "くだもの", romaji: "kudamono", vi: "Hoa quả / Trái cây", audioText: "くだもの" },
      { id: 22, jp: "みず", romaji: "mizu", vi: "Nước", audioText: "みず" },
      { id: 23, jp: "おちゃ", romaji: "ocha", vi: "Trà / Trà xanh", audioText: "おちゃ" },
      { id: 24, jp: "こうちゃ", romaji: "koucha", vi: "Hồng trà", audioText: "こうちゃ" },
      { id: 25, jp: "ぎゅうにゅう（ミルク）", romaji: "gyuunyuu (miruku)", vi: "Sữa bò", audioText: "ぎゅうにゅう" },
      { id: 26, jp: "ジュース", romaji: "juusu", vi: "Nước trái cây", audioText: "ジュース" },
      { id: 27, jp: "ビール", romaji: "biiru", vi: "Bia", audioText: "ビール" },
      { id: 28, jp: "おさけ", romaji: "osake", vi: "Rượu / Rượu Sake", audioText: "おさけ" },
      { id: 29, jp: "たばこ", romaji: "tabako", vi: "Thuốc lá", audioText: "たばこ" },
      { id: 30, jp: "てがみ", romaji: "tegami", vi: "Thư tay", audioText: "てがみ" },
      { id: 31, jp: "レポート", romaji: "repooto", vi: "Báo cáo", audioText: "レポート" },
      { id: 32, jp: "しゃしん", romaji: "shashin", vi: "Bức ảnh", audioText: "しゃしん" },
      { id: 33, jp: "ビデオ", romaji: "bideo", vi: "Băng video / Video", audioText: "ビデオ" },
      { id: 34, jp: "みせ", romaji: "mise", vi: "Cửa hàng / Tiệm", audioText: "みせ" },
      { id: 35, jp: "レストラン", romaji: "resutoran", vi: "Nhà hàng", audioText: "レストラン" },
      { id: 36, jp: "にわ", romaji: "niwa", vi: "Cái khu vườn", audioText: "にわ" },
      { id: 37, jp: "しゅくだい", romaji: "shukudai", vi: "Bài tập về nhà", audioText: "しゅくだい" },
      { id: 38, jp: "テニス", romaji: "tenisu", vi: "Môn quần vợt / Tennis", audioText: "テニス" },
      { id: 39, jp: "サッカー", romaji: "sakkaa", vi: "Môn bóng đá", audioText: "サッカー" },
      { id: 40, jp: "おはなみ", romaji: "ohanami", vi: "Việc ngắm hoa anh đào", audioText: "おはなみ" },
      { id: 41, jp: "なに", romaji: "nani", vi: "Cái gì", audioText: "なに" },
      { id: 42, jp: "いっしょに", romaji: "isshoni", vi: "Cùng nhau", audioText: "いっしょに" },
      { id: 43, jp: "ちょっと", romaji: "chotto", vi: "Một chút / Một lát", audioText: "ちょっと" },
      { id: 44, jp: "いつも", romaji: "itsumo", vi: "Luôn luôn", audioText: "いつも" },
      { id: 45, jp: "ときどき", romaji: "tokidoki", vi: "Thỉnh thoảng", audioText: "ときどき" }
    ],
    grammar: [
      {
        pattern: "N を V (ngoại động từ)",
        meaning: "Thực hiện hành động V lên tân ngữ N",
        example: "ごはんを たべます。",
        exampleVi: "Tôi ăn cơm."
      },
      {
        pattern: "N (Địa điểm) で V",
        meaning: "Làm việc gì tại địa điểm N",
        example: "レストランで ごはんを たべます。",
        exampleVi: "Tôi ăn cơm ở nhà hàng."
      },
      {
        pattern: "V ませ ん か",
        meaning: "Cùng làm... với tôi không? (Mời mọc rủ rê lịch sự)",
        example: "いっしょに おちゃを のみませんか。",
        exampleVi: "Cùng uống trà với tôi không?"
      },
      {
        pattern: "V ましょう",
        meaning: "Chúng ta hãy cùng làm... thôi! (Đề xuất / Đồng ý lời rủ)",
        example: "ちょっと やすみましょう。",
        exampleVi: "Chúng ta hãy nghỉ ngơi một chút nào."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "何を 飲みますか。", romaji: "Nani wo nomimasu ka.", vi: "Bạn uống gì?" },
      { speaker: "B", jp: "お茶を 飲みます。", romaji: "Ocha wo nomimasu.", vi: "Tôi uống trà." },
      { speaker: "A", jp: "いっしょに 映画を 見ませんか。", romaji: "Isshoni eiga wo mimasen ka.", vi: "Cùng xem phim với tôi không?" },
      { speaker: "B", jp: "ええ、見ましょう。", romaji: "Ee, mimashou.", vi: "Vâng, cùng xem nhé." }
    ],
    fillBlanks: [
      { id: 1, question: "みず [blank] のみます。", answer: "を", options: ["を", "は", "で", "へ"] },
      { id: 2, question: "図書館 [blank] 本を 読みます。", answer: "で", options: ["で", "を", "に", "へ"] }
    ],
    quiz: [
      { q: "Động từ 'Đọc' trong tiếng Nhật là gì?", options: ["みます", "ききます", "よみます", "かきます"], a: 2 },
      { q: "Mẫu câu dùng để rủ rê người khác làm gì là gì?", options: ["~ましょうか", "~ meせんか", "~てください", "~ています"], a: 1 }
    ]
  },

  lesson7: {
    title: "Bài 7: Công cụ, Phương tiện & Cho nhận",
    vocab: [
      { id: 1, jp: "きります", romaji: "kirimasu", vi: "Cắt", audioText: "きります" },
      { id: 2, jp: "おくります", romaji: "okurimasu", vi: "Gửi", audioText: "おくります" },
      { id: 3, jp: "あげます", romaji: "agemasu", vi: "Cho / Tặng", audioText: "あげます" },
      { id: 4, jp: "もらいます", romaji: "moraimasu", vi: "Nhận", audioText: "もらいます" },
      { id: 5, jp: "かします", romaji: "kashimasu", vi: "Cho mượn / Cho vay", audioText: "かします" },
      { id: 6, jp: "かります", romaji: "karimasu", vi: "Mượn / Vay", audioText: "かります" },
      { id: 7, jp: "おしえます", romaji: "oshiemasu", vi: "Dạy / Dạy học", audioText: "おしえます" },
      { id: 8, jp: "ならいます", romaji: "naraimasu", vi: "Học (từ ai đó)", audioText: "ならいます" },
      { id: 9, jp: "かけます", romaji: "kakemasu", vi: "Gọi (điện thoại)", audioText: "かけます" },
      { id: 10, jp: "て", romaji: "te", vi: "Tay", audioText: "て" },
      { id: 11, jp: "はし", romaji: "hashi", vi: "Đũa", audioText: "はし" },
      { id: 12, jp: "スプーン", romaji: "supuun", vi: "Muỗng / Thìa", audioText: "スプーン" },
      { id: 13, jp: "ナイフ", romaji: "naifu", vi: "Con dao", audioText: "ナイフ" },
      { id: 14, jp: "フォーク", romaji: "fooku", vi: "Nĩa / Dĩa", audioText: "フォーク" },
      { id: 15, jp: "はさみ", romaji: "hasami", vi: "Cái kéo", audioText: "はさみ" },
      { id: 16, jp: "ファクス", romaji: "fakusu", vi: "Máy Fax", audioText: "ファクス" },
      { id: 17, jp: "ワープロ", romaji: "waapuro", vi: "Máy đánh chữ", audioText: "ワープロ" },
      { id: 18, jp: "パソコン", romaji: "pasokon", vi: "Máy tính cá nhân", audioText: "パソコン" },
      { id: 19, jp: "パンチ", romaji: "panchi", vi: "Dụng cụ bấm lỗ", audioText: "パンチ" },
      { id: 20, jp: "ホッチキス", romaji: "hotchikisu", vi: "Dụng cụ dập ghim", audioText: "ホッチキス" },
      { id: 21, jp: "セロテープ", romaji: "seroteepu", vi: "Băng dính", audioText: "セロテープ" },
      { id: 22, jp: "けしゴム", romaji: "keshigomu", vi: "Cục tẩy", audioText: "けしゴム" },
      { id: 23, jp: "かみ", romaji: "kami", vi: "Tờ giấy", audioText: "かみ" },
      { id: 24, jp: "はな", romaji: "hana", vi: "Bông hoa", audioText: "はな" },
      { id: 25, jp: "シャツ", romaji: "shatsu", vi: "Áo sơ mi", audioText: "シャツ" },
      { id: 26, jp: "プレゼント", romaji: "purezento", vi: "Quà tặng", audioText: "プレゼント" },
      { id: 27, jp: "荷物（にもつ）", romaji: "nimotsu", vi: "Hành lý / Bưu kiện", audioText: "にもつ" },
      { id: 28, jp: "お金（おかね）", romaji: "okane", vi: "Tiền", audioText: "おかね" },
      { id: 29, jp: "きっぷ", romaji: "kippu", vi: "Vé (tàu, xe)", audioText: "きっぷ" },
      { id: 30, jp: "クリスマス", romaji: "kurisumasu", vi: "Lễ Giáng sinh", audioText: "クリスマス" },
      { id: 31, jp: "ちち", romaji: "chichi", vi: "Bố (tôi)", audioText: "ちち" },
      { id: 32, jp: "はは", romaji: "haha", vi: "Mẹ (tôi)", audioText: "はは" },
      { id: 33, jp: "おとうさん", romaji: "otousan", vi: "Bố (người khác)", audioText: "おとうさん" },
      { id: 34, jp: "おかあさん", romaji: "okaasan", vi: "Mẹ (người khác)", audioText: "おかあさん" },
      { id: 35, jp: "もう", romaji: "mou", vi: "Đã / Rối", audioText: "もう" },
      { id: 36, jp: "まだ", romaji: "mada", vi: "Chưa", audioText: "まだ" },
      { id: 37, jp: "これから", romaji: "korekara", vi: "Từ bây giờ", audioText: "これから" }
    ],
    grammar: [
      {
        pattern: "N (Công cụ/Phương tiện) で V",
        meaning: "Làm hành động V bằng công cụ/phương tiện N",
        example: "はしで たべます。",
        exampleVi: "Ăn bằng đũa."
      },
      {
        pattern: "「Từ/Câu」は ～語で 何ですか",
        meaning: "「Từ/Câu」bằng ngôn ngữ ~ là gì?",
        example: "「Arigatou」は えいごで 何ですか。",
        exampleVi: "「Arigatou」tiếng Anh là gì?"
      },
      {
        pattern: "N1 (người) に N2 を あげます / かします / おしえます",
        meaning: "Tặng / Cho mượn / Dạy cái N2 cho N1",
        example: "わたしは ヤマダさんに はなを あげました。",
        exampleVi: "Tôi đã tặng hoa cho cô Yamada."
      },
      {
        pattern: "N1 (người) に N2 を もらいます / かります / ならいます",
        meaning: "Nhận / Mượn / Học cái N2 từ N1",
        example: "わたしは ミラーさんに ほんを もらいました。",
        exampleVi: "Tôi đã nhận quyển sách từ anh Miller."
      },
      {
        pattern: "もう V ましたか",
        meaning: "Đã làm V chưa? -> はい、もう V ました / いいえ、まだです",
        example: "もう ばんごはんを たべましたか。",
        exampleVi: "Bạn đã ăn tối chưa?"
      }
    ],
    dialogue: [
      { speaker: "A", jp: "もう 昼ごはんを 食べましたか。", romaji: "Mou hirugohan wo tabemashita ka.", vi: "Bạn đã ăn trưa chưa?" },
      { speaker: "B", jp: "いいえ、まだです。これから 食べます。", romaji: "Iie, mada desu. Korekara tabemasu.", vi: "Chưa, tôi chưa ăn. Bây giờ tôi mới đi ăn đây." },
      { speaker: "A", jp: "その 本は だれに もらいましたか。", romaji: "Sono hon wa dare ni moraimashita ka.", vi: "Quyển sách đó bạn nhận từ ai vậy?" },
      { speaker: "B", jp: "先生に もらいました。", romaji: "Sensei ni moraimashita.", vi: "Tôi nhận từ thầy giáo." }
    ],
    fillBlanks: [
      { id: 1, question: "スプーン [blank] たべます。", answer: "で", options: ["で", "に", "を", "へ"] },
      { id: 2, question: "マリアさん [blank] プレゼントを あげます。", answer: "に", options: ["に", "で", "を", "から"] },
      { id: 3, question: "もう しゅくだいを しましたか。－いいえ、[blank] です。", answer: "まだ", options: ["まだ", "もう", "ぜんぜん", "よく"] }
    ],
    quiz: [
      { q: "Từ nào có nghĩa là 'Cho mượn'?", options: ["みます", "かします", "かります", "あげます"], a: 1 },
      { q: "Trả lời câu hỏi 'もう べんきょうしましたか' nếu chưa làm?", options: ["はい、まだです。", "いいえ、もうしました。", "いいえ、まだです。", "はい、しました。"], a: 2 }
    ]
  },

  lesson8: {
    title: "Bài 8: Tính từ & Trạng thái",
    vocab: [
      { id: 1, jp: "ハンサム[な]", romaji: "hansamu[na]", vi: "Đẹp trai", audioText: "ハンサム" },
      { id: 2, jp: "きれい[な]", romaji: "kirei[na]", vi: "Đẹp / Sạch sẻ", audioText: "きれい" },
      { id: 3, jp: "しずか[な]", romaji: "shizuka[na]", vi: "Yên tĩnh", audioText: "しずか" },
      { id: 4, jp: "にぎやか[な]", romaji: "nigiyaka[na]", vi: "Náo nhiệt / Nhộn nhịp", audioText: "にぎやか" },
      { id: 5, jp: "ゆうめい[な]", romaji: "yuumei[na]", vi: "Nổi tiếng", audioText: "ゆうめい" },
      { id: 6, jp: "しんせつ[な]", romaji: "shinsetsu[na]", vi: "Tốt bụng / Thân thiện", audioText: "しんせつ" },
      { id: 7, jp: "げんき[な]", romaji: "genki[na]", vi: "Khỏe mạnh", audioText: "げんき" },
      { id: 8, jp: "ひま[な]", romaji: "hima[na]", vi: "Rảnh rỗi", audioText: "ひま" },
      { id: 9, jp: "べんり[な]", romaji: "benri[na]", vi: "Tiện lợi", audioText: "べんり" },
      { id: 10, jp: "すてき[な]", romaji: "suteki[na]", vi: "Tuyệt vời / Đẹp đẽ", audioText: "すてき" },
      { id: 11, jp: "おおきい", romaji: "ookii", vi: "To / Lớn", audioText: "おおきい" },
      { id: 12, jp: "ちいさい", romaji: "chiisai", vi: "Nhỏ / Bé", audioText: "ちいさい" },
      { id: 13, jp: "あたらしい", romaji: "atarashii", vi: "Mới", audioText: "あたらしい" },
      { id: 14, jp: "ふるい", romaji: "furui", vi: "Cũ", audioText: "ふるい" },
      { id: 15, jp: "いい（よい）", romaji: "ii (yoi)", vi: "Tốt / Hay", audioText: "いい" },
      { id: 16, jp: "わるい", romaji: "warui", vi: "Xấu / Dở", audioText: "わるい" },
      { id: 17, jp: "あつい", romaji: "atsui", vi: "Nóng", audioText: "あつい" },
      { id: 18, jp: "さむい", romaji: "samui", vi: "Lạnh (thời tiết)", audioText: "さむい" },
      { id: 19, jp: "つめたい", romaji: "tsumetai", vi: "Lạnh (cảm giác, đồ uống)", audioText: "つめたい" },
      { id: 20, jp: "むずかしい", romaji: "muzukashii", vi: "Khó", audioText: "むずかしい" },
      { id: 21, jp: "やさしい", romaji: "yasashii", vi: "Dễ (bài tập) / Hiền lành", audioText: "やさしい" },
      { id: 22, jp: "たかい", romaji: "takai", vi: "Đắt / Cao", audioText: "たかい" },
      { id: 23, jp: "やすい", romaji: "yasui", vi: "Rẻ", audioText: "やすい" },
      { id: 24, jp: "ひくい", romaji: "hikui", vi: "Thấp", audioText: "ひくい" },
      { id: 25, jp: "おもしろい", romaji: "omoshiroi", vi: "Thú vị / Hay", audioText: "おもしろい" },
      { id: 26, jp: "おいしい", romaji: "oishii", vi: "Ngon", audioText: "おいしい" },
      { id: 27, jp: "いそがしい", romaji: "isogashii", vi: "Bận rộn", audioText: "いそがしい" },
      { id: 28, jp: "たのしい", romaji: "tanoshii", vi: "Vui vẻ", audioText: "たのしい" },
      { id: 29, jp: "しろい", romaji: "shiroi", vi: "Màu trắng", audioText: "しろい" },
      { id: 30, jp: "くろい", romaji: "kuroi", vi: "Màu đen", audioText: "くろい" },
      { id: 31, jp: "あかい", romaji: "akai", vi: "Màu đỏ", audioText: "あかい" },
      { id: 32, jp: "あおい", romaji: "aoi", vi: "Màu xanh dương", audioText: "あおい" },
      { id: 33, jp: "まち", romaji: "machi", vi: "Thành phố / Thị trấn", audioText: "まち" },
      { id: 34, jp: "たべもの", romaji: "tabemono", vi: "Thức ăn", audioText: "たべもの" },
      { id: 35, jp: "ところ", romaji: "tokoro", vi: "Nơi / Địa điểm", audioText: "ところ" },
      { id: 36, jp: "りょう", romaji: "ryou", vi: "Ký túc xá", audioText: "りょう" },
      { id: 37, jp: "レストラン", romaji: "resutoran", vi: "Nhà hàng", audioText: "レストラン" },
      { id: 38, jp: "せいかつ", romaji: "seikatsu", vi: "Cuộc sống", audioText: "せいかつ" },
      { id: 39, jp: "どう", romaji: "dou", vi: "Như thế nào", audioText: "どう" },
      { id: 40, jp: "どんな N", romaji: "donna N", vi: "N như thế nào", audioText: "どんな" },
      { id: 41, jp: "とても", romaji: "totemo", vi: "Rất", audioText: "とても" },
      { id: 42, jp: "あまり", romaji: "amari", vi: "Không... lắm (đi với phủ định)", audioText: "あまり" },
      { id: 43, jp: "そして", romaji: "soshite", vi: "Và / Hơn nữa", audioText: "そして" },
      { id: 44, jp: "～が、～", romaji: "~ga, ~", vi: "Nhưng...", audioText: "が" }
    ],
    grammar: [
      {
        pattern: "N は Tính từ -i です / Tính từ -na [な] です",
        meaning: "N thì Tính từ...",
        example: "ワットさんは しんせつです。ふじさんは たかいです。",
        exampleVi: "Thầy Watt tốt bụng. Núi Phú Sĩ cao."
      },
      {
        pattern: "Tính từ -i phủ định (bỏ i + くないです) / Tính từ -na phủ định (じゃ ありません)",
        meaning: "N không tính từ...",
        example: "この ほんは おもしろくないです。ここは にぎやかじゃ ありません。",
        exampleVi: "Quyển sách này không hay. Nơi này không náo nhiệt."
      },
      {
        pattern: "Tính từ -i + N / Tính từ -na + な + N",
        meaning: "Bổ nghĩa cho danh từ N",
        example: "これは おもしろい ほんです。タワポンさんは しんせつな ひとです。",
        exampleVi: "Cái này là quyển sách hay. Anh Thawaphon là người tốt bụng."
      },
      {
        pattern: "N は どうですか",
        meaning: "N thì thế nào?",
        example: "にほんの せいかつは どうですか。",
        exampleVi: "Cuộc sống ở Nhật Bản thế nào?"
      },
      {
        pattern: "N1 は どんな N2 ですか",
        meaning: "N1 là N2 như thế nào?",
        example: "ハノイは どんな まちですか。",
        exampleVi: "Hà Nội là thành phố như thế nào?"
      }
    ],
    dialogue: [
      { speaker: "A", jp: "日本の 生活は どうですか。", romaji: "Nihon no seikatsu wa dou desu ka.", vi: "Cuộc sống ở Nhật thế nào?" },
      { speaker: "B", jp: "楽しいです。でも、物価が 高いです。", romaji: "Tanoshii desu. Demo, bukka ga takai desu.", vi: "Thú vị lắm. Nhưng giá cả hơi đắt." },
      { speaker: "A", jp: "富士山は どんな 山ですか。", romaji: "Fujisan wa donna yama desu ka.", vi: "Núi Phú Sĩ là ngọn núi như thế nào?" },
      { speaker: "B", jp: "高いで、きれいな 山です。", romaji: "Takai de, kirei na yama desu.", vi: "Là ngọn núi cao và đẹp." }
    ],
    fillBlanks: [
      { id: 1, question: "この ほんは あまり [blank] です。", answer: "おもしろくない", options: ["お面白くない", "おもしろい", "おもしろくありません", "おもしろいじゃありません"] },
      { id: 2, question: "マイクさんは [blank] ひとです。", answer: "しんせつな", options: ["しんせつな", "しんせつ", "しんせつの", "しんせつい"] }
    ],
    quiz: [
      { q: "Dạng phủ định của tính từ 'たかい' là gì?", options: ["たかいくないです", "たかくないです", "たかいじゃありません", "たかくありませんでした"], a: 1 },
      { q: "Từ nào là tính từ đuôi -na có nghĩa là 'Yên tĩnh'?", options: ["にぎやか", "しずか", "きれい", "ゆうめい"], a: 1 }
    ]
  },

  lesson9: {
    title: "Bài 9: Sở thích, Năng lực & Lý do",
    vocab: [
      { id: 1, jp: "わかります", romaji: "wakarimasu", vi: "Hiểu / Biết", audioText: "わかります" },
      { id: 2, jp: "あります", romaji: "arimasu", vi: "Có (sở hữu, tồn tại vật vô giác)", audioText: "あります" },
      { id: 3, jp: "すき[な]", romaji: "suki[na]", vi: "Thích", audioText: "すき" },
      { id: 4, jp: "きらい[な]", romaji: "kirai[na]", vi: "Ghét", audioText: "きらい" },
      { id: 5, jp: "じょうず[な]", romaji: "jouzu[na]", vi: "Giỏi / Khéo léo", audioText: "じょうず" },
      { id: 6, jp: "へた[な]", romaji: "heta[na]", vi: "Kém / Dở", audioText: "へた" },
      { id: 7, jp: "りょうり", romaji: "ryouri", vi: "Món ăn / Việc nấu ăn", audioText: "りょうり" },
      { id: 8, jp: "のみもの", romaji: "nomimono", vi: "Đồ uống", audioText: "のみもの" },
      { id: 9, jp: "スポーツ", romaji: "supootsu", vi: "Thể thao", audioText: "スポーツ" },
      { id: 10, jp: "야구（やきゅう）", romaji: "yakyuu", vi: "Bóng chày", audioText: "やきゅう" },
      { id: 11, jp: "ダンス", romaji: "dansu", vi: "Khiêu vũ / Nhảy", audioText: "ダンス" },
      { id: 12, jp: "おんがく", romaji: "ongaku", vi: "Âm nhạc", audioText: "おんがく" },
      { id: 13, jp: "うた", romaji: "uta", vi: "Bài hát", audioText: "うた" },
      { id: 14, jp: "クラシック", romaji: "kurashikku", vi: "Nhạc cổ điển", audioText: "クラシック" },
      { id: 15, jp: "ジャズ", romaji: "jazu", vi: "Nhạc Jazz", audioText: "ジャズ" },
      { id: 16, jp: "コンサート", romaji: "konsaato", vi: "Buổi hòa nhạc", audioText: "コンサート" },
      { id: 17, jp: "カラオケ", romaji: "karaoke", vi: "Karaoke", audioText: "カラオケ" },
      { id: 18, jp: "かぶき", romaji: "kabuki", vi: "Kịch Kabuki (Nhật Bản)", audioText: "かぶき" },
      { id: 19, jp: "え", romaji: "e", vi: "Bức tranh", audioText: "え" },
      { id: 20, jp: "じ", romaji: "ji", vi: "Chữ cái", audioText: "じ" },
      { id: 21, jp: "かんじ", romaji: "kanji", vi: "Chữ Hán Kanji", audioText: "かんじ" },
      { id: 22, jp: "ひらがな", romaji: "hiragana", vi: "Chữ Hiragana", audioText: "ひらがな" },
      { id: 23, jp: "かたかな", romaji: "katakana", vi: "Chữ Katakana", audioText: "かたかな" },
      { id: 24, jp: "ローマじ", romaji: "roomaji", vi: "Chữ La-măng / Romaji", audioText: "ローマじ" },
      { id: 25, jp: "こまかいおかね", romaji: "komakai okane", vi: "Tiền lẻ", audioText: "こまかいおかね" },
      { id: 26, jp: "チケット", romaji: "chiketto", vi: "Tấm vé (xem phim, ca nhạc)", audioText: "チケット" },
      { id: 27, jp: "じかん", romaji: "jikan", vi: "Thời gian", audioText: "じかん" },
      { id: 28, jp: "ようじ", romaji: "youji", vi: "Việc bận / Công chuyện", audioText: "ようじ" },
      { id: 29, jp: "やくそく", romaji: "yakusoku", vi: "Cuộc hẹn / Lời hứa", audioText: "やくそく" },
      { id: 30, jp: "ご chủ（ごしゅじん）", romaji: "goshujin", vi: "Chồng (người khác)", audioText: "ごしゅじん" },
      { id: 31, jp: "おっと / おっと", romaji: "otto / shujin", vi: "Chồng (tôi)", audioText: "おっと" },
      { id: 32, jp: "おくさん", romaji: "okusan", vi: "Vợ (người khác)", audioText: "おくさん" },
      { id: 33, jp: "つま / かない", romaji: "tsuma / kanai", vi: "Vợ (tôi)", audioText: "つま" },
      { id: 34, jp: "こども", romaji: "kodomo", vi: "Con cái / Trẻ em", audioText: "こども" },
      { id: 35, jp: "よく", romaji: "yoku", vi: "Rất tốt / Rõ ràng", audioText: "よく" },
      { id: 36, jp: "だいたい", romaji: "daitai", vi: "Đại khái / Đại thể", audioText: "だいたい" },
      { id: 37, jp: "たくさん", romaji: "takusan", vi: "Nhiều", audioText: "たくさん" },
      { id: 38, jp: "すこし", romaji: "sukoshi", vi: "Một ít / Một chút", audioText: "すこし" },
      { id: 39, jp: "ぜんぜん", romaji: "zenzen", vi: "Hoàn toàn không (đi với phủ định)", audioText: "ぜんぜん" },
      { id: 40, jp: "はやく", romaji: "hayaku", vi: "Sớm / Nhanh", audioText: "はやく" },
      { id: 41, jp: "～から", romaji: "~kara", vi: "Vì... (chỉ lý do)", audioText: "から" },
      { id: 42, jp: "どうして", romaji: "doushite", vi: "Tại sao", audioText: "どうして" }
    ],
    grammar: [
      {
        pattern: "N が すきです / きらいです / じょうずです / へたです",
        meaning: "Thích / Ghét / Giỏi / Dở cái N",
        example: "わたしは イタリアりょうりが すきです。",
        exampleVi: "Tôi thích món ăn Ý."
      },
      {
        pattern: "N が わかります / あります",
        meaning: "Hiểu / Có cái N",
        example: "わたしは にほんごが わかります。じかんが あります。",
        exampleVi: "Tôi hiểu tiếng Nhật. Tôi có thời gian."
      },
      {
        pattern: "Mức độ phó từ + 動詞 / 形容詞",
        meaning: "よく / だいたい / すこし / あまり / ぜんぜん",
        example: "えいごが よく わかります。にほんごが ぜんぜん わかりません。",
        exampleVi: "Tôi hiểu rất rõ tiếng Anh. Tôi hoàn toàn không hiểu tiếng Nhật."
      },
      {
        pattern: "S1 から、S2",
        meaning: "Vì S1 nên S2 (Diễn tả lý do)",
        example: "じかんが ありませんから、しんぶんを よみません。",
        exampleVi: "Vì không có thời gian nên tôi không đọc báo."
      },
      {
        pattern: "どうして S か",
        meaning: "Tại sao...?",
        example: "どうして きのう やすみましたか。－びょうきでしたから。",
        exampleVi: "Tại sao hôm qua bạn nghỉ học? - Vì tôi bị ốm."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "スポーツが 好きですか。", romaji: "Supootsu ga suki desu ka.", vi: "Bạn có thích thể thao không?" },
      { speaker: "B", jp: "はい、好きです。特に サッカーが 好きです。", romaji: "Hai, suki desu. Tokuni sakkaa ga suki desu.", vi: "Có, tôi thích. Đặc biệt là thích bóng đá." },
      { speaker: "A", jp: "今日 いっしょに 飲みませんか。", romaji: "Kyou isshoni nomimasen ka.", vi: "Hôm nay cùng đi uống với tôi không?" },
      { speaker: "B", jp: "すみません。今日は 用事がありますから...", romaji: "Sumimasen. Kyou wa youji ga arimasu kara...", vi: "Xin lỗi, hôm nay vì tôi có việc bận nên..." }
    ],
    fillBlanks: [
      { id: 1, question: "わたしは にほんご [blank] わかります。", answer: "が", options: ["が", "を", "に", "は"] },
      { id: 2, question: "じかんが ありません [blank]、えいがを 見ません。", answer: "から", options: ["から", "まで", "で", "と"] }
    ],
    quiz: [
      { q: "Phó từ nào đi với thể phủ định mang nghĩa 'Hoàn toàn không'?", options: ["よく", "だいたい", "すこし", "ぜんぜん"], a: 3 },
      { q: "Từ nào có nghĩa là 'Việc bận / Công chuyện'?", options: ["やくそく", "ようじ", "じかん", "チケット"], a: 1 }
    ]
  },

  lesson10: {
    title: "Bài 10: Sự tồn tại của người và vật",
    vocab: [
      { id: 1, jp: "あります", romaji: "arimasu", vi: "Có / Tồn tại (vật vô giác, thực vật)", audioText: "あります" },
      { id: 2, jp: "います", romaji: "imasu", vi: "Có / Tồn tại (người, động vật)", audioText: "います" },
      { id: 3, jp: "いろいろ[な]", romaji: "iroiro[na]", vi: "Nhiều / Phong phú / Đa dạng", audioText: "いろいろ" },
      { id: 4, jp: "おとこのひと", romaji: "otoko no hito", vi: "Người đàn ông", audioText: "おとこのひと" },
      { id: 5, jp: "おんなのひと", romaji: "onna no hito", vi: "Người phụ nữ", audioText: "おんなのひと" },
      { id: 6, jp: "おとこのこ", romaji: "otoko no ko", vi: "Cậu bé", audioText: "おとこのこ" },
      { id: 7, jp: "おんなのこ", romaji: "onna no ko", vi: "Cô bé", audioText: "おんなのこ" },
      { id: 8, jp: "いぬ", romaji: "inu", vi: "Con chó", audioText: "いぬ" },
      { id: 9, jp: "ねこ", romaji: "neko", vi: "Con mèo", audioText: "ねこ" },
      { id: 10, jp: "き", romaji: "ki", vi: "Cây / Gỗ", audioText: "き" },
      { id: 11, jp: "もの", romaji: "mono", vi: "Đồ vật", audioText: "もの" },
      { id: 12, jp: "フィルム", romaji: "firumu", vi: "Cuộn phim", audioText: "フィルム" },
      { id: 13, jp: "電池（でんち）", romaji: "denchi", vi: "Cục pin", audioText: "でんち" },
      { id: 14, jp: "箱（はこ）", romaji: "hako", vi: "Cái hộp", audioText: "はこ" },
      { id: 15, jp: "スイッチ", romaji: "suicchi", vi: "Công tắc", audioText: "スイッチ" },
      { id: 16, jp: "冷蔵庫（れいぞうこ）", romaji: "reizouko", vi: "Tủ lạnh", audioText: "れいぞうこ" },
      { id: 17, jp: "テーブル", romaji: "teeburu", vi: "Bàn ăn", audioText: "テーブル" },
      { id: 18, jp: "ベッド", romaji: "beddo", vi: "Cái giường", audioText: "ベッド" },
      { id: 19, jp: "棚（たな）", romaji: "tana", vi: "Giá sách / Kệ", audioText: "たな" },
      { id: 20, jp: "ドア", romaji: "doa", vi: "Cửa ra vào", audioText: "ドア" },
      { id: 21, jp: "窓（まど）", romaji: "mado", vi: "Cửa sổ", audioText: "まど" },
      { id: 22, jp: "ポスト", romaji: "posuto", vi: "Hòm thư", audioText: "ポスト" },
      { id: 23, jp: "ビル", romaji: "biru", vi: "Tòa nhà cao tầng", audioText: "ビル" },
      { id: 24, jp: "公園（こうえん）", romaji: "kouen", vi: "Công viên", audioText: "こうえん" },
      { id: 25, jp: "喫茶店（きっさてん）", romaji: "kissaten", vi: "Quán cà phê", audioText: "きっさてん" },
      { id: 26, jp: "本屋（ほんや）", romaji: "honya", vi: "Tiệm sách", audioText: "ほんや" },
      { id: 27, jp: "乗り場（のりば）", romaji: "noriba", vi: "Bến xe / Điểm đón xe", audioText: "のりば" },
      { id: 28, jp: "県（けん）", romaji: "ken", vi: "Tỉnh", audioText: "けん" },
      { id: 29, jp: "上（うえ）", romaji: "ue", vi: "Trên", audioText: "うえ" },
      { id: 30, jp: "下（した）", romaji: "shita", vi: "Dưới", audioText: "した" },
      { id: 31, jp: "前（まえ）", romaji: "mae", vi: "Trước", audioText: "まえ" },
      { id: 32, jp: "うしろ", romaji: "ushiro", vi: "Sau", audioText: "うしろ" },
      { id: 33, jp: "右（みぎ）", romaji: "migi", vi: "Bên phải", audioText: "みぎ" },
      { id: 34, jp: "左（ひだり）", romaji: "hidari", vi: "Bên trái", audioText: "ひだり" },
      { id: 35, jp: "中（なか）", romaji: "naka", vi: "Bên trong", audioText: "なか" },
      { id: 36, jp: "外（そと）", romaji: "soto", vi: "Bên ngoài", audioText: "そと" },
      { id: 37, jp: "隣（となり）", romaji: "tonari", vi: "Bên cạnh (cùng loại)", audioText: "となり" },
      { id: 38, jp: "近く（ちかく）", romaji: "chikaku", vi: "Gần", audioText: "ちかく" },
      { id: 39, jp: "間（あいだ）", romaji: "aida", vi: "Ở giữa (A và B)", audioText: "あいだ" }
    ],
    grammar: [
      {
        pattern: "N (Địa điểm) に N2 が あります / います",
        meaning: "Ở địa điểm N1 có N2 (vật/người)",
        example: "へやに つくえが あります。あそこに おとこのひとが います。",
        exampleVi: "Trong phòng có cái bàn. Ở kia có người đàn ông."
      },
      {
        pattern: "N1 は N2 (Địa điểm) に あります / います",
        meaning: "N1 thì ở N2 (Xác định vị trí cụ thể của chủ thể)",
        example: "わたしは きょうしつに います。ほんは つくえの うえに あります。",
        exampleVi: "Tôi ở trong phòng học. Quyển sách ở trên bàn."
      },
      {
        pattern: "N1 (Vị trí) の N2 (Phương hướng)",
        meaning: "Vị trí tương quan (trên, dưới, trong, ngoài...)",
        example: "つくえの うえ / はこの なか / ほんやの となり",
        exampleVi: "Trên bàn / Trong hộp / Bên cạnh tiệm sách"
      },
      {
        pattern: "N1 や N2 (など)",
        meaning: "Liệt kê không hoàn chỉnh (Như N1, N2...)",
        example: "はこの なかに てがみや しゃしんが あります。",
        exampleVi: "Trong hộp có thư, ảnh..."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "すみません。あそこに コンビニが ありますか。", romaji: "Sumimasen. Asoko ni konbini ga arimasu ka.", vi: "Xin lỗi, ở đằng kia có cửa hàng tiện lợi không?" },
      { speaker: "B", jp: "はい、あります。あそこの ビルの １階です。", romaji: "Hai, arimasu. Asoko no biru no ikkai desu.", vi: "Có ạ. Ở tầng 1 của tòa nhà đằng kia." },
      { speaker: "A", jp: "犬は どこに いますか。", romaji: "Inu wa doko ni imasu ka.", vi: "Con chó ở đâu vậy?" },
      { speaker: "B", jp: "テーブルの 下に います。", romaji: "Teeburu no shita ni imasu.", vi: "Nó ở dưới bàn." }
    ],
    fillBlanks: [
      { id: 1, question: "へやに テレビ [blank] あります。", answer: "が", options: ["が", "を", "に", "は"] },
      { id: 2, question: "いぬは つくえの [blank] に います。", answer: "した", options: ["した", "どこ", "なに", "だれ"] },
      { id: 3, question: "はこの なかに てがみ [blank] しゃしんが あります。", answer: "や", options: ["や", "と", "も", "で"] }
    ],
    quiz: [
      { q: "Động từ nào dùng để chỉ sự tồn tại của người hoặc động vật?", options: ["あります", "います", "いきます", "します"], a: 1 },
      { q: "'Bên cạnh' trong tiếng Nhật đọc là gì?", options: ["うえ", "した", "となり", "あいだ"], a: 2 }
    ]
  }
};
