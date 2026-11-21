/* Cheat sheet: Clothes (Nói về quần áo). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên quần áo, giày dép và phụ kiện, dùng đúng a pair of với quần, giày, tất.",
    "Mô tả quần áo bằng màu, họa tiết, chất liệu theo đúng thứ tự tính từ.",
    "Nói hôm nay bạn đang mặc gì và thường mặc gì, phân biệt wear, put on, take off.",
    "Khuyên người khác nên mặc gì theo thời tiết và theo dịp bằng should.",
    "Khen trang phục của người khác và phân biệt fit, suit, go with."
  ],
  phrases: [
    { h: "Nói hôm nay mặc gì", rows: [
      ["What are you wearing today?", "Hôm nay bạn mặc gì?"],
      ["I am wearing a white shirt and black trousers.", "Tôi đang mặc áo sơ mi trắng và quần âu đen.", "Khi nói thường rút gọn: I’m wearing (I’m = I am)."],
      ["She is wearing a yellow dress.", "Cô ấy đang mặc váy vàng.", "Dạng rút gọn: She’s (She’s = She is)."],
      ["He is the man in the blue jacket.", "Anh ấy là người mặc áo khoác xanh.", "Dùng **the + người + in the + màu + món đồ** để chỉ ai đó trong đám đông."],
      ["I usually wear a uniform to work.", "Tôi thường mặc đồng phục đi làm."]
    ]},
    { h: "Mặc vào, cởi ra, thay đồ", rows: [
      ["Put on your jacket. It is cold.", "Mặc áo khoác vào. Trời lạnh đấy.", "Dạng rút gọn: It’s cold (It’s = It is)."],
      ["Please take off your shoes.", "Vui lòng cởi giày ra."],
      ["I get dressed after breakfast.", "Tôi mặc quần áo sau bữa sáng."],
      ["I need to change before the party.", "Tôi cần thay đồ trước khi đi tiệc."]
    ]},
    { h: "Mặc theo thời tiết và theo dịp", rows: [
      ["When it is hot, I wear shorts.", "Trời nóng, tôi mặc quần đùi."],
      ["When it rains, I wear a raincoat.", "Trời mưa, tôi mặc áo mưa."],
      ["What should I wear to the party?", "Tôi nên mặc gì đi tiệc?"],
      ["You should wear something comfortable.", "Bạn nên mặc đồ gì thoải mái."],
      ["You should not wear shorts to the temple.", "Bạn không nên mặc quần đùi đi chùa.", "Khi nói thường rút gọn: shouldn’t (shouldn’t = should not)."]
    ]},
    { h: "Khen trang phục", rows: [
      ["I like your shirt!", "Mình thích áo của bạn!"],
      ["You look great today.", "Hôm nay trông bạn đẹp lắm."],
      ["That color suits you.", "Màu đó hợp với bạn."],
      ["Your bag goes well with your shoes.", "Túi của bạn hợp với đôi giày."],
      ["Where did you get it? — Thank you! It was a gift.", "Bạn mua ở đâu vậy? — Cảm ơn! Đó là quà được tặng."]
    ]},
    { h: "Mô tả màu, họa tiết và chất liệu", rows: [
      ["My favorite color is light blue.", "Màu tôi thích nhất là xanh nhạt."],
      ["a white cotton T-shirt", "một cái áo phông cotton trắng", "Màu đứng trước chất liệu."],
      ["a nice big blue striped shirt", "một cái áo sơ mi kẻ sọc màu xanh, cỡ to, rất đẹp"],
      ["Is it silk? — No, it is cotton.", "Có phải lụa không? — Không, cotton thôi.", "Dạng rút gọn: it’s cotton (it’s = it is)."]
    ]}
  ],
  grammar: [
    { h: "a pair of cho đồ có hai phần",
      f: ["a pair of + danh từ số nhiều", "two pairs of + danh từ số nhiều"],
      items: [
        { f: "a pair of + danh từ số nhiều",
          mean: "**một chiếc (quần), một đôi (giày, tất), một cặp (kính)**: cách đếm **một** món đồ gồm hai phần giống nhau.",
          parts: [
            ["a pair of", "**một đôi, một cặp**. Chữ được đếm là pair, nên động từ chia theo pair (số ít): A pair of jeans **is** 300,000 dong."],
            ["danh từ số nhiều", "món đồ luôn ở số nhiều: jeans, trousers, shorts, shoes, socks, sandals, glasses, gloves."]
          ],
          use: "khi mua, kể hoặc đếm một món đồ có hai ống, hai chiếc. Rất hay dùng khi đi mua sắm: I would like a pair of…",
          note: "Không nói “a jean”, “a trouser”, “a shoe” khi muốn nói cả chiếc quần hay cả đôi giày. Nếu không đếm thì nói thẳng số nhiều: **My jeans are** blue.",
          ex: [
            ["I want to buy a pair of sandals.", "Tôi muốn mua một đôi dép xăng-đan."],
            ["She is wearing a pair of black trousers.", "Cô ấy đang mặc một chiếc quần âu màu đen."],
            ["This pair of shoes is too small for me.", "Đôi giày này quá nhỏ so với tôi."],
            ["Do you have a pair of sunglasses?", "Bạn có kính râm không?"]
          ] },
        { f: "two pairs of + danh từ số nhiều",
          mean: "**hai (ba, bốn…) chiếc quần, đôi giày, đôi tất**: đếm từ hai món trở lên.",
          parts: [
            ["số đếm", "two, three, four… hoặc **How many** khi hỏi."],
            ["pairs", "pair thêm **-s** vì có nhiều đôi. Động từ chia số nhiều: Two pairs of socks **are**…"],
            ["of + danh từ số nhiều", "món đồ giữ nguyên dạng số nhiều, không đổi."]
          ],
          use: "kể số lượng quần, giày, tất mình có hoặc muốn mua. Hỏi số lượng: **How many pairs of** shoes do you have?",
          note: "Đừng quên **-s** ở pairs: “two pair of shoes” là lỗi hay gặp.",
          ex: [
            ["I have two pairs of sneakers.", "Tôi có hai đôi giày thể thao."],
            ["He bought three pairs of shorts for the trip.", "Anh ấy đã mua ba chiếc quần soóc cho chuyến đi."],
            ["How many pairs of jeans do you have?", "Bạn có bao nhiêu chiếc quần bò?"],
            ["Five pairs of socks are 100,000 dong.", "Năm đôi tất giá một trăm nghìn đồng."]
          ] }
      ],
      p: [
        "Quần (jeans, trousers, shorts), giày (shoes, sneakers), tất (socks) và kính (glasses) có hai ống hoặc hai chiếc, nên trong tiếng Anh chúng **luôn ở dạng số nhiều** và đi với động từ số nhiều: My new shoes are very comfortable.",
        "Muốn đếm, không nói “a jean” hay “one sock” mà dùng **a pair of** (một chiếc quần, một đôi giày) hoặc **two pairs of**. Lúc này chữ pair mới là chữ được đếm.",
        "Tương tự, **clothes** (quần áo) luôn là số nhiều. Muốn nói một món, dùng **a piece of clothing** hoặc gọi đúng tên món đó."
      ],
      ex: [["I need a pair of socks.", "Tôi cần một đôi tất."], ["She has three pairs of jeans.", "Cô ấy có ba chiếc quần bò."]]
    },
    { h: "Thứ tự tính từ trước danh từ",
      f: ["ý kiến → kích cỡ → màu → họa tiết hoặc chất liệu → món đồ"],
      items: [
        { f: "ý kiến → kích cỡ → màu → họa tiết hoặc chất liệu → món đồ",
          mean: "**thứ tự cố định của nhiều tính từ** khi cùng tả một món quần áo. Tất cả tính từ đứng **trước** món đồ.",
          parts: [
            ["ý kiến", "cảm nhận của người nói: beautiful (đẹp), nice (xinh), lovely (dễ thương), ugly (xấu), comfortable (thoải mái)."],
            ["kích cỡ", "độ dài, độ rộng: long (dài), short (ngắn), big (to), small (nhỏ), tight (bó), loose (rộng)."],
            ["màu", "red, blue, black, white, dark green (xanh lá đậm), light blue (xanh nhạt)."],
            ["họa tiết hoặc chất liệu", "họa tiết: striped (kẻ sọc), checked (kẻ ô), floral (in hoa). Chất liệu: cotton, silk (lụa), wool (len), leather (da), denim (vải bò). Đứng **sát món đồ nhất**."],
            ["món đồ", "shirt, dress, jacket, skirt, scarf… luôn đứng cuối."]
          ],
          use: "tả trang phục của mình hoặc người khác, khi mua sắm hoặc kể chuyện. Trong giao tiếp thường chỉ dùng hai hoặc ba tính từ, nhưng vẫn giữ đúng thứ tự.",
          note: "Mẹo nhớ: **Ý – Cỡ – Màu – Chất – Đồ**. Ý kiến luôn đứng xa món đồ nhất, chất liệu luôn đứng gần nhất.",
          ex: [
            ["She is wearing a lovely blue floral dress.", "Cô ấy đang mặc một chiếc váy hoa xanh dương rất dễ thương."],
            ["I like this long black wool coat.", "Tôi thích chiếc áo khoác len đen dài này."],
            ["He has a nice white cotton shirt.", "Anh ấy có một chiếc áo sơ mi cotton trắng đẹp."],
            ["Do you have a small brown leather bag?", "Bạn có chiếc túi da nâu nhỏ nào không?"]
          ] }
      ],
      p: [
        "Tiếng Việt đặt tính từ **sau** danh từ (áo sơ mi trắng), còn tiếng Anh đặt tính từ **trước** danh từ (a white shirt). Khi có nhiều tính từ, chúng phải theo một thứ tự cố định thì người bản xứ mới thấy tự nhiên.",
        "Thứ tự là: **ý kiến** (beautiful, nice) → **kích cỡ** (long, big) → **màu** (red) → **họa tiết hoặc chất liệu** (striped, silk) → **món đồ**. Ví dụ: a beautiful long red silk dress.",
        "Chất liệu (cotton, silk, wool, leather) luôn đứng sát món đồ nhất, nên nói a white cotton shirt chứ không nói a cotton white shirt."
      ],
      ex: [["a beautiful long red silk dress", "một chiếc váy lụa đỏ dài rất đẹp"], ["comfortable black leather shoes", "đôi giày da đen thoải mái"]]
    },
    { h: "wear, put on, take off, get dressed",
      f: ["wear + món đồ (trạng thái đang mặc)", "put on + món đồ (hành động mặc vào)", "take off + món đồ (hành động cởi ra)"],
      items: [
        { f: "wear + món đồ (trạng thái đang mặc)",
          mean: "**mặc, đội, đeo, đi** (đang có trên người): chỉ **trạng thái**, không phải động tác mặc vào.",
          parts: [
            ["wear", "dùng cho mọi thứ trên người: quần áo, giày, mũ, kính, đồng hồ, trang sức. Tiếng Việt chia thành mặc, đội, đeo, đi nhưng tiếng Anh chỉ cần **wear**."],
            ["wore / worn", "dạng quá khứ là **wore**, quá khứ phân từ (cột thứ ba của động từ) là **worn**."]
          ],
          use: "nói ai đó đang mặc gì hoặc thường mặc gì. Món đồ đứng ngay sau wear, không cần giới từ.",
          note: "Người Việt hay nói “I wear my jacket” khi đang khoác áo vào. Lúc đó phải dùng **put on**. wear chỉ dùng khi áo đã ở trên người rồi.",
          ex: [
            ["My father wears glasses.", "Bố tôi đeo kính."],
            ["I do not wear a tie to work.", "Tôi không thắt cà vạt đi làm."],
            ["She always wears a watch.", "Cô ấy luôn đeo đồng hồ."],
            ["Do students wear a uniform at your school?", "Ở trường bạn học sinh có mặc đồng phục không?"]
          ] },
        { f: "put on + món đồ (hành động mặc vào)",
          mean: "**mặc vào, đội vào, đi vào**: chỉ **động tác** đưa quần áo, giày, mũ lên người, xảy ra trong một khoảnh khắc.",
          parts: [
            ["put on", "động từ hai chữ. Quá khứ vẫn là **put on** (không đổi)."],
            ["vị trí món đồ", "có thể đứng sau on (put on your coat) hoặc giữa put và on (put your coat on). Nếu là **it** hoặc **them** thì bắt buộc đứng giữa: put **it** on."]
          ],
          use: "nhắc ai đó mặc thêm đồ, kể quá trình chuẩn bị ra ngoài, hoặc khi thử đồ trong cửa hàng.",
          note: "Không nói “put on it”, phải nói **put it on**. Ngược nghĩa với put on là **take off**.",
          ex: [
            ["It is raining. Put on your raincoat.", "Trời đang mưa. Mặc áo mưa vào."],
            ["She put on her new dress for the party.", "Cô ấy mặc chiếc váy mới để đi tiệc."],
            ["Wait a minute. I am putting on my shoes.", "Đợi một chút. Tôi đang đi giày."],
            ["I like this jacket. Can I put it on?", "Tôi thích chiếc áo khoác này. Tôi mặc thử được không?"]
          ] },
        { f: "take off + món đồ (hành động cởi ra)",
          mean: "**cởi ra, tháo ra**: động tác bỏ quần áo, giày, mũ, kính ra khỏi người.",
          parts: [
            ["take off", "động từ hai chữ. Quá khứ là **took off**."],
            ["vị trí món đồ", "giống put on: take off your shoes hoặc take your shoes off; với it hoặc them thì nói take **it** off."]
          ],
          use: "khi vào nhà, vào chùa, vào phòng thử đồ, hoặc khi trời nóng. Ngược nghĩa với put on.",
          note: "Ở Việt Nam thường phải cởi giày khi vào nhà. Câu mời lịch sự: **Could you take off your shoes, please?**",
          ex: [
            ["Please take off your hat in the temple.", "Vui lòng bỏ mũ ra khi vào chùa."],
            ["It is hot. I am going to take off my jacket.", "Nóng quá. Tôi sẽ cởi áo khoác ra."],
            ["He took off his shoes at the door.", "Anh ấy đã cởi giày ở cửa."],
            ["Do I need to take my shoes off?", "Tôi có cần cởi giày ra không?"]
          ] }
      ],
      p: [
        "**wear** chỉ **trạng thái** đang mặc hoặc hay mặc: I usually wear jeans. **put on** chỉ **hành động** mặc vào trong một khoảnh khắc: Put on your jacket. Người Việt hay dùng wear cho cả hai nghĩa.",
        "**take off** là cởi ra (giày, áo khoác, mũ). **get dressed** là mặc quần áo nói chung để chuẩn bị đi đâu đó, không cần nêu món đồ. **change** là thay đồ."
      ],
      ex: [["Put on your jacket. It is cold.", "Mặc áo khoác vào. Trời lạnh đấy."], ["Please take off your shoes.", "Vui lòng cởi giày ra."]]
    },
    { h: "Hiện tại đơn và hiện tại tiếp diễn với wear",
      f: ["chủ ngữ + wear hoặc wears (thói quen)", "chủ ngữ + am / is / are + wearing (ngay lúc này)"],
      items: [
        { f: "chủ ngữ + wear hoặc wears (thói quen)",
          mean: "**thường mặc, hay mặc**: thì hiện tại đơn, nói về thói quen ăn mặc hằng ngày hoặc điều luôn đúng.",
          parts: [
            ["wear", "dùng với I, you, we, they: I **wear**, they **wear**."],
            ["wears", "dùng với he, she, it hoặc một người: she **wears**, my mother **wears**."],
            ["do not / does not wear", "câu phủ định. Sau does not, động từ quay về **wear** (không thêm -s)."]
          ],
          use: "nói về trang phục đi làm, đi học, mặc ở nhà, hoặc phong cách quen thuộc. Hay đi với **usually, always, often, sometimes, never, every day, at work**.",
          note: "Câu hỏi dùng Do hoặc Does: **Does** she **wear** a uniform? (không nói “Does she wears”).",
          ex: [
            ["I usually wear a T-shirt and shorts at home.", "Ở nhà tôi thường mặc áo phông và quần soóc."],
            ["My mother often wears an ao dai on Tet.", "Mẹ tôi thường mặc áo dài vào dịp Tết."],
            ["He does not wear jeans to work.", "Anh ấy không mặc quần bò đi làm."],
            ["What do you usually wear at the weekend?", "Cuối tuần bạn thường mặc gì?"]
          ] },
        { f: "chủ ngữ + am / is / are + wearing (ngay lúc này)",
          mean: "**đang mặc**: thì hiện tại tiếp diễn, tả trang phục của ai đó **hôm nay, ngay lúc này**.",
          parts: [
            ["am", "dùng với **I**: I am wearing."],
            ["is", "dùng với **he, she, it** hoặc một người: She is wearing."],
            ["are", "dùng với **you, we, they** hoặc nhiều người: They are wearing."],
            ["wearing", "wear thêm -ing."]
          ],
          use: "tả người trong ảnh, chỉ người khác (cô gái mặc váy đỏ), hoặc kể hôm nay mình mặc gì. Hay đi với **now, today, Look!, at the moment**.",
          note: "So sánh: **She wears glasses** (cô ấy bị cận, lúc nào cũng đeo) và **She is wearing sunglasses** (hôm nay, lúc này cô ấy đang đeo kính râm). Đừng quên am, is, are trước wearing.",
          ex: [
            ["Today I am wearing a white shirt and black trousers.", "Hôm nay tôi mặc áo sơ mi trắng và quần âu đen."],
            ["The man in the photo is wearing a cap.", "Người đàn ông trong ảnh đang đội mũ lưỡi trai."],
            ["They are not wearing coats. Are they cold?", "Họ không mặc áo khoác. Họ có lạnh không?"],
            ["What are you wearing to the party tonight?", "Tối nay bạn mặc gì đi tiệc?"]
          ] }
      ],
      p: [
        "Nói về thói quen, việc mặc thường ngày, dùng **thì hiện tại đơn**: I usually wear sneakers. Với he, she nhớ thêm -s: She wears a uniform.",
        "Nói về trang phục **ngay lúc này**, hôm nay, dùng **thì hiện tại tiếp diễn**: Today I am wearing sandals. Khi có các từ như Look!, now, today thì gần như luôn dùng wearing."
      ],
      ex: [["I usually wear sneakers.", "Tôi thường đi giày thể thao."], ["Look! She is wearing a beautiful dress.", "Nhìn kìa! Cô ấy đang mặc một chiếc váy đẹp."]]
    },
    { h: "should và should not để khuyên nên mặc gì",
      f: ["chủ ngữ + should + động từ nguyên mẫu", "chủ ngữ + should not + động từ nguyên mẫu", "What should I wear to + nơi chốn hoặc dịp?"],
      items: [
        { f: "chủ ngữ + should + động từ nguyên mẫu",
          mean: "**nên làm gì đó**: đưa ra lời khuyên nhẹ nhàng, không bắt buộc.",
          parts: [
            ["should", "**nên**. Giống nhau với mọi chủ ngữ, không thêm -s (she should, không nói she shoulds)."],
            ["động từ nguyên mẫu", "đứng ngay sau, không có to: wear, bring, buy, try on."]
          ],
          use: "khuyên bạn bè nên mặc gì cho hợp thời tiết, hợp dịp. Có thể mở đầu bằng **I think you should…** để nghe mềm hơn.",
          note: "**should** là lời khuyên, còn **must** là bắt buộc. Khuyên chọn quần áo thì dùng should cho lịch sự.",
          ex: [
            ["You should wear comfortable shoes for the trip.", "Bạn nên đi giày thoải mái cho chuyến đi."],
            ["I think you should try on the blue shirt.", "Tôi nghĩ bạn nên mặc thử chiếc áo sơ mi xanh."],
            ["She should bring a scarf. It is windy in Da Lat.", "Cô ấy nên mang khăn quàng. Đà Lạt nhiều gió lắm."],
            ["We should buy warm clothes before winter.", "Chúng ta nên mua quần áo ấm trước mùa đông."]
          ] },
        { f: "chủ ngữ + should not + động từ nguyên mẫu",
          mean: "**không nên làm gì đó**: lời khuyên tránh một việc.",
          parts: [
            ["should not", "**không nên**. Dạng rút gọn hay dùng khi nói: **shouldn’t**."],
            ["động từ nguyên mẫu", "việc cần tránh: wear, bring, buy."]
          ],
          use: "nhắc ai đó tránh trang phục không phù hợp: đi chùa, đi phỏng vấn, đi đám cưới, đi trời mưa.",
          note: "Không nói “should not to wear” hay “don’t should”. Chỉ cần thêm **not** sau should.",
          ex: [
            ["You should not wear shorts to the temple.", "Bạn không nên mặc quần soóc khi đi chùa."],
            ["You should not wear white to a Vietnamese wedding. It is for the bride.", "Bạn không nên mặc màu trắng đi đám cưới ở Việt Nam. Màu đó dành cho cô dâu."],
            ["He should not wear jeans to the job interview.", "Anh ấy không nên mặc quần bò đi phỏng vấn xin việc."],
            ["You should not buy this coat. It is too big.", "Bạn không nên mua chiếc áo khoác này. Nó rộng quá."]
          ] },
        { f: "What should I wear to + nơi chốn hoặc dịp?",
          mean: "**Tôi nên mặc gì đi …?**: câu hỏi xin lời khuyên về trang phục cho một nơi hoặc một dịp.",
          parts: [
            ["What", "**gì**, hỏi về món đồ."],
            ["should I", "đảo should lên trước chủ ngữ để thành câu hỏi. Có thể đổi I thành we hoặc he, she."],
            ["wear", "động từ nguyên mẫu."],
            ["to + nơi chốn hoặc dịp", "to the party, to the wedding, to work, to the interview, to the beach."]
          ],
          use: "khi sắp đi đâu đó và chưa biết mặc gì cho phù hợp. Câu trả lời thường dùng **You should wear…**",
          note: "Nói “mặc đi đâu” dùng **wear to**, không dùng “wear for” với nơi chốn. Với thời tiết có thể hỏi: What should I wear **in** this weather?",
          ex: [
            ["What should I wear to the wedding?", "Tôi nên mặc gì đi đám cưới?"],
            ["What should I wear to my first day at work?", "Ngày đầu đi làm tôi nên mặc gì?"],
            ["What should we wear to the beach party?", "Chúng ta nên mặc gì đi tiệc bãi biển?"],
            ["What should she wear to the interview? — She should wear a smart shirt.", "Cô ấy nên mặc gì đi phỏng vấn? — Cô ấy nên mặc một chiếc áo sơ mi lịch sự."]
          ] }
      ],
      p: [
        "**should** dùng để đưa ra lời khuyên nhẹ nhàng: “nên”. **should not** (rút gọn shouldn’t) là “không nên”. Rất hữu ích khi bạn bè hỏi nên mặc gì đi tiệc, đi phỏng vấn hay đi chùa.",
        "Sau should luôn là **động từ nguyên mẫu không có to**. Không nói “should to wear”.",
        "Muốn hỏi xin lời khuyên, đảo should lên trước chủ ngữ: What should I wear to the party?"
      ],
      ex: [["You should wear a hat in the sun.", "Bạn nên đội mũ khi ra nắng."], ["You should bring a warm coat.", "Bạn nên mang áo khoác ấm."]]
    },
    { h: "fit, suit và go with",
      f: ["món đồ + fit + người (vừa kích cỡ)", "màu hoặc kiểu + suit + người (hợp với người)", "món đồ + go with + món đồ khác (hợp với nhau)"],
      items: [
        { f: "món đồ + fit + người (vừa kích cỡ)",
          mean: "**vừa (người nào đó)**: chỉ nói về **kích cỡ**, không chật cũng không rộng.",
          parts: [
            ["fit", "**vừa, vừa vặn**. Với một món đồ số ít thì thêm -s: The shirt **fits** me. Với jeans, shoes (số nhiều) thì giữ nguyên: The shoes **fit** me."],
            ["người", "đứng ngay sau fit, không có giới từ: fit me, fit you, fit her."],
            ["do not fit", "**không vừa** (chật hoặc rộng)."]
          ],
          use: "khi thử đồ trong cửa hàng hoặc nói về quần áo cũ không còn vừa. Có thể thêm **perfectly** (vừa khít) hoặc **well**.",
          note: "Không nói “fit with me”. Muốn khen màu đẹp thì dùng **suit**, không dùng fit.",
          ex: [
            ["This dress fits me perfectly.", "Chiếc váy này vừa khít với tôi."],
            ["My old jeans do not fit me now.", "Chiếc quần bò cũ giờ không vừa với tôi nữa."],
            ["Does the jacket fit you?", "Áo khoác có vừa với bạn không?"],
            ["These shoes fit well. I will take them.", "Đôi giày này vừa lắm. Tôi sẽ lấy đôi này."]
          ] },
        { f: "màu hoặc kiểu + suit + người (hợp với người)",
          mean: "**hợp với (người nào đó)**, làm người đó trông đẹp: nói về **màu sắc hoặc kiểu dáng**.",
          parts: [
            ["suit", "**hợp, tôn lên**. Chủ ngữ số ít thêm -s: Red **suits** you."],
            ["màu hoặc kiểu", "chủ ngữ: Blue, This colour, Short hair, This style."],
            ["người", "đứng ngay sau suit, không có giới từ: suits you, suits her."]
          ],
          use: "khen ai đó mặc đẹp, hoặc góp ý màu nào không hợp. Câu khen rất phổ biến: **That colour really suits you!**",
          note: "Đừng nhầm danh từ **suit** (bộ com-lê) với động từ **suit** (hợp với). Và đừng dùng fit để khen màu.",
          ex: [
            ["Pink really suits you.", "Màu hồng rất hợp với bạn."],
            ["Long skirts do not suit me.", "Váy dài không hợp với tôi."],
            ["This style suits my brother.", "Kiểu này hợp với anh trai tôi."],
            ["Do you think this colour suits me?", "Bạn có nghĩ màu này hợp với tôi không?"]
          ] },
        { f: "món đồ + go with + món đồ khác (hợp với nhau)",
          mean: "**hợp với, ăn ý với (món đồ khác)**: hai món đồ phối với nhau đẹp.",
          parts: [
            ["go with", "**hợp với**. Chủ ngữ số ít dùng **goes with**; số nhiều dùng **go with**."],
            ["go well with", "**rất hợp với**, thêm well để nhấn mạnh."],
            ["match", "nghĩa gần giống go with, không có giới từ: This bag **matches** your shoes."]
          ],
          use: "khi phối đồ: chọn túi, giày, thắt lưng, khăn hợp với bộ quần áo. Sau go with là món đồ khác, không phải người.",
          note: "Phân biệt ba từ: **fit** là vừa kích cỡ với người, **suit** là hợp với người, **go with** là hợp với món đồ khác.",
          ex: [
            ["This red bag goes with your dress.", "Chiếc túi đỏ này hợp với váy của bạn."],
            ["Brown shoes go well with blue jeans.", "Giày nâu rất hợp với quần bò xanh."],
            ["Does this tie go with my shirt?", "Cà vạt này có hợp với áo sơ mi của tôi không?"],
            ["That belt does not go with your trousers.", "Thắt lưng đó không hợp với quần của bạn."]
          ] }
      ],
      p: [
        "Ba từ này đều dịch là “vừa” hoặc “hợp” nên người Việt hay dùng lẫn. **fit** chỉ nói về **kích cỡ**: These jeans fit me perfectly (vừa khít).",
        "**suit** nói về việc màu sắc hoặc kiểu dáng **hợp với người** mặc: Red really suits you. Vì thế khen màu thì dùng suit, không dùng fit.",
        "**go with** (hoặc match) nói một món đồ **hợp với món đồ khác**: This belt goes with your shoes."
      ],
      ex: [["These jeans fit me perfectly.", "Chiếc quần bò này vừa khít với tôi."], ["It goes well with your white sneakers.", "Nó hợp với đôi giày trắng của bạn."]]
    }
  ],
  mistakes: [
    ["I bought a new jean.", "I bought a new pair of jeans.", "jeans luôn số nhiều; muốn đếm dùng **a pair of**."],
    ["a cotton white shirt", "a white cotton shirt", "Màu đứng **trước** chất liệu; chất liệu đứng sát món đồ."],
    ["Look! She wears a beautiful dress now.", "Look! She is wearing a beautiful dress.", "Trang phục ngay lúc này dùng **thì hiện tại tiếp diễn**."],
    ["You should to wear a coat.", "You should wear a coat.", "Sau **should** là động từ nguyên mẫu, không có to."],
    ["This color fits you.", "This color suits you.", "Hợp màu hoặc hợp kiểu dùng **suit**; fit chỉ nói về kích cỡ."],
    ["Wear your jacket. It is cold.", "Put on your jacket. It is cold.", "Hành động mặc vào dùng **put on**; wear chỉ trạng thái đang mặc."],
    ["Your clothes is beautiful.", "I love your outfit!", "**clothes** luôn số nhiều (clothes are); khen cả bộ đồ thì dùng **outfit** nghe tự nhiên hơn."]
  ],
  vocab: [
    ["T-shirt", "áo phông"], ["shirt", "áo sơ mi"], ["jacket", "áo khoác"], ["coat", "áo khoác dày"],
    ["jeans", "quần bò"], ["trousers", "quần dài, quần âu"], ["dress", "váy liền"], ["skirt", "chân váy"],
    ["shorts", "quần đùi"], ["sneakers", "giày thể thao"], ["socks", "tất"], ["scarf", "khăn quàng"],
    ["striped", "kẻ sọc"], ["checked", "kẻ ô caro"], ["plain", "trơn, một màu"], ["cotton", "vải bông"],
    ["silk", "lụa"], ["leather", "da"], ["casual", "thường ngày, thoải mái"], ["formal", "trang trọng"],
    ["tight", "chật, bó"], ["loose", "rộng, thùng thình"], ["outfit", "bộ trang phục"], ["uniform", "đồng phục"]
  ],
  tips: [
    "Mở tủ quần áo và gọi tên từng món bằng tiếng Anh, nhớ nói “a pair of” với quần, giày, tất.",
    "Mỗi sáng nói một câu “Today I am wearing…” (rút gọn: Today I’m wearing…) với đủ màu và chất liệu.",
    "Khi khen, nói cả ba ý: “I love your outfit! That green really suits you, and it goes well with your bag.”",
    "Học các câu tự nhiên như **It is not really my style** (không hợp gu tôi lắm; rút gọn: It’s not) và **Does this look okay on me?**",
    "Thu âm một phút mô tả bộ đồ bạn thích nhất và bạn mặc nó vào dịp nào."
  ]
};
