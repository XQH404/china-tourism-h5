// 景点数据
const attractions = {
    'great-wall': {
        name: '长城',
        description: '长城是中国古代的伟大防御工程，也是世界上最伟大的建筑之一。它始建于春秋战国时期，秦始皇统一中国后将各段长城连接起来，形成了万里长城的雏形。长城不仅是中国古代军事防御体系的重要组成部分，也是中华民族的象征和骄傲。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=The%20Great%20Wall%20of%20China%2C%20magnificent%20ancient%20architecture%2C%20scenic%20view&image_size=landscape_16_9',
        panorama: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Panoramic%20view%20of%20the%20Great%20Wall%20of%20China%2C%20winding%20through%20mountains%2C%20scenic%20landscape&image_size=landscape_16_9',
        audio: {
            bg: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            narration: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
        },
        hotspots: [
            {
                name: '烽火台',
                description: '古代用于传递军事信息的重要设施'
            },
            {
                name: '城墙',
                description: '长城的主体结构，用于防御外敌'
            },
            {
                name: '敌楼',
                description: '士兵驻守和观察敌情的建筑'
            },
            {
                name: '关隘',
                description: '长城上的重要通道和防御据点'
            }
        ],
        year: '2000+',
        area: '21,196.18公里',
        visitors: '约1000万/年',
        quizzes: [
            {
                question: '长城始建于哪个时期？',
                options: ['秦朝', '春秋战国', '汉朝', '唐朝'],
                correct: 1
            },
            {
                question: '长城的主要作用是什么？',
                options: ['观赏', '防御', '交通', '灌溉'],
                correct: 1
            },
            {
                question: '长城被列入世界文化遗产名录是在哪一年？',
                options: ['1987', '1990', '1992', '1995'],
                correct: 0
            }
        ]
    },
    'forbidden-city': {
        name: '故宫',
        description: '故宫又称紫禁城，是明清两代的皇家宫殿，位于北京中轴线的中心。它始建于明永乐四年（1406年），是中国古代宫廷建筑的精华，也是世界上现存规模最大、保存最为完整的木质结构古建筑之一。故宫是中国明清两代的政治中心，见证了24位皇帝的统治。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Forbidden%20City%20in%20Beijing%2C%20imperial%20palace%2C%20traditional%20Chinese%20architecture&image_size=landscape_16_9',
        panorama: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Panoramic%20view%20of%20the%20Forbidden%20City%2C%20imperial%20palace%20complex%2C%20traditional%20Chinese%20architecture&image_size=landscape_16_9',
        audio: {
            bg: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            narration: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
        },
        hotspots: [
            {
                name: '太和殿',
                description: '故宫的正殿，皇帝举行大典的地方'
            },
            {
                name: '乾清宫',
                description: '皇帝居住的正宫'
            },
            {
                name: '御花园',
                description: '皇家园林，皇帝和后妃游乐的地方'
            },
            {
                name: '午门',
                description: '故宫的正门'
            }
        ],
        year: '600+',
        area: '72万平方米',
        visitors: '约1500万/年',
        quizzes: [
            {
                question: '故宫始建于哪个朝代？',
                options: ['元朝', '明朝', '清朝', '宋朝'],
                correct: 1
            },
            {
                question: '故宫有多少间房屋？',
                options: ['9999间', '8888间', '7777间', '6666间'],
                correct: 0
            },
            {
                question: '故宫的另一个名称是什么？',
                options: ['紫禁城', '皇城', '宫城', '大内'],
                correct: 0
            }
        ]
    },
    'zhangjiajie': {
        name: '张家界',
        description: '张家界国家森林公园位于湖南省西北部，是中国第一个国家森林公园。它以独特的砂岩峰林地貌著称，被誉为"扩大的盆景，缩小的仙境"。这里的山峰形态各异，云雾缭绕，仿佛置身于仙境之中。张家界还是电影《阿凡达》中悬浮山的灵感来源。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhangjiajie%20National%20Forest%20Park%2C%20unique%20sandstone%20pillars%2C%20natural%20beauty&image_size=landscape_16_9',
        panorama: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Panoramic%20view%20of%20Zhangjiajie%20National%20Forest%20Park%2C%20unique%20sandstone%20pillars%2C%20misty%20mountains&image_size=landscape_16_9',
        audio: {
            bg: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
            narration: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
        },
        hotspots: [
            {
                name: '御笔峰',
                description: '张家界的标志性山峰，形如毛笔'
            },
            {
                name: '天门山',
                description: '张家界最高的山峰，有天门洞奇观'
            },
            {
                name: '金鞭溪',
                description: '张家界的著名溪流，沿途风景秀丽'
            },
            {
                name: '袁家界',
                description: '电影《阿凡达》悬浮山的取景地'
            }
        ],
        year: '1982年建立',
        area: '4810公顷',
        visitors: '约800万/年',
        quizzes: [
            {
                question: '张家界国家森林公园是中国第几个国家森林公园？',
                options: ['第一个', '第二个', '第三个', '第四个'],
                correct: 0
            },
            {
                question: '张家界的地貌类型是什么？',
                options: ['喀斯特地貌', '丹霞地貌', '砂岩峰林地貌', '雅丹地貌'],
                correct: 2
            },
            {
                question: '哪部电影以张家界为灵感来源？',
                options: ['《阿凡达》', '《泰坦尼克号》', '《指环王》', '《哈利波特》'],
                correct: 0
            }
        ]
    },
    'west-lake': {
        name: '西湖',
        description: '西湖位于浙江省杭州市西面，是中国大陆首批国家重点风景名胜区和中国十大风景名胜之一。它以其秀丽的湖光山色和众多的人文景观闻名于世，被誉为"人间天堂"。西湖的美景吸引了无数文人墨客，留下了大量的诗词歌赋。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=West%20Lake%20in%20Hangzhou%2C%20scenic%20lake%2C%20traditional%20Chinese%20garden&image_size=landscape_16_9',
        panorama: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Panoramic%20view%20of%20West%20Lake%20in%20Hangzhou%2C%20scenic%20lake%2C%20traditional%20Chinese%20garden%2C%20bridges&image_size=landscape_16_9',
        audio: {
            bg: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
            narration: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
        },
        hotspots: [
            {
                name: '断桥',
                description: '西湖十景之一，有着美丽的爱情传说'
            },
            {
                name: '三潭印月',
                description: '西湖十景之一，湖中的三座石塔'
            },
            {
                name: '苏堤',
                description: '苏东坡主持修建的长堤，春季桃花盛开'
            },
            {
                name: '雷峰塔',
                description: '西湖标志性建筑，与白娘子传说有关'
            }
        ],
        year: '2000+',
        area: '6.39平方公里',
        visitors: '约2000万/年',
        quizzes: [
            {
                question: '西湖位于哪个城市？',
                options: ['苏州', '杭州', '南京', '上海'],
                correct: 1
            },
            {
                question: '西湖被列入世界文化遗产名录是在哪一年？',
                options: ['2008', '2010', '2012', '2014'],
                correct: 1
            },
            {
                question: '西湖十景不包括以下哪项？',
                options: ['断桥残雪', '平湖秋月', '三潭印月', '黄山云海'],
                correct: 3
            }
        ]
    }
};

