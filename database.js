const attractions = [
    {
        name: "秦始皇兵马俑博物馆",
        location: "陕西省西安市临潼区",
        type: ["历史古迹"],
        budget: { min: 1500, max: 5000 },
        description: "世界第八大奇迹，中国最大的古代军事博物馆，展示了秦始皇陵陪葬坑中的大量陶制兵马俑，生动再现了秦朝军队的磅礴气势。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["一号坑全景", "跪射俑", "铜车马展厅"],
        details: "位于西安市临潼区秦陵北路，是秦始皇陵的一部分，被称作“世界第八大奇迹”。馆内展示着大量栩栩如生的兵马俑和珍贵文物，规模宏大。这些兵马俑形态各异，神情逼真，生动再现了秦朝军队的威武雄姿，让人仿佛穿越时空，感受到秦朝的强大与辉煌。"
    },
    {
        name: "华清宫",
        location: "陕西省西安市临潼区",
        type: ["历史古迹"],
        budget: { min: 1000, max: 3000 },
        description: "唐代皇家行宫，因唐玄宗与杨贵妃的爱情故事和近代西安事变而闻名，内有九龙湖、飞霜殿等古迹，夜晚可观赏实景演出《长恨歌》。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["四季皆宜"],
        highlights: ["唐华清宫遗址", "五间厅", "《长恨歌》演出"],
        details: "地处西安市临潼区华清路38号，是中国古代帝王的离宫。这里以温泉和丰富的历史文化遗迹闻名，唐玄宗和杨贵妃的爱情故事为其增添了浪漫色彩。华清宫内有唐玄宗和杨贵妃的沐浴池、长生殿等著名景点，园林景观优美，建筑风格古朴典雅，既能让人享受温泉的舒适，又能领略到深厚的历史文化底蕴。"
    },
    {
        name: "延安革命纪念地景区",
        location: "陕西省延安市",
        type: ["红色文化"],
        budget: { min: 1000, max: 2000 },
        description: "中国革命圣地，包含枣园、杨家岭、王家坪等革命旧址，展示了中共中央在延安时期领导中国革命的历史进程。",
        suitable: ["自驾", "跟团"],
        bestSeason: ["春秋季"],
        highlights: ["枣园革命旧址", "杨家岭中共七大会址", "宝塔山"],
        details: "位于延安市，是中国革命的重要圣地。这里有杨家岭、枣园、王家坪等革命旧址，以及延安革命纪念馆等。在杨家岭，能看到中共中央办公厅旧址和著名的七大会议会址；枣园曾是中共中央书记处所在地，众多重要决策在此诞生；延安革命纪念馆通过丰富的文物和史料，全面展示了中国共产党在延安时期的光辉历史和革命精神，让人深刻感受到革命先辈们的艰苦奋斗和伟大理想。"
    },
    {
        name: "黄帝陵景区",
        location: "陕西省延安市黄陵县",
        type: ["历史古迹"],
        budget: { min: 800, max: 1500 },
        description: "中华民族人文初祖轩辕黄帝的陵寝，是海内外炎黄子孙寻根祭祖的圣地，分为轩辕庙和黄帝陵两部分。",
        suitable: ["自驾", "跟团"],
        bestSeason: ["清明前后", "重阳节"],
        highlights: ["轩辕庙", "黄帝手植柏", "汉武仙台"],
        details: "黄帝陵是中华民族始祖轩辕黄帝的陵寝，位于陕西省延安市黄陵县桥山之巅。景区由轩辕庙和黄帝陵两部分组成，轩辕庙内保存有大量历代碑刻和古柏，其中黄帝手植柏相传为黄帝亲植，树龄超五千年；黄帝陵封土高3.6米，周长48米，体现了“中华第一陵”的庄严与神圣，是全球华人寻根祭祖的精神家园。"
    },
    {
        name: "大雁塔·大唐芙蓉园景区",
        location: "陕西省西安市",
        type: ["历史古迹"],
        budget: { min: 1500, max: 3000 },
        description: "以唐代文化为主题的景区，包含玄奘藏经之地大雁塔和再现盛唐风貌的皇家园林大唐芙蓉园，展现了盛唐文化的精髓。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["大雁塔", "大唐芙蓉园夜景", "《梦回大唐》演出"],
        details: "景区由大雁塔和大唐芙蓉园组成。大雁塔始建于唐代，是玄奘为保存佛经主持修建的楼阁式砖塔，高64.517米，塔身留存大量唐代碑刻；大唐芙蓉园是以盛唐皇家园林为蓝本复建的主题公园，园内有紫云楼、仕女馆、御宴宫等建筑，夜晚的水幕电影和灯光秀完美再现盛唐繁华景象。"
    },
    {
        name: "华山景区",
        location: "陕西省渭南市华阴市",
        type: ["自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "中国五岳之一，以险峻著称，有“奇险天下第一山”之称，包含东、西、南、北、中五峰，沿途有长空栈道、鹞子翻身等惊险景点。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季", "冬季雪景"],
        highlights: ["长空栈道", "鹞子翻身", "华山日出", "西峰绝壁"],
        details: "华山为秦岭支脉，主峰海拔2154.9米，以“奇、险、峻、秀”闻名。北峰（云台峰）孤悬云外，东峰（朝阳峰）是观日出佳地，西峰（莲花峰）绝壁千丈，南峰（落雁峰）为最高峰，中峰（玉女峰）传说丰富。长空栈道悬挂于南峰东侧山腰，鹞子翻身是东峰著名险道，登山途中可体验“自古华山一条路”的险峻与壮美。"
    },
    {
        name: "法门寺佛文化景区",
        location: "陕西省宝鸡市扶风县",
        type: ["历史古迹"],
        budget: { min: 1200, max: 2500 },
        description: "世界佛教圣地，因供奉释迦牟尼佛指骨舍利而闻名，景区包含法门寺院、合十舍利塔和法门寺博物馆。",
        suitable: ["自驾", "跟团"],
        bestSeason: ["春秋季"],
        highlights: ["合十舍利塔", "地宫", "佛指舍利瞻礼"],
        details: "法门寺始建于东汉，被誉为“关中塔庙始祖”。1987年地宫出土释迦牟尼佛指骨舍利及数千件唐代宫廷珍宝，震惊世界。景区内的合十舍利塔高148米，呈双手合十造型；地宫为唐密曼荼罗格局，保存着唐代皇家供养的金银器、琉璃器、丝绸等文物；法门寺博物馆集中展示了地宫出土的稀世珍宝，是研究唐代历史与佛教文化的重要场所。"
    },
    {
        name: "太白山旅游景区",
        location: "陕西省宝鸡市眉县",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "秦岭山脉主峰，海拔3771.2米，是中国大陆青藏高原以东的第一高峰，以高、寒、险、奇、秀著称，有第四纪冰川遗迹。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季避暑", "秋季红叶"],
        highlights: ["天圆地方", "大爷海", "拔仙台", "高山杜鹃"],
        details: "太白山是秦岭主峰，拥有独特的高山生态系统。海拔3511米的天圆地方是秦岭南北分界线，在此可体验“一日历四季”的气候变迁；大爷海是高山湖泊，海拔3590米，被称为“秦岭明珠”；拔仙台为太白山最高点，登顶可俯瞰关中平原与秦岭群峰；夏季高山杜鹃绽放，秋季层林尽染，是徒步与科考的理想之地。"
    },
    {
        name: "西安城墙·碑林历史文化景区",
        location: "陕西省西安市",
        type: ["历史古迹"],
        budget: { min: 1000, max: 1500 },
        description: "由中国现存规模最大、保存最完整的古城墙和收藏大量碑石墓志的碑林博物馆组成，集中展现了西安的历史文化底蕴。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["城墙骑行", "碑林书法", "钟鼓楼夜景"],
        details: "西安城墙始建于明代，周长13.74公里，墙高12米，现存护城河、吊桥、箭楼等设施完整。游客可租赁自行车绕行城墙，感受古城格局；碑林博物馆是中国最早的石质书库，收藏从汉至清碑刻4000余通，包括《开成石经》《大秦景教碑》《颜氏家庙碑》等书法珍品，被誉为“中国书法艺术的圣殿”。"
    },
    {
        name: "麦积山石窟",
        location: "甘肃省天水市麦积区",
        type: ["历史古迹", "自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "中国四大石窟之一，以精美的泥塑艺术闻名于世，被誉为“东方雕塑艺术陈列馆”，石窟开凿在悬崖峭壁上，现存洞窟221个。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["泥塑珍品", "凌空栈道", "麦积烟雨"],
        details: "麦积山因形如麦垛得名，石窟始凿于后秦，现存洞窟分东崖和西崖两部分。窟内保存从后秦至明清的泥塑、石雕7200余件，壁画1000余平方米，尤以宋代写实泥塑著称，如第123窟的童男童女像生动传神。悬空而建的凌空栈道长达千米，惊险壮观；雨后初霁时，麦积山云雾缭绕，形成“麦积烟雨”的独特景致，为秦州八景之首。"
    },
    {
        name: "炳灵寺世界文化遗产旅游区",
        location: "甘肃省临夏回族自治州永靖县",
        type: ["历史古迹", "自然风光"],
        budget: { min: 1200, max: 2500 },
        description: "以炳灵寺石窟为核心，集石窟艺术、黄河风光、民族风情于一体的旅游区，石窟保存有大量西秦、北魏、唐、宋、元、明、清各代的佛像和壁画。",
        suitable: ["自驾", "跟团"],
        bestSeason: ["春秋季"],
        highlights: ["169窟西秦壁画", "刘家峡水库", "黄河三峡"],
        details: "炳灵寺石窟开凿于西晋，现存洞窟216个，以唐代造像最盛。第169窟为天然洞穴，内有西秦建弘元年（420年）题记，是中国现存最早的有明确纪年的佛教石窟；窟内壁画色彩艳丽，保存完好。景区依托刘家峡水库，可乘船游览黄河三峡（炳灵峡、刘家峡、盐锅峡），沿途欣赏丹霞地貌与黄河峡谷的壮美，感受多民族聚居的风土人情。"
    },
    {
        name: "崆峒山风景名胜区",
        location: "甘肃省平凉市崆峒区",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "中国道教名山，有“西来第一山”之称，集奇险灵秀的自然景观和古朴精湛的人文景观于一体，是崆峒派武术的发源地。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["隍城建筑群", "雷声峰", "弹筝峡"],
        details: "崆峒山是古丝绸之路要塞，主峰海拔2123米，由大小数十座山峰组成。隍城是崆峒山道教建筑群的核心，始建于唐代，现存明清建筑多座，包括三皇殿、五帝殿、圣母宫等；雷声峰陡峭险峻，石崖上刻有“壁立万仞”等摩崖石刻；弹筝峡因流水声如弹筝得名，峡谷内林木葱郁，潭瀑相连，是山水景观的精华所在。"
    },
    {
        name: "嘉峪关文物景区",
        location: "甘肃省嘉峪关市",
        type: ["历史古迹"],
        budget: { min: 1500, max: 3000 },
        description: "明代长城西端起点，有“天下第一雄关”之称，由内城、外城、罗城、瓮城、城壕和南北两翼长城组成，是现存长城上的最大关隘。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["嘉峪关关城", "悬壁长城", "长城第一墩"],
        details: "嘉峪关关城始建于明洪武五年（1372年），由内城、外城、罗城、瓮城及长城组成，总占地面积33500余平方米。内城有光化门、柔远门、嘉峪关楼等建筑，外城有“天下第一雄关”匾额；悬壁长城沿黑山山脊修建，形似倒挂的长城，气势磅礴；长城第一墩（讨赖河墩）是明代长城的西端起点，坐落于56米高的悬崖之上，展现了古代军事工程的巧妙设计。"
    },
    {
        name: "张掖七彩丹霞地质公园",
        location: "甘肃省张掖市临泽县",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "中国最美的七大丹霞之一，以层理交错的线条、色彩斑斓的色调、灿烂夺目的壮美画图而著称，是国内唯一的丹霞地貌与彩色丘陵景观复合区。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "雨后初晴"],
        highlights: ["七彩虹霞台", "云海台", "锦绣台", "刀山火海"],
        details: "张掖丹霞地貌形成于600万年前，面积约50平方公里，由红色砾石、砂岩和泥岩组成。景区分为七彩霞峡、七彩塔、七彩屏等多个区域，在阳光照射下，岩层呈现出红、黄、橙、绿、白等多种色彩，形成“色如渥丹，灿若明霞”的奇观。七彩虹霞台是观日落的最佳地点，雨后初晴时色彩尤为艳丽，是摄影爱好者的创作天堂。"
    },
    {
        name: "鸣沙山月牙泉",
        location: "甘肃省酒泉市敦煌市",
        type: ["自然风光"],
        budget: { min: 1200, max: 2500 },
        description: "以沙泉共处的沙漠奇观著称于世，鸣沙山沙峰起伏，金光灿灿，月牙泉处于鸣沙山环抱之中，因其形酷似一弯新月而得名。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["骑骆驼", "滑沙", "月牙泉", "沙漠日出日落"],
        details: "鸣沙山由流沙堆积而成，沙垄蜿蜒如虬龙，人从沙山滑落时，沙粒摩擦发出轰鸣声响，故名“鸣沙”。月牙泉古称“沙井”，自汉朝起即为“敦煌八景”之一，因形状如新月而得名，泉水清澈见底，虽地处沙漠却千年不涸，周边有月泉阁、鸣月阁等古建筑。游客可体验骑骆驼穿越沙漠、滑沙等活动，欣赏“大漠孤烟直，长河落日圆”的壮景。"
    },
    {
        name: "敦煌莫高窟",
        location: "甘肃省酒泉市敦煌市",
        type: ["历史古迹"],
        budget: { min: 2000, max: 5000 },
        description: "世界上现存规模最大、内容最丰富的佛教艺术地，集建筑、彩塑、壁画于一体，保存有从十六国到元代的洞窟735个，壁画4.5万平方米。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["九层楼", "藏经洞", "卧佛殿", "数字展示中心"],
        details: "莫高窟开凿于前秦建元二年（366年），现存洞窟分南北两区，南区为礼佛窟，北区为僧房窟。九层楼是莫高窟的标志性建筑，内有高35.5米的弥勒佛坐像；藏经洞（第17窟）曾出土5万余件文书和文物，内容涉及佛教、道教、景教等，是研究中古时期历史的“地下图书馆”。景区数字展示中心通过球幕电影《梦幻佛宫》和壁画复原影像，让游客沉浸式感受敦煌艺术的魅力。"
    },
     
{
        name: "青海湖",
        location: "青海省海南藏族自治州共和县",
        type: ["自然风光", "民俗文化"],
        budget: { min: 1500, max: 3000 },
        description: "中国最大的内陆咸水湖，被誉为“高原蓝宝石”，四周被四座巍巍高山所环抱，湖畔是广袤的草原和成群的牛羊，充满了藏乡风情。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "油菜花季"],
        highlights: ["二郎剑景区", "黑马河日出", "鸟岛", "环湖骑行"],
        details: "位于海北藏族自治州刚察县109国道北侧，是青藏高原的一颗明珠。它是中国最大的内陆湖，湖水清澈湛蓝，湖岸线绵延漫长。湖边有广袤的草原、金黄的油菜花田（花季时），与蓝色的湖水相互映衬，构成了如诗如画的美景。青海湖周边还有鸟岛等景点，每年春季，大量候鸟在此栖息繁衍，是观赏鸟类的好去处。"
    },
    {
        name: "塔尔寺",
        location: "青海省西宁市湟中区",
        type: ["宗教文化"],
        budget: { min: 1000, max: 2000 },
        description: "中国藏传佛教格鲁派六大寺院之一，是为纪念黄教创始人宗喀巴而建的，寺内珍藏了许多佛教典籍和历史、文学、哲学、医药、立法等方面的学术专著。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["大金瓦殿", "壁画", "堆绣", "酥油花"],
        details: "坐落于西宁市湟中区金塔路56号，是藏传佛教格鲁派的重要寺庙之一，与西藏的甘丹、哲蚌、色拉、扎什伦布寺和甘南的拉卜楞寺并称为我国藏传佛教格鲁派六大寺。它是格鲁派创始人宗喀巴大师的诞生地，初建于明朝嘉靖三十九年（公元1560年），寺庙庞大，占地45万平方米。塔尔寺的壁画、堆绣和酥油花为艺术三绝，其建筑融合了汉藏文化，布局独特，大金瓦寺、大经堂等建筑宏伟壮观，装饰精美，充满宗教氛围。"
    },
    {
        name: "互助土族故土园景区",
        location: "青海省互助土族自治县",
        type: ["民俗文化"],
        budget: { min: 800, max: 1500 },
        description: "全国唯一的土族自治县，集自然风光、人文景观、民俗风情于一体，展示了土族的历史、文化、艺术和生活习俗，游客可以参与土族家访、歌舞表演等活动。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["彩虹部落", "纳顿庄园", "土族家访", "轮子秋表演"],
        details: "位于互助土族自治县，是全国唯一的土族自治县。景区集自然风光、人文景观与民俗风情于一体，拥有彩虹部落、纳顿庄园等核心景点。在这里，游客可深入土族家访，品尝青稞酒、酥油茶，观赏国家级非物质文化遗产“轮子秋”表演，感受土族刺绣、盘绣等传统手工艺的魅力，全方位体验土族独特的民族文化和生活方式。"
    },
    {
        name: "茶卡盐湖",
        location: "青海省海西蒙古族藏族自治州乌兰县",
        type: ["自然风光"],
        budget: { min: 1200, max: 2500 },
        description: "被誉为“天空之镜”，湖面具有强烈的反射能力，如同一面为天空梳洗打扮而准备的镜子，蓝天白云、雪山映入湖中，如诗如画。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "雨季"],
        highlights: ["天空之镜广场", "盐湖铁轨", "小火车", "日出日落"],
        details: "位于海西州乌兰县茶卡镇盐湖路9号，是一个天然的盐湖。湖面如镜，倒映着蓝天白云和周围的山峦，形成了美丽的画面，被誉为“中国的天空之镜”。游客可以在这里欣赏到绝美的盐湖风光，还可以体验乘坐小火车深入盐湖，或者在盐滩上漫步，感受盐湖的独特魅力。不过，拍摄美丽倒影需要选择合适的天气和时间，一般在晴朗的白天，无风或微风时效果最佳。"
    },
    {
        name: "中卫市沙坡头旅游景区",
        location: "宁夏回族自治区中卫市",
        type: ["自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "集大漠、黄河、高山、绿洲为一体，既有西北风光之雄奇，又兼江南景色之秀美，有中国最大的天然滑沙场，是《爸爸去哪儿》的拍摄地之一。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["滑沙", "羊皮筏子", "黄河飞索", "沙漠露营"],
        details: "位于中卫市沙坡头区迎水桥镇，以其独特的大漠、黄河、高山、绿洲景观而闻名。在这里，游客可以欣赏到黄河第一湾的壮丽景色，体验滑沙、黄河漂流等刺激的活动，还可以在沙漠中露营，观赏星空。此外，景区内还有治沙成果展示区，展示了人类与沙漠斗争的伟大成就，让人感受到人与自然和谐共生的理念。"
    },
    {
        name: "银川镇北堡西部影城",
        location: "宁夏回族自治区银川市",
        type: ["民俗文化"],
        budget: { min: 1000, max: 2000 },
        description: "中国西部最大的影视城，被誉为“东方好莱坞”，拍摄了《大话西游》《红高粱》《新龙门客栈》等多部经典影片，保留了大量影视场景。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["明城", "清城", "老银川一条街", "影视拍摄体验"],
        details: "坐落于银川市西夏区镇北堡110国道路东，是在两座古代城堡遗址上修建而成的影视城。这里曾是许多著名电影和电视剧的拍摄地，如《大话西游》《红高粱》等。影城保留了大量的影视拍摄场景和道具，游客可以在这里感受电影文化的魅力，体验当演员的乐趣，还可以欣赏到独特的西北风光和民俗文化。"
    },
    {
        name: "银川市西夏陵景区",
        location: "宁夏回族自治区银川市",
        type: ["历史古迹"],
        budget: { min: 1000, max: 2000 },
        description: "西夏王朝的皇家陵园，是中国现存规模最大、地面遗址最完整的帝王陵园之一，被誉为“东方金字塔”，展现了西夏文化的神秘魅力。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["西夏博物馆", "三号陵", "双陵", "碑林"],
        details: "位于银川市西夏区京银线西夏陵景区内，是西夏王朝的皇家陵寝。景区内分布着九座帝陵和二百多座陪葬墓，规模宏大，布局严谨。西夏陵的建筑风格融合了党项族的文化特色和汉族的建筑艺术，陵台、碑亭、石像生等建筑遗迹展现了西夏王朝的辉煌历史和灿烂文化。虽然历经千年的风雨侵蚀和战争破坏，但依然能让人感受到当年的雄伟气势。"
    },
    {
        name: "固原市须弥山石窟景区",
        location: "宁夏回族自治区固原市",
        type: ["历史古迹"],
        budget: { min: 800, max: 1500 },
        description: "中国十大石窟之一，始凿于北魏，距今已有1500多年历史，现存洞窟162座，造像350余身，壁画2000余平方米，是古丝绸之路东段的重要文化遗产。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["大佛楼", "子孙宫", "圆光寺", "相国寺"],
        details: "位于固原市原州区须弥山石窟，是中国十大石窟之一。石窟开凿于北魏时期，历经西魏、北周、隋、唐、宋、西夏等朝代的不断修缮和扩建，形成了庞大的石窟群。石窟内有众多精美的佛像和壁画，其中唐代的大佛造像最为壮观，高达20.6米，气势恢宏。须弥山石窟不仅是佛教艺术的珍品，也是研究古代历史、文化和宗教的重要实物资料。"
    },
    {
        name: "新疆天山天池风景名胜区",
        location: "新疆维吾尔自治区昌吉回族自治州阜康市",
        type: ["自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "古称“瑶池”，是天山博格达峰北侧的一个半月形湖泊，湖水清澈，晶莹如玉，四周群山环抱，绿草如茵，有“天山明珠”之称。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季避暑", "秋季红叶"],
        highlights: ["天池主湖", "西小天池", "东小天池", "马牙山"],
        details: "位于昌吉回族自治州阜康市境内，距乌鲁木齐市97公里。天池是一座高山湖泊，湖水清澈，四周群山环抱，山上有茂密的森林和终年不化的积雪。天池景区内有石门一线、龙潭碧月、顶天三石、定海神针、南山望雪、西山观松、海峰晨曦、悬泉飞瀑等八景，景色秀丽，气候宜人，是著名的避暑和旅游胜地。"
    },
    {
        name: "吐鲁番市葡萄沟风景区",
        location: "新疆维吾尔自治区吐鲁番市",
        type: ["自然风光", "民俗文化"],
        budget: { min: 800, max: 1500 },
        description: "以盛产葡萄而闻名于世，是火焰山下的一处峡谷，沟内溪流环绕，水质纯净，葡萄藤蔓层层叠叠，绿意葱葱，形成天然的凉棚。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "葡萄成熟季"],
        highlights: ["葡萄长廊", "维吾尔家访", "葡萄干晾房", "民俗博物馆"],
        details: "位于吐鲁番市高昌区葡萄镇，是火焰山下的一处峡谷。沟内有布依鲁克河，两岸种植着大量的葡萄，葡萄品种繁多，品质优良。游客可以在这里参观葡萄园，了解葡萄的种植和采摘过程，还可以品尝到新鲜甜美的葡萄和葡萄干。此外，景区内还有维吾尔族的民俗文化展示，游客可以欣赏到民族歌舞表演，体验维吾尔族的生活习俗。"
    },
    {
        name: "喀纳斯景区",
        location: "新疆维吾尔自治区阿勒泰地区布尔津县",
        type: ["自然风光"],
        budget: { min: 2000, max: 5000 },
        description: "中国最深的冰碛堰塞湖，以神秘的湖怪、变换颜色的湖水和炫目的自然风光而闻名，集冰川、湖泊、森林、草原、牧场、河流、民族风情于一体。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["秋季", "冬季雪景"],
        highlights: ["喀纳斯湖", "三湾", "观鱼台", "禾木村", "白哈巴村"],
        details: "位于阿勒泰地区布尔津县北部，集冰川、湖泊、森林、草原、牧场、河流、民族风情、珍稀动植物于一体。景区内的喀纳斯湖湖水清澈，颜色随季节和天气变化而变化，周围是茂密的原始森林，远处是白雪皑皑的山峰。神仙湾、月亮湾、卧龙湾等景点景色各异，美不胜收。此外，这里还有图瓦族的村落，游客可以体验图瓦族的民俗文化，欣赏到独特的民族歌舞和传统手工艺品。"
    },
    {
        name: "喀什古城",
        location: "新疆维吾尔自治区喀什地区喀什市",
        type: ["历史古迹", "民俗文化"],
        budget: { min: 1000, max: 2000 },
        description: "中国唯一保存完整的以伊斯兰文化为特色的迷宫式城市街区，已有2000多年历史，街巷纵横交错，布局灵活多变，民居大多为土木、砖木结构。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["艾提尕尔清真寺", "高台民居", "喀什大巴扎", "古巷生活"],
        details: "位于喀什市中心，是中国唯一的以伊斯兰文化为特色的迷宫式城市街区。古城内街道纵横交错，建筑大多具有浓郁的维吾尔族风情，土黄色的墙壁、拱形的门窗、精美的木雕和砖雕，处处彰显着独特的民族文化魅力。这里有传统的巴扎，售卖着各种特色商品，如手工艺品、民族服饰、干果等。游客可以漫步在古城的街道上，品尝当地美食，感受浓郁的民族氛围和悠久的历史文化。"
    },
    {
        name: "那拉提草原",
        location: "新疆维吾尔自治区伊犁哈萨克自治州新源县",
        type: ["自然风光", "民俗文化"],
        budget: { min: 1500, max: 3000 },
        description: "世界四大草原之一的亚高山草甸植物区，自古以来就是著名的牧场，交错的河道、平展的河谷、高峻的山峰、茂密的森林交相辉映。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "野花盛开"],
        highlights: ["空中草原", "盘龙古道", "河谷草原", "哈萨克家访"],
        details: "地处新疆伊犁哈萨克自治州新源县那拉提镇镜内，是世界四大草原之一的亚高山草甸植物区，巩乃斯草原的重要组成部分。这里地势平坦，水草丰茂，远处是连绵的雪山，蓝天白云下，成群的牛羊如珍珠般散落其中，草原上还有哈萨克族的传统毡房，游客可以在这里体验草原生活，欣赏美丽的草原风光，感受哈萨克族的民俗文化。"
    },
    {
        name: "巴音布鲁克景区",
        location: "新疆维吾尔自治区巴音郭楞蒙古自治州和静县",
        type: ["自然风光"],
        budget: { min: 1500, max: 3000 },
        description: "中国第二大草原，四周为雪山环抱，是新疆最重要的畜牧业基地之一，著名的“天鹅湖”就坐落在草原上，是天鹅等野生动物理想的栖息繁殖地。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "秋季"],
        highlights: ["九曲十八弯", "天鹅湖", "巴音布鲁克草原"],
        details: "位于巴音郭楞蒙古自治州和静县西北的巴音布鲁克区境内，是中国第二大草原。这里水草丰美，地势平坦，是典型的禾草草甸草原。景区内著名的景点有天鹅湖和九曲十八弯。天鹅湖是亚洲最大、我国唯一的天鹅自然保护区，每年春季，大量天鹅在此栖息繁衍。九曲十八弯在夕阳的映照下，能呈现出多个太阳的奇特景观，景色美不胜收。"
    },
    {
        name: "克孜勒苏柯尔克孜自治州阿图什市天门景区",
        location: "新疆维吾尔自治区克孜勒苏柯尔克孜自治州阿图什市",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "一处天然形成的巨大石拱门，被誉为“地球上最纯净的角落”，是中国海拔最高的天然石拱门之一，门高约457米，宽约47米，是攀岩和探险爱好者的天堂。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["天门", "地质公园", "柯尔克孜族家访"],
        details: "位于阿图什市上阿图什镇省道306线27公里处，景区内的天门是一个天然的石拱门，高约457米，宽约47米，是世界上最高的天然石拱门之一。天门气势恢宏，令人惊叹，周围是壮观的丹霞地貌和广袤的戈壁沙漠，景色独特。游客可以在这里欣赏到大自然的鬼斧神工，进行徒步探险等活动。"
    },
    {
        name: "博斯腾湖景区",
        location: "新疆维吾尔自治区巴音郭楞蒙古自治州博湖县",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "中国最大的内陆淡水吞吐湖，水域辽阔，烟波浩渺，天水一色，被誉为“西塞明珠”，是新疆最大的渔业生产基地和芦苇生产基地。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "秋季"],
        highlights: ["大河口景区", "莲花湖", "白鹭洲", "西海渔村"],
        details: "博斯腾湖位于巴音郭楞蒙古自治州博湖县，是中国最大的内陆淡水湖，也是重要的生态湿地。景区内大河口（西海第一锅）是主要入口，可体验水上摩托、游船等项目；莲花湖因夏季莲花盛开得名，湖内生长着大片芦苇和睡莲；白鹭洲是观鸟和摄影的绝佳地点，栖息着白鹭、灰鹤等多种水鸟；西海渔村则展现了当地渔业文化，游客可品尝湖鲜美食，感受“塞外江南”的独特风情。"
    },
    {
        name: "泽普金湖杨国家森林公园",
        location: "新疆维吾尔自治区喀什地区泽普县",
        type: ["自然风光"],
        budget: { min: 800, max: 1500 },
        description: "镶嵌在叶尔羌河冲积扇上的一颗璀璨明珠，集胡杨林、碧水、绿洲、戈壁于一体，是新疆最大的胡杨林公园之一，被誉为“戈壁明珠”。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["秋季", "胡杨金黄"],
        highlights: ["胡杨林", "金湖", "观景台", "摄影基地"],
        details: "公园位于泽普县西南的亚斯墩林场境内，叶尔羌河穿流而过。每年秋季，3万亩胡杨林金黄一片，与金湖碧水交相辉映，形成“人在画中游”的美景。景区内设有木质栈道和观景台，游客可近距离观赏胡杨“生而千年不死，死而千年不倒，倒而千年不朽”的奇观；金湖水域可划船、垂钓，周边戈壁景观独特，是摄影爱好者的天堂，也是体验戈壁绿洲生态的理想之地。"
    },
    {
        name: "库车大峡谷国家地质公园",
        location: "新疆维吾尔自治区阿克苏地区库车市",
        type: ["自然风光"],
        budget: { min: 1000, max: 2000 },
        description: "中国罕见的旱地自然名胜风景区，由红褐色的巨大山体群组成，峡谷曲径通幽，山体千姿百态，峰峦直插云天，沟中有沟，谷中有谷。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春秋季"],
        highlights: ["天山神秘大峡谷", "阿艾石窟", "库车王府"],
        details: "景区位于库车市北部，核心为天山神秘大峡谷（又称克孜利亚大峡谷），由沉积岩经亿万年风蚀雨剥形成。峡谷内岩壁陡峭，呈现出红色、褐色的褶皱纹理，阳光照射下宛如火焰燃烧，著名景点有“一线天”“月牙谷”“悬心石”等。阿艾石窟是峡谷内的佛教遗址，保留有唐代壁画和佛像；库车王府则融合了汉式和维吾尔族建筑风格，展示了库车王室历史和民俗文化，是了解西域文明的重要窗口。"
    },
    {
        name: "贺兰山岩画",
        location: "宁夏回族自治区银川市贺兰县",
        type: ["文化古迹", "自然风光"],
        budget: { min: 800, max: 1500 },
        description: "中国游牧民族的艺术画廊，留存大量古代岩画，题材广泛、内容丰富，记录了远古人类在3000年前至10000年前放牧、狩猎、祭祀等生活场景，展现了独特的原始艺术魅力，景区内还融合了自然山体景观。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["四季皆宜（春秋季更佳）"],
        highlights: ["贺兰山岩画遗址", "韩美林艺术馆", "贺兰口沟谷"],
        details: "景区位于贺兰山东麓的贺兰口沟谷，是中国最大的岩画遗址公园。现存岩画6000余幅，题材包括动物、人面像、狩猎、祭祀等，其中“太阳神”岩画是镇山之宝。游客可沿沟谷步道近距离观赏岩画，感受原始先民的生活智慧；韩美林艺术馆陈列了艺术家以岩画为灵感创作的雕塑、绘画作品，展现了岩画艺术的现代传承；贺兰口沟谷内植被丰富，夏季凉爽，秋季层林尽染，兼具文化与自然双重体验。"
    },
    {
        name: "坎儿井民俗园",
        location: "新疆维吾尔自治区吐鲁番市高昌区",
        type: ["文化古迹", "人文景观"],
        budget: { min: 600, max: 1200 },
        description: "展示新疆古代水利工程奇迹的主题园区，坎儿井与万里长城、京杭大运河并称为中国古代三大工程，园区通过实景展示、文物陈列等方式，生动呈现了坎儿井的构造、原理及历史价值，体现了古代劳动人民的智慧。",
        suitable: ["跟团", "自由行"],
        bestSeason: ["夏季"],
        highlights: ["坎儿井地下廊道", "坎儿井博物馆", "葡萄种植区"],
        details: "民俗园位于吐鲁番市亚尔镇，是了解坎儿井文化的核心场所。坎儿井是吐鲁番地区特有的地下水利工程，由竖井、暗渠、明渠、涝坝四部分组成，有效解决了干旱地区的灌溉问题。游客可进入地下廊道，直观感受暗渠的走向和水流原理；坎儿井博物馆通过模型、图文和实物（如挖掘工具）展示其历史演变；园区内的葡萄种植区采用坎儿井水源灌溉，夏季可品尝新鲜葡萄，体验“地下运河”滋养绿洲的神奇。"
    },
    {
        name: "可可托海景区",
        location: "新疆维吾尔自治区阿勒泰地区富蕴县",
        type: ["自然风光", "地质奇观"],
        budget: { min: 1500, max: 2500 },
        description: "以优美的峡谷河流、山石林地、矿产资源等为自然景观特色的景区，拥有峡谷地貌、沼泽湿地、高山草甸等多样生态，素以“地质矿产博物馆”享誉海内外，也是珍稀动植物的天然宝库，自然风光壮美，兼具科学与美学价值。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "秋季"],
        highlights: ["额尔齐斯大峡谷", "可可苏里", "三号矿坑"],
        details: "景区位于富蕴县北部，由额尔齐斯大峡谷、可可苏里、伊雷木湖、三号矿坑等组成。额尔齐斯大峡谷是中国唯一流入北冰洋的河流——额尔齐斯河的源头峡谷，两岸群峰对峙，“神钟山”“飞来峰”等象形石惟妙惟肖，秋季桦林金黄，景色如画；可可苏里是天然沼泽湿地，湖面蓝绿如镜，芦苇丛生，栖息着野鸭、天鹅等水鸟；三号矿坑是“功勋矿坑”，曾为国家偿还外债和“两弹一星”提供重要原料，现作为地质遗迹，展示稀有金属矿床的开采历史。"
    },
    {
        name: "宁夏沙湖景区",
        location: "宁夏回族自治区石嘴山市平罗县",
        type: ["自然风光", "生态旅游"],
        budget: { min: 1000, max: 1800 },
        description: "集大漠、湖水、芦苇、飞鸟、游鱼等生态景观于一体的综合性旅游景区，湖傍金沙，沙环碧湖，沙水相连，巧夺天工，是鸟的天堂、鱼的乐园，可体验沙漠娱乐、水上活动等多种项目，感受江南水乡与大漠风光的奇妙融合。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["春季", "夏季", "秋季"],
        highlights: ["沙湖水域", "沙岛", "芦苇荡"],
        details: "景区位于石嘴山市平罗县，是国家5A级旅游景区。沙湖以自然生态为核心，湖面积45平方公里，沙漠面积22.52平方公里，两者通过芦苇荡自然分隔又相互映衬。游客可乘船穿越芦苇迷宫，观赏白鹭、苍鹭等鸟类；沙岛可体验滑沙、骑骆驼、沙漠卡丁车等项目；湖内盛产鲢鱼、鳙鱼，可品尝沙湖鱼宴。每年春季鸟类迁徙时，这里成为观鸟胜地；秋季芦苇金黄，与湖水、沙漠构成色彩斑斓的画卷。"
    },
    {
        name: "天山大峡谷",
        location: "新疆维吾尔自治区乌鲁木齐市乌鲁木齐县",
        type: ["自然风光", "生态旅游"],
        budget: { min: 1200, max: 2000 },
        description: "由峡谷、森林、草原、雪山等组成的生态旅游区，峡谷内沟壑纵横，林木葱郁，草原广袤，雪山巍峨，兼具北国风光之雄浑与江南山水之灵秀，是休闲度假、观光旅游、探险摄影的理想之地。",
        suitable: ["自驾", "跟团", "自由行"],
        bestSeason: ["夏季", "秋季"],
        highlights: ["照壁山", "天鹅湖", "马牙山"],
        details: "景区位于乌鲁木齐县板房沟镇，距市区48公里，是乌鲁木齐的“后花园”。照壁山因山体如屏风得名，是景区入口的标志性景观；天鹅湖是高山湖泊，夏季湖面倒映雪山，常有天鹅栖息；马牙山因山顶岩石形似马牙而得名，海拔3000米以上，可乘坐索道登顶，俯瞰天山群峰和森林草原景观。此外，景区内还有哈萨克族毡房，可体验民族歌舞和美食，冬季可开展滑雪等冰雪活动，四季皆有特色。"
    }
];