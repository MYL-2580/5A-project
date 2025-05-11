// 优化景点数据结构，确保一致性
const attractions = [
    {
        name: "秦始皇兵马俑博物馆",
        location: "陕西省西安市临潼区秦陵北路",
        type: ["历史古迹"],
        budget: "2000-100000",
        description: "秦始皇兵马俑博物馆是中国最大的古代军事博物馆，展示了大量精美的兵马俑，是世界文化遗产之一。这里不仅展示了秦代的军事力量，还体现了古代雕塑艺术的精湛技艺。游客可以通过导览深入了解兵马俑的历史背景和制作工艺，感受秦始皇统一六国的雄伟气魄。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "华清宫",
        location: "陕西省西安市临潼区",
        type: ["历史古迹"],
        budget: "1000-100000",
        description: "华清宫以其温泉和唐代历史文化闻名，是唐玄宗与杨贵妃爱情故事发生地。这里不仅有唐代皇家园林的恢弘景象，还有温泉文化的深厚底蕴。游客可以漫步园区，参观华清池遗址，感受盛唐时期的奢华生活，并在夜晚欣赏大型实景历史舞剧《长恨歌》。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "延安革命纪念地",
        location: "陕西省延安市",
        type: ["红色旅游"],
        budget: "1500-100000",
        description: "延安革命纪念地是中国革命的圣地，展示了中国共产党在延安时期的历史。这里保存了大量珍贵的革命文物和历史资料，游客可以参观枣园、杨家岭等革命旧址，了解中国共产党如何在艰苦环境中领导全国人民取得抗日战争和解放战争的胜利。",
        suitable: ["自驾", "跟团"]
    },
    {
        name: "麦积山石窟",
        location: "甘肃省天水市",
        type: ["历史古迹", "文化探索"],
        budget: "2000-100000",
        description: "麦积山石窟是中国四大石窟之一，以其精美的泥塑艺术闻名。石窟依山而建，形如麦垛，故名麦积山。这里的泥塑作品栩栩如生，展现了古代工匠的高超技艺和宗教信仰的深刻内涵。游客可以沿着栈道攀登，近距离欣赏这些艺术瑰宝，同时感受大自然的壮丽景色。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "嘉峪关文物景区",
        location: "甘肃省嘉峪关市",
        type: ["历史古迹"],
        budget: "3000-100000",
        description: "嘉峪关是明代万里长城的西端起点，被誉为“天下第一雄关”，是中国古代军事防御体系的重要组成部分。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "张掖丹霞地质公园",
        location: "甘肃省张掖市临泽县",
        type: ["自然风光"],
        budget: "2000-100000",
        description: "张掖丹霞地质公园以其色彩斑斓的丹霞地貌闻名，是摄影爱好者的天堂。",
        suitable: ["自驾", "自由行"]
    },
    {
        name: "鸣沙山月牙泉",
        location: "甘肃省敦煌市",
        type: ["自然风光"],
        budget: "2000-100000",
        description: "鸣沙山月牙泉以其沙漠奇观和泉水美景著称，是敦煌旅游的标志性景点。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "敦煌莫高窟",
        location: "甘肃省酒泉市敦煌市东南 25 公里处",
        type: ["历史古迹", "文化探索"],
        budget: "2500-100000",
        description: "敦煌莫高窟是世界上现存规模最大、内容最丰富的佛教艺术地，拥有大量的壁画和雕塑。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "茶卡盐湖",
        location: "青海省海西蒙古族藏族自治州乌兰县",
        type: ["自然风光"],
        budget: "2500-100000",
        description: "茶卡盐湖被誉为“天空之镜”，是一个以盐湖景观为主的自然景区。",
        suitable: ["自驾", "自由行"]
    },
    {
        name: "塔尔寺",
        location: "青海省西宁市湟中区",
        type: ["宗教文化", "历史古迹"],
        budget: "1500-100000",
        description: "塔尔寺是藏传佛教格鲁派六大寺院之一，以其精美的酥油花、壁画和堆绣闻名。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "青海湖景区",
        location: "青海省海南藏族自治州共和县",
        type: ["自然风光"],
        budget: "2500-100000",
        description: "青海湖是中国最大的内陆湖和咸水湖，湖水湛蓝，周边风景优美。",
        suitable: ["自驾", "自由行"]
    },
    {
        name: "贺兰山岩画",
        location: "宁夏回族自治区银川市",
        type: ["历史古迹", "文化探索"],
        budget: "1800-100000",
        description: "贺兰山岩画是中国古代游牧民族留下的珍贵文化遗产。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "宁夏沙湖旅游区",
        location: "宁夏回族自治区石嘴山市平罗县",
        type: ["自然风光"],
        budget: "2200-100000",
        description: "宁夏沙湖旅游区集沙漠、湖泊、芦苇、鸟类等自然景观于一体，是一个休闲度假的好去处。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "那拉提草原",
        location: "新疆维吾尔自治区伊犁哈萨克自治州新源县",
        type: ["自然风光"],
        budget: "3000-100000",
        description: "那拉提草原是世界四大草原之一，以其辽阔的草原风光和哈萨克民族风情闻名。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "喀什古城",
        location: "新疆维吾尔自治区喀什地区喀什市",
        type: ["历史古迹", "文化探索"],
        budget: "2800-100000",
        description: "喀什古城是中国保存最完整的伊斯兰文化古城，充满浓郁的民族风情。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "坎儿井民俗园",
        location: "新疆维吾尔自治区吐鲁番市",
        type: ["历史古迹", "文化探索"],
        budget: "2000-100000",
        description: "坎儿井是中国古代三大工程之一，展示了古代水利工程的智慧。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "喀纳斯景区",
        location: "新疆维吾尔自治区阿勒泰地区布尔津县",
        type: ["自然风光"],
        budget: "2500-100000",
        description: "喀纳斯景区以其神秘的喀纳斯湖、原始森林和草原风光著称，是一个充满自然魅力的地方。",
        suitable: ["自驾", "跟团", "自由行"]
    },
    {
        name: "可可托海景区",
        location: "新疆维吾尔自治区阿勒泰地区富蕴县",
        type: ["自然风光"],
        budget: "3000-100000",
        description: "可可托海景区以其壮丽的峡谷、湖泊和矿产资源闻名，是一个集自然与人文景观于一体的旅游胜地。",
        suitable: ["自驾", "自由行"]
    },
    {
        name: "天山大峡谷",
        location: "新疆维吾尔自治区乌鲁木齐市乌鲁木齐县",
        type: ["自然风光"],
        budget: "2500-100000",
        description: "天山大峡谷以其雄伟的峡谷、清澈的溪流和茂密的森林闻名，是一个避暑胜地。",
        suitable: ["自驾", "自由行"]
    }
];

