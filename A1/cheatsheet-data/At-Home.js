/* Cheat sheet: At Home (Ở nhà, nói gì). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên các loại nhà, các phòng và những đồ đạc quen thuộc trong từng phòng.",
    "Giới thiệu ngôi nhà của bạn bằng There is và There are.",
    "Nói đồ vật nằm ở đâu bằng in, on, under, next to, behind.",
    "Nhờ người trong nhà làm việc và đề nghị giúp đỡ bằng Can you, Could you, Shall I.",
    "Đón khách lịch sự từ lúc mời vào, mời đồ uống, dẫn đi xem nhà đến lúc chào tạm biệt."
  ],
  phrases: [
    { h: "Giới thiệu nhà của bạn", rows: [
      ["Where do you live? — I live in an apartment in Cau Giay.", "Bạn sống ở đâu? — Tôi sống ở một căn hộ ở Cầu Giấy."],
      ["I live with my parents and my younger brother.", "Tôi sống với bố mẹ và em trai."],
      ["It has two bedrooms and one bathroom.", "Nhà có hai phòng ngủ và một phòng tắm."],
      ["My room is small but very cozy.", "Phòng tôi nhỏ nhưng rất ấm cúng."],
      ["What is your home like?", "Nhà bạn thế nào?", "Thường nói rút gọn: What’s your home like? (What’s = What is)."]
    ]},
    { h: "Tìm đồ trong nhà", rows: [
      ["Where are my keys?", "Chìa khóa của tôi đâu?", "keys là số nhiều nên dùng **are**."],
      ["They are on the table next to the door.", "Trên bàn cạnh cửa ấy.", "Dạng rút gọn: They’re (They’re = They are)."],
      ["The milk is in the fridge.", "Sữa ở trong tủ lạnh."],
      ["The cat is under the table.", "Con mèo ở dưới gầm bàn."],
      ["The picture is on the wall.", "Bức tranh ở trên tường."]
    ]},
    { h: "Nhờ việc và đề nghị giúp", rows: [
      ["Can you take out the trash?", "Bạn đổ rác giúp được không?"],
      ["Could you turn off the light, please?", "Bạn tắt đèn giúp tôi được không?"],
      ["Please close the window. It is cold.", "Đóng cửa sổ giúp nhé. Lạnh quá.", "Dạng rút gọn: It’s cold (It’s = It is)."],
      ["Shall I wash the dishes?", "Để tôi rửa bát nhé?"],
      ["I will do the laundry today.", "Hôm nay tôi giặt đồ cho.", "Khi nói thường rút gọn: I’ll (I’ll = I will)."]
    ]},
    { h: "Chủ nhà đón khách", rows: [
      ["Hi! Come in, please.", "Chào bạn! Mời vào."],
      ["You can leave your shoes here.", "Bạn để giày ở đây nhé."],
      ["Please have a seat.", "Mời bạn ngồi."],
      ["Would you like something to drink?", "Bạn uống gì không?"],
      ["Let me show you around.", "Để tôi dẫn bạn đi xem nhà.", "Let me là cụm cố định, nghĩa là “để tôi”."]
    ]},
    { h: "Khách đến chơi", rows: [
      ["Thanks for having me.", "Cảm ơn đã mời tôi đến."],
      ["Should I take off my shoes?", "Tôi có cần cởi giày không?"],
      ["What a lovely home!", "Nhà đẹp quá!"],
      ["Can I use your bathroom?", "Tôi dùng nhà vệ sinh được không?"],
      ["I should get going. Thanks for everything!", "Tôi phải về rồi. Cảm ơn vì tất cả nhé!"]
    ]}
  ],
  grammar: [
    { h: "There is và There are để nói trong nhà có gì",
      f: ["There is + a hoặc an + danh từ số ít", "There are + số đếm hoặc some + danh từ số nhiều", "Is there…? / Are there any…?", "There is not / There are not"],
      items: [
        { f: "There is + a hoặc an + danh từ số ít",
          mean: "**có một (cái gì đó) ở đâu đó**. Dùng khi nói về **một** đồ vật hoặc một căn phòng.",
          parts: [
            ["There is", "**có**, dùng với một thứ. Dạng rút gọn hay nói là There’s."],
            ["a", "đứng trước danh từ bắt đầu bằng **âm phụ âm**: a sofa, a kitchen, a bed."],
            ["an", "đứng trước danh từ bắt đầu bằng **âm nguyên âm**: an oven, an armchair, an old fridge."],
            ["danh từ số ít", "danh từ chỉ một thứ, không thêm -s."]
          ],
          use: "giới thiệu trong nhà, trong phòng có gì. Thường thêm nơi chốn ở cuối câu: in the living room, in my bedroom.",
          note: "Đừng dịch “Nhà tôi có…” thành “My house has…” trong mọi trường hợp. Khi tả vị trí đồ đạc, người bản xứ thường nói **There is a … in my house**.",
          ex: [
            ["There is a big sofa in the living room.", "Trong phòng khách có một cái ghế sofa lớn."],
            ["There is an oven in our kitchen.", "Bếp nhà chúng tôi có một cái lò nướng."],
            ["There is a small garden behind my house.", "Phía sau nhà tôi có một khu vườn nhỏ."],
            ["There is a lamp next to my bed.", "Cạnh giường tôi có một cái đèn."]
          ] },
        { f: "There are + số đếm hoặc some + danh từ số nhiều",
          mean: "**có (nhiều cái gì đó) ở đâu đó**. Dùng khi nói về **hai thứ trở lên**.",
          parts: [
            ["There are", "**có**, dùng với nhiều thứ. Không rút gọn trong văn viết."],
            ["số đếm", "two, three, four…: nói rõ số lượng (There are two bathrooms)."],
            ["some", "**một vài, một ít**: khi không nói rõ số lượng (There are some books)."],
            ["danh từ số nhiều", "danh từ thêm **-s** hoặc **-es**: rooms, chairs, glasses. Chú ý danh từ bất quy tắc: shelf → shelves."]
          ],
          use: "kể số phòng, số đồ vật trong nhà. Sau There are danh từ **luôn ở số nhiều**.",
          note: "Lỗi hay gặp là quên đuôi -s: “There are three bedroom” là sai, phải nói **three bedrooms**.",
          ex: [
            ["There are three bedrooms in my house.", "Nhà tôi có ba phòng ngủ."],
            ["There are some plants on the balcony.", "Ngoài ban công có vài chậu cây."],
            ["There are four chairs around the table.", "Quanh bàn có bốn cái ghế."],
            ["There are some cups in the cupboard.", "Trong tủ có mấy cái cốc."]
          ] },
        { f: "Is there…? / Are there any…?",
          mean: "**Có … không?**: câu hỏi xem ở đâu đó có thứ gì hay không.",
          parts: [
            ["Is there…?", "hỏi về **một** thứ: Is there **a** washing machine? Trả lời: Yes, there is. / No, there is not."],
            ["Are there any…?", "hỏi về **nhiều** thứ: Are there **any** towels? Trả lời: Yes, there are. / No, there are not."],
            ["any", "dùng trong câu hỏi và câu phủ định thay cho some, nghĩa là **nào, chút nào**."]
          ],
          use: "khi đến nhà người khác, thuê nhà, hoặc tìm đồ trong nhà. Đưa is hoặc are lên trước there.",
          note: "Trả lời ngắn không lặp lại danh từ: hỏi “Is there a fan?” thì đáp **Yes, there is**, không đáp “Yes, there is a fan is”.",
          ex: [
            ["Is there a microwave in the kitchen?", "Trong bếp có lò vi sóng không?"],
            ["Are there any towels in the bathroom?", "Trong phòng tắm có khăn tắm nào không?"],
            ["Is there a parking space near your house? — No, there is not.", "Gần nhà bạn có chỗ đỗ xe không? — Không có."],
            ["Are there any eggs in the fridge? — Yes, there are.", "Trong tủ lạnh có quả trứng nào không? — Có."]
          ] },
        { f: "There is not / There are not",
          mean: "**không có …**: câu phủ định của There is và There are.",
          parts: [
            ["There is not", "không có **một** thứ: There is not a TV. Dạng rút gọn: There isn’t."],
            ["There are not", "không có **nhiều** thứ: There are not any chairs. Dạng rút gọn: There aren’t."],
            ["any", "thường đi sau There are not, nghĩa là **không … nào**."]
          ],
          use: "nói trong nhà thiếu thứ gì. Sau There is not dùng a hoặc an + danh từ số ít; sau There are not dùng any + danh từ số nhiều.",
          note: "Có thể nói **There is no** + danh từ thay cho There is not a: There is no TV in my room. Không dùng cả hai cùng lúc (không nói “There is not no TV”).",
          ex: [
            ["There is not a TV in my bedroom.", "Trong phòng ngủ của tôi không có ti vi."],
            ["There are not any pictures on the wall.", "Trên tường không có bức tranh nào."],
            ["There is not a lift in our building.", "Tòa nhà của chúng tôi không có thang máy."],
            ["There are not any clean plates. Can you wash some?", "Không còn cái đĩa sạch nào. Bạn rửa vài cái được không?"]
          ] }
      ],
      p: [
        "Khi muốn nói “ở đâu đó **có** cái gì”, tiếng Anh dùng **There is / There are**, không dùng “have”. Người Việt hay nói “My house have two bedroom” vì dịch từng chữ “nhà tôi có”.",
        "Dùng **There is** với một thứ (There is a big kitchen) và **There are** với nhiều thứ (There are three bedrooms). Danh từ số nhiều phải thêm **-s**.",
        "Muốn hỏi thì đảo is hoặc are lên đầu: Is there a balcony? Trả lời ngắn: Yes, there is. / No, there is not (rút gọn: there isn’t)."
      ],
      ex: [["There are two bedrooms in my house.", "Nhà tôi có hai phòng ngủ."], ["Is there a balcony? — Yes, there is.", "Có ban công không? — Có."]]
    },
    { h: "Giới từ chỉ vị trí: in, on, under, next to, behind",
      f: ["in + không gian bên trong", "on + bề mặt, kể cả tường", "under / next to / behind + đồ vật"],
      items: [
        { f: "in + không gian bên trong",
          mean: "**ở trong, bên trong** một không gian có vách bao quanh như căn phòng, ngăn kéo, tủ, hộp.",
          parts: [
            ["in", "bên trong một chỗ được bao kín hoặc có giới hạn: in the drawer, in the fridge, in the box, in the kitchen."]
          ],
          use: "nói đồ vật nằm trong đồ đựng hoặc người, vật đang ở trong một căn phòng. Mẫu: đồ vật + is hoặc are + in + the + nơi chốn.",
          note: "Phòng cũng là không gian bên trong: in the bathroom, in my bedroom. Nhưng nói **at home** (ở nhà), không nói “in home”.",
          ex: [
            ["The milk is in the fridge.", "Sữa ở trong tủ lạnh."],
            ["My keys are in the drawer.", "Chìa khóa của tôi ở trong ngăn kéo."],
            ["Mum is in the kitchen.", "Mẹ đang ở trong bếp."],
            ["Are the towels in the cupboard?", "Khăn tắm có ở trong tủ không?"]
          ] },
        { f: "on + bề mặt, kể cả tường",
          mean: "**ở trên, nằm trên** một bề mặt, có tiếp xúc với bề mặt đó.",
          parts: [
            ["on", "trên mặt bàn, mặt sàn, mặt giường, kệ, và cả **bề mặt thẳng đứng** như tường, cửa, tủ lạnh."]
          ],
          use: "nói đồ vật đặt trên bàn, giường, kệ hoặc treo, dán trên tường, cửa. Mẫu: đồ vật + is hoặc are + on + the + bề mặt.",
          note: "Người Việt hay nói “in the wall” vì nghĩ tranh “ở trong tường”. Đúng phải là **on the wall**. Chỉ dùng in the wall khi vật bị khoét vào trong tường (ví dụ ổ điện âm tường).",
          ex: [
            ["The remote is on the sofa.", "Cái điều khiển ở trên ghế sofa."],
            ["There is a mirror on the wall.", "Trên tường có một cái gương."],
            ["Your phone is on the shelf.", "Điện thoại của bạn ở trên kệ."],
            ["Is my book on the bed?", "Quyển sách của tôi có ở trên giường không?"]
          ] },
        { f: "under / next to / behind + đồ vật",
          mean: "ba giới từ chỉ vị trí so với một đồ vật khác: **dưới gầm**, **bên cạnh**, **phía sau**.",
          parts: [
            ["under", "**ở dưới, dưới gầm** một vật: under the bed, under the table."],
            ["next to", "**bên cạnh, sát cạnh**, luôn có hai chữ: next to the window, next to the TV."],
            ["behind", "**phía sau**, bị vật kia che khuất: behind the door, behind the sofa. Ngược nghĩa với **in front of** (phía trước)."]
          ],
          use: "chỉ chỗ để đồ hoặc tìm đồ bị mất trong nhà. Sau giới từ thường là **the** + tên đồ đạc.",
          note: "Đừng quên chữ **to** trong next to: nói next to the bed, không nói “next the bed”.",
          ex: [
            ["The cat is sleeping under the table.", "Con mèo đang ngủ dưới gầm bàn."],
            ["The lamp is next to the sofa.", "Cái đèn ở bên cạnh ghế sofa."],
            ["My shoes are behind the door.", "Giày của tôi ở sau cánh cửa."],
            ["Is the box under the bed?", "Cái hộp có ở dưới gầm giường không?"]
          ] }
      ],
      p: [
        "**in** nghĩa là bên trong một không gian có vách bao quanh: in the drawer, in the fridge. **on** nghĩa là nằm trên một bề mặt: on the table.",
        "Bức tường cũng được xem là một bề mặt, nên tranh và đồng hồ treo tường dùng **on the wall**, không dùng “in the wall”.",
        "Ba giới từ khác hay dùng trong nhà: **under** (dưới gầm), **next to** (bên cạnh), **behind** (phía sau). Câu trả lời luôn có dạng: đồ vật + is hoặc are + giới từ + the + đồ đạc."
      ],
      ex: [["The clock is on the wall.", "Đồng hồ ở trên tường."], ["My bag is behind the door.", "Túi của tôi ở sau cánh cửa."]]
    },
    { h: "Sở hữu cách ’s và tính từ sở hữu",
      f: ["tên người + ’s + đồ vật", "danh từ số nhiều tận cùng bằng -s + ’ + đồ vật", "my / your / his / her / our / their + danh từ"],
      items: [
        { f: "tên người + ’s + đồ vật",
          mean: "**(đồ vật) của (người nào đó)**: chỉ sự sở hữu bằng cách thêm **’s** vào sau người sở hữu.",
          parts: [
            ["tên người", "người sở hữu, đứng **trước**: Lan, my brother, Mum, my sister."],
            ["’s", "dấu sở hữu, gắn liền vào người sở hữu, nghĩa là **của**."],
            ["đồ vật", "thứ được sở hữu, đứng **sau**: room, bike, laptop."]
          ],
          use: "nói đồ vật, căn phòng thuộc về ai trong nhà. Thứ tự ngược với tiếng Việt: “phòng của Nam” thành **Nam’s room**.",
          note: "Không nói “the room of Nam”. Cũng đừng nhầm ’s sở hữu với ’s là is rút gọn: “Nam’s room” (phòng của Nam) khác “Nam’s here” (Nam ở đây).",
          ex: [
            ["This is my brother’s bedroom.", "Đây là phòng ngủ của anh trai tôi."],
            ["Mum’s glasses are on the table.", "Kính của mẹ ở trên bàn."],
            ["Is that Hoa’s laptop?", "Đó có phải máy tính xách tay của Hoa không?"],
            ["My grandmother’s chair is next to the window.", "Ghế của bà tôi ở cạnh cửa sổ."]
          ] },
        { f: "danh từ số nhiều tận cùng bằng -s + ’ + đồ vật",
          mean: "**(đồ vật) của (nhiều người)**: khi người sở hữu là danh từ số nhiều đã có đuôi -s, chỉ thêm dấu **’** phía sau.",
          parts: [
            ["danh từ số nhiều có -s", "parents, sisters, students, neighbours."],
            ["’", "chỉ thêm dấu phẩy trên, **không** thêm s nữa: parents’ (không viết parents’s)."],
            ["danh từ số nhiều bất quy tắc", "không tận cùng bằng s thì vẫn thêm **’s**: children’s room, people’s houses."]
          ],
          use: "nói đồ vật chung của nhiều người như bố mẹ, các anh chị, hàng xóm.",
          note: "Khi nói, parents’ và parent’s phát âm giống nhau. Phải nhìn ngữ cảnh: **my parents’ room** là phòng của bố mẹ, **my parent’s room** là phòng của một người (bố hoặc mẹ).",
          ex: [
            ["My parents’ room is downstairs.", "Phòng của bố mẹ tôi ở tầng dưới."],
            ["The girls’ toys are in the box.", "Đồ chơi của các bé gái ở trong hộp."],
            ["Our neighbours’ dog is very noisy.", "Con chó của nhà hàng xóm rất ồn."],
            ["The children’s room is not big.", "Phòng của bọn trẻ không rộng."]
          ] },
        { f: "my / your / his / her / our / their + danh từ",
          mean: "**của tôi, của bạn, của anh ấy…**: tính từ sở hữu, đứng trước danh từ để nói vật đó thuộc về ai mà không cần nhắc tên.",
          parts: [
            ["my", "của **tôi**."],
            ["your", "của **bạn** hoặc **các bạn**."],
            ["his", "của **anh ấy, ông ấy** (người nam)."],
            ["her", "của **cô ấy, bà ấy** (người nữ)."],
            ["our", "của **chúng tôi, chúng ta**."],
            ["their", "của **họ, bọn họ**."]
          ],
          use: "đặt ngay trước danh từ, không thêm a, an hay the. Chọn từ theo **người sở hữu**, không theo đồ vật.",
          note: "Người Việt hay nhầm his và her vì tiếng Việt không phân biệt. Nói về chị gái thì là **her** room, dù căn phòng không có giới tính.",
          ex: [
            ["Our living room is very bright.", "Phòng khách của chúng tôi rất sáng."],
            ["My brother cleans his room every Sunday.", "Anh trai tôi dọn phòng của anh ấy mỗi Chủ nhật."],
            ["Where is your bathroom?", "Phòng tắm nhà bạn ở đâu?"],
            ["My grandparents love their garden.", "Ông bà tôi rất yêu khu vườn của họ."]
          ] }
      ],
      p: [
        "Tiếng Việt nói “phòng **của** chị tôi”, nhưng tiếng Anh đặt người sở hữu **trước** và thêm **’s**: my sister’s room. Không nói “room of my sister”.",
        "Nếu người sở hữu là danh từ số nhiều đã có đuôi -s, chỉ thêm dấu **’**: my parents’ bedroom.",
        "Khi không nêu tên, dùng tính từ sở hữu my, your, his, her, our, their đứng trước danh từ: Our kitchen is small."
      ],
      ex: [["This is Lan’s room.", "Đây là phòng của Lan."], ["My parents’ bedroom is upstairs.", "Phòng ngủ của bố mẹ tôi ở trên tầng."]]
    },
    { h: "Nhờ vả và đề nghị: Can you, Could you, Shall I, I will",
      f: ["Can you + động từ nguyên mẫu?", "Could you + động từ nguyên mẫu, please?", "Shall I + động từ nguyên mẫu?", "I will + động từ nguyên mẫu"],
      items: [
        { f: "Can you + động từ nguyên mẫu?",
          mean: "**Bạn … giúp tôi được không?**: lời nhờ vả **thân mật**, dùng với người trong nhà và bạn bè.",
          parts: [
            ["Can you", "nghĩa đen là “bạn có thể”, nhưng ở đây là lời nhờ. Giọng tự nhiên, thoải mái."],
            ["động từ nguyên mẫu", "việc cần nhờ: open, close, turn on, help me, pass me…"],
            ["please", "có thể thêm vào cuối câu cho mềm hơn: Can you help me, please?"]
          ],
          use: "nhờ bố mẹ, anh chị em, bạn cùng phòng làm việc nhà. Trả lời đồng ý: **Sure. / OK. / Of course.**",
          note: "Sau can không có to: nói Can you **close** the door?, không nói “Can you to close the door?”.",
          ex: [
            ["Can you open the window?", "Con mở cửa sổ giúp mẹ được không?"],
            ["Can you turn off the TV?", "Em tắt ti vi giúp anh được không?"],
            ["Can you take out the rubbish, please?", "Bạn đổ rác giúp mình nhé?"],
            ["Can you help me with the dishes?", "Bạn rửa bát giúp tôi được không?"]
          ] },
        { f: "Could you + động từ nguyên mẫu, please?",
          mean: "**Phiền bạn … được không ạ?**: lời nhờ vả **lịch sự hơn** Can you.",
          parts: [
            ["Could you", "lịch sự, nhẹ nhàng hơn Can you. Dùng với người lớn tuổi, khách, chủ nhà, người chưa thân."],
            ["động từ nguyên mẫu", "việc cần nhờ, đứng ngay sau Could you."],
            ["please", "thường đặt ở cuối câu để thêm phần lịch sự."]
          ],
          use: "khi ở nhà người khác, nhờ chủ nhà, hàng xóm hoặc người lớn. Trả lời: **Of course. / Sure, no problem.**",
          note: "Ở đây could **không** mang nghĩa quá khứ. Nó chỉ làm lời nhờ nghe nhẹ nhàng hơn.",
          ex: [
            ["Could you show me the bathroom, please?", "Phiền bạn chỉ giúp tôi phòng tắm ở đâu được không?"],
            ["Could you turn down the music, please?", "Phiền bạn vặn nhỏ nhạc xuống được không?"],
            ["Could you close the door, please? It is cold.", "Phiền bạn đóng cửa giúp được không? Trời lạnh quá."],
            ["Could you tell me the Wi-Fi password, please?", "Bạn cho tôi xin mật khẩu Wi-Fi được không?"]
          ] },
        { f: "Shall I + động từ nguyên mẫu?",
          mean: "**Để tôi … nhé?**: hỏi xem người kia có muốn mình giúp làm việc gì không.",
          parts: [
            ["Shall I", "đề nghị giúp đỡ, chờ người kia đồng ý. Chỉ dùng với **I** hoặc **we** (Shall we…? nghĩa là Mình cùng … nhé?)."],
            ["động từ nguyên mẫu", "việc mình đề nghị làm: open, cook, help, wash…"]
          ],
          use: "khi thấy người khác cần giúp và muốn hỏi ý trước. Trả lời: **Yes, please.** (Vâng, cảm ơn) hoặc **No, thank you. I am fine.**",
          note: "Đừng nhầm với Can you: **Can you…?** là mình nhờ người khác, còn **Shall I…?** là mình đề nghị giúp người khác.",
          ex: [
            ["Shall I turn on the fan?", "Để tôi bật quạt nhé?"],
            ["Shall I wash the dishes?", "Để con rửa bát nhé?"],
            ["Shall I open the window? — Yes, please.", "Để tôi mở cửa sổ nhé? — Vâng, cảm ơn."],
            ["Shall we cook dinner together?", "Mình cùng nấu bữa tối nhé?"]
          ] },
        { f: "I will + động từ nguyên mẫu",
          mean: "**Để tôi làm / tôi sẽ làm ngay**: quyết định giúp hoặc tự nhận làm một việc **ngay lúc nói**.",
          parts: [
            ["I will", "**tôi sẽ**, quyết định vừa đưa ra. Khi nói thường rút gọn thành **I’ll**."],
            ["động từ nguyên mẫu", "việc mình nhận làm: get, answer, clean, do…"]
          ],
          use: "khi có việc cần làm và mình xung phong ngay, ví dụ chuông cửa reo, điện thoại kêu. Không hỏi ý người kia như Shall I.",
          note: "So sánh: **Shall I open the door?** (hỏi ý: để tôi mở nhé?) và **I will open the door.** (tôi đi mở luôn). Sau will không có to.",
          ex: [
            ["The phone is ringing. I will answer it.", "Điện thoại đang reo. Để tôi nghe."],
            ["I will clean the kitchen after dinner.", "Sau bữa tối tôi sẽ dọn bếp."],
            ["Don’t worry. I will feed the cat.", "Đừng lo. Để tôi cho mèo ăn."],
            ["I will not be home late tonight.", "Tối nay tôi sẽ không về nhà muộn."]
          ] }
      ],
      p: [
        "**Can you…?** dùng để nhờ người thân, bạn bè một cách thân mật. **Could you…, please?** lịch sự hơn, dùng với người lớn tuổi hoặc người chưa thân.",
        "**Shall I…?** dùng khi bạn hỏi xem mình có nên giúp không (Để tôi… nhé?). **I will** (rút gọn I’ll) dùng khi bạn tự nhận làm ngay lúc đó.",
        "Sau can, could, shall, will luôn là **động từ nguyên mẫu không có to**. Nhớ thêm: dùng **turn on / turn off** cho đồ điện (đèn, quạt, điều hòa), còn cửa thì dùng **open / close**."
      ],
      ex: [["Could you pass me the remote, please?", "Bạn đưa giúp tôi cái điều khiển được không?"], ["Shall I make some tea?", "Để tôi pha trà nhé?"]]
    },
    { h: "Would you like…? để mời khách",
      f: ["Would you like + danh từ?", "Would you like to + động từ nguyên mẫu?"],
      items: [
        { f: "Would you like + danh từ?",
          mean: "**Bạn có muốn dùng … không?**: lời mời lịch sự, mời khách **một món** đồ ăn, đồ uống hoặc một thứ gì đó.",
          parts: [
            ["Would you like", "lịch sự hơn “Do you want”. Dùng với khách, người lớn, người mới quen."],
            ["danh từ", "thứ được mời: some tea, a glass of water, some fruit, a cup of coffee."],
            ["some", "thường đứng trước danh từ trong lời mời, kể cả khi là câu hỏi (Would you like **some** cake?)."]
          ],
          use: "mời đồ ăn, đồ uống khi có khách đến nhà. Trả lời: **Yes, please.** hoặc **No, thank you.**",
          note: "Đừng trả lời “Yes, I like”. Câu hỏi là lời mời nên đáp **Yes, please** hoặc **Yes, I would**.",
          ex: [
            ["Would you like a glass of water?", "Bạn uống một cốc nước nhé?"],
            ["Would you like some fruit?", "Bạn ăn chút hoa quả nhé?"],
            ["Would you like a cushion? The chair is hard.", "Bạn có muốn một cái gối tựa không? Ghế hơi cứng."],
            ["Would you like milk in your coffee? — No, thank you.", "Bạn có muốn cho sữa vào cà phê không? — Không, cảm ơn."]
          ] },
        { f: "Would you like to + động từ nguyên mẫu?",
          mean: "**Bạn có muốn … không?**: lời mời lịch sự để mời ai đó **làm một việc**.",
          parts: [
            ["Would you like", "lời mời lịch sự."],
            ["to", "bắt buộc có khi phía sau là động từ."],
            ["động từ nguyên mẫu", "việc được mời làm: sit down, stay, watch, see, come in…"]
          ],
          use: "mời khách ngồi, ở lại ăn cơm, đi xem nhà, xem phim cùng. Trả lời: **Yes, I would love to.** hoặc **Sorry, I can’t.**",
          note: "Phân biệt với **Do you like…?** (Bạn có thích … không?, hỏi sở thích chung). Would you like to… là mời làm việc đó ngay hoặc sắp tới.",
          ex: [
            ["Would you like to sit down?", "Mời bạn ngồi."],
            ["Would you like to see my new room?", "Bạn có muốn xem phòng mới của tôi không?"],
            ["Would you like to watch a film with us?", "Bạn có muốn xem phim cùng chúng tôi không?"],
            ["Would you like to come in? — Yes, I would love to.", "Bạn vào nhà chơi nhé? — Vâng, rất sẵn lòng."]
          ] }
      ],
      p: [
        "Khi mời khách, **Would you like…?** lịch sự hơn nhiều so với “Do you want…?”. Câu “You want drink?” nghe rất cộc.",
        "Mời một món thì dùng **danh từ** (Would you like some tea?). Mời làm một việc thì dùng **to + động từ nguyên mẫu** (Would you like to stay for dinner?).",
        "Trả lời: **Yes, please.** hoặc **No, thank you. I am fine.**"
      ],
      ex: [["Would you like some tea? — Yes, please.", "Bạn uống trà không? — Có, cảm ơn."], ["Would you like to stay for dinner?", "Bạn ở lại ăn tối nhé?"]]
    }
  ],
  mistakes: [
    ["My house have two bedroom.", "There are two bedrooms in my house.", "Nói “có” cái gì ở đâu thì dùng **There are**; danh từ số nhiều phải thêm **-s**."],
    ["The clock is in the wall.", "The clock is on the wall.", "Tường là một bề mặt nên dùng **on**."],
    ["This is room of my sister.", "This is my sister’s room.", "Dùng sở hữu cách **’s** và đặt người sở hữu lên trước."],
    ["Can you to close the door?", "Can you close the door?", "Sau **can** là động từ nguyên mẫu, không có “to”."],
    ["You want drink?", "Would you like something to drink?", "Mời khách dùng **Would you like…?** cho lịch sự."],
    ["Can you open the light?", "Can you turn on the light?", "Đồ dùng điện dùng **turn on / turn off**; open và close chỉ dùng cho cửa."],
    ["I am going to house.", "I am going home.", "**home** là nơi bạn thuộc về và không cần “to”; house chỉ là ngôi nhà, công trình."]
  ],
  vocab: [
    ["house", "nhà riêng"], ["apartment", "căn hộ"], ["townhouse", "nhà phố, nhà ống"], ["living room", "phòng khách"],
    ["bedroom", "phòng ngủ"], ["kitchen", "bếp"], ["bathroom", "phòng tắm"], ["balcony", "ban công"],
    ["sofa", "ghế sofa"], ["wardrobe", "tủ quần áo"], ["fridge", "tủ lạnh"], ["sink", "bồn rửa"],
    ["rice cooker", "nồi cơm điện"], ["washing machine", "máy giặt"], ["towel", "khăn tắm"], ["drawer", "ngăn kéo"],
    ["cozy", "ấm cúng"], ["bright", "sáng sủa"], ["quiet", "yên tĩnh"], ["noisy", "ồn ào"],
    ["take out the trash", "đổ rác"], ["turn off", "tắt (đồ điện)"], ["landlord", "chủ nhà cho thuê"], ["roommate", "bạn cùng phòng"]
  ],
  tips: [
    "Đi một vòng quanh nhà, chỉ vào từng phòng và từng món đồ rồi gọi tên bằng tiếng Anh.",
    "Mỗi khi tìm đồ, hỏi bằng tiếng Anh “Where is my phone?” và tự trả lời bằng in, on, under, next to.",
    "Nhớ: **house** là ngôi nhà (công trình), **home** là nơi bạn thuộc về. Nói “I am going home” (rút gọn: I’m going home).",
    "Khi có khách, dùng ngay các cụm thân thiện: **Make yourself at home.** (Cứ tự nhiên như ở nhà) và **Help yourself to some fruit.**",
    "Thu âm một phút dẫn một người bạn “đi xem nhà”, dùng There is, There are và các giới từ vị trí."
  ]
};