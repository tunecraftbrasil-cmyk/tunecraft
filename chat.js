// ============================================
// LÓGICA DO CHAT (chat.js) - VERSÃO INTELIGENTE
// ============================================

// Função para rolar o chat para o final
function scrollToBottom() {
    const messagesContainer = document.getElementById("chatMessages");
    if (messagesContainer) {
        setTimeout(() => {
            messagesContainer.scrollTo({
                top: messagesContainer.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);
    }
}

const elaboratedChatFlow = [
    {
        step: 1, section: "DESTINATÁRIO",
        question: "Quem é a pessoa especial para quem você quer criar uma música? 👤",
        type: "select",
        options: [
            { label: "Namorada/Namorado 💕", value: "romantic" },
            { label: "Mãe/Pai 👨‍👩‍👧", value: "parent" },
            { label: "Filho/Filha 👶", value: "child" },
            { label: "Avó/Avô 👵", value: "grandparent" },
            { label: "Amigo/Amiga 👥", value: "friend" },
            { label: "Colega de trabalho 💼", value: "colleague" },
            { label: "Irmão/Irmã 👬", value: "sibling" },
            { label: "Professor/Mentora 🎓", value: "mentor" },
            { label: "Grupo/Família 👨‍👩‍👧‍👦", value: "group" },
            { label: "Outro 🎭", value: "other" },
        ],
        metadata: { fieldName: "recipient.relationship", required: true }
    },
    {
        step: 1.5, condition: (data) => data.step1 === "other",
        question: "Como você descreveria esse relacionamento? Por favor, seja bem específico.",
        type: "textarea", placeholder: "Ex: Meu vizinho que é como um pai para mim...",
        minLength: 5, metadata: { fieldName: "recipient.customRelationship", required: true }
    },
    {
        step: 2, section: "DESTINATÁRIO",
        question: "Qual é o nome dessa pessoa? 🎤",
        type: "input", placeholder: "Ex: Maria",
        minLength: 2, metadata: { fieldName: "recipient.name", required: true }
    },
    {
        step: 3, section: "DESTINATÁRIO",
        question: "Qual a idade ou faixa etária? 🎂",
        type: "select",
        options: [
            { label: "Criança (até 12 anos)", value: "child_12" },
            { label: "Teen (13-19 anos)", value: "teen" },
            { label: "Jovem adulto (20-35 anos)", value: "adult_young" },
            { label: "Adulto (36-55 anos)", value: "adult_middle" },
            { label: "Senior (56+ anos)", value: "adult_senior" },
        ],
        metadata: { fieldName: "recipient.ageGroup", required: true }
    },
    {
        step: 4, section: "DESTINATÁRIO",
        question: "Descreva a personalidade dessa pessoa em detalhes. Como ela é? 💭",
        type: "textarea", placeholder: "Ex: Alegre, extrovertida, adora dançar, tem um senso de humor único...",
        minLength: 15, metadata: { fieldName: "recipient.personality", required: true }
    },
    {
        step: 5, section: "DESTINATÁRIO",
        question: "Há características especiais ou histórias únicas sobre essa pessoa? 🌟",
        type: "textarea", placeholder: "Ex: Faz bolos incríveis, plantava suas próprias verduras...",
        minLength: 5, metadata: { fieldName: "recipient.specialCharacteristics", required: false }
    },

    // ===== SEÇÃO 2: OCASIÃO =====
    {
        step: 6, section: "OCASIÃO",
        question: "Qual é a ocasião especial? 🎉",
        type: "select",
        options: [
            { label: "Pedido de Casamento 💍", value: "proposal" },
            { label: "Aniversário 🎂", value: "birthday" },
            { label: "Declaração de Amor 💕", value: "confession" },
            { label: "Homenagem especial 🌹", value: "tribute" },
            { label: "Despedida/Adeus 👋", value: "goodbye" },
            { label: "Comemoração (formatura, promoção, etc) 🎓", value: "celebration" },
            { label: "Pedido de desculpas 🤝", value: "apology" },
            { label: "Comemoração de amizade 👥", value: "friendship" },
            { label: "Outra ocasião 📅", value: "other" },
        ],
        metadata: { fieldName: "occasion.type", required: true }
    },
    {
        step: 6.5, condition: (data) => data.step6 === "other",
        question: "Descreva a ocasião em detalhes",
        type: "textarea", placeholder: "Ex: Aposentadoria após 40 anos de trabalho...",
        minLength: 5, metadata: { fieldName: "occasion.customDescription", required: true }
    },
    {
        step: 7, section: "OCASIÃO",
        question: "Qual é a data da ocasião? (Opcional - ajuda com contexto) 📆",
        type: "input", inputType: "date",
        metadata: { fieldName: "occasion.date", required: false }
    },

    // ===== SEÇÃO 3: ESTILO MUSICAL =====
    {
        step: 8, section: "ESTILO MUSICAL",
        question: "Qual é o gênero musical que você quer que influencie mais a música? 🎵",
        type: "select",
        options: [
            { label: "Pop moderno", value: "pop" },
            { label: "Sertanejo (tradicional ou universitário)", value: "sertanejo" },
            { label: "Rock/Rock alternativo", value: "rock" },
            { label: "Rap/Trap", value: "rap" },
            { label: "Samba/Pagode", value: "samba" },
            { label: "Acústico/MPB", value: "acoustic" },
            { label: "Eletrônico/House", value: "electronic" },
            { label: "Reggae", value: "reggae" },
            { label: "Funk/Dance", value: "funk" },
            { label: "Forró", value: "forro" },
            { label: "Gospel/Espiritual", value: "gospel" },
            { label: "Outro 🎶", value: "other" },
        ],
        metadata: { fieldName: "musicStyle.primaryGenre", required: true }
    },
    {
        step: 8.5, condition: (data) => data.step8 === "other",
        question: "Qual gênero ou mistura você prefere para a música? Seja criativo!",
        type: "textarea", placeholder: "Ex: Eletrônico com influência de samba...",
        minLength: 5, metadata: { fieldName: "musicStyle.customGenre", required: true }
    },
    {
        step: 9, section: "ESTILO MUSICAL",
        question: "Qual é o tempo/ritmo ideal para a música? ⏱️",
        type: "select",
        options: [
            { label: "Lenta e contemplativa (60-80 BPM)", value: "slow" },
            { label: "Moderada e equilibrada (80-110 BPM)", value: "moderate" },
            { label: "Rápida e energética (110+ BPM)", value: "fast" },
        ],
        metadata: { fieldName: "musicStyle.tempo", required: true }
    },
    {
        step: 10, section: "ESTILO MUSICAL",
        question: "Qual deve ser a energia da música? ⚡",
        type: "select",
        options: [
            { label: "Baixa (suave, intimista, relax)", value: "low" },
            { label: "Média (natural, fluida, equilibrada)", value: "medium" },
            { label: "Alta (impacto, poderosa, celebrativa)", value: "high" },
        ],
        metadata: { fieldName: "musicStyle.energy", required: true }
    },

    // ===== SEÇÃO 4: REFERÊNCIAS MUSICAIS =====
    {
        step: 11, section: "REFERÊNCIAS",
        question: "Qual(is) artista(s) e música(s) quer que inspire a música? 🎤 (Adicione até 3 referências)",
        type: "references", maxReferences: 3,
        metadata: { fieldName: "musicStyle.references", required: true }
    },

    // ===== SEÇÃO 5: MENSAGEM E EMOÇÃO =====
    {
        step: 12, section: "MENSAGEM",
        question: "Qual é o sentimento ou mensagem PRINCIPAL que você quer transmitir? 💖",
        type: "textarea", placeholder: "Ex: Quero contar nossa história de vida juntos...",
        minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true }
    },
    {
        step: 13, section: "MENSAGEM",
        question: "Há histórias, memórias ou menções específicas que DEVEM estar na letra? 🌟",
        type: "textarea", placeholder: "Ex: Mencionar Dourados, aquela viagem para o Rio...",
        minLength: 5, metadata: { fieldName: "lyricDetails.specialMentions", required: false }
    },
    {
        step: 14, section: "MENSAGEM",
        question: "Qual é o tom/estilo de linguagem? 🎨",
        type: "select",
        options: [
            { label: "Poético e romântico (com metáforas)", value: "poetic" },
            { label: "Conversacional e natural (como falamos)", value: "conversational" },
            { label: "Storytelling (contando uma história)", value: "storytelling" },
            { label: "Direto e emotivo (straight from heart)", value: "direct" },
            { label: "Bem-humorado (com humor e leveza)", value: "humorous" },
        ],
        metadata: { fieldName: "lyricDetails.languageStyle", required: true }
    },

    // ===== SEÇÃO 6: PRODUÇÃO =====
    {
        step: 15, section: "PRODUÇÃO",
        question: "Qual tipo de voz você gostaria? 🎙️",
        type: "select",
        options: [
            { label: "Voz feminina (suave, calorosa, emotiva)", value: "female_warm" },
            { label: "Voz feminina (poderosa, energética, clara)", value: "female_strong" },
            { label: "Voz masculina (suave, intimista, delicada)", value: "male_soft" },
            { label: "Voz masculina (poderosa, grave, marcante)", value: "male_strong" },
            { label: "Dueto (homem + mulher alternando)", value: "duo" },
            { label: "Dueto (homem + mulher harmonizando)", value: "duo_harmony" },
        ],
        metadata: { fieldName: "productionDetails.vocalApproach.vocalGender", required: true }
    },
    {
        step: 16, section: "PRODUÇÃO",
        question: "Qual é o estilo de produção? 🎚️",
        type: "select",
        options: [
            { label: "Acústico puro (violão, piano, natural)", value: "acoustic" },
            { label: "Acústico com backing (acústica + percussão suave)", value: "acoustic_backing" },
            { label: "Studio polish (profissional, limpo, brilhante)", value: "studio_polish" },
            { label: "Live feel (como se tivesse ao vivo na frente de você)", value: "live_feel" },
            { label: "Cinematic (épico, cinematográfico, orquestrado)", value: "cinematic" },
            { label: "Eletrônico/Moderno (sintetizadores, beats modernos)", value: "electronic_modern" },
        ],
        metadata: { fieldName: "productionDetails.production.productionStyle", required: true }
    }
];

let currentStep = 0;
let formData = {};
let currentQuestion = null;

// Funções de Controle
function openChat() {
    document.getElementById("chatModal").classList.add("active");
    initChat();
}

function closeChat() {
    document.getElementById("chatModal").classList.remove("active");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeChat();
});

function initChat() {
    currentStep = 0;
    formData = {};
    document.getElementById("chatMessages").innerHTML = "";
    renderQuestion();
}

function renderQuestion() {
    const inputContainer = document.getElementById("inputSection");

    inputContainer.innerHTML = "";

    const validSteps = elaboratedChatFlow.filter((step) => {
        if (step.condition) return step.condition(formData);
        return true;
    });

    if (currentStep >= validSteps.length) {
        renderRegistrationForm(inputContainer);
        scrollToBottom();
        return;
    }

    currentQuestion = validSteps[currentStep];

    const progress = ((currentStep + 1) / (validSteps.length + 1)) * 100;
    const pf = document.getElementById("progressFill");
    if (pf) pf.style.width = progress + "%";

    addMessage("bot", currentQuestion.question);

    setTimeout(() => {
        renderInput(currentQuestion, inputContainer);
        scrollToBottom();
    }, 500);
}

function addMessage(sender, text) {
    const messagesContainer = document.getElementById("chatMessages");
    const messageEl = document.createElement("div");
    messageEl.className = "message";

    if (sender === "bot") {
        messageEl.innerHTML = `<div class="bot-message"><div class="avatar">🎵</div><div class="bubble">${text}</div></div>`;
    } else {
        messageEl.innerHTML = `<div class="user-message">${text}</div>`;
    }

    messagesContainer.appendChild(messageEl);
    scrollToBottom();
}

function renderInput(question, container) {
    let html = `<div class="input-label">SUA RESPOSTA</div>`;

    if (question.type === "select") {
        html += `<div class="options-grid">`;
        question.options.forEach(opt => {
            html += `<button class="option-btn" onclick="handleOption('${opt.value}', '${opt.label}')">${opt.label}</button>`;
        });
        html += `</div>`;
    } else if (question.type === "input") {
        const type = question.inputType || "text";
        html += `<input type="${type}" class="chat-text-input" id="chatInput" placeholder="${question.placeholder || ''}" onkeypress="if(event.key==='Enter') handleInput()">
                 <button class="btn-chat-action" onclick="handleInput()">Enviar</button>`;
    } else if (question.type === "textarea") {
        html += `<textarea class="chat-text-input" id="chatInput" rows="3" placeholder="${question.placeholder || ''}"></textarea>
                 <button class="btn-chat-action" onclick="handleInput()">Enviar</button>`;
    } else if (question.type === "references") {
        html += '<div id="referencesContainer">';
        for (let i = 0; i < question.maxReferences; i++) {
            html += `<div class="reference-item">
                        <input type="text" class="reference-artist" placeholder="Artista" data-index="${i}">
                        <input type="text" class="reference-song" placeholder="Música" data-index="${i}">
                     </div>`;
        }
        html += '</div><button class="btn-chat-action" onclick="handleInput()">Enviar Referências</button>';
    }

    html += `<div class="action-buttons" style="margin-top: 1rem;">
                ${currentStep > 0 ? '<button class="btn-back" onclick="prevStep()">← Voltar</button>' : ""}
             </div>`;

    container.innerHTML = html;

    const input = document.getElementById("chatInput");
    if (input) input.focus();
}

function handleOption(val, label) {
    addMessage("user", label);
    formData[`step${currentQuestion.step}`] = val;
    currentStep++;
    setTimeout(renderQuestion, 600);
}

function handleInput() {
    if (currentQuestion.type === "references") {
        const refs = [];
        document.querySelectorAll('.reference-item').forEach(item => {
            const artist = item.querySelector('.reference-artist').value.trim();
            const song = item.querySelector('.reference-song').value.trim();
            if (artist || song) refs.push({ artist, song });
        });
        if (refs.length === 0) return alert("Adicione pelo menos uma referência");

        addMessage("user", `${refs.length} referências adicionadas`);
        formData[`step${currentQuestion.step}`] = refs;
        currentStep++;
        setTimeout(renderQuestion, 600);
        return;
    }

    const val = document.getElementById("chatInput").value;
    if (!val.trim()) return;

    if (currentQuestion.minLength && val.length < currentQuestion.minLength) {
        alert(`Por favor, escreva pelo menos ${currentQuestion.minLength} caracteres.`);
        return;
    }

    addMessage("user", val);
    formData[`step${currentQuestion.step}`] = val;
    currentStep++;
    setTimeout(renderQuestion, 600);
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderQuestion();
    }
}