// 当前状态
let currentAttraction = null;
let currentQuizIndex = 0;

// 元素引用
let elements = {};

// 动画相关变量
let animationId = null;
let animationData = {
    type: '',
    time: 0,
    clouds: [],
    lights: [],
    mist: [],
    waves: []
};

// 虚拟游览相关变量
let panoramaState = {
    pan: 0,
    zoom: 1
};

// 路线DIY相关变量
let routeState = {
    waypoints: [],
    currentAttraction: null
};

// 屏幕切换函数
function showScreen(screenId) {
    // 隐藏所有屏幕
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // 显示目标屏幕
    document.getElementById(screenId).classList.add('active');
}

// 初始化事件监听
function initEventListeners() {
    console.log('初始化事件监听器');
    
    // 启动按钮
    if (elements.startBtn) {
        elements.startBtn.addEventListener('click', () => {
            showScreen('main-screen');
        });
    }

    // 景点卡片点击
    if (elements.attractionCards && elements.attractionCards.length > 0) {
        elements.attractionCards.forEach(card => {
            card.addEventListener('click', () => {
                const attractionId = card.dataset.attraction;
                loadAttractionDetail(attractionId);
                showScreen('detail-screen');
            });
        });
    }

    // 返回按钮
    if (elements.backBtn) {
        elements.backBtn.addEventListener('click', () => {
            showScreen('main-screen');
        });
    }

    if (elements.quizBackBtn) {
        elements.quizBackBtn.addEventListener('click', () => {
            showScreen('detail-screen');
        });
    }

    // 问答按钮
    if (elements.quizBtn) {
        elements.quizBtn.addEventListener('click', () => {
            startQuiz();
            showScreen('quiz-screen');
        });
    }

    // 分享按钮
    if (elements.shareBtn) {
        elements.shareBtn.addEventListener('click', () => {
            shareAttraction();
        });
    }

    // 虚拟游览按钮
    if (elements.virtualTourBtn) {
        elements.virtualTourBtn.addEventListener('click', () => {
            startVirtualTour();
            showScreen('virtual-tour-screen');
        });
    }

    // 虚拟游览返回按钮
    if (elements.tourBackBtn) {
        elements.tourBackBtn.addEventListener('click', () => {
            showScreen('detail-screen');
        });
    }

    // 全景图控制按钮
    if (elements.panLeft) {
        elements.panLeft.addEventListener('click', () => {
            panPanorama(-10);
        });
    }

    if (elements.panRight) {
        elements.panRight.addEventListener('click', () => {
            panPanorama(10);
        });
    }

    if (elements.zoomIn) {
        elements.zoomIn.addEventListener('click', () => {
            zoomPanorama(0.1);
        });
    }

    if (elements.zoomOut) {
        elements.zoomOut.addEventListener('click', () => {
            zoomPanorama(-0.1);
        });
    }

    // 路线DIY按钮
    if (elements.routeDiyBtn) {
        elements.routeDiyBtn.addEventListener('click', () => {
            startRouteDIY();
            showScreen('route-diy-screen');
        });
    }

    // 路线DIY返回按钮
    if (elements.routeBackBtn) {
        elements.routeBackBtn.addEventListener('click', () => {
            showScreen('detail-screen');
        });
    }

    // 添加途经点按钮
    if (elements.addWaypointBtn) {
        elements.addWaypointBtn.addEventListener('click', () => {
            addWaypoint();
        });
    }

    // 保存路线按钮
    if (elements.saveRouteBtn) {
        elements.saveRouteBtn.addEventListener('click', () => {
            saveRoute();
        });
    }

    // 播放解说按钮
    if (elements.playNarrationBtn) {
        elements.playNarrationBtn.addEventListener('click', () => {
            playNarration();
        });
    }

    // 下一题按钮
    if (elements.nextQuestionBtn) {
        elements.nextQuestionBtn.addEventListener('click', () => {
            nextQuestion();
        });
    }
    
    console.log('事件监听器初始化完成');
}

