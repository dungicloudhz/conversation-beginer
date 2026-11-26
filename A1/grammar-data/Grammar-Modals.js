/* Ngữ pháp nền tảng: Động từ khuyết thiếu (can, could, should, might, may). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🔑",
  short: "Động từ khuyết thiếu",
  hero: ["Động từ khuyết thiếu", "can · could · should · might · may"],
  desc: "Tiếng Việt chỉ cần thêm “được”, “nên”, “phải”, “chắc là” vào câu, còn tiếng Anh dùng một nhóm từ nhỏ đứng trước động từ: **can, could, should, might, may, must**. Chọn đúng từ giúp bạn xin phép lịch sự, nhờ vả không bị cộc lốc, khuyên bạn bè nhẹ nhàng và nói “có lẽ” mà không hứa chắc. Bài này sắp xếp theo **mục đích giao tiếp**, nên mỗi phần là một việc bạn cần làm khi nói chuyện.",
  chips: ["Khả năng", "Xin phép và nhờ vả", "Lời khuyên và bắt buộc", "Đoán khả năng", "Đề nghị và gợi ý"],
  goal: [
    "Nói mình **biết làm gì và không biết làm gì**, bây giờ (can) và hồi nhỏ (could).",
    "Xin phép và nhờ vả **đúng mức lịch sự**: Can I…? Could you…? May I…? và trả lời Sure / I’m afraid not.",
    "Khuyên bạn bè bằng **should**, nói luật lệ bằng **must / have to**, và không nhầm **mustn’t** với **don’t have to**.",
    "Đoán chuyện sắp xảy ra theo mức chắc chắn: **will, may, might, could**.",
    "Đề nghị giúp đỡ và rủ rê: **Shall I…? Why don’t we…? We could…**"
  ],
  sections: [
    { nav: "💪 Khả năng", title: "Nói về khả năng: can, could, be able to", sub: "Biết làm gì bây giờ, đã làm được gì trước đây",
      intro: [
        "Mọi động từ khuyết thiếu đều theo **một quy tắc chung**: phía sau là **động từ nguyên mẫu không có to**, và **không thêm -s** với he / she / it. Câu hỏi đảo động từ khuyết thiếu lên trước chủ ngữ (Can you…?), câu phủ định thêm **not** ngay sau nó (cannot, should not). Vì vậy “She can swims” và “I can to swim” đều **sai**; đúng là “She can swim”.",
        "Bảng dưới đây tóm tắt cả bài. Cột **Mức độ** cho biết từ đó mạnh hay nhẹ, lịch sự hay thân mật. Phần này bắt đầu với mục đích đơn giản nhất: nói về **khả năng**."
      ],
      table: { head: ["Từ", "Nghĩa chính", "Mức độ", "Ví dụ"], say: [3],
        rows: [
          ["**can / can’t**", "biết, có thể; xin phép, nhờ vả", "thân mật, dùng hằng ngày", "I can drive. Can I sit here?"],
          ["**could / couldn’t**", "đã có thể (quá khứ); nhờ vả, gợi ý, đoán", "lịch sự hơn can; đoán thì không chắc lắm", "Could you help me, please?"],
          ["**may / may not**", "xin phép; có lẽ", "xin phép rất lịch sự; đoán khoảng một nửa", "May I come in? It may rain."],
          ["**might / might not**", "có lẽ, có thể", "ít chắc chắn hơn may một chút", "I might be late tonight."],
          ["**should / shouldn’t**", "nên, không nên", "khuyên nhẹ nhàng", "You should get some rest."],
          ["**must / mustn’t**", "phải; cấm", "rất mạnh, quy định", "You must not smoke here."],
          ["**have to / don’t have to**", "phải (vì hoàn cảnh); không cần", "bắt buộc từ bên ngoài", "I have to work on Saturday."],
          ["**will / won’t**", "sẽ, chắc chắn sẽ", "gần như chắc chắn", "It will be hot tomorrow."]
        ] },
      formulas: [
        { f: "chủ ngữ + can / can’t + động từ nguyên mẫu",
          mean: "**biết làm, có thể làm** (can) hoặc **không biết, không thể** (can’t) ở hiện tại.",
          parts: [["can", "khả năng hoặc kỹ năng bây giờ: I can cook, she can speak Japanese. Đọc nhẹ /kən/ trong câu khẳng định."], ["can’t / cannot", "không làm được. **cannot** viết liền một từ. Đọc rõ và kéo dài /kɑːnt/ (Anh-Anh) để người nghe không nhầm với can."], ["Can you…? / Yes, I can. / No, I can’t.", "hỏi và trả lời ngắn: lặp lại can, **không** lặp lại động từ chính."]],
          use: "giới thiệu kỹ năng khi làm quen, phỏng vấn xin việc, kể chuyện học ngoại ngữ, chơi thể thao, nấu ăn.",
          note: "Người Việt hay nói “I can to swim” vì nghĩ giống “I want to swim”. Sau can **không có to**. Và với he / she cũng chỉ là **can**: “He can play the guitar”, không phải “He cans plays”.",
          ex: [["I can speak a little English.", "Tôi nói được một chút tiếng Anh."], ["My brother can fix computers.", "Anh trai tôi biết sửa máy tính."], ["Can you ride a motorbike?", "Bạn có biết đi xe máy không?"], ["I can’t swim, so I never go to the deep end.", "Tôi không biết bơi nên không bao giờ ra chỗ sâu."]] },
        { f: "chủ ngữ + could / couldn’t + động từ nguyên mẫu (quá khứ)",
          mean: "**đã có thể, hồi đó biết** (could) hoặc **đã không thể** (couldn’t), nói về quá khứ.",
          parts: [["could", "khả năng chung trong quá khứ: When I was six, I could read."], ["couldn’t / could not", "không làm được vào lúc đó: I couldn’t sleep last night."], ["Could you…? khi kể chuyện", "hỏi về quá khứ: Could you swim when you were a child?"]],
          use: "kể về tuổi thơ, so sánh trước và bây giờ, giải thích vì sao đã không làm được việc gì (couldn’t come, couldn’t find).",
          note: "Đừng nói “I can’t sleep last night”: có **last night** thì phải dùng **couldn’t**. Nhớ rằng could còn dùng để nhờ vả lịch sự ở hiện tại (Phần 2), nên phải nhìn ngữ cảnh.",
          ex: [["When I was ten, I could swim very well.", "Hồi mười tuổi, tôi bơi rất giỏi."], ["I couldn’t find my keys this morning.", "Sáng nay tôi không tìm thấy chìa khóa."], ["Could you read before you went to school?", "Bạn có biết đọc trước khi đi học không?"], ["She couldn’t come to the party because she was ill.", "Cô ấy không đến bữa tiệc được vì bị ốm."]] },
        { f: "chủ ngữ + am / is / are / was / will be + able to + động từ nguyên mẫu",
          mean: "**có thể, có khả năng**: nghĩa giống can, dùng khi can không đứng được ở vị trí đó.",
          parts: [["will be able to", "khả năng trong **tương lai**: I will be able to drive next year (không nói “will can”)."], ["was / were able to", "**đã xoay xở làm được** một việc cụ thể: The bus was late, but I was able to catch the train."], ["am / is / are able to", "trang trọng hơn can một chút, hay gặp trong công việc."]],
          use: "khi cần nói “sẽ có thể” hoặc sau một động từ khuyết thiếu khác (might be able to). Hằng ngày người ta vẫn dùng can nhiều hơn.",
          note: "Không bao giờ ghép hai động từ khuyết thiếu: “I will can” hay “I might can” là **sai**. Thay can bằng **be able to**: I will be able to, I might be able to.",
          ex: [["After this course, I will be able to talk to tourists.", "Sau khóa học này, tôi sẽ có thể nói chuyện với khách du lịch."], ["I wasn’t able to call you yesterday. Sorry!", "Hôm qua tôi không gọi cho bạn được. Xin lỗi nhé!"], ["Will you be able to come on Sunday?", "Chủ nhật bạn có đến được không?"], ["She is able to work from home on Fridays.", "Thứ Sáu cô ấy được làm việc ở nhà."]] }
      ],
      mistakes: [
        ["She can swims very fast.", "She can swim very fast.", "Sau động từ khuyết thiếu là **động từ nguyên mẫu**, không thêm -s kể cả với she."],
        ["I can to speak English.", "I can speak English.", "Sau can **không có to**."],
        ["I will can drive next year.", "I will be able to drive next year.", "Không ghép hai động từ khuyết thiếu; dùng **will be able to**."]
      ],
      talk: { title: "TÌNH HUỐNG: PHỎNG VẤN LÀM THÊM Ở QUÁN CÀ PHÊ", turns: [
        ["A", "Can you make coffee?", "Bạn có biết pha cà phê không?"],
        ["B", "Yes, I can. I can make Vietnamese coffee and cappuccino.", "Có ạ. Em pha được cà phê Việt và cappuccino."],
        ["A", "Great. Can you speak English with foreign customers?", "Tốt. Bạn nói tiếng Anh với khách nước ngoài được không?"],
        ["B", "A little. Last year I couldn’t understand them, but now I can.", "Một chút ạ. Năm ngoái em không hiểu họ nói gì, nhưng giờ thì hiểu được rồi."],
        ["A", "Good. Will you be able to work on weekends?", "Tốt. Bạn có làm được vào cuối tuần không?"],
        ["B", "Yes, I will. I can start next Monday.", "Được ạ. Em có thể bắt đầu từ thứ Hai tuần sau."]
      ] },
      tip: "Bây giờ: **can**. Hồi trước: **could**. Sau này: **will be able to**. Và sau cả ba luôn là động từ nguyên mẫu trơn, không to, không -s." },

    { nav: "🙏 Xin phép và nhờ vả", title: "Xin phép và nhờ vả theo mức lịch sự", sub: "Can I…? Could I…? May I…? và Can you…? Could you…? Would you…?",
      intro: [
        "Trong tiếng Việt, ta lịch sự bằng “ạ”, “dạ”, “làm ơn”. Trong tiếng Anh, độ lịch sự nằm ở **chọn động từ khuyết thiếu nào**. Hãy nhớ hai cái thang: **xin phép cho mình** (I) và **nhờ người khác làm** (you).",
        "Thêm **please** ở cuối câu luôn làm câu mềm hơn. Với người lạ, sếp, thầy cô, nhân viên phục vụ, hãy chọn bậc **Could** trở lên."
      ],
      formulas: [
        { f: "Can I / Could I / May I + động từ nguyên mẫu…?",
          mean: "**Tôi … được không?** xin phép để **chính mình** làm một việc.",
          parts: [["Can I…?", "thân mật, với bạn bè, gia đình: Can I borrow your pen?"], ["Could I…?", "**lịch sự hơn**, dùng được với hầu hết mọi người: Could I ask a question?"], ["May I…?", "**lịch sự nhất, trang trọng**: với khách hàng, sếp, trong cửa hàng, khách sạn: May I come in?"]],
          use: "mượn đồ, xin ngồi, xin vào phòng, xin trả bằng thẻ, xin hỏi một câu. Sau đó là động từ nguyên mẫu: Can I **use**…, May I **see**…",
          note: "Người Việt hay nói “Can I please you help me?”. Xin phép cho mình thì chủ ngữ là **I**; nhờ người khác thì chủ ngữ là **you** (xem công thức 2). “May I…?” chỉ dùng với **I / we**, không nói “May you…?”.",
          ex: [["Can I use your charger?", "Mình dùng cục sạc của bạn được không?"], ["Could I sit here?", "Tôi ngồi đây được không ạ?"], ["May I see the menu, please?", "Cho tôi xem thực đơn được không ạ?"], ["Can I pay by card?", "Tôi trả bằng thẻ được không?"]] },
        { f: "Can you / Could you / Would you + động từ nguyên mẫu…?",
          mean: "**Bạn … giúp tôi được không?** nhờ **người khác** làm một việc.",
          parts: [["Can you…?", "thân mật, nhanh gọn: Can you pass the salt?"], ["Could you…?", "**lịch sự hơn**, an toàn nhất với người lạ: Could you show me the way?"], ["Would you…? / Would you mind + động từ thêm -ing?", "**rất lịch sự**: Would you close the window, please? Would you mind waiting a minute?"]],
          use: "hỏi đường, nhờ chụp ảnh, nhờ nói chậm lại, nhờ đồng nghiệp gửi tài liệu, nhờ nhân viên mang thêm đồ.",
          note: "Câu mệnh lệnh trần như “Give me water.” nghe **cộc lốc** trong tiếng Anh dù tiếng Việt “Cho em cốc nước” rất bình thường. Hãy đổi thành “**Could you** give me some water, **please**?”",
          ex: [["Can you help me carry this box?", "Bạn giúp mình bê cái hộp này được không?"], ["Could you speak more slowly, please?", "Bạn nói chậm hơn được không ạ?"], ["Could you take a photo of us?", "Bạn chụp giúp chúng tôi một tấm ảnh được không?"], ["Would you mind closing the door?", "Phiền bạn đóng giúp cửa được không?"]] },
        { f: "Trả lời: Sure. / Of course. / Go ahead. / I’m afraid not.",
          mean: "**đồng ý** hoặc **từ chối lịch sự** khi người khác xin phép hoặc nhờ vả.",
          parts: [["Sure. / Of course. / No problem.", "đồng ý, dùng cho cả xin phép lẫn nhờ vả."], ["Go ahead. / Help yourself.", "đồng ý khi ai đó **xin phép** làm gì: “Can I sit here?” – “Go ahead.”"], ["I’m afraid not. / Sorry, I can’t.", "**từ chối lịch sự**, nên thêm lý do: Sorry, I can’t. I am busy right now."]],
          use: "ngay sau một câu Can / Could / May / Would. Người ta thường **không** trả lời “Yes, you could” hay “Yes, I would”.",
          note: "Với “Would you mind…?” thì câu đồng ý là “**No, not at all.**” (nghĩa là “không phiền gì”). Trả lời “Yes” lại thành “Có, tôi phiền đấy”!",
          ex: [["Could I borrow your umbrella? – Sure, here you are.", "Tôi mượn ô của bạn được không? – Được chứ, của bạn đây."], ["May I open the window? – Of course. Go ahead.", "Tôi mở cửa sổ được không? – Tất nhiên. Cứ tự nhiên."], ["Can you lend me some money? – Sorry, I can’t. I don’t have any cash.", "Bạn cho mình vay ít tiền được không? – Xin lỗi, mình không có tiền mặt."], ["Can I smoke here? – I’m afraid not.", "Tôi hút thuốc ở đây được không? – Tiếc là không được."]] }
      ],
      mistakes: [
        ["Give me the bill.", "Could I have the bill, please?", "Câu mệnh lệnh trần nghe cộc lốc. Với nhân viên, người lạ, nên dùng **Could I have… please?**"],
        ["May you help me?", "Could you help me?", "**May** chỉ dùng để xin phép cho mình (May I…?). Nhờ người khác dùng **Could you / Would you**."],
        ["Would you mind opening the window? – Yes, of course.", "Would you mind opening the window? – No, not at all.", "Would you mind = Bạn có phiền không. Đồng ý thì trả lời **No, not at all**."]
      ],
      talk: { title: "TÌNH HUỐNG: Ở QUẦY LỄ TÂN KHÁCH SẠN", turns: [
        ["A", "Good evening. May I help you?", "Chào buổi tối. Tôi có thể giúp gì cho anh?"],
        ["B", "Yes, please. Could I check in early? My room number is 305.", "Vâng. Tôi nhận phòng sớm được không? Phòng của tôi là 305."],
        ["A", "Of course. May I see your passport, please?", "Tất nhiên. Cho tôi xem hộ chiếu của anh được không ạ?"],
        ["B", "Here you are. Could you also call a taxi for me at seven?", "Của chị đây. Chị gọi giúp tôi một chiếc taxi lúc bảy giờ được không?"],
        ["A", "Sure. Would you like a taxi to the airport?", "Được ạ. Anh muốn taxi ra sân bay phải không?"],
        ["B", "No, to the Old Quarter. Thank you so much.", "Không, đến Phố Cổ. Cảm ơn chị nhiều."]
      ] },
      tip: "Leo thang lịch sự: **Can → Could → May** (xin cho mình) và **Can → Could → Would** (nhờ người khác). Không chắc thì cứ chọn **Could + please**, gần như lúc nào cũng đúng." },

    { nav: "📏 Khuyên và bắt buộc", title: "Lời khuyên và bắt buộc: should, must, have to", sub: "Nên, phải, cấm và không cần: bốn ý rất khác nhau",
      intro: [
        "Tiếng Việt có “nên”, “phải”, “không được”, “không cần”. Tiếng Anh có đủ cả bốn, nhưng có một cái bẫy lớn: **mustn’t** và **don’t have to** trông giống nhau mà nghĩa **khác hẳn**. Một từ nghĩa là **cấm**, từ kia nghĩa là **không cần**.",
        "Nhớ thêm: **have to** không phải động từ khuyết thiếu thật sự. Nó đổi theo chủ ngữ (he **has to**), có quá khứ (**had to**) và dùng **do / does / did** khi hỏi và phủ định."
      ],
      formulas: [
        { f: "chủ ngữ + should / shouldn’t + động từ nguyên mẫu",
          mean: "**nên / không nên**: đưa lời khuyên, ý kiến của người nói.",
          parts: [["should", "khuyên nhẹ nhàng: You should see a doctor."], ["shouldn’t", "không nên: You shouldn’t drink coffee at night."], ["ought to", "nghĩa giống should, nghe hơi trang trọng hơn và ít dùng hơn: You ought to call her. Chỉ cần nhận ra khi nghe."], ["Should I…? / What should I…?", "xin lời khuyên: What should I wear?"]],
          use: "khuyên bạn bè khi ốm, khi đi du lịch, khi học tiếng Anh; xin lời khuyên khi chưa biết làm gì. Hay đi kèm **I think you should…** để mềm hơn.",
          note: "Người Việt hay dùng **must** để khuyên (“You must try phở”). Câu này nghe như ra lệnh. Muốn khuyên thì dùng **should**: “You should try phở.” Ngoài ra **should** không có to: không nói “should to go”.",
          ex: [["You look tired. You should go to bed early.", "Trông bạn mệt quá. Bạn nên đi ngủ sớm."], ["You shouldn’t eat so much sugar.", "Bạn không nên ăn nhiều đường như vậy."], ["What should I buy for my mother’s birthday?", "Tôi nên mua gì cho sinh nhật mẹ?"], ["I think you should visit Hoi An in spring.", "Tôi nghĩ bạn nên đến Hội An vào mùa xuân."]] },
        { f: "chủ ngữ + must / have to + động từ nguyên mẫu",
          mean: "**phải**: việc bắt buộc, không có lựa chọn.",
          parts: [["must", "người nói **tự thấy** rất cần, hoặc nội quy, biển báo: I must call my mum. Passengers must wear seat belts."], ["have to / has to", "bắt buộc vì **hoàn cảnh, luật, người khác** đặt ra: I have to wear a uniform at work. Hằng ngày người ta nói have to nhiều hơn must."], ["had to", "quá khứ của cả must và have to: I had to wait for an hour."], ["Do you have to…?", "câu hỏi dùng **do / does**: Does she have to work on Sunday?"]],
          use: "kể về nội quy công ty, trường học, việc phải làm hôm nay, luật giao thông.",
          note: "Không nói “He have to” mà là **He has to**; không nói “I musted” mà là **I had to**.",
          ex: [["I have to get up at six every day.", "Ngày nào tôi cũng phải dậy lúc sáu giờ."], ["She has to take the bus to work.", "Cô ấy phải đi xe buýt đi làm."], ["You must wear a helmet on a motorbike.", "Đi xe máy phải đội mũ bảo hiểm."], ["Do you have to work late tonight?", "Tối nay bạn có phải làm muộn không?"]] },
        { f: "mustn’t (cấm) khác với don’t have to (không cần)",
          mean: "**mustn’t = không được phép**, còn **don’t have to = không cần, không bắt buộc** (làm cũng được, không làm cũng được).",
          parts: [["mustn’t / must not", "**cấm**: You mustn’t park here. (Đỗ ở đây là sai luật.)"], ["don’t have to / doesn’t have to", "**không cần**: You don’t have to bring food. We have a lot. (Mang cũng được, nhưng không cần.)"], ["didn’t have to", "đã không cần: I didn’t have to pay. It was free."]],
          use: "giải thích nội quy (mustn’t) và bảo người khác đừng lo (don’t have to). Đây là cặp hay bị hỏi trong bài kiểm tra.",
          note: "Người Việt dịch “không phải” thành “mustn’t”, nhưng **mustn’t là cấm**. “Bạn không phải trả tiền” = “You **don’t have to** pay”, không phải “You mustn’t pay”.",
          ex: [["You mustn’t take photos in the museum.", "Không được chụp ảnh trong bảo tàng."], ["You don’t have to wear a suit. It is a casual party.", "Bạn không cần mặc com-lê. Đó là bữa tiệc thân mật."], ["Students mustn’t use phones during the test.", "Học sinh không được dùng điện thoại trong giờ kiểm tra."], ["He doesn’t have to work tomorrow. It is a holiday.", "Mai anh ấy không phải đi làm. Là ngày nghỉ lễ."]] }
      ],
      mistakes: [
        ["You must try bun cha! (khi chỉ muốn khuyên)", "You should try bun cha!", "Khuyên thì dùng **should**; must nghe như mệnh lệnh."],
        ["You mustn’t pay. It is free.", "You don’t have to pay. It is free.", "Miễn phí nghĩa là **không cần** trả, dùng **don’t have to**. Mustn’t là bị cấm."],
        ["She have to work on Saturday.", "She has to work on Saturday.", "have to đổi theo chủ ngữ: she **has to**."]
      ],
      talk: { title: "TÌNH HUỐNG: NGÀY ĐẦU ĐI LÀM", turns: [
        ["A", "Do I have to wear a uniform?", "Em có phải mặc đồng phục không ạ?"],
        ["B", "No, you don’t have to. But you should wear a shirt.", "Không, không cần. Nhưng em nên mặc áo sơ mi."],
        ["A", "What time do I have to arrive?", "Em phải đến lúc mấy giờ ạ?"],
        ["B", "At eight. And you mustn’t smoke inside the building.", "Tám giờ. Và em không được hút thuốc trong tòa nhà."],
        ["A", "OK. Should I bring my own laptop?", "Vâng. Em có nên mang máy tính riêng không ạ?"],
        ["B", "You don’t have to. We will give you one.", "Không cần đâu. Công ty sẽ cấp cho em một cái."]
      ] },
      tip: "Nhớ bằng biển báo: **mustn’t** = vòng tròn đỏ gạch chéo (cấm). **don’t have to** = “tùy bạn”. **should** = lời khuyên của bạn thân." },

    { nav: "🌦️ Đoán khả năng", title: "Đoán khả năng xảy ra: will, may, might, could", sub: "Chắc chắn đến đâu thì chọn từ đó",
      intro: [
        "Khi không chắc một việc có xảy ra không, tiếng Việt nói “chắc là”, “có lẽ”, “không chừng”. Tiếng Anh dùng một **thang mức chắc chắn**: will (gần như chắc chắn) → may → might → could (chỉ là một khả năng).",
        "Trong nói chuyện hằng ngày, **may** và **might** gần như thay được cho nhau. Điều quan trọng nhất là đừng dùng **will** khi bạn chưa chắc."
      ],
      formulas: [
        { f: "chủ ngữ + will / may / might / could + động từ nguyên mẫu",
          mean: "**sẽ / có lẽ sẽ / có thể sẽ**: đoán chuyện ở hiện tại hoặc tương lai theo mức chắc chắn giảm dần.",
          parts: [["will (khoảng 90%)", "gần như chắc chắn: It will be sunny tomorrow. The forecast says so."], ["may (khoảng 50%)", "**có lẽ**: It may rain this afternoon."], ["might (khoảng 40%)", "có lẽ, ít chắc hơn may một chút, rất hay dùng khi nói: I might go out tonight."], ["could (khoảng 30%)", "**có thể**, chỉ là một khả năng: Take a jacket. It could get cold."]],
          use: "nói về thời tiết, kế hoạch chưa chắc, trả lời lời mời khi chưa quyết (I might come), đoán lý do (He may be busy).",
          note: "Người Việt hay nói “Maybe I will come” cho mọi trường hợp. Câu đó đúng, nhưng “**I might come**” ngắn và tự nhiên hơn. Và đừng nói “It might rains”: sau might là động từ nguyên mẫu.",
          ex: [["Take an umbrella. It may rain later.", "Mang ô đi. Lát nữa có lẽ trời mưa."], ["I might visit my grandparents this weekend.", "Cuối tuần này có lẽ tôi về thăm ông bà."], ["Call Lan. She could be at home now.", "Gọi Lan đi. Có thể giờ cô ấy đang ở nhà."], ["The traffic is bad. We will be late.", "Tắc đường quá. Chúng ta sẽ muộn mất."]] },
        { f: "chủ ngữ + may not / might not + động từ nguyên mẫu",
          mean: "**có lẽ không**: đoán một việc có thể sẽ **không** xảy ra.",
          parts: [["may not", "có lẽ không: He may not know the answer."], ["might not / mightn’t", "có lẽ không, rất hay dùng khi nói: I might not have time."], ["won’t", "chắc chắn không: She won’t come. She is in Japan."]],
          use: "từ chối nhẹ nhàng khi chưa chắc (I might not come), báo trước rủi ro (The shop may not be open).",
          note: "Đừng dùng **couldn’t** để đoán “có lẽ không”. “It couldn’t rain” nghĩa là “không thể nào mưa”, rất mạnh. Muốn nói “có lẽ không mưa” thì dùng **It might not rain**.",
          ex: [["I might not come to class tomorrow. I have a cold.", "Mai có lẽ tôi không đến lớp. Tôi bị cảm."], ["The bank may not be open on Sunday.", "Chủ nhật ngân hàng có lẽ không mở cửa."], ["Ask him again. He might not remember.", "Hỏi lại anh ấy đi. Có lẽ anh ấy không nhớ."], ["Do you think it might rain this afternoon?", "Bạn có nghĩ chiều nay có thể mưa không?"]] },
        { f: "may be (hai từ) khác với maybe (một từ)",
          mean: "**may be** = động từ khuyết thiếu may + be (“có lẽ là”), còn **maybe** = trạng từ “có lẽ”, thường đứng đầu câu.",
          parts: [["may be", "đứng **sau chủ ngữ**, đóng vai động từ: She **may be** tired. (= Perhaps she is tired.)"], ["maybe", "đứng **đầu câu** hoặc trả lời một mình: **Maybe** she is tired. – Are you coming? – Maybe."], ["perhaps", "nghĩa giống maybe, hơi trang trọng hơn."]],
          use: "cả hai cùng nghĩa “có lẽ”, nhưng vị trí khác nhau. Thử thay bằng “perhaps”: nếu thay được thì viết liền **maybe**.",
          note: "Lỗi viết rất hay gặp: “Maybe it is true” đúng, “It maybe true” **sai** (phải là It **may be** true).",
          ex: [["He may be at work now.", "Có lẽ giờ anh ấy đang ở chỗ làm."], ["Maybe he is at work now.", "Có lẽ giờ anh ấy đang ở chỗ làm."], ["Are you free tonight? – Maybe. I will text you.", "Tối nay bạn rảnh không? – Có lẽ. Mình sẽ nhắn cho bạn."], ["That may be the answer, but I am not sure.", "Đó có lẽ là đáp án, nhưng tôi không chắc."]] }
      ],
      mistakes: [
        ["It might rains tomorrow.", "It might rain tomorrow.", "Sau might là **động từ nguyên mẫu**, không thêm -s."],
        ["She maybe busy now.", "She may be busy now. / Maybe she is busy now.", "Sau chủ ngữ cần động từ: **may be**. Maybe là trạng từ, đứng đầu câu."],
        ["I will come, but I am not sure.", "I might come, but I am not sure.", "Chưa chắc thì dùng **might / may**, không dùng will."]
      ],
      talk: { title: "TÌNH HUỐNG: RỦ ĐI DÃ NGOẠI CUỐI TUẦN", turns: [
        ["A", "Are you coming to the picnic on Sunday?", "Chủ nhật bạn có đi dã ngoại không?"],
        ["B", "I might come, but I may have to work in the morning.", "Có lẽ mình đi, nhưng có thể buổi sáng mình phải làm."],
        ["A", "The weather may not be good. It could rain in the afternoon.", "Thời tiết có lẽ không đẹp. Chiều có thể mưa."],
        ["B", "Maybe we should go to the cinema instead.", "Có lẽ chúng ta nên đi xem phim thay vào đó."],
        ["A", "Good idea. I will tell the others.", "Ý hay đấy. Mình sẽ báo mọi người."]
      ] },
      tip: "Đặt tay lên thang: **will** (chắc) → **may** → **might** → **could** (hơi có thể). Cứ chưa chắc là dùng **might**, người bản xứ nói nó cả ngày." },

    { nav: "🤝 Đề nghị và gợi ý", title: "Đề nghị giúp đỡ và gợi ý: Shall I…? Why don’t we…?", sub: "Chủ động giúp người khác và rủ rê một cách tự nhiên",
      intro: [
        "Động từ khuyết thiếu còn giúp bạn **chủ động**: đề nghị giúp ai đó (Can I help you?), và đưa ra ý tưởng khi cả nhóm đang bàn nên làm gì (We could…, Why don’t we…?).",
        "Gợi ý bằng **could** mềm hơn **should**: “You could take a taxi” chỉ là một lựa chọn, còn “You should take a taxi” là lời khuyên."
      ],
      formulas: [
        { f: "Can I / Shall I + động từ nguyên mẫu…? (đề nghị giúp)",
          mean: "**Để tôi … nhé?** chủ động đề nghị làm một việc **cho người khác**.",
          parts: [["Can I help you?", "câu quen thuộc của nhân viên bán hàng, hoặc khi thấy ai đó gặp khó khăn."], ["Shall I…?", "**để tôi… nhé?** hỏi xem người kia có muốn mình làm không: Shall I open the window?"], ["I will… / Let me…", "đề nghị ngay, không hỏi: I will carry that for you. Let me help you."]],
          use: "thấy ai đó xách nặng, khách đến nhà, đồng nghiệp bận, bạn bị lạc đường. Trả lời: Yes, please. / No, thanks. I am OK.",
          note: "“Shall I…?” khác “Can I…?” ở Phần 2: ở đây việc làm là **để giúp người kia**, không phải xin cho mình. Shall chủ yếu đi với **I / we** trong câu hỏi.",
          ex: [["Can I help you with your bags?", "Để tôi giúp bạn xách túi nhé?"], ["Shall I turn on the air conditioner?", "Để tôi bật điều hòa nhé?"], ["Shall I call a taxi for you?", "Để tôi gọi taxi cho bạn nhé?"], ["You look busy. Let me do the dishes.", "Trông bạn bận quá. Để mình rửa bát cho."]] },
        { f: "You could / We could / Why don’t we / Shall we + động từ nguyên mẫu",
          mean: "**hay là… / mình có thể…**: đưa ra gợi ý, rủ rê, không ép buộc.",
          parts: [["You could…", "gợi ý một lựa chọn cho người khác: You could take the bus. It is cheaper."], ["We could…", "gợi ý cho cả nhóm, rất mềm: We could eat Korean food tonight."], ["Why don’t we…? / Shall we…?", "rủ rê trực tiếp hơn: Why don’t we go to the beach? Shall we start?"], ["Let’s…", "mạnh nhất, đã quyết: Let’s go!"]],
          use: "lên kế hoạch cuối tuần, chọn quán ăn, khi bạn bè hỏi ý kiến “What should I do?”. Trả lời: Good idea! / Sounds great. / I’m not sure about that.",
          note: "Sau **Why don’t we** là động từ nguyên mẫu, và đây là **lời rủ**, không phải câu hỏi “tại sao”. Đừng trả lời bằng “Because…”, hãy nói “Good idea!”.",
          ex: [["We could have dinner at the night market.", "Mình có thể ăn tối ở chợ đêm."], ["Why don’t we go for a walk around the lake?", "Hay là mình đi dạo quanh hồ đi?"], ["You could ask your teacher for help.", "Bạn có thể nhờ thầy giáo giúp."], ["Shall we meet at seven?", "Mình gặp nhau lúc bảy giờ nhé?"]] }
      ],
      mistakes: [
        ["Why don’t we going to the cinema?", "Why don’t we go to the cinema?", "Sau Why don’t we là **động từ nguyên mẫu**."],
        ["Do you want I help you?", "Shall I help you? / Can I help you?", "Đề nghị giúp dùng **Shall I / Can I + động từ nguyên mẫu**."],
        ["We could to eat pho.", "We could eat pho.", "Sau could **không có to**."]
      ],
      talk: { title: "TÌNH HUỐNG: BẠN NƯỚC NGOÀI ĐẾN SÀI GÒN", turns: [
        ["A", "Welcome to Saigon! Shall I carry your suitcase?", "Chào mừng đến Sài Gòn! Để mình xách vali cho bạn nhé?"],
        ["B", "Yes, please. Thank you! What should we do tonight?", "Vâng, cảm ơn bạn! Tối nay chúng ta nên làm gì?"],
        ["A", "We could go to Ben Thanh night market. The food is great.", "Mình có thể đi chợ đêm Bến Thành. Đồ ăn ngon lắm."],
        ["B", "Sounds good. How do we get there?", "Nghe hay đấy. Đi đến đó bằng gì?"],
        ["A", "Why don’t we take a Grab bike? It is fast and cheap.", "Hay là mình đi xe ôm Grab? Nhanh mà rẻ."],
        ["B", "Good idea. Let’s go!", "Ý hay. Đi thôi!"]
      ] },
      tip: "Giúp người khác: **Shall I…?** Rủ mọi người: **Why don’t we…? / We could…** Đã quyết: **Let’s…** Cả ba đều theo sau bởi động từ nguyên mẫu." }
  ],
  speak: [
    { q: "What can you do well? Is there anything you can’t do?", vi: "Bạn làm tốt việc gì? Có việc gì bạn không làm được không?", hint: "Dùng **I can + động từ nguyên mẫu** và **I can’t + động từ nguyên mẫu**: I can cook, but I can’t sing.",
      answers: [["I can cook Vietnamese food quite well, but I can’t swim.", "Tôi nấu món Việt khá ngon, nhưng tôi không biết bơi."], ["I can play the guitar. I can’t drive a car yet.", "Tôi chơi được ghi-ta. Tôi chưa biết lái ô tô."]] },
    { q: "What could you do when you were a child that you can’t do now?", vi: "Hồi nhỏ bạn làm được gì mà giờ không làm được nữa?", hint: "Quá khứ dùng **could**, hiện tại dùng **can’t**: When I was a child, I could…, but now I can’t.",
      answers: [["When I was a child, I could sleep for ten hours. Now I can’t!", "Hồi nhỏ tôi ngủ được mười tiếng. Giờ thì không!"], ["I could climb trees very well, but now I can’t.", "Hồi trước tôi trèo cây rất giỏi, nhưng giờ thì không được nữa."]] },
    { q: "You are in a café and you want the Wi-Fi password. What do you say?", vi: "Bạn ở quán cà phê và muốn hỏi mật khẩu Wi-Fi. Bạn nói gì?", hint: "Xin lịch sự: **Could I have… please?** hoặc **Could you tell me…?**",
      answers: [["Excuse me, could I have the Wi-Fi password, please?", "Xin lỗi, cho tôi xin mật khẩu Wi-Fi được không ạ?"], ["Could you tell me the Wi-Fi password, please?", "Bạn cho tôi biết mật khẩu Wi-Fi được không ạ?"]] },
    { q: "Do you have to wear a uniform at work or at school?", vi: "Ở chỗ làm hoặc ở trường bạn có phải mặc đồng phục không?", hint: "Dùng **I have to** hoặc **I don’t have to**, thêm một nội quy với **mustn’t**.",
      answers: [["Yes, I have to wear a white shirt. We mustn’t wear jeans.", "Có, tôi phải mặc áo sơ mi trắng. Chúng tôi không được mặc quần bò."], ["No, I don’t have to. I can wear what I like.", "Không, tôi không phải mặc. Tôi mặc gì cũng được."]] },
    { q: "My friend wants to visit Vietnam. Where should she go?", vi: "Bạn tôi muốn đến Việt Nam. Cô ấy nên đi đâu?", hint: "Khuyên bằng **She should + động từ nguyên mẫu**, thêm một điều **shouldn’t**.",
      answers: [["She should go to Hoi An and Da Nang. She shouldn’t miss the food in Hanoi.", "Cô ấy nên đến Hội An và Đà Nẵng. Cô ấy không nên bỏ lỡ đồ ăn Hà Nội."], ["I think she should visit Ha Long Bay. She should go in spring.", "Tôi nghĩ cô ấy nên đến vịnh Hạ Long. Cô ấy nên đi vào mùa xuân."]] },
    { q: "What are your plans for this weekend?", vi: "Cuối tuần này bạn có kế hoạch gì?", hint: "Chưa chắc thì dùng **I might / I may + động từ nguyên mẫu**; chắc chắn thì dùng **I will**.",
      answers: [["I am not sure. I might go shopping, or I may stay at home.", "Tôi chưa chắc. Có lẽ tôi đi mua sắm, hoặc có lẽ ở nhà."], ["I will visit my parents on Saturday. I might see a film on Sunday.", "Thứ Bảy tôi sẽ thăm bố mẹ. Chủ nhật có lẽ tôi đi xem phim."]] },
    { q: "Do you think it will rain tomorrow?", vi: "Bạn nghĩ mai có mưa không?", hint: "Chọn theo mức chắc chắn: **It will / It may / It might / It might not rain**.",
      answers: [["It might rain. It is the rainy season now.", "Có lẽ mưa. Giờ đang mùa mưa mà."], ["I don’t think so. It may not rain, but it will be very hot.", "Tôi không nghĩ vậy. Có lẽ không mưa, nhưng sẽ rất nóng."]] },
    { q: "We have a free evening. What could we do?", vi: "Chúng ta có một buổi tối rảnh. Mình có thể làm gì?", hint: "Gợi ý bằng **We could… / Why don’t we…? / Shall we…?**",
      answers: [["We could try a new restaurant. Why don’t we go to a Korean place?", "Mình có thể thử một nhà hàng mới. Hay là đi quán Hàn?"], ["Shall we watch a film? Or we could go for a walk by the river.", "Mình xem phim nhé? Hoặc mình có thể đi dạo bờ sông."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền động từ khuyết thiếu đúng", items: [
      { q: "When I was five, I ___ ride a bike. (đã biết)", a: ["could"], hint: "khả năng trong quá khứ" },
      { q: "I am sorry. I ___ come to your party last night. (đã không thể)", a: ["couldn't", "could not", "couldn’t", "wasn't able to", "was not able to"], hint: "quá khứ, phủ định" },
      { q: "___ I see your passport, please? (rất lịch sự, nhân viên khách sạn hỏi)", a: ["may"], hint: "lịch sự nhất khi xin phép" },
      { q: "You look ill. You ___ see a doctor. (lời khuyên)", a: ["should", "ought to"], hint: "nên" },
      { q: "You ___ smoke in the hospital. It is not allowed.", a: ["mustn't", "must not", "mustn’t"], hint: "cấm" },
      { q: "Tomorrow is Sunday, so I ___ get up early. (không cần)", a: ["don't have to", "do not have to", "don’t have to"], hint: "không bắt buộc" },
      { q: "My sister ___ wear a uniform at her school. (phải, she)", a: ["has to"], hint: "have to đổi theo chủ ngữ" },
      { q: "Take a jacket. It ___ be cold tonight. (có lẽ, bắt đầu bằng m-i)", a: ["might"], hint: "đoán, không chắc" },
      { q: "After this course, I will be ___ to speak more confidently.", a: ["able"], hint: "will be … to" }
    ] },
    { title: "Phần 2: Chọn câu đúng", items: [
      { q: "Chọn câu đúng:", options: ["She can swims well.", "She can swim well.", "She cans swim well."], a: 1, why: "Sau can là **động từ nguyên mẫu**, không thêm -s." },
      { q: "Nhờ một người lạ trên phố một cách lịch sự:", options: ["Show me the way to the station.", "May you show me the way to the station?", "Could you show me the way to the station, please?"], a: 2, why: "Nhờ người khác dùng **Could you… please?**; may chỉ dùng với I / we." },
      { q: "“Bạn không cần mang gì cả. Chúng tôi có đủ đồ ăn rồi.”", options: ["You mustn’t bring anything.", "You don’t have to bring anything.", "You shouldn’t to bring anything."], a: 1, why: "Không cần = **don’t have to**. Mustn’t = cấm." },
      { q: "Chọn câu đúng:", options: ["He maybe at home now.", "He may be at home now.", "He may is at home now."], a: 1, why: "Sau chủ ngữ cần động từ: **may be** (hai từ)." },
      { q: "“Would you mind waiting a moment?” Bạn đồng ý, bạn nói:", options: ["Yes, I would.", "No, not at all.", "Yes, I mind."], a: 1, why: "Would you mind = Bạn có phiền không. Không phiền = **No, not at all**." },
      { q: "Bạn chưa chắc tối nay có đến được không:", options: ["I will come tonight.", "I might come tonight.", "I must come tonight."], a: 1, why: "Chưa chắc thì dùng **might**." }
    ] },
    { title: "Phần 3: Chọn lời đề nghị, gợi ý phù hợp", items: [
      { q: "Bạn thấy một bà cụ xách túi nặng. Bạn nói:", options: ["Shall I carry your bag?", "Should you carry your bag?", "Must I carry your bag?"], a: 0, why: "Đề nghị giúp dùng **Shall I + động từ nguyên mẫu**." },
      { q: "Rủ bạn bè đi biển:", options: ["Why don’t we going to the beach?", "Why don’t we go to the beach?", "Why we don’t go to the beach?"], a: 1, why: "**Why don’t we + động từ nguyên mẫu**." },
      { q: "“Mình có thể ăn phở cho bữa tối.”", options: ["We could eat pho for dinner.", "We could to eat pho for dinner.", "We could eating pho for dinner."], a: 0, why: "Sau could là **động từ nguyên mẫu không to**." }
    ] }
  ],
  vocab: [["can / can’t", "có thể, biết / không thể"], ["could / couldn’t", "đã có thể; lịch sự hơn can"], ["be able to", "có khả năng (dùng thay can)"], ["May I…?", "tôi … được không ạ (rất lịch sự)"], ["Would you mind + động từ thêm -ing?", "phiền bạn … được không?"], ["Sure / Of course / Go ahead", "được chứ / tất nhiên / cứ tự nhiên"], ["I’m afraid not", "tiếc là không được"], ["should / shouldn’t", "nên / không nên"], ["must / have to", "phải"], ["mustn’t", "cấm, không được"], ["don’t have to", "không cần"], ["may / might", "có lẽ"], ["maybe", "có lẽ (trạng từ, đứng đầu câu)"], ["Shall I…? / Why don’t we…?", "để tôi… nhé? / hay là mình…?"]],
  tips: [
    "Mỗi sáng nói ba câu về hôm nay: một việc **I have to** làm, một việc **I don’t have to** làm, và một việc **I might** làm.",
    "Khi gọi món hay mua hàng, tập thay câu mệnh lệnh bằng **Could I have…, please?** cho đến khi thành phản xạ.",
    "Khi bạn bè kể chuyện, phản hồi bằng một lời khuyên: “**You should…**” hoặc một gợi ý mềm hơn: “**You could…**”.",
    "Xem dự báo thời tiết và nói to theo thang chắc chắn: “It **will** be hot. It **may** rain. It **might** be windy.”",
    "Kiểm tra mỗi câu bạn nói: sau động từ khuyết thiếu có phải là **động từ nguyên mẫu trơn** không? Không to, không -s, không -ing."
  ]
};