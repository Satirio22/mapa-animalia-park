// DADOS DOS MAPAS E SEUS PONTOS
const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.png",
        pontos: [
            { id: "AMBULATÓRIO", nome: "🚑 AMBULATÓRIO", area: "Ambulatório / Bombeiros Animália", desc: "Localizado na Vila Animália.",  icone: "icons/ambulatorio.png", top: 26, left: 53 },
            { id: "quiosque-leao", nome: "QUIOSQUE LEÃO", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "🍿", top: 49, left: 41 },
            { id: "quiosque-sucuarana", nome: "QUIOSQUE SUÇUARANA", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "🍿", top: 64, left: 43 },
            { id: "quiosque-tamandua", nome: "QUIOSQUE TAMANDUÁ", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "🍿", top: 60, left: 56 },
            { id: "quiosque-lobo-marinho", nome: "QUIOSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "🍿", top: 80, left: 80 },
            { id: "quiosque-canguru", nome: "QUIOSQUE CANGURU", area: "🍿 Café, Salgados e pipocas.", desc: "Localizado na Reserva.", icone: "🍿", top: 40, left: 74.5 },

            { id: "VILA ANIMALIA", nome: "VILA ANIMÁLIA", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança",
desc: "🚻Banheiro (Comum e Acessivel)<br>🧸Vila Adventure (Souvenier)<br>🧸Baby Zoo (Souvenier)<br>🥩Restaurante Savana (Carnes nobres)<br>🥤Shake do Bin (Sorvetes e Shakes)<br>☕Vila Cafeteria (Cafés e salgados)<br>🍔Hamburgueria da Vila (Burgues e bebidas)<br>🍕Selva de Sabores (Pizzas e Crespes)<br>🍝Vila Tratoria (Massas e Carnes)<br>🌭Hot Dog do Kiran (Hot Dog's)<br>🍨Cantinho da Girafa (Sorvetes e massas)<br>🚑Ambulatório (Saude e Bombeiros)<br>🚠Vila Estação. (Teleférico)<br>", icone: "icons/vila.png", top: 20, left: 53 },

            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!",
desc: "🔁Entrada/Saida<br>🚻Banheiro (Comum e Acessivel)<br>🧑‍💻SAV (Serviço de Atendimento ao Visitante)<br>☕Cafeteria (Cafés e salgados)<br>🧸Animalia Adventure (Souvenier)<br>📸Fotografica (Retirada de Fotos)<br>", icone: "icons/recepçao.png", top: 27, left: 48  },

            { id: "FOOD PARK", nome: "FOOD PARK", area: "Natureza e uma boa alimentação",
desc: "🚻Banheiro (Comum e Acessivel)<br>🍖Espetaria/Linguiçaria<br>🍗Chicken & Fries<br>🥟Pastelaria<br>🍜Yakissoba<br>", icone: "icons/food-park.png", top: 60.5, left: 70.5 },

            { id: "AVIÁRIO", nome: "AVIÁRIO", area: "Um dos Maiores Aviarios da America Latina",
desc: "🚻Banheiro (Comum e Acessivel)<br>☕Cafá Caverna (Cafés e salgados)<br>🪿Aviário (Passaros e Natureza)<br>", icone: "icons/Aviario.png", top: 60, left: 33  },

            { id: "RESTAURANTE CENTRAL", nome: "RESTAURANTE CENTRAL", area: "Buffet a Vontade",
desc: "🚻Banheiro (Comum e Acessivel)<br> 🍽️Restaurante Baboá (Buffet por Pessoa)<br> 🦋Jardim das Borboletas (Area de Descanso)<br>", icone: "icons/rest.central.png", top: 45.5, left: 55.5 },

            { id: "DIVERSÃO INDOOR A&B", nome: "🍟🍔 ANIMALIA ALIMENTAÇÃO", area: "Diversão e refeição, tudo em um só lugar!",
desc: "🚻Banheiro (Comum e Acessivel)<br>🍔 Cesta Pic Nic (Burgues e bebidas).<br>☕Carrossel (Porções e Cafés).<br>🥮Mundo Doce (Doces e Bebidas).<br>🍿Carrinho de Doce e Pipoca.(Vai um docinho ai?)", icone: "icons/div-ab.png", top: 17, left: 35 },

            { id: "DIVERSÃO INDOOR DIV", nome: "🎡 ANIMALIA DIVERSÃO", area: "Atrações Magicas e divertidas!",
desc: "🚻Banheiro (Comum e Acessivel)<br> 🐸Vitoria Regia<br>🛩️Eagle Flight (Aviãozinho)<br>🎈Balão Mexicano<br>👒Forte Apache (Trenzinho)<br>🦘Kanguroo Joy<br>🦒Giraffe Cool<br>🎠Bella Giostra (Carrosel)<br>🩻Joe Caveira<br>🧗Kite Dragon<br>🍭Mundo Doce<br>⛵Rise of Rome<br>🥶Bear Mountain<br>🏎️Big Chock (bate-bate)<br>🧩Cantinho do Silencio (Para Pessoas neurodivergentes)<br>", icone: "icons/div.png",  top: 21, left: 38 },

            { id: "DIVERSAO AVENTURA", nome: "🎢 ANIMALIA AVENTURA", area: "Atrações Radicaaaaais!",
desc: "🚻Banheiro (Comum e Acessivel)<br> ⛵Barco Viking (Aqui tem que gritar)<br>💧Splash (Aguaaaa)<br>🥶Cyber Hawk (De ponta cabeça)<br>🎢Cyclone (Intensidade e aventura)<br>🐀Big Air Coaster (Essa é leve)<br>🔫Aqua Combat (Combate aquatico)<br>", icone: "icons/div.png",  top: 10, left: 40 },

            { id: "FAZENDINHA", nome: "FAZENDINHA", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança",
desc: "🚻Banheiro (Comum e Acessivel)<br>🍿Quiósque Fazendinha (Doces e Bebidas)<br>🧸Estação Souvenier (Ursinhos e lembrancinhas)<br>🍔Hamburgueria Teleférico (Burgues e bebidas)<br>🚠Estação Teleférico (Vai e Vola ou só vai)<br>", icone: "icons/fazenda.png", top: 82, left: 65 },

            { id: "ESTACIONAMENTO", nome: "ESTACIONAMENTO", area: "Vaga garantida e seu carro assegurado!",
desc: "🚗Vagas Comuns<br>♿Vagas Acessiveis<br>🪫Vagas Carro Eletrificados<br>", icone: "icons/estacionamento.png", top: 40, left: 28 },




            // --- PONTO DE TESTE COM IMAGEM ---
            // Altere "teste-imagem.png" para o nome exato do arquivo dentro da pasta "icons"



            { id: "leoes", nome: "LEÃO", area: "🦁 Animália Reserva", desc: "Recinto do Leão.",  icone: "icons/leao.png", top: 43, left: 39 }


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
    btn.setAttribute("aria-label", ponto.nome);

    // Verifica se o campo icone é um caminho de imagem
    const ehCaminhoImagem = ponto.icone.includes("/") || ponto.icone.endsWith(".png") || ponto.icone.endsWith(".jpg") || ponto.icone.endsWith(".svg");

    if (ehCaminhoImagem) {
        const img = document.createElement("img");
        img.src = ponto.icone;
        img.alt = ponto.nome;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        btn.appendChild(img);
    } else {
        btn.innerHTML = ponto.icone;
    }

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
    if (!navigator.geolocation) {
        console.warn("Geolocalização não é suportada por este navegador.");
        esconderElemento();
        return;
    }

    navigator.geolocation.watchPosition(
        (posicao) => {
            const lat = posicao.coords.latitude;
            const lng = posicao.coords.longitude;

            let topPercent = ((LIMITES_PARQUE.latMax - lat) / (LIMITES_PARQUE.latMax - LIMITES_PARQUE.latMin)) * 100;
            let leftPercent = ((lng - LIMITES_PARQUE.lngMin) / (LIMITES_PARQUE.lngMax - LIMITES_PARQUE.lngMin)) * 100;

            if (topPercent >= 0 && topPercent <= 100 && leftPercent >= 0 && leftPercent <= 100) {
                posicionarElemento(topPercent, leftPercent);
            } else {
                console.warn("Você está fora do perímetro do mapa do parque.");
                esconderElemento();
            }
        },
        (erro) => {
            console.warn("Erro de GPS/Rede:", erro.message);
            esconderElemento();
        },
        {
            enableHighAccuracy: false,
            maximumAge: 10000,
            timeout: 20000
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