// ============================================
// LOGICA DE CADASTRO / PAGAMENTO / ATUALIZAÇÃO
// ============================================

function renderRegistrationForm(container) {
    const pf = document.getElementById("progressFill");
    if (pf) pf.style.width = "100%";

    const existingUser = JSON.parse(localStorage.getItem("tuneCraftUser"));

    if (existingUser && existingUser.email) {
        addMessage("bot", `Olá, ${existingUser.name.split(' ')[0]}! Tudo pronto para criar sua nova música. Clique abaixo para confirmar o pagamento.`);
        container.innerHTML = `
            <div class="input-label">PAGAMENTO RÁPIDO</div>
            <p style="margin-bottom:10px; font-size:0.9rem; color:#64748b;">Cartão final 4242 (Salvo)</p>
            <button class="btn-chat-action" onclick="submitRegistration(true)">Pagar e Criar (R$ 49,90)</button>
        `;
    } else {
        addMessage("bot", "Incrível! Tenho tudo para criar sua música. Para finalizar e acessar o pagamento (Plano Único), preencha seus dados abaixo:");
        container.innerHTML = `
            <div class="input-label">CADASTRO RÁPIDO</div>
            <div class="reg-form-group"><label class="reg-label">Nome Completo</label><input type="text" class="reg-input" id="regName" placeholder="Seu nome completo"></div>
            <div class="reg-form-group"><label class="reg-label">CPF</label><input type="text" class="reg-input" id="regCpf" placeholder="000.000.000-00"></div>
            <div class="reg-form-group"><label class="reg-label">Email</label><input type="email" class="reg-input" id="regEmail" placeholder="seu@email.com"></div>
            <div class="reg-form-group"><label class="reg-label">Senha</label><input type="password" class="reg-input" id="regPass"></div>
            <div class="reg-form-group"><label class="reg-label">Confirmar Senha</label><input type="password" class="reg-input" id="regConfirmPass"></div>
            <button class="btn-chat-action" onclick="submitRegistration(false)">Finalizar e Pagar</button>
        `;
    }
    scrollToBottom();
}