// 初始化动画
function initAnimation(attractionId) {
    // 停止之前的动画
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    
    // 重置动画数据
    animationData = {
        type: attractionId,
        time: 0,
        clouds: [],
        lights: [],
        mist: [],
        waves: []
    };
    
    // 根据景点类型初始化不同的动画元素
    switch (attractionId) {
        case 'great-wall':
            // 长城：添加云朵和阳光效果
            for (let i = 0; i < 5; i++) {
                animationData.clouds.push({
                    x: Math.random() * 600,
                    y: Math.random() * 100,
                    size: 50 + Math.random() * 50,
                    speed: 0.5 + Math.random() * 0.5
                });
            }
            break;
        case 'forbidden-city':
            // 故宫：添加光影效果
            for (let i = 0; i < 3; i++) {
                animationData.lights.push({
                    x: Math.random() * 600,
                    y: Math.random() * 200,
                    intensity: Math.random() * 0.5 + 0.5,
                    speed: 0.1 + Math.random() * 0.1
                });
            }
            break;
        case 'zhangjiajie':
            // 张家界：添加雾气效果
            for (let i = 0; i < 10; i++) {
                animationData.mist.push({
                    x: Math.random() * 600,
                    y: Math.random() * 200,
                    size: 100 + Math.random() * 100,
                    opacity: Math.random() * 0.3 + 0.1,
                    speed: 0.2 + Math.random() * 0.2
                });
            }
            break;
        case 'west-lake':
            // 西湖：添加波浪效果
            for (let i = 0; i < 5; i++) {
                animationData.waves.push({
                    y: 150 + Math.random() * 30,
                    amplitude: 5 + Math.random() * 5,
                    frequency: 0.01 + Math.random() * 0.01,
                    speed: 0.02 + Math.random() * 0.01
                });
            }
            break;
    }
    
    // 开始动画循环
    animate();
}

// 动画循环
function animate() {
    const canvas = elements.attractionCanvas;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 根据景点类型绘制不同的动画
    switch (animationData.type) {
        case 'great-wall':
            drawGreatWallAnimation(ctx);
            break;
        case 'forbidden-city':
            drawForbiddenCityAnimation(ctx);
            break;
        case 'zhangjiajie':
            drawZhangjiajieAnimation(ctx);
            break;
        case 'west-lake':
            drawWestLakeAnimation(ctx);
            break;
    }
    
    // 更新时间
    animationData.time += 0.016;
    
    // 继续动画循环
    animationId = requestAnimationFrame(animate);
}

// 长城动画
function drawGreatWallAnimation(ctx) {
    // 绘制云朵
    animationData.clouds.forEach(cloud => {
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size / 2, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size / 3, cloud.y, cloud.size / 3, 0, Math.PI * 2);
        ctx.arc(cloud.x - cloud.size / 3, cloud.y, cloud.size / 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
        
        // 移动云朵
        cloud.x += cloud.speed;
        if (cloud.x > 600 + cloud.size) {
            cloud.x = -cloud.size;
        }
    });
    
    // 绘制阳光效果
    ctx.beginPath();
    ctx.arc(500, 50, 100, 0, Math.PI * 2);
    const gradient = ctx.createRadialGradient(500, 50, 0, 500, 50, 100);
    gradient.addColorStop(0, 'rgba(255, 255, 200, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 200, 0)');
    ctx.fillStyle = gradient;
    ctx.fill();
}

