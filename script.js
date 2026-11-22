// Configurações do Efeito de Digitação
const texto = "Disnou Almeida";
const elementoH1 = document.getElementById("nome-digitado");
let index = 0;

function digitar() {
    if (!elementoH1) return;
    if (index < texto.length) {
        elementoH1.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 130);
    } else {
        elementoH1.style.borderRight = "none";
    }
}

const WHATSAPP_NUMERO = "5585988583923";

// Dicionário de Traduções (PT, EN, ES)
const traducoes = {
    pt: {
        "html-lang": "pt-BR",
        "page-title": "Portfólio - Disnou Almeida",
        "wa-msg": "Olá Disnou! Vi seu portfólio e gostaria de conversar sobre um projeto.",
        "sobre": "Oi, me chamo Disnou. Sou Desenvolvedor Web Full Stack Freelancer e crio sites profissionais, landing pages e sistemas web sob medida para empresas e empreendedores.",
        "estudo": "Atualmente curso Análise e Desenvolvimento de Sistemas, unindo foco em performance, design limpo e soluções reais em produção.",
        "parceria": "Também atuo em parceria na <a class='link-inline' href='https://sunsetfield.com.br/' target='_blank' rel='noopener noreferrer'>Sunset Field Solutions</a>, desenvolvendo sites e sistemas sob medida para empresas.",
        "ferramentas": "Ferramentas que utilizo:",
        "btn-orcamento": "Solicitar Orçamento",
        "btn-ver-projetos": "Ver Projetos",
        "clientes-titulo": "Projetos para Clientes",
        "clientes-subtitulo": "Produtos reais desenvolvidos sob medida e em produção.",
        "badge-cliente": "Cliente Real • Em Produção",
        "badge-privado": "Sistema Privado • Em Produção",
        "via-sunset": "via Sunset Field Solutions",
        "gradibus-titulo": "Gradibus Transportadora",
        "gradibus-desc": "Site institucional e funil de captação de leads para transportadora de mudanças, fretes e logística de eventos no Ceará. Conta com galeria filtrável de operações, prova social e formulário interativo de orçamento enviado direto para o WhatsApp.",
        "btn-visitar-site": "Visitar Site",
        "wadjet-titulo": "Gerenciador Wadjet",
        "wadjet-desc": "Plataforma web B2B desenvolvida para a Wadjet Segurança LTDA. Centraliza a gestão operacional, escalas de segurança privada, equipes e apoio a eventos em um ambiente seguro e responsivo.",
        "wadjet-aviso": "🔒 Acesso restrito à equipe da Wadjet Segurança.",
        "btn-ver-acesso": "Ver Tela de Acesso",
        "demos-titulo": "Projetos Autorais & Demos",
        "demos-subtitulo": "Sistemas interativos disponíveis para teste aberto.",
        "proj1-titulo": "1. PDV e Estoque Web",
        "proj1-desc": "Solução para pequenos comércios registrarem vendas e controlarem produtos. Foco em atalhos de teclado para agilidade, cálculo de troco e baixa automática no estoque.",
        "proj1-cred": "<strong>Credenciais para teste:</strong><div class='cred-linha'><span>👤 <b>Gerente:</b></span> <span class='cred-par'>Usuário <code>disnou</code></span> <span class='cred-par'>| Senha <code>123</code></span></div><div class='cred-linha'><span>🛒 <b>Caixa:</b></span> <span class='cred-par'>Usuário <code>caixa01</code></span> <span class='cred-par'>| Senha <code>abc</code></span></div>",
        "btn-testar": "Testar Projeto",
        "btn-ver-video": "Ver Vídeo Demo",
        "proj2-titulo": "2. Dashboard Financeiro",
        "proj2-desc": "Painel visual para investidores. Cadastro de aportes, cálculo de preço médio, simulação de juros compostos, gráficos interativos e opção de exportação de relatórios em .csv.",
        "proj3-titulo": "3. Inventário para Laboratórios",
        "proj3-desc": "Software focado no mercado B2B para gestão de reagentes clínicos. Possui lógica de conversão de medidas químicas e sistema de alertas para validade e reposição de lotes.",
        "molaris-aviso": "⏱️ Hospedado em servidor gratuito — pode levar alguns segundos para iniciar.",
        "proj4-titulo": "4. Kanban Trilíngue",
        "proj4-desc": "App de produtividade no estilo Trello. Quadros com sistema arrastar-e-soltar (drag-and-drop), salvamento local e alteração instantânea de idioma (PT, EN, ES).",
        "proj5-titulo": "5. Simulador de Estudos",
        "proj5-desc": "Ferramenta avançada para estudantes. Algoritmo para cálculo de médias usando pesos específicos e gerador dinâmico de cronogramas semanais de estudo.",
        "servicos-titulo": "Como posso ajudar",
        "servicos-subtitulo": "Soluções diretas para tirar seu projeto do papel com qualidade profissional.",
        "serv1-titulo": "Sites Institucionais & Landing Pages",
        "serv1-desc": "Páginas rápidas, responsivas e focadas em conversão no WhatsApp e SEO para posicionar sua empresa com credibilidade.",
        "serv2-titulo": "Sistemas Web & Dashboards",
        "serv2-desc": "Plataformas sob medida com login, controle de estoque, escalas, relatórios e banco de dados para automatizar sua operação.",
        "serv3-titulo": "Manutenção & Otimização",
        "serv3-desc": "Melhorias visuais, correção de bugs, ajustes de responsividade no celular e evolução contínua de aplicações em React e Next.js.",
        "vamos-trabalhar": "Vamos trabalhar juntos?",
        "contato-texto": "Entre em contato ou acompanhe meu trabalho nas redes:",
        "alt-logo": "Logo de Disnou Almeida",
        "alt-gradibus": "Site institucional da Gradibus Transportadora",
        "alt-wadjet": "Tela de acesso do Gerenciador Wadjet",
        "alt-pdv": "Print do DisnouPDV",
        "alt-invest": "Print do InvestDash",
        "alt-molaris": "Print do MolarisStock",
        "alt-kanban": "Print da Plataforma V-Kanban",
        "alt-pondera": "Print do Pondera - Simulador de Notas"
    },
    en: {
        "html-lang": "en",
        "page-title": "Portfolio - Disnou Almeida",
        "wa-msg": "Hi Disnou! I saw your portfolio and would like to talk about a project.",
        "sobre": "Hi, I'm Disnou. I work as a freelance Full Stack web developer building professional websites, landing pages, and custom web systems for businesses and entrepreneurs.",
        "estudo": "I am currently studying Systems Analysis and Development, combining a focus on performance, clean design, and real-world solutions in production.",
        "parceria": "I also work in partnership at <a class='link-inline' href='https://sunsetfield.com.br/' target='_blank' rel='noopener noreferrer'>Sunset Field Solutions</a>, building custom websites and web systems for businesses.",
        "ferramentas": "Tools I use:",
        "btn-orcamento": "Request a Quote",
        "btn-ver-projetos": "View Projects",
        "clientes-titulo": "Client Projects",
        "clientes-subtitulo": "Real products built to order and running in production.",
        "badge-cliente": "Real Client • In Production",
        "badge-privado": "Private System • In Production",
        "via-sunset": "via Sunset Field Solutions",
        "gradibus-titulo": "Gradibus Transportadora",
        "gradibus-desc": "Institutional website and lead-capture funnel for a moving, freight, and event logistics company in Ceará. Features a filterable operations gallery, social proof, and an interactive quote form sent straight to WhatsApp.",
        "btn-visitar-site": "Visit Website",
        "wadjet-titulo": "Gerenciador Wadjet",
        "wadjet-desc": "B2B web platform built for Wadjet Segurança LTDA. Centralizes operational management, private security shift schedules, teams, and event support in a secure, responsive environment.",
        "wadjet-aviso": "🔒 Restricted access for the Wadjet Segurança team.",
        "btn-ver-acesso": "View Login Screen",
        "demos-titulo": "Personal Projects & Demos",
        "demos-subtitulo": "Interactive systems available for open testing.",
        "proj1-titulo": "1. Web POS & Inventory",
        "proj1-desc": "Solution for small businesses to register sales and manage products. Focus on keyboard shortcuts for agility, automatic change calculation, and automatic stock deduction.",
        "proj1-cred": "<strong>Test credentials:</strong><div class='cred-linha'><span>👤 <b>Manager:</b></span> <span class='cred-par'>User <code>disnou</code></span> <span class='cred-par'>| Password <code>123</code></span></div><div class='cred-linha'><span>🛒 <b>Cashier:</b></span> <span class='cred-par'>User <code>caixa01</code></span> <span class='cred-par'>| Password <code>abc</code></span></div>",
        "btn-testar": "Test Project",
        "btn-ver-video": "Watch Video Demo",
        "proj2-titulo": "2. Financial Dashboard",
        "proj2-desc": "Visual dashboard for investors. Asset registration, average price calculation, compound interest simulation, interactive charts, and .csv export option.",
        "proj3-titulo": "3. Laboratory Inventory",
        "proj3-desc": "B2B software for clinical reagent management. Features chemical measurement conversion logic and automated alerts for batch expiration and restocking.",
        "molaris-aviso": "⏱️ Hosted on a free-tier server — it may take a few seconds to wake up.",
        "proj4-titulo": "4. Trilingual Kanban",
        "proj4-desc": "Trello-style productivity app. Boards with drag-and-drop system, local storage saving, and instant language switching (PT, EN, ES).",
        "proj5-titulo": "5. Study Simulator",
        "proj5-desc": "Advanced tool for students. Algorithm for calculating averages using specific weights and dynamic weekly study schedule generator.",
        "servicos-titulo": "How I Can Help",
        "servicos-subtitulo": "Focused solutions to bring your project to life with professional quality.",
        "serv1-titulo": "Business Websites & Landing Pages",
        "serv1-desc": "Fast, responsive pages built around SEO and WhatsApp conversion to establish credibility for your business.",
        "serv2-titulo": "Web Systems & Dashboards",
        "serv2-desc": "Custom platforms with authentication, inventory control, shift scheduling, reports, and databases to streamline your operations.",
        "serv3-titulo": "Maintenance & Optimization",
        "serv3-desc": "Visual refinements, bug fixes, mobile responsiveness improvements, and ongoing development for React and Next.js apps.",
        "vamos-trabalhar": "Let's work together?",
        "contato-texto": "Get in touch or follow my work online:",
        "alt-logo": "Disnou Almeida's logo",
        "alt-gradibus": "Gradibus Transportadora website screenshot",
        "alt-wadjet": "Gerenciador Wadjet login screen",
        "alt-pdv": "DisnouPDV screenshot",
        "alt-invest": "InvestDash screenshot",
        "alt-molaris": "MolarisStock screenshot",
        "alt-kanban": "V-Kanban platform screenshot",
        "alt-pondera": "Pondera Study Simulator screenshot"
    },
    es: {
        "html-lang": "es",
        "page-title": "Portafolio - Disnou Almeida",
        "wa-msg": "¡Hola Disnou! Vi tu portafolio y me gustaría conversar sobre un proyecto.",
        "sobre": "Hola, me llamo Disnou. Trabajo como desarrollador web Full Stack freelance creando sitios profesionales, landing pages y sistemas web a medida para empresas y emprendedores.",
        "estudo": "Actualmente estudio Análisis y Desarrollo de Sistemas, combinando enfoque en rendimiento, diseño limpio y soluciones reales en producción.",
        "parceria": "También trabajo en sociedad en <a class='link-inline' href='https://sunsetfield.com.br/' target='_blank' rel='noopener noreferrer'>Sunset Field Solutions</a>, desarrollando sitios y sistemas a medida para empresas.",
        "ferramentas": "Herramientas que utilizo:",
        "btn-orcamento": "Solicitar Presupuesto",
        "btn-ver-projetos": "Ver Proyectos",
        "clientes-titulo": "Proyectos para Clientes",
        "clientes-subtitulo": "Productos reales desarrollados a medida y en producción.",
        "badge-cliente": "Cliente Real • En Producción",
        "badge-privado": "Sistema Privado • En Producción",
        "via-sunset": "vía Sunset Field Solutions",
        "gradibus-titulo": "Gradibus Transportadora",
        "gradibus-desc": "Sitio institucional y embudo de captación de clientes para empresa de mudanzas, fletes y logística de eventos en Ceará. Incluye galería filtrable de operaciones, prueba social y formulario interactivo enviado directo a WhatsApp.",
        "btn-visitar-site": "Visitar Sitio",
        "wadjet-titulo": "Gerenciador Wadjet",
        "wadjet-desc": "Plataforma web B2B desarrollada para Wadjet Segurança LTDA. Centraliza la gestión operativa, turnos de seguridad privada, equipos y apoyo a eventos en un entorno seguro y adaptable.",
        "wadjet-aviso": "🔒 Acceso restringido al equipo de Wadjet Segurança.",
        "btn-ver-acesso": "Ver Pantalla de Acceso",
        "demos-titulo": "Proyectos Propios y Demos",
        "demos-subtitulo": "Sistemas interactivos disponibles para prueba abierta.",
        "proj1-titulo": "1. TPV e Inventario Web",
        "proj1-desc": "Solución para pequeños comercios para registrar ventas y controlar productos. Enfoque en atajos de teclado para agilidad, cálculo automático de cambio y deducción automática de stock.",
        "proj1-cred": "<strong>Credenciales de prueba:</strong><div class='cred-linha'><span>👤 <b>Gerente:</b></span> <span class='cred-par'>Usuario <code>disnou</code></span> <span class='cred-par'>| Contraseña <code>123</code></span></div><div class='cred-linha'><span>🛒 <b>Cajero:</b></span> <span class='cred-par'>Usuario <code>caixa01</code></span> <span class='cred-par'>| Contraseña <code>abc</code></span></div>",
        "btn-testar": "Probar Proyecto",
        "btn-ver-video": "Ver Video Demo",
        "proj2-titulo": "2. Dashboard Financiero",
        "proj2-desc": "Panel visual para inversores. Registro de aportes, cálculo de precio medio, simulación de interés compuesto, gráficos interactivos y opción de exportación a .csv.",
        "proj3-titulo": "3. Inventario para Laboratorios",
        "proj3-desc": "Software B2B para la gestión de reactivos clínicos. Cuenta con lógica de conversión de medidas químicas y sistema de alertas para caducidad y reposición de lotes.",
        "molaris-aviso": "⏱️ Alojado en servidor gratuito — puede tardar unos segundos en iniciar.",
        "proj4-titulo": "4. Kanban Trilingüe",
        "proj4-desc": "Aplicación de productividad estilo Trello. Tableros con sistema de arrastrar y soltar (drag-and-drop), guardado local y cambio instantáneo de idioma (PT, EN, ES).",
        "proj5-titulo": "5. Simulador de Estudios",
        "proj5-desc": "Herramienta avanzada para estudiantes. Algoritmo para el cálculo de promedios usando pesos específicos y generador dinámico de cronogramas de estudio semanales.",
        "servicos-titulo": "Cómo puedo ayudar",
        "servicos-subtitulo": "Soluciones directas para hacer realidad tu proyecto con calidad profesional.",
        "serv1-titulo": "Sitios Institucionales y Landing Pages",
        "serv1-desc": "Páginas rápidas, adaptables y enfocadas en conversión por WhatsApp y SEO para posicionar tu empresa con credibilidad.",
        "serv2-titulo": "Sistemas Web y Dashboards",
        "serv2-desc": "Plataformas a medida con acceso por usuario, control de inventario, turnos, reportes y base de datos para automatizar tu operación.",
        "serv3-titulo": "Mantenimiento y Optimización",
        "serv3-desc": "Mejoras visuales, corrección de errores, ajustes responsivos en móvil y evolución continua de aplicaciones en React y Next.js.",
        "vamos-trabalhar": "¿Vamos a trabajar juntos?",
        "contato-texto": "Contáctame o sigue mi trabajo en redes:",
        "alt-logo": "Logo de Disnou Almeida",
        "alt-gradibus": "Captura del sitio web de Gradibus Transportadora",
        "alt-wadjet": "Pantalla de acceso de Gerenciador Wadjet",
        "alt-pdv": "Captura de DisnouPDV",
        "alt-invest": "Captura de InvestDash",
        "alt-molaris": "Captura de MolarisStock",
        "alt-kanban": "Captura de la plataforma V-Kanban",
        "alt-pondera": "Captura de Pondera - Simulador de Notas"
    }
};