// 删除重复定义的 generateRecommendations 函数
// 保留以下唯一的 generateRecommendations 函数
function generateRecommendations(userData, attractions) {
    return attractions.filter(attraction => {
        const [minBudget, maxBudget] = attraction.budget.split('-').map(Number);
        return (
            userData.budget >= minBudget && userData.budget <= maxBudget &&
            (userData.destination === '' || attraction.location.includes(userData.destination)) &&
            attraction.type.includes(userData.travelType) &&
            !userData.avoid.some(avoid => attraction.description.includes(avoid)) &&
            attraction.suitable.includes(userData.travelMode)
        );
    });
}

let currentImageIndex = 0;
let autoSwitchInterval;

function loadGalleryImages() {
    const galleryImages = document.getElementById('gallery-images');
    const imageMap = {
        "秦始皇兵马俑博物馆": "images/兵马俑博物馆介绍.png",
        "华清宫": "images/华清宫.jpg",
        "延安革命纪念地": "images/延安革命纪念地.jpg",
        "麦积山石窟": "images/麦积山石窟.jpg",
        "嘉峪关文物景区": "images/嘉峪关文物景区.jpg",
        "张掖丹霞地质公园": "images/张掖丹霞地质公园.jpg",
        "鸣沙山月牙泉": "images/月牙泉.jpg",
        "敦煌莫高窟": "images/莫高窟.jpg",
        "茶卡盐湖": "images/茶卡盐湖.jpg",
        "塔尔寺": "images/塔尔寺.jpg",
        "青海湖景区": "images/青海湖.jpeg",
        "贺兰山岩画": "images/贺兰山岩画.jpg",
        "宁夏沙湖旅游区": "images/宁夏沙湖景区.jpg",
        "那拉提草原": "images/那拉提草原.png",
        "喀什古城": "images/喀什古城.jpg",
        "坎儿井民俗园": "images/坎儿井民俗园.jpg",
        "喀纳斯景区": "images/喀纳斯景区.jpg",
        "可可托海景区": "images/可可托海景区.jpg",
        "天山大峡谷": "images/天山大峡谷.jpg"
    };

    // 清空之前的图片
    galleryImages.innerHTML = '';

    Object.entries(imageMap).forEach(([name, path], index) => {
        const imageElement = document.createElement('div');
        imageElement.className = 'gallery-item';
        imageElement.style.backgroundImage = `url(${path})`;
        imageElement.dataset.index = index;
        imageElement.innerHTML = `<p>${name}</p>`;
        galleryImages.appendChild(imageElement);
    });

    // 确保至少显示第一张图片
    updateGalleryView();
}

