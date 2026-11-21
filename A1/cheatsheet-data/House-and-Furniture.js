/* Cheat sheet: House and Furniture (Nhà cửa và nội thất). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên các bộ phận của ngôi nhà và nói tầng lầu đúng theo kiểu Anh và kiểu Mỹ.",
    "Gọi đúng tên từng món nội thất và dùng đúng từ furniture (không đếm được).",
    "Tả đồ nội thất theo chất liệu, hình dáng, kích thước với đúng thứ tự tính từ.",
    "Bàn bạc cách kê đồ trong phòng bằng Let’s, Why don’t we, Where should we.",
    "So sánh khi mua đồ và hỏi những câu cần thiết khi đi xem nhà thuê."
  ],
  phrases: [
    { h: "Nói về tầng lầu", rows: [
      ["I live on the fifth floor.", "Tôi sống ở tầng năm."],
      ["The bedrooms are upstairs.", "Các phòng ngủ ở trên lầu."],
      ["Which floor is the apartment on?", "Căn hộ ở tầng mấy?"],
      ["It is on the eighth floor, and there is a lift.", "Ở tầng 8, có thang máy.", "Khi nói thường rút gọn: It’s (It is), there’s (there is)."],
      ["Is that the ground floor?", "Đó là tầng trệt phải không?", "Hỏi lại cho chắc vì người Anh và người Mỹ đếm tầng khác nhau."]
    ]},
    { h: "Nói về đồ nội thất", rows: [
      ["We need a new sofa for the living room.", "Chúng ta cần một bộ sofa mới cho phòng khách."],
      ["I sleep in a single bed.", "Tôi ngủ giường đơn."],
      ["My clothes are in the chest of drawers.", "Quần áo tôi để trong tủ ngăn kéo."],
      ["There is a big rug under the coffee table.", "Dưới bàn trà có tấm thảm lớn.", "Dạng rút gọn: There’s (There’s = There is)."],
      ["This armchair is really comfortable.", "Chiếc ghế bành này êm thật."]
    ]},
    { h: "Kê đồ trong phòng", rows: [
      ["Where should we put the bed?", "Mình kê giường ở đâu nhỉ?"],
      ["Let’s put it against that wall, opposite the window.", "Kê sát bức tường kia, đối diện cửa sổ đi.", "Let’s = Let us, nhưng khi rủ rê luôn nói Let’s; “Let us” nghe rất trang trọng."],
      ["Why don’t we put the desk by the window?", "Sao không để bàn học cạnh cửa sổ?", "Câu gợi ý cố định này luôn dùng dạng rút gọn; don’t = do not."],
      ["We can hang the painting above the sofa.", "Mình có thể treo tranh phía trên ghế sofa."],
      ["Can you help me move it? It is really heavy.", "Bạn giúp mình khiêng nhé? Nặng lắm."]
    ]},
    { h: "Ở cửa hàng nội thất", rows: [
      ["I am looking for a sofa for a small living room.", "Tôi đang tìm sofa cho phòng khách nhỏ.", "Khi nói thường rút gọn: I’m looking for (I’m = I am)."],
      ["Does it come in other colors?", "Cái này có màu khác không?"],
      ["This one is more comfortable than that one.", "Cái này êm hơn cái kia."],
      ["Which is the cheapest?", "Cái nào rẻ nhất?"],
      ["Do you deliver? Do I have to assemble it myself?", "Bên bạn có giao hàng không? Tôi có phải tự lắp không?"]
    ]},
    { h: "Đi xem nhà thuê", rows: [
      ["How big is the apartment?", "Căn hộ rộng bao nhiêu?"],
      ["It is about sixty square meters.", "Khoảng 60 mét vuông."],
      ["Is it furnished?", "Có sẵn nội thất không?"],
      ["Yes, it comes with a bed, a sofa and a fridge.", "Có, có sẵn giường, sofa và tủ lạnh."],
      ["Can I see the bedroom?", "Tôi xem phòng ngủ được không?"]
    ]}
  ],
  grammar: [
    { h: "Tầng lầu: on the + số thứ tự + floor, upstairs và downstairs",
      f: ["on the + số thứ tự + floor", "upstairs / downstairs (không có giới từ)"],
      items: [
        { f: "on the + số thứ tự + floor",
          mean: "**ở tầng thứ …** của một tòa nhà, căn hộ, chung cư.",
          parts: [
            ["on", "giới từ bắt buộc, vì tầng được xem là một mặt sàn mình đứng lên trên."],
            ["the", "luôn có the trước số thứ tự."],
            ["số thứ tự", "first, second, third, fourth, fifth… (không dùng số đếm one, two, three)."],
            ["floor", "**tầng, sàn**. Tầng trệt là **the ground floor** (kiểu Anh)."]
          ],
          use: "nói nhà, phòng, văn phòng ở tầng nào, hoặc hỏi Which floor…? (Tầng mấy?).",
          note: "Kiểu Anh: the ground floor là tầng trệt, the first floor là tầng 2 của Việt Nam. Kiểu Mỹ: the first floor chính là tầng trệt. Không nói “in floor five” hay “on the five floor”.",
          ex: [
            ["My apartment is on the tenth floor.", "Căn hộ của tôi ở tầng mười."],
            ["The kitchen is on the ground floor.", "Bếp ở tầng trệt."],
            ["Which floor is your office on? — It is on the second floor.", "Văn phòng của bạn ở tầng mấy? — Ở tầng hai."],
            ["We do not live on the top floor.", "Chúng tôi không sống ở tầng trên cùng."]
          ] },
        { f: "upstairs / downstairs (không có giới từ)",
          mean: "**ở trên lầu, lên lầu** và **ở dưới nhà, xuống dưới nhà**: chỉ vị trí hoặc hướng di chuyển giữa các tầng trong nhà.",
          parts: [
            ["upstairs", "**trên lầu** hoặc **lên lầu**, tức tầng phía trên tầng mình đang đứng."],
            ["downstairs", "**dưới nhà** hoặc **xuống dưới**, tức tầng phía dưới, thường là tầng trệt."]
          ],
          use: "đứng sau động từ (go, come, run, live, sleep) hoặc sau be (is upstairs). Bản thân hai từ đã có nghĩa hướng nên **không** thêm to, in, at phía trước.",
          note: "Người Việt hay nói “go to upstairs” vì dịch “đi lên lầu”. Đúng là **go upstairs**. Cũng nói **live upstairs**, không nói “live in upstairs”.",
          ex: [
            ["The bathroom is upstairs.", "Phòng tắm ở trên lầu."],
            ["My grandparents sleep downstairs.", "Ông bà tôi ngủ ở tầng dưới."],
            ["Can you carry this box upstairs?", "Bạn mang cái hộp này lên lầu giúp tôi được không?"],
            ["Is the living room downstairs?", "Phòng khách có ở tầng dưới không?"]
          ] }
      ],
      p: [
        "Nói ở tầng nào thì dùng **on the + số thứ tự + floor**: on the fifth floor. Không nói “in floor five”, vì tầng được xem như một mặt sàn mà bạn đứng lên trên.",
        "Người Anh gọi tầng trệt là **the ground floor**, và **the first floor** là tầng 2 của Việt Nam. Người Mỹ gọi tầng trệt luôn là **the first floor**. Vì vậy khi hẹn ở một tòa nhà nên hỏi lại cho chắc.",
        "**upstairs** (trên lầu) và **downstairs** (dưới lầu) đã mang sẵn nghĩa hướng, nên không thêm to hay in phía trước: Go upstairs."
      ],
      ex: [["I live on the third floor.", "Tôi sống ở tầng ba."], ["Come downstairs!", "Xuống dưới nhà đi!"]]
    },
    { h: "furniture là danh từ không đếm được, và danh từ ghép",
      f: ["furniture (không có a, không thêm -s)", "a piece of furniture", "danh từ + danh từ (chỉ danh từ sau đổi số nhiều)"],
      items: [
        { f: "furniture (không có a, không thêm -s)",
          mean: "**đồ nội thất, đồ đạc trong nhà** nói chung. Đây là danh từ **không đếm được**, giống như water hay rice.",
          parts: [
            ["furniture", "chỉ chung bàn, ghế, giường, tủ… Không dùng a hoặc an, không thêm -s, động từ chia số ít (The furniture **is** new)."],
            ["a lot of / some / much", "dùng để nói số lượng: a lot of furniture (nhiều), some furniture (một ít). Câu phủ định và câu hỏi dùng **much** (not much furniture)."],
            ["many", "**không** dùng với furniture, vì many chỉ đi với danh từ đếm được."]
          ],
          use: "nói chung về đồ đạc khi mua sắm, chuyển nhà, trang trí. Hỏi số lượng bằng **How much furniture…?**",
          note: "Lỗi hay gặp: “a furniture”, “furnitures”, “many furnitures”. Tất cả đều sai. Nói đúng: **some furniture**, **a lot of furniture**.",
          ex: [
            ["The furniture in this room is very old.", "Đồ đạc trong phòng này rất cũ."],
            ["We do not have much furniture in our new flat.", "Căn hộ mới của chúng tôi không có nhiều đồ đạc."],
            ["They sell modern furniture.", "Họ bán đồ nội thất hiện đại."],
            ["How much furniture do you need?", "Bạn cần bao nhiêu đồ nội thất?"]
          ] },
        { f: "a piece of furniture",
          mean: "**một món đồ nội thất**: cách đếm từng món khi furniture không đếm được.",
          parts: [
            ["a piece of", "**một món, một cái**. Hai món là **two pieces of** furniture (piece thêm -s, furniture giữ nguyên)."],
            ["furniture", "luôn giữ nguyên, không thêm -s."]
          ],
          use: "khi muốn nói rõ số lượng món đồ hoặc nói về một món cụ thể mà không gọi tên (bàn, ghế…).",
          note: "Nếu biết tên món đồ thì nói thẳng tên cho tự nhiên: a chair, two tables. Dùng a piece of furniture khi nói chung chung hoặc muốn nhấn mạnh từng món.",
          ex: [
            ["This sofa is my favourite piece of furniture.", "Cái sofa này là món đồ nội thất tôi thích nhất."],
            ["We bought three pieces of furniture today.", "Hôm nay chúng tôi đã mua ba món đồ nội thất."],
            ["This old cabinet is a beautiful piece of furniture.", "Cái tủ cũ này là một món đồ nội thất đẹp."],
            ["How many pieces of furniture are in the room?", "Trong phòng có bao nhiêu món đồ nội thất?"]
          ] },
        { f: "danh từ + danh từ (chỉ danh từ sau đổi số nhiều)",
          mean: "**danh từ ghép**: hai danh từ đứng cạnh nhau để gọi tên một đồ vật. Danh từ đầu nói **loại, mục đích**; danh từ sau là **đồ vật chính**.",
          parts: [
            ["danh từ thứ nhất", "đóng vai trò như tính từ, cho biết loại hoặc công dụng: **coffee** table (bàn uống nước), **desk** lamp (đèn bàn), **shoe** rack (kệ giày). Luôn ở số ít."],
            ["danh từ thứ hai", "đồ vật chính. Khi nói nhiều cái, chỉ danh từ này thêm **-s**: two coffee **tables**."]
          ],
          use: "gọi tên đồ đạc trong nhà. Thứ tự ngược tiếng Việt: “kệ giày” thành **shoe rack**, “bàn uống nước” thành **coffee table**.",
          note: "Không nói “shoes rack” hay “books shelf” dù kệ có nhiều giày, nhiều sách. Đúng: **shoe rack**, **bookshelf**.",
          ex: [
            ["There are two bookshelves in my bedroom.", "Phòng ngủ của tôi có hai cái giá sách."],
            ["I need a new desk lamp.", "Tôi cần một cái đèn bàn mới."],
            ["We have three kitchen cupboards.", "Chúng tôi có ba cái tủ bếp."],
            ["Where are the bath towels?", "Khăn tắm ở đâu?"]
          ] }
      ],
      p: [
        "**furniture** chỉ chung đồ nội thất và là danh từ **không đếm được**: không dùng a, không thêm -s, dùng **a lot of** thay cho many. Muốn đếm từng món thì nói **a piece of furniture**.",
        "Trong danh từ ghép như **coffee table, desk lamp, shoe rack**, danh từ đứng đầu đóng vai trò như tính từ nên **không bao giờ thêm -s**. Chỉ danh từ đứng sau đổi sang số nhiều: two coffee tables, two shoe racks."
      ],
      ex: [["I bought a lot of furniture.", "Tôi đã mua nhiều đồ nội thất."], ["We need two desk lamps.", "Chúng tôi cần hai cái đèn bàn."]]
    },
    { h: "Hỏi và nói kích thước, thứ tự tính từ",
      f: ["How long / wide / big + is + danh từ?", "It is + số + đơn vị + long / wide / high / deep", "kích cỡ → hình dáng → màu → chất liệu + danh từ"],
      items: [
        { f: "How long / wide / big + is + danh từ?",
          mean: "**… dài / rộng / to bao nhiêu?**: câu hỏi về kích thước của đồ vật hoặc căn phòng.",
          parts: [
            ["How long", "hỏi **chiều dài**: How long is the sofa?"],
            ["How wide", "hỏi **chiều rộng, bề ngang**: How wide is the door?"],
            ["How big", "hỏi **độ to, diện tích** nói chung: How big is the living room? Thường trả lời bằng mét vuông (square meters)."],
            ["is / are", "danh từ số ít dùng is, danh từ số nhiều dùng are (How big are the bedrooms?)."]
          ],
          use: "khi mua đồ nội thất, đo phòng, thuê nhà. Cấu trúc: How + tính từ + is hoặc are + danh từ?",
          note: "Không dịch từng chữ “Cái sofa dài bao nhiêu” thành “The sofa long how much?”. Luôn bắt đầu bằng **How** + tính từ.",
          ex: [
            ["How long is the bed?", "Cái giường dài bao nhiêu?"],
            ["How wide is the window?", "Cửa sổ rộng bao nhiêu?"],
            ["How big is your kitchen?", "Bếp nhà bạn rộng bao nhiêu?"],
            ["How big are the bedrooms in this apartment?", "Các phòng ngủ trong căn hộ này rộng bao nhiêu?"]
          ] },
        { f: "It is + số + đơn vị + long / wide / high / deep",
          mean: "**nó dài / rộng / cao / sâu … (mét, xăng-ti-mét)**: câu trả lời về kích thước.",
          parts: [
            ["số + đơn vị", "two meters, eighty centimeters. Từ hai trở lên thì đơn vị thêm **-s**."],
            ["long", "**dài**."],
            ["wide", "**rộng, bề ngang**."],
            ["high", "**cao** (dùng cho đồ vật, tường, trần nhà)."],
            ["deep", "**sâu** (dùng cho tủ, kệ, ngăn kéo: từ mặt trước vào trong)."]
          ],
          use: "trả lời câu hỏi How long / wide…? hoặc mô tả đồ khi mua bán. Số đo đứng **trước**, tính từ đứng **cuối cùng**.",
          note: "Ngược với tiếng Việt: “dài hai mét” thành **two meters long**. Không nói “It is long two meters”.",
          ex: [
            ["The table is one and a half meters long.", "Cái bàn dài một mét rưỡi."],
            ["The door is ninety centimeters wide.", "Cánh cửa rộng chín mươi xăng-ti-mét."],
            ["This bookshelf is two meters high.", "Cái giá sách này cao hai mét."],
            ["The wardrobe is sixty centimeters deep.", "Cái tủ quần áo sâu sáu mươi xăng-ti-mét."]
          ] },
        { f: "kích cỡ → hình dáng → màu → chất liệu + danh từ",
          mean: "**thứ tự của nhiều tính từ** khi chúng cùng đứng trước một danh từ để tả đồ vật.",
          parts: [
            ["kích cỡ", "big, small, large, little, long."],
            ["hình dáng", "round (tròn), square (vuông), rectangular (chữ nhật)."],
            ["màu", "white, black, brown, grey."],
            ["chất liệu", "wooden (bằng gỗ), metal (bằng kim loại), glass (bằng kính), plastic (bằng nhựa), leather (bằng da)."]
          ],
          use: "tả chi tiết một món đồ khi mua sắm hoặc kể về phòng mình. Tất cả tính từ đứng **trước** danh từ; thường chỉ dùng hai hoặc ba tính từ cho tự nhiên.",
          note: "Tiếng Việt đặt tính từ sau danh từ (“cái bàn gỗ tròn trắng”), tiếng Anh đặt trước và theo thứ tự cố định: **a big round white wooden table**. Nhớ đổi wood thành **wooden**.",
          ex: [
            ["I want a small square glass table.", "Tôi muốn một cái bàn kính vuông nhỏ."],
            ["We have a big brown leather sofa.", "Chúng tôi có một cái sofa da màu nâu to."],
            ["She bought a round white plastic chair.", "Cô ấy đã mua một cái ghế nhựa tròn màu trắng."],
            ["Do you like this long black metal shelf?", "Bạn có thích cái kệ kim loại dài màu đen này không?"]
          ] }
      ],
      p: [
        "Hỏi kích thước bằng **How + tính từ + is…?** (How long is the sofa?). Khi trả lời, số đo đứng trước, tính từ đứng sau cùng: It is two meters long. Đây là thứ tự ngược với tiếng Việt (“dài 2 mét”).",
        "Khi đặt nhiều tính từ trước danh từ, theo thứ tự **kích cỡ → hình dáng → màu → chất liệu**: a big round white wooden table.",
        "Danh từ chỉ chất liệu wood phải đổi thành tính từ **wooden** (bằng gỗ); còn metal và glass giữ nguyên khi đứng trước danh từ: a metal chair, a glass table."
      ],
      ex: [["The sofa is two meters long.", "Cái sofa dài 2 mét."], ["It goes with a round wooden table.", "Nó đi kèm một cái bàn gỗ tròn."]]
    },
    { h: "Gợi ý cách kê đồ: Let’s, Why don’t we, Where should we, How about",
      f: ["Let’s + động từ nguyên mẫu", "Why don’t we + động từ nguyên mẫu?", "Where should we + động từ nguyên mẫu?", "How about + động từ thêm -ing?"],
      items: [
        { f: "Let’s + động từ nguyên mẫu",
          mean: "**Chúng ta hãy … đi, mình … nhé**: rủ người khác cùng làm một việc, giọng **quyết đoán**.",
          parts: [
            ["Let’s", "dạng rút gọn của Let us, gần như luôn nói ở dạng rút gọn. Bao gồm cả người nói và người nghe."],
            ["Let’s not", "dạng phủ định: **Chúng ta đừng …**"],
            ["động từ nguyên mẫu", "đứng ngay sau, không có to: put, move, buy, paint…"]
          ],
          use: "khi đã có ý rõ ràng và muốn cả nhóm làm ngay. Đồng ý: **OK. / Good idea.**",
          note: "Phân biệt **Let’s** (chúng ta hãy) và **Let me** (để tôi): Let’s move the bed = mình cùng chuyển giường; Let me move the bed = để tôi chuyển.",
          ex: [
            ["Let’s move the desk next to the window.", "Mình chuyển bàn học ra cạnh cửa sổ đi."],
            ["Let’s paint the walls light blue.", "Mình sơn tường màu xanh nhạt đi."],
            ["Let’s not put the TV in the bedroom.", "Mình đừng để ti vi trong phòng ngủ."],
            ["Let’s buy a new rug for the living room.", "Mình mua một tấm thảm mới cho phòng khách đi."]
          ] },
        { f: "Why don’t we + động từ nguyên mẫu?",
          mean: "**Sao mình không … nhỉ?**: gợi ý **nhẹ nhàng**, để người kia có thể đồng ý hoặc từ chối.",
          parts: [
            ["Why don’t we", "nhìn giống câu hỏi “tại sao” nhưng thực ra là lời gợi ý. Dạng đầy đủ Why do not we không dùng, nên luôn nói don’t."],
            ["động từ nguyên mẫu", "việc được gợi ý: put, try, move, buy…"]
          ],
          use: "khi muốn đưa ý kiến lịch sự, đặc biệt lúc hai người đang bàn bạc cách kê đồ. Trả lời: **That is a good idea.** hoặc **Hmm, I am not sure.**",
          note: "Không trả lời bằng Because…, vì đây không phải câu hỏi lý do. Có thể đổi we thành you để gợi ý cho người khác: **Why don’t you** try the blue one?",
          ex: [
            ["Why don’t we put the plant in the corner?", "Sao mình không để chậu cây ở góc phòng nhỉ?"],
            ["Why don’t we hang the mirror here?", "Sao mình không treo gương ở đây nhỉ?"],
            ["Why don’t we buy a smaller table?", "Hay mình mua cái bàn nhỏ hơn nhé?"],
            ["Why don’t we move the sofa away from the door?", "Sao mình không kê sofa xa cửa ra nhỉ?"]
          ] },
        { f: "Where should we + động từ nguyên mẫu?",
          mean: "**Mình nên … ở đâu?**: hỏi ý kiến người kia về **vị trí** đặt đồ.",
          parts: [
            ["Where", "**ở đâu**, hỏi về chỗ."],
            ["should", "**nên**, xin lời khuyên hoặc ý kiến. Sau should là động từ nguyên mẫu."],
            ["we", "chúng ta, cả hai cùng làm. Có thể đổi thành I (Where should I put…? Tôi nên để … ở đâu?)."]
          ],
          use: "khi chuyển đồ vào nhà mới hoặc sắp xếp lại phòng. Thường đi với put, hang (treo), place (đặt).",
          note: "Câu trả lời thường dùng Let’s hoặc giới từ chỉ vị trí: **Let’s put it next to the bed.** / **Under the window.**",
          ex: [
            ["Where should we put the bookshelf?", "Mình nên để giá sách ở đâu?"],
            ["Where should we hang this picture?", "Mình nên treo bức tranh này ở đâu?"],
            ["Where should I put these boxes?", "Tôi nên để mấy cái hộp này ở đâu?"],
            ["Where should we put the TV? — On the wall, opposite the sofa.", "Mình nên để ti vi ở đâu? — Trên tường, đối diện sofa."]
          ] },
        { f: "How about + động từ thêm -ing?",
          mean: "**… thì sao? Hay là … nhé?**: đưa ra một gợi ý nhẹ nhàng, nhiều khi là ý khác sau khi ý trước chưa ổn.",
          parts: [
            ["How about", "**thế còn … thì sao**. Có thể thay bằng **What about** với nghĩa gần giống."],
            ["động từ thêm -ing", "vì about là giới từ, động từ theo sau phải thêm **-ing**: putting, moving, buying."],
            ["danh từ", "How about cũng có thể đi với danh từ: How about **this lamp**?"]
          ],
          use: "khi gợi ý một lựa chọn để người kia cân nhắc, đặc biệt khi đang so sánh nhiều cách kê đồ.",
          note: "Lỗi hay gặp: “How about put it here?”. Sau How about **không** dùng động từ nguyên mẫu, phải dùng **putting**.",
          ex: [
            ["How about moving the bed to the left?", "Chuyển giường sang bên trái thì sao?"],
            ["How about buying some curtains?", "Hay mình mua mấy tấm rèm nhé?"],
            ["How about painting this chair white?", "Sơn cái ghế này màu trắng thì sao?"],
            ["The red sofa is too big. How about the grey one?", "Cái sofa đỏ to quá. Còn cái màu xám thì sao?"]
          ] }
      ],
      p: [
        "Các mẫu câu này dùng để **rủ** hoặc **gợi ý** một việc mà cả hai cùng làm, rất hợp khi cùng nhau kê đồ trong phòng mới. **Let’s** quyết đoán hơn, **Why don’t we…?** và **How about…?** nhẹ nhàng hơn vì để người kia có thể từ chối.",
        "Sau Let’s, Why don’t we, Where should we là **động từ nguyên mẫu không có to**. Riêng **How about** phải theo sau bởi **động từ thêm -ing**: How about putting it in the corner?"
      ],
      ex: [["Let’s put the sofa against the wall.", "Kê sofa sát tường đi."], ["How about putting it in the corner?", "Để nó ở góc phòng thì sao?"]]
    },
    { h: "So sánh hơn và so sánh nhất khi chọn đồ",
      f: ["tính từ ngắn + -er + than", "more + tính từ dài + than", "the + tính từ ngắn + -est / the most + tính từ dài"],
      items: [
        { f: "tính từ ngắn + -er + than",
          mean: "**… hơn …**: so sánh hai món đồ bằng **tính từ ngắn** (một âm tiết).",
          parts: [
            ["tính từ ngắn", "cheap, big, small, long, soft, light, new…"],
            ["-er", "thêm vào cuối tính từ: cheap → cheaper. Kết thúc bằng một nguyên âm và một phụ âm thì **gấp đôi phụ âm**: big → bigger. Kết thúc bằng -e chỉ thêm -r: wide → wider. Kết thúc bằng -y thì đổi thành -ier: heavy → heavier."],
            ["than", "**hơn**, đứng trước món đồ được đem ra so sánh."]
          ],
          use: "khi đứng giữa hai món đồ trong cửa hàng và muốn chọn. Mẫu: món thứ nhất + is + tính từ thêm -er + than + món thứ hai.",
          note: "Không thêm more trước tính từ ngắn: nói **cheaper**, không nói “more cheap” hay “more cheaper”.",
          ex: [
            ["This bed is bigger than my old bed.", "Cái giường này to hơn giường cũ của tôi."],
            ["The white chair is cheaper than the black one.", "Cái ghế trắng rẻ hơn cái màu đen."],
            ["This sofa is softer than that one.", "Cái sofa này êm hơn cái kia."],
            ["Is the glass table heavier than the wooden one?", "Bàn kính có nặng hơn bàn gỗ không?"]
          ] },
        { f: "more + tính từ dài + than",
          mean: "**… hơn …**: so sánh hai món đồ bằng **tính từ dài** (hai âm tiết trở lên).",
          parts: [
            ["more", "**hơn**, đứng trước tính từ dài. Tính từ giữ nguyên, không thêm -er."],
            ["tính từ dài", "comfortable (thoải mái), expensive (đắt), modern (hiện đại), beautiful (đẹp), useful (tiện dụng)."],
            ["than", "đứng trước món đồ được so sánh."]
          ],
          use: "so sánh đồ nội thất về độ đắt, độ thoải mái, độ đẹp, độ hiện đại.",
          note: "Có thể dùng **less** (kém hơn) thay cho more: This chair is **less expensive** than that one (cái ghế này rẻ hơn, nghĩa là ít đắt hơn).",
          ex: [
            ["This armchair is more comfortable than the sofa.", "Cái ghế bành này thoải mái hơn cái sofa."],
            ["The leather sofa is more expensive than the fabric one.", "Sofa da đắt hơn sofa vải."],
            ["Your kitchen is more modern than mine.", "Bếp nhà bạn hiện đại hơn bếp nhà tôi."],
            ["Is this lamp more useful than that one?", "Cái đèn này có tiện dụng hơn cái kia không?"]
          ] },
        { f: "the + tính từ ngắn + -est / the most + tính từ dài",
          mean: "**… nhất**: so sánh nhất, chọn ra một món nổi bật nhất trong **ba món trở lên**.",
          parts: [
            ["the", "luôn có **the** trước so sánh nhất."],
            ["tính từ ngắn + -est", "cheap → the cheapest, big → the biggest, large → the largest."],
            ["the most + tính từ dài", "the most comfortable, the most expensive, the most beautiful."],
            ["bất quy tắc", "good → **the best** (tốt nhất), bad → **the worst** (tệ nhất)."]
          ],
          use: "chọn món tốt nhất, rẻ nhất trong cửa hàng hoặc nói phòng nào lớn nhất trong nhà. Thường đi kèm **in** + nơi chốn (in the shop, in the house).",
          note: "Đừng quên **the**: nói **the biggest room**, không nói “biggest room” hay “the most big room”.",
          ex: [
            ["This is the cheapest table in the shop.", "Đây là cái bàn rẻ nhất trong cửa hàng."],
            ["The living room is the largest room in our house.", "Phòng khách là phòng rộng nhất trong nhà chúng tôi."],
            ["Which bed is the most comfortable?", "Cái giường nào thoải mái nhất?"],
            ["That is the best place for the sofa.", "Đó là chỗ tốt nhất để kê sofa."]
          ] }
      ],
      p: [
        "Khi đứng giữa nhiều món đồ trong cửa hàng, bạn cần so sánh. Tính từ ngắn (một âm tiết) thêm **-er** và **-est**: cheap → cheaper → the cheapest. Tính từ tận cùng bằng một nguyên âm và một phụ âm thì gấp đôi phụ âm: big → bigger → the biggest.",
        "Tính từ dài như comfortable, expensive thì dùng **more** và **the most**: more comfortable, the most expensive. Không dùng more với tính từ ngắn.",
        "Hai tính từ bất quy tắc cần thuộc: good → better → the best, bad → worse → the worst."
      ],
      ex: [["It is cheaper, and it is our best seller.", "Nó rẻ hơn, và là mẫu bán chạy nhất của chúng tôi."], ["It is the biggest room in the apartment.", "Đó là phòng rộng nhất căn hộ."]]
    }
  ],
  mistakes: [
    ["I live in floor five. Go to upstairs.", "I live on the fifth floor. Go upstairs.", "Dùng **on the + số thứ tự + floor**; còn **upstairs, downstairs** không đi với giới từ to."],
    ["I bought many furnitures.", "I bought a lot of furniture.", "**furniture** không đếm được: không thêm -s và dùng a lot of thay cho many."],
    ["two shoes racks", "two shoe racks", "Trong danh từ ghép, danh từ đứng đầu **không thêm -s**."],
    ["The sofa long is two meters.", "The sofa is two meters long.", "Thứ tự đúng: **is + số + đơn vị + tính từ**."],
    ["a wooden round table", "a round wooden table", "Hình dáng đứng **trước** chất liệu."],
    ["Let’s to put the bed here. How about put it there?", "Let’s put the bed here. How about putting it there?", "Sau Let’s là động từ nguyên mẫu không có to; sau **How about** là động từ thêm **-ing**."],
    ["This sofa is more cheap. That is the most big bed.", "This sofa is cheaper. That is the biggest bed.", "Tính từ ngắn thêm **-er, -est**, không dùng more và most."]
  ],
  vocab: [
    ["roof", "mái nhà"], ["ceiling", "trần nhà"], ["floor", "sàn nhà; tầng"], ["stairs", "cầu thang"],
    ["lift / elevator", "thang máy (Anh / Mỹ)"], ["the ground floor", "tầng trệt (kiểu Anh)"], ["basement", "tầng hầm"], ["furniture", "đồ nội thất"],
    ["armchair", "ghế bành"], ["coffee table", "bàn trà"], ["wardrobe", "tủ quần áo"], ["chest of drawers", "tủ ngăn kéo"],
    ["bookcase", "tủ sách"], ["double bed", "giường đôi"], ["mattress", "nệm"], ["curtains", "rèm cửa"],
    ["rug", "thảm"], ["wooden", "bằng gỗ"], ["round", "tròn"], ["rectangular", "hình chữ nhật"],
    ["in the corner", "ở góc phòng"], ["against the wall", "sát tường"], ["furnished", "có sẵn nội thất"], ["assemble", "lắp ráp"]
  ],
  tips: [
    "Nhìn quanh phòng của bạn và liệt kê đồ đạc theo 6 nhóm: chỗ ngồi, bàn, tủ, giường, đèn, đồ trang trí.",
    "Lấy thước đo ba món đồ trong nhà và nói to: “It is two meters long.” (rút gọn: It’s two meters long).",
    "Nhớ câu mẫu để tả đồ theo đúng thứ tự: **a big round white wooden table** (kích cỡ, hình dáng, màu, chất liệu).",
    "Trước khi mua đồ lớn, hỏi **Will it fit?** và nhớ đo cả cửa ra vào, thang máy chứ không chỉ căn phòng.",
    "Thu âm một phút mô tả căn phòng mơ ước của bạn, dùng There is, Let’s và so sánh hơn."
  ]
};
