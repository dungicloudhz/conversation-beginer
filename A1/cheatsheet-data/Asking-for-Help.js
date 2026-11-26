/* Cheat sheet: Asking for Help (Nhờ giúp đỡ). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Mở lời nhờ giúp ở nhiều mức lịch sự, từ bạn bè đến người lạ và cấp trên.",
    "Nói rõ mình đang gặp chuyện gì để người khác biết cách giúp.",
    "Nói các câu ngắn, rõ ràng trong tình huống khẩn cấp và nhớ số 113, 114, 115.",
    "Nhờ đồng nghiệp chỉ cách làm, nhờ thầy cô giải thích lại.",
    "Đồng ý, từ chối khéo, cảm ơn chân thành và đáp lại lời cảm ơn."
  ],
  phrases: [
    { h: "Mở lời nhờ giúp", rows: [
      ["Excuse me, sorry to bother you.", "Xin lỗi, phiền bạn một chút."],
      ["Could you help me, please?", "Bạn giúp tôi được không ạ?", "Dùng với người lạ, nhân viên. Với bạn bè có thể nói ngắn: Can you help me?"],
      ["Could you do me a favor?", "Bạn giúp tôi một việc được không?"],
      ["Do you have a minute?", "Bạn có rảnh một phút không?"],
      ["Do you speak English?", "Bạn có nói tiếng Anh không?"]
    ]},
    { h: "Nói rõ vấn đề", rows: [
      ["I am having trouble with this ticket machine.", "Tôi đang gặp khó với máy bán vé này.", "Người bản xứ nói I’m having trouble… (I’m = I am)."],
      ["I do not know how to use this.", "Tôi không biết dùng cái này.", "Dạng rút gọn: I don’t know… (don’t = do not)."],
      ["My phone is not working.", "Điện thoại của tôi không hoạt động.", "Dạng rút gọn: My phone isn’t working. (isn’t = is not)."],
      ["I do not understand this word. What does it mean?", "Tôi không hiểu từ này. Nó nghĩa là gì?"],
      ["The door is locked and I cannot get in.", "Cửa bị khóa và tôi không vào được.", "Dạng rút gọn: I can’t get in. (can’t = cannot)."]
    ]},
    { h: "Khẩn cấp", rows: [
      ["Help! Call an ambulance!", "Cứu với! Gọi xe cấp cứu!"],
      ["Call the police!", "Gọi cảnh sát!"],
      ["I need a doctor. It is an emergency.", "Tôi cần bác sĩ. Đây là trường hợp khẩn cấp.", "Thường nói It’s an emergency. (It’s = It is)."],
      ["I have lost my passport.", "Tôi bị mất hộ chiếu.", "Khi nói thường rút gọn: I’ve lost… (I’ve = I have)."],
      ["Someone has stolen my bag.", "Có người lấy cắp túi của tôi."]
    ]},
    { h: "Ở chỗ làm, chỗ học", rows: [
      ["Could you give me a hand with this?", "Bạn giúp tôi một tay việc này được không?"],
      ["Can you show me how to use the printer?", "Bạn chỉ tôi cách dùng máy in được không?"],
      ["Could you explain this part again?", "Thầy hoặc cô giải thích lại phần này được không ạ?"],
      ["I am stuck on this question.", "Tôi bí câu này rồi.", "Dạng rút gọn: I’m stuck…"],
      ["Who should I ask about this?", "Việc này tôi nên hỏi ai?"]
    ]},
    { h: "Trả lời khi được nhờ", rows: [
      ["Sure, no problem.", "Được chứ, không vấn đề gì."],
      ["I would be happy to help.", "Tôi rất sẵn lòng giúp.", "Thường nói I’d be happy to help. (I’d = I would)."],
      ["I am afraid I cannot right now. Maybe ask the staff?", "E là giờ tôi không giúp được. Bạn thử hỏi nhân viên xem?", "Dạng rút gọn: I’m afraid I can’t right now. Cách từ chối khéo, có gợi ý người khác."],
      ["Sorry, I am not sure. I am not from here.", "Xin lỗi, tôi không chắc. Tôi không phải người ở đây."]
    ]},
    { h: "Cảm ơn và đáp lại", rows: [
      ["Thank you so much!", "Cảm ơn bạn rất nhiều!"],
      ["Thanks for helping me.", "Cảm ơn đã giúp tôi."],
      ["I really appreciate it.", "Tôi thật sự biết ơn."],
      ["You are welcome.", "Không có gì.", "Gần như luôn nói You’re welcome. (You’re = You are)."],
      ["No worries! Anytime!", "Không sao đâu! Lúc nào cần cứ nói!"]
    ]}
  ],
  grammar: [
    { h: "Bốn mức lịch sự khi nhờ: Can, Could, Would you mind, I was wondering",
      f: ["Can you + động từ nguyên mẫu?", "Could you + động từ nguyên mẫu, please?", "Would you mind + động từ thêm -ing?", "I was wondering if you could + động từ nguyên mẫu"],
      items: [
        { f: "Can you + động từ nguyên mẫu?",
          mean: "**bạn… giúp mình được không?**: cách nhờ ngắn gọn, thân mật nhất.",
          parts: [
            ["Can you", "**bạn có thể**: mức lịch sự thấp nhất, dùng với bạn bè, người thân, đồng nghiệp ngang hàng."],
            ["động từ nguyên mẫu", "việc cần nhờ: help, carry, lend, call, wait."],
            ["please", "thêm vào giúp câu mềm hơn, nhưng vẫn là mức thân mật."]
          ],
          use: "dùng với người quen, khi nhờ việc nhỏ. Sau Can you là động từ nguyên mẫu. Trả lời: Sure! / Of course. / Sorry, I cannot.",
          note: "Với người lạ hoặc nhân viên, Can you nghe hơi suồng sã. Hãy đổi sang **Could you…, please?**",
          ex: [
            ["Can you help me with my homework?", "Bạn giúp mình làm bài tập được không?"],
            ["Can you lend me your pen?", "Bạn cho mình mượn cây bút được không?"],
            ["Mum, can you call me a taxi, please?", "Mẹ ơi, mẹ gọi taxi giúp con được không?"],
            ["Can you wait for me for five minutes?", "Bạn đợi mình năm phút được không?"]
          ] },
        { f: "Could you + động từ nguyên mẫu, please?",
          mean: "**bạn làm ơn… giúp tôi được không?**: lời nhờ lịch sự, dùng được trong hầu hết tình huống.",
          parts: [
            ["Could you", "**bạn có thể… được không**: lịch sự hơn Can you, hợp với người lạ, nhân viên, thầy cô."],
            ["động từ nguyên mẫu", "việc cần nhờ, không thêm -s, -ing hay to."],
            ["please", "đặt ở cuối câu (hoặc sau you) để thêm lịch sự."]
          ],
          use: "dùng khi hỏi đường, nhờ nhân viên khách sạn, nhờ người đi đường. Đây là mức an toàn nhất khi không chắc nên dùng mức nào.",
          note: "Could ở đây không phải thì quá khứ; nó chỉ làm câu nhờ nhẹ nhàng hơn. Trả lời đồng ý: **Sure** hoặc **Of course**.",
          ex: [
            ["Could you help me with my suitcase, please?", "Bạn giúp tôi mang cái va li được không?"],
            ["Could you speak more slowly, please?", "Bạn nói chậm hơn một chút được không?"],
            ["Could you write the address for me, please?", "Bạn viết địa chỉ giúp tôi được không?"],
            ["Could you call a doctor, please?", "Bạn gọi bác sĩ giúp tôi được không?"]
          ] },
        { f: "Would you mind + động từ thêm -ing?",
          mean: "**phiền bạn… được không?**: lời nhờ rất lịch sự, vì bạn hỏi xem việc đó có làm phiền người kia không.",
          parts: [
            ["Would you mind", "**bạn có phiền không**: mức lịch sự cao, dùng với người lớn tuổi, cấp trên, người lạ khi nhờ việc hơi phiền."],
            ["động từ thêm -ing", "sau mind luôn là động từ thêm -ing: helping, opening, moving."]
          ],
          use: "dùng khi việc nhờ làm mất thời gian hoặc công sức của người kia. Trả lời đồng ý bằng **No, not at all** (không phiền gì).",
          note: "Không nói “Would you mind to help me?” hay “Would you mind help me?”. Đúng là **Would you mind helping me?**",
          ex: [
            ["Would you mind watching my bag for a minute?", "Phiền bạn trông túi giúp tôi một lát được không?"],
            ["Would you mind moving your car, please?", "Phiền anh dời xe đi một chút được không?"],
            ["Would you mind checking my English email?", "Phiền bạn kiểm tra giúp email tiếng Anh của tôi được không?"],
            ["Would you mind waiting here?", "Phiền bạn đợi ở đây được không?"]
          ] },
        { f: "I was wondering if you could + động từ nguyên mẫu",
          mean: "**không biết bạn có thể… được không**: cách nhờ trang trọng, gián tiếp nhất.",
          parts: [
            ["I was wondering", "**tôi đang băn khoăn**: dùng thì quá khứ tiếp diễn để làm câu rất nhẹ nhàng, không có nghĩa là chuyện quá khứ."],
            ["if you could", "**liệu bạn có thể**."],
            ["động từ nguyên mẫu", "việc cần nhờ: help, give, show, explain."]
          ],
          use: "dùng khi nhờ một việc lớn hoặc nhờ người mình không thân, cấp trên, giáo viên, trong email. Đây là câu khẳng định nên cuối câu dùng dấu chấm (hoặc dấu hỏi trong văn nói thân mật).",
          note: "Đừng dùng với bạn thân cho việc nhỏ (như mượn bút) vì nghe xa cách, khách sáo. Sau could là động từ nguyên mẫu, không thêm to.",
          ex: [
            ["I was wondering if you could help me with my CV.", "Không biết anh có thể giúp tôi viết sơ yếu lý lịch được không."],
            ["I was wondering if you could give me a lift to the station.", "Không biết bạn có thể chở tôi ra ga được không."],
            ["I was wondering if you could explain this form to me.", "Không biết chị có thể giải thích mẫu đơn này cho tôi được không."],
            ["We were wondering if you could join us for dinner.", "Chúng tôi không biết bạn có thể đến ăn tối cùng không."]
          ] }
      ],
      p: [
        "Câu nhờ càng dài và càng “gián tiếp” thì càng lịch sự. **Can you…?** dùng với bạn bè và người thân. **Could you…, please?** dùng với người lạ, nhân viên phục vụ.",
        "**Would you mind…?** rất lịch sự, hợp với người lớn tuổi hoặc cấp trên. **I was wondering if you could…** trang trọng nhất, dùng khi nhờ một việc lớn.",
        "Chọn mức theo người nghe: dùng câu quá trang trọng với bạn thân nghe xa cách, còn dùng câu quá ngắn với người lạ nghe thiếu lịch sự."
      ],
      ex: [["Could you help me, please?", "Bạn giúp tôi được không ạ?"], ["Would you mind helping me?", "Phiền bạn giúp tôi được không?"]]
    },
    { h: "Would you mind + động từ thêm -ing và cách trả lời “ngược”",
      f: ["Would you mind + động từ thêm -ing?", "Đồng ý: No, not at all. / Of course not.", "Từ chối: Sorry, I am afraid I cannot right now."],
      items: [
        { f: "Would you mind + động từ thêm -ing?",
          mean: "**bạn có phiền… không?**: nghĩa đen là hỏi xem người kia có thấy phiền không, nên cách trả lời “ngược” với tiếng Việt.",
          parts: [
            ["mind", "**phiền, ngại**: Would you mind = Bạn có thấy phiền không?"],
            ["động từ thêm -ing", "việc người kia làm: closing, turning down, taking."],
            ["Do you mind…?", "cùng nghĩa, kém trang trọng hơn một chút."]
          ],
          use: "dùng khi nhờ người khác làm một việc. Khi nghe câu này, hãy nhớ nghĩa đen để trả lời đúng: không phiền thì nói **No**.",
          note: "Câu hỏi về **phiền**, nên “No” là đồng ý giúp, “Yes” là thấy phiền. Đừng trả lời “Yes, of course” khi bạn muốn giúp.",
          ex: [
            ["Would you mind closing the door?", "Bạn đóng cửa giúp tôi được không?"],
            ["Would you mind turning down the TV a little?", "Bạn vặn nhỏ ti vi một chút được không?"],
            ["Do you mind sharing the table?", "Bạn có phiền ngồi chung bàn không?"],
            ["Would you mind taking our picture in front of the lake?", "Bạn chụp giúp chúng tôi một tấm trước hồ được không?"]
          ] },
        { f: "Đồng ý: No, not at all. / Of course not.",
          mean: "**không phiền gì cả**: câu trả lời **đồng ý giúp** cho câu Would you mind…?",
          parts: [
            ["No, not at all.", "**không phiền chút nào**: phổ biến nhất."],
            ["Of course not.", "**tất nhiên là không phiền**: thân thiện, sẵn lòng."],
            ["No problem.", "**không có gì**: thân mật, rất hay nghe."],
            ["Sure. / Go ahead.", "trong văn nói, người bản xứ cũng hay dùng: Sure (được thôi), Go ahead (cứ tự nhiên) khi người kia xin phép làm gì."]
          ],
          use: "dùng ngay sau câu Would you mind…? hoặc Do you mind…?, rồi làm việc được nhờ. Có thể thêm một câu: No, not at all. Here you are.",
          note: "Mẹo nhớ: **No = không phiền = đồng ý**. Nếu bạn nói “Yes”, người nghe hiểu là “Có, tôi thấy phiền”.",
          ex: [
            ["Would you mind helping me? No, not at all.", "Phiền bạn giúp tôi được không? Không phiền gì đâu."],
            ["Would you mind waiting a moment? Of course not.", "Phiền bạn đợi một chút được không? Tất nhiên rồi, không phiền."],
            ["Do you mind if I sit here? No, go ahead.", "Tôi ngồi đây có phiền bạn không? Không, cứ ngồi đi."],
            ["Would you mind holding this? No problem.", "Bạn cầm giúp cái này được không? Không có gì."]
          ] },
        { f: "Từ chối: Sorry, I am afraid I cannot right now.",
          mean: "**xin lỗi, e là bây giờ tôi không giúp được**: từ chối lịch sự, không làm người kia mất lòng.",
          parts: [
            ["Sorry", "**xin lỗi**: mở đầu lời từ chối cho nhẹ nhàng."],
            ["I am afraid", "**e là**: khi nói thường rút gọn thành **I’m afraid**. Làm câu từ chối mềm hơn."],
            ["I cannot", "**tôi không thể**. Khi nói thường rút gọn thành **I can’t**."],
            ["right now", "**ngay bây giờ**: cho thấy bạn bận lúc này chứ không phải không muốn giúp."]
          ],
          use: "dùng khi bạn không giúp được. Nên thêm **lý do** ngắn hoặc **đề nghị khác**: I am in a hurry. / Maybe later? / Ask the man at the desk.",
          note: "Đừng chỉ nói “Yes” hoặc “No, I cannot”, nghe cộc lốc. Hãy theo khung: **Sorry + I am afraid + lý do**.",
          ex: [
            ["Sorry, I am afraid I cannot right now. I am late for work.", "Xin lỗi, e là bây giờ tôi không giúp được. Tôi đang trễ giờ làm."],
            ["I’m afraid I can’t. Maybe you can ask the receptionist?", "E là tôi không giúp được. Có lẽ bạn có thể hỏi lễ tân?"],
            ["Sorry, I cannot right now, but I can help you after lunch.", "Xin lỗi, bây giờ tôi không giúp được, nhưng sau bữa trưa thì được."],
            ["I am afraid I do not know this area. Sorry!", "E là tôi không rành khu này. Xin lỗi nhé!"]
          ] }
      ],
      p: [
        "Sau **mind** luôn dùng **động từ thêm -ing**, không dùng “to + động từ”.",
        "Nghĩa đen của câu là “Bạn có phiền khi… không?”. Vì vậy muốn **đồng ý giúp** thì phải trả lời **No** (không phiền): No, not at all. Nếu trả lời “Yes” thì người nghe hiểu là bạn thấy phiền."
      ],
      ex: [["Would you mind opening the window? No, not at all.", "Bạn mở giúp cửa sổ được không? Không phiền gì đâu."], ["Would you mind taking a photo of us?", "Bạn chụp giúp chúng tôi một tấm được không?"]]
    },
    { h: "Mô tả trục trặc: have trouble và do not know how to",
      f: ["I am having trouble + động từ thêm -ing", "I am having trouble with + danh từ", "I do not know how to + động từ nguyên mẫu", "Chủ ngữ + is not working / does not work"],
      items: [
        { f: "I am having trouble + động từ thêm -ing",
          mean: "**tôi đang gặp khó khăn khi làm việc gì đó**: nói về một khó khăn đang xảy ra ngay lúc này.",
          parts: [
            ["I am having", "thì hiện tại tiếp diễn: khó khăn **đang** diễn ra. Khi nói thường rút gọn: I’m having."],
            ["trouble", "**rắc rối, khó khăn**: danh từ không đếm được, không thêm -s."],
            ["động từ thêm -ing", "việc đang làm mà gặp khó: finding, opening, using, understanding."],
            ["I have trouble", "thì hiện tại đơn: khó khăn **thường xuyên**, lâu dài: I have trouble sleeping."]
          ],
          use: "dùng để mở đầu lời nhờ giúp, nói rõ mình đang vướng ở đâu, rồi nhờ: …Could you help me?",
          note: "Không nói “I have trouble to find” hay “I am having troubles”. Đúng là **I am having trouble finding**.",
          ex: [
            ["I am having trouble finding my hotel.", "Tôi đang khó tìm khách sạn của mình."],
            ["I am having trouble opening this door.", "Tôi đang không mở được cánh cửa này."],
            ["My mother is having trouble using the ticket machine.", "Mẹ tôi đang loay hoay dùng máy bán vé."],
            ["Are you having trouble understanding the map?", "Bạn có đang khó đọc hiểu bản đồ không?"]
          ] },
        { f: "I am having trouble with + danh từ",
          mean: "**tôi đang gặp vấn đề với…**: nói một đồ vật hay một việc đang gây khó khăn.",
          parts: [
            ["with", "giới từ **bắt buộc** khi sau trouble là danh từ."],
            ["danh từ", "thứ gây khó khăn: my phone, the printer, my luggage, the app."],
            ["a problem with", "cách nói khác, nghĩa giống: I have a problem with my room."]
          ],
          use: "dùng khi báo lỗi với lễ tân, nhân viên, bộ phận hỗ trợ. Sau with là danh từ, có thể kèm my, the, this.",
          note: "So sánh: **trouble + động từ thêm -ing** (trouble connecting) và **trouble with + danh từ** (trouble with the Wi-Fi). Đừng nói “trouble with connect”.",
          ex: [
            ["I am having trouble with my room key.", "Thẻ phòng của tôi đang có vấn đề."],
            ["We are having trouble with the air conditioner.", "Chúng tôi đang gặp vấn đề với máy điều hòa."],
            ["I am having trouble with this app. It keeps closing.", "Ứng dụng này đang gặp lỗi. Nó cứ tự tắt."],
            ["Is anyone having trouble with the Wi-Fi?", "Có ai đang gặp vấn đề với Wi-Fi không?"]
          ] },
        { f: "I do not know how to + động từ nguyên mẫu",
          mean: "**tôi không biết cách làm việc gì đó**: nói mình thiếu thông tin hoặc kỹ năng để làm việc đó.",
          parts: [
            ["I do not know", "**tôi không biết**. Khi nói thường rút gọn: I don’t know."],
            ["how to", "**cách để, làm thế nào để**."],
            ["động từ nguyên mẫu", "việc không biết làm: use, get to, buy, fill in, turn on."],
            ["where to / what to", "các từ để hỏi khác cũng dùng được: I do not know where to go."]
          ],
          use: "dùng để giải thích vì sao bạn cần giúp, thường đi trước lời nhờ: I do not know how to use this. Could you show me?",
          note: "Không bỏ **to**: không nói “I do not know how use this”. Và không dùng động từ thêm -ing sau how to.",
          ex: [
            ["I do not know how to use this ticket machine.", "Tôi không biết cách dùng máy bán vé này."],
            ["I do not know how to fill in this form.", "Tôi không biết cách điền mẫu đơn này."],
            ["She does not know how to get to the hospital.", "Cô ấy không biết đường đến bệnh viện."],
            ["Do you know how to turn on the heater?", "Bạn có biết cách bật máy sưởi không?"]
          ] },
        { f: "Chủ ngữ + is not working / does not work",
          mean: "**… không hoạt động, bị hỏng**: báo một thiết bị, đồ vật không chạy.",
          parts: [
            ["is not working", "**đang không chạy** (lúc này, có thể tạm thời). Khi nói: isn’t working."],
            ["does not work", "**không hoạt động** (hỏng hẳn hoặc thường xuyên). Khi nói: doesn’t work."],
            ["are not working / do not work", "dùng khi chủ ngữ số nhiều: The lights are not working."],
            ["is broken", "**bị hỏng, bị vỡ**: dùng khi đồ vật hư về mặt vật lý."]
          ],
          use: "dùng khi báo với lễ tân, nhân viên: the shower, the TV, the lift, my card. Thường thêm lời nhờ: Could you send someone to fix it?",
          note: "Work ở đây nghĩa là **hoạt động, chạy**, không phải “làm việc”. Đừng nói “The TV is not work”; đúng là **is not working** hoặc **does not work**.",
          ex: [
            ["The shower in my room is not working.", "Vòi sen trong phòng tôi không chạy."],
            ["My card does not work in this machine.", "Thẻ của tôi không dùng được ở máy này."],
            ["The lights in the bathroom are not working.", "Đèn trong phòng tắm không sáng."],
            ["Is the lift working today?", "Hôm nay thang máy có chạy không?"]
          ] }
      ],
      p: [
        "Dùng **I am having trouble…** để nói bạn đang gặp khó khăn ngay lúc này. Sau **trouble** dùng **động từ thêm -ing** hoặc **with + danh từ**, không dùng “to + động từ”.",
        "Dùng **I do not know how to + động từ nguyên mẫu** khi bạn không biết cách làm việc gì. Dùng **is not working / does not work** khi máy móc bị hỏng. Khi nói thường rút gọn: don’t = do not, doesn’t = does not, isn’t = is not."
      ],
      ex: [["I am having trouble connecting to the Wi-Fi.", "Tôi đang gặp khó khi kết nối Wi-Fi."], ["I do not know how to get to the airport.", "Tôi không biết cách đến sân bay."]]
    },
    { h: "Hiện tại hoàn thành cho chuyện vừa xảy ra",
      f: ["Chủ ngữ + have / has + động từ quá khứ phân từ (cột ba)"],
      items: [
        { f: "Chủ ngữ + have / has + động từ quá khứ phân từ (cột ba)",
          mean: "**vừa…, đã… (và bây giờ vẫn còn ảnh hưởng)**: báo một sự việc vừa xảy ra mà kết quả đang ở ngay lúc này, nên bạn cần giúp.",
          parts: [
            ["have", "dùng với I, you, we, they. Khi nói: I’ve, we’ve."],
            ["has", "dùng với he, she, it và danh từ số ít. Khi nói: she’s, it’s."],
            ["quá khứ phân từ (cột thứ ba của động từ)", "lost, missed, broken, forgotten, left, hurt, stolen."],
            ["have not / has not", "phủ định: I have not found it yet (tôi vẫn chưa tìm thấy)."],
            ["just", "**vừa mới**, đặt giữa have và quá khứ phân từ: I have just lost my key."]
          ],
          use: "dùng khi báo mất đồ, lỡ xe, bị thương, quên đồ, rồi nhờ giúp. Không nói thời gian cụ thể trong quá khứ (yesterday, at 3pm) với thì này.",
          note: "So sánh: **I have lost my passport** (bây giờ tôi không có hộ chiếu) và **I lost my passport yesterday** (thì quá khứ đơn vì có yesterday). Không nói “I lose my passport”.",
          ex: [
            ["I have lost my wallet. Can you help me?", "Tôi bị mất ví rồi. Bạn giúp tôi được không?"],
            ["My son has hurt his leg.", "Con trai tôi bị đau chân rồi."],
            ["We have just missed the last train.", "Chúng tôi vừa lỡ chuyến tàu cuối."],
            ["Have you seen a black bag? I have left it somewhere.", "Bạn có thấy một cái túi đen không? Tôi để quên nó ở đâu đó rồi."]
          ] }
      ],
      p: [
        "Khi báo một sự việc **vừa xảy ra và còn ảnh hưởng ngay lúc này**, dùng thì hiện tại hoàn thành. Ví dụ “I have lost my wallet” nghĩa là bây giờ tôi không có ví, nên cần giúp.",
        "I, you, we, they đi với **have**; he, she, it và danh từ số ít đi với **has**. Khi nói thường rút gọn: I’ve = I have. Không nói “I lose my passport” vì thì hiện tại đơn chỉ thói quen."
      ],
      ex: [["My phone has died.", "Điện thoại tôi hết pin tắt nguồn rồi."], ["I have missed my bus.", "Tôi lỡ chuyến xe buýt rồi."]]
    },
    { h: "show / explain / tell khi nhờ chỉ, nhờ giải thích",
      f: ["show + người + how to + động từ nguyên mẫu", "explain + điều cần giải thích + to + người", "tell + người + how / where / when …"],
      items: [
        { f: "show + người + how to + động từ nguyên mẫu",
          mean: "**chỉ cho ai cách làm việc gì**: show là làm mẫu, cho xem tận mắt.",
          parts: [
            ["show", "**chỉ, cho xem**: thường là làm mẫu hoặc chỉ trên bản đồ, màn hình."],
            ["người", "đứng **ngay sau** show, không cần to: show me, show us, show my mother."],
            ["how to + động từ nguyên mẫu", "**cách làm**: how to use, how to get there."],
            ["show + người + the way / where", "**chỉ đường / chỉ chỗ**: show me the way, show me where it is."]
          ],
          use: "dùng khi muốn người kia làm mẫu hoặc chỉ tận nơi, thường trong câu Can you…? / Could you…?",
          note: "Không nói “show to me”. Đúng là **show me**. Show thiên về làm cho thấy; tell thiên về nói bằng lời.",
          ex: [
            ["Could you show me how to buy a ticket?", "Bạn chỉ tôi cách mua vé được không?"],
            ["Can you show us where the exit is?", "Bạn chỉ cho chúng tôi lối ra ở đâu được không?"],
            ["She showed me how to use the washing machine.", "Cô ấy chỉ tôi cách dùng máy giặt."],
            ["Could you show me the way on the map?", "Bạn chỉ đường cho tôi trên bản đồ được không?"]
          ] },
        { f: "explain + điều cần giải thích + to + người",
          mean: "**giải thích điều gì cho ai**: explain là nói rõ để người kia hiểu.",
          parts: [
            ["explain", "**giải thích**: nói kỹ, rõ ràng để hiểu một điều."],
            ["điều cần giải thích", "đứng **ngay sau** explain: the rules, this word, the problem."],
            ["to + người", "người nghe đứng **sau to**: to me, to us."],
            ["explain + how / what / why", "giải thích cách, cái gì, tại sao: Could you explain how it works?"]
          ],
          use: "dùng khi bạn không hiểu một điều và cần người kia nói rõ hơn: luật lệ, mẫu đơn, một từ, một quy trình.",
          note: "Lỗi rất hay gặp: “Explain me the rules”. Explain **không** đi thẳng với người; đúng là **Explain the rules to me**.",
          ex: [
            ["Could you explain this word to me?", "Bạn giải thích từ này cho tôi được không?"],
            ["Can you explain the problem to the manager?", "Bạn giải thích vấn đề cho quản lý được không?"],
            ["The teacher explained the homework to us.", "Cô giáo giải thích bài tập về nhà cho chúng tôi."],
            ["Could you explain how this machine works?", "Bạn giải thích máy này hoạt động thế nào được không?"]
          ] },
        { f: "tell + người + how / where / when …",
          mean: "**nói cho ai biết… thế nào / ở đâu / khi nào**: tell là cho biết thông tin bằng lời.",
          parts: [
            ["tell", "**nói cho biết**: luôn có người nghe ngay sau."],
            ["người", "đứng **ngay sau** tell, không có to: tell me, tell him."],
            ["how / where / when / what time", "từ để hỏi + chủ ngữ + động từ (trật tự câu thường), hoặc how to + động từ nguyên mẫu."],
            ["say", "**nói**: không đi thẳng với người. Không nói “say me”; nói **tell me** hoặc **say to me**."]
          ],
          use: "dùng khi xin thông tin: đường đi, giờ giấc, cách làm. Thường trong câu Could you tell me…?",
          note: "Phân biệt **tell me** (đúng) và “say me” (sai). Sau tell me + từ để hỏi, không đảo động từ: tell me where the bank **is**.",
          ex: [
            ["Could you tell me where the police station is?", "Bạn cho tôi biết đồn cảnh sát ở đâu được không?"],
            ["Can you tell me when the next bus comes?", "Bạn cho tôi biết khi nào chuyến xe buýt tiếp theo đến được không?"],
            ["Please tell me how to get to the hospital.", "Làm ơn cho tôi biết cách đến bệnh viện."],
            ["Nobody told us what time the tour starts.", "Không ai nói cho chúng tôi biết chuyến tham quan bắt đầu lúc mấy giờ."]
          ] }
      ],
      p: [
        "**show** và **tell** đi thẳng với người: show me, tell me. Sau đó thêm **how to + động từ nguyên mẫu** hoặc từ để hỏi.",
        "**explain** thì khác: không đi thẳng với người. Phải nói **explain + điều cần giải thích + to me**, không nói “explain me”."
      ],
      ex: [["Can you show me how to do this?", "Bạn chỉ tôi cách làm cái này được không?"], ["Could you explain the rules to me?", "Bạn giải thích luật cho tôi được không?"]]
    },
    { h: "Thank you for + danh từ hoặc động từ thêm -ing",
      f: ["Thank you for + danh từ", "Thank you for + động từ thêm -ing", "I really appreciate + việc được giúp"],
      items: [
        { f: "Thank you for + danh từ",
          mean: "**cảm ơn vì…**: cảm ơn ai đó về một thứ cụ thể (sự giúp đỡ, món quà, thời gian).",
          parts: [
            ["Thank you", "**cảm ơn**: trang trọng hơn **Thanks** (thân mật)."],
            ["for", "**vì**: giới từ nêu lý do cảm ơn."],
            ["danh từ", "your help, your time, the information, the map, everything."]
          ],
          use: "dùng sau khi được giúp. Thường có your trước danh từ: Thank you for your help.",
          note: "Đừng quên **for**: không nói “Thank you your help”. Muốn nhấn mạnh thêm: Thank you **so much** for…",
          ex: [
            ["Thank you for your time.", "Cảm ơn bạn đã dành thời gian."],
            ["Thanks for the information.", "Cảm ơn vì thông tin."],
            ["Thank you so much for the map.", "Cảm ơn bạn rất nhiều vì tấm bản đồ."],
            ["Thank you for everything.", "Cảm ơn bạn vì tất cả."]
          ] },
        { f: "Thank you for + động từ thêm -ing",
          mean: "**cảm ơn bạn đã làm việc gì đó**: nói rõ việc cụ thể người kia đã làm cho mình.",
          parts: [
            ["for", "giới từ nên động từ sau nó phải thêm **-ing**."],
            ["động từ thêm -ing", "helping, waiting, coming, calling, explaining."],
            ["for not + động từ thêm -ing", "cảm ơn vì đã **không** làm gì: Thank you for not smoking."]
          ],
          use: "dùng khi muốn cảm ơn cụ thể một hành động: chờ đợi, giải thích, chỉ đường. Có thể thêm me, us sau động từ.",
          note: "Lỗi rất hay gặp: “Thank you for help me”. Đúng là **Thank you for helping me**.",
          ex: [
            ["Thank you for waiting.", "Cảm ơn bạn đã chờ."],
            ["Thank you for explaining it again.", "Cảm ơn bạn đã giải thích lại."],
            ["Thanks for calling the taxi for us.", "Cảm ơn bạn đã gọi taxi giúp chúng tôi."],
            ["Thank you for coming with me to the hospital.", "Cảm ơn bạn đã đi cùng tôi đến bệnh viện."]
          ] },
        { f: "I really appreciate + việc được giúp",
          mean: "**tôi thật sự biết ơn…**: cảm ơn sâu sắc, trang trọng hơn Thank you.",
          parts: [
            ["appreciate", "**trân trọng, biết ơn**: đi với **việc** được giúp, không đi với người."],
            ["really", "**thật sự**: nhấn mạnh."],
            ["it / your help / your kindness", "những tân ngữ hay dùng: I really appreciate it."]
          ],
          use: "dùng khi ai đó giúp bạn việc lớn hoặc mất nhiều thời gian. Có thể đứng sau Thank you: Thank you. I really appreciate it.",
          note: "Không nói “I appreciate you for helping”. Hãy nói **I really appreciate your help** hoặc **I really appreciate it**.",
          ex: [
            ["Thank you. I really appreciate it.", "Cảm ơn bạn. Tôi thật sự biết ơn."],
            ["I really appreciate your kindness.", "Tôi thật sự trân trọng lòng tốt của bạn."],
            ["We really appreciate your help with our luggage.", "Chúng tôi thật sự biết ơn bạn đã giúp mang hành lý."],
            ["I really appreciate all your help today.", "Tôi thật sự biết ơn mọi sự giúp đỡ của bạn hôm nay."]
          ] }
      ],
      p: [
        "Sau **for** là danh từ hoặc **động từ thêm -ing**, vì for là giới từ. Không nói “Thank you for help me”.",
        "Muốn cảm ơn sâu sắc hơn, dùng **I really appreciate it / your help**. Chú ý **appreciate** đi với việc được giúp, không đi với người: không nói “I appreciate you” trong tình huống này."
      ],
      ex: [["Thank you for your help.", "Cảm ơn sự giúp đỡ của bạn."], ["Thank you for showing me the way.", "Cảm ơn bạn đã chỉ đường cho tôi."]]
    }
  ],
  mistakes: [
    ["Would you mind to open the window? — Yes, sure!", "Would you mind opening the window? — No, not at all.", "Sau **mind** dùng động từ thêm -ing; muốn đồng ý thì trả lời **No**."],
    ["I have trouble to connect Wi-Fi.", "I am having trouble connecting to the Wi-Fi.", "Sau **trouble** dùng động từ thêm -ing, không dùng “to”."],
    ["I lose my passport!", "I have lost my passport!", "Chuyện vừa xảy ra và còn ảnh hưởng dùng **hiện tại hoàn thành**."],
    ["Can you explain me this word?", "Can you explain this word to me?", "**explain** không đi thẳng với người; phải có **to me**."],
    ["Thank you for help me.", "Thank you for helping me.", "Sau giới từ **for** dùng động từ thêm -ing."],
    ["I appreciate you.", "I really appreciate it.", "**appreciate** đi với việc được giúp (it, your help), không đi với người."],
    ["You! Help me. Machine broken.", "Excuse me, sorry to bother you. This machine does not seem to work. Could you help me?", "Xin lỗi làm phiền, nói vấn đề, rồi nhờ việc cụ thể. Khi nói thường dùng doesn’t (= does not)."]
  ],
  vocab: [
    ["help", "giúp đỡ"], ["favor", "việc nhờ, ân huệ"], ["bother", "làm phiền"], ["trouble", "khó khăn, trục trặc"],
    ["work", "hoạt động (máy móc)"], ["locked", "bị khóa"], ["emergency", "trường hợp khẩn cấp"], ["ambulance", "xe cấp cứu"],
    ["police", "cảnh sát"], ["doctor", "bác sĩ"], ["passport", "hộ chiếu"], ["wallet", "cái ví"],
    ["steal", "lấy cắp"], ["accident", "tai nạn"], ["faint", "ngất"], ["explain", "giải thích"],
    ["show", "chỉ cho xem"], ["appreciate", "biết ơn, trân trọng"], ["give someone a hand", "giúp ai một tay"], ["figure out", "tìm ra cách, hiểu ra"],
    ["get stuck", "bị kẹt, bị bí"], ["out of order", "hỏng (máy công cộng)"], ["look after", "trông giúp"], ["I owe you one", "tôi nợ bạn một lần"]
  ],
  tips: [
    "Công thức nhờ giúp hiệu quả: **xin lỗi làm phiền + nói vấn đề + nhờ một việc cụ thể**. Người nghe hiểu ngay và thường sẵn lòng giúp hơn.",
    "Luyện phản xạ: nghe **Would you mind…?** thì trả lời **No, not at all** nếu bạn đồng ý.",
    "Lưu ngay vào điện thoại số khẩn cấp ở Việt Nam: 113 cảnh sát, 114 cứu hỏa, 115 cấp cứu y tế. Trước khi đi nước ngoài, tra số khẩn cấp của nước đó.",
    "Mô tả năm trục trặc bạn từng gặp bằng I am having trouble… và I do not know how to…",
    "Thử nhờ một người nước ngoài một việc nhỏ, như chụp ảnh hoặc hỏi nghĩa một từ, rồi cảm ơn bằng **Thank you for + động từ thêm -ing**."
  ]
};