function switchImage(direction) {
    const galleryImages = document.getElementById('gallery-images');
    const totalImages = galleryImages.children.length;

    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    updateGalleryView();
}

function updateGalleryView() {
    const galleryImages = document.getElementById('gallery-images');
    Array.from(galleryImages.children).forEach((image, index) => {
        image.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

function startAutoSwitch() {
    autoSwitchInterval = setInterval(() => {
        switchImage(1);
    }, 3000);
}

function stopAutoSwitch() {
    clearInterval(autoSwitchInterval);
}

// 旅游攻略网站脚本
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('travel-form');
    const resultsContainer = document.getElementById('results');
    const recommendationsContainer = document.getElementById('recommendations');

    // 添加表单提交事件处理
    form.addEventListener('submit', function (event) {
        // 阻止表单默认提交行为
        event.preventDefault();

        // 获取表单数据
        const name = document.getElementById('name').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const destination = document.getElementById('destination').value;
        const travelType = document.getElementById('travel-type').value;
        const budget = document.getElementById('budget').value;

        // 获取选中的"不想去的地方"
        const avoidCheckboxes = document.querySelectorAll('input[name="avoid"]:checked');
        const avoid = Array.from(avoidCheckboxes).map(checkbox => checkbox.value);

        // 获取旅游方式
        const travelMode = document.querySelector('input[name="travel-mode"]:checked').value;

        // 优化表单验证
        if (!name || !phone || !age || !destination || !travelType || !budget || !travelMode) {
            alert('请填写所有必填字段！');
            return;
        }

        if (!/^\d{11}$/.test(phone)) {
            alert('请输入有效的11位手机号码！');
            return;
        }

        if (age < 1 || age > 120) {
            alert('请输入有效的年龄范围（1-120）！');
            return;
        }

        // 创建用户数据对象
        const userData = {
            name: name,
            gender: gender,
            phone: phone,
            age: parseInt(age),
            destination: destination,
            travelType: travelType,
            budget: parseInt(budget),
            avoid: avoid,
            travelMode: travelMode
        };

        // 生成推荐
        const recommendations = generateRecommendations(userData, attractions);

        // 将数据编码并传递到推荐页面
        const recommendationsParam = encodeURIComponent(JSON.stringify(recommendations));
        const userDataParam = encodeURIComponent(JSON.stringify(userData));

        // 跳转到推荐结果页面
        window.location.href = `recommendation.html?recommendations=${recommendationsParam}&userData=${userDataParam}`;
    });

    // 如果在 profile.html 页面，加载用户数据
    if (window.location.pathname.includes('profile.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const userData = JSON.parse(decodeURIComponent(urlParams.get('userData')));

        const profileContainer = document.getElementById('profile-container');
        profileContainer.innerHTML = `
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p><strong>性别：</strong>${userData.gender}</p>
                <p><strong>联系电话：</strong>${userData.phone}</p>
                <p><strong>年龄：</strong>${userData.age}</p>
                <p><strong>目的地：</strong>${userData.destination}</p>
                <p><strong>旅游类型：</strong>${userData.travelType}</p>
                <p><strong>预算：</strong>${userData.budget} 元</p>
            </div>
        `;
    }

    // 页面加载完成后调用
    loadGalleryImages();

    document.getElementById('prev-button').addEventListener('click', () => {
        stopAutoSwitch();
        switchImage(-1);
        startAutoSwitch();
    });

    document.getElementById('next-button').addEventListener('click', () => {
        stopAutoSwitch();
        switchImage(1);
        startAutoSwitch();
    });
});
function generateRecommendations(userData, attractions) {
    return attractions.filter(attraction => {
        const [minBudget, maxBudget] = attraction.budget.split('-').map(Number);
        return (
            userData.budget >= minBudget && userData.budget <= maxBudget &&
            (userData.destination === '' || attraction.location.includes(userData.destination)) &&
            attraction.type.includes(userData.travelType) &&
            !userData.avoid.some(avoid => attraction.description.includes(avoid)) &&
            attraction.suitable.includes(userData.travelMode)
        );
    });
}
