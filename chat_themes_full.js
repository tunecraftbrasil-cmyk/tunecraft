// ============================================
// CHAT_THEMES_FULL.JS v8 - SEM DECIMAIS
// Usar "1_9_1" ao invés de "1.9.1"
// Problema resolvido!
// ============================================

class StepHierarchy {
  // Parse "1_9_1" para [1, 9, 1]
  parseStep = (stepId) => {
    return String(stepId).split('_').map(n => parseInt(n));
  }

  // Parent de "1_9_1" é "1_9"
  getParentStep = (stepId) => {
    const parts = this.parseStep(stepId);
    if (parts.length > 1) {
      return parts.slice(0, -1).join('_');
    }
    return null;
  }

  // Profundidade: "1_9_1" = 3, "1_9" = 2, "1" = 1
  getDepth = (stepId) => {
    return this.parseStep(stepId).length;
  }

  // É sub-step condicional? "1_9_1" = true, "1_9" = false
  isConditionalChild = (stepId) => {
    return this.getDepth(stepId) > 2;
  }

  // Próximo step lógico
  getNextStep = (currentStep, data) => {
    const depth = this.getDepth(currentStep);
    
    // Se é sub-step (profundidade 3+), volta para parent + 1
    if (depth > 2) {
      const parent = this.getParentStep(currentStep);
      return this.getNextMainStep(parent);
    }
    
    // Se é step normal com "outro", vai para sub-step
    const dataKey = `step_${currentStep}`;
    if (data[dataKey] === "other") {
      return `${currentStep}_1`;
    }
    
    // Se é step normal sem "outro", vai para próximo
    return this.getNextMainStep(currentStep);
  }

  // Próximo step no nível 1 ou 2
  getNextMainStep = (stepId) => {
    const parts = this.parseStep(stepId);
    const lastPart = parts[parts.length - 1];
    parts[parts.length - 1] = lastPart + 1;
    return parts.join('_');
  }
}

// ===== MAIN DATA STRUCTURE =====

elaboratedChatFlow = [
    // ===== BLOCO UNIVERSAL =====
    { step: 0, section: "TEMA", question: "Qual é o tema da música que você quer criar? 🎵", type: "select", options: [
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
    ], metadata: { fieldName: "ai_metadata.themeId", required: true } },

    // ===== TEMA 1: ANIVERSÁRIO =====
    { step: 1, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Como essa pessoa se chama? 👤", type: "input", placeholder: "Ex.: Aline (Lili), João (Jô)", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 2, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual é a relação com você? 💝", type: "input", placeholder: "Ex.: namorado(a), esposo(a), amigo(a)…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 3, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Como é a sua história com essa pessoa? 📖", type: "textarea", placeholder: "Nos conhecemos na faculdade…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 4, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 5, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Conte uma cena real de vocês 🎬", type: "textarea", placeholder: "Concreta, onde estavam, o que aconteceu…", minLength: 20, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 6, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "3 palavras não-clichês para descrever essa pessoa 📝", type: "input", placeholder: "Ex.: teimosa do bem, riso fácil", minLength: 5, metadata: { fieldName: "recipient.personality", required: true } },
    { step: 7, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Um detalhe secreto ou piada interna entre vocês 🤫", type: "input", placeholder: "Piada interna, apelido…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 8, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "O que mais você admira nessa pessoa? ⭐", type: "textarea", placeholder: "Específico, não genérico…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 9, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual é seu desejo para o futuro dessa pessoa? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    
    // Step 10: Estilo musical (principal)
    { step: 10, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 10_1: Sub-pergunta condicional (SÓ SE 10 === "other")
    { step: "10_1", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d["step_10"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    // Step 11: Impacto (SEMPRE vem depois, com ou sem 10_1)
    { step: 11, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    
    { step: 12, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 13: Idioma (principal)
    { step: 13, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 13_1: Sub-pergunta condicional (SÓ SE 13 === "other")
    { step: "13_1", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d["step_13"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 14, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual tipo de voz você prefere ouvir cantando? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    
    { step: 15, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar clichês, termos genéricos…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 2: DECLARAÇÃO DE AMOR =====
    { step: 20, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Como essa pessoa entrou na sua vida? 💕", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 21, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "De que ponto de vista você quer fazer essa declaração? 🎤", type: "select", options: [
        { label: "💬 Para ela", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 22, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Quando você percebeu que era amor? ⚡", type: "textarea", placeholder: "Momento do 'clique'…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: 23, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que mudou em você desde que essa pessoa chegou? 🌱", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 24, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que você precisa dizer que ainda não disse? 💭", type: "textarea", placeholder: "Sincero e direto…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 25, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Descreva uma cena comum e especial de vocês 🎬", type: "textarea", placeholder: "Momento comum especial…", minLength: 15, metadata: { fieldName: "lyricDetails.simpleScene", required: true } },
    { step: 26, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual é um detalhe secreto ou piada interna entre vocês? 🤫", type: "input", placeholder: "Piada interna…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 27, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Complete a frase: 'Com você eu me sinto / consigo / aprendi a...' ❤️", type: "input", placeholder: "Complete a frase…", minLength: 3, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    
    // Step 28: Estilo musical (principal)
    { step: 28, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual estilo musical combina mais com essa declaração? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 28_1: Sub-pergunta condicional
    { step: "28_1", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration" && d["step_28"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: 29, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Que tipo de impacto emocional você quer causar com essa declaração? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 30, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 31: Idioma (principal)
    { step: 31, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 31_1: Sub-pergunta condicional
    { step: "31_1", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration" && d["step_31"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 32, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 33, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 3: PEDIDO DE CASAMENTO =====
    { step: 40, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Como vocês se conheceram? 💍", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 41, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual será o papel dessa música no pedido? 🎶", type: "select", options: [
        { label: "💍 É o pedido em si", value: "is_proposal" }, { label: "🎶 Abre espaço para o pedido", value: "opens_space" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "lyricDetails.proposalStyle", required: true } },
    { step: 42, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual é o momento de certeza de que quer casar com essa pessoa? ⚡", type: "textarea", placeholder: "Pra sempre…", minLength: 15, metadata: { fieldName: "lyricDetails.certaintyCue", required: true } },
    { step: 43, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Quais são 2 promessas reais que você quer fazer? 📝", type: "textarea", placeholder: "Uma por linha…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: 44, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Existe algum ritual especial que só vocês fazem? 🕯️", type: "input", placeholder: "Só vocês fazem…", minLength: 3, metadata: { fieldName: "lyricDetails.ritual", required: true } },
    { step: 45, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Como você imagina o futuro de vocês dois juntos? 🌅", type: "textarea", placeholder: "O que imagina…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    
    // Step 46: Estilo musical (principal)
    { step: 46, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 46_1: Sub-pergunta condicional
    { step: "46_1", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d["step_46"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: 47, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 48, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 49: Idioma (principal)
    { step: 49, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 49_1: Sub-pergunta condicional
    { step: "49_1", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d["step_49"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 50, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 51, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } }
];

// ============================================
// VERIFICAÇÃO
// ============================================

console.log('✅ elaboratedChatFlow carregado com sucesso!');
console.log('✅ Total de steps:', elaboratedChatFlow.length);
console.log('✅ Nomenclatura: 10, 10_1, 11 (SEM decimais!)');
console.log('✅ Pronto para usar!');
