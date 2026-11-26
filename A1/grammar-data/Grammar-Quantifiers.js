/* Ngữ pháp nền tảng: Từ chỉ số lượng (some, any, much, many, a few, a little, enough). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🧺",
  short: "Some, any, much, many",
  hero: ["Nói về số lượng", "some · any · much · many · a few · enough"],
  desc: "Tiếng Việt chỉ cần “một ít”, “nhiều”, “không có” cho mọi thứ. Tiếng Anh thì chọn từ theo hai câu hỏi: danh từ **đếm được hay không đếm được**, và câu đang **khẳng định, phủ định hay hỏi**. Nắm bài này, bạn có thể đi chợ, nấu ăn, mời khách, hỏi giá và mô tả khu phố của mình bằng tiếng Anh.",
  chips: ["some và any", "something, anyone…", "much và many", "a few và a little", "too much, enough"],
  goal: [
    "Mời và xin đồ ăn thức uống lịch sự: “Would you like **some** tea?”, “Can I have **some** water?”",
    "Hỏi và trả lời có hay không có: “Is there **any** milk?” – “No, there is **no** milk.”",
    "Hỏi số lượng và giá tiền: “**How many** eggs?”, “**How much** is it?”",
    "Mô tả khu phố, thành phố: “There are **a lot of** motorbikes”, “There is **not much** traffic.”",
    "Than phiền và góp ý: “There are **too many** people”, “We do not have **enough** chairs.”"
  ],
  sections: [
    { nav: "🍚 some và any", title: "some và any, no và not any", sub: "Có một ít, không có chút nào, có … không?",
      intro: [
        "**some** và **any** đều nghĩa là “một vài, một ít”, dùng với **danh từ số nhiều** (some eggs) và **danh từ không đếm được** (some rice). Điều quyết định chọn từ nào là **loại câu**: khẳng định dùng some, phủ định và câu hỏi dùng any.",
        "Ngoại lệ quan trọng: khi **mời** hoặc **xin** một thứ gì đó, câu hỏi vẫn dùng **some**, vì bạn mong người kia nói “có”."
      ],
      table: { head: ["Loại câu", "Danh từ số nhiều", "Danh từ không đếm được", "Nghĩa"],
        say: [1, 2],
        rows: [
          ["Khẳng định", "I have some eggs.", "I have some rice.", "tôi có một ít"],
          ["Phủ định", "I do not have any eggs.", "I do not have any rice.", "tôi không có chút nào"],
          ["Phủ định với no", "I have no eggs.", "I have no rice.", "tôi không có (động từ khẳng định)"],
          ["Câu hỏi thường", "Do you have any eggs?", "Do you have any rice?", "bạn có … không?"],
          ["Lời mời, lời xin", "Would you like some eggs?", "Can I have some rice?", "mời, xin một ít"]
        ] },
      formulas: [
        { f: "some + danh từ số nhiều / danh từ không đếm được (câu khẳng định)",
          mean: "**một vài, một ít**: không nói rõ bao nhiêu, chỉ biết là có.",
          parts: [["some + danh từ số nhiều", "một vài: some apples, some friends, some books."], ["some + danh từ không đếm được", "một ít: some water, some money, some time."], ["some đứng một mình", "thay cho danh từ đã nhắc: “I made a cake. Do you want **some**?”"]],
          use: "kể mình có gì, mua gì, cần gì: “I bought some vegetables”, “There are some shops on my street.”",
          note: "Với danh từ đếm được **số ít** thì không dùng some mà dùng **a / an**: a banana, nhưng some bananas.",
          ex: [["I bought some vegetables at the market.", "Tôi mua một ít rau ở chợ."], ["There are some good restaurants on my street.", "Trên phố tôi có vài nhà hàng ngon."], ["I need some money for the bus.", "Tôi cần ít tiền đi xe buýt."], ["We have some time before the film.", "Chúng ta còn ít thời gian trước khi phim chiếu."]] },
        { f: "not … any / no + danh từ; Do you have any …?",
          mean: "**không có chút nào** (phủ định) và **có … không?** (câu hỏi thường).",
          parts: [["do not / does not / is not / are not + any", "phủ định thông thường, dùng nhiều nhất khi nói: I do not have **any** money."], ["no + danh từ (động từ khẳng định)", "nghĩa giống not any nhưng mạnh hơn: I have **no** money. Không dùng hai từ phủ định cùng lúc."], ["any trong câu hỏi", "hỏi có hay không, chưa biết câu trả lời: Do you have **any** questions?"]],
          use: "kiểm tra tủ lạnh, hỏi trong cửa hàng, nói mình không có gì. Sau any là danh từ số nhiều hoặc không đếm được.",
          note: "Người Việt hay nói “I have not some money”. Phủ định đổi some thành **any**: “I do not have **any** money.” Và không nói “I do not have no money” (hai lần phủ định).",
          ex: [["We do not have any eggs.", "Nhà mình hết trứng rồi."], ["There is no milk in the fridge.", "Trong tủ lạnh không có sữa."], ["Do you have any brothers or sisters?", "Bạn có anh chị em không?"], ["Are there any good cafés near here?", "Gần đây có quán cà phê nào ngon không?"]] },
        { f: "Would you like some …? / Can I have some …?",
          mean: "**mời và xin**: câu hỏi nhưng vẫn dùng some vì người nói mong câu trả lời là “có”.",
          parts: [["Would you like some …?", "mời khách lịch sự: Would you like **some** tea?"], ["Can I have some …? / Could I have some …?", "xin một ít: Can I have **some** water, please?"], ["Do you want any …?", "câu hỏi bình thường, trung tính, không phải lời mời nhiệt tình."]],
          use: "khi tiếp khách ở nhà, ở bàn ăn, trong quán cà phê, nhà hàng.",
          note: "Khi mời, “Would you like **any** tea?” nghe như bạn không thật lòng mời. Hãy dùng **some**.",
          ex: [["Would you like some coffee?", "Bạn uống chút cà phê nhé?"], ["Yes, please. Can I have some milk too?", "Vâng ạ. Cho tôi thêm ít sữa được không?"], ["Could I have some more rice, please?", "Cho tôi thêm chút cơm được không?"], ["No, thank you. I do not want any more.", "Thôi, cảm ơn bạn. Tôi không ăn thêm nữa."]] }
      ],
      mistakes: [
        ["I have not some money.", "I do not have any money.", "Câu phủ định dùng **any**, và dùng trợ động từ do not."],
        ["There is not no water.", "There is no water. / There is not any water.", "Chỉ dùng **một** từ phủ định: no **hoặc** not any."],
        ["Would you like any tea?", "Would you like some tea?", "Lời mời dùng **some** để nghe thân thiện."]
      ],
      talk: { title: "TÌNH HUỐNG: KIỂM TRA TỦ LẠNH TRƯỚC KHI ĐI CHỢ", turns: [
        ["A", "Do we have any eggs?", "Nhà mình còn trứng không?"],
        ["B", "No, we do not have any eggs. But we have some rice.", "Không, hết trứng rồi. Nhưng còn ít gạo."],
        ["A", "Is there any milk?", "Có sữa không?"],
        ["B", "There is no milk, and there are no vegetables.", "Không có sữa, rau cũng hết."],
        ["A", "OK, I will buy some eggs, some milk and some vegetables.", "Được, anh sẽ mua trứng, sữa và rau."]
      ] },
      tip: "Khẳng định → **some**. Phủ định và câu hỏi → **any**. Mời và xin → vẫn **some**." },

    { nav: "🔎 Something, anyone…", title: "something, anything, nobody, everywhere…", sub: "Ghép some, any, no, every với người, vật và nơi chốn",
      intro: [
        "Ghép **some / any / no / every** với **-thing** (vật), **-body / -one** (người) và **-where** (nơi chốn), bạn được cả một bộ từ rất hay dùng. Quy tắc chọn giống hệt some và any: some- cho câu khẳng định và lời mời, any- cho phủ định và câu hỏi, no- mang sẵn nghĩa phủ định.",
        "-body và -one có nghĩa như nhau: somebody = someone. Khi nói chuyện, người ta hay dùng -one hơn một chút."
      ],
      table: { head: ["", "some-", "any-", "no-", "every-"], say: [1, 2, 3, 4],
        rows: [
          ["Người", "someone / somebody", "anyone / anybody", "no one / nobody", "everyone / everybody"],
          ["Vật", "something", "anything", "nothing", "everything"],
          ["Nơi chốn", "somewhere", "anywhere", "nowhere", "everywhere"],
          ["Nghĩa", "ai đó, cái gì đó, đâu đó", "ai, gì, đâu (câu hỏi); không ai, không gì (phủ định)", "không ai, không gì, không đâu", "mọi người, mọi thứ, mọi nơi"]
        ] },
      formulas: [
        { f: "something / someone / somewhere",
          mean: "**cái gì đó, ai đó, đâu đó**: có nhưng không nói rõ là cái gì, ai, ở đâu.",
          parts: [["something", "một vật, một việc: I want **something** to eat."], ["someone / somebody", "một người: **Someone** is at the door."], ["somewhere", "một nơi: Let’s go **somewhere** quiet. (không có to trước somewhere)"]],
          use: "câu khẳng định và lời mời: “Would you like **something** to drink?” Thường theo sau là **to + động từ nguyên mẫu** (something to eat) hoặc **tính từ** (something cold).",
          note: "Tính từ đứng **sau** something: “something **new**”, không nói “new something”. Tiếng Việt cũng nói “cái gì đó mới”, nên dễ nhớ.",
          ex: [["I am hungry. I want something to eat.", "Tôi đói. Tôi muốn ăn cái gì đó."], ["Someone called you this morning.", "Sáng nay có ai đó gọi cho bạn."], ["Let’s go somewhere quiet.", "Mình đi đâu đó yên tĩnh đi."], ["Would you like something cold to drink?", "Bạn có muốn uống gì đó lạnh không?"]] },
        { f: "anything / anyone / anywhere và nothing / no one / nowhere",
          mean: "**có … gì không?** (câu hỏi), **không … gì cả** (phủ định).",
          parts: [["anything / anyone / anywhere", "dùng trong câu hỏi và sau **not**: Did you buy **anything**? I did not see **anyone**."], ["nothing / no one / nowhere", "tự mang nghĩa phủ định, động từ để **khẳng định**: I bought **nothing**. **No one** came."], ["Is there anything …?", "mẫu câu rất hay dùng để hỏi về khu phố, cửa hàng: Is there **anything** interesting near here?"]],
          use: "hỏi thăm, hỏi đường, kể lại không có gì xảy ra, trả lời ngắn (“What did you buy?” – “**Nothing**.”).",
          note: "Người Việt hay nói “I did not see nobody” (dịch từng chữ “không thấy không ai”). Chỉ dùng **một** phủ định: “I did not see **anybody**” hoặc “I saw **nobody**”.",
          ex: [["Is there anything interesting near your house?", "Gần nhà bạn có gì thú vị không?"], ["I did not buy anything at the mall.", "Tôi không mua gì ở trung tâm thương mại cả."], ["Nobody was at home.", "Không có ai ở nhà."], ["What did you do yesterday? Nothing special.", "Hôm qua bạn làm gì? Không có gì đặc biệt."]] },
        { f: "everyone / everything / everywhere + động từ số ít",
          mean: "**mọi người, mọi thứ, mọi nơi**: nghĩa là số nhiều nhưng động từ chia như **số ít** (is, has, likes).",
          parts: [["everyone / everybody", "mọi người: **Everyone is** here. Không nói “everyone are”."], ["everything", "mọi thứ: **Everything is** ready."], ["everywhere", "khắp nơi: There are motorbikes **everywhere**."]],
          use: "tổng kết, khen, mô tả thành phố, hỏi thăm (“Is everything OK?”).",
          note: "Vì nghĩa là “mọi người” nên người Việt hay chia động từ số nhiều. Hãy nhớ: every- luôn đi với **is / has / động từ thêm -s**.",
          ex: [["Everyone in my family likes phở.", "Mọi người trong nhà tôi đều thích phở."], ["Is everything OK?", "Mọi thứ ổn chứ?"], ["There are street food stalls everywhere in Saigon.", "Ở Sài Gòn chỗ nào cũng có hàng ăn đường phố."], ["Not everyone has a car.", "Không phải ai cũng có ô tô."]] }
      ],
      mistakes: [
        ["I did not see nobody.", "I did not see anybody.", "not và nobody là hai phủ định. Sau **not** dùng **anybody**, hoặc nói “I saw nobody”."],
        ["Everyone are happy.", "Everyone is happy.", "**everyone** luôn đi với động từ số ít: is, has, likes."],
        ["Let’s go to somewhere new.", "Let’s go somewhere new.", "somewhere, anywhere, everywhere đã mang nghĩa “đến nơi”, không thêm **to**."]
      ],
      talk: { title: "TÌNH HUỐNG: HỎI VỀ KHU PHỐ MỚI", turns: [
        ["A", "Is there anything interesting near your new flat?", "Gần căn hộ mới của bạn có gì thú vị không?"],
        ["B", "Not really. There is nothing special, just some shops.", "Không hẳn. Chẳng có gì đặc biệt, chỉ có vài cửa hàng."],
        ["A", "Do you know anyone there?", "Bạn có quen ai ở đó không?"],
        ["B", "No, I do not know anyone yet. But everyone is friendly.", "Chưa, mình chưa quen ai. Nhưng mọi người đều thân thiện."],
        ["A", "Let’s go somewhere for coffee this weekend. I will show you my area.", "Cuối tuần mình đi đâu đó uống cà phê nhé. Mình sẽ dẫn bạn đi xem khu nhà mình."]
      ] },
      tip: "**some-** = có, **any-** = hỏi hoặc sau not, **no-** = không (động từ khẳng định), **every-** = tất cả (động từ số ít)." },

    { nav: "📊 much, many, a lot of", title: "much, many, a lot of, How much, How many", sub: "Nhiều: đếm được hay không đếm được?",
      intro: [
        "Trước khi nói “nhiều”, hãy hỏi: danh từ này **đếm được** không? Đếm được (một quả trứng, hai quả trứng) thì dùng **many**. Không đếm được (nước, gạo, tiền, thời gian) thì dùng **much**. Còn **a lot of / lots of** dùng được cho cả hai.",
        "Một số danh từ tiếng Việt đếm được nhưng tiếng Anh thì không, và ngược lại. Bảng dưới đây giúp bạn làm quen."
      ],
      table: { head: ["Đếm được (many, How many)", "Không đếm được (much, How much)"], say: [0, 1],
        rows: [
          ["eggs, apples, vegetables", "rice, water, milk, sugar"],
          ["people, friends, children", "money, time, work, homework"],
          ["cars, motorbikes, buses", "traffic, noise"],
          ["chairs, tables", "furniture, information, advice"],
          ["dollars, coins", "fruit, bread, meat"]
        ] },
      formulas: [
        { f: "many + danh từ số nhiều / much + danh từ không đếm được",
          mean: "**nhiều**: many cho thứ đếm được, much cho thứ không đếm được. Cả hai hay dùng nhất trong **câu phủ định và câu hỏi**.",
          parts: [["many + danh từ số nhiều", "many friends, many cars, many people."], ["much + danh từ không đếm được", "much time, much money, much traffic."], ["not many / not much", "không nhiều lắm, rất tự nhiên khi nói: There are **not many** buses. I do not have **much** time."]],
          use: "hỏi và nói “không nhiều lắm”. Trong câu khẳng định, much nghe rất trang trọng, nên người ta dùng **a lot of** thay thế.",
          note: "Người Việt hay nói “much friends” hoặc “many money”. Hỏi lại: có đếm được 1, 2, 3 không? Đếm được thì **many**.",
          ex: [["I do not have much time today.", "Hôm nay tôi không có nhiều thời gian."], ["There are not many people at the gym in the morning.", "Buổi sáng phòng tập không đông người."], ["Do you have many friends in Hanoi?", "Bạn có nhiều bạn ở Hà Nội không?"], ["Is there much traffic on your way to work?", "Đường đi làm của bạn có tắc không?"]] },
        { f: "a lot of / lots of + danh từ (đếm được hoặc không đếm được)",
          mean: "**rất nhiều**: dùng được với **mọi loại** danh từ, đặc biệt hay dùng trong câu khẳng định.",
          parts: [["a lot of", "phổ biến nhất: **a lot of** motorbikes, **a lot of** water."], ["lots of", "nghĩa như a lot of, thân mật hơn một chút: **lots of** fun."], ["a lot (không có of, đứng cuối câu)", "khi không có danh từ phía sau: I like it **a lot**. She works **a lot**."]],
          use: "mô tả thành phố, khu chợ, công việc: “There are a lot of motorbikes in Hanoi.”",
          note: "Động từ chia theo danh từ phía sau: “There **are** a lot of **people**”, nhưng “There **is** a lot of **traffic**”.",
          ex: [["There are a lot of motorbikes in Hanoi.", "Ở Hà Nội có rất nhiều xe máy."], ["There is a lot of traffic in the evening.", "Buổi tối đường rất đông xe."], ["She drinks lots of water every day.", "Cô ấy uống rất nhiều nước mỗi ngày."], ["Do you have a lot of homework?", "Bạn có nhiều bài tập về nhà không?"]] },
        { f: "How many + danh từ số nhiều …? / How much + danh từ không đếm được …? / How much is …?",
          mean: "**bao nhiêu**: hỏi số lượng và hỏi giá tiền.",
          parts: [["How many + danh từ số nhiều", "hỏi số lượng đếm được: **How many** eggs do we need?"], ["How much + danh từ không đếm được", "hỏi số lượng không đếm được: **How much** sugar do you want?"], ["How much is / are …?", "hỏi giá: **How much is** this shirt? **How much are** these mangoes?"]],
          use: "đi chợ, mua sắm, nấu ăn theo công thức, hỏi thăm gia đình (How many people are there in your family?).",
          note: "Hỏi giá luôn dùng **How much** vì tiền không đếm được, dù có con số: “How much is it?” – “It is fifty thousand dong.”",
          ex: [["How many people are there in your family?", "Nhà bạn có mấy người?"], ["How much water do you drink a day?", "Mỗi ngày bạn uống bao nhiêu nước?"], ["How much are these mangoes?", "Xoài này bao nhiêu tiền?"], ["How many eggs do we need for the cake?", "Làm bánh cần bao nhiêu quả trứng?"]] }
      ],
      mistakes: [
        ["How many money do you have?", "How much money do you have?", "money không đếm được nên dùng **How much**."],
        ["I have much friends.", "I have a lot of friends.", "friends đếm được; câu khẳng định dùng **a lot of** cho tự nhiên."],
        ["There are a lot of traffic.", "There is a lot of traffic.", "traffic không đếm được nên dùng **There is**."]
      ],
      talk: { title: "TÌNH HUỐNG: MUA HOA QUẢ Ở CHỢ", turns: [
        ["A", "How much are these mangoes?", "Xoài này bao nhiêu tiền ạ?"],
        ["B", "Forty thousand dong a kilo. How many do you want?", "Bốn mươi nghìn một cân. Chị lấy bao nhiêu?"],
        ["A", "Five, please. Do you have many oranges today?", "Cho tôi năm quả. Hôm nay có nhiều cam không ạ?"],
        ["B", "Not many, sorry. But we have a lot of bananas.", "Không nhiều lắm, xin lỗi chị. Nhưng có rất nhiều chuối."],
        ["A", "OK, I will take some bananas too. How much is that altogether?", "Được, tôi lấy thêm ít chuối. Tất cả bao nhiêu tiền?"]
      ] },
      tip: "Đếm được 1, 2, 3 → **many / How many**. Không đếm được → **much / How much**. Không chắc thì dùng **a lot of**, luôn đúng." },

    { nav: "🤏 a few, a little", title: "a few, a little, few, little", sub: "Một ít (đủ dùng) hay rất ít (không đủ)?",
      intro: ["**a few** và **a little** đều là “một ít”, nghĩa tích cực: có một ít, đủ để làm gì đó. Bỏ chữ **a** đi thì nghĩa đổi thành tiêu cực: **few, little** là “rất ít, gần như không có”. Chọn few hay little vẫn theo quy tắc cũ: đếm được hay không đếm được."],
      formulas: [
        { f: "a few + danh từ số nhiều / a little + danh từ không đếm được",
          mean: "**một vài, một ít**: không nhiều nhưng có, và thường là đủ.",
          parts: [["a few + danh từ số nhiều", "a few friends, a few days, a few minutes."], ["a little + danh từ không đếm được", "a little sugar, a little money, a little time."], ["a little (đứng sau động từ, trước tính từ)", "một chút: I speak English **a little**. I am **a little** tired."]],
          use: "nói “một chút” khi nấu ăn, xin thêm, kể kế hoạch ngắn: “I will stay for a few days.”",
          note: "Người Việt dùng “một ít” cho mọi thứ nên hay nói “a little friends”. Nhớ: người, vật đếm được → **a few**.",
          ex: [["I have a few friends in Da Nang.", "Tôi có vài người bạn ở Đà Nẵng."], ["Can I have a little sugar in my coffee?", "Cho tôi một chút đường vào cà phê được không?"], ["We will stay in Hoi An for a few days.", "Chúng tôi sẽ ở Hội An vài ngày."], ["Do you speak English? Yes, a little.", "Bạn có nói tiếng Anh không? Có, một chút."]] },
        { f: "few + danh từ số nhiều / little + danh từ không đếm được (không có a)",
          mean: "**rất ít, gần như không có**: nghĩa tiêu cực, thường kèm cảm giác tiếc hoặc phàn nàn.",
          parts: [["a few / a little", "có một ít, **tốt**: I have **a few** friends here, so I am happy."], ["few / little", "rất ít, **không tốt**: I have **few** friends here, so I feel lonely."], ["not many / not much", "khi nói chuyện hằng ngày, người ta hay nói cách này thay cho few, little: I do not have **many** friends here."]],
          use: "khi muốn nhấn mạnh là thiếu. Trong hội thoại thường ngày, **not many / not much** tự nhiên hơn.",
          note: "Chỉ một chữ **a** mà đổi hẳn nghĩa. Nếu không chắc, hãy dùng a few / a little cho nghĩa “có một ít”, và not many / not much cho nghĩa “ít quá”.",
          ex: [["Few people live in this village now.", "Bây giờ rất ít người sống ở làng này."], ["There is little rain in the dry season.", "Mùa khô rất ít mưa."], ["I do not have much free time.", "Tôi không có nhiều thời gian rảnh."], ["Are there many tourists here in winter? Not many.", "Mùa đông ở đây có nhiều khách du lịch không? Không nhiều."]] }
      ],
      mistakes: [
        ["I have a little friends here.", "I have a few friends here.", "friends đếm được nên dùng **a few**."],
        ["Can I have a few milk?", "Can I have a little milk?", "milk không đếm được nên dùng **a little**."]
      ],
      talk: { title: "TÌNH HUỐNG: NẤU ĂN CÙNG BẠN", turns: [
        ["A", "How many onions do we need?", "Mình cần bao nhiêu củ hành?"],
        ["B", "Just a few. Maybe two or three.", "Vài củ thôi. Khoảng hai ba củ."],
        ["A", "And fish sauce?", "Còn nước mắm?"],
        ["B", "A little. Not too much, it is very salty.", "Một chút thôi. Đừng nhiều quá, mặn lắm."],
        ["A", "OK. Can I add a little sugar too?", "Được. Mình cho thêm chút đường nhé?"],
        ["B", "Yes, good idea. Now wait a few minutes.", "Ừ, ý hay đấy. Giờ đợi vài phút."]
      ] },
      tip: "**a few** đi với thứ đếm được (a few eggs), **a little** đi với thứ không đếm được (a little salt). Có **a** là “có một ít”, mất **a** là “gần như không có”." },

    { nav: "⚖️ too much, enough", title: "too much, too many, enough", sub: "Quá nhiều, đủ, không đủ",
      intro: ["Khi than phiền hay góp ý, bạn cần nói “quá nhiều” và “không đủ”. **too much / too many** nghĩa là nhiều hơn mức cần, mang nghĩa **không tốt**. **enough** là “đủ”; **not enough** là “không đủ”."],
      formulas: [
        { f: "too many + danh từ số nhiều / too much + danh từ không đếm được",
          mean: "**quá nhiều** (nhiều hơn mức nên có, gây khó chịu).",
          parts: [["too many + danh từ số nhiều", "too many people, too many motorbikes."], ["too much + danh từ không đếm được", "too much noise, too much sugar, too much homework."], ["a lot of", "chỉ là “nhiều”, **không** mang nghĩa phàn nàn: There are a lot of trees here. (tốt)"]],
          use: "phàn nàn về giao thông, đồ ăn, công việc; góp ý khi nấu ăn.",
          note: "Người Việt hay dùng too much cho mọi thứ: “too much people”. Người đếm được → **too many** people.",
          ex: [["There are too many motorbikes in the city centre.", "Trung tâm thành phố có quá nhiều xe máy."], ["This coffee has too much sugar.", "Cà phê này nhiều đường quá."], ["I have too much work this week.", "Tuần này tôi có quá nhiều việc."], ["Are there too many people at the market?", "Chợ có đông người quá không?"]] },
        { f: "enough + danh từ / tính từ + enough",
          mean: "**đủ**: vị trí của enough đổi theo từ đi cùng.",
          parts: [["enough + danh từ", "enough chairs, enough money, enough time: enough đứng **trước** danh từ."], ["tính từ + enough", "big enough, old enough, warm enough: enough đứng **sau** tính từ."], ["not … enough", "không đủ: We do **not** have **enough** chairs. It is **not** big **enough**."]],
          use: "chuẩn bị tiệc, đi chợ, nói về nhà cửa và quần áo: “Is the room big enough?”, “Do we have enough food?”",
          note: "Với tính từ, người Việt hay nói “enough big” theo kiểu “đủ lớn”. Tiếng Anh đảo lại: “big **enough**”.",
          ex: [["Do we have enough food for ten people?", "Mình có đủ đồ ăn cho mười người không?"], ["We do not have enough chairs.", "Chúng ta không đủ ghế."], ["This room is not big enough for a party.", "Phòng này không đủ rộng để tổ chức tiệc."], ["I have enough money for the trip.", "Tôi có đủ tiền cho chuyến đi."]] }
      ],
      mistakes: [
        ["There are too much people here.", "There are too many people here.", "people đếm được nên dùng **too many**."],
        ["We have not enough chairs.", "We do not have enough chairs.", "Phủ định của have dùng **do not have**."],
        ["The flat is enough big for us.", "The flat is big enough for us.", "enough đứng **sau** tính từ: big enough."]
      ],
      talk: { title: "TÌNH HUỐNG: CHUẨN BỊ TIỆC SINH NHẬT", turns: [
        ["A", "Fifteen people are coming. Do we have enough chairs?", "Có mười lăm người đến. Mình có đủ ghế không?"],
        ["B", "No, we only have ten. We do not have enough.", "Không, mình chỉ có mười cái. Không đủ."],
        ["A", "I can borrow some from my neighbour. What about food?", "Mình có thể mượn hàng xóm vài cái. Còn đồ ăn thì sao?"],
        ["B", "I think we have too much food! We have three cakes. That is too many.", "Mình nghĩ đồ ăn nhiều quá! Ba cái bánh là quá nhiều rồi."],
        ["A", "That is OK. Everyone can take some cake home.", "Không sao. Mọi người có thể mang ít bánh về."]
      ] },
      tip: "**too** = quá (không tốt), **enough** = đủ. Danh từ thì **enough đứng trước** (enough money), tính từ thì **enough đứng sau** (big enough)." }
  ],
  speak: [
    { q: "What do you usually buy at the market?", vi: "Bạn thường mua gì ở chợ?", hint: "Dùng **some + danh từ**, **a few / a little**, **a lot of**: I usually buy some…",
      answers: [["I usually buy some vegetables, a few eggs and a little meat.", "Tôi thường mua ít rau, vài quả trứng và một ít thịt."], ["I buy a lot of fruit because my children love it.", "Tôi mua nhiều hoa quả vì các con tôi rất thích."]] },
    { q: "Is there anything interesting near your house?", vi: "Gần nhà bạn có gì thú vị không?", hint: "Trả lời bằng **There is / There are some…** hoặc **There is nothing… / There are not any…**.",
      answers: [["Yes, there are some nice cafés and a small park.", "Có, có vài quán cà phê đẹp và một công viên nhỏ."], ["Not really. There is nothing special, but there are a lot of food stalls.", "Không hẳn. Chẳng có gì đặc biệt, nhưng có rất nhiều hàng ăn."]] },
    { q: "How many people are there in your family?", vi: "Nhà bạn có mấy người?", hint: "Dùng **There are + số + people**, rồi kể thêm: I have two brothers / I do not have any sisters.",
      answers: [["There are four people in my family. I have one brother, but I do not have any sisters.", "Nhà tôi có bốn người. Tôi có một anh trai nhưng không có chị em gái."], ["There are five people: my parents, my two sisters and me.", "Có năm người: bố mẹ tôi, hai chị gái và tôi."]] },
    { q: "How much water do you drink every day?", vi: "Mỗi ngày bạn uống bao nhiêu nước?", hint: "Dùng **a lot of / not much / about + số lượng**.",
      answers: [["I drink a lot of water, about two litres a day.", "Tôi uống nhiều nước, khoảng hai lít mỗi ngày."], ["Not much. I drink a lot of coffee, but not much water.", "Không nhiều. Tôi uống nhiều cà phê nhưng ít nước."]] },
    { q: "What do you need to cook your favourite dish?", vi: "Bạn cần gì để nấu món ăn yêu thích của mình?", hint: "Dùng **some, a few, a little** và **How much / How many** khi nói lượng.",
      answers: [["To cook phở, I need some beef, some noodles, a few onions and a little ginger.", "Để nấu phở, tôi cần ít thịt bò, bánh phở, vài củ hành và một chút gừng."], ["For fried rice, I need some rice, two eggs and a little fish sauce.", "Để làm cơm rang, tôi cần ít cơm, hai quả trứng và chút nước mắm."]] },
    { q: "What do you not like about your city?", vi: "Bạn không thích điều gì ở thành phố của mình?", hint: "Phàn nàn bằng **too many / too much** và **not enough**.",
      answers: [["There are too many motorbikes and too much noise.", "Có quá nhiều xe máy và quá ồn ào."], ["There are not enough parks, and there is too much traffic.", "Không có đủ công viên, và giao thông quá đông đúc."]] },
    { q: "Do you have enough free time?", vi: "Bạn có đủ thời gian rảnh không?", hint: "Dùng **enough / not enough / not much / a little**.",
      answers: [["No, I do not have enough free time. I have too much work.", "Không, tôi không có đủ thời gian rảnh. Tôi có quá nhiều việc."], ["Yes, I have a little free time in the evening.", "Có, buổi tối tôi có một chút thời gian rảnh."]] },
    { q: "Did you do anything special last weekend?", vi: "Cuối tuần trước bạn có làm gì đặc biệt không?", hint: "Dùng **something / nothing / somewhere / everyone**: I went somewhere… / I did nothing special.",
      answers: [["Yes, I went somewhere new with some friends. Everyone had fun.", "Có, tôi đi một nơi mới với vài người bạn. Mọi người đều vui."], ["No, I did nothing special. I stayed at home.", "Không, tôi chẳng làm gì đặc biệt. Tôi ở nhà."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền some, any, no hoặc từ ghép (something, anything, nobody…)", items: [
      { q: "I bought ___ apples at the market this morning.", a: ["some"], hint: "câu khẳng định" },
      { q: "Do you have ___ brothers or sisters?", a: ["any"], hint: "câu hỏi thường" },
      { q: "Sorry, there is ___ coffee left. Would you like tea?", a: ["no"], hint: "không có (động từ is để khẳng định)" },
      { q: "We do not have ___ eggs.", a: ["any"], hint: "câu phủ định" },
      { q: "Would you like ___ cake? I made it myself.", a: ["some"], hint: "lời mời" },
      { q: "I am hungry. I want ___ to eat.", a: ["something"], hint: "cái gì đó" },
      { q: "I knocked on the door, but ___ answered.", a: ["nobody", "no one", "no-one"], hint: "không ai (động từ khẳng định)" },
      { q: "Did you buy ___ at the market?", a: ["anything"], hint: "có mua gì không" }
    ] },
    { title: "Phần 2: Điền much, many, a few, a little, How much hoặc How many", items: [
      { q: "___ people live in your house?", a: ["how many"], hint: "hỏi số người" },
      { q: "___ is this shirt?", a: ["how much"], hint: "hỏi giá" },
      { q: "I do not have ___ time today. I am very busy.", a: ["much"], hint: "time không đếm được" },
      { q: "There are not ___ cars on the road at five in the morning.", a: ["many"], hint: "cars đếm được" },
      { q: "Can I have ___ sugar in my coffee, please?", a: ["a little"], hint: "một chút, không đếm được" },
      { q: "I have ___ friends in Saigon, maybe three or four.", a: ["a few"], hint: "vài người" }
    ] },
    { title: "Phần 3: Chọn câu đúng", items: [
      { q: "“Bạn có bao nhiêu tiền?”", options: ["How many money do you have?", "How much money do you have?", "How much moneys do you have?"], a: 1, why: "money không đếm được nên dùng **How much**." },
      { q: "“Ở đây đông người quá.”", options: ["There are too much people here.", "There are too many people here.", "There is too many people here."], a: 1, why: "people đếm được, số nhiều: **There are too many people**." },
      { q: "“Mọi người đều ở đây.”", options: ["Everyone are here.", "Everyone is here.", "Everyone be here."], a: 1, why: "**everyone** đi với động từ số ít: is." },
      { q: "“Tôi không thấy ai cả.”", options: ["I did not see nobody.", "I did not see anybody.", "I did not see somebody."], a: 1, why: "Sau **not** dùng **anybody**, chỉ một phủ định trong câu." },
      { q: "“Căn hộ này đủ rộng cho chúng tôi.”", options: ["The flat is enough big for us.", "The flat is big enough for us.", "The flat is big for enough us."], a: 1, why: "**enough** đứng sau tính từ: big enough." },
      { q: "Mời khách uống trà:", options: ["Would you like any tea?", "Would you like some tea?", "Would you like a tea some?"], a: 1, why: "Lời mời dùng **some**." }
    ] }
  ],
  vocab: [["some", "một vài, một ít (khẳng định, lời mời)"], ["any", "nào, chút nào (câu hỏi, phủ định)"], ["no = not any", "không có"], ["something / anything / nothing", "cái gì đó / gì / không gì"], ["someone / anyone / no one / everyone", "ai đó / ai / không ai / mọi người"], ["somewhere / anywhere / nowhere / everywhere", "đâu đó / đâu / không đâu / khắp nơi"], ["many + số nhiều", "nhiều (đếm được)"], ["much + không đếm được", "nhiều (không đếm được)"], ["a lot of / lots of", "rất nhiều (cả hai loại)"], ["How many / How much", "bao nhiêu (số lượng, giá tiền)"], ["a few / a little", "vài, một ít"], ["few / little", "rất ít, gần như không"], ["too many / too much", "quá nhiều"], ["enough / not enough", "đủ / không đủ"]],
  tips: [
    "Mở tủ lạnh mỗi sáng và nói: “We have **some** eggs. We do not have **any** milk. There is **a little** rice.”",
    "Khi đi chợ, tập hỏi thầm bằng tiếng Anh: “**How much** is it? **How many** do I need?”",
    "Gặp danh từ mới, tự hỏi ngay: “Đếm được không?” rồi ghi vào sổ thành hai cột: many / much.",
    "Khi mời bạn bè, luôn dùng mẫu “Would you like **some** …?” cho quen miệng.",
    "Mô tả khu phố của bạn bằng ba câu: “There are **a lot of** … There is **not much** … There are **too many** …”"
  ]
};