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
      p: [
        "Nói ở tầng nào thì dùng **on the + số thứ tự + floor**: on the fifth floor. Không nói “in floor five”, vì tầng được xem như một mặt sàn mà bạn đứng lên trên.",
        "Người Anh gọi tầng trệt là **the ground floor**, và **the first floor** là tầng 2 của Việt Nam. Người Mỹ gọi tầng trệt luôn là **the first floor**. Vì vậy khi hẹn ở một tòa nhà nên hỏi lại cho chắc.",
        "**upstairs** (trên lầu) và **downstairs** (dưới lầu) đã mang sẵn nghĩa hướng, nên không thêm to hay in phía trước: Go upstairs."
      ],
      ex: [["I live on the third floor.", "Tôi sống ở tầng ba."], ["Come downstairs!", "Xuống dưới nhà đi!"]]
    },
    { h: "furniture là danh từ không đếm được, và danh từ ghép",
      f: ["furniture (không có a, không thêm -s)", "a piece of furniture", "danh từ + danh từ (chỉ danh từ sau đổi số nhiều)"],
      p: [
        "**furniture** chỉ chung đồ nội thất và là danh từ **không đếm được**: không dùng a, không thêm -s, dùng **a lot of** thay cho many. Muốn đếm từng món thì nói **a piece of furniture**.",
        "Trong danh từ ghép như **coffee table, desk lamp, shoe rack**, danh từ đứng đầu đóng vai trò như tính từ nên **không bao giờ thêm -s**. Chỉ danh từ đứng sau đổi sang số nhiều: two coffee tables, two shoe racks."
      ],
      ex: [["I bought a lot of furniture.", "Tôi đã mua nhiều đồ nội thất."], ["We need two desk lamps.", "Chúng tôi cần hai cái đèn bàn."]]
    },
    { h: "Hỏi và nói kích thước, thứ tự tính từ",
      f: ["How long / wide / big + is + danh từ?", "It is + số + đơn vị + long / wide / high / deep", "kích cỡ → hình dáng → màu → chất liệu + danh từ"],
      p: [
        "Hỏi kích thước bằng **How + tính từ + is…?** (How long is the sofa?). Khi trả lời, số đo đứng trước, tính từ đứng sau cùng: It is two meters long. Đây là thứ tự ngược với tiếng Việt (“dài 2 mét”).",
        "Khi đặt nhiều tính từ trước danh từ, theo thứ tự **kích cỡ → hình dáng → màu → chất liệu**: a big round white wooden table.",
        "Danh từ chỉ chất liệu wood phải đổi thành tính từ **wooden** (bằng gỗ); còn metal và glass giữ nguyên khi đứng trước danh từ: a metal chair, a glass table."
      ],
      ex: [["The sofa is two meters long.", "Cái sofa dài 2 mét."], ["It goes with a round wooden table.", "Nó đi kèm một cái bàn gỗ tròn."]]
    },
    { h: "Gợi ý cách kê đồ: Let’s, Why don’t we, Where should we, How about",
      f: ["Let’s + động từ nguyên mẫu", "Why don’t we + động từ nguyên mẫu?", "Where should we + động từ nguyên mẫu?", "How about + động từ thêm -ing?"],
      p: [
        "Các mẫu câu này dùng để **rủ** hoặc **gợi ý** một việc mà cả hai cùng làm, rất hợp khi cùng nhau kê đồ trong phòng mới. **Let’s** quyết đoán hơn, **Why don’t we…?** và **How about…?** nhẹ nhàng hơn vì để người kia có thể từ chối.",
        "Sau Let’s, Why don’t we, Where should we là **động từ nguyên mẫu không có to**. Riêng **How about** phải theo sau bởi **động từ thêm -ing**: How about putting it in the corner?"
      ],
      ex: [["Let’s put the sofa against the wall.", "Kê sofa sát tường đi."], ["How about putting it in the corner?", "Để nó ở góc phòng thì sao?"]]
    },
    { h: "So sánh hơn và so sánh nhất khi chọn đồ",
      f: ["tính từ ngắn + -er + than", "more + tính từ dài + than", "the + tính từ ngắn + -est / the most + tính từ dài"],
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
