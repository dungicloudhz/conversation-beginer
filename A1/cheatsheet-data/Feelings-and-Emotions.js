/* Cheat sheet: Feelings and Emotions (Nói về cảm xúc và cảm giác). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Nói cảm giác cơ thể và cảm xúc bằng **I am + tính từ** hoặc **I feel + tính từ**, không quên động từ be.",
    "Hỏi thăm người khác bằng How do you feel?, You look tired, What is wrong? và trả lời có mức độ như a bit, quite, really.",
    "Nói lý do bằng **because**, bằng **make + người + tính từ** và dùng đúng giới từ sau tính từ cảm xúc.",
    "Đáp lại cảm xúc của người khác: chia vui, an ủi và gợi ý bằng Why don’t you, Let’s, You could.",
    "Kể cảm xúc thay đổi bằng **get + tính từ** và kể cảm xúc hôm qua bằng was, were, felt."
  ],
  phrases: [
    { h: "Nói mình đang thấy thế nào", rows: [
      ["I am hungry.", "Tôi đói.", "Khi nói thường rút gọn: I’m hungry (I’m = I am). Tiếng Việt không có “là” nhưng tiếng Anh bắt buộc có am."],
      ["I feel tired.", "Tôi thấy mệt."],
      ["I am a bit tired.", "Tôi hơi mệt.", "**a bit** thường đi với cảm xúc tiêu cực."],
      ["I am really excited.", "Tôi rất háo hức."],
      ["I am not very hungry.", "Tôi không đói lắm."]
    ]},
    { h: "Hỏi thăm cảm xúc", rows: [
      ["How are you feeling today?", "Hôm nay bạn thấy sao?"],
      ["Are you okay?", "Bạn ổn chứ?"],
      ["You look tired. Did you sleep well?", "Trông bạn mệt thế. Ngủ ngon không?"],
      ["You look happy! What is the good news?", "Trông bạn vui thế! Có tin gì vui à?", "Khi nói thường rút gọn: What’s (What’s = What is)."],
      ["What is wrong?", "Có chuyện gì vậy?", "Người bản xứ hầu như luôn nói What’s wrong? (What’s = What is)."]
    ]},
    { h: "Nói lý do", rows: [
      ["I am tired because I worked late last night.", "Tôi mệt vì tối qua làm muộn."],
      ["Rainy days make me sad.", "Ngày mưa làm tôi buồn."],
      ["Music makes me feel relaxed.", "Âm nhạc làm tôi thấy thư thái."],
      ["I am excited about the trip.", "Tôi háo hức về chuyến đi."],
      ["I am scared of dogs.", "Tôi sợ chó."]
    ]},
    { h: "Chia vui", rows: [
      ["That is great! I am so happy for you.", "Tuyệt quá! Mình mừng cho bạn.", "Khi nói thường rút gọn: That’s great! I’m so happy for you."],
      ["Congratulations!", "Chúc mừng nhé!"],
      ["How exciting!", "Thú vị quá!"],
      ["You deserve it.", "Bạn xứng đáng mà."]
    ]},
    { h: "An ủi và gợi ý giúp đỡ", rows: [
      ["Oh no, I am sorry to hear that.", "Ôi, mình rất tiếc khi nghe vậy.", "Dạng rút gọn: I’m sorry (I’m = I am)."],
      ["That sounds stressful.", "Nghe căng thẳng thật."],
      ["Do not worry. It will be okay.", "Đừng lo. Sẽ ổn thôi.", "Khi nói thường rút gọn: Don’t worry. It’ll be okay. (Don’t = Do not, It’ll = It will)."],
      ["Is there anything I can do?", "Mình có giúp được gì không?"],
      ["Why don’t you take a nap?", "Sao bạn không chợp mắt một lúc?", "don’t = do not. Câu gợi ý này luôn nói ở dạng rút gọn; Why do you not… nghe như đang trách móc."]
    ]},
    { h: "Cảm xúc thay đổi", rows: [
      ["I am getting hungry. Let’s have lunch.", "Tôi bắt đầu đói rồi. Ăn trưa thôi.", "Let’s = Let us, nhưng khi rủ nhau luôn nói Let’s."],
      ["I get bored easily.", "Tôi dễ chán."],
      ["I was nervous before the test, but now I feel fine.", "Trước bài thi tôi hồi hộp, nhưng giờ thấy ổn."],
      ["I feel much better now, thanks.", "Giờ tôi thấy đỡ hơn nhiều rồi, cảm ơn."],
      ["Yesterday I felt really down.", "Hôm qua tôi thấy rất buồn."]
    ]}
  ],
  grammar: [
    { h: "be hoặc feel + tính từ",
      f: ["chủ ngữ + am / is / are + tính từ", "chủ ngữ + feel / feels + tính từ"],
      items: [
        { f: "chủ ngữ + am / is / are + tính từ",
          mean: "**ai đó đang ở trạng thái, cảm xúc nào**: đói, mệt, vui, buồn, lo lắng.",
          parts: [
            ["am", "đi với I: I am tired."],
            ["is", "đi với he, she, it và một người: My mother is happy."],
            ["are", "đi với you, we, they và nhiều người: The children are excited."],
            ["tính từ", "từ chỉ cảm xúc hoặc trạng thái: hungry, thirsty, sad, angry, nervous, bored."]
          ],
          use: "cách phổ biến nhất để nói mình hoặc người khác đang cảm thấy thế nào. Câu hỏi: **Are you OK?** **Are you hungry?**",
          note: "Không bỏ be như tiếng Việt (“I tired”) và không dùng have (“I have hungry”). Tính từ đuôi **-ed** chỉ cảm xúc của người (I am bored), đuôi **-ing** chỉ thứ gây ra cảm xúc (The class is boring).",
          ex: [
            ["I am really thirsty. Can I have some water?", "Tôi khát quá. Cho tôi xin ít nước được không?"],
            ["My little brother is scared of the dark.", "Em trai tôi sợ bóng tối."],
            ["We are not angry with you.", "Chúng tôi không giận bạn đâu."],
            ["Are you nervous about the interview?", "Bạn có hồi hộp về buổi phỏng vấn không?"]
          ] },
        { f: "chủ ngữ + feel / feels + tính từ",
          mean: "**cảm thấy…**. Nhấn mạnh **cảm giác bên trong** của người nói, nghe mềm và tự nhiên hơn be.",
          parts: [
            ["feel", "dùng với I, you, we, they: I feel sick."],
            ["feels", "dùng với he, she, it (thêm -s): She feels lonely."],
            ["tính từ", "đứng ngay sau feel, không thêm like: I feel happy (không nói “I feel like happy”)."]
          ],
          use: "nói về cảm giác cơ thể (feel sick, feel cold) hoặc cảm xúc (feel lonely, feel relaxed). Câu hỏi: **How do you feel?** **How are you feeling?**",
          note: "Phủ định và câu hỏi dùng do / does: I do not feel well, Does she feel better? **feel like + động từ thêm -ing** lại có nghĩa khác: muốn làm gì (I feel like sleeping).",
          ex: [
            ["I feel sleepy after lunch.", "Tôi thấy buồn ngủ sau bữa trưa."],
            ["She feels lonely in the new city.", "Cô ấy thấy cô đơn ở thành phố mới."],
            ["I do not feel well today.", "Hôm nay tôi thấy không khỏe."],
            ["How do you feel about the trip? I feel excited.", "Bạn thấy thế nào về chuyến đi? Tôi thấy háo hức."]
          ] }
      ],
      p: [
        "Tiếng Việt nói “tôi đói” không cần chữ “là”, nhưng tiếng Anh **bắt buộc có động từ be** trước tính từ: I am hungry. Nói “I hungry” là thiếu động từ.",
        "Có thể thay be bằng **feel** để nhấn mạnh cảm giác bên trong: I feel tired. Hai cách đều đúng và rất hay dùng.",
        "Không dùng **have** với tính từ cảm xúc (không nói “I have tired”), và không dùng danh từ thay tính từ (không nói “I am hunger”). Chú ý cặp **bored** (tôi thấy chán) và **boring** (cái gì đó gây chán): I feel bored, The movie is boring."
      ],
      ex: [["I am hungry.", "Tôi đói."], ["I feel bored.", "Tôi thấy chán."]]
    },
    { h: "look + tính từ và từ chỉ mức độ",
      f: ["chủ ngữ + look / looks + tính từ", "chủ ngữ + be + a bit / quite / really / so + tính từ", "chủ ngữ + be + not very + tính từ"],
      items: [
        { f: "chủ ngữ + look / looks + tính từ",
          mean: "**trông có vẻ…**. Đoán cảm xúc của ai đó dựa vào **nét mặt, dáng vẻ** bên ngoài.",
          parts: [
            ["look", "dùng với I, you, we, they: You look happy today."],
            ["looks", "dùng với he, she, it: He looks worried."],
            ["tính từ", "đứng ngay sau look: tired, sad, upset, nervous, great."]
          ],
          use: "nói khi nhìn thấy người khác và quan tâm hỏi han: You look tired. Are you OK?",
          note: "**look + tính từ** (You look tired) khác **look like + danh từ** (You look like a teacher). Không nói “You look like tired”.",
          ex: [
            ["You look really happy today!", "Hôm nay trông bạn vui thật đấy!"],
            ["Your sister looks upset. What happened?", "Trông chị bạn có vẻ buồn bực. Có chuyện gì vậy?"],
            ["He does not look well.", "Trông anh ấy không được khỏe."],
            ["Do I look nervous?", "Trông tôi có hồi hộp không?"]
          ] },
        { f: "chủ ngữ + be + a bit / quite / really / so + tính từ",
          mean: "**hơi / khá / rất / quá…**. Bốn từ chỉ **mức độ mạnh hay nhẹ** của cảm xúc, xếp từ nhẹ đến mạnh.",
          parts: [
            ["a bit", "**hơi, một chút**, mức nhẹ nhất. Thường đi với cảm xúc tiêu cực: a bit tired, a bit sad."],
            ["quite", "**khá**, mức trung bình: quite hungry, quite busy."],
            ["really", "**rất, thật sự**, mức mạnh, dùng được với cả cảm xúc vui và buồn: really excited."],
            ["so", "**quá, rất là**, mạnh và giàu cảm xúc, hay dùng khi nói chuyện thân mật: so bored, so happy."]
          ],
          use: "đặt từ chỉ mức độ **ngay trước tính từ**, sau động từ be (hoặc sau feel, look): I am really tired, I feel a bit sick.",
          note: "Không đặt ở cuối câu như tiếng Việt (“mệt một chút”): nói **I am a bit tired**, không nói “I am tired a bit”. Không nói “a bit happy”, nghe lạ; hãy dùng really happy hoặc quite happy.",
          ex: [
            ["I am a bit cold. Can you close the window?", "Tôi hơi lạnh. Bạn đóng cửa sổ được không?"],
            ["She is quite nervous about her first day.", "Cô ấy khá hồi hộp về ngày đầu tiên."],
            ["We are really proud of you.", "Chúng tôi thật sự tự hào về bạn."],
            ["The kids are so excited about the trip!", "Bọn trẻ háo hức về chuyến đi quá!"]
          ] },
        { f: "chủ ngữ + be + not very + tính từ",
          mean: "**không… lắm**. Cách nói **giảm nhẹ**, lịch sự hơn so với nói thẳng một cảm xúc tiêu cực.",
          parts: [
            ["not", "đứng sau be: I am not, she is not (isn’t), they are not (aren’t)."],
            ["very", "**lắm, rất**. Đi với not thì nghĩa là chỉ ở mức thấp."],
            ["tính từ", "thường là tính từ tích cực để nói nhẹ đi: not very happy (= hơi buồn), not very good."]
          ],
          use: "trả lời khi người khác hỏi thăm mà bạn không muốn nói quá nặng, hoặc nói nhẹ nhàng về cảm xúc của người khác.",
          note: "**I am not very happy** nghe nhẹ nhàng, lịch sự hơn **I am sad** hay **I am unhappy**. Lưu ý vị trí: not đứng trước very, không nói “very not happy”.",
          ex: [
            ["I am not very hungry. I had a big breakfast.", "Tôi không đói lắm. Tôi ăn sáng nhiều rồi."],
            ["My boss is not very happy about the delay.", "Sếp tôi không vui lắm về việc chậm trễ."],
            ["We are not very tired, so let’s keep walking.", "Chúng tôi không mệt lắm, nên đi tiếp thôi."],
            ["Are you OK? Not very good, actually.", "Bạn ổn không? Thật ra thì không ổn lắm."]
          ] }
      ],
      p: [
        "Khi nhìn mặt người khác mà đoán cảm xúc, dùng **look + tính từ**: You look worried. Không thêm like, vì **look like** chỉ đi với danh từ (You look like your mother).",
        "Từ chỉ mức độ **đứng trước tính từ**: a bit tired (hơi), quite hungry (khá), really excited (rất), so bored (quá). Không đặt ở cuối câu như “I am tired a bit”.",
        "**a bit** thường đi với cảm xúc tiêu cực: a bit sad. Với cảm xúc tích cực, dùng **really**: really happy. Muốn nói nhẹ đi, dùng **not very**: I am not very hungry."
      ],
      ex: [["You look tired.", "Trông bạn mệt."], ["I am a bit tired.", "Tôi hơi mệt."]]
    },
    { h: "make + người + tính từ và tính từ + giới từ",
      f: ["danh từ + make / makes + me + tính từ", "danh từ + make / makes + me + feel + tính từ", "tính từ + giới từ + danh từ hoặc động từ thêm -ing"],
      items: [
        { f: "danh từ + make / makes + me + tính từ",
          mean: "**cái gì đó làm cho tôi cảm thấy…**. Nói về **nguyên nhân** gây ra cảm xúc.",
          parts: [
            ["danh từ", "thứ gây ra cảm xúc: music, rain, my job, loud noise. Cũng có thể là this, that, it."],
            ["make", "dùng khi danh từ là số nhiều: Rainy days make me sad."],
            ["makes", "dùng khi danh từ là số ít hoặc không đếm được: Music makes me happy."],
            ["me", "người nhận cảm xúc; có thể đổi thành him, her, us, them, you."]
          ],
          use: "giải thích vì sao mình vui, buồn, bực. Câu hỏi: **What makes you happy?**",
          note: "Sau make không có **to**: không nói “It makes me to happy”. Sau make phải là **me, him, her** (dạng tân ngữ), không phải I, he, she.",
          ex: [
            ["Loud noise makes me nervous.", "Tiếng ồn lớn làm tôi bồn chồn."],
            ["Long meetings make my colleagues tired.", "Những cuộc họp dài làm đồng nghiệp tôi mệt mỏi."],
            ["Her smile makes us happy.", "Nụ cười của cô ấy làm chúng tôi vui."],
            ["What makes you angry?", "Điều gì làm bạn tức giận?"]
          ] },
        { f: "danh từ + make / makes + me + feel + tính từ",
          mean: "**cái gì đó khiến tôi cảm thấy…**. Nghĩa giống cấu trúc trên, thêm feel để nhấn mạnh **cảm giác bên trong**.",
          parts: [
            ["make / makes", "chia theo danh từ đứng trước như cấu trúc trên."],
            ["me", "người cảm nhận: me, him, her, us, them."],
            ["feel", "luôn ở **nguyên mẫu**, không có to, không thêm -s: makes me feel, không nói “makes me feels”."],
            ["tính từ", "cảm giác: calm, relaxed, safe, better, sleepy."]
          ],
          use: "dùng khi nói về cảm giác nhẹ nhàng, khó thấy bằng mắt: thư giãn, an toàn, dễ chịu, buồn ngủ.",
          note: "So sánh: **Music makes me happy** và **Music makes me feel happy** đều đúng, nghĩa gần như nhau. Không nói “makes me to feel”.",
          ex: [
            ["Yoga makes me feel relaxed.", "Tập yoga làm tôi thấy thư giãn."],
            ["Hot tea makes me feel better when I am sick.", "Uống trà nóng làm tôi thấy dễ chịu hơn khi ốm."],
            ["My family makes me feel safe.", "Gia đình làm tôi thấy an toàn."],
            ["Does this song make you feel sad?", "Bài hát này có làm bạn thấy buồn không?"]
          ] },
        { f: "tính từ + giới từ + danh từ hoặc động từ thêm -ing",
          mean: "**cảm thấy thế nào về / với cái gì**. Mỗi tính từ cảm xúc đi với **một giới từ cố định** để nói đối tượng của cảm xúc.",
          parts: [
            ["about", "excited about, worried about, nervous about: cảm xúc **về một chuyện** sắp tới hoặc đang lo."],
            ["of", "scared of, afraid of (**sợ**), proud of (**tự hào về**), tired of (**chán ngấy**)."],
            ["with", "angry with + người (**giận ai**), bored with (**chán**), happy with (**hài lòng với**)."],
            ["động từ thêm -ing", "nếu sau giới từ là động từ thì phải thêm -ing: scared of flying."]
          ],
          use: "dùng sau be hoặc feel để nói rõ mình lo, sợ, vui, chán **về điều gì**: I am worried about my exam.",
          note: "Học theo cụm, không dịch từng chữ: “sợ chó” là **scared of dogs**, không nói “scared dogs”; “lo về” là **worried about**, không nói “worried for”. Sau giới từ không dùng động từ nguyên mẫu: không nói “afraid of fly”.",
          ex: [
            ["I am excited about my new job.", "Tôi háo hức về công việc mới."],
            ["My daughter is afraid of swimming in deep water.", "Con gái tôi sợ bơi ở chỗ nước sâu."],
            ["Are you angry with me?", "Bạn có giận tôi không?"],
            ["He is tired of eating instant noodles every day.", "Anh ấy chán ngấy việc ngày nào cũng ăn mì gói."]
          ] }
      ],
      p: [
        "Muốn nói **điều gì gây ra cảm xúc**, dùng **make + người + tính từ**: Traffic makes me angry. Không có to trước tính từ (không nói “makes me to angry”). Có thể thêm feel: It makes me feel calm.",
        "Mỗi tính từ cảm xúc đi với một giới từ riêng, cần học theo cụm: excited about, worried about, scared of, afraid of, proud of, tired of, bored with, angry with + người, happy with.",
        "Sau giới từ, động từ phải ở dạng **động từ thêm -ing**: I am scared of flying, I am tired of waiting."
      ],
      ex: [["Traffic makes me angry.", "Kẹt xe làm tôi bực."], ["I am worried about the exam.", "Tôi lo về bài thi."]]
    },
    { h: "Gợi ý: Why don’t you, Let’s, You could",
      f: ["Why don’t you + động từ nguyên mẫu? (don’t = do not)", "Let’s + động từ nguyên mẫu (Let’s = Let us)", "You could + động từ nguyên mẫu"],
      items: [
        { f: "Why don’t you + động từ nguyên mẫu? (don’t = do not)",
          mean: "**sao bạn không thử…?** Đây là một **lời khuyên, gợi ý** cho người kia làm, không phải câu hỏi lý do.",
          parts: [
            ["Why don’t you", "**sao bạn không…**. Luôn nói dạng rút gọn don’t; dạng đầy đủ “Why do you not…” không dùng để gợi ý."],
            ["động từ nguyên mẫu", "việc bạn khuyên người kia làm: take a break, go to bed early, call her."],
            ["Why don’t we", "đổi you thành we khi bạn muốn **cùng làm**: Why don’t we go for a walk?"]
          ],
          use: "dùng khi người kia kể họ mệt, buồn, chán, lo lắng và bạn muốn giúp bằng một ý kiến.",
          note: "Đây là gợi ý thân thiện, không phải trách móc. Người nghe không trả lời bằng “Because…”, mà đáp **Good idea** hoặc **Maybe later**.",
          ex: [
            ["You look stressed. Why don’t you take a short walk?", "Trông bạn căng thẳng quá. Sao không đi dạo một chút?"],
            ["I feel lonely. Why don’t you call your best friend?", "Tôi thấy cô đơn. Sao bạn không gọi cho bạn thân?"],
            ["Why don’t you go to bed early tonight?", "Sao tối nay bạn không đi ngủ sớm?"],
            ["I am bored. Why don’t we play a board game?", "Tôi chán quá. Sao mình không chơi trò chơi cờ bàn nhỉ?"]
          ] },
        { f: "Let’s + động từ nguyên mẫu (Let’s = Let us)",
          mean: "**mình cùng… đi**. Rủ **cả người nói và người nghe** cùng làm một việc để thay đổi tâm trạng.",
          parts: [
            ["Let’s", "= Let us, **chúng ta hãy**. Khi rủ rê luôn dùng dạng rút gọn."],
            ["động từ nguyên mẫu", "đứng ngay sau, không có to: Let’s relax, Let’s order pizza."],
            ["Let’s not", "**đừng… nhé**: Let’s not worry about it now."]
          ],
          use: "dùng khi bạn cũng muốn tham gia: cùng đi ăn khi cả hai đói, cùng nghỉ khi cả hai mệt.",
          note: "**Let’s** là rủ cả hai cùng làm, còn **Why don’t you** chỉ khuyên người kia làm. Không nói “Let’s to go” hay “Let’s going”.",
          ex: [
            ["We are both tired. Let’s take a break.", "Cả hai mình đều mệt. Nghỉ một chút đi."],
            ["Let’s listen to some music. It will cheer us up.", "Mình nghe nhạc đi. Nó sẽ làm mình vui lên."],
            ["Let’s not worry about the test now.", "Giờ đừng lo về bài kiểm tra nữa nhé."],
            ["I am so hungry. Let’s order some pizza!", "Tôi đói quá. Gọi pizza đi!"]
          ] },
        { f: "You could + động từ nguyên mẫu",
          mean: "**bạn có thể…**. Một gợi ý **nhẹ nhàng nhất**, chỉ đưa ra lựa chọn để người kia tự quyết.",
          parts: [
            ["You", "người được gợi ý; có thể đổi thành We could khi muốn cùng làm."],
            ["could", "**có thể**, ở đây không phải quá khứ mà là cách nói mềm mỏng, không ép buộc."],
            ["động từ nguyên mẫu", "đứng ngay sau could, không có to, không thêm -s."]
          ],
          use: "dùng khi muốn đưa ra một hoặc vài lựa chọn, thường nối bằng or: You could read a book or watch a movie.",
          note: "So với **You should** (bạn nên), **You could** nhẹ hơn nhiều, không mang tính khuyên bảo. Không nói “You could to rest”.",
          ex: [
            ["You could talk to your teacher about it.", "Bạn có thể nói chuyện với thầy giáo về việc đó."],
            ["If you feel bored, you could learn a new hobby.", "Nếu thấy chán, bạn có thể học một sở thích mới."],
            ["You could drink some warm milk before bed.", "Bạn có thể uống chút sữa ấm trước khi ngủ."],
            ["We could go to the park or stay home and watch a movie.", "Mình có thể ra công viên hoặc ở nhà xem phim."]
          ] }
      ],
      p: [
        "Khi người khác nói họ mệt, đói hay chán, bạn có thể đưa ra gợi ý. **Why don’t you…?** là gợi ý cho người kia làm: Why don’t you take a nap? Dù có dạng câu hỏi phủ định, ý nghĩa là “sao bạn không thử…”.",
        "**Let’s** dùng khi rủ **cả hai cùng làm**: Let’s get something to eat. **You could** là gợi ý nhẹ nhàng, để người kia tự chọn: You could watch a movie.",
        "Sau cả ba cấu trúc là **động từ nguyên mẫu không có to**, không dùng động từ thêm -ing: không nói “Let’s to eat” hay “Let’s eating”."
      ],
      ex: [["I am tired. — Why don’t you rest?", "Tôi mệt. — Sao bạn không nghỉ một chút?"], ["I am hungry. — Let’s get something to eat.", "Tôi đói. — Đi kiếm gì ăn đi."]]
    },
    { h: "get + tính từ (trở nên) và quá khứ của be, feel",
      f: ["chủ ngữ + get / gets / got + tính từ", "chủ ngữ + am / is / are + getting + tính từ", "am / is → was, are → were, feel → felt", "feel better / feel worse"],
      items: [
        { f: "chủ ngữ + get / gets / got + tính từ",
          mean: "**trở nên, bị…**. Nói về sự **thay đổi** từ trạng thái này sang cảm xúc khác.",
          parts: [
            ["get", "hiện tại, dùng với I, you, we, they: nói thói quen (I get bored easily)."],
            ["gets", "hiện tại, dùng với he, she, it: She gets angry when people are late."],
            ["got", "quá khứ của get, dùng cho mọi chủ ngữ: I got scared last night."]
          ],
          use: "kể việc mình hay bị cảm xúc gì trong hoàn cảnh nào (thường đi với when), hoặc kể lúc cảm xúc đã thay đổi trong quá khứ.",
          note: "Người Việt hay dịch “trở nên” thành become, nhưng khi nói chuyện về cảm xúc người bản xứ dùng **get** nhiều hơn. Không nói “I am get angry”.",
          ex: [
            ["I get nervous when I speak in front of people.", "Tôi bị hồi hộp khi nói trước đám đông."],
            ["My dad gets angry when the traffic is bad.", "Bố tôi bực mình khi đường kẹt xe."],
            ["We got worried when you did not answer the phone.", "Chúng tôi đã lo lắng khi bạn không nghe máy."],
            ["Do you get bored at home on weekends?", "Cuối tuần ở nhà bạn có thấy chán không?"]
          ] },
        { f: "chủ ngữ + am / is / are + getting + tính từ",
          mean: "**đang dần trở nên, bắt đầu thấy…**. Cảm xúc **đang thay đổi** ngay lúc nói.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ: I am, she is, we are."],
            ["getting", "dạng thêm -ing của get, nghĩa là **đang dần**."],
            ["tính từ", "trạng thái mới đang tới: hungry, tired, cold, sleepy, better."]
          ],
          use: "dùng khi bạn **bắt đầu** cảm thấy một điều gì đó và muốn báo cho người khác, ví dụ để đề nghị nghỉ, đi ăn.",
          note: "So sánh: **I am hungry** (tôi đói rồi) và **I am getting hungry** (tôi bắt đầu thấy đói). Không nói “I am become hungry”.",
          ex: [
            ["It is late. I am getting sleepy.", "Muộn rồi. Tôi bắt đầu buồn ngủ."],
            ["The baby is getting hungry.", "Em bé bắt đầu đói rồi."],
            ["We are getting bored. Can we go home?", "Chúng tôi bắt đầu thấy chán. Mình về được không?"],
            ["Is your mother getting better?", "Mẹ bạn có đỡ hơn chưa?"]
          ] },
        { f: "am / is → was, are → were, feel → felt",
          mean: "**dạng quá khứ** của be và feel, dùng để kể cảm xúc **đã xảy ra** (hôm qua, tuần trước, lúc đó).",
          parts: [
            ["was", "quá khứ của am và is, dùng với I, he, she, it: I was tired yesterday."],
            ["were", "quá khứ của are, dùng với you, we, they: They were happy."],
            ["felt", "quá khứ của feel và feels (động từ bất quy tắc), dùng cho mọi chủ ngữ: She felt sad."]
          ],
          use: "kể lại cảm xúc trong quá khứ, thường đi với yesterday, last night, last week, at that time, before.",
          note: "Phủ định của was / were thêm not (was not, were not). Phủ định của felt phải dùng **did not feel**, không nói “I did not felt” hay “I not felt”.",
          ex: [
            ["I was very excited on my first day at work.", "Ngày đầu đi làm tôi rất háo hức."],
            ["My parents were proud of me at my graduation.", "Bố mẹ tôi đã rất tự hào về tôi trong lễ tốt nghiệp."],
            ["She felt lonely when she moved to a new city.", "Cô ấy thấy cô đơn khi chuyển đến thành phố mới."],
            ["I did not feel well last night.", "Tối qua tôi thấy không khỏe."]
          ] },
        { f: "feel better / feel worse",
          mean: "**thấy đỡ hơn / thấy tệ hơn** so với trước đó. Thường dùng khi nói về sức khỏe hoặc tâm trạng.",
          parts: [
            ["better", "so sánh hơn của good và well: **tốt hơn, đỡ hơn**."],
            ["worse", "so sánh hơn của bad: **tệ hơn, nặng hơn**."],
            ["much / a little", "đặt trước để nói mức độ: much better (đỡ hơn nhiều), a little worse (tệ hơn một chút)."]
          ],
          use: "trả lời khi người khác hỏi thăm sau khi bạn ốm hoặc buồn; hoặc chúc người khác: **I hope you feel better soon.**",
          note: "Không nói “more good”, “more better” hay “more bad”. Chỉ có **better** và **worse**.",
          ex: [
            ["I feel much better after a good sleep.", "Tôi thấy đỡ hơn nhiều sau một giấc ngủ ngon."],
            ["My headache is worse today. I feel worse than yesterday.", "Hôm nay tôi đau đầu nặng hơn. Tôi thấy tệ hơn hôm qua."],
            ["I hope you feel better soon!", "Mong bạn sớm khỏe lại!"],
            ["Do you feel a little better now?", "Bây giờ bạn thấy đỡ hơn chút nào chưa?"]
          ] }
      ],
      p: [
        "**get + tính từ** nghĩa là “trở nên”, dùng khi cảm xúc **đang thay đổi**: I am getting hungry (tôi bắt đầu thấy đói). Với thói quen dùng hiện tại đơn: I get bored easily. Không nói “I am become hungry”.",
        "Kể cảm xúc **đã qua** thì đổi động từ sang quá khứ: am và is thành **was**, are thành **were**, feel thành **felt** (động từ bất quy tắc): Yesterday I felt sad.",
        "So sánh hơn của good là **better**, của bad là **worse**: I feel better, It is getting worse. Không nói “more good”."
      ],
      ex: [["I was nervous before the test, but now I feel fine.", "Trước bài thi tôi hồi hộp, nhưng giờ thấy ổn."], ["I feel much better now.", "Giờ tôi thấy đỡ hơn nhiều rồi."]]
    }
  ],
  mistakes: [
    ["I hungry. I have tired.", "I am hungry. I am tired.", "Trước tính từ cảm xúc **bắt buộc có be**; không dùng have."],
    ["I feel boring.", "I feel bored.", "**bored** là cảm giác của bạn; **boring** là thứ gây chán cho người khác."],
    ["You look like tired.", "You look tired.", "Sau **look** là tính từ trực tiếp; look like chỉ đi với danh từ."],
    ["I am tired a bit. I very happy.", "I am a bit tired. I am very happy.", "Từ chỉ mức độ **đứng trước tính từ**, và vẫn phải có am."],
    ["I am scared with dogs. I am worried for exam.", "I am scared of dogs. I am worried about the exam.", "Học tính từ theo cụm với giới từ: **scared of**, **worried about**."],
    ["Traffic makes me to angry.", "Traffic makes me angry.", "Sau **make + người** là tính từ trực tiếp, không có to."],
    ["Let’s to eat. Yesterday I feel sad.", "Let’s eat. Yesterday I felt sad.", "Sau **Let’s** (Let us) là động từ nguyên mẫu; chuyện hôm qua dùng quá khứ **felt**."]
  ],
  vocab: [
    ["tired", "mệt"], ["sleepy", "buồn ngủ"], ["hungry", "đói"], ["thirsty", "khát"],
    ["happy", "vui"], ["excited", "háo hức"], ["relaxed", "thư thái"], ["surprised", "ngạc nhiên"],
    ["sad", "buồn"], ["bored", "chán"], ["angry", "tức giận"], ["nervous", "hồi hộp, lo lắng"],
    ["worried", "lo"], ["scared", "sợ"], ["lonely", "cô đơn"], ["sick", "ốm, mệt trong người"],
    ["exhausted", "kiệt sức"], ["starving", "đói lả"], ["relieved", "nhẹ nhõm"], ["disappointed", "thất vọng"],
    ["embarrassed", "xấu hổ, ngượng"], ["homesick", "nhớ nhà"], ["grateful", "biết ơn"], ["proud of", "tự hào về"]
  ],
  tips: [
    "Mỗi tối nói một câu về cảm xúc trong ngày kèm lý do, ví dụ: “I am a bit tired because I worked late.” (rút gọn: I’m a bit tired).",
    "Với từ mạnh như exhausted, starving, furious, dùng **absolutely** hoặc **completely** thay cho very: absolutely starving là đúng, very starving là sai.",
    "Học tính từ cảm xúc **theo cụm có giới từ**: excited about, scared of, proud of, bored with. Đừng học từ đơn lẻ.",
    "Khi bạn bè kể chuyện buồn, đáp lại theo ba bước: an ủi (I am sorry to hear that), hỏi han (Do you want to talk about it?), gợi ý (Why don’t you…?).",
    "Khi buồn hay căng thẳng kéo dài, hãy nói ra với người bạn tin. Câu “Can we talk? I am not feeling great.” (rút gọn: I’m not feeling great) là một khởi đầu tốt."
  ]
};