// 故宫动画
function drawForbiddenCityAnimation(ctx) {
    // 绘制光影效果
    animationData.lights.forEach(light => {
        ctx.beginPath();
        ctx.arc(light.x, light.y, 50, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 50);
        gradient.addColorStop(0, `rgba(255, 250, 200, ${light.intensity})`);
        gradient.addColorStop(1, 'rgba(255, 250, 200, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // 闪烁效果
        light.intensity = 0.5 + Math.sin(animationData.time * 5 + light.speed) * 0.3;
    });
}

// 张家界动画
function drawZhangjiajieAnimation(ctx) {
    // 绘制雾气效果
    animationData.mist.forEach(mist => {
        ctx.beginPath();
        ctx.arc(mist.x, mist.y, mist.size / 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(mist.x, mist.y, 0, mist.x, mist.y, mist.size / 2);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${mist.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // 移动雾气
        mist.x += mist.speed;
        if (mist.x > 600 + mist.size) {
            mist.x = -mist.size;
        }
    });
}

// 西湖动画
function drawWestLakeAnimation(ctx) {
    // 绘制波浪效果
    animationData.waves.forEach((wave, index) => {
        ctx.beginPath();
        for (let x = 0; x < 600; x++) {
            const y = wave.y + Math.sin(x * wave.frequency + animationData.time * wave.speed * (index + 1)) * wave.amplitude;
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.lineTo(600, 200);
        ctx.lineTo(0, 200);
        ctx.closePath();
        const gradient = ctx.createLinearGradient(0, wave.y - 10, 0, 200);
        gradient.addColorStop(0, 'rgba(135, 206, 250, 0.3)');
        gradient.addColorStop(1, 'rgba(135, 206, 250, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
    });
}

// 加载景点详情
function loadAttractionDetail(attractionId) {
    const attraction = attractions[attractionId];
    currentAttraction = attraction;
    
    elements.detailName.textContent = attraction.name;
    elements.detailImg.src = attraction.image;
    elements.detailDescription.textContent = attraction.description;
    elements.detailYear.textContent = attraction.year;
    elements.detailArea.textContent = attraction.area;
    elements.detailVisitors.textContent = attraction.visitors;
    
    // 初始化动画
    initAnimation(attractionId);
    
    // 初始化音频
    initAudio(attractionId);
}

// 初始化音频
function initAudio(attractionId) {
    const attraction = attractions[attractionId];
    if (!attraction || !attraction.audio) return;
    
    // 停止之前的音频
    stopAudio();
    
    // 设置背景音乐
    if (attraction.audio.bg) {
        elements.bgAudio.src = attraction.audio.bg;
        elements.bgAudio.volume = 0.3;
        elements.bgAudio.play().catch(err => {
            console.log('背景音乐播放失败:', err);
        });
    }
    
    // 设置解说配音
    if (attraction.audio.narration) {
        elements.narrationAudio.src = attraction.audio.narration;
        elements.narrationAudio.volume = 0.7;
    }
}

// 停止音频
function stopAudio() {
    if (elements.bgAudio) {
        elements.bgAudio.pause();
        elements.bgAudio.src = '';
    }
    if (elements.narrationAudio) {
        elements.narrationAudio.pause();
        elements.narrationAudio.src = '';
    }
}

// 播放解说配音
function playNarration() {
    if (elements.narrationAudio && elements.narrationAudio.src) {
        elements.narrationAudio.play().catch(err => {
            console.log('解说配音播放失败:', err);
        });
    }
}

// 暂停解说配音
function pauseNarration() {
    if (elements.narrationAudio) {
        elements.narrationAudio.pause();
    }
}

// 开始问答游戏
function startQuiz() {
    currentQuizIndex = 0;
    loadQuizQuestion();
}

// 加载问答题目
function loadQuizQuestion() {
    if (!currentAttraction) return;
    
    const quiz = currentAttraction.quizzes[currentQuizIndex];
    if (!quiz) {
        // 问答结束
        elements.quizQuestion.textContent = '问答结束！';
        elements.quizOptions.innerHTML = '<p>你已经完成了所有问题，真棒！</p>';
        elements.nextQuestionBtn.textContent = '返回详情';
        elements.quizResult.textContent = '';
        return;
    }
    
    elements.quizQuestion.textContent = quiz.question;
    elements.quizOptions.innerHTML = '';
    elements.quizResult.textContent = '';
    elements.nextQuestionBtn.textContent = '下一题';
    
    // 生成选项
    quiz.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => {
            selectOption(optionElement, index, quiz.correct);
        });
        
        elements.quizOptions.appendChild(optionElement);
    });
}

// 选择选项
function selectOption(optionElement, selectedIndex, correctIndex) {
    // 禁用所有选项
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.style.pointerEvents = 'none';
        // 标记正确和错误选项
        if (parseInt(option.dataset.index) === correctIndex) {
            option.classList.add('correct');
        } else if (parseInt(option.dataset.index) === selectedIndex) {
            option.classList.add('incorrect');
        }
    });
    
    // 显示结果
    elements.quizResult.className = 'quiz-result';
    if (selectedIndex === correctIndex) {
        elements.quizResult.classList.add('correct');
        elements.quizResult.textContent = '回答正确！';
    } else {
        elements.quizResult.classList.add('incorrect');
        elements.quizResult.textContent = '回答错误，正确答案是：' + currentAttraction.quizzes[currentQuizIndex].options[correctIndex];
    }
}

