// 景点详情页面脚本
document.addEventListener('DOMContentLoaded', function () {
    const detailContainer = document.getElementById('attraction-detail');

    // 从URL获取参数
    const urlParams = new URLSearchParams(window.location.search);
    const attractionData = urlParams.get('attraction');

    // 如果有景点数据，则显示
    if (attractionData) {
        try {
            const attraction = JSON.parse(decodeURIComponent(attractionData));
            displayAttractionDetail(attraction);
        } catch (error) {
            console.error('解析数据时出错:', error);
            detailContainer.innerHTML = '<p>加载景点数据时出错，请返回重试。</p>';
        }
    } else {
        detailContainer.innerHTML = '<p>没有找到景点数据，请返回推荐页面。</p>';
    }

    // 显示景点详情
    function displayAttractionDetail(attraction) {
        // 清空之前的内容
        detailContainer.innerHTML = '';

        // 获取景点图片 (使用占位图，实际项目中应替换为真实图片)
        const imageSrc = getAttractionImage(attraction.name);

        // 预加载图片
        const img = new Image();
        img.src = imageSrc;
        img.onload = function () {
            // 创建景点详情HTML
            const detailHTML = `
                <img src="${imageSrc}" alt="${attraction.name}" class="attraction-image">
                <div class="attraction-info">
                    <h2>${attraction.name}</h2>
                    <p><strong>位置：</strong>${attraction.location}</p>
                    <p><strong>预算：</strong>约 ${attraction.budget} 元人民币</p>
                    <p><strong>详细介绍：</strong>${attraction.description}</p>
                    <div class="attraction-features">
                        <div class="feature">
                            <h3>适合旅行方式</h3>
                            <p>${attraction.suitable.join('、')}</p>
                        </div>
                        <div class="feature">
                            <h3>景点类型</h3>
                            <p>${attraction.type.join('、')}</p>
                        </div>
                    </div>
                    <div class="tags">
                        ${createTags(attraction)}
                    </div>
                </div>
                <div class="attraction-info">
                    <h3>景点特色</h3>
                    <p>这里是${attraction.name}的特色介绍。这个美丽的西北 5A 级景区拥有独特的风景和文化，是旅游爱好者的理想目的地。您可以在这里体验到当地的风土人情，品尝特色美食，欣赏自然风光。</p>
                </div>
                <div class="attraction-info">
                    <h3>游客评价</h3>
                    <p>"这是一个令人难忘的地方，风景如画，服务一流！" - 游客张先生</p>
                    <p>"非常推荐这个西北 5A 级景区，物超所值，体验感很强！" - 游客李女士</p>
                    <p>"我和家人在这里度过了愉快的时光，孩子们也很喜欢！" - 游客王先生</p>
                </div>
                <div class="attraction-info">
                    <h3>智能推荐</h3>
                    <p>根据您的偏好，我们建议您在${attraction.name}停留至少 2 天，以充分体验其独特魅力。</p>
                </div>
            `;

            detailContainer.innerHTML = detailHTML;
        };
        img.onerror = () => {
            detailContainer.innerHTML = `
                <p>加载景点图片时出错，请稍后重试。</p>
                <img src="images/default.jpg" alt="默认图片" class="attraction-image">
            `;
        };
    }

    // 优化图片映射逻辑，避免重复代码
    function getAttractionImage(name) {
        const defaultImage = "images/default.jpg"; // 默认图片路径
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
        return imageMap[name] || defaultImage;
    }

    // 提高标签生成函数的可维护性
    function createTags(attraction) {
        const tags = [
            ...attraction.type.map(type => `<span class="tag">${type}</span>`),
            ...attraction.suitable.map(mode => `<span class="tag">适合${mode}</span>`)
        ];
        return tags.join('');
    }
});