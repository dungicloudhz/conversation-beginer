/* Cheat sheet: Weather (Nói về thời tiết). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Tả thời tiết hôm nay bằng các tính từ như sunny, cloudy, rainy, windy.",
    "Nói nhiệt độ bằng độ C và hiểu khi người Mỹ dùng độ F.",
    "Hỏi và trả lời câu “Thời tiết thế nào?” một cách tự nhiên.",
    "Kể về các mùa và khí hậu ở Việt Nam cho người nước ngoài.",
    "Nói dự báo thời tiết và lên kế hoạch theo thời tiết bằng câu “Nếu trời mưa thì…”."
  ],
  phrases: [
    { h: "Hỏi về thời tiết", rows: [
      ["What is the weather like today?", "Hôm nay thời tiết thế nào?", "Thường nói rút gọn là What’s the weather like today? (What’s = What is)."],
      ["How is the weather in Hanoi?", "Thời tiết ở Hà Nội thế nào?"],
      ["Is it raining outside?", "Ngoài trời có đang mưa không?"],
      ["What is the temperature today?", "Hôm nay bao nhiêu độ?"],
      ["What is the forecast for tomorrow?", "Dự báo ngày mai thế nào?"]
    ]},
    { h: "Tả thời tiết lúc này", rows: [
      ["It is sunny and hot.", "Trời nắng và nóng.", "Người bản xứ nói It’s sunny and hot. (It’s = It is)."],
      ["It is cloudy, but it is not raining.", "Trời nhiều mây nhưng không mưa.", "Dạng rút gọn: It’s cloudy, but it isn’t raining."],
      ["It is raining heavily.", "Trời đang mưa to."],
      ["It is thirty-two degrees today.", "Hôm nay 32 độ."],
      ["It is getting colder.", "Trời đang lạnh dần."]
    ]},
    { h: "Mùa và khí hậu Việt Nam", rows: [
      ["The north of Vietnam has four seasons.", "Miền Bắc Việt Nam có bốn mùa."],
      ["The south has two seasons: the dry season and the rainy season.", "Miền Nam có hai mùa: mùa khô và mùa mưa."],
      ["It rains a lot in July.", "Tháng Bảy mưa nhiều."],
      ["My favorite season is autumn because it is cool.", "Mùa tôi thích nhất là mùa thu vì trời mát."]
    ]},
    { h: "Dự báo và kế hoạch", rows: [
      ["It is going to rain this afternoon.", "Chiều nay trời sẽ mưa.", "Dùng **going to** khi đã thấy dấu hiệu, ví dụ mây đen."],
      ["It will be sunny at the weekend.", "Cuối tuần trời sẽ nắng."],
      ["If it rains, we will stay at home.", "Nếu trời mưa, chúng ta sẽ ở nhà.", "Dạng rút gọn: we’ll = we will."],
      ["Do not forget your umbrella.", "Đừng quên mang ô nhé.", "Dạng rút gọn: Don’t = Do not."]
    ]},
    { h: "Bắt chuyện tự nhiên", rows: [
      ["Lovely weather, isn’t it?", "Trời đẹp quá nhỉ?", "Câu hỏi đuôi luôn nói ở dạng rút gọn; isn’t = is not. Dạng đầy đủ “is it not?” nghe rất trang trọng nên gần như không dùng."],
      ["It is boiling today!", "Hôm nay nóng như thiêu!"],
      ["It is freezing out there.", "Ngoài kia lạnh cóng."],
      ["I got caught in the rain.", "Tôi bị dính mưa."]
    ]}
  ],
  grammar: [
    { h: "Luôn dùng “It” làm chủ ngữ khi nói về thời tiết",
      f: ["It is + tính từ", "It is + động từ thêm -ing"],
      items: [
        { f: "It is + tính từ",
          mean: "**trời (đang) như thế nào**: tả trạng thái chung của thời tiết như nắng, mây, nóng, lạnh. Chữ **It** chỉ là chủ ngữ giả, không dịch ra tiếng Việt.",
          parts: [
            ["It", "chủ ngữ giả, đứng thay cho “trời”. Câu tiếng Anh bắt buộc phải có chủ ngữ nên không thể bỏ."],
            ["is", "động từ be chia theo It. Câu phủ định thêm **not** (It is not cold), câu hỏi đưa is lên đầu (Is it cold?)."],
            ["tính từ", "từ tả thời tiết: sunny, cloudy, windy, hot, cold, cool, warm, humid… Nhiều tính từ được tạo bằng cách thêm **-y** vào danh từ (sun → sunny)."]
          ],
          use: "tả thời tiết hôm nay, thời tiết ở một nơi nào đó, hoặc trả lời câu hỏi “What is the weather like?”. Có thể thêm **very** trước tính từ để nhấn mạnh (It is very hot).",
          note: "Đừng nói “Today is rain” hay “Today is sunny” khi muốn tả trời. Hãy bắt đầu bằng **It is**: It is sunny today. Danh từ rain, sun, cloud không đứng ngay sau is để tả trời.",
          ex: [
            ["It is cloudy this morning.", "Sáng nay trời nhiều mây."],
            ["It is very humid in Hanoi in spring.", "Mùa xuân ở Hà Nội trời rất nồm."],
            ["It is not windy today.", "Hôm nay trời không có gió."],
            ["Is it cold in Da Lat now?", "Bây giờ ở Đà Lạt trời có lạnh không?"]
          ] },
        { f: "It is + động từ thêm -ing",
          mean: "**trời đang (mưa, có tuyết…) ngay lúc này**. Đây là thì hiện tại tiếp diễn, nói về hiện tượng thời tiết đang xảy ra khi mình nói.",
          parts: [
            ["It is", "chủ ngữ giả It cộng với is, giống mẫu trên."],
            ["raining", "**đang mưa** (từ động từ rain)."],
            ["snowing", "**đang có tuyết rơi** (từ động từ snow)."],
            ["drizzling", "**đang mưa phùn**, mưa nhỏ lất phất (từ động từ drizzle, bỏ e rồi thêm -ing)."]
          ],
          use: "khi nhìn ra ngoài và thấy hiện tượng đang diễn ra. Thường đi với **now**, **at the moment** hoặc câu cảm thán như Look!",
          note: "Phân biệt **It is rainy** (trời có mưa, tả chung cả ngày, cả mùa) và **It is raining** (đang mưa ngay lúc nói). Chuyện lặp lại theo mùa thì dùng hiện tại đơn: It rains a lot in July.",
          ex: [
            ["It is raining, so take your umbrella.", "Trời đang mưa, mang ô theo nhé."],
            ["It is snowing in Sa Pa at the moment.", "Lúc này ở Sa Pa đang có tuyết rơi."],
            ["It is drizzling outside.", "Ngoài trời đang mưa phùn."],
            ["Is it still raining?", "Trời vẫn còn mưa à?"]
          ] }
      ],
      p: [
        "Trong tiếng Anh, câu nói về thời tiết luôn cần một chủ ngữ. Vì không có “ai” làm ra thời tiết, người ta dùng chữ **It** làm chủ ngữ giả. Không bao giờ bắt đầu bằng “Today is rain”.",
        "Dùng **It is + tính từ** để tả trạng thái của trời (It is sunny, It is cold). Dùng **It is + động từ thêm -ing** khi hiện tượng đang xảy ra ngay lúc nói (It is raining, It is snowing).",
        "Danh từ thời tiết thêm đuôi **-y** để thành tính từ: sun → sunny, cloud → cloudy, rain → rainy, wind → windy. Nhớ gấp đôi phụ âm cuối với sun → sunny và fog → foggy."
      ],
      ex: [["It is sunny today.", "Hôm nay trời nắng."], ["Look! It is raining.", "Nhìn kìa! Trời đang mưa."]]
    },
    { h: "So sánh hơn để nói trời nóng hơn, lạnh hơn",
      f: ["tính từ ngắn + -er + than", "get + tính từ thêm -er"],
      items: [
        { f: "tính từ ngắn + -er + than",
          mean: "**… hơn …**: so sánh hai thứ, ví dụ hôm nay nóng hơn hôm qua, Hà Nội lạnh hơn Sài Gòn.",
          parts: [
            ["tính từ ngắn", "tính từ có **một âm tiết** như hot, cold, warm, cool, wet."],
            ["-er", "đuôi thêm vào tính từ để thành dạng so sánh hơn: cold → colder. Tính từ kết thúc bằng một nguyên âm và một phụ âm thì **gấp đôi phụ âm**: hot → hotter, wet → wetter. Tính từ kết thúc bằng **-y** thì đổi y thành i: sunny → sunnier."],
            ["than", "**hơn**, đứng trước vật hoặc thời điểm được đem ra so sánh (than yesterday, than Hanoi)."]
          ],
          use: "so sánh thời tiết giữa hai ngày, hai mùa hoặc hai nơi. Mẫu đầy đủ: chủ ngữ + is + tính từ thêm -er + than + danh từ.",
          note: "Không dùng **more** với tính từ ngắn: nói hotter, không nói “more hot”. Đừng quên **than**: “Hanoi is colder Saigon” là sai.",
          ex: [
            ["Hanoi is colder than Ho Chi Minh City in winter.", "Mùa đông Hà Nội lạnh hơn Thành phố Hồ Chí Minh."],
            ["July is wetter than March.", "Tháng Bảy mưa nhiều hơn tháng Ba."],
            ["Is Da Lat cooler than Nha Trang?", "Đà Lạt có mát hơn Nha Trang không?"],
            ["Today is not warmer than yesterday.", "Hôm nay không ấm hơn hôm qua."]
          ] },
        { f: "get + tính từ thêm -er",
          mean: "**ngày càng …, đang … dần**: diễn tả thời tiết đang thay đổi từ từ, ví dụ trời đang lạnh dần.",
          parts: [
            ["get", "**trở nên**. Thường dùng ở thì hiện tại tiếp diễn: It is **getting** …"],
            ["tính từ thêm -er", "dạng so sánh hơn (colder, hotter, warmer, darker), cho thấy sự thay đổi so với trước."]
          ],
          use: "nói sự thay đổi đang diễn ra: chuyển mùa, buổi chiều trời tối dần, nhiệt độ tăng dần. Mẫu thường gặp: It is getting + tính từ thêm -er. Không cần than.",
          note: "Có thể lặp lại để nhấn mạnh: It is getting **colder and colder** (càng ngày càng lạnh). Không nói “It is getting more cold”.",
          ex: [
            ["It is getting colder in November.", "Tháng Mười Một trời đang lạnh dần."],
            ["The days are getting hotter and hotter.", "Ngày càng lúc càng nóng hơn."],
            ["It is getting darker. Let’s go home.", "Trời đang tối dần. Mình về nhà thôi."],
            ["Is it getting warmer now?", "Bây giờ trời đang ấm dần lên à?"]
          ] }
      ],
      p: [
        "Với tính từ ngắn (một âm tiết), thêm **-er** rồi dùng **than** để so sánh: hot → hotter, cold → colder, warm → warmer. Tính từ tận cùng bằng -y thì đổi y thành i rồi thêm -er: windy → windier.",
        "Muốn nói trời “đang dần” nóng lên hay lạnh đi, dùng **It is getting + tính từ thêm -er**. Không dùng “more hot” vì hot là tính từ ngắn."
      ],
      ex: [["Today is hotter than yesterday.", "Hôm nay nóng hơn hôm qua."], ["It is getting warmer.", "Trời đang ấm dần lên."]]
    },
    { h: "Câu hỏi “What is … like?” để hỏi thời tiết thế nào",
      f: ["What is + chủ ngữ + like?"],
      items: [
        { f: "What is + chủ ngữ + like?",
          mean: "**… thế nào? … ra sao?**: hỏi về tính chất, đặc điểm của một thứ, rất hay dùng để hỏi thời tiết.",
          parts: [
            ["What", "từ để hỏi, ở mẫu này dịch là “thế nào”."],
            ["is", "động từ be. Hỏi về quá khứ thì đổi thành **was** (What was the weather like yesterday?)."],
            ["chủ ngữ", "thứ được hỏi: the weather, the summer, Hanoi, your city."],
            ["like", "giới từ nghĩa là **giống như, ra sao**, luôn đứng cuối câu. Không phải động từ “thích”."]
          ],
          use: "khi muốn ai đó tả một nơi, một mùa hay thời tiết. Câu trả lời thường bắt đầu bằng It is + tính từ (It is sunny and warm).",
          note: "Không trả lời bằng like: hỏi “What is the weather like?” thì đáp “It is hot”, không đáp “It likes hot”. Cũng không ghép thành “How is the weather like?”.",
          ex: [
            ["What is the weather like in your city?", "Thời tiết ở thành phố của bạn thế nào?"],
            ["What is the summer like in Hue?", "Mùa hè ở Huế thế nào?"],
            ["What was the weather like on your holiday?", "Thời tiết trong kỳ nghỉ của bạn thế nào?"],
            ["What is Sa Pa like in winter?", "Sa Pa vào mùa đông ra sao?"]
          ] }
      ],
      p: [
        "Đây là mẫu câu hỏi về tính chất của một thứ gì đó, nghĩa là “… thế nào?”. Chữ **like** ở đây không có nghĩa là “thích” mà mang nghĩa “giống như, ra sao”.",
        "Có thể hỏi “How is the weather?” nhưng không được ghép hai kiểu thành “How is the weather like?”."
      ],
      ex: [["What is the weather like in Da Lat?", "Thời tiết ở Đà Lạt thế nào?"], ["What was the weather like yesterday?", "Hôm qua thời tiết thế nào?"]]
    },
    { h: "Hiện tại đơn cho khí hậu, hiện tại tiếp diễn cho lúc này",
      f: ["It rains a lot in + tháng", "It is raining now", "in + mùa hoặc tháng"],
      items: [
        { f: "It rains a lot in + tháng",
          mean: "**(ở đâu đó) tháng … mưa nhiều**: dùng **thì hiện tại đơn** để nói về khí hậu, tức là điều lặp lại hằng năm, luôn đúng.",
          parts: [
            ["It rains", "hiện tại đơn của rain; chủ ngữ It nên động từ thêm **-s**. Phủ định: It **does not rain**. Câu hỏi: **Does** it rain…?"],
            ["a lot", "**nhiều**, đứng sau động từ. Có thể thay bằng **a little** (một chút) hoặc bỏ đi."],
            ["in + tháng", "chỉ thời gian lặp lại: in July, in October."]
          ],
          use: "kể về khí hậu, mùa mưa, mùa khô của một vùng. Có thể thay rain bằng động từ khác như snow (It snows in winter in Europe).",
          note: "Người Việt hay dùng nhầm thì tiếp diễn cho chuyện theo mùa (It is raining a lot every July). Chuyện lặp lại mỗi năm luôn dùng **hiện tại đơn**.",
          ex: [
            ["It rains a lot in Hue in October.", "Ở Huế tháng Mười mưa nhiều."],
            ["It does not rain much in January in Saigon.", "Ở Sài Gòn tháng Một không mưa nhiều."],
            ["Does it rain a lot in Hanoi in August?", "Ở Hà Nội tháng Tám có mưa nhiều không?"],
            ["It snows in Sa Pa in some winters.", "Có những mùa đông Sa Pa có tuyết rơi."]
          ] },
        { f: "It is raining now",
          mean: "**bây giờ trời đang mưa**: dùng **thì hiện tại tiếp diễn** (am / is / are + động từ thêm -ing) cho việc đang xảy ra ngay lúc nói.",
          parts: [
            ["It is", "chủ ngữ giả It cộng với is."],
            ["raining", "động từ thêm -ing, cho thấy hành động đang diễn ra."],
            ["now", "**bây giờ**. Có thể thay bằng **at the moment** (lúc này) hoặc **right now** (ngay bây giờ)."]
          ],
          use: "khi nói về thời tiết đang diễn ra trước mắt, ví dụ khi gọi điện cho bạn hoặc nhìn ra cửa sổ.",
          note: "So sánh: **It rains a lot in July** (thói quen của khí hậu) và **It is raining now** (đang mưa lúc này). Nhìn từ chỉ thời gian để chọn thì: now, at the moment đi với tiếp diễn; every year, in July đi với hiện tại đơn.",
          ex: [
            ["It is raining hard right now.", "Ngay bây giờ trời đang mưa to."],
            ["It is not raining at the moment.", "Lúc này trời không mưa."],
            ["Is it raining in Da Nang now?", "Bây giờ ở Đà Nẵng có đang mưa không?"],
            ["The wind is blowing strongly now.", "Bây giờ gió đang thổi mạnh."]
          ] },
        { f: "in + mùa hoặc tháng",
          mean: "**vào (mùa, tháng) …**: giới từ **in** đứng trước tên mùa và tên tháng để chỉ thời gian.",
          parts: [
            ["in + mùa", "in spring (mùa xuân), in summer (mùa hè), in autumn (mùa thu), in winter (mùa đông), in the rainy season (vào mùa mưa)."],
            ["in + tháng", "in January, in July, in December. Tên tháng luôn **viết hoa** chữ cái đầu."]
          ],
          use: "đặt ở đầu hoặc cuối câu khi nói chuyện xảy ra trong một mùa hay một tháng. Khi nói ngày cụ thể thì đổi sang **on** (on Monday, on 2 September).",
          note: "Tên mùa thường không cần the (in summer), nhưng **the dry season** và **the rainy season** luôn có the. Không dùng “at summer” hay “on July”.",
          ex: [
            ["In summer, it is very hot in Hanoi.", "Vào mùa hè, Hà Nội rất nóng."],
            ["We often go to the beach in June.", "Chúng tôi thường đi biển vào tháng Sáu."],
            ["It is cool and dry in autumn.", "Mùa thu trời mát và khô."],
            ["Do you travel in the rainy season?", "Bạn có đi du lịch vào mùa mưa không?"]
          ] }
      ],
      p: [
        "Khi nói chuyện thường xảy ra, lặp đi lặp lại theo mùa (khí hậu), dùng **thì hiện tại đơn**: It rains a lot in July.",
        "Khi nói chuyện đang diễn ra ngay lúc nói, dùng **thì hiện tại tiếp diễn**: It is raining now.",
        "Trước tên mùa và tên tháng dùng giới từ **in**: in summer, in December."
      ],
      ex: [["It rains a lot in Ho Chi Minh City in July.", "Ở Thành phố Hồ Chí Minh tháng Bảy mưa nhiều."], ["It is very cold in winter.", "Mùa đông rất lạnh."]]
    },
    { h: "Nói về tương lai: will, going to và câu “Nếu… thì…”",
      f: ["It is going to + động từ nguyên mẫu", "It will + động từ nguyên mẫu", "If + hiện tại đơn, chủ ngữ + will + động từ nguyên mẫu"],
      items: [
        { f: "It is going to + động từ nguyên mẫu",
          mean: "**sắp …, chắc chắn sẽ …** vì đã thấy dấu hiệu rõ ràng ngay trước mắt (mây đen, gió mạnh).",
          parts: [
            ["It is", "chủ ngữ giả It cộng với is. Chủ ngữ khác thì chia be theo chủ ngữ (We are going to…)."],
            ["going to", "cụm cố định chỉ tương lai gần có căn cứ. Không dịch là “đi”."],
            ["động từ nguyên mẫu", "rain, snow, be (be hot, be windy), storm…"]
          ],
          use: "khi nhìn trời và đoán dựa trên điều mình đang thấy. Thường đi kèm câu như Look at the sky hoặc Look at those clouds.",
          note: "Với tính từ phải có **be**: It is going to **be** cold, không nói “It is going to cold”.",
          ex: [
            ["Look at the sky. It is going to rain.", "Nhìn trời kìa. Sắp mưa rồi."],
            ["It is going to be very windy this evening.", "Tối nay trời sẽ có gió rất to."],
            ["It is not going to rain today. The sky is clear.", "Hôm nay trời sẽ không mưa đâu. Trời quang lắm."],
            ["Is it going to snow tonight?", "Tối nay trời có tuyết không?"]
          ] },
        { f: "It will + động từ nguyên mẫu",
          mean: "**trời sẽ …**: dự đoán thời tiết tương lai theo bản tin dự báo hoặc theo suy nghĩ chung, không cần dấu hiệu trước mắt.",
          parts: [
            ["will", "**sẽ**, dùng cho mọi chủ ngữ, không đổi hình thức. Phủ định là **will not** (dạng rút gọn won’t)."],
            ["động từ nguyên mẫu", "đứng ngay sau will: rain, be, snow. Với tính từ thì dùng **will be** + tính từ."]
          ],
          use: "nói theo dự báo thời tiết hoặc đoán chuyện ngày mai, tuần sau. Hay đi với tomorrow, next week, at the weekend.",
          note: "Sau will **không** thêm to và không thêm -s: nói It will rain, không nói “It will to rain” hay “It will rains”.",
          ex: [
            ["It will be sunny tomorrow.", "Ngày mai trời sẽ nắng."],
            ["The forecast says it will rain on Monday.", "Dự báo nói thứ Hai trời sẽ mưa."],
            ["It will not be cold next week.", "Tuần sau trời sẽ không lạnh."],
            ["Will it be hot in Hue in May?", "Tháng Năm ở Huế trời sẽ nóng không?"]
          ] },
        { f: "If + hiện tại đơn, chủ ngữ + will + động từ nguyên mẫu",
          mean: "**Nếu … thì sẽ …**: câu điều kiện loại 1, nói về điều có thể xảy ra trong tương lai và kết quả của nó.",
          parts: [
            ["If + hiện tại đơn", "vế điều kiện: **If it rains**, **If it is cold**. Dù nói về tương lai, vế này vẫn dùng hiện tại đơn."],
            ["dấu phẩy", "khi vế If đứng đầu câu thì đặt dấu phẩy trước vế kết quả."],
            ["chủ ngữ + will + động từ nguyên mẫu", "vế kết quả: we will stay at home, I will wear a coat."]
          ],
          use: "lên kế hoạch theo thời tiết. Có thể đảo vế kết quả lên trước, khi đó không cần dấu phẩy: We will stay at home if it rains.",
          note: "Lỗi rất hay gặp: dùng will ở vế If (“If it will rain”). Nhớ: **If không đi với will**.",
          ex: [
            ["If it is sunny, we will go to the beach.", "Nếu trời nắng, chúng ta sẽ đi biển."],
            ["If it rains, I will not go out.", "Nếu trời mưa, tôi sẽ không ra ngoài."],
            ["We will have a picnic if the weather is nice.", "Chúng ta sẽ đi dã ngoại nếu thời tiết đẹp."],
            ["What will you do if it snows?", "Bạn sẽ làm gì nếu có tuyết rơi?"]
          ] }
      ],
      p: [
        "Dùng **going to** khi có dấu hiệu rõ ràng ngay trước mắt (thấy mây đen thì nói It is going to rain). Dùng **will** khi nói theo dự báo hoặc dự đoán chung (It will be cold tomorrow).",
        "Câu điều kiện loại 1 nói về điều có thể xảy ra: vế **If** dùng thì hiện tại đơn, vế còn lại dùng **will**. Không dùng will trong vế If."
      ],
      ex: [["If it is cold, I will wear a coat.", "Nếu trời lạnh, tôi sẽ mặc áo khoác."], ["Look at those dark clouds. It is going to storm.", "Nhìn đám mây đen kìa. Sắp có giông."]]
    }
  ],
  mistakes: [
    ["Today is rain.", "It is raining today.", "Thời tiết luôn dùng chủ ngữ **It**; “rain” là danh từ nên không đứng sau “is” để tả trời."],
    ["Today is more hot than yesterday.", "Today is hotter than yesterday.", "Hot là tính từ ngắn nên thêm **-er** (gấp đôi chữ t), không dùng “more”."],
    ["How is the weather like?", "What is the weather like?", "Chỉ dùng một trong hai kiểu: “What is … like?” hoặc “How is …?”, không ghép cả hai."],
    ["It is raining a lot every July.", "It rains a lot in July.", "Chuyện lặp lại theo mùa dùng **thì hiện tại đơn**, không dùng hiện tại tiếp diễn."],
    ["If it will rain, we stay home.", "If it rains, we will stay home.", "Vế **If** dùng hiện tại đơn; **will** đặt ở vế kết quả."],
    ["It is thirty degree today.", "It is thirty degrees today.", "Từ 2 độ trở lên thì **degree** phải thêm **-s** vì là số nhiều."]
  ],
  vocab: [
    ["sunny", "có nắng"], ["cloudy", "nhiều mây"], ["rainy", "có mưa"], ["windy", "nhiều gió"],
    ["foggy", "có sương mù"], ["stormy", "có giông bão"], ["humid", "ẩm, nồm"], ["drizzle", "mưa phùn"],
    ["freezing", "lạnh cóng (dưới 0 độ C)"], ["cold", "lạnh"], ["cool", "mát"], ["warm", "ấm"],
    ["hot", "nóng"], ["boiling", "nóng như thiêu"], ["degree", "độ"], ["temperature", "nhiệt độ"],
    ["season", "mùa"], ["the dry season", "mùa khô"], ["the rainy season", "mùa mưa"], ["forecast", "dự báo thời tiết"],
    ["umbrella", "cái ô"], ["typhoon", "bão nhiệt đới"], ["heatwave", "đợt nắng nóng"], ["breeze", "gió nhẹ"]
  ],
  tips: [
    "Mỗi sáng nhìn ra cửa sổ và nói một câu bắt đầu bằng **It is…** về thời tiết hôm đó.",
    "Mở ứng dụng thời tiết trên điện thoại, đọc to nhiệt độ hôm nay và ngày mai bằng tiếng Anh, ví dụ: “Tomorrow it will be thirty degrees.”",
    "Nhớ cặp đôi: **It is rainy** (trời có mưa, tả chung) và **It is raining** (đang mưa ngay lúc này).",
    "Thêm **isn’t it?** (dạng đầy đủ: is it not?) vào cuối câu để bắt chuyện với người lạ: “Cold today, isn’t it?”.",
    "Thu âm một bản tin thời tiết dài một phút cho thành phố của bạn, dùng đủ hiện tại, so sánh hơn và will."
  ]
};
