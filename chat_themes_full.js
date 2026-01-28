// ============================================
// CHAT_THEMES_FULL.JS - CORRIGIDO PARA FUNCIONAR COM chat.js ATUAL
// ============================================
// IMPORTANTE: Este arquivo DEVE ser carregado ANTES de chat.js
// Order no HTML:
// 1. <script src="chat_themes_full.js"></script>
// 2. <script src="chat.js"></script>
// ============================================

// ============================================
// PASSO 1: Definir elaboratedChatFlow GLOBAL
// ============================================

elaboratedChatFlow = [
    // ===== BLOCO UNIVERSAL (step 0) =====
    { 
        step: 0, 
        section: "TEMA", 
        question: "Qual é o tema da música que você quer criar? 🎵", 
        type: "select", 
        options: [
            { label: "🎂 Aniversário", value: "birthday" },
            { label: "💌 Declaração de amor", value: "love_declaration" },
            { label: "💍 Pedido de casamento", value: "proposal" },
            { label: "👶 Nascimento de filho(a)", value: "birth_child" },
            { label: "🌹 Homenagem", value: "tribute" },
            { label: "🤝 Amizade", value: "friendship" },
            { label: "📢 Anúncio de gravidez", value: "pregnancy_announcement" },
            { label: "🐾 Música para seu Pet", value: "pet" },
            { label: "👵👶 Nascimento de neto(a)", value: "birth_grandchild" },
            { label: "✨ Oração", value: "prayer" },
            { label: "🏢 Música corporativa", value: "corporate" },
            { label: "🎭 Outro", value: "other" }
        ], 
        metadata: { fieldName: "ai_metadata.themeId", required: true } 
    },

    // ===== TEMA 1: ANIVERSÁRIO (100-114) =====
    { step: 100, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Como essa pessoa se chama? 👤", type: "input", placeholder: "Ex.: Aline (Lili), João (Jô)", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 101, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual é a relação com você? 💝", type: "input", placeholder: "Ex.: namorado(a), esposo(a), amigo(a)…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 102, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Como é a sua história com essa pessoa? 📖", type: "textarea", placeholder: "Nos conhecemos na faculdade…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 103, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, 
        { label: "🌍 Sobre ela", value: "third_person" }, 
        { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 104, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Conte uma cena real de vocês 🎬", type: "textarea", placeholder: "Concreta, onde estavam, o que aconteceu…", minLength: 20, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 105, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "3 palavras não-clichês para descrever essa pessoa 📝", type: "input", placeholder: "Ex.: teimosa do bem, riso fácil", minLength: 5, metadata: { fieldName: "recipient.personality", required: true } },
    { step: 106, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Um detalhe secreto ou piada interna entre vocês 🤫", type: "input", placeholder: "Piada interna, apelido…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 107, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "O que mais você admira nessa pessoa? ⭐", type: "textarea", placeholder: "Específico, não genérico…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 108, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual é seu desejo para o futuro dessa pessoa? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    
    // Step 109: Estilo musical (principal) - TEM opção "outro"
    { step: 109, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 109.5: Sub-pergunta condicional (SÓ SE 109 === "other")
    { step: "109.5", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d.step_109 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    // Step 110: Impacto (SEMPRE vem depois, com ou sem 109.5)
    { step: 110, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    
    { step: 111, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 112: Idioma (principal) - TEM opção "outro"
    { step: 112, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 112.5: Sub-pergunta condicional (SÓ SE 112 === "other")
    { step: "112.5", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d.step_112 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 113, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual tipo de voz você prefere ouvir cantando? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    
    { step: 114, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar clichês, termos genéricos…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 2: DECLARAÇÃO DE AMOR (200-214) =====
    { step: 200, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Como essa pessoa entrou na sua vida? 💕", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 201, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "De que ponto de vista você quer fazer essa declaração? 🎤", type: "select", options: [
        { label: "💬 Para ela", value: "second_person" }, 
        { label: "🌍 Sobre ela", value: "third_person" }, 
        { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 202, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Quando você percebeu que era amor? ⚡", type: "textarea", placeholder: "Momento do 'clique'…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: 203, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que mudou em você desde que essa pessoa chegou? 🌱", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 204, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que você precisa dizer que ainda não disse? 💭", type: "textarea", placeholder: "Sincero e direto…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 205, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Descreva uma cena comum e especial de vocês 🎬", type: "textarea", placeholder: "Momento comum especial…", minLength: 15, metadata: { fieldName: "lyricDetails.simpleScene", required: true } },
    { step: 206, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual é um detalhe secreto ou piada interna entre vocês? 🤫", type: "input", placeholder: "Piada interna…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 207, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Complete a frase: 'Com você eu me sinto / consigo / aprendi a...' ❤️", type: "input", placeholder: "Complete a frase…", minLength: 3, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    
    // Step 209: Estilo musical (principal)
    { step: 209, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual estilo musical combina mais com essa declaração? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 209.5: Sub-pergunta condicional
    { step: "209.5", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration" && d.step_209 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: 210, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Que tipo de impacto emocional você quer causar com essa declaração? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 211, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 212: Idioma
    { step: 212, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, 
        { label: "🇺🇸 EN", value: "en" }, 
        { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 212.5: Sub-pergunta condicional
    { step: "212.5", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration" && d.step_212 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 213, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    
    { step: 214, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 3: PEDIDO DE CASAMENTO (300-312) =====
    { step: 300, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Como vocês se conheceram? 💍", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 301, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual será o papel dessa música no pedido? 🎶", type: "select", options: [
        { label: "💍 É o pedido em si", value: "is_proposal" }, 
        { label: "🎶 Abre espaço para o pedido", value: "opens_space" }, 
        { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "lyricDetails.proposalStyle", required: true } },
    { step: 302, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual é o momento de certeza de que quer casar com essa pessoa? ⚡", type: "textarea", placeholder: "Pra sempre…", minLength: 15, metadata: { fieldName: "lyricDetails.certaintyCue", required: true } },
    { step: 303, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Quais são 2 promessas reais que você quer fazer? 📝", type: "textarea", placeholder: "Uma por linha…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: 304, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Existe algum ritual especial que só vocês fazem? 🕯️", type: "input", placeholder: "Só vocês fazem…", minLength: 3, metadata: { fieldName: "lyricDetails.ritual", required: true } },
    { step: 305, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Como você imagina o futuro de vocês dois juntos? 🌅", type: "textarea", placeholder: "O que imagina…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    
    // Step 307: Estilo musical
    { step: 307, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 307.5: Sub-pergunta condicional
    { step: "307.5", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d.step_307 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: 308, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 309, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 310: Idioma
    { step: 310, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, 
        { label: "🇺🇸 EN", value: "en" }, 
        { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 310.5: Sub-pergunta condicional
    { step: "310.5", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d.step_310 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 311, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    
    { step: 312, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } }
];


// ============================================
// PASSO 2: PERMITIR QUE chat.js INCREMENTE currentStep
// Adicionar função para encontrar próximo step válido
// ============================================

/**
 * Encontra o índice do próximo step válido
 * Usado por chat.js quando faz currentStep++
 */
function getNextValidStepIndex(currentIndex, formData) {
    if (currentIndex >= elaboratedChatFlow.length - 1) {
        return elaboratedChatFlow.length; // Fim do formulário
    }
    
    let nextIndex = currentIndex + 1;
    
    // Procurar pelo próximo step que atenda à condição
    while (nextIndex < elaboratedChatFlow.length) {
        const step = elaboratedChatFlow[nextIndex];
        
        // Se não tem condição, é válido
        if (!step.condition) {
            return nextIndex;
        }
        
        // Se tem condição, verificar se passa
        if (step.condition(formData)) {
            return nextIndex;
        }
        
        nextIndex++;
    }
    
    // Se nenhum mais atender, fim do formulário
    return elaboratedChatFlow.length;
}

// ============================================
// PASSO 3: SOBRESCREVER renderQuestion em chat.js
// ============================================

/**
 * IMPORTANTE: Coloque isto NO FINAL de chat.js, depois de todas as funções
 * Isto vai CORRIGIR o renderQuestion para usar array indexing
 */
const OriginalRenderQuestion = renderQuestion;

function renderQuestion() {
    const inputContainer = document.getElementById("inputSection");
    inputContainer.innerHTML = "";

    // Filtrar apenas steps válidos para este tema
    const validSteps = elaboratedChatFlow.filter((step) => {
        if (step.condition) return step.condition(formData);
        return true;
    });

    console.log("📋 Steps válidos para este tema:", validSteps.length);
    console.log("📍 Current step (index):", currentStep);

    // Se passou do limite, mostrar button de salvar
    if (currentStep >= validSteps.length) {
        renderSaveButton(inputContainer);
        scrollToBottom();
        return;
    }

    currentQuestion = validSteps[currentStep];

    if (!currentQuestion) {
        console.error("❌ Erro: currentQuestion é null");
        return;
    }

    const progress = ((currentStep + 1) / (validSteps.length + 1)) * 100;
    const pf = document.getElementById("progressFill");
    if (pf) pf.style.width = progress + "%";

    addMessage("bot", currentQuestion.question);

    setTimeout(() => {
        renderInput(currentQuestion, inputContainer);
        scrollToBottom();
    }, 500);
}

// ============================================
// VERIFICAÇÃO
// ============================================

console.log('✅ chat_themes_full.js carregado!');
console.log('✅ Total de steps:', elaboratedChatFlow.length);
console.log('✅ Tema 1 (Aniversário): 100-114 + 109.5, 112.5');
console.log('✅ Tema 2 (Declaração): 200-214 + 209.5, 212.5');
console.log('✅ Tema 3 (Casamento): 300-312 + 307.5, 310.5');
console.log('✅ Fluxo condicional ativado!');