function submitRegistration(isLogged) {
    let name, email;
    let user_id = null;

    if (!isLogged) {
        name = document.getElementById('regName').value;
        const cpf = document.getElementById('regCpf').value;
        email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPass').value;
        const confirm = document.getElementById('regConfirmPass').value;

        if (!name || !cpf || !email || !pass) return alert("Por favor, preencha todos os campos.");
        if (pass !== confirm) return alert("As senhas não coincidem.");
    } else {
        const existing = JSON.parse(localStorage.getItem("tuneCraftUser"));
        name = existing?.name;
        email = existing?.email;
        user_id = existing?.user_id || null;
    }

    // ===== CREDENCIAIS =====
    const SUPABASE_URL = 'https://miupzfchvfbqbznfhvix.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdXB6ZmNodmZicWJ6bmZodml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxOTYwNzksImV4cCI6MjA4NDc3MjA3OX0.rz0W9qVovRvAeyBQ55LRewOAOM5a8pNJs1-UwWttATw';

    // ===== DEBUG =====
    console.log("[TuneCraft] URL:", SUPABASE_URL);
    console.log("[TuneCraft] ANON prefix:", (SUPABASE_ANON_KEY || "").slice(0, 16));
    console.log("[TuneCraft] ANON length:", (SUPABASE_ANON_KEY || "").length);

    const inputSectionEl = document.getElementById('inputSection');
    if (inputSectionEl) {
        inputSectionEl.innerHTML = `
            <div class="api-mock-screen" style="margin-top: 10px;">
                <div class="spinner"></div>
                <h3>Criando sua obra-prima...</h3>
                <p style="font-size: 0.9rem; margin-top: 10px; color: #64748b;">A IA está compondo a letra e o arranjo.</p>
                <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 20px;">Isso pode levar alguns segundos.</p>
            </div>
        `;
    }

    setTimeout(async () => {
        try {
            // =========================================================
            // 0) GARANTE SUPABASE AUTH (isso é o que você removeu sem querer)
            // =========================================================
            if (!window.supabase) {
                throw new Error("supabase-js não carregado. Verifique se o script do supabase está no HTML antes do chat.js.");
            }

            // Reaproveita client se já existir
            window.sb = window.sb || window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

            // Pega sessão REAL do usuário (token válido para auth.uid())
            const { data: sessionData, error: sessionErr } = await window.sb.auth.getSession();
            if (sessionErr) console.warn("[TuneCraft] getSession error:", sessionErr);

            const session = sessionData?.session;

            // Se não existe sessão, não tem como passar na RLS -> redireciona login
            if (!session?.access_token || !session?.user?.id) {
                alert("Você precisa estar logado para criar a música. Faça login e tente novamente.");
                window.location.href = "login.html";
                return;
            }

            // força user_id correto (RLS exige auth.uid() = user_id)
            user_id = session.user.id;
            email = session.user.email || email;

            console.log("[TuneCraft] session user:", user_id);
            console.log("[TuneCraft] token prefix:", session.access_token.slice(0, 16));
            console.log("[TuneCraft] token length:", session.access_token.length);

            // =========================================================
            // 1) HEADERS CORRETOS (Bearer = ACCESS TOKEN do usuário)
            // =========================================================
            function sbHeaders({ prefer = true } = {}) {
                const anon = (SUPABASE_ANON_KEY || "").trim();
                const token = (session.access_token || "").trim();
                const h = {
                    apikey: anon,
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                };
                if (prefer) h.Prefer = "return=representation";
                return h;
            }

            // ===== 2) HEALTH CHECK (opcional) =====
            const health = await fetch(`${SUPABASE_URL}/rest/v1/`, {
                method: "GET",
                headers: {
                    apikey: (SUPABASE_ANON_KEY || "").trim(),
                    Authorization: `Bearer ${(session.access_token || "").trim()}`
                }
            });
            console.log("[TuneCraft] REST health status:", health.status);

            // =========================================================
            // 3) INSERT (AGORA PASSA NO RLS)
            // =========================================================
            const responseWithId = await fetch(`${SUPABASE_URL}/rest/v1/musicas_pedidos`, {
                method: 'POST',
                headers: sbHeaders({ prefer: true }),
                body: JSON.stringify({
                    user_id: user_id,        // ✅ obrigatório
                    user_email: email,
                    user_name: name,
                    payload: formData,
                    status: 'pending_approval'
                })
            });

            if (!responseWithId.ok) {
                const errText = await responseWithId.text();
                console.error("[TuneCraft] POST /musicas_pedidos status:", responseWithId.status);
                console.error("[TuneCraft] POST /musicas_pedidos body:", errText);
                throw new Error(`Erro ao salvar pedido inicial (${responseWithId.status}): ${errText}`);
            }

            const data = await responseWithId.json();
            const pedidoId = data?.[0]?.id;
            if (!pedidoId) throw new Error('Pedido criado, mas não retornou ID. Verifique o schema/colunas.');
            console.log('✅ Pedido iniciado. ID:', pedidoId);

            // =========================================================
            // 4) CHAMADA À EDGE FUNCTION (com token do usuário)
            // =========================================================
            const functionResponse = await fetch(`${SUPABASE_URL}/functions/v1/generate-lyrics`, {
                method: "POST",
                headers: sbHeaders({ prefer: false }),
                body: JSON.stringify({ pedidoId })
            });

            if (!functionResponse.ok) {
                const errText = await functionResponse.text();
                console.error("[TuneCraft] POST /functions/v1/generate-lyrics status:", functionResponse.status);
                console.error("[TuneCraft] POST /functions/v1/generate-lyrics body:", errText);
                throw new Error(`Erro ao chamar generate-lyrics (${functionResponse.status}): ${errText}`);
            }

            const functionData = await functionResponse.json();

            const content = {
                title: functionData.title,
                lyrics: functionData.customer_lyrics,
                suno_style_prompt: functionData.suno_payload?.style || ""
            };

            // =========================================================
            // 5) SALVA NO LOCALSTORAGE (agora com user_id real)
            // =========================================================
            let userData = JSON.parse(localStorage.getItem("tuneCraftUser")) || {
                name: name,
                email: email,
                user_id: user_id,
                orders: []
            };

            if (!Array.isArray(userData.orders)) userData.orders = [];

            // garante persistência do user_id (isso é crucial)
            userData.name = name || userData.name;
            userData.email = email || userData.email;
            userData.user_id = user_id;

            userData.orders.push({
                id: Date.now(),
                supabase_id: pedidoId,
                status: 'pending_approval',
                title: content.title,
                payload: formData,
                lyrics: content.lyrics,
                suno_prompt: content.suno_style_prompt
            });

            localStorage.setItem("tuneCraftUser", JSON.stringify(userData));

            console.log('✅ Tudo pronto! Redirecionando...');
            window.location.href = "dashboard.html";

        } catch (error) {
            console.error('Erro fatal:', error);
            alert('Ocorreu um erro ao processar. Veja o console para detalhes.');
            const inputEl = document.getElementById('inputSection');
            if (inputEl) {
                renderRegistrationForm(inputEl);
            }
        }
    }, 100);
}



function generateMockLyrics(data, userName) {
    const homenageado = data.step2 || "Amor";
    const estilo = data.step8 || "Pop";
    return `(Estilo: ${estilo})\n\n[Verso 1]\nHoje o sol nasceu pensando em você\n${homenageado}, a razão do meu viver\nCada história, cada momento bom\nTransformo agora em som\n\n[Refrão]\nÉ por isso que eu canto assim\nVocê é parte de mim\nNessa melodia sem fim\nO amor floresce como um jardim\n\n[Ponte]\nLembro de tudo que passamos\nE de tudo que ainda sonhamos...\n\n[Final]\nPara sempre, ${homenageado}.`;
}
