/* Ngữ pháp nền tảng: Nói về tương lai (will, be going to, hiện tại tiếp diễn, hiện tại đơn, might / may, when / as soon as). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🔮",
  short: "Nói về tương lai",
  hero: ["Nói về tương lai: sẽ, định, đã hẹn", "will · going to · I’m meeting · might · when"],
  desc: "Tiếng Việt chỉ cần thêm chữ “sẽ” là nói được mọi chuyện tương lai, nên người Việt hay dùng **will** cho tất cả. Tiếng Anh có nhiều cách, mỗi cách cho người nghe biết thêm một điều: bạn **vừa mới quyết định** (will), **đã định từ trước** (going to), **đã hẹn với ai đó** (I’m meeting), hay **chưa chắc** (might). Chọn đúng cách nói giúp bạn hẹn hò, lên kế hoạch và từ chối lời mời tự nhiên như người bản xứ.",
  chips: ["will: quyết định, hứa, đoán", "be going to: dự định", "Lịch hẹn và lịch trình", "might / may: chưa chắc", "when / as soon as"],
  goal: [
    "Đưa ra quyết định ngay lúc nói, hứa và đề nghị giúp với **will**: “I’ll have the noodles.”, “I’ll help you.”",
    "Kể kế hoạch cuối tuần, kỳ nghỉ, mục tiêu năm tới với **be going to**: “I’m going to learn to swim.”",
    "Nói về lịch hẹn đã sắp xếp bằng **hiện tại tiếp diễn** và hỏi giờ tàu xe bằng **hiện tại đơn**: “What time does the train leave?”",
    "Trả lời lời mời khi chưa chắc với **might / may**: “I might come, but I’m not sure.”",
    "Nói câu có **when / after / before / as soon as** đúng thì: “I’ll call you **when I arrive**.” và tự chọn cách nói phù hợp với bảng “Chọn cách nói nào?”."
  ],
  sections: [
    { nav: "💬 will", title: "will: quyết định ngay, lời hứa, đề nghị, dự đoán", sub: "will + động từ nguyên mẫu, rút gọn thành ’ll, phủ định là won’t",
      intro: [
        "**will** là cách nói tương lai đơn giản nhất về hình thức: **will + động từ nguyên mẫu**, giống nhau cho mọi chủ ngữ, không thêm -s. Khi nói, người bản xứ rút gọn thành **I’ll, you’ll, she’ll, we’ll**, và phủ định **will not** thành **won’t**.",
        "Nhưng will **không** dùng cho mọi việc tương lai. Nó dùng khi bạn **quyết định ngay lúc đang nói**, khi **hứa**, khi **đề nghị giúp**, và khi **đoán** theo ý kiến riêng (I think…, probably…)."
      ],
      table: { head: ["Loại câu", "Cấu trúc", "Ví dụ", "Nghĩa"], say: [2],
        rows: [
          ["Khẳng định", "chủ ngữ + will (’ll) + động từ nguyên mẫu", "I’ll call you tonight.", "Tối nay tôi sẽ gọi cho bạn."],
          ["Phủ định", "chủ ngữ + will not (won’t) + động từ nguyên mẫu", "I won’t be late.", "Tôi sẽ không đến muộn."],
          ["Câu hỏi", "Will + chủ ngữ + động từ nguyên mẫu?", "Will you be at home?", "Bạn có ở nhà không?"],
          ["Trả lời ngắn", "Yes, chủ ngữ + will. / No, chủ ngữ + won’t.", "Yes, I will. / No, I won’t.", "Có. / Không."]
        ] },
      formulas: [
        { f: "I’ll + động từ nguyên mẫu (quyết định ngay lúc nói)",
          mean: "**để tôi…, vậy tôi sẽ…**: bạn vừa mới nghĩ ra và quyết định trong lúc nói chuyện.",
          parts: [["I’ll have …", "gọi món: I’ll have the beef noodles, please."], ["I’ll take …", "chọn mua: I’ll take the blue one."], ["I’ll + động từ (phản ứng với tình huống)", "The phone is ringing. – I’ll get it. (Để tôi nghe.)"]],
          use: "ở nhà hàng, cửa hàng, khi có việc bất ngờ xảy ra. Trước đó chưa có kế hoạch gì, bạn quyết định **ngay lúc này**.",
          note: "Nếu bạn **đã quyết định từ trước** thì không dùng will mà dùng **going to**. Người bản xứ nghe “I will buy a car next month” sẽ hiểu là bạn vừa mới nghĩ ra.",
          ex: [["I’m thirsty. I think I’ll have an iced tea.", "Tôi khát. Chắc tôi sẽ gọi một cốc trà đá."], ["It’s cold. I’ll close the window.", "Lạnh quá. Để tôi đóng cửa sổ."], ["This shirt is nice. I’ll take it.", "Cái áo này đẹp. Tôi lấy cái này."], ["I won’t have dessert, thanks. I’m full.", "Tôi không ăn tráng miệng đâu, cảm ơn. Tôi no rồi."]] },
        { f: "I’ll … / I won’t … (hứa) — I’ll … / Shall I …? (đề nghị giúp)",
          mean: "**lời hứa** và **lời đề nghị giúp đỡ**.",
          parts: [["I’ll + động từ nguyên mẫu", "hứa làm: I’ll call you when I get home. Có thể thêm **I promise**."], ["I won’t + động từ nguyên mẫu", "hứa không làm: I won’t tell anyone."], ["I’ll help you … / Shall I …?", "đề nghị giúp: I’ll carry that for you. Shall I open the door? (Để tôi mở cửa nhé?)"], ["Will you …?", "nhờ người khác: Will you help me, please?"]],
          use: "khi ai đó lo lắng, khi thấy người khác cần giúp, khi nhờ vả bạn bè, đồng nghiệp.",
          note: "Người Việt hay hứa bằng hiện tại đơn: “I call you tomorrow.” Phải có **will**: “I**’ll** call you tomorrow.”",
          ex: [["Don’t worry. I’ll be there on time, I promise.", "Đừng lo. Tôi sẽ đến đúng giờ, tôi hứa."], ["I won’t forget your birthday this year.", "Năm nay tôi sẽ không quên sinh nhật bạn."], ["Your bag looks heavy. I’ll carry it for you.", "Túi của bạn trông nặng quá. Để tôi xách giúp."], ["Will you send me the photos?", "Bạn gửi ảnh cho tôi nhé?"]] },
        { f: "I think / I’m sure + chủ ngữ + will … — chủ ngữ + will probably …",
          mean: "**dự đoán theo ý kiến riêng**: bạn nghĩ, tin, đoán là sẽ xảy ra.",
          parts: [["I think … will …", "tôi nghĩ là sẽ: I think it will rain."], ["I don’t think … will …", "tôi nghĩ là sẽ không: I don’t think she will come. (tự nhiên hơn “I think she won’t come”)"], ["I’m sure … will …", "chắc chắn: I’m sure you will love Da Lat."], ["will probably / probably won’t", "**có lẽ**: probably đứng **sau will**, nhưng đứng **trước won’t**."]],
          use: "nói về thời tiết, kết quả trận đấu, cuộc sống trong tương lai, động viên người khác (“You’ll pass the exam!”).",
          note: "Vị trí của probably hay bị sai: nói “It will **probably** rain” và “It **probably won’t** rain”, không nói “It probably will rain not”.",
          ex: [["I think Vietnam will win the match.", "Tôi nghĩ Việt Nam sẽ thắng trận này."], ["I don’t think it will be very hot tomorrow.", "Tôi không nghĩ mai trời sẽ nóng lắm."], ["Don’t worry. You’ll pass the interview.", "Đừng lo. Bạn sẽ qua vòng phỏng vấn thôi."], ["The traffic will probably be bad at 6 p.m.", "Sáu giờ chiều có lẽ sẽ tắc đường."]] }
      ],
      mistakes: [
        ["I will to call you tomorrow.", "I’ll call you tomorrow.", "Sau will là **động từ nguyên mẫu không có to**."],
        ["She wills come to the party.", "She will come to the party.", "will giống nhau với mọi chủ ngữ, **không thêm -s**, và động từ sau nó cũng không thêm -s."],
        ["I call you tonight, I promise.", "I’ll call you tonight, I promise.", "Lời hứa về tương lai cần **will**."]
      ],
      talk: { title: "TÌNH HUỐNG: GỌI MÓN Ở QUÁN CÀ PHÊ", turns: [
        ["A", "Are you ready to order?", "Anh chị gọi món chưa ạ?"],
        ["B", "Yes. I’ll have a coconut coffee, please.", "Rồi. Cho tôi một cà phê cốt dừa."],
        ["A", "And for you, madam?", "Còn chị dùng gì ạ?"],
        ["C", "Hmm… I’ll try the mango smoothie. I don’t think I’ll have any cake.", "Ừm… Tôi sẽ thử sinh tố xoài. Chắc tôi không ăn bánh đâu."],
        ["B", "It’s my treat today. I’ll pay.", "Hôm nay tôi mời. Để tôi trả."],
        ["C", "Thank you! I’ll pay next time, I promise.", "Cảm ơn bạn! Lần sau mình trả, mình hứa."]
      ] },
      tip: "will = **quyết định trong lúc nói**. Mẹo: nếu câu có thể bắt đầu bằng “À, vậy thì…”, “Để tôi…”, “Tôi hứa…”, “Tôi nghĩ là…” thì dùng **will**." },

    { nav: "🗓️ be going to", title: "be going to: dự định có từ trước, dự đoán có dấu hiệu", sub: "am / is / are + going to + động từ nguyên mẫu",
      intro: [
        "**be going to** dùng khi bạn **đã quyết định từ trước**, đã nghĩ về nó, đã có kế hoạch trong đầu: kế hoạch cuối tuần, kỳ nghỉ, mục tiêu năm tới. Đây là cách người bản xứ hay dùng nhất khi kể về dự định.",
        "Nó còn dùng để dự đoán khi bạn **nhìn thấy dấu hiệu ngay trước mắt**: mây đen thì sắp mưa, xe chạy quá nhanh thì sắp tông. Phần **be** (am / is / are) phải chia theo chủ ngữ, đây là chỗ người Việt hay quên."
      ],
      formulas: [
        { f: "chủ ngữ + am / is / are + going to + động từ nguyên mẫu",
          mean: "**định, dự định, sắp**: kế hoạch đã có trong đầu từ trước lúc nói.",
          parts: [["I am (I’m) going to …", "I’m going to visit my grandparents."], ["he / she / it is (’s) going to …", "She’s going to start a new job."], ["you / we / they are (’re) going to …", "We’re going to stay at home."], ["going to go → going to + nơi chốn", "khi nói nhanh, “going to go to the beach” thường rút thành “**going to the beach**”."]],
          use: "kể kế hoạch cuối tuần, kỳ nghỉ, dự định học tập, công việc, mục tiêu năm mới. Thường đi với **this weekend, next week, next year, after work, in the summer**.",
          note: "Người Việt hay bỏ am / is / are: “I going to buy a car.” Câu đúng phải có be: “I **am** going to buy a car.” Và sau going to là **động từ nguyên mẫu**, không thêm -ing.",
          ex: [["I’m going to learn to drive this year.", "Năm nay tôi định học lái xe."], ["My sister is going to get married in December.", "Chị gái tôi sẽ cưới vào tháng Mười Hai."], ["We’re going to spend Tet in Hue.", "Chúng tôi định ăn Tết ở Huế."], ["They are going to open a small café.", "Họ định mở một quán cà phê nhỏ."]] },
        { f: "am / is / are + not going to … — Are you going to …? — What are you going to …?",
          mean: "**phủ định và câu hỏi** về dự định.",
          parts: [["I’m not / she isn’t / we aren’t going to …", "không định: I’m not going to buy a new phone this year."], ["Are you going to …?", "hỏi có định không: Are you going to travel this summer? – Yes, I am. / No, I’m not."], ["What / Where / When are you going to …?", "hỏi chi tiết kế hoạch: What are you going to do this weekend?"]],
          use: "hỏi bạn bè, đồng nghiệp về kế hoạch: đầu tuần hỏi về cuối tuần, cuối năm hỏi về năm mới, trước kỳ nghỉ hỏi đi đâu.",
          note: "Trả lời ngắn lặp lại **am / is / are**: “Are you going to come?” – “Yes, I **am**.” (không nói “Yes, I will” hay “Yes, I do”).",
          ex: [["What are you going to do this weekend?", "Cuối tuần này bạn định làm gì?"], ["I’m not going to do anything. I’m going to relax.", "Tôi không định làm gì cả. Tôi sẽ nghỉ ngơi."], ["Is your brother going to study abroad?", "Anh trai bạn có định đi du học không?"], ["Where are you going to stay in Da Lat?", "Ở Đà Lạt bạn định ở đâu?"]] },
        { f: "Look! + chủ ngữ + am / is / are + going to … (dự đoán có dấu hiệu)",
          mean: "**sắp … rồi**: bạn thấy bằng chứng ngay bây giờ nên đoán điều sắp xảy ra.",
          parts: [["going to (có dấu hiệu)", "Look at those black clouds. It’s going to rain. (thấy mây đen)"], ["will (theo ý kiến)", "I think it will rain tomorrow. (chỉ là suy nghĩ, chưa thấy gì)"]],
          use: "cảnh báo, bình luận điều đang thấy: trời sắp mưa, xe buýt sắp đi, trẻ con sắp ngã, mình sắp muộn.",
          note: "Người Việt dùng “sắp” cho cả hai. Hỏi lại mình: **có thấy dấu hiệu không?** Có → going to. Chỉ là ý kiến → will.",
          ex: [["Look at the sky! It’s going to rain.", "Nhìn trời kìa! Sắp mưa rồi."], ["Hurry up! We’re going to miss the bus.", "Nhanh lên! Mình sắp lỡ xe buýt rồi."], ["Be careful! You’re going to fall.", "Cẩn thận! Con sắp ngã đấy."], ["It’s 8:55. I’m going to be late for work.", "8 giờ 55 rồi. Tôi sắp muộn làm."]] }
      ],
      mistakes: [
        ["I going to visit Hue next month.", "I am going to visit Hue next month.", "Phải có **am / is / are** trước going to."],
        ["She is going to visiting her parents.", "She is going to visit her parents.", "Sau going to là **động từ nguyên mẫu**."],
        ["Look at those clouds! It will rain.", "Look at those clouds! It’s going to rain.", "Có dấu hiệu nhìn thấy (mây đen) → **going to**."]
      ],
      talk: { title: "TÌNH HUỐNG: HỎI KẾ HOẠCH KỲ NGHỈ TẾT", turns: [
        ["A", "Are you going to go back to your hometown for Tet?", "Tết này bạn có định về quê không?"],
        ["B", "Yes, I am. I’m going to take the train to Nghe An.", "Có. Mình định đi tàu về Nghệ An."],
        ["A", "How long are you going to stay there?", "Bạn định ở đó bao lâu?"],
        ["B", "About a week. My family is going to make bánh chưng together. What about you?", "Khoảng một tuần. Cả nhà mình định cùng gói bánh chưng. Còn bạn?"],
        ["A", "I’m not going to travel. I’m going to stay in Saigon and rest.", "Mình không định đi đâu. Mình sẽ ở lại Sài Gòn nghỉ ngơi."]
      ] },
      tip: "**going to = đã có kế hoạch trong đầu**. Nếu bạn nói được “Tôi định…”, “Tôi đã tính là…” thì dùng **am / is / are going to**. Đừng quên phần **am / is / are**!" },

    { nav: "📅 Lịch hẹn và lịch trình", title: "Hiện tại tiếp diễn cho lịch hẹn, hiện tại đơn cho lịch trình", sub: "I’m meeting Lan at 7. — The train leaves at 8.",
      intro: [
        "Có hai thì “hiện tại” mà lại dùng để nói tương lai. **Hiện tại tiếp diễn** (am / is / are + động từ thêm -ing) dùng cho **lịch hẹn đã sắp xếp** với người khác: đã hẹn giờ, đã đặt vé, đã mua vé. Trong lịch của bạn đã có ghi.",
        "**Hiện tại đơn** dùng cho **lịch trình cố định** do người khác đặt ra, không phải do bạn quyết định: giờ tàu chạy, giờ máy bay cất cánh, giờ phim bắt đầu, giờ cửa hàng mở cửa."
      ],
      formulas: [
        { f: "chủ ngữ + am / is / are + động từ thêm -ing + thời gian tương lai",
          mean: "**lịch hẹn đã sắp xếp**: đã hẹn với ai đó, đã đặt chỗ, có giờ hoặc ngày cụ thể.",
          parts: [["I’m meeting / seeing …", "hẹn gặp ai: I’m meeting a client at 10 tomorrow."], ["I’m having …", "có một sự kiện: I’m having dinner with my parents tonight."], ["We’re flying / going …", "đã đặt vé: We’re flying to Phu Quoc on Friday."], ["Are you doing anything …?", "cách hỏi rảnh hay bận rất tự nhiên: Are you doing anything on Saturday?"]],
          use: "hẹn gặp, từ chối lời mời vì đã có hẹn (“Sorry, I’m working on Sunday.”), hỏi lịch của người khác. Câu phải có **thời gian tương lai** (tonight, tomorrow, on Friday) để không nhầm với việc đang làm.",
          note: "Người Việt hay nói “I meet my friend tomorrow.” (hiện tại đơn). Với lịch hẹn cá nhân, dùng **I’m meeting**. Nói **going to** cũng được, nhưng hiện tại tiếp diễn cho thấy việc **đã sắp xếp xong**.",
          ex: [["I’m meeting Lan at the cinema at 7 tonight.", "Tối nay 7 giờ tôi hẹn gặp Lan ở rạp phim."], ["We’re having a party on Saturday. Can you come?", "Thứ Bảy chúng tôi tổ chức tiệc. Bạn đến được không?"], ["Sorry, I can’t. I’m working on Sunday.", "Xin lỗi, tôi không đi được. Chủ nhật tôi phải làm."], ["Are you doing anything after work tomorrow?", "Mai tan làm bạn có bận gì không?"]] },
        { f: "chủ ngữ + động từ hiện tại đơn + giờ (lịch trình cố định)",
          mean: "**theo lịch, theo thời gian biểu**: giờ giấc do nhà ga, sân bay, rạp phim, trường học đặt ra.",
          parts: [["leave / depart", "rời đi: The train leaves at 8."], ["arrive", "đến nơi: The flight arrives at 10:30."], ["start / begin", "bắt đầu: The film starts at 7:45."], ["open / close", "mở cửa / đóng cửa: The museum opens at 8 tomorrow."]],
          use: "hỏi và nói giờ tàu xe, máy bay, phim, lớp học, giờ mở cửa: “What time does the bus leave?” Nhớ thêm **-s** với chủ ngữ số ít.",
          note: "Không nói “The train will leave at 8” khi đọc lịch tàu; dùng hiện tại đơn **leaves**. Và câu hỏi cần **does**: “What time **does** the film **start**?”",
          ex: [["The train to Hue leaves at 8 a.m.", "Tàu đi Huế chạy lúc 8 giờ sáng."], ["What time does the film start?", "Phim bắt đầu lúc mấy giờ?"], ["Our flight arrives in Hanoi at 10:30.", "Chuyến bay của chúng ta đến Hà Nội lúc 10 giờ 30."], ["The supermarket doesn’t open until 9 tomorrow.", "Ngày mai siêu thị 9 giờ mới mở cửa."]] }
      ],
      mistakes: [
        ["I meet my boss tomorrow at 9.", "I’m meeting my boss tomorrow at 9.", "Lịch hẹn cá nhân đã sắp xếp → **hiện tại tiếp diễn**."],
        ["What time the bus leaves?", "What time does the bus leave?", "Câu hỏi hiện tại đơn cần **does**, và động từ sau does không thêm -s."],
        ["The film will start at 8 p.m. (đọc từ vé xem phim)", "The film starts at 8 p.m.", "Giờ theo lịch cố định → **hiện tại đơn**."]
      ],
      talk: { title: "TÌNH HUỐNG: HẸN GẶP BẠN", turns: [
        ["A", "Are you doing anything on Saturday evening?", "Tối thứ Bảy bạn có bận gì không?"],
        ["B", "Yes, I’m having dinner with my family. Why?", "Có, mình ăn tối với gia đình. Sao thế?"],
        ["A", "There is a jazz concert. It starts at 8.", "Có một buổi hòa nhạc jazz. Bắt đầu lúc 8 giờ."],
        ["B", "Hmm, dinner finishes at 7:30, so I can come after that.", "Ừm, bữa tối xong lúc 7 rưỡi, nên sau đó mình đến được."],
        ["A", "Great! I’m meeting Nam at the gate at 7:45. Join us!", "Tuyệt! Mình hẹn Nam ở cổng lúc 7 giờ 45. Đi cùng nhé!"]
      ] },
      tip: "Có **người hẹn** hoặc **vé đã đặt** → I’m meeting, I’m flying. Có **bảng giờ** của nhà ga, rạp phim → leaves, starts. Hãy tưởng tượng: lịch hẹn nằm trong **sổ tay của bạn**, lịch trình nằm trên **bảng thông báo**." },

    { nav: "🤔 might / may", title: "might / may: có lẽ, chưa chắc chắn", sub: "Khi bạn chưa quyết định hoặc không chắc điều gì sẽ xảy ra",
      intro: [
        "Rất nhiều chuyện tương lai ta **chưa chắc**: có thể đi, có thể không. Người Việt hay dùng will với “chắc là”, nhưng tiếng Anh có từ riêng cho ý này: **might** và **may** (có lẽ, có thể). Cả hai đi với **động từ nguyên mẫu**, giống nhau với mọi chủ ngữ.",
        "might và may gần như cùng nghĩa khi nói về khả năng. Khi nói chuyện hằng ngày, **might** phổ biến hơn; **may** nghe trang trọng hơn một chút. Một cách nói khác rất hay gặp là **maybe** đứng đầu câu kèm will: “Maybe I’ll go.”"
      ],
      formulas: [
        { f: "chủ ngữ + might / may + động từ nguyên mẫu",
          mean: "**có lẽ sẽ, có thể sẽ**: khoảng năm mươi phần trăm, chưa chắc chắn.",
          parts: [["might", "có lẽ: I might go to the beach this weekend. Hay dùng nhất khi nói chuyện."], ["may", "có thể: It may rain this afternoon. Hơi trang trọng hơn, hay gặp trong dự báo, thông báo."], ["Maybe + chủ ngữ + will …", "cùng ý: Maybe I’ll go to the beach. maybe đứng **đầu câu**, là một từ riêng."], ["will (so sánh)", "chắc chắn hơn nhiều: I will go. → tôi sẽ đi."]],
          use: "trả lời lời mời khi chưa quyết định, nói kế hoạch còn phân vân, dự đoán thời tiết, giá cả. Thường nói thêm lý do: “I might come, but I have to work late.”",
          note: "Không thêm to và không thêm -s: không nói “She mights come” hay “I might to go”. Cũng đừng viết “may be” (hai từ) khi muốn nói “có lẽ” ở đầu câu; đó là **maybe**.",
          ex: [["I might go to Vung Tau this weekend.", "Cuối tuần này có lẽ tôi sẽ đi Vũng Tàu."], ["Take an umbrella. It may rain later.", "Mang ô theo đi. Lát nữa có thể trời mưa."], ["My parents might visit us at Christmas.", "Bố mẹ tôi có thể sẽ đến thăm chúng tôi dịp Giáng sinh."], ["Maybe I’ll change my job next year.", "Có lẽ năm sau tôi sẽ đổi việc."]] },
        { f: "chủ ngữ + might not / may not + động từ nguyên mẫu",
          mean: "**có lẽ sẽ không, có thể không**.",
          parts: [["might not", "có lẽ không: I might not come tonight. Thường không rút gọn khi nói."], ["may not", "có thể không: The shop may not be open on Sunday."], ["Hỏi về khả năng", "không hỏi bằng “Might you…?”; hỏi bằng **Are you going to…?** hoặc **Do you think you will…?**, rồi trả lời “I might.”"]],
          use: "từ chối nhẹ nhàng, báo trước có thể vắng mặt, có thể muộn: “I might not be at the meeting.”",
          note: "Câu trả lời ngắn rất tự nhiên cho lời mời là “**I might.**” hoặc “**Maybe.**” Nhưng nhớ nói thêm một câu cho lịch sự: “I might. I’ll tell you tomorrow.”",
          ex: [["I might not be home for dinner tonight.", "Tối nay có lẽ tôi không về ăn cơm."], ["He may not know the answer.", "Có thể anh ấy không biết câu trả lời."], ["Are you going to the party? — I might. I’m not sure yet.", "Bạn có đi tiệc không? — Có lẽ. Tôi chưa chắc."], ["We might not have time to visit the museum.", "Có lẽ chúng ta không có thời gian đi bảo tàng."]] }
      ],
      mistakes: [
        ["I might to go to the party.", "I might go to the party.", "Sau might là **động từ nguyên mẫu không có to**."],
        ["She mights come late.", "She might come late.", "might không bao giờ thêm **-s**."],
        ["May be I will go to Da Lat.", "Maybe I will go to Da Lat.", "“Có lẽ” ở đầu câu là **maybe** (một từ)."]
      ],
      talk: { title: "TÌNH HUỐNG: RỦ ĐI CHƠI KHI CHƯA CHẮC", turns: [
        ["A", "We’re going to Ninh Binh on Sunday. Do you want to come?", "Chủ nhật bọn mình đi Ninh Bình. Bạn có muốn đi không?"],
        ["B", "I might. But my boss may ask me to work on Sunday.", "Có thể. Nhưng sếp có thể bắt mình làm việc Chủ nhật."],
        ["A", "When will you know?", "Khi nào bạn biết?"],
        ["B", "Probably on Friday. I might not be free, but I’ll try.", "Chắc là thứ Sáu. Có lẽ mình không rảnh, nhưng mình sẽ cố."],
        ["A", "OK. Let me know. The bus leaves at 6 a.m.!", "Được. Báo mình nhé. Xe chạy lúc 6 giờ sáng đấy!"]
      ] },
      tip: "Tưởng tượng một thang đo: **will** (chắc chắn) → **will probably** (khá chắc) → **might / may** (năm mươi phần trăm) → **probably won’t** (chắc là không) → **won’t** (chắc chắn không)." },

    { nav: "🧭 Chọn cách nói", title: "when, as soon as… và bảng “Chọn cách nói nào?”", sub: "Sau when / after / before / as soon as dùng hiện tại đơn, không dùng will",
      intro: [
        "Câu nói về tương lai thường có hai phần: “Tôi **sẽ gọi** cho bạn **khi tôi đến nơi**.” Phần chính dùng will (hoặc going to, câu mệnh lệnh), nhưng phần sau **when, after, before, as soon as, until** lại dùng **hiện tại đơn**, dù ý là tương lai. Người Việt hay đặt will vào cả hai phần, đây là lỗi rất phổ biến.",
        "Bảng dưới gom tất cả cách nói tương lai trong bài. Khi muốn nói một câu, hãy tự hỏi: **mình muốn nói điều gì?** rồi tìm hàng tương ứng."
      ],
      table: { head: ["Bạn muốn nói gì?", "Dùng", "Ví dụ", "Nghĩa"], say: [2],
        rows: [
          ["Quyết định **ngay lúc nói**", "will", "I’ll have the chicken rice, please.", "Cho tôi cơm gà."],
          ["**Hứa** hoặc **đề nghị giúp**", "will / won’t", "I’ll help you with your bags.", "Để tôi xách đồ giúp bạn."],
          ["**Đoán theo ý kiến** (I think, probably)", "will", "I think she will like the present.", "Tôi nghĩ cô ấy sẽ thích món quà."],
          ["**Dự định** đã có từ trước", "be going to", "I’m going to learn Korean next year.", "Năm sau tôi định học tiếng Hàn."],
          ["**Đoán có dấu hiệu** trước mắt", "be going to", "Look at the clouds! It’s going to rain.", "Nhìn mây kìa! Sắp mưa rồi."],
          ["**Lịch hẹn** đã sắp xếp với người khác", "hiện tại tiếp diễn", "I’m meeting my teacher at 4 tomorrow.", "Mai 4 giờ tôi gặp cô giáo."],
          ["**Lịch trình cố định** (tàu xe, phim, giờ mở cửa)", "hiện tại đơn", "The bus leaves at 6:30.", "Xe buýt chạy lúc 6 giờ 30."],
          ["**Chưa chắc**, có thể", "might / may", "I might go out tonight.", "Tối nay có lẽ tôi đi chơi."],
          ["Sau **when / after / before / as soon as**", "hiện tại đơn", "I’ll call you when I arrive.", "Tôi sẽ gọi bạn khi tôi đến nơi."]
        ] },
      formulas: [
        { f: "will / going to + …, when / as soon as + chủ ngữ + hiện tại đơn",
          mean: "**sẽ … khi / ngay khi …**: hai việc trong tương lai, việc này xảy ra lúc việc kia xảy ra.",
          parts: [["when", "**khi**: I’ll call you when I get home."], ["as soon as", "**ngay khi**, rất nhanh sau đó: I’ll reply as soon as I see your message."], ["until", "**cho đến khi**: I’ll wait here until you come."], ["Thứ tự", "có thể đảo phần when lên đầu, thêm dấu phẩy: When I get home, I’ll call you."]],
          use: "hứa liên lạc, dặn dò, hẹn hò: báo tin khi đến nơi, trả lời ngay khi biết kết quả, chờ đến khi ai đó tới.",
          note: "Sau when, as soon as **không dùng will**, dù tiếng Việt có chữ “sẽ”: không nói “when I will arrive”, nói “**when I arrive**”. Nhớ thêm -s cho he / she: “when she **gets** home”.",
          ex: [["I’ll call you when I arrive in Da Nang.", "Tôi sẽ gọi bạn khi tôi đến Đà Nẵng."], ["As soon as I get the results, I’ll tell you.", "Ngay khi có kết quả, tôi sẽ báo bạn."], ["We’ll wait here until the rain stops.", "Chúng ta sẽ đợi ở đây cho đến khi tạnh mưa."], ["When does your shift end? I’ll pick you up when it ends.", "Ca làm của bạn mấy giờ xong? Khi xong tôi sẽ đón bạn."]] },
        { f: "before / after + chủ ngữ + hiện tại đơn, chủ ngữ + will / going to …",
          mean: "**trước khi / sau khi …** làm một việc trong tương lai.",
          parts: [["before", "**trước khi**: I’ll finish my work before I leave."], ["after", "**sau khi**: After I graduate, I’m going to work in Saigon."], ["before / after + động từ thêm -ing", "cách ngắn khi hai phần cùng chủ ngữ: Call me before leaving. After finishing, …"]],
          use: "nói về thứ tự kế hoạch: sau khi tốt nghiệp, trước khi đi du lịch, sau khi tan làm.",
          note: "Người Việt hay nói “After I will finish university…”. Sau after / before dùng **hiện tại đơn**: “After I **finish** university, I’m going to travel.”",
          ex: [["After I finish work, I’m going to the gym.", "Sau khi tan làm, tôi sẽ đi tập gym."], ["Please call me before you leave.", "Hãy gọi cho tôi trước khi bạn đi."], ["After she graduates, she is going to study in Japan.", "Sau khi tốt nghiệp, cô ấy định đi học ở Nhật."], ["I won’t buy a car before I save enough money.", "Tôi sẽ không mua ô tô trước khi tiết kiệm đủ tiền."]] },
        { f: "will hay going to? — đã nghĩ từ trước hay vừa mới nghĩ ra?",
          mean: "**cùng một việc, khác nhau ở thời điểm quyết định**.",
          parts: [["going to: đã có kế hoạch", "A: Why are you buying flour? — B: I’m going to make a cake. (đã định từ trước)"], ["will: vừa quyết định", "A: We don’t have any dessert. — B: Oh, I’ll make a cake! (vừa nghĩ ra)"], ["hiện tại tiếp diễn: đã sắp xếp với người khác", "I’m meeting the baker at 9. (đã hẹn)"]],
          use: "kiểm tra nhanh trước khi nói về kế hoạch. Nếu không chắc, **going to** cho dự định là lựa chọn an toàn nhất khi kể kế hoạch.",
          note: "Câu trả lời cho “What are you going to do this weekend?” nên dùng **going to** hoặc **hiện tại tiếp diễn**, không trả lời “I will…” vì bạn đã có kế hoạch từ trước.",
          ex: [["I’m going to visit my aunt this weekend. I bought the ticket yesterday.", "Cuối tuần này tôi định đi thăm dì. Hôm qua tôi đã mua vé rồi."], ["Oh, you’re cold? I’ll get you a jacket.", "Ồ, bạn lạnh à? Để tôi lấy áo khoác cho bạn."], ["Are you going to apply for that job?", "Bạn có định nộp đơn vào công việc đó không?"], ["I’m not going to cook tonight. I’ll order some food.", "Tối nay tôi không định nấu. Để tôi đặt đồ ăn."]] }
      ],
      mistakes: [
        ["I will call you when I will arrive.", "I will call you when I arrive.", "Sau **when** dùng **hiện tại đơn**, không dùng will."],
        ["As soon as she will finish, she will text you.", "As soon as she finishes, she will text you.", "Sau **as soon as** dùng hiện tại đơn, nhớ thêm **-es** với she."],
        ["What are you going to do this weekend? — I will visit my grandmother.", "I’m going to visit my grandmother.", "Kế hoạch đã có từ trước → **going to** (hoặc I’m visiting)."]
      ],
      talk: { title: "TÌNH HUỐNG: NÓI VỀ MỤC TIÊU NĂM TỚI", turns: [
        ["A", "Have you made any plans for next year?", "Bạn đã có kế hoạch gì cho năm tới chưa?"],
        ["B", "Yes. I’m going to take an IELTS course. It starts in January.", "Có. Mình định học một khóa IELTS. Khóa học bắt đầu vào tháng Một."],
        ["A", "Great! What will you do after you finish it?", "Tuyệt! Học xong bạn sẽ làm gì?"],
        ["B", "I might apply for a job at an international company. When I get a good score, I’ll decide.", "Có lẽ mình sẽ nộp đơn vào một công ty nước ngoài. Khi có điểm tốt, mình sẽ quyết định."],
        ["A", "I’m sure you’ll do well. Tell me as soon as you get the results!", "Mình chắc là bạn sẽ làm tốt. Có kết quả thì báo mình ngay nhé!"],
        ["B", "I will, I promise!", "Mình sẽ báo, mình hứa!"]
      ] },
      tip: "Sau **when, after, before, as soon as, until**: “cắt bỏ will”. Câu chính giữ will, phần thời gian dùng hiện tại đơn: “I’ll call you **when I arrive**.”" }
  ],
  speak: [
    { q: "What are you going to do this weekend?", vi: "Cuối tuần này bạn định làm gì?", hint: "Kế hoạch đã có → **I’m going to + động từ nguyên mẫu**; lịch hẹn với người khác → **I’m meeting / I’m having …**",
      answers: [["I’m going to clean my flat on Saturday, and I’m meeting my friends for coffee on Sunday.", "Thứ Bảy tôi định dọn căn hộ, và Chủ nhật tôi hẹn bạn bè đi cà phê."], ["I’m not going to do much. I’m going to sleep late and watch films.", "Tôi không định làm gì nhiều. Tôi sẽ ngủ nướng và xem phim."]] },
    { q: "Where are you going to go on your next holiday?", vi: "Kỳ nghỉ tới bạn định đi đâu?", hint: "Dùng **I’m going to go to / visit …**; nếu chưa chắc → **I might go to …**",
      answers: [["I’m going to visit Ha Giang with my cousins. We’re going to ride motorbikes.", "Tôi định đi Hà Giang với mấy anh chị họ. Chúng tôi sẽ đi xe máy."], ["I don’t know yet. I might go to Phu Quoc, or I might stay at home.", "Tôi chưa biết. Có lẽ tôi đi Phú Quốc, hoặc có lẽ ở nhà."]] },
    { q: "What is one goal you have for next year?", vi: "Bạn có mục tiêu gì cho năm tới?", hint: "Mục tiêu đã nghĩ kỹ → **I’m going to …**; thêm một câu **When / After I …, I’ll …**",
      answers: [["I’m going to save money for a new laptop. When I have enough money, I’ll buy one.", "Tôi định tiết kiệm tiền mua máy tính xách tay mới. Khi đủ tiền, tôi sẽ mua."], ["I’m going to run a half marathon. After I finish it, I’ll celebrate with my friends.", "Tôi định chạy bán marathon. Sau khi chạy xong, tôi sẽ ăn mừng với bạn bè."]] },
    { q: "Are you doing anything tomorrow evening? Shall we meet?", vi: "Tối mai bạn có bận gì không? Mình gặp nhau nhé?", hint: "Đã có hẹn → **Sorry, I’m + động từ thêm -ing …**; rảnh → **No, I’m free. Where shall we meet?**",
      answers: [["Sorry, I’m having dinner with my parents. How about Friday?", "Xin lỗi, tôi ăn tối với bố mẹ. Thứ Sáu thì sao?"], ["No, I’m free. Let’s meet at the café near my office at 7.", "Không, tôi rảnh. Mình gặp ở quán cà phê gần văn phòng tôi lúc 7 giờ nhé."]] },
    { q: "Do you think it will rain tomorrow?", vi: "Bạn nghĩ mai trời có mưa không?", hint: "Ý kiến → **I think it will … / I don’t think it will …**; chưa chắc → **It might …**",
      answers: [["I think it will rain in the afternoon. It is the rainy season.", "Tôi nghĩ chiều mai trời sẽ mưa. Đang là mùa mưa mà."], ["I don’t think it will rain, but it might be very hot.", "Tôi không nghĩ trời sẽ mưa, nhưng có thể sẽ rất nóng."]] },
    { q: "What will you do as soon as you get home today?", vi: "Hôm nay về đến nhà việc đầu tiên bạn sẽ làm là gì?", hint: "Dùng **As soon as I get home, I’ll …** (phần as soon as dùng hiện tại đơn).",
      answers: [["As soon as I get home, I’ll take a shower and cook dinner.", "Về đến nhà là tôi sẽ đi tắm rồi nấu cơm."], ["I’ll play with my son as soon as I get home.", "Về đến nhà là tôi sẽ chơi với con trai."]] },
    { q: "What time does your English class start? How will you get there?", vi: "Lớp tiếng Anh của bạn bắt đầu lúc mấy giờ? Bạn sẽ đến đó bằng gì?", hint: "Lịch cố định → **It starts at …** (hiện tại đơn); cách đi → **I’m going to take / I’ll take …**",
      answers: [["It starts at 7 p.m. I’m going to take the bus after work.", "Lớp bắt đầu lúc 7 giờ tối. Tan làm tôi sẽ đi xe buýt."], ["My class starts at 8:30 on Saturday. I’ll ride my motorbike.", "Lớp tôi bắt đầu lúc 8 giờ 30 sáng thứ Bảy. Tôi sẽ đi xe máy."]] },
    { q: "Your friend says: “I forgot my wallet!” What do you say?", vi: "Bạn của bạn nói: “Mình quên ví rồi!” Bạn sẽ nói gì?", hint: "Đề nghị giúp, quyết định ngay → **Don’t worry. I’ll …**",
      answers: [["Don’t worry. I’ll pay for you today.", "Đừng lo. Hôm nay để tôi trả cho."], ["No problem. I’ll lend you some money. You can pay me back tomorrow.", "Không sao. Tôi sẽ cho bạn mượn ít tiền. Mai trả tôi cũng được."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền dạng đúng", items: [
      { q: "Look at those black clouds! It ___ (rain).", a: ["is going to rain", "'s going to rain"], hint: "có dấu hiệu" },
      { q: "I ___ (call) you when I ___ (arrive).", a: ["will call arrive", "'ll call arrive", "will call, arrive", "'ll call, arrive"], hint: "gõ hai phần, cách nhau bởi dấu cách" },
      { q: "We ___ (not / go) to the beach this weekend. We have no time.", a: ["are not going to go", "aren't going to go", "'re not going to go"], hint: "dùng be going to" },
      { q: "The train to Hue ___ (leave) at 8 a.m. tomorrow.", a: ["leaves"], hint: "lịch trình cố định" },
      { q: "As soon as she ___ (finish) work, she will text you.", a: ["finishes"], hint: "sau as soon as" },
      { q: "“The phone is ringing.” — “I ___ (get) it.”", a: ["will get", "'ll get"], hint: "quyết định ngay lúc nói" },
      { q: "I ___ (meet) my manager at 10 tomorrow. It is in my calendar.", a: ["am meeting", "'m meeting"], hint: "lịch hẹn đã sắp xếp" },
      { q: "I’m not sure, but I ___ go to the party. (có lẽ)", a: ["might", "may"], hint: "chưa chắc" }
    ] },
    { title: "Phần 2: Chọn cách nói đúng", items: [
      { q: "Bạn đã mua vé máy bay đi Đà Lạt tuần trước. Bạn nói:", options: ["I will go to Da Lat next month.", "I’m going to Da Lat next month.", "I go to Da Lat next month."], a: 1, why: "Kế hoạch đã sắp xếp, đã có vé → **hiện tại tiếp diễn** (hoặc going to)." },
      { q: "Người phục vụ hỏi bạn gọi món gì. Bạn vừa xem thực đơn:", options: ["I’m going to have the fish soup.", "I’ll have the fish soup, please.", "I have the fish soup."], a: 1, why: "Quyết định **ngay lúc nói** → **I’ll have …**" },
      { q: "Chọn câu đúng:", options: ["After I will graduate, I will work in Saigon.", "After I graduate, I will work in Saigon.", "After I graduated, I will work in Saigon."], a: 1, why: "Sau **after** dùng **hiện tại đơn** cho ý tương lai." },
      { q: "Bạn không chắc tối nay có đi chơi không:", options: ["I might go out tonight.", "I might to go out tonight.", "I will go out tonight."], a: 0, why: "Chưa chắc → **might + động từ nguyên mẫu**, không có to." },
      { q: "Hỏi giờ chiếu phim:", options: ["What time will the film start?", "What time the film starts?", "What time does the film start?"], a: 2, why: "Lịch trình cố định → **hiện tại đơn** với **does**." },
      { q: "Bạn đoán theo ý kiến riêng (chưa thấy dấu hiệu gì):", options: ["I think Vietnam will win.", "I think Vietnam is winning tomorrow.", "Vietnam wins, I think, tomorrow."], a: 0, why: "Dự đoán theo ý kiến với **I think** → **will**." },
      { q: "“Are you going to come to my birthday party?” — Trả lời ngắn đúng:", options: ["Yes, I do.", "Yes, I am.", "Yes, I going."], a: 1, why: "Câu hỏi với **are … going to** → trả lời **Yes, I am**." }
    ] }
  ],
  vocab: [["will (’ll) / won’t", "sẽ / sẽ không"], ["I think … will / I don’t think … will", "tôi nghĩ sẽ / không nghĩ sẽ"], ["probably", "có lẽ (khá chắc)"], ["be going to", "định, sắp"], ["Are you doing anything on …?", "… bạn có bận gì không?"], ["leave / arrive / start / open", "rời đi / đến / bắt đầu / mở cửa (lịch trình)"], ["might / may", "có lẽ, có thể"], ["maybe", "có lẽ (đứng đầu câu)"], ["when", "khi"], ["as soon as", "ngay khi"], ["before / after", "trước khi / sau khi"], ["until", "cho đến khi"], ["I promise.", "Tôi hứa."], ["Shall I …?", "Để tôi … nhé?"]],
  tips: [
    "Tối Chủ nhật, nói to kế hoạch tuần tới: ba câu **I’m going to …**, hai câu **I’m meeting / I’m having …** cho các buổi hẹn.",
    "Mỗi lần định nói “I will…”, dừng một giây và hỏi mình: **vừa nghĩ ra** hay **đã định từ trước**? Đã định thì đổi sang **going to**.",
    "Khi nhận lời mời mà chưa chắc, tập trả lời “**I might. I’ll tell you tomorrow.**” thay vì chỉ nói “Maybe”.",
    "Đọc to bảng giờ tàu xe hoặc lịch chiếu phim bằng hiện tại đơn: “The bus **leaves** at 6:30. The film **starts** at 8.”",
    "Luyện câu mẫu “**I’ll call you when I arrive.**” cho đến khi quen tai, để không bao giờ nói “when I will arrive”."
  ]
};
