// 旅游推荐结果页面脚本
document.addEventListener('DOMContentLoaded', function () {
    const recommendationsContainer = document.getElementById('recommendations');

    // 从URL获取参数
    const urlParams = new URLSearchParams(window.location.search);
    const recommendationsData = urlParams.get('recommendations');
    const userData = urlParams.get('userData');

    // 如果有推荐数据，则显示
    if (recommendationsData && userData) {
        try {
            const recommendations = JSON.parse(decodeURIComponent(recommendationsData));
            const user = JSON.parse(decodeURIComponent(userData));
            displayRecommendations(recommendations, user);
        } catch (error) {
            console.error('解析数据时出错:', error);
            recommendationsContainer.innerHTML = '<p>加载推荐数据时出错，请返回首页重试。</p>';
        }
    } else {
        recommendationsContainer.innerHTML = '<p>没有找到推荐数据，请返回首页填写表单。</p>';
    }

    // 显示推荐结果
    function displayRecommendations(recommendations, userData) {
        // 清空之前的推荐
        recommendationsContainer.innerHTML = '';

        // 如果没有推荐，显示提示信息
        if (recommendations.length === 0) {
            recommendationsContainer.innerHTML = '<p>抱歉，没有找到符合您要求的景点。请尝试调整您的筛选条件。</p>';
            return;
        }

        // 显示个性化问候
        const greeting = createRecommendationElement(`
            <h3>${userData.name}${userData.gender === '男' ? '先生' : '女士'}，您好！</h3>
            <p>根据您的偏好，我们为您精心挑选了以下旅游景点：</p>
        `);
        recommendationsContainer.appendChild(greeting);

        // 显示每个推荐
        recommendations.forEach(attraction => {
            const recommendationEl = createRecommendationElement(`
                <h3>${attraction.name}</h3>
                <p><strong>位置：</strong>${attraction.location}</p>
                <p><strong>预算：</strong>约 ${attraction.budget} 元</p>
                <p>${attraction.description}</p>
                <p><strong>推荐理由：</strong>根据您的预算和偏好，我们认为该景点非常适合${userData.travelMode}旅行。</p>
                <div class="tags">
                    ${createTags(attraction, userData)}
                </div>
            `);

            recommendationEl.style.cursor = 'pointer';
            recommendationEl.addEventListener('click', () => {
                const attractionData = encodeURIComponent(JSON.stringify(attraction));
                window.location.href = `detail.html?attraction=${attractionData}`;
            });

            recommendationsContainer.appendChild(recommendationEl);
        });
    }

    // 创建推荐元素
    function createRecommendationElement(html) {
        const el = document.createElement('div');
        el.className = 'recommendation';
        el.innerHTML = html;
        return el;
    }

    // 优化标签生成逻辑
    function createTags(attraction, userData) {
        const tags = [
            ...attraction.type.map(type => `<span class="tag">${type}</span>`),
            ...attraction.suitable
                .filter(mode => mode === userData.travelMode)
                .map(mode => `<span class="tag">适合${mode}</span>`)
        ];
        return tags.join('');
    }
});