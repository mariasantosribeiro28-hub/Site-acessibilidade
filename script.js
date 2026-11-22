document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ELEMENTOS PRINCIPAIS
    // =====================================

    const idiomaSelect = document.getElementById("idioma");

    const estadoSelect = document.getElementById("estado");
    const cidadeSelect = document.getElementById("cidade");
    const botaoBuscar = document.getElementById("buscarServicos");

    const mensagemBusca = document.getElementById("mensagemBusca");
    const resultadosServicos = document.getElementById("resultadosServicos");
    const gradeResultados = document.getElementById("gradeResultados");
    const localSelecionado = document.getElementById("localSelecionado");

    const aumentarTexto = document.getElementById("aumentarTexto");
    const diminuirTexto = document.getElementById("diminuirTexto");
    const botaoContraste = document.getElementById("contraste");
    const botaoLeituraSimples = document.getElementById("leituraSimples");

    const botaoAudio = document.getElementById("botaoAudio");
    const painelAudio = document.getElementById("painelAudio");
    const botaoReproduzir = document.getElementById("reproduzir");
    const botaoPausar = document.getElementById("pausar");
    const botaoEncerrar = document.getElementById("encerrar");

    // =====================================
    // IDIOMAS
    // =====================================

    const traducoes = {
        pt: {
            estado: "Selecione um estado",
            cidade: "Selecione primeiro o estado",
            carregandoEstados: "Carregando estados...",
            carregandoCidades: "Carregando municípios...",
            erroEstados: "Não foi possível carregar os estados. Tente novamente.",
            erroCidades: "Não foi possível carregar os municípios. Tente novamente.",
            selecioneCidade: "Selecione um município",
            selecioneLocal: "Selecione o estado e o município para continuar.",
            buscando: "Preparando os resultados...",
            resultadoLocal: "Local selecionado:",
            saude: "Saúde",
            assistencia: "Assistência social",
            energia: "Energia elétrica",
            agua: "Água e saneamento",
            educacao: "Educação",
            outros: "Outros serviços",
            descricaoSaude: "Encontre unidades de saúde, UBS, hospitais e outros atendimentos.",
            descricaoAssistencia: "Procure CRAS, CREAS e locais de atendimento social.",
            descricaoEnergia: "Encontre agências e pontos de atendimento de energia elétrica.",
            descricaoAgua: "Procure locais de atendimento de água e saneamento.",
            descricaoEducacao: "Encontre escolas, instituições de ensino e outros serviços educacionais.",
            descricaoOutros: "Pesquise outros serviços públicos disponíveis no município.",
            abrirMaps: "Ver no Google Maps",
            resultadoCriado: "Escolha uma categoria para consultar os locais no Google Maps.",
            audioAberto: "Abrir leitura em voz alta",
            audioFechado: "Fechar leitura em voz alta",
            selecionarIdioma: "Selecionar idioma",
            menuPrincipal: "Menu principal",
            novaAba: "(abre em nova aba)",
            tamanhoTexto: "Tamanho da tela:",
            contrasteLigado: "Alto contraste ativado",
            contrasteDesligado: "Alto contraste desativado",
            leituraLigada: "Leitura simplificada ativada",
            leituraDesligada: "Leitura simplificada desativada",
            audioNaoSuportado: "Seu navegador não oferece suporte à leitura em voz alta.",
            ativado: "ativado",
            desativado: "desativado",
            padraoRestaurado: "Configurações de acessibilidade restauradas ao padrão"
        },

        en: {
            estado: "Select a state",
            cidade: "Select the state first",
            carregandoEstados: "Loading states...",
            carregandoCidades: "Loading municipalities...",
            erroEstados: "Could not load states. Please try again.",
            erroCidades: "Could not load municipalities. Please try again.",
            selecioneCidade: "Select a municipality",
            selecioneLocal: "Select the state and municipality to continue.",
            buscando: "Preparing results...",
            resultadoLocal: "Selected location:",
            saude: "Healthcare",
            assistencia: "Social assistance",
            energia: "Electricity",
            agua: "Water and sanitation",
            educacao: "Education",
            outros: "Other services",
            descricaoSaude: "Find health centers, clinics, hospitals and other services.",
            descricaoAssistencia: "Find social assistance centers and social services.",
            descricaoEnergia: "Find electricity agencies and service locations.",
            descricaoAgua: "Find water and sanitation service locations.",
            descricaoEducacao: "Find schools, educational institutions and other services.",
            descricaoOutros: "Search for other public services in the municipality.",
            abrirMaps: "View on Google Maps",
            resultadoCriado: "Choose a category to find locations on Google Maps.",
            audioAberto: "Open read aloud",
            audioFechado: "Close read aloud",
            selecionarIdioma: "Select language",
            menuPrincipal: "Main menu",
            novaAba: "(opens in a new tab)",
            tamanhoTexto: "Screen size:",
            contrasteLigado: "High contrast on",
            contrasteDesligado: "High contrast off",
            leituraLigada: "Simplified reading on",
            leituraDesligada: "Simplified reading off",
            audioNaoSuportado: "Your browser does not support read aloud.",
            ativado: "on",
            desativado: "off",
            padraoRestaurado: "Accessibility settings reset to default"
        },

        es: {
            estado: "Seleccione un estado",
            cidade: "Seleccione primero el estado",
            carregandoEstados: "Cargando estados...",
            carregandoCidades: "Cargando municipios...",
            erroEstados: "No se pudieron cargar los estados. Inténtelo de nuevo.",
            erroCidades: "No se pudieron cargar los municipios. Inténtelo de nuevo.",
            selecioneCidade: "Seleccione un municipio",
            selecioneLocal: "Seleccione el estado y el municipio para continuar.",
            buscando: "Preparando los resultados...",
            resultadoLocal: "Lugar seleccionado:",
            saude: "Salud",
            assistencia: "Asistencia social",
            energia: "Energía eléctrica",
            agua: "Agua y saneamiento",
            educacao: "Educación",
            outros: "Otros servicios",
            descricaoSaude: "Encuentre centros de salud, hospitales y otros servicios.",
            descricaoAssistencia: "Busque centros de asistencia social y otros servicios.",
            descricaoEnergia: "Encuentre agencias y puntos de atención de energía eléctrica.",
            descricaoAgua: "Busque lugares de atención de agua y saneamiento.",
            descricaoEducacao: "Encuentre escuelas, instituciones educativas y otros servicios.",
            descricaoOutros: "Busque otros servicios públicos disponibles en el municipio.",
            abrirMaps: "Ver en Google Maps",
            resultadoCriado: "Elija una categoría para consultar lugares en Google Maps.",
            audioAberto: "Abrir lectura en voz alta",
            audioFechado: "Cerrar lectura en voz alta",
            selecionarIdioma: "Seleccionar idioma",
            menuPrincipal: "Menú principal",
            novaAba: "(se abre en una nueva pestaña)",
            tamanhoTexto: "Tamaño de la pantalla:",
            contrasteLigado: "Alto contraste activado",
            contrasteDesligado: "Alto contraste desactivado",
            leituraLigada: "Lectura simplificada activada",
            leituraDesligada: "Lectura simplificada desactivada",
            audioNaoSuportado: "Su navegador no admite la lectura en voz alta.",
            ativado: "activado",
            desativado: "desactivado",
            padraoRestaurado: "Ajustes de accesibilidad restablecidos"
        }
    };

    let idiomaAtual = localStorage.getItem("idioma") || "pt";

    if (!traducoes[idiomaAtual]) {
        idiomaAtual = "pt";
    }

    // =====================================
    // ANÚNCIOS PARA LEITORES DE TELA E MOVIMENTO REDUZIDO
    // =====================================

    const regiaoAnuncios = document.createElement("div");
    regiaoAnuncios.className = "sr-only";
    regiaoAnuncios.setAttribute("role", "status");
    regiaoAnuncios.setAttribute("aria-live", "polite");
    regiaoAnuncios.setAttribute("aria-atomic", "true");
    document.body.appendChild(regiaoAnuncios);

    function anunciar(texto) {

        regiaoAnuncios.textContent = "";

        setTimeout(() => {
            regiaoAnuncios.textContent = texto;
        }, 50);

    }

    const prefereMenosMovimento =
        window.matchMedia("(prefers-reduced-motion: reduce)");

    // =====================================
    // APLICAR IDIOMA
    // =====================================

    function alterarIdioma(novoIdioma) {

        idiomaAtual = novoIdioma;

        const idioma = traducoes[idiomaAtual];

        document.documentElement.lang =
            idiomaAtual === "pt" ? "pt-BR" : idiomaAtual;

        document.querySelectorAll("[data-pt]").forEach(elemento => {

            const texto = elemento.getAttribute(`data-${idiomaAtual}`);

            if (texto !== null) {
                elemento.textContent = texto;
            }

        });

        if (idiomaSelect) {
            idiomaSelect.value = idiomaAtual;
        }

        // Rótulos acessíveis que não aparecem na tela também seguem o idioma
        if (idiomaSelect) {
            idiomaSelect.setAttribute("aria-label", idioma.selecionarIdioma);
        }

        const menuPrincipal = document.querySelector("nav.menu");

        if (menuPrincipal) {
            menuPrincipal.setAttribute("aria-label", idioma.menuPrincipal);
        }

        localStorage.setItem("idioma", idiomaAtual);

        atualizarOpcoesLocalizacao();

        if (localSelecionado && cidadeSelect && estadoSelect) {
            if (cidadeSelect.value && estadoSelect.value) {
                atualizarTextoLocalSelecionado();
            }
        }

        atualizarBotaoAudio();
    }

    if (idiomaSelect) {

        idiomaSelect.value = idiomaAtual;

        idiomaSelect.addEventListener("change", () => {
            alterarIdioma(idiomaSelect.value);
        });

    }

    // =====================================
    // TRADUÇÃO DOS CAMPOS DE LOCALIZAÇÃO
    // =====================================

    function atualizarOpcoesLocalizacao() {

        if (!estadoSelect || !cidadeSelect) {
            return;
        }

        const idioma = traducoes[idiomaAtual];

        const primeiraOpcaoEstado = estadoSelect.querySelector(
            'option[value=""]'
        );

        const primeiraOpcaoCidade = cidadeSelect.querySelector(
            'option[value=""]'
        );

        if (primeiraOpcaoEstado) {

            if (estadoSelect.disabled) {
                primeiraOpcaoEstado.textContent = idioma.carregandoEstados;
            } else {
                primeiraOpcaoEstado.textContent = idioma.estado;
            }

        }

        if (primeiraOpcaoCidade) {

            if (cidadeSelect.disabled && estadoSelect.value) {
                primeiraOpcaoCidade.textContent = idioma.carregandoCidades;
            } else if (!estadoSelect.value) {
                primeiraOpcaoCidade.textContent = idioma.cidade;
            } else {
                primeiraOpcaoCidade.textContent = idioma.selecioneCidade;
            }

        }

    }

    // =====================================
    // ACESSIBILIDADE - TAMANHO DO TEXTO
    // =====================================

    let escalaTexto = Number(localStorage.getItem("escalaTexto")) || 1;

    function aplicarEscalaTexto() {

        escalaTexto = Math.max(0.8, Math.min(2, escalaTexto));

        document.documentElement.style.setProperty(
            "--font-scale",
            escalaTexto
        );

        localStorage.setItem("escalaTexto", escalaTexto);

    }

    aplicarEscalaTexto();

    if (aumentarTexto) {

        aumentarTexto.addEventListener("click", () => {

            escalaTexto += 0.1;
            aplicarEscalaTexto();
            anunciar(`${traducoes[idiomaAtual].tamanhoTexto} ${Math.round(escalaTexto * 100)}%`);

        });

    }

    if (diminuirTexto) {

        diminuirTexto.addEventListener("click", () => {

            escalaTexto -= 0.1;
            aplicarEscalaTexto();
            anunciar(`${traducoes[idiomaAtual].tamanhoTexto} ${Math.round(escalaTexto * 100)}%`);

        });

    }

    // =====================================
    // ACESSIBILIDADE - ALTO CONTRASTE
    // =====================================

    // Se a pessoa nunca escolheu, respeita a preferência de contraste do sistema
    const contrasteSalvo = localStorage.getItem("altoContraste");

    let contrasteAtivo = contrasteSalvo === null
        ? window.matchMedia("(prefers-contrast: more)").matches
        : contrasteSalvo === "true";

    function aplicarContraste() {

        document.body.classList.toggle(
            "alto-contraste",
            contrasteAtivo
        );

        if (botaoContraste) {
            botaoContraste.setAttribute(
                "aria-pressed",
                contrasteAtivo
            );
        }

        localStorage.setItem("altoContraste", contrasteAtivo);

    }

    aplicarContraste();

    if (botaoContraste) {

        botaoContraste.addEventListener("click", () => {

            contrasteAtivo = !contrasteAtivo;
            aplicarContraste();
            anunciar(
                contrasteAtivo
                    ? traducoes[idiomaAtual].contrasteLigado
                    : traducoes[idiomaAtual].contrasteDesligado
            );

        });

    }

    // =====================================
    // ACESSIBILIDADE - LEITURA SIMPLIFICADA
    // =====================================

    let leituraSimplesAtiva =
        localStorage.getItem("leituraSimples") === "true";

    function aplicarLeituraSimples() {

        document.body.classList.toggle(
            "leitura-simples",
            leituraSimplesAtiva
        );

        if (botaoLeituraSimples) {
            botaoLeituraSimples.setAttribute(
                "aria-pressed",
                leituraSimplesAtiva
            );
        }

        localStorage.setItem(
            "leituraSimples",
            leituraSimplesAtiva
        );

    }

    aplicarLeituraSimples();

    if (botaoLeituraSimples) {

        botaoLeituraSimples.addEventListener("click", () => {

            leituraSimplesAtiva = !leituraSimplesAtiva;
            aplicarLeituraSimples();
            anunciar(
                leituraSimplesAtiva
                    ? traducoes[idiomaAtual].leituraLigada
                    : traducoes[idiomaAtual].leituraDesligada
            );

        });

    }

    // =====================================
    // ACESSIBILIDADE - RECURSOS ADICIONAIS
    // =====================================

    const recursosExtras = [
        { id: "espacarTexto", classe: "espacamento-texto" },
        { id: "fonteLegivel", classe: "fonte-legivel" },
        { id: "cursorGrande", classe: "cursor-grande" },
        { id: "reguaLeitura", classe: "regua-ativa" }
    ];

    const estadoExtras = {};

    // Régua de leitura: faixa que acompanha o mouse, o toque ou o foco
    const regua = document.createElement("div");
    regua.className = "regua-leitura";
    regua.setAttribute("aria-hidden", "true");
    regua.hidden = true;
    document.body.appendChild(regua);

    function moverRegua(y) {
        regua.style.top = `${Math.max(0, y - regua.offsetHeight / 2)}px`;
    }

    document.addEventListener("mousemove", evento => {
        if (estadoExtras.reguaLeitura) {
            moverRegua(evento.clientY);
        }
    });

    document.addEventListener("touchmove", evento => {
        if (estadoExtras.reguaLeitura && evento.touches[0]) {
            moverRegua(evento.touches[0].clientY);
        }
    }, { passive: true });

    document.addEventListener("focusin", evento => {
        if (estadoExtras.reguaLeitura && evento.target.getBoundingClientRect) {
            const area = evento.target.getBoundingClientRect();
            moverRegua(area.top + area.height / 2);
        }
    });

    function aplicarRecursoExtra(recurso, ativo) {

        estadoExtras[recurso.id] = ativo;

        document.body.classList.toggle(recurso.classe, ativo);

        const botao = document.getElementById(recurso.id);

        if (botao) {
            botao.setAttribute("aria-pressed", String(ativo));
        }

        if (recurso.id === "reguaLeitura") {
            regua.hidden = !ativo;

            if (ativo) {
                moverRegua(window.innerHeight / 2);
            }
        }

        localStorage.setItem(recurso.id, ativo);

    }

    recursosExtras.forEach(recurso => {

        aplicarRecursoExtra(
            recurso,
            localStorage.getItem(recurso.id) === "true"
        );

        const botao = document.getElementById(recurso.id);

        if (botao) {

            botao.addEventListener("click", () => {

                aplicarRecursoExtra(recurso, !estadoExtras[recurso.id]);

                const textos = traducoes[idiomaAtual];

                anunciar(
                    `${botao.textContent.trim()}: ${
                        estadoExtras[recurso.id] ? textos.ativado : textos.desativado
                    }`
                );

            });

        }

    });

    // Restaurar tudo ao padrão
    const botaoRestaurar = document.getElementById("restaurarPadrao");

    if (botaoRestaurar) {

        botaoRestaurar.addEventListener("click", () => {

            escalaTexto = 1;
            aplicarEscalaTexto();

            contrasteAtivo = false;
            aplicarContraste();

            leituraSimplesAtiva = false;
            aplicarLeituraSimples();

            recursosExtras.forEach(recurso => {
                aplicarRecursoExtra(recurso, false);
            });

            anunciar(traducoes[idiomaAtual].padraoRestaurado);

        });

    }

    // =====================================
    // EXPLICAÇÃO DOS RECURSOS (mouse ou teclado)
    // =====================================

    const caixaExplicacao = document.getElementById("explicacaoRecurso");

    const descricoesRecursos = {
        aumentarTexto: {
            pt: "Aumenta o tamanho dos textos e dos elementos da página, até 200%.",
            en: "Increases the size of the texts and elements on the page, up to 200%.",
            es: "Aumenta el tamaño de los textos y elementos de la página, hasta el 200%."
        },
        diminuirTexto: {
            pt: "Diminui o tamanho dos textos e dos elementos da página.",
            en: "Decreases the size of the texts and elements on the page.",
            es: "Reduce el tamaño de los textos y elementos de la página."
        },
        contraste: {
            pt: "Deixa a página com fundo preto e letras brancas e amarelas, para facilitar a leitura.",
            en: "Shows the page with a black background and white and yellow letters, to make reading easier.",
            es: "Muestra la página con fondo negro y letras blancas y amarillas, para facilitar la lectura."
        },
        leituraSimples: {
            pt: "Aumenta o espaço entre as linhas e limita a largura dos textos, deixando a leitura mais confortável.",
            en: "Increases the space between lines and limits the width of texts, making reading more comfortable.",
            es: "Aumenta el espacio entre líneas y limita el ancho de los textos, haciendo la lectura más cómoda."
        },
        espacarTexto: {
            pt: "Aumenta o espaço entre as linhas, as letras e as palavras.",
            en: "Increases the space between lines, letters and words.",
            es: "Aumenta el espacio entre líneas, letras y palabras."
        },
        fonteLegivel: {
            pt: "Troca a letra por uma fonte mais aberta e fácil de ler na tela.",
            en: "Switches to a more open font that is easier to read on screen.",
            es: "Cambia la letra por una fuente más abierta y fácil de leer en pantalla."
        },
        cursorGrande: {
            pt: "Deixa o cursor do mouse maior e mais fácil de encontrar na tela.",
            en: "Makes the mouse cursor larger and easier to find on screen.",
            es: "Hace el cursor del ratón más grande y fácil de encontrar en la pantalla."
        },
        reguaLeitura: {
            pt: "Mostra uma faixa que acompanha o mouse ou o foco do teclado e escurece o resto da tela, ajudando a ler linha por linha.",
            en: "Shows a strip that follows the mouse or keyboard focus and darkens the rest of the screen, helping you read line by line.",
            es: "Muestra una franja que sigue al ratón o al foco del teclado y oscurece el resto de la pantalla, para leer línea por línea."
        },
        restaurarPadrao: {
            pt: "Desfaz todas as opções de acessibilidade e volta ao padrão do site.",
            en: "Undoes all accessibility options and returns to the site's default.",
            es: "Deshace todas las opciones de accesibilidad y vuelve al estándar del sitio."
        }
    };

    function mostrarExplicacao(id) {

        if (!caixaExplicacao) {
            return;
        }

        const descricao = descricoesRecursos[id];

        caixaExplicacao.textContent = descricao ? descricao[idiomaAtual] : "";

    }

    function recursoComFoco() {

        const ativo = document.activeElement;

        return ativo && descricoesRecursos[ativo.id] ? ativo.id : "";

    }

    Object.keys(descricoesRecursos).forEach(id => {

        const botao = document.getElementById(id);

        if (!botao) {
            return;
        }

        botao.addEventListener("mouseenter", () => mostrarExplicacao(id));
        botao.addEventListener("focus", () => mostrarExplicacao(id));
        botao.addEventListener("mouseleave", () => mostrarExplicacao(recursoComFoco()));
        botao.addEventListener("blur", () => mostrarExplicacao(recursoComFoco()));

    });

    // =====================================
    // API DO IBGE - ESTADOS
    // =====================================

    let estadosCarregados = [];
    let cidadesCarregadas = [];
    let numeroRequisicaoCidades = 0;

    async function carregarEstados() {

        if (!estadoSelect || !cidadeSelect) {
            return;
        }

        estadoSelect.disabled = true;
        cidadeSelect.disabled = true;

        estadoSelect.innerHTML = "";
        cidadeSelect.innerHTML = "";

        adicionarOpcao(estadoSelect, "", traducoes[idiomaAtual].carregandoEstados);
        adicionarOpcao(cidadeSelect, "", traducoes[idiomaAtual].cidade);

        try {

            const resposta = await fetch(
                "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
            );

            if (!resposta.ok) {
                throw new Error("Erro ao carregar estados.");
            }

            estadosCarregados = await resposta.json();

            preencherEstados();

            estadoSelect.disabled = false;

        } catch (erro) {

            console.error("Erro ao carregar estados:", erro);

            estadoSelect.innerHTML = "";

            adicionarOpcao(
                estadoSelect,
                "",
                traducoes[idiomaAtual].erroEstados
            );

            if (mensagemBusca) {
                mensagemBusca.textContent =
                    traducoes[idiomaAtual].erroEstados;
            }

        }

    }

    function preencherEstados() {

        if (!estadoSelect) {
            return;
        }

        estadoSelect.innerHTML = "";

        adicionarOpcao(
            estadoSelect,
            "",
            traducoes[idiomaAtual].estado
        );

        estadosCarregados.forEach(estado => {

            const opcao = document.createElement("option");

            opcao.value = estado.id;
            opcao.textContent = estado.nome;
            opcao.dataset.sigla = estado.sigla;

            estadoSelect.appendChild(opcao);

        });

    }

    // =====================================
    // API DO IBGE - MUNICÍPIOS
    // =====================================

    async function carregarCidades(idEstado) {

        if (!cidadeSelect || !botaoBuscar) {
            return;
        }

        const requisicaoAtual = ++numeroRequisicaoCidades;

        cidadeSelect.disabled = true;
        botaoBuscar.disabled = true;

        cidadeSelect.innerHTML = "";

        adicionarOpcao(
            cidadeSelect,
            "",
            traducoes[idiomaAtual].carregandoCidades
        );

        esconderResultados();

        try {

            const resposta = await fetch(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios?orderBy=nome`
            );

            if (!resposta.ok) {
                throw new Error("Erro ao carregar municípios.");
            }

            const cidades = await resposta.json();

            // Evita que uma resposta antiga substitua a seleção mais recente.
            if (requisicaoAtual !== numeroRequisicaoCidades) {
                return;
            }

            cidadesCarregadas = cidades;

            cidadeSelect.innerHTML = "";

            adicionarOpcao(
                cidadeSelect,
                "",
                traducoes[idiomaAtual].selecioneCidade
            );

            cidades.forEach(cidade => {

                const opcao = document.createElement("option");

                opcao.value = cidade.id;
                opcao.textContent = cidade.nome;

                cidadeSelect.appendChild(opcao);

            });

            cidadeSelect.disabled = false;

        } catch (erro) {

            if (requisicaoAtual !== numeroRequisicaoCidades) {
                return;
            }

            console.error("Erro ao carregar municípios:", erro);

            cidadeSelect.innerHTML = "";

            adicionarOpcao(
                cidadeSelect,
                "",
                traducoes[idiomaAtual].erroCidades
            );

            if (mensagemBusca) {
                mensagemBusca.textContent =
                    traducoes[idiomaAtual].erroCidades;
            }

        }

    }

    function adicionarOpcao(select, valor, texto) {

        const opcao = document.createElement("option");

        opcao.value = valor;
        opcao.textContent = texto;

        select.appendChild(opcao);

    }

    // =====================================
    // EVENTOS DE ESTADO E MUNICÍPIO
    // =====================================

    if (estadoSelect) {

        estadoSelect.addEventListener("change", () => {

            numeroRequisicaoCidades++;

            const idEstado = estadoSelect.value;

            cidadeSelect.innerHTML = "";

            adicionarOpcao(
                cidadeSelect,
                "",
                traducoes[idiomaAtual].cidade
            );

            cidadeSelect.disabled = true;

            botaoBuscar.disabled = true;

            if (mensagemBusca) {
                mensagemBusca.textContent = "";
            }

            esconderResultados();

            if (idEstado) {
                carregarCidades(idEstado);
            }

        });

    }

    if (cidadeSelect) {

        cidadeSelect.addEventListener("change", () => {

            botaoBuscar.disabled = !cidadeSelect.value;

            esconderResultados();

            if (mensagemBusca) {
                mensagemBusca.textContent = "";
            }

        });

    }

    // =====================================
    // CATEGORIAS DE SERVIÇOS
    // =====================================

    const categorias = [
        {
            chave: "saude",
            busca: "posto de saúde UBS hospital"
        },
        {
            chave: "assistencia",
            busca: "CRAS CREAS assistência social"
        },
        {
            chave: "energia",
            busca: "atendimento companhia de energia elétrica"
        },
        {
            chave: "agua",
            busca: "atendimento água saneamento"
        },
        {
            chave: "educacao",
            busca: "escolas públicas secretaria de educação"
        },
        {
            chave: "outros",
            busca: "serviços públicos prefeitura atendimento"
        }
    ];

    // =====================================
    // ATUALIZAR LOCAL SELECIONADO
    // =====================================

    function atualizarTextoLocalSelecionado() {

        if (!localSelecionado || !estadoSelect || !cidadeSelect) {
            return;
        }

        const opcaoEstado =
            estadoSelect.options[estadoSelect.selectedIndex];

        const opcaoCidade =
            cidadeSelect.options[cidadeSelect.selectedIndex];

        if (!opcaoEstado || !opcaoCidade) {
            return;
        }

        const nomeEstado = opcaoEstado.textContent;
        const siglaEstado = opcaoEstado.dataset.sigla || "";
        const nomeCidade = opcaoCidade.textContent;

        localSelecionado.textContent =
            `${traducoes[idiomaAtual].resultadoLocal} ${nomeCidade} - ${siglaEstado || nomeEstado}`;

    }

    // =====================================
    // CRIAR CARTÕES DE SERVIÇOS
    // =====================================

    function criarCartoesServicos(nomeCidade, siglaEstado) {

        if (!gradeResultados) {
            return;
        }

        gradeResultados.innerHTML = "";

        categorias.forEach(categoria => {

            const textos = traducoes[idiomaAtual];

            const cartao = document.createElement("article");
            cartao.className = "cartao-servico";

            const titulo = document.createElement("h3");
            titulo.textContent = textos[categoria.chave];

            const descricao = document.createElement("p");
            descricao.textContent =
                textos[`descricao${categoria.chave.charAt(0).toUpperCase()}${categoria.chave.slice(1)}`];

            const link = document.createElement("a");

            const pesquisa = `${categoria.busca} ${nomeCidade} ${siglaEstado} Paraná Brasil`;

            link.href =
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pesquisa)}`;

            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = textos.abrirMaps;

            // Nome completo do link para leitores de tela (categoria + nova aba)
            const complemento = document.createElement("span");
            complemento.className = "sr-only";
            complemento.textContent =
                ` – ${textos[categoria.chave]} ${textos.novaAba}`;
            link.appendChild(complemento);

            cartao.appendChild(titulo);
            cartao.appendChild(descricao);
            cartao.appendChild(link);

            gradeResultados.appendChild(cartao);

        });

    }

    // =====================================
    // BUSCAR SERVIÇOS
    // =====================================

    if (botaoBuscar) {

        botaoBuscar.addEventListener("click", () => {

            if (!estadoSelect.value || !cidadeSelect.value) {

                if (mensagemBusca) {
                    mensagemBusca.textContent =
                        traducoes[idiomaAtual].selecioneLocal;
                }

                return;

            }

            const opcaoEstado =
                estadoSelect.options[estadoSelect.selectedIndex];

            const opcaoCidade =
                cidadeSelect.options[cidadeSelect.selectedIndex];

            const nomeEstado = opcaoEstado.textContent;
            const siglaEstado = opcaoEstado.dataset.sigla || "";
            const nomeCidade = opcaoCidade.textContent;

            if (mensagemBusca) {
                mensagemBusca.textContent =
                    traducoes[idiomaAtual].buscando;
            }

            criarCartoesServicos(nomeCidade, siglaEstado);

            atualizarTextoLocalSelecionado();

            resultadosServicos.hidden = false;

            if (mensagemBusca) {
                mensagemBusca.textContent =
                    traducoes[idiomaAtual].resultadoCriado;
            }

            resultadosServicos.scrollIntoView({
                behavior: prefereMenosMovimento.matches ? "auto" : "smooth",
                block: "start"
            });

        });

    }

    // =====================================
    // ESCONDER RESULTADOS
    // =====================================

    function esconderResultados() {

        if (resultadosServicos) {
            resultadosServicos.hidden = true;
        }

        if (gradeResultados) {
            gradeResultados.innerHTML = "";
        }

    }

    // =====================================
    // LEITURA EM VOZ ALTA
    // =====================================

    function atualizarBotaoAudio() {

        if (!botaoAudio) {
            return;
        }

        const painelAberto =
            painelAudio && !painelAudio.hidden;

        botaoAudio.setAttribute(
            "aria-label",
            painelAberto
                ? traducoes[idiomaAtual].audioFechado
                : traducoes[idiomaAtual].audioAberto
        );

    }

    if (botaoAudio && painelAudio) {

        botaoAudio.addEventListener("click", () => {

            painelAudio.hidden = !painelAudio.hidden;

            botaoAudio.setAttribute(
                "aria-expanded",
                !painelAudio.hidden
            );

            atualizarBotaoAudio();

        });

    }

    // Esc fecha o painel de leitura e devolve o foco ao botão
    if (botaoAudio && painelAudio) {

        painelAudio.addEventListener("keydown", evento => {

            if (evento.key === "Escape") {

                painelAudio.hidden = true;
                botaoAudio.setAttribute("aria-expanded", "false");
                atualizarBotaoAudio();
                botaoAudio.focus();

            }

        });

    }

    if (botaoReproduzir) {

        botaoReproduzir.addEventListener("click", () => {

            if (!("speechSynthesis" in window)) {
                alert(traducoes[idiomaAtual].audioNaoSuportado);
                return;
            }

            // Se estava pausado, "Reproduzir" continua de onde parou
            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
                return;
            }

            window.speechSynthesis.cancel();

            const conteudo = document.querySelector("main");

            if (!conteudo) {
                return;
            }

            const texto = conteudo.innerText;

            const leitura = new SpeechSynthesisUtterance(texto);

            const idiomasVoz = {
                pt: "pt-BR",
                en: "en-US",
                es: "es-ES"
            };

            leitura.lang = idiomasVoz[idiomaAtual];
            leitura.rate = 0.95;

            window.speechSynthesis.speak(leitura);

        });

    }

    if (botaoPausar) {

        botaoPausar.addEventListener("click", () => {

            if ("speechSynthesis" in window) {
                window.speechSynthesis.pause();
            }

        });

    }

    if (botaoEncerrar) {

        botaoEncerrar.addEventListener("click", () => {

            if ("speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }

        });

    }

    // =====================================
    // INICIALIZAÇÃO
    // =====================================

    alterarIdioma(idiomaAtual);

    carregarEstados();

    window.addEventListener("beforeunload", () => {

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

    });

});