const CHAVES_HTML = new Set(["proj1-cred", "parceria"]);

function atualizarLinksWhatsApp(idioma) {
    const mensagem = traducoes[idioma]["wa-msg"];
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
    const linkHero = document.getElementById("cta-whatsapp-hero");
    const linkFooter = document.getElementById("cta-whatsapp-footer");

    if (linkHero) linkHero.href = url;
    if (linkFooter) linkFooter.href = url;
}

// Função para Mudar o Idioma
function mudarIdioma(idioma, botaoClicado) {
    if (!traducoes[idioma]) return;

    document.querySelectorAll(".btn-lang").forEach(btn => {
        const ativo = btn === botaoClicado;
        btn.classList.toggle("ativo", ativo);
        btn.setAttribute("aria-pressed", ativo ? "true" : "false");
    });

    document.documentElement.lang = traducoes[idioma]["html-lang"];
    document.title = traducoes[idioma]["page-title"];

    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const chave = elemento.getAttribute("data-i18n");
        const valor = traducoes[idioma][chave];
        if (!valor) return;

        if (CHAVES_HTML.has(chave)) {
            elemento.innerHTML = valor;
        } else {
            elemento.textContent = valor;
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(img => {
        const chave = img.getAttribute("data-i18n-alt");
        const valor = traducoes[idioma][chave];
        if (valor) {
            img.alt = valor;
        }
    });

    atualizarLinksWhatsApp(idioma);
}

// Inicializa scripts ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
    digitar();
    atualizarLinksWhatsApp("pt");
});