// 下一题
function nextQuestion() {
    if (currentQuizIndex >= currentAttraction.quizzes.length - 1) {
        // 问答结束，返回详情页
        showScreen('detail-screen');
    } else {
        currentQuizIndex++;
        loadQuizQuestion();
    }
}

// 分享景点
function shareAttraction() {
    if (!currentAttraction) return;
    
    const shareText = `我正在浏览中国旅游景点巡礼，推荐你也来看看${currentAttraction.name}！\n\n${currentAttraction.description}`;
    
    // 检查是否支持Web Share API
    if (navigator.share) {
        navigator.share({
            title: currentAttraction.name,
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('分享失败:', err);
            // 降级方案
            fallbackShare(shareText);
        });
    } else {
        // 降级方案
        fallbackShare(shareText);
    }
}

// 降级分享方案
function fallbackShare(text) {
    // 创建临时文本区域
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('分享内容已复制到剪贴板，你可以粘贴给朋友！');
    } catch (err) {
        alert('复制失败，请手动复制分享内容。');
    } finally {
        document.body.removeChild(textArea);
    }
}

// 开始虚拟游览
function startVirtualTour() {
    if (!currentAttraction) return;
    
    // 重置全景图状态
    panoramaState = {
        pan: 0,
        zoom: 1
    };
    
    // 更新虚拟游览页面内容
    elements.tourName.textContent = currentAttraction.name;
    elements.tourDescription.textContent = currentAttraction.description;
    elements.panoramaImg.src = currentAttraction.panorama;
    
    // 加载热点区域
    loadHotspots(currentAttraction.hotspots);
    
    // 更新全景图显示
    updatePanorama();
}

// 加载热点区域
function loadHotspots(hotspots) {
    elements.hotspotsList.innerHTML = '';
    
    hotspots.forEach(hotspot => {
        const hotspotElement = document.createElement('div');
        hotspotElement.className = 'hotspot-item';
        hotspotElement.innerHTML = `
            <h5>${hotspot.name}</h5>
            <p>${hotspot.description}</p>
        `;
        
        // 添加点击事件
        hotspotElement.addEventListener('click', () => {
            // 这里可以添加热点区域点击后的交互逻辑
            alert(`你选择了：${hotspot.name}`);
        });
        
        elements.hotspotsList.appendChild(hotspotElement);
    });
}

// 平移全景图
function panPanorama(delta) {
    panoramaState.pan += delta;
    // 限制平移范围
    if (panoramaState.pan < -50) panoramaState.pan = -50;
    if (panoramaState.pan > 50) panoramaState.pan = 50;
    updatePanorama();
}

// 缩放全景图
function zoomPanorama(delta) {
    panoramaState.zoom += delta;
    // 限制缩放范围
    if (panoramaState.zoom < 0.5) panoramaState.zoom = 0.5;
    if (panoramaState.zoom > 2) panoramaState.zoom = 2;
    updatePanorama();
}

// 更新全景图显示
function updatePanorama() {
    const img = elements.panoramaImg;
    if (!img) return;
    
    // 应用平移和缩放变换
    img.style.transform = `translateX(${panoramaState.pan}px) scale(${panoramaState.zoom})`;
}

// 开始路线DIY
function startRouteDIY() {
    if (!currentAttraction) return;
    
    // 重置路线状态
    routeState = {
        waypoints: [],
        currentAttraction: currentAttraction
    };
    
    // 设置地图图片
    elements.routeMap.src = currentAttraction.image;
    
    // 加载默认途经点
    loadDefaultWaypoints();
    
    // 更新路线显示
    updateRouteDisplay();
}

// 加载默认途经点
function loadDefaultWaypoints() {
    if (!currentAttraction) return;
    
    // 从热点区域生成默认途经点
    if (currentAttraction.hotspots) {
        currentAttraction.hotspots.forEach((hotspot, index) => {
            routeState.waypoints.push({
                id: index + 1,
                name: hotspot.name,
                x: 20 + (index % 4) * 20,
                y: 20 + Math.floor(index / 4) * 20
            });
        });
    }
}

