/* Ngữ pháp nền tảng: So sánh hơn và so sánh nhất (bigger, more expensive, the best). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🏆",
  short: "So sánh hơn, so sánh nhất",
  hero: ["So sánh hơn và so sánh nhất", "bigger · more expensive · better · the best"],
  desc: "Tiếng Việt chỉ cần thêm “hơn” hoặc “nhất” sau tính từ, nên người Việt hay nói “more big”, “more better” hay quên **the** trước so sánh nhất. Tiếng Anh chọn **-er / -est** hay **more / the most** theo độ dài của tính từ, và có vài từ bất quy tắc phải thuộc lòng. Học xong bài này, bạn sẽ so sánh hai thành phố, hai món ăn, chọn đồ khi đi mua sắm và kể về những điều “nhất” trong đời mình một cách tự nhiên.",
  chips: ["-er và the -est", "more và the most", "good, better, best", "than và much bigger", "the best … ever"],
  goal: [
    "So sánh hai người, hai nơi, hai món đồ bằng **tính từ + -er + than** và **more + tính từ + than**: “Saigon is **bigger than** Hue.”",
    "Viết và đọc đúng chính tả: **big → bigger**, **easy → easier**, **nice → nicer**.",
    "Dùng đúng các dạng bất quy tắc **better / best, worse / worst, more / most, less / least** khi khen chê.",
    "Nói mức độ chênh lệch: **much cheaper**, **a bit bigger**, **far better**, và nói “cao hơn tôi” bằng **taller than me** hoặc **taller than I am**.",
    "Kể về điều nhất trong đời mình: “It is **the best** film **I have ever seen**.”, “She is **the tallest in** my family.”"
  ],
  sections: [
    { nav: "📏 Tính từ ngắn", title: "Tính từ ngắn: thêm -er và the -est", sub: "cheap → cheaper → the cheapest: so sánh nhanh bằng một đuôi",
      intro: [
        "**Tính từ ngắn** là tính từ có một âm tiết (big, cheap, tall, old) và tính từ hai âm tiết kết thúc bằng **-y** (easy, busy, happy). Với nhóm này, ta không thêm từ “more” mà **thêm đuôi**: **-er** để nói “hơn”, **the + -est** để nói “nhất”.",
        "Khi thêm đuôi phải nhớ bốn quy tắc chính tả trong bảng dưới. Hãy đọc to theo hàng ngang: cheap, cheaper, the cheapest."
      ],
      table: { head: ["Quy tắc", "Tính từ", "So sánh hơn", "So sánh nhất", "Nghĩa"], say: [1, 2, 3],
        rows: [
          ["Thêm **-er / -est**", "cheap", "cheaper", "the cheapest", "rẻ"],
          ["Thêm **-er / -est**", "tall", "taller", "the tallest", "cao"],
          ["Tận cùng **-e**: chỉ thêm **-r / -st**", "nice", "nicer", "the nicest", "đẹp, dễ chịu"],
          ["Tận cùng **-e**: chỉ thêm **-r / -st**", "large", "larger", "the largest", "rộng, lớn"],
          ["Phụ âm + **-y**: đổi **y → i** rồi thêm **-er / -est**", "easy", "easier", "the easiest", "dễ"],
          ["Phụ âm + **-y**: đổi **y → i** rồi thêm **-er / -est**", "busy", "busier", "the busiest", "bận, đông đúc"],
          ["Một nguyên âm + một phụ âm cuối: **gấp đôi phụ âm**", "big", "bigger", "the biggest", "to"],
          ["Một nguyên âm + một phụ âm cuối: **gấp đôi phụ âm**", "hot", "hotter", "the hottest", "nóng"],
          ["Một nguyên âm + một phụ âm cuối: **gấp đôi phụ âm**", "thin", "thinner", "the thinnest", "gầy, mỏng"]
        ] },
      formulas: [
        { f: "A + to be + tính từ ngắn thêm -er + than + B",
          mean: "**A … hơn B**: so sánh hai người, hai vật, hai nơi với nhau.",
          parts: [["tính từ thêm -er", "phần “hơn” đã nằm trong đuôi -er: cheaper = rẻ hơn, older = già hơn, lớn tuổi hơn."], ["than", "nghĩa là “so với, hơn”, đứng **ngay trước** người hoặc vật được đem ra so sánh."], ["không có than", "khi người nghe đã biết so với cái gì: “This one is cheaper.” (rẻ hơn cái kia)."]],
          use: "khi chọn giữa hai món đồ, so sánh hai thành phố, nói về tuổi tác, thời tiết hôm nay và hôm qua. Sau **than** là danh từ, tên người hoặc đại từ.",
          note: "Người Việt hay nói “more cheap” vì dịch từng chữ “rẻ hơn”. Tính từ ngắn **không dùng more**: chỉ nói **cheaper**. Và không quên **than**: không nói “bigger Hue”.",
          ex: [["Saigon is bigger than Hanoi.", "Sài Gòn lớn hơn Hà Nội."], ["My brother is two years older than me.", "Anh trai tôi lớn hơn tôi hai tuổi."], ["Is the bus cheaper than the train?", "Xe buýt có rẻ hơn tàu hỏa không?"], ["Today is not hotter than yesterday.", "Hôm nay không nóng hơn hôm qua."]] },
        { f: "the + tính từ ngắn thêm -est (+ danh từ)",
          mean: "**… nhất**: một người hoặc một vật đứng đầu trong cả một nhóm (ba thứ trở lên).",
          parts: [["the", "**bắt buộc** đứng trước so sánh nhất, vì chỉ có đúng một cái “nhất”."], ["tính từ thêm -est", "the cheapest = rẻ nhất, the tallest = cao nhất."], ["the -est + danh từ", "thường có danh từ theo sau: the cheapest phone, the hottest month."]],
          use: "khi giới thiệu điều nổi bật nhất: món ngon nhất, tháng nóng nhất, người cao nhất lớp. Thường theo sau là **in + nơi chốn, nhóm** (xem phần 5).",
          note: "Đừng quên **the**: không nói “He is tallest”. Và đừng dùng so sánh nhất cho hai thứ: giữa hai cái điện thoại thì nói “the cheaper one”, không cần “the cheapest”.",
          ex: [["July is the hottest month in Hanoi.", "Tháng Bảy là tháng nóng nhất ở Hà Nội."], ["This is the cheapest phone in the shop.", "Đây là cái điện thoại rẻ nhất trong cửa hàng."], ["Who is the youngest in your family?", "Ai nhỏ tuổi nhất trong nhà bạn?"], ["It is not the easiest job, but I like it.", "Đó không phải công việc dễ nhất, nhưng tôi thích nó."]] }
      ],
      mistakes: [
        ["My room is more small than yours.", "My room is smaller than yours.", "small là tính từ ngắn nên thêm **-er**, không dùng more."],
        ["Today is hoter than yesterday.", "Today is hotter than yesterday.", "hot có một nguyên âm và một phụ âm cuối nên **gấp đôi t**: hotter."],
        ["He is tallest in my class.", "He is the tallest in my class.", "So sánh nhất luôn cần **the** phía trước."]
      ],
      talk: { title: "TÌNH HUỐNG: CHỌN QUÁN ĂN TỐI", turns: [
        ["A", "Shall we eat at the noodle shop or the pizza place?", "Mình ăn ở quán bún hay quán pizza nhỉ?"],
        ["B", "The noodle shop is cheaper, and it is closer to my office.", "Quán bún rẻ hơn, và gần văn phòng mình hơn."],
        ["A", "But it is smaller and busier at seven o’clock.", "Nhưng quán đó nhỏ hơn và đông hơn lúc bảy giờ."],
        ["B", "Then let’s go earlier, at six. It is the easiest way.", "Vậy mình đi sớm hơn, lúc sáu giờ. Đó là cách đơn giản nhất."],
        ["A", "Good idea. Their beef noodles are the nicest in town.", "Ý hay đấy. Bún bò ở đó ngon nhất thành phố."]
      ] },
      tip: "Đếm âm tiết trước khi nói: **một âm tiết** (hoặc hai âm tiết tận cùng **-y**) thì thêm đuôi. Nhớ nhanh ba từ mẫu cho ba quy tắc chính tả: nic**er**, eas**ier**, bi**gg**er." },

    { nav: "📚 Tính từ dài", title: "Tính từ dài: more / the most, less / the least", sub: "expensive → more expensive → the most expensive",
      intro: [
        "**Tính từ dài** là tính từ có hai âm tiết trở lên (trừ những từ tận cùng **-y**): expensive, beautiful, modern, famous, comfortable, interesting. Với nhóm này, ta **không thêm đuôi** mà đặt **more** (hơn) hoặc **the most** (nhất) ở phía trước, tính từ giữ nguyên.",
        "Để nói theo chiều ngược lại, “kém hơn” và “kém nhất”, ta dùng **less** và **the least**. Cách này lịch sự, mềm mỏng hơn khi chê: “less expensive” nghe nhẹ nhàng hơn “cheaper”."
      ],
      table: { head: ["Tính từ", "So sánh hơn", "So sánh nhất", "Nghĩa"], say: [0, 1, 2],
        rows: [
          ["expensive", "more expensive", "the most expensive", "đắt"],
          ["beautiful", "more beautiful", "the most beautiful", "đẹp"],
          ["comfortable", "more comfortable", "the most comfortable", "thoải mái, êm"],
          ["interesting", "more interesting", "the most interesting", "thú vị"],
          ["famous", "more famous", "the most famous", "nổi tiếng"],
          ["crowded", "more crowded", "the most crowded", "đông đúc"],
          ["expensive", "less expensive", "the least expensive", "ít đắt hơn / ít đắt nhất"]
        ] },
      formulas: [
        { f: "A + to be + more + tính từ dài + than + B",
          mean: "**A … hơn B** với tính từ dài: more đứng trước, tính từ giữ nguyên.",
          parts: [["more", "nghĩa là “hơn”, chỉ dùng với **tính từ dài**: more modern, more famous."], ["tính từ giữ nguyên", "không thêm -er vào tính từ dài: không có “expensiver”."], ["than + B", "người hoặc vật đem ra so sánh, giống như với tính từ ngắn."]],
          use: "khi so sánh giá cả, vẻ đẹp, sự tiện nghi, độ thú vị: điện thoại, khách sạn, bộ phim, thành phố.",
          note: "Không dùng cả hai cùng lúc: không nói “more cheaper” hay “more expensiver”. Chọn **một** cách: thêm đuôi **hoặc** dùng more.",
          ex: [["This hotel is more comfortable than that one.", "Khách sạn này thoải mái hơn khách sạn kia."], ["Da Nang is more modern than Hoi An.", "Đà Nẵng hiện đại hơn Hội An."], ["Is English more difficult than Chinese?", "Tiếng Anh có khó hơn tiếng Trung không?"], ["The film was not more interesting than the book.", "Bộ phim không thú vị hơn cuốn sách."]] },
        { f: "the most + tính từ dài (+ danh từ)",
          mean: "**… nhất** với tính từ dài: the most beautiful, the most famous.",
          parts: [["the most", "nghĩa là “nhất”, đứng trước tính từ dài; vẫn cần **the**."], ["the most + tính từ + danh từ", "the most famous street, the most expensive dish."]],
          use: "khi giới thiệu nơi nổi tiếng nhất, món đắt nhất, người đẹp nhất, ngày quan trọng nhất.",
          note: "Người Việt hay bỏ the: “It is most famous street.” Hãy nhớ: **the most** đi thành một cặp.",
          ex: [["Ha Long Bay is the most famous place in Quang Ninh.", "Vịnh Hạ Long là nơi nổi tiếng nhất ở Quảng Ninh."], ["This is the most comfortable chair in the house.", "Đây là cái ghế êm nhất trong nhà."], ["What is the most beautiful city in Vietnam?", "Thành phố đẹp nhất Việt Nam là thành phố nào?"], ["It is not the most expensive dish on the menu.", "Đó không phải món đắt nhất trong thực đơn."]] },
        { f: "less / the least + tính từ",
          mean: "**ít … hơn / ít … nhất**: so sánh theo chiều giảm, ngược với more và the most.",
          parts: [["less + tính từ + than", "ít … hơn: less expensive than = rẻ hơn (nói nhẹ nhàng)."], ["the least + tính từ", "ít … nhất: the least expensive = rẻ nhất."], ["not as … as", "cách nói thay thế rất tự nhiên: not as expensive as. Xem trang **Trạng từ và so sánh bằng**."]],
          use: "khi muốn chê nhẹ nhàng, lịch sự, hoặc khi tiếng Anh không có từ ngắn trái nghĩa phù hợp: less crowded, less stressful.",
          note: "less thường đi với **tính từ dài**. Với tính từ ngắn, người bản xứ thích dùng từ trái nghĩa hơn: nói “smaller”, không nói “less big”.",
          ex: [["The train is less comfortable than the plane.", "Tàu hỏa kém thoải mái hơn máy bay."], ["My new job is less stressful.", "Công việc mới của tôi ít căng thẳng hơn."], ["This is the least expensive room in the hotel.", "Đây là phòng rẻ nhất trong khách sạn."], ["Is the market less crowded in the morning?", "Buổi sáng chợ có bớt đông không?"]] }
      ],
      mistakes: [
        ["This phone is more cheaper than that one.", "This phone is cheaper than that one.", "cheap là tính từ ngắn: chỉ thêm **-er**, không thêm more."],
        ["She is beautifuller than her sister.", "She is more beautiful than her sister.", "beautiful có ba âm tiết nên dùng **more**, không thêm đuôi."],
        ["It is most expensive restaurant here.", "It is the most expensive restaurant here.", "So sánh nhất với tính từ dài cũng cần **the most**."]
      ],
      talk: { title: "TÌNH HUỐNG: CHỌN MUA ĐIỆN THOẠI", turns: [
        ["A", "Which phone is better for me, this one or that one?", "Điện thoại nào tốt hơn cho tôi, cái này hay cái kia?"],
        ["B", "This one is more expensive, but the camera is more modern.", "Cái này đắt hơn, nhưng máy ảnh hiện đại hơn."],
        ["A", "Hmm. Do you have a less expensive one?", "Ừm. Bạn có cái nào rẻ hơn không?"],
        ["B", "Yes. This is the least expensive phone in the shop. It is very popular.", "Có. Đây là chiếc rẻ nhất cửa hàng. Nó được nhiều người mua lắm."],
        ["A", "Is it comfortable to hold?", "Cầm có thoải mái không?"],
        ["B", "Yes, it is lighter and more comfortable than the big one.", "Có, nó nhẹ hơn và cầm thoải mái hơn chiếc to."]
      ] },
      tip: "**Ngắn thì thêm đuôi, dài thì thêm more.** Không bao giờ dùng cả hai cùng lúc. Nếu phân vân với tính từ hai âm tiết (như modern, famous), dùng **more** gần như luôn an toàn." },

    { nav: "⭐ Bất quy tắc", title: "So sánh bất quy tắc: good, bad, far, many, little", sub: "better, best, worse, worst: những từ hay dùng nhất lại không theo quy tắc",
      intro: [
        "Có một nhóm nhỏ tính từ **không thêm -er và không dùng more**, mà đổi hẳn thành từ khác. Đây lại là những từ người ta dùng nhiều nhất mỗi ngày để khen, chê, nói về khoảng cách và số lượng, nên phải học thuộc như học bảng cửu chương.",
        "Tin vui: chỉ có khoảng năm nhóm. Đọc to theo hàng ngang mỗi ngày: good, better, the best."
      ],
      table: { head: ["Tính từ", "So sánh hơn", "So sánh nhất", "Nghĩa"], say: [0, 1, 2],
        rows: [
          ["good", "better", "the best", "tốt, ngon, giỏi"],
          ["bad", "worse", "the worst", "tệ, dở"],
          ["far", "farther / further", "the farthest / the furthest", "xa"],
          ["many / much", "more", "the most", "nhiều"],
          ["little", "less", "the least", "ít"]
        ] },
      formulas: [
        { f: "good → better → the best;  bad → worse → the worst",
          mean: "**tốt hơn, tốt nhất; tệ hơn, tệ nhất**: hai cặp dùng nhiều nhất khi khen và chê.",
          parts: [["better / the best", "dạng so sánh của **good** (tốt, ngon, giỏi) và cả **well** (khỏe, giỏi)."], ["worse / the worst", "dạng so sánh của **bad** (tệ, dở) và cả **badly**."], ["feel better / get worse", "hai cụm rất hay dùng khi nói về sức khỏe: thấy đỡ hơn, trở nên tệ hơn."]],
          use: "khi khen chê đồ ăn, phim, dịch vụ, thời tiết, sức khỏe. Sau **better / worse** dùng **than** như các so sánh hơn khác.",
          note: "Không nói “gooder”, “more good”, “badder” hay “more better”. Chỉ một từ: **better**, **worse**.",
          ex: [["My English is better than last year.", "Tiếng Anh của tôi giỏi hơn năm ngoái."], ["This is the best pho in Hanoi.", "Đây là phở ngon nhất Hà Nội."], ["The traffic is worse in the evening.", "Giao thông buổi tối tệ hơn."], ["Are you feeling better today?", "Hôm nay bạn thấy đỡ hơn chưa?"]] },
        { f: "far → farther / further;  many, much → more → the most;  little → less → the least",
          mean: "**xa hơn; nhiều hơn, nhiều nhất; ít hơn, ít nhất**: so sánh khoảng cách và số lượng.",
          parts: [["farther / further", "đều là “xa hơn”. Người Anh hay dùng **further**, người Mỹ hay dùng **farther**; cả hai đều đúng."], ["more / the most", "so sánh của cả **many** (đếm được) và **much** (không đếm được): more people, more money."], ["less / the least", "so sánh của **little**, đi với danh từ **không đếm được**: less time, less sugar."]],
          use: "khi nói về đường đi xa gần, số người, số tiền, thời gian, lượng đường trong đồ uống. Phía sau more, less thường là **danh từ**.",
          note: "Với danh từ **đếm được số nhiều**, chuẩn mực là **fewer** (fewer people), còn **less** đi với danh từ không đếm được (less time). Xem thêm trang **Lượng từ**.",
          ex: [["My office is further from home than yours.", "Văn phòng tôi xa nhà hơn văn phòng bạn."], ["Saigon has more people than Hanoi.", "Sài Gòn đông dân hơn Hà Nội."], ["I want to spend less time on my phone.", "Tôi muốn dành ít thời gian hơn cho điện thoại."], ["Who has the most free time in your family?", "Ai trong nhà bạn có nhiều thời gian rảnh nhất?"]] }
      ],
      mistakes: [
        ["This coffee is more better than that one.", "This coffee is better than that one.", "**better** đã có nghĩa “tốt hơn”, không thêm more."],
        ["Yesterday was the baddest day of my week.", "Yesterday was the worst day of my week.", "So sánh nhất của bad là **the worst**."],
        ["I need more little sugar, please.", "I need less sugar, please.", "“Ít đường hơn” là **less sugar**."]
      ],
      talk: { title: "TÌNH HUỐNG: HỎI THĂM BẠN ỐM", turns: [
        ["A", "Hi Lan. Are you feeling better today?", "Chào Lan. Hôm nay bạn thấy đỡ hơn chưa?"],
        ["B", "A little. Yesterday was the worst day. I had a high fever.", "Đỡ một chút. Hôm qua là ngày tệ nhất. Mình sốt cao."],
        ["A", "Oh no. You need more rest and less work.", "Ôi. Bạn cần nghỉ ngơi nhiều hơn và làm việc ít hơn."],
        ["B", "I know. The clinic near my house is the best, but it is further than the hospital.", "Mình biết. Phòng khám gần nhà mình tốt nhất, nhưng xa hơn bệnh viện."],
        ["A", "I can take you there. Health is the most important thing.", "Mình đưa bạn đi. Sức khỏe là quan trọng nhất."]
      ] },
      tip: "Học theo cặp đối lập: **good, better, best** và **bad, worse, worst**; **much, more, most** và **little, less, least**. Đọc liền một hơi như một câu hát." },

    { nav: "⚖️ than và mức độ", title: "than me hay than I am? Hơn nhiều, hơn một chút", sub: "much bigger, a bit cheaper, more and more, the sooner the better",
      intro: [
        "Sau **than** có hai cách nói người: dùng **đại từ tân ngữ** (than me, than him) trong giao tiếp thường ngày, hoặc dùng **chủ ngữ + động từ** (than I am, than he does) khi muốn câu đầy đủ, trang trọng hơn.",
        "Để nói hơn **nhiều** hay hơn **một chút**, ta đặt một từ chỉ mức độ ngay trước so sánh hơn. Lưu ý: **very** không đi với so sánh hơn. Muốn so sánh bằng (as tall as, not as big as), xem trang **Trạng từ và so sánh bằng**."
      ],
      formulas: [
        { f: "than + đại từ tân ngữ  /  than + chủ ngữ + động từ",
          mean: "**hơn tôi, hơn anh ấy…**: hai cách nói người được so sánh.",
          parts: [["than me / him / her / us / them", "cách nói tự nhiên, phổ biến nhất trong hội thoại."], ["than I am / he is / they are", "chủ ngữ + **to be**, khi so sánh tính chất: taller than I am."], ["than I do / she does / I did", "chủ ngữ + **trợ động từ**, khi so sánh hành động: He runs faster than I do."]],
          use: "khi so sánh mình với anh chị em, bạn bè, đồng nghiệp. Sau than có thể là cả một mệnh đề về thời gian: cheaper than I thought, busier than it was last year.",
          note: "Không nói “taller than I” đứng trơ một mình ở cuối câu; nói **than me** hoặc **than I am**. Và không dùng **then** (sau đó) thay cho **than** (hơn).",
          ex: [["My sister is taller than me.", "Chị tôi cao hơn tôi."], ["My sister is taller than I am.", "Chị tôi cao hơn tôi. (cách nói đầy đủ)"], ["He cooks better than I do.", "Anh ấy nấu ăn ngon hơn tôi."], ["The hotel was cheaper than I thought.", "Khách sạn rẻ hơn tôi nghĩ."]] },
        { f: "much / a lot / far / a bit / a little + so sánh hơn",
          mean: "**hơn nhiều / hơn một chút**: nói rõ mức độ chênh lệch.",
          parts: [["much / a lot", "hơn **nhiều**: much cheaper, a lot bigger. a lot nghe thân mật hơn."], ["far", "hơn **rất nhiều**, nhấn mạnh hơn much: far better, far more expensive."], ["a bit / a little", "hơn **một chút**: a bit smaller, a little more expensive. a bit nghe thân mật hơn."]],
          use: "khi mặc cả, chọn đồ, so sánh giá: “Do you have one that is a bit smaller?”, “It is much more expensive online.” Từ mức độ đứng **trước** cả cụm so sánh, kể cả trước more.",
          note: "Không nói “very bigger” hay “very more expensive”. **very** chỉ đi với tính từ thường (very big); với so sánh hơn phải dùng **much**.",
          ex: [["Hanoi is much colder than Saigon in winter.", "Mùa đông Hà Nội lạnh hơn Sài Gòn nhiều."], ["This one is small. I need one that is a bit bigger.", "Cái này nhỏ. Tôi cần cái to hơn một chút."], ["The plane is far more expensive than the bus.", "Máy bay đắt hơn xe khách rất nhiều."], ["This bag is not much cheaper.", "Cái túi này cũng không rẻ hơn bao nhiêu."]] },
        { f: "so sánh hơn + and + so sánh hơn;  the + so sánh hơn, the + so sánh hơn",
          mean: "**ngày càng …** và **càng … càng …**: hai kiểu so sánh kép hay gặp.",
          parts: [["bigger and bigger", "tính từ ngắn: lặp lại dạng -er: ngày càng to."], ["more and more + tính từ dài", "ngày càng: more and more expensive. Không lặp lại tính từ."], ["the sooner, the better", "càng sớm càng tốt. Các câu cố định khác: the more, the better; the bigger, the better."]],
          use: "khi nói về sự thay đổi theo thời gian (giá cả, giao thông, thời tiết) hoặc khi hẹn: “Call me back, the sooner the better.”",
          note: "Ở trình độ này, chỉ cần dùng các câu cố định như **the sooner the better**, **the more the better**. Không cần tự ghép câu “càng … càng …” dài.",
          ex: [["Hanoi is getting busier and busier.", "Hà Nội ngày càng đông đúc."], ["Houses are more and more expensive.", "Nhà cửa ngày càng đắt."], ["My English is getting better and better.", "Tiếng Anh của tôi ngày càng tốt hơn."], ["When can you start? The sooner, the better.", "Khi nào bạn bắt đầu được? Càng sớm càng tốt."]] }
      ],
      mistakes: [
        ["This shirt is very cheaper than that one.", "This shirt is much cheaper than that one.", "Trước so sánh hơn dùng **much**, không dùng very."],
        ["He is older then me.", "He is older than me.", "“Hơn” là **than**; then nghĩa là “sau đó”."],
        ["Prices are more and more high.", "Prices are higher and higher.", "high là tính từ ngắn nên lặp lại dạng **-er**: higher and higher."]
      ],
      talk: { title: "TÌNH HUỐNG: MẶC CẢ Ở CHỢ", turns: [
        ["A", "How much is this jacket?", "Cái áo khoác này bao nhiêu tiền?"],
        ["B", "Five hundred thousand dong. It is much better than the cheap ones.", "Năm trăm nghìn đồng. Nó tốt hơn nhiều so với mấy cái rẻ."],
        ["A", "That is a bit more expensive than I thought. Can you make it cheaper?", "Đắt hơn mình nghĩ một chút. Bớt cho mình được không?"],
        ["B", "Four hundred and fifty. Prices are getting higher and higher, you know.", "Bốn trăm năm mươi. Giá cả ngày càng tăng mà bạn."],
        ["A", "OK. And do you have one that is a bit smaller? My sister is shorter than me.", "Được. Bạn có cỡ nhỏ hơn một chút không? Em gái mình thấp hơn mình."]
      ] },
      tip: "Nghĩ “**very** cho tính từ, **much** cho so sánh”: very cheap nhưng much cheaper. Và sau than, cứ nói **me, him, her** là an toàn và tự nhiên nhất." },

    { nav: "🏆 Nhất trong đời", title: "So sánh nhất với in, of và ever", sub: "the tallest in my class, the best film I have ever seen",
      intro: [
        "Câu so sánh nhất thường nói rõ “nhất **trong** nhóm nào”. Tiếng Việt chỉ có một từ “trong”, nhưng tiếng Anh chọn **in** hoặc **of** tùy phía sau là nơi chốn, tập thể hay một con số, một khoảng thời gian.",
        "Khi kể về trải nghiệm của bản thân, người bản xứ rất hay dùng mẫu **the best … I have ever …** (… nhất mà tôi từng …). Đây là câu cực kỳ hữu ích để kể chuyện du lịch, ăn uống, xem phim."
      ],
      formulas: [
        { f: "the + so sánh nhất + in / of + nhóm",
          mean: "**nhất trong …**: nói rõ phạm vi của sự so sánh.",
          parts: [["in + nơi chốn, tập thể", "in the world, in Vietnam, in my family, in my class, in the company."], ["of + số lượng, khoảng thời gian", "of the three, of all, of my friends, of the year, of my life."], ["one of the + so sánh nhất + danh từ số nhiều", "một trong những … nhất: one of the best restaurants."]],
          use: "khi giới thiệu thành phố, gia đình, đồng nghiệp: “She is the oldest in my family.”, “It was the happiest day of my life.”",
          note: "Người Việt hay nói “the tallest of my class” vì dịch “của lớp”. Với nơi chốn và tập thể dùng **in**. Sau **one of the** nhớ dùng **danh từ số nhiều**.",
          ex: [["Mount Fansipan is the highest mountain in Vietnam.", "Fansipan là ngọn núi cao nhất Việt Nam."], ["He is the funniest of all my friends.", "Anh ấy là người vui tính nhất trong tất cả bạn bè của tôi."], ["My wedding was the happiest day of my life.", "Đám cưới là ngày hạnh phúc nhất đời tôi."], ["Hoi An is one of the most beautiful towns in Vietnam.", "Hội An là một trong những thị trấn đẹp nhất Việt Nam."]] },
        { f: "the + so sánh nhất + danh từ + I have ever + quá khứ phân từ (cột thứ ba)",
          mean: "**… nhất mà tôi từng …**: kể về trải nghiệm “nhất” trong đời mình.",
          parts: [["I have ever + quá khứ phân từ", "seen, eaten, visited, been to, read, had: dạng cột thứ ba của động từ."], ["Have you ever …?", "câu hỏi để mời người khác kể: “What is the best film you have ever seen?”"], ["the worst … ever", "nói gọn kiểu thân mật: “It was the worst trip ever!”"]],
          use: "khi kể chuyện du lịch, đồ ăn, phim ảnh, sách, hoặc khen ai đó: “This is the best coffee I have ever had.”",
          note: "Sau ever phải là **quá khứ phân từ (cột thứ ba)**: seen, không phải saw. Xem bảng động từ bất quy tắc trên trang **Tra cứu ngữ pháp**.",
          ex: [["It is the best film I have ever seen.", "Đó là bộ phim hay nhất tôi từng xem."], ["This is the most delicious cake I have ever eaten.", "Đây là cái bánh ngon nhất tôi từng ăn."], ["What is the most beautiful place you have ever visited?", "Nơi đẹp nhất bạn từng đến là đâu?"], ["It was the worst hotel I have ever stayed in.", "Đó là khách sạn tệ nhất tôi từng ở."]] }
      ],
      mistakes: [
        ["She is the tallest of my family.", "She is the tallest in my family.", "Phía sau là một tập thể (gia đình) nên dùng **in**."],
        ["Pho is one of the best dish in Vietnam.", "Pho is one of the best dishes in Vietnam.", "Sau **one of the** phải là danh từ **số nhiều**: dishes."],
        ["It is the best film I have ever saw.", "It is the best film I have ever seen.", "Sau **have ever** dùng quá khứ phân từ (cột thứ ba): **seen**."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ VỀ CHUYẾN DU LỊCH", turns: [
        ["A", "What is the most beautiful place you have ever visited?", "Nơi đẹp nhất bạn từng đến là đâu?"],
        ["B", "Ha Giang. It is one of the most amazing places in Vietnam.", "Hà Giang. Đó là một trong những nơi tuyệt vời nhất Việt Nam."],
        ["A", "Really? Was it hard to get there?", "Thật à? Đến đó có khó không?"],
        ["B", "Yes, the road was the longest of the whole trip. But the views were the best I have ever seen.", "Có, đoạn đường đó dài nhất cả chuyến. Nhưng cảnh đẹp nhất mà mình từng thấy."],
        ["A", "And the food?", "Còn đồ ăn thì sao?"],
        ["B", "I had the best corn wine of my life there!", "Mình đã uống rượu ngô ngon nhất đời ở đó!"]
      ] },
      tip: "**in** cho nơi chốn và tập thể (in my class, in Vietnam), **of** cho con số và thời gian (of the three, of my life). Học thuộc một câu khung: “It is **the best** … **I have ever** …”." }
  ],
  speak: [
    { q: "Which city do you prefer, Hanoi or Saigon? Why?", vi: "Bạn thích thành phố nào hơn, Hà Nội hay Sài Gòn? Tại sao?", hint: "Dùng **so sánh hơn + than**: Hanoi is **older / more peaceful than** Saigon. Saigon is **bigger / busier**.",
      answers: [["I prefer Hanoi. It is older and more peaceful than Saigon, and the food is better.", "Tôi thích Hà Nội hơn. Nó cổ kính và yên bình hơn Sài Gòn, và đồ ăn ngon hơn."], ["I prefer Saigon. It is warmer than Hanoi, and the people are friendlier.", "Tôi thích Sài Gòn hơn. Nó ấm hơn Hà Nội, và mọi người thân thiện hơn."]] },
    { q: "Which do you like more, pho or bun cha?", vi: "Bạn thích phở hay bún chả hơn?", hint: "Dùng **tính từ ngắn thêm -er** hoặc **more + tính từ dài**: Bun cha is **sweeter**, pho is **healthier / more filling**.",
      answers: [["I like pho more. It is healthier and lighter than bun cha.", "Tôi thích phở hơn. Nó tốt cho sức khỏe hơn và nhẹ hơn bún chả."], ["Bun cha, because it is more delicious and a bit cheaper near my office.", "Bún chả, vì nó ngon hơn và gần văn phòng tôi thì rẻ hơn một chút."]] },
    { q: "Who is the oldest and who is the youngest in your family?", vi: "Ai lớn tuổi nhất và ai nhỏ tuổi nhất trong nhà bạn?", hint: "Dùng **the + -est + in my family**, và so sánh mình với anh chị em: **older / younger than me**.",
      answers: [["My grandmother is the oldest in my family. My little brother is the youngest. He is ten years younger than me.", "Bà tôi lớn tuổi nhất nhà. Em trai tôi nhỏ nhất. Em ấy kém tôi mười tuổi."], ["My father is the oldest, and I am the youngest. My sister is two years older than I am.", "Bố tôi lớn tuổi nhất, còn tôi nhỏ nhất. Chị tôi hơn tôi hai tuổi."]] },
    { q: "You want to buy a new phone. Which is more important for you: price or camera?", vi: "Bạn muốn mua điện thoại mới. Với bạn, giá hay máy ảnh quan trọng hơn?", hint: "Dùng **more important than**, **cheaper**, **a bit / much more expensive**.",
      answers: [["Price is more important for me. I want a cheaper phone, not the most expensive one.", "Giá quan trọng hơn với tôi. Tôi muốn điện thoại rẻ hơn, không phải chiếc đắt nhất."], ["The camera is more important. I do not mind paying a bit more for a better camera.", "Máy ảnh quan trọng hơn. Tôi không ngại trả thêm một chút để có máy ảnh tốt hơn."]] },
    { q: "What is the best film you have ever seen?", vi: "Bộ phim hay nhất bạn từng xem là phim gì?", hint: "Khung câu: **The best film I have ever seen is …** rồi thêm một lý do bằng so sánh.",
      answers: [["The best film I have ever seen is Titanic. It is sadder and more beautiful than other love stories.", "Bộ phim hay nhất tôi từng xem là Titanic. Nó buồn hơn và đẹp hơn những chuyện tình khác."], ["It is Mat Biec. I think it is one of the best Vietnamese films.", "Đó là Mắt Biếc. Tôi nghĩ đó là một trong những phim Việt hay nhất."]] },
    { q: "Is your life now better or worse than five years ago?", vi: "Cuộc sống bây giờ của bạn tốt hơn hay tệ hơn năm năm trước?", hint: "Dùng **better / worse than**, **much / a bit**, và **busier, happier, more stressful**.",
      answers: [["It is much better. I have a better job, and I am happier than before.", "Tốt hơn nhiều. Tôi có công việc tốt hơn và hạnh phúc hơn trước."], ["It is a bit busier and more stressful, but my English is better!", "Bận rộn và căng thẳng hơn một chút, nhưng tiếng Anh của tôi giỏi hơn!"]] },
    { q: "What was the happiest day of your life?", vi: "Ngày hạnh phúc nhất đời bạn là ngày nào?", hint: "Dùng **the happiest day of my life** (chú ý **of**, không phải in).",
      answers: [["The happiest day of my life was my wedding day.", "Ngày hạnh phúc nhất đời tôi là ngày cưới."], ["It was the day I graduated from university. My parents were the proudest people in the room.", "Đó là ngày tôi tốt nghiệp đại học. Bố mẹ tôi là những người tự hào nhất trong phòng."]] },
    { q: "How is your commute now? Is the traffic getting better?", vi: "Đường đi làm của bạn bây giờ thế nào? Giao thông có đỡ hơn không?", hint: "Dùng so sánh kép **worse and worse / busier and busier** hoặc **further / longer than**.",
      answers: [["No, it is getting worse and worse. The roads are busier and busier.", "Không, ngày càng tệ. Đường ngày càng đông."], ["My new office is further from home, so my commute is longer than before.", "Văn phòng mới xa nhà hơn nên đường đi làm dài hơn trước."]] }
  ],
  exercises: [
    { title: "Phần 1: Viết dạng so sánh đúng của từ trong ngoặc", items: [
      { q: "Saigon is ___ than Hanoi. (big)", a: ["bigger"], hint: "gấp đôi phụ âm cuối" },
      { q: "This test is ___ than the last one. (easy)", a: ["easier"], hint: "đổi y thành i" },
      { q: "This hotel is ___ than that one. (expensive)", a: ["more expensive"], hint: "tính từ dài" },
      { q: "July is ___ month of the year in Hanoi. (hot)", a: ["the hottest"], hint: "so sánh nhất, nhớ the" },
      { q: "My English is ___ than last year. (good)", a: ["better"], hint: "bất quy tắc" },
      { q: "That was ___ meal I have ever eaten. (bad)", a: ["the worst"], hint: "bất quy tắc, so sánh nhất" },
      { q: "My grandfather is the ___ in my family. (old)", a: ["oldest", "eldest"], hint: "the đã có sẵn" },
      { q: "Hoi An is one of the ___ towns in Vietnam. (beautiful)", a: ["most beautiful"], hint: "the đã có sẵn" },
      { q: "It is the best film I have ever ___. (see)", a: ["seen"], hint: "quá khứ phân từ (cột thứ ba)" },
      { q: "My new office is ___ from home than my old one. (far)", a: ["further", "farther"], hint: "xa hơn" }
    ] },
    { title: "Phần 2: Chọn câu đúng", items: [
      { q: "“Cái áo này rẻ hơn nhiều.”", options: ["This shirt is very cheaper.", "This shirt is much cheaper.", "This shirt is more cheaper."], a: 1, why: "Trước so sánh hơn dùng **much** để nói “hơn nhiều”; không dùng very, không dùng more với cheap." },
      { q: "Chọn câu đúng:", options: ["My brother is taller than me.", "My brother is taller then me.", "My brother is more tall than me."], a: 0, why: "Dùng **than** (hơn) và **taller** (tính từ ngắn thêm -er)." },
      { q: "“Cô ấy là người trẻ nhất trong công ty.”", options: ["She is the youngest of the company.", "She is youngest in the company.", "She is the youngest in the company."], a: 2, why: "So sánh nhất cần **the**, và với một tập thể (công ty) dùng **in**." },
      { q: "“Phở là một trong những món ngon nhất.”", options: ["Pho is one of the best dish.", "Pho is one of the best dishes.", "Pho is one of the better dishes."], a: 1, why: "**one of the + so sánh nhất + danh từ số nhiều**." },
      { q: "“Tôi muốn ít đường hơn.”", options: ["I want less sugar.", "I want more little sugar.", "I want littler sugar."], a: 0, why: "So sánh hơn của little là **less**." },
      { q: "“Hà Nội ngày càng đông.”", options: ["Hanoi is getting more and more busy.", "Hanoi is getting busier and busier.", "Hanoi is getting busy and busy."], a: 1, why: "busy là tính từ ngắn tận cùng -y: lặp lại dạng **busier and busier**." },
      { q: "“Anh ấy nấu ăn ngon hơn tôi.”", options: ["He cooks better than I do.", "He cooks better than I am.", "He cooks more good than me."], a: 0, why: "So sánh hành động (cooks) nên sau than là **I do**; better là so sánh của well." }
    ] }
  ],
  vocab: [["cheap / cheaper / the cheapest", "rẻ / rẻ hơn / rẻ nhất"], ["big / bigger / the biggest", "to / to hơn / to nhất"], ["easy / easier / the easiest", "dễ / dễ hơn / dễ nhất"], ["expensive / more expensive / the most expensive", "đắt / đắt hơn / đắt nhất"], ["good / better / the best", "tốt / tốt hơn / tốt nhất"], ["bad / worse / the worst", "tệ / tệ hơn / tệ nhất"], ["far / further / the furthest", "xa / xa hơn / xa nhất"], ["many, much / more / the most", "nhiều / nhiều hơn / nhiều nhất"], ["little / less / the least", "ít / ít hơn / ít nhất"], ["than", "hơn, so với"], ["much / a lot / far + so sánh hơn", "hơn nhiều"], ["a bit / a little + so sánh hơn", "hơn một chút"], ["the best … I have ever …", "… nhất mà tôi từng …"], ["the sooner, the better", "càng sớm càng tốt"]],
  tips: [
    "Mỗi khi đi chợ hoặc mua sắm online, tự nói thầm một câu so sánh: “This one is **cheaper**, but that one is **better**.”",
    "Chọn hai thành phố bạn biết và nói năm câu so sánh về chúng: to hơn, nóng hơn, đắt hơn, đẹp hơn, đông hơn.",
    "Đọc to bảng bất quy tắc mỗi sáng: **good, better, best; bad, worse, worst; far, further, furthest**.",
    "Trước khi nói, đếm âm tiết của tính từ: một âm tiết thì thêm **-er**, từ ba âm tiết trở lên thì dùng **more**.",
    "Chuẩn bị sẵn ba câu “nhất” về đời mình: món ngon nhất, nơi đẹp nhất, bộ phim hay nhất **I have ever** … để dùng khi làm quen."
  ]
};