     const hiddenPages = ["method-rigtools", "method-extprinter", "method-blomevm", "method-incognito", "method-exthanger", "method-mclabsvm", "method-googlehidden", "settings", "credits", "tools", "exploits", "upd-v1.0", "upd-v1.1", "upd-v1.1.1", "upd-v1.2", "upd-v1.2.1", "upd-v1.2.2"
        ];
        
        const games = [
            {
                id: "Other1",
                title: "suggest a game or app",
                url: "https://forms.office.com/r/thCRFz2sYp",
                category: []
            },
            {
                id: "game1",
                title: "Gunspin",
                image: "https://static.cdnvia.com/pics/games/200/1-2534-gunspin.jpg",
                url: "https://ubg44.github.io/GunSpin/",
                category: ["action", "popular"]
            },
            {
                id: "game2",
                title: "Minecraft v1.8.8 (Eaglercraft)",
                image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png",
                url: "https://d1tm91r4ytbt54.cloudfront.net/2779cbcb-a02f-48a3-9e2e-95a8d123d165/1685483461665/web/index.html",
                category: ["popular"]
            },
            {
                id: "game3",
                title: "Slope",
                image: "https://raw.githubusercontent.com/mrdavidss-vgg/assets/refs/heads/main/slope.jpeg",
                url: "https://firespread01.github.io/slope/",
                category: ["action"]
            },
            {
                id: "game4",
                title: "Idle Dice",
                image: "https://raw.githubusercontent.com/mrdavidss-vgg/assets/refs/heads/main/coolmathidledice.jpeg",
                url: "https://mathstudy.tech/idle-dice/",
                category: []
            },
            {
                id: "game5",
                title: "Slowroads.io",
                image: "https://raw.githubusercontent.com/mrdavidss-vgg/assets/refs/heads/main/slowroads.jpeg",
                url: "https://slowroads.io/",
                category: ["popular"]
            },
            {
                id: "game6",
                title: "Coolmath",
                image: "https://www.coolmathgames.com/themes/custom/coolmath/logo-stacked.svg",
                url: "https://coolmathgames.com/",
                category: ["popular"]
            },
            {
                id: "game7",
                title: "Infinite Craft (not working)",
                image: "https://neal.fun/favicons/infinite-craft.png",
                url: "https://neal.fun/infinite-craft/",
                category: ["popular"]
            },
            {
                id: "game8",
                title: "Diep.io (most likely wont work.)",
                image: "https://static.wikia.nocookie.net/diepio/images/5/51/Tank_icon_3.png/revision/latest?cb=20240902135047",
                url: "https://diep.io/",
                category: ["popular", "action"]
            },
            {
                id: "game9",
                title: "agar.io",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Agar.io_Logo.png/250px-Agar.io_Logo.png",
                url: "https://agar.io/",
                category: ["popular", "action"]
            },
            {
                id: "game10",
                title: "Zombs Royale",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z2ky5Tf8bWc8yerHH3xu5CcGY2WFTtdYzw&s",
                url: "https://zombsroyale.io/",
                category: ["popular", "action"]
            },
            {
                id: "game11",
                title: "Crazygames",
                image: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://crazygames.com&size=64",
                url: "https://crazygames.com/",
                category: ["popular"]
            },
            {
                id: "game12",
                title: "Spacewaves (ads)",
                image: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://spacewaves.io&size=64",
                url: "https://www.msn.com/en-xl/play/games/space-waves/cg-9nm5764dbppg/",
                category: ["popular"]
            },
            {
                id: "game13",
                title: "Google Chrome Dino",
                image: "https://raw.githubusercontent.com/mrdavidss-vgg/assets/refs/heads/main/IMG_2952.png",
                url: "https://chrome-dino-game.github.io/",
                category: ["popular"]
            },
            {
                id: "game14",
                title: "Tetris",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Tetris_logo.png",
                url: "https://djblue.github.io/tetris/",
                category: ["popular"]
            },
            {
                id: "game15",
                title: "Clicker Heroes",
                image: "https://static.wikia.nocookie.net/clickerheroes/images/e/ef/Abcdefg.webp/revision/latest?cb=20240822171246",
                url: "https://ubg98.github.io/ClickerHeroes/",
                category: ["popular"]
            },
            {
                id: "app1",
                title: "Discord - Login",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10rPiqQn7hN6eGiuB-UUYyerDiN7SiHpOWQ&s",
                url: "https://discord.com/login",
                category: ["popular", "apps"]
            },
            {
                id: "app2",
                title: "Discord (Canary) - Login",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10rPiqQn7hN6eGiuB-UUYyerDiN7SiHpOWQ&s",
                url: "https://canary.discord.com/login",
                category: ["popular", "apps"]
            },
            {
                id: "app3",
                title: "Spotify",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
                url: "https://open.spotify.com/",
                category: ["popular", "apps"]
            },
            {
                id: "app4",
                title: "Youtube",
                image: "https://raw.githubusercontent.com/mrdavidss-vgg/assets/refs/heads/main/youtube.svg",
                url: "https://youtube.com/",
                category: ["popular", "apps"]
            },
            {
                id: "app5",
                title: "Indivious",
                image: "https://raw.githubusercontent.com/iv-org/invidious/refs/heads/master/assets/invidious-colored-vector.svg",
                url: "https://inv.nadeko.net/feed/",
                category: ["apps", "popular"]
            }
        ];
    
        let copyTimeout;
        let currentAlert;
    
        function smartCopy(text) {
            if (copyTimeout) clearTimeout(copyTimeout);
            if (currentAlert) document.body.removeChild(currentAlert);
    
            currentAlert = document.createElement('div');
            currentAlert.innerHTML = `
                <div style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #b3d4ff; color: white; padding: 10px 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); z-index: 9999; display: flex; align-items: center;">
                    <span>Copied to clipboard!</span>
                    <button style="margin-left: 15px; background: #5094fc; color: white; border: none; padding: 3px 8px; border-radius: 3px; cursor: pointer;">OK</button>
                </div>
            `;
    
            const okButton = currentAlert.querySelector('button');
            okButton.onclick = () => {
                clearTimeout(copyTimeout);
                document.body.removeChild(currentAlert);
                currentAlert = null;
            };
    
            document.body.appendChild(currentAlert);
    
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
    
            copyTimeout = setTimeout(() => {
                if (currentAlert) {
                    document.body.removeChild(currentAlert);
                    currentAlert = null;
                }
            }, 5000);
        }
    
        document.addEventListener('DOMContentLoaded', function() {
            const gamesGrid = document.getElementById('gamesGrid');
            
            games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card';
                gameCard.id = 'card-' + game.id;
                gameCard.dataset.categories = game.category.join(' ');
                gameCard.innerHTML = `
                    <img src="${game.image || 'https://via.placeholder.com/200x120?text=Game+Image'}" alt="${game.title}" class="game-image" onerror="this.src='https://via.placeholder.com/200x120?text=Image+Failed'">
                    <div class="game-title">${game.title}</div>
                `;
                gameCard.onclick = function() {
                    openGameInFullscreen(game.url);
                };
                gamesGrid.appendChild(gameCard);
            });
            
            document.addEventListener('keydown', function(e) {
                if (e.key === "Escape") {
                    closeFullscreen();
                }
            });
        });
    
        function showPage(pageId, event) {
            if (event) event.preventDefault();
            
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            const pageToShow = document.getElementById(pageId);
            if (pageToShow) {
                pageToShow.classList.add('active');
            }
            
            if (!hiddenPages.includes(pageId)) {
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.remove('active');
                    const onclickAttr = btn.getAttribute('onclick');
                    if (onclickAttr && onclickAttr.includes(pageId)) {
                        btn.classList.add('active');
                    }
                });
            }
            
            if (pageToShow) {
                pageToShow.scrollTop = 0;
            }
        }
    
        function filterGames() {
            const searchTerm = document.getElementById('gameSearch').value.toLowerCase();
            const gameCards = document.querySelectorAll('.game-card');
            
            gameCards.forEach(card => {
                const title = card.querySelector('.game-title').textContent.toLowerCase();
                card.style.display = title.includes(searchTerm) ? 'block' : 'none';
            });
        }
    
        function filterByCategory(category) {
            const gameCards = document.querySelectorAll('.game-card');
            const filterButton = document.querySelector('.filter-button');
            
            filterButton.textContent = category === 'all' ? 'All Games ▼' : 
                                    category.charAt(0).toUpperCase() + category.slice(1) + ' ▼';
            
            gameCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                } else {
                    const categories = card.dataset.categories.split(' ');
                    if (categories.includes(category)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        }
    
        function openGameInFullscreen(url) {
    const fullscreen = document.getElementById('fullscreen-game');
    const container = document.querySelector('.page-container');
    const navbar = document.querySelector('.navbar');

    // Clear any existing iframe
    const oldIframe = document.getElementById('game-iframe');
    if (oldIframe) oldIframe.remove();

    // Create new iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'game-iframe';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allowFullscreen = true;
    iframe.sandbox = 'allow-scripts allow-same-origin allow-popups allow-forms';

    // Prepare proxy URLs with fallbacks
    const proxyUrls = [
        `https://meximathurbanned.global.ssl.fastly.net/embed.html#${encodeURIComponent(url)}`,
        `https://full.boxathome.net/embed.html#${encodeURIComponent(url)}`,
        `https://frogiesarcade.win/embed.html#${encodeURIComponent(url)}`,
        `https://nowgg.lol/embed.html#${encodeURIComponent(url)}`,
        url // Fallback to direct URL
    ];

    let currentProxyIndex = 0;

    function tryNextProxy() {
        if (currentProxyIndex < proxyUrls.length) {
            iframe.src = proxyUrls[currentProxyIndex];
            currentProxyIndex++;
        }
    }

    // Try the first proxy
    tryNextProxy();

    // If iframe fails to load, try the next proxy
    iframe.onerror = tryNextProxy;

    // Add iframe to fullscreen container
    fullscreen.appendChild(iframe);
    fullscreen.style.display = 'block';
    container.style.display = 'none';
    navbar.style.display = 'none';
    document.body.style.overflow = 'hidden';

    // Add exit button
    const exitBtn = document.createElement('button');
    exitBtn.className = 'exit-game-btn';
    exitBtn.innerHTML = '×';
    exitBtn.onclick = closeFullscreen;
    fullscreen.appendChild(exitBtn);

    // Add loading timeout
    const loadingCheck = setTimeout(() => {
        if (!iframe.contentWindow || iframe.contentDocument.body.innerHTML === '') {
            tryNextProxy();
        }
    }, 5000);

    iframe.onload = () => {
        clearTimeout(loadingCheck);
    };
}

const partners = [
{
    id: "partner1",
    title: "Benrogo",
    icon: "https://172673.xyz/logo.png",
    url: "https://benrogo.net/",
    description: "Benrogo is a site has lots of sites that indicates you if a games website or a pr-xy is down and has lots of sites to search and play games on."
}
];

function initPartners() {
    const partnersGrid = document.getElementById('partnersGrid');
    
    partners.forEach(partner => {
        const partnerCard = document.createElement('div');
        partnerCard.className = 'partner-card';
        partnerCard.innerHTML = `
            <img src="${partner.icon}" alt="${partner.title}" class="partner-icon">
            <p class="partner-name">${partner.title}</p>
        `;
        partnerCard.onclick = function() {
            openPartnerCard(partner);
        };
        partnersGrid.appendChild(partnerCard);
    });
}

function openPartnerCard(partner) {
    document.getElementById('expandedPartnerIcon').src = partner.icon;
    document.getElementById('expandedPartnerTitle').textContent = partner.title;
    document.getElementById('expandedPartnerDesc').textContent = partner.description;
    document.getElementById('expandedPartnerBtn').onclick = function() {
        window.location.href = partner.url;
    };
    
    document.getElementById('partnerOverlay').classList.add('active');
    document.getElementById('partnerExpanded').classList.add('active');
}

function closePartnerCard() {
    document.getElementById('partnerOverlay').classList.remove('active');
    document.getElementById('partnerExpanded').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    initPartners();
    
    document.getElementById('partnerOverlay').onclick = closePartnerCard;
});

function validateAndOpenProxy() {
        const urlInput = document.getElementById('pro-xySearch').value.trim();
        const errorElement = document.getElementById('url-error');
        
        errorElement.style.display = 'none';
        
        try {
            if (!/^https?:\/\//i.test(urlInput)) {
                throw new Error('Invalid protocol');
            }
            
            new URL(urlInput);
            
            openGameInFullscreen(urlInput);
        } catch (e) {
            errorElement.style.display = 'block';
        }
    }
    
    function handleProxyEnter(event) {
        if (event.key === 'Enter') {
            validateAndOpenProxy();
        }
    }
    
        function closeFullscreen() {
            const fullscreen = document.getElementById('fullscreen-game');
            const iframe = document.getElementById('game-iframe');
            
            if (iframe) {
                iframe.src = 'about:blank';
                iframe.remove();
            }
            
            const exitBtn = document.querySelector('.exit-game-btn');
            if (exitBtn) exitBtn.remove();
            
            fullscreen.style.display = 'none';
            document.querySelector('.page-container').style.display = 'block';
            document.querySelector('.navbar').style.display = 'flex';
            document.body.style.overflow = 'auto';
            
            showPage('games');
        }
