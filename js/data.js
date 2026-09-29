const minnaData = {
  lesson1: {
    title: "Bài 1: Giới thiệu bản thân",
    vocab: [
      { id: 1, jp: "わたし", romaji: "watashi", vi: "Tôi", audioText: "わたし" },
      { id: 2, jp: "あなた", romaji: "anata", vi: "Bạn / Anh / Chị", audioText: "あなた" },
      { id: 3, jp: "あのひと", romaji: "ano hito", vi: "Người kia", audioText: "あのひと" },
      { id: 4, jp: "みなさん", romaji: "minasan", vi: "Mọi người", audioText: "みなさん" },
      { id: 5, jp: "せんせい", romaji: "sensei", vi: "Thầy / Cô giáo", audioText: "せんせい" },
      { id: 6, jp: "がくせい", romaji: "gakusei", vi: "Học sinh / Sinh viên", audioText: "がくせい" },
      { id: 7, jp: "かいしゃいん", romaji: "kaishain", vi: "Nhân viên công ty", audioText: "かいしゃいん" },
      { id: 8, jp: "ぎんこういん", romaji: "ginkouin", vi: "Nhân viên ngân hàng", audioText: "ぎんこういん" },
      { id: 9, jp: "いしゃ", romaji: "isha", vi: "Bác sĩ", audioText: "いしゃ" },
      { id: 10, jp: "けんきゅうしゃ", romaji: "kenkyuusha", vi: "Nhà nghiên cứu", audioText: "けんきゅうしゃ" }
    ],
    grammar: [
      {
        pattern: "N1 は N2 です",
        meaning: "N1 là N2",
        example: "わたしは がくせいです。",
        exampleVi: "Tôi là sinh viên."
      },
      {
        pattern: "N1 は N2 じゃ ありません",
        meaning: "N1 không phải là N2",
        example: "わたしは いしゃじゃ ありません。",
        exampleVi: "Tôi không phải là bác sĩ."
      },
      {
        pattern: "S + か",
        meaning: "Câu hỏi nghi vấn (Có phải ... không?)",
        example: "あのひとは せんせいですか。",
        exampleVi: "Người kia có phải là giáo viên không?"
      }
    ],
    dialogue: [
      { speaker: "A", jp: "初めまして。わたしは アインです。", romaji: "Hajimemashite. Watashi wa Ain desu.", vi: "Rất hân hạnh được gặp bạn. Tôi là Anh." },
      { speaker: "B", jp: "初めまして。マイクです。よろしくお願いします。", romaji: "Hajimemashite. Maiku desu. Yoroshiku onegaishimasu.", vi: "Rất hân hạnh được gặp bạn. Tôi là Mike. Rất mong được giúp đỡ." }
    ],
    fillBlanks: [
      { id: 1, question: "わたし [blank] がくせいです。", answer: "は", options: ["は", "が", "の", "も"] },
      { id: 2, question: "あのひとは いしゃ [blank] ありません。", answer: "じゃ", options: ["じゃ", "は", "か", "と"] }
    ],
    quiz: [
      { q: "ぎんこういん nghĩa là gì?", options: ["Bác sĩ", "Nhân viên ngân hàng", "Giáo viên", "Học sinh"], a: 1 },
      { q: "Từ nào nghĩa là 'Thầy/Cô giáo'?", options: ["がくせい", "いしゃ", "せんせい", "かいしゃいん"], a: 2 }
    ]
  },

  lesson2: {
    title: "Bài 2: Đồ vật xung quanh",
    vocab: [
      { id: 1, jp: "これ", romaji: "kore", vi: "Cái này (gần người nói)", audioText: "これ" },
      { id: 2, jp: "それ", romaji: "sore", vi: "Cái đó (gần người nghe)", audioText: "それ" },
      { id: 3, jp: "あれ", romaji: "are", vi: "Cái kia (xa cả hai)", audioText: "あれ" },
      { id: 4, jp: "ほん", romaji: "hon", vi: "Sách", audioText: "ほん" },
      { id: 5, jp: "じしょ", romaji: "jisho", vi: "Từ điển", audioText: "じしょ" },
      { id: 6, jp: "ざっし", romaji: "zasshi", vi: "Tạp chí", audioText: "ざっし" },
      { id: 7, jp: "しんぶん", romaji: "shinbun", vi: "Tờ báo", audioText: "しんぶん" },
      { id: 8, jp: "ノート", romaji: "nooto", vi: "Vở / Sổ tay", audioText: "ノート" },
      { id: 9, jp: "かさ", romaji: "kasa", vi: "Cái ô / Cây dù", audioText: "かさ" },
      { id: 10, jp: "とけい", romaji: "tokei", vi: "Đồng hồ", audioText: "とけい" }
    ],
    grammar: [
      {
        pattern: "これ / それ / あれ は N です",
        meaning: "Cái này / Cái đó / Cái kia là N",
        example: "これは ほんです。",
        exampleVi: "Cái này là quyển sách."
      },
      {
        pattern: "N1 の N2",
        meaning: "N2 của N1 / N2 về N1",
        example: "これは わたしのかさです。",
        exampleVi: "Cái này là cái ô của tôi."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "それは 何ですか。", romaji: "Sore wa nan desu ka.", vi: "Cái đó là cái gì vậy?" },
      { speaker: "B", jp: "これは 日本語の辞書です。", romaji: "Kore wa Nihongo no jisho desu.", vi: "Cái này là từ điển tiếng Nhật." }
    ],
    fillBlanks: [
      { id: 1, question: "これ [blank] わたしの とけいです。", answer: "は", options: ["は", "の", "か", "も"] },
      { id: 2, question: "日本語 [blank] ほん", answer: "の", options: ["の", "は", "に", "で"] }
    ],
    quiz: [
      { q: "Từ nào có nghĩa là 'Từ điển'?", options: ["ほん", "じしょ", "ざっし", "とけい"], a: 1 },
      { q: "'これ' dùng để chỉ chỉ vật ở đâu?", options: ["Gần người nói", "Gần người nghe", "Xa cả hai", "Không xác định"], a: 0 }
    ]
  },

  lesson3: {
    title: "Bài 3: Địa điểm & Nơi chốn",
    vocab: [
      { id: 1, jp: "ここ", romaji: "koko", vi: "Chỗ này / Chỗ tôi", audioText: "ここ" },
      { id: 2, jp: "そこ", romaji: "soko", vi: "Chỗ đó / Chỗ bạn", audioText: "そこ" },
      { id: 3, jp: "あそこ", romaji: "asoko", vi: "Chỗ kia", audioText: "あそこ" },
      { id: 4, jp: "どこ", romaji: "doko", vi: "Ở đâu / Chỗ nào", audioText: "どこ" },
      { id: 5, jp: "きょうしつ", romaji: "kyoushitsu", vi: "Lớp học", audioText: "きょうしつ" },
      { id: 6, jp: "しょくどう", romaji: "shokudou", vi: "Nhà ăn / Căn tin", audioText: "しょくどう" },
      { id: 7, jp: "じむしょ", romaji: "jimusho", vi: "Văn phòng", audioText: "じむしょ" },
      { id: 8, jp: "うけつけ", romaji: "uketsuke", vi: "Bàn lễ tân", audioText: "うけつけ" },
      { id: 9, jp: "へや", romaji: "heya", vi: "Căn phòng", audioText: "へや" },
      { id: 10, jp: "お手洗い", romaji: "otearai", vi: "Nhà vệ sinh", audioText: "お手洗い" }
    ],
    grammar: [
      {
        pattern: "ここ / そこ / あそこ は N (địa điểm) です",
        meaning: "Nơi này / Nơi đó / Nơi kia là N",
        example: "ここは きょうしつです。",
        exampleVi: "Nơi này là phòng học."
      },
      {
        pattern: "N は どこですか",
        meaning: "N ở đâu?",
        example: "お手洗いは どこですか。",
        exampleVi: "Nhà vệ sinh ở đâu vậy?"
      }
    ],
    dialogue: [
      { speaker: "A", jp: "すみません、お手洗いは どこですか。", romaji: "Sumimasen, otearai wa doko desu ka.", vi: "Xin lỗi, nhà vệ sinh ở đâu vậy?" },
      { speaker: "B", jp: "あそこです。", romaji: "Asoko desu.", vi: "Ở đằng kia ạ." }
    ],
    fillBlanks: [
      { id: 1, question: "じむしょは [blank] ですか。", answer: "どこ", options: ["どこ", "なん", "だれ", "どれ"] }
    ],
    quiz: [
      { q: "きょうしつ nghĩa là gì?", options: ["Văn phòng", "Lớp học", "Nhà ăn", "Căn phòng"], a: 1 }
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
      { id: 6, jp: "いま", romaji: "ima", vi: "Bây giờ", audioText: "いま" },
      { id: 7, jp: "じ", romaji: "ji", vi: "Giờ (thời gian)", audioText: "じ" },
      { id: 8, jp: "ふん / ぷん", romaji: "fun / pun", vi: "Phút", audioText: "ふん" }
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
      }
    ],
    dialogue: [
      { speaker: "A", jp: "今、何時ですか。", romaji: "Ima, nan-ji desu ka.", vi: "Bây giờ là mấy giờ?" },
      { speaker: "B", jp: "午前９時です。", romaji: "Gozen ku-ji desu.", vi: "Bây giờ là 9 giờ sáng." }
    ],
    fillBlanks: [
      { id: 1, question: "わたしは ６じに [blank]。", answer: "おきます", options: ["おきます", "おきました", "ねます", "いきます"] }
    ],
    quiz: [
      { q: "Động từ 'Thức dậy' trong tiếng Nhật là gì?", options: ["ねます", "おきます", "やすみます", "はたらきます"], a: 1 }
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
      { id: 8, jp: "でんしゃ", romaji: "densha", vi: "Tàu điện", audioText: "でんしゃ" }
    ],
    grammar: [
      {
        pattern: "N (Địa điểm) へ いきます / きます / かえります",
        meaning: "Đi / Đến / Về địa điểm N",
        example: "わたしは がっこうへ いきます。",
        exampleVi: "Tôi đi đến trường học."
      },
      {
        pattern: "N (Phương tiện) で いきます",
        meaning: "Đi bằng phương tiện N",
        example: "でんしゃで いきます。",
        exampleVi: "Đi bằng tàu điện."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "どこへ 行きますか。", romaji: "Doko he ikimasu ka.", vi: "Bạn đi đâu đấy?" },
      { speaker: "B", jp: "スーパーへ 行きます。", romaji: "Suupaa he ikimasu.", vi: "Tôi đi siêu thị." }
    ],
    fillBlanks: [
      { id: 1, question: "でんしゃ [blank] いきます。", answer: "で", options: ["で", "へ", "に", "を"] }
    ],
    quiz: [
      { q: "Phương tiện 'Tàu điện' là gì?", options: ["ひこうき", "でんしゃ", "バス", "タクシー"], a: 1 }
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
      { id: 7, jp: "かきます", romaji: "kakimasu", vi: "Viết", audioText: "かきます" },
      { id: 8, jp: "ごはん", romaji: "gohan", vi: "Cơm / Bữa ăn", audioText: "ごはん" },
      { id: 9, jp: "みず", romaji: "mizu", vi: "Nước", audioText: "みず" },
      { id: 10, jp: "おちゃ", romaji: "ocha", vi: "Trà", audioText: "おちゃ" }
    ],
    grammar: [
      {
        pattern: "N を V (tác động)",
        meaning: "Thực hiện hành động V lên tân ngữ N",
        example: "ごはんを たべます。",
        exampleVi: "Tôi ăn cơm."
      },
      {
        pattern: "N (Địa điểm) で V",
        meaning: "Làm việc gì ở địa điểm N",
        example: "レストランで ごはんを たべます。",
        exampleVi: "Tôi ăn cơm ở nhà hàng."
      }
    ],
    dialogue: [
      { speaker: "A", jp: "何を 飲みますか。", romaji: "Nani wo nomimasu ka.", vi: "Bạn uống gì?" },
      { speaker: "B", jp: "お茶を 飲みます。", romaji: "Ocha wo nomimasu.", vi: "Tôi uống trà." }
    ],
    fillBlanks: [
      { id: 1, question: "みず [blank] のみます。", answer: "を", options: ["を", "は", "で", "へ"] }
    ],
    quiz: [
      { q: "Động từ 'Đọc' trong tiếng Nhật là gì?", options: ["みます", "ききます", "よみます", "かきます"], a: 2 }
    ]
  }
};