// 添加途经点
function addWaypoint() {
    const waypointName = prompt('请输入途经点名称：');
    if (!waypointName) return;
    
    const newWaypoint = {
        id: Date.now(),
        name: waypointName,
        x: Math.random() * 80 + 10, // 10-90%
        y: Math.random() * 80 + 10  // 10-90%
    };
    
    routeState.waypoints.push(newWaypoint);
    updateRouteDisplay();
}

// 更新路线显示
function updateRouteDisplay() {
    // 更新途经点列表
    updateWaypointsList();
    
    // 更新地图标记
    updateMapMarkers();
    
    // 更新路线路径
    updateRoutePath();
}

// 更新途经点列表
function updateWaypointsList() {
    elements.waypointsList.innerHTML = '';
    
    if (routeState.waypoints.length === 0) {
        elements.waypointsList.innerHTML = '<p style="text-align: center; color: #666;">暂无途经点，请添加途经点</p>';
        return;
    }
    
    routeState.waypoints.forEach((waypoint, index) => {
        const waypointElement = document.createElement('div');
        waypointElement.className = 'waypoint-item';
        waypointElement.innerHTML = `
            <span class="waypoint-name">${index + 1}. ${waypoint.name}</span>
            <div class="waypoint-actions">
                <button class="action-btn move-up" data-id="${waypoint.id}">↑</button>
                <button class="action-btn move-down" data-id="${waypoint.id}">↓</button>
                <button class="action-btn delete" data-id="${waypoint.id}">×</button>
            </div>
        `;
        
        // 添加事件监听
        waypointElement.querySelector('.move-up').addEventListener('click', () => {
            moveWaypoint(waypoint.id, -1);
        });
        
        waypointElement.querySelector('.move-down').addEventListener('click', () => {
            moveWaypoint(waypoint.id, 1);
        });
        
        waypointElement.querySelector('.delete').addEventListener('click', () => {
            deleteWaypoint(waypoint.id);
        });
        
        elements.waypointsList.appendChild(waypointElement);
    });
}

// 移动途经点
function moveWaypoint(id, direction) {
    const index = routeState.waypoints.findIndex(wp => wp.id === id);
    if (index === -1) return;
    
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= routeState.waypoints.length) return;
    
    // 交换位置
    [routeState.waypoints[index], routeState.waypoints[newIndex]] = 
    [routeState.waypoints[newIndex], routeState.waypoints[index]];
    
    updateRouteDisplay();
}

// 删除途经点
function deleteWaypoint(id) {
    routeState.waypoints = routeState.waypoints.filter(wp => wp.id !== id);
    updateRouteDisplay();
}

// 更新地图标记
function updateMapMarkers() {
    elements.mapMarkers.innerHTML = '';
    
    routeState.waypoints.forEach((waypoint, index) => {
        const marker = document.createElement('div');
        marker.className = 'map-marker';
        marker.style.left = `${waypoint.x}%`;
        marker.style.top = `${waypoint.y}%`;
        marker.title = waypoint.name;
        
        // 添加点击事件
        marker.addEventListener('click', () => {
            alert(`途经点：${waypoint.name}`);
        });
        
        elements.mapMarkers.appendChild(marker);
    });
}

// 更新路线路径
function updateRoutePath() {
    if (routeState.waypoints.length < 2) {
        elements.routePath.innerHTML = '';
        return;
    }
    
    // 创建SVG路径
    let pathData = `M ${routeState.waypoints[0].x}% ${routeState.waypoints[0].y}%`;
    
    for (let i = 1; i < routeState.waypoints.length; i++) {
        pathData += ` L ${routeState.waypoints[i].x}% ${routeState.waypoints[i].y}%`;
    }
    
    elements.routePath.innerHTML = `
        <svg>
            <path d="${pathData}"></path>
        </svg>
    `;
}

