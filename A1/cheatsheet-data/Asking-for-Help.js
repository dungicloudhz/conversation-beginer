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
      p: [
        "Câu nhờ càng dài và càng “gián tiếp” thì càng lịch sự. **Can you…?** dùng với bạn bè và người thân. **Could you…, please?** dùng với người lạ, nhân viên phục vụ.",
        "**Would you mind…?** rất lịch sự, hợp với người lớn tuổi hoặc cấp trên. **I was wondering if you could…** trang trọng nhất, dùng khi nhờ một việc lớn.",
        "Chọn mức theo người nghe: dùng câu quá trang trọng với bạn thân nghe xa cách, còn dùng câu quá ngắn với người lạ nghe thiếu lịch sự."
      ],
      ex: [["Could you help me, please?", "Bạn giúp tôi được không ạ?"], ["Would you mind helping me?", "Phiền bạn giúp tôi được không?"]]
    },
    { h: "Would you mind + động từ thêm -ing và cách trả lời “ngược”",
      f: ["Would you mind + động từ thêm -ing?", "Đồng ý: No, not at all. / Of course not.", "Từ chối: Sorry, I am afraid I cannot right now."],
      p: [
        "Sau **mind** luôn dùng **động từ thêm -ing**, không dùng “to + động từ”.",
        "Nghĩa đen của câu là “Bạn có phiền khi… không?”. Vì vậy muốn **đồng ý giúp** thì phải trả lời **No** (không phiền): No, not at all. Nếu trả lời “Yes” thì người nghe hiểu là bạn thấy phiền."
      ],
      ex: [["Would you mind opening the window? No, not at all.", "Bạn mở giúp cửa sổ được không? Không phiền gì đâu."], ["Would you mind taking a photo of us?", "Bạn chụp giúp chúng tôi một tấm được không?"]]
    },
    { h: "Mô tả trục trặc: have trouble và do not know how to",
      f: ["I am having trouble + động từ thêm -ing", "I am having trouble with + danh từ", "I do not know how to + động từ nguyên mẫu", "Chủ ngữ + is not working / does not work"],
      p: [
        "Dùng **I am having trouble…** để nói bạn đang gặp khó khăn ngay lúc này. Sau **trouble** dùng **động từ thêm -ing** hoặc **with + danh từ**, không dùng “to + động từ”.",
        "Dùng **I do not know how to + động từ nguyên mẫu** khi bạn không biết cách làm việc gì. Dùng **is not working / does not work** khi máy móc bị hỏng. Khi nói thường rút gọn: don’t = do not, doesn’t = does not, isn’t = is not."
      ],
      ex: [["I am having trouble connecting to the Wi-Fi.", "Tôi đang gặp khó khi kết nối Wi-Fi."], ["I do not know how to get to the airport.", "Tôi không biết cách đến sân bay."]]
    },
    { h: "Hiện tại hoàn thành cho chuyện vừa xảy ra",
      f: ["Chủ ngữ + have / has + động từ quá khứ phân từ (cột ba)"],
      p: [
        "Khi báo một sự việc **vừa xảy ra và còn ảnh hưởng ngay lúc này**, dùng thì hiện tại hoàn thành. Ví dụ “I have lost my wallet” nghĩa là bây giờ tôi không có ví, nên cần giúp.",
        "I, you, we, they đi với **have**; he, she, it và danh từ số ít đi với **has**. Khi nói thường rút gọn: I’ve = I have. Không nói “I lose my passport” vì thì hiện tại đơn chỉ thói quen."
      ],
      ex: [["My phone has died.", "Điện thoại tôi hết pin tắt nguồn rồi."], ["I have missed my bus.", "Tôi lỡ chuyến xe buýt rồi."]]
    },
    { h: "show / explain / tell khi nhờ chỉ, nhờ giải thích",
      f: ["show + người + how to + động từ nguyên mẫu", "explain + điều cần giải thích + to + người", "tell + người + how / where / when …"],
      p: [
        "**show** và **tell** đi thẳng với người: show me, tell me. Sau đó thêm **how to + động từ nguyên mẫu** hoặc từ để hỏi.",
        "**explain** thì khác: không đi thẳng với người. Phải nói **explain + điều cần giải thích + to me**, không nói “explain me”."
      ],
      ex: [["Can you show me how to do this?", "Bạn chỉ tôi cách làm cái này được không?"], ["Could you explain the rules to me?", "Bạn giải thích luật cho tôi được không?"]]
    },
    { h: "Thank you for + danh từ hoặc động từ thêm -ing",
      f: ["Thank you for + danh từ", "Thank you for + động từ thêm -ing", "I really appreciate + việc được giúp"],
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
