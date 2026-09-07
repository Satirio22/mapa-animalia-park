// DADOS DOS MAPAS E SEUS PONTOS
const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.png",
        pontos: [
            { id: "ambulatorio", nome: "🚑 Ambulatório", area: "Ambulatório / Bombeiros Animália", desc: "Localizado na Vila Animália.", icone: "🚑", top: 20, left: 43 },
            { id: "banheiro-recepcao", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado na Recepção.", icone: "🚻", top: 21, left: 39 },
            { id: "banheiro-leao", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado após recinto Leão.", icone: "🚻", top: 42, left: 39 },
            { id: "banheiro-caverna", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado na Caverna/Aviário.", icone: "🚻", top: 62, left: 35 },
            { id: "banheiro-fazendinha", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado sentido Fazendinha.", icone: "🚻", top: 85, left: 62 },
            { id: "banheiro-foodpark", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado no Food Park.", icone: "🚻", top: 55.5, left: 76.5 },
            { id: "banheiro-baoba", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado no Restaurante Central Baobá.", icone: "🚻", top: 50, left: 51 },
            { id: "banheiro-borboletas", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado no Jardim das Borboletas.", icone: "🚻", top: 50, left: 57 },
            { id: "banheiro-hipopotamo", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado em frente recinto Hipopótamo.", icone: "🚻", top: 33, left: 66.5 },
            { id: "banheiro-saida-reserva", nome: "🚻 Banheiro", area: "Comum + Acessível", desc: "Localizado saída da Reserva/Vila Animália.", icone: "🚻", top: 13, left: 45 },
            { id: "banheiro-galpao", nome: "🚻 Banheiro Galpão Diversão", area: "Comum + Acessível", desc: "Banheiro Próximo à Saída do Diversão.", icone: "🚻", top: 15.5, left: 33.5 },
            { id: "leoes", nome: "Leões", area: "🦁 Animália Reserva", desc: "Área dos leões do parque.", icone: "🦁", top: 20, left: 10 },
            { id: "cafe-recepcao", nome: "CAFÉ RECEPÇÃO", area: "☕ Café, Salgados e pipocas", desc: "Localizado na Recepção.", icone: "☕", top: 24, left: 41 },
            { id: "quiosque-leao", nome: "QUIOSQUE LEÃO", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "🍿", top: 46, left: 38 },
            { id: "quiosque-sucuarana", nome: "QUIOSQUE SUÇUARANA", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "🍿", top: 66, left: 44 },
            { id: "cafe-caverna", nome: "CAFE CAVERNA", area: "☕ Café, Salgados e pipocas", desc: "Dentro do Aviário.", icone: "☕", top: 65, left: 35 },
            { id: "quiosque-tamandua", nome: "QUIOSQUE TAMANDUÁ", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "🍿", top: 55, left: 56 },
            { id: "quiosque-fazendinha", nome: "QUIÓSQUE FAZENDINHA", area: "🍿 Café, Salgados e pipocas", desc: "Próximo à Fazendinha.", icone: "🍿", top: 82, left: 68 },
            { id: "teleferico-est2", nome: "TELEFÉRICO EST. 2", area: "🚠 Teleférico Est. 2", desc: "Localizado próximo à Fazendinha.", icone: "🚠", top: 85, left: 67 },
            { id: "hamburgueria-est2", nome: "HAMBURGUERIA EST. 2", area: "🍔 Burguers e Porções", desc: "Localizado na Est.2 Teleférico.", icone: "🍔", top: 84, left: 68.5 },
            { id: "quiosque-lobo-marinho", nome: "QUIOSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "🍿", top: 80, left: 85 },
            { id: "foodpark-pastelaria", nome: "FOOD PARK PASTELARIA", area: "🥟 Pastéis Sabores", desc: "Localizado na Reserva.", icone: "🥟", top: 54, left: 72 },
            { id: "foodpark-espetaria", nome: "FOOD PARK ESPETARIA/LINGUIÇARIA", area: "🍖 Espetos e linguiças.", desc: "Localizado na Reserva.", icone: "🍖", top: 59, left: 71 },
            { id: "foodpark-chicken", nome: "FOOD PARK CHICKEN & FRIES", area: "🍗 Porções de Frango", desc: "Localizado na Reserva.", icone: "🍗", top: 58.5, left: 68.5 },
            { id: "foodpark-yakisoba", nome: "FOOD PARK YAKISOBA", area: "🍜 Yakissoba Sabores", desc: "Localizado na Reserva.", icone: "🍜", top: 53, left: 69.5 },
            { id: "restaurante-baoba", nome: "RESTAURANTE BAOBÁ", area: "🍽️ Buffet por Pessoa.", desc: "Localizado na Reserva.", icone: "🍽️", top: 40, left: 53 },
            { id: "quiosque-canguru", nome: "QUIOSQUE CANGURU", area: "🍿 Café, Salgados e pipocas.", desc: "Localizado na Reserva.", icone: "🍿", top: 32, left: 74.5 },
            { id: "teleferico-est1", nome: "TELEFÉRICO EST. 1", area: "🚠 Teleférico Est. 1", desc: "Localizado na Vila Animália.", icone: "🚠", top: 14, left: 42.5 },
            { id: "vila-animalia", nome: "🏘️ VILA ANIMÁLIA", area: "Ambiente aconchegante para uma refeição", desc: "🥩 Restaurante Savana.<br>🍨 Shake do Bin.<br>☕ Vila Cafeteria.<br>🍔 Hamburgueria da Vila.<br>🍕 Selva dos Sabores.<br>🍝 Vila Tratoria.<br>🌭 Hot Dog do Kiran.<br>🥤 Cantinho da Girafa.", icone: "🏘️", top: 17, left: 43 },
            { id: "diversao-indoor", nome: "🍟🍔 DIVERSÃO INDOOR", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍔 Cesta Pic Nic.<br>🥮 Carrossel.<br>🥮 Mundo Doce.<br>🍿 Carrinho de Doce e Pipoca.", icone: "🏘️", top: 17, left: 28 }
        ]
    },
    diversao: {
        imagem: "mapa.diversao.png",
        pontos: [
            { id: "banheiro-cyber", nome: "Restaurante e Banheiro Cyber", area: "Comum + Acessível", desc: "Localizado ao lado do Cyber Hawks.", icone: "🚻", top: 16, left: 25 },
            { id: "quiosque-splash", nome: "QUIÓSQUE SPLASH", area: "🍿 Café, Salgados e pipocas", desc: "Localizado próximo ao vulcão.", icone: "🍿", top: 55, left: 8 },
            { id: "quiosque-viking", nome: "QUIÓSQUE VIKING", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na entrada do Outdoor.", icone: "🍿", top: 42, left: 42 },
            { id: "montanha-russa", nome: "Montanha-russa", area: "🎢 Animália Diversão", desc: "Uma das principais atrações do parque indoor.", icone: "🎢", top: 10, left: 10 },
            { id: "alimentacao-indoor", nome: "Alimentação Indoor", area: "🍔 Animália Diversão", desc: "Ponto de alimentação do parque indoor.", icone: "🍔", top: 10, left: 10 }
        ]
    }
};

// TROCA DE MAPA
function trocarMapa(categoria, botaoClicado) {
    if (botaoClicado) {
        document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('active'));
        botaoClicado.classList.add('active');
    }

    const mapaInfo = dadosPark[categoria];
    if (!mapaInfo) return;

    document.getElementById("imagemMapa").src = mapaInfo.imagem;

    const camada = document.getElementById("camadaPontos");
    camada.innerHTML = "";

    mapaInfo.pontos.forEach(ponto => criarMarcador(ponto, camada));
}

// CRIA OS MARCADORES
function criarMarcador(ponto, container) {
    const btn = document.createElement("button");
    btn.className = "ponto";
    btn.style.top = `${ponto.top}%`;
    btn.style.left = `${ponto.left}%`;
    btn.innerHTML = ponto.icone;
    btn.setAttribute("aria-label", ponto.nome);
    
    btn.onclick = (e) => {
        e.stopPropagation();
        abrirLocal(ponto.nome, ponto.area, ponto.desc);
    };
    
    container.appendChild(btn);
}

// MODAL SLIDE (BOTTOM SHEET)
function abrirLocal(nome, area, descricao) {
    document.getElementById("nomeLocal").textContent = nome;
    document.getElementById("areaLocal").textContent = area;
    document.getElementById("descricaoLocal").innerHTML = descricao;
    document.getElementById("janelaLocal").classList.add("ativa");
}

function fecharLocal() {
    document.getElementById("janelaLocal").classList.remove("ativa");
}

function fecharAoClicarFora(event) {
    if (event.target.id === "janelaLocal") {
        fecharLocal();
    }
}

// LIMITES REAIS E AJUSTADOS DO ANIMÁLIA PARK
const LIMITES_PARQUE = {
    latMax: -23.601500, // Norte (Topo do Mapa)
    latMin: -23.609500, // Sul (Base do Mapa)
    lngMin: -46.899000, // Oeste (Esquerda do Mapa)
    lngMax: -46.888000  // Leste (Direita do Mapa)
};

function iniciarGeolocalizacao() {
    const userMarker = document.getElementById("userLocation");

    if (!navigator.geolocation) {
        console.warn("Geolocalização não é suportada por este navegador.");
        esconderElemento();
        return;
    }

    navigator.geolocation.watchPosition(
        (posicao) => {
            const lat = posicao.coords.latitude;
            const lng = posicao.coords.longitude;

            // Converte Latitude e Longitude para % dentro da imagem do mapa
            let topPercent = ((LIMITES_PARQUE.latMax - lat) / (LIMITES_PARQUE.latMax - LIMITES_PARQUE.latMin)) * 100;
            let leftPercent = ((lng - LIMITES_PARQUE.lngMin) / (LIMITES_PARQUE.lngMax - LIMITES_PARQUE.lngMin)) * 100;

            console.log(`Posição GPS real: Lat ${lat}, Lng ${lng}`);
            console.log(`Posição calculada: Top ${topPercent.toFixed(1)}%, Left ${leftPercent.toFixed(1)}%`);

            // Se o usuário estiver dentro dos limites do parque (0% a 100%)
            if (topPercent >= 0 && topPercent <= 100 && leftPercent >= 0 && leftPercent <= 100) {
                posicionarElemento(topPercent, leftPercent);
            } else {
                // Se estiver testando fora do parque (ex: em casa), oculta o ponto para não mostrar lugar errado
                console.warn("Você está fora do perímetro do mapa do parque.");
                esconderElemento();
            }
        },
        (erro) => {
            console.warn("Erro de GPS/Rede:", erro.message);
            esconderElemento();
        },
        {
            enableHighAccuracy: false, // Evita estouro de tempo (Timeout) em notebooks/Wi-Fi
            maximumAge: 10000,         // Aceita posições recentes obtidas nos últimos 10s
            timeout: 20000             // Dá até 20 segundos de tolerance de busca
        }
    );
}

function posicionarElemento(top, left) {
    const userMarker = document.getElementById("userLocation");
    if (userMarker) {
        userMarker.style.top = `${top}%`;
        userMarker.style.left = `${left}%`;
        userMarker.style.display = "block";
        userMarker.style.zIndex = "999";
    }
}

function esconderElemento() {
    const userMarker = document.getElementById("userLocation");
    if (userMarker) {
        userMarker.style.display = "none";
    }
}

// CARREGAMENTO INICIAL
window.onload = () => {
    trocarMapa('reserva');
    iniciarGeolocalizacao();
};