// 保存路线
function saveRoute() {
    if (routeState.waypoints.length < 2) {
        alert('请至少添加两个途经点');
        return;
    }
    
    // 构建路线数据
    const routeData = {
        attraction: routeState.currentAttraction.name,
        waypoints: routeState.waypoints,
        timestamp: new Date().toISOString()
    };
    
    // 保存到本地存储
    try {
        localStorage.setItem('savedRoute', JSON.stringify(routeData));
        alert('路线保存成功！');
    } catch (error) {
        alert('保存失败，请稍后再试');
        console.error('保存路线失败:', error);
    }
}

// 初始化应用
function initApp() {
    console.log('初始化应用');
    
    // 填充元素引用
    elements = {
        splashScreen: document.getElementById('splash-screen'),
        mainScreen: document.getElementById('main-screen'),
        detailScreen: document.getElementById('detail-screen'),
        quizScreen: document.getElementById('quiz-screen'),
        virtualTourScreen: document.getElementById('virtual-tour-screen'),
        startBtn: document.getElementById('start-btn'),
        backBtn: document.getElementById('back-btn'),
        quizBackBtn: document.getElementById('quiz-back-btn'),
        tourBackBtn: document.getElementById('tour-back-btn'),
        quizBtn: document.getElementById('quiz-btn'),
        shareBtn: document.getElementById('share-btn'),
        virtualTourBtn: document.getElementById('virtual-tour-btn'),
        nextQuestionBtn: document.getElementById('next-question-btn'),
        panLeft: document.getElementById('pan-left'),
        panRight: document.getElementById('pan-right'),
        zoomIn: document.getElementById('zoom-in'),
        zoomOut: document.getElementById('zoom-out'),
        attractionCards: document.querySelectorAll('.attraction-card'),
        detailTitle: document.getElementById('detail-title'),
        detailName: document.getElementById('detail-name'),
        detailImg: document.getElementById('detail-img'),
        detailDescription: document.getElementById('detail-description'),
        detailYear: document.getElementById('detail-year'),
        detailArea: document.getElementById('detail-area'),
        detailVisitors: document.getElementById('detail-visitors'),
        quizQuestion: document.getElementById('quiz-question'),
        quizOptions: document.getElementById('quiz-options'),
        quizResult: document.getElementById('quiz-result'),
        attractionCanvas: document.getElementById('attraction-canvas'),
        panoramaImg: document.getElementById('panorama-img'),
        tourName: document.getElementById('tour-name'),
        tourDescription: document.getElementById('tour-description'),
        hotspotsList: document.getElementById('hotspots-list'),
        routeDiyScreen: document.getElementById('route-diy-screen'),
        routeBackBtn: document.getElementById('route-back-btn'),
        routeDiyBtn: document.getElementById('route-diy-btn'),
        routeMap: document.getElementById('route-map'),
        routePath: document.getElementById('route-path'),
        mapMarkers: document.getElementById('map-markers'),
        waypointsList: document.getElementById('waypoints-list'),
        addWaypointBtn: document.getElementById('add-waypoint-btn'),
        saveRouteBtn: document.getElementById('save-route-btn'),
        playNarrationBtn: document.getElementById('play-narration-btn'),
        bgAudio: document.getElementById('bg-audio'),
        narrationAudio: document.getElementById('narration-audio')
    };
    
    // 检查元素是否正确获取
    console.log('元素获取情况:', {
        startBtn: elements.startBtn,
        attractionCards: elements.attractionCards.length,
        backBtn: elements.backBtn,
        quizBtn: elements.quizBtn,
        shareBtn: elements.shareBtn,
        virtualTourBtn: elements.virtualTourBtn,
        routeDiyBtn: elements.routeDiyBtn,
        playNarrationBtn: elements.playNarrationBtn
    });
    
    initEventListeners();
    // 显示启动页
    console.log('显示启动页');
    showScreen('splash-screen');
    
    // 检查启动页是否正确显示
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        console.log('启动页状态:', {
            className: splashScreen.className,
            style: {
                display: window.getComputedStyle(splashScreen).display,
                opacity: window.getComputedStyle(splashScreen).opacity
            }
        });
    }, 1000);
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', initApp);

// 检查页面是否加载完成
console.log('页面加载中...');