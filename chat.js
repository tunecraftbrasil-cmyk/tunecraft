// ============================================
// LÓGICA DO CHAT - NOVO FLUXO
// Preenche formulário → Cria row na tabela com status "pending_payment"
// Depois vai para dashboard com aba "Pendentes Pagamento"
// ============================================

// const SUPABASE_URL = "https://miupzfchvfbqbznfhvix.supabase.co";
// const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdXB6ZmNodmZicWJ6bmZodml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxOTYwNzksImV4cCI6MjA4NDc3MjA3OX0.rz0W9qVovRvAeyBQ55LRewOAOM5a8pNJs1-UwWttATw";

let currentStep = 0;
let formData = {};
let currentQuestion = null;

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
    // ===== SEÇÃO 1: DESTINATÁRIO =====
    {
        step: 1,
        section: "DESTINATÁRIO",
        question: "Quem é a pessoa especial para quem você quer criar uma música? 👤",
        type: "select",
        options: [
            { label: "Namorada/Namorado 💕", value: "romantic" },
            { label: "Mãe/Pai 👨👩👧", value: "parent" },
            { label: "Filho/Filha 👶", value: "child" },
            { label: "Avó/Avô 👵", value: "grandparent" },
            { label: "Amigo/Amiga 👥", value: "friend" },
            { label: "Colega de trabalho 💼", value: "colleague" },
            { label: "Irmão/Irmã 👬", value: "sibling" },
            { label: "Professor/Mentora 🎓", value: "mentor" },
            { label: "Grupo/Família 👨👩👧👦", value: "group" },
            { label: "Outro 🎭", value: "other" },
        ],
        metadata: { fieldName: "recipient.relationship", required: true }
    },
    {
        step: 1.5,
        condition: (data) => data.step1 === "other",
        question: "Como você descreveria esse relacionamento? Por favor, seja bem específico.",
        type: "textarea",
        placeholder: "Ex: Meu vizinho que é como um pai para mim...",
        minLength: 5,
        metadata: { fieldName: "recipient.customRelationship", required: true }
    },
    {
        step: 2,
        section: "DESTINATÁRIO",
        question: "Qual é o nome dessa pessoa? 🎤",
        type: "input",
        placeholder: "Ex: Maria",
        minLength: 2,
        metadata: { fieldName: "recipient.name", required: true }
    },
    {
        step: 3,
        section: "DESTINATÁRIO",
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
        step: 4,
        section: "DESTINATÁRIO",
        question: "Descreva a personalidade dessa pessoa em detalhes. Como ela é? 💭",
        type: "textarea",
        placeholder: "Ex: Alegre, extrovertida, adora dançar, tem um senso de humor único...",
        minLength: 15,
        metadata: { fieldName: "recipient.personality", required: true }
    },
    {
        step: 5,
        section: "DESTINATÁRIO",
        question: "Há características especiais ou histórias únicas sobre essa pessoa? 🌟",
        type: "textarea",
        placeholder: "Ex: Faz bolos incríveis, plantava suas próprias verduras...",
        minLength: 5,
        metadata: { fieldName: "recipient.specialCharacteristics", required: false }
    },
    // ===== SEÇÃO 2: OCASIÃO =====
    {
        step: 6,
        section: "OCASIÃO",
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
        step: 6.5,
        condition: (data) => data.step6 === "other",
        question: "Descreva a ocasião em detalhes",
        type: "textarea",
        placeholder: "Ex: Aposentadoria após 40 anos de trabalho...",
        minLength: 5,
        metadata: { fieldName: "occasion.customDescription", required: true }
    },
    {
        step: 7,
        section: "OCASIÃO",
        question: "Qual é a data da ocasião? (Opcional - ajuda com contexto) 📆",
        type: "input",
        inputType: "date",
        metadata: { fieldName: "occasion.date", required: false }
    },
    // ===== SEÇÃO 3: ESTILO MUSICAL =====
    {
        step: 8,
        section: "ESTILO MUSICAL",
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
        step: 8.5,
        condition: (data) => data.step8 === "other",
        question: "Qual gênero ou mistura você prefere para a música? Seja criativo!",
        type: "textarea",
        placeholder: "Ex: Eletrônico com influência de samba...",
        minLength: 5,
        metadata: { fieldName: "musicStyle.customGenre", required: true }
    },
    {
        step: 9,
        section: "ESTILO MUSICAL",
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
        step: 10,
        section: "ESTILO MUSICAL",
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
        step: 11,
        section: "REFERÊNCIAS",
        question: "Qual(is) artista(s) e música(s) quer que inspire a música? 🎤 (Adicione até 3 referências)",
        type: "references",
        maxReferences: 3,
        metadata: { fieldName: "musicStyle.references", required: true }
    },
    // ===== SEÇÃO 5: MENSAGEM E EMOÇÃO =====
    {
        step: 12,
        section: "MENSAGEM",
        question: "Qual é o sentimento ou mensagem PRINCIPAL que você quer transmitir? 💖",
        type: "textarea",
        placeholder: "Ex: Quero contar nossa história de vida juntos...",
        minLength: 15,
        metadata: { fieldName: "lyricDetails.mainMessage", required: true }
    },
    {
        step: 13,
        section: "MENSAGEM",
        question: "Há histórias, memórias ou menções específicas que DEVEM estar na letra? 🌟",
        type: "textarea",
        placeholder: "Ex: Mencionar Dourados, aquela viagem para o Rio...",
        minLength: 5,
        metadata: { fieldName: "lyricDetails.specialMentions", required: false }
    },
    {
        step: 14,
        section: "MENSAGEM",
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
        step: 15,
        section: "PRODUÇÃO",
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
        step: 16,
        section: "PRODUÇÃO",
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
        renderFinalForm(inputContainer);
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
// NOVO: FORMULÁRIO FINAL (DADOS PESSOAIS)
// ============================================

function renderFinalForm(container) {
    const pf = document.getElementById("progressFill");
    if (pf) pf.style.width = "100%";

    addMessage("bot", "🎵 Perfeito! Agora preciso de seus dados para criar a música.");

    container.innerHTML = `
        <div class="input-label">SEUS DADOS</div>
        <div class="reg-form-group">
            <label class="reg-label">👤 Nome Completo</label>
            <input type="text" class="reg-input" id="finalName" placeholder="Seu nome completo">
        </div>
        <div class="reg-form-group">
            <label class="reg-label">📧 Email</label>
            <input type="email" class="reg-input" id="finalEmail" placeholder="seu@email.com">
        </div>
        <button class="btn-chat-action" onclick="finalizarFormulario()" style="background: linear-gradient(135deg, #00d9ff, #6366f1); border:none; color:white; font-weight:700;">
            ✅ Finalizar e Ir para Pagamento
        </button>
        <button class="btn-chat-action" onclick="prevStep()" style="margin-top:10px; background:#f3f4f6; color:#64748b; border:none;">
            ← Voltar
        </button>
    `;

    scrollToBottom();
}

// ============================================
// FINALIZAR FORMULÁRIO E CRIAR PEDIDO
// ============================================

async function finalizarFormulario() {
    const name = document.getElementById('finalName').value.trim();
    const email = document.getElementById('finalEmail').value.trim();

    if (!name || !email) {
        alert("Por favor, preencha seu nome e email!");
        return;
    }

    if (!email.includes('@')) {
        alert("Email inválido!");
        return;
    }

    console.log("✅ Finalizando formulário...", { name, email, formData });

    // ✅ Mostrar loading
    const inputSection = document.getElementById('inputSection');
    inputSection.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="border: 3px solid #f1f5f9; border-top: 3px solid #00d9ff; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 15px;"></div>
            <p>Criando seu pedido...</p>
        </div>
    `;

    try {
        // ✅ 1. Recuperar user_id
        const USER_ID = localStorage.getItem('tuneCraft_userId');
        
        if (!USER_ID) {
            throw new Error("Você precisa estar logado para continuar!");
        }

        console.log("✅ User ID encontrado:", USER_ID);

        // ✅ 2. CRIAR PEDIDO NO SUPABASE COM STATUS "pending_payment"
        console.log("📤 Criando pedido no Supabase...");

        const pedidoResponse = await fetch(
            `${SUPABASE_URL}/rest/v1/musicas_pedidos`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify({
                    user_id: USER_ID,
                    user_email: email,
                    user_name: name,
                    title: `Música para ${formData.step2 || 'Alguém Especial'}`,
                    status: "waiting_user_approval",
                    payment_status: "pending",
                    payload: formData,
                    ai_metadata: {
                        formData: formData,
                        created_at: new Date().toISOString()
                    }
                })
            }
        );

        if (!pedidoResponse.ok) {
            const errorData = await pedidoResponse.json();
            console.error("❌ Erro ao criar pedido:", errorData);
            throw new Error(`Erro ao criar pedido: ${errorData.message || pedidoResponse.statusText}`);
        }

        const pedidoDataArray = await pedidoResponse.json();
        const pedidoId = pedidoDataArray[0].id;

        console.log("✅ Pedido criado com sucesso:", pedidoId);

        // ✅ 3. SALVAR NO LOCALSTORAGE PARA O CHECKOUT
        localStorage.setItem('tuneCraft_pendingOrderId', pedidoId);
        localStorage.setItem('tuneCraft_checkoutEmail', email);
        localStorage.setItem('tuneCraft_checkoutName', name);

        // ✅ 4. MOSTRAR SUCESSO
        addMessage("bot", "✅ Pedido criado com sucesso! Você será redirecionado para o dashboard...");

        // ✅ 5. REDIRECIONAR PARA DASHBOARD COM ABA "PENDENTES PAGAMENTO"
        setTimeout(() => {
            window.location.href = 'dashboard.html#pendentes-pagamento';
        }, 2000);

    } catch (error) {
        console.error("❌ Erro completo:", error);

        inputSection.innerHTML = `
            <div style="padding: 20px; background: #fee2e2; border-radius: 8px; color: #991b1b; border: 1px solid #fecaca;">
                <strong>❌ Erro ao processar:</strong> 
                <p style="margin-top: 8px; font-size: 0.9rem;">${error.message}</p>
                <div style="margin-top: 15px; display: flex; gap: 10px;">
                    <button class="btn-chat-action" onclick="finalizarFormulario()" style="flex: 1; background: #fca5a5; color: #7f1d1d; border: none; cursor: pointer;">
                        Tentar Novamente
                    </button>
                    <button class="btn-chat-action" onclick="closeChat()" style="flex: 1; background: #64748b; color: white; border: none; cursor: pointer;">
                        Fechar Chat
                    </button>
                </div>
            </div>
        `;

        scrollToBottom();
    }
}
