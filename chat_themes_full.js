// ============================================
// CHAT_THEMES.JS v9 - DECIMAL HIERÁRQUICO COM STRINGS
// Todos os 12 temas completos
// Usando "1.9.1" como STRING para evitar erro de syntax
// ============================================


// ===== HELPER CLASSES =====


class StepHierarchy {
  // Parse "1.9.1" para [1, 9, 1]
  parseStep = (stepId) => {
    return String(stepId)
      .split('.')
      .map(n => parseInt(n));
  }


  // Parent de "1.9.1" é "1.9"
  getParentStep = (stepId) => {
    const parts = this.parseStep(stepId);
    if (parts.length > 1) {
      return parts.slice(0, -1).join('.');
    }
    return null;
  }


  // Profundidade: "1.9.1" = 3, "1.9" = 2, "1" = 1
  getDepth = (stepId) => {
    return this.parseStep(stepId).length;
  }


  // É sub-step condicional? "1.9.1" = true, "1.9" = false
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
      return `${currentStep}.1`;
    }
    
    // Se é step normal sem "outro", vai para próximo
    return this.getNextMainStep(currentStep);
  }


  // Próximo step no nível 1 ou 2
  getNextMainStep = (stepId) => {
    const parts = this.parseStep(stepId);
    const lastPart = parts[parts.length - 1];
    parts[parts.length - 1] = lastPart + 1;
    return parts.join('.');
  }
}


// ===== MAIN DATA STRUCTURE =====


const elaboratedChatFlow = [
    // ===== BLOCO UNIVERSAL =====
    { step: "0", section: "TEMA", question: "Qual é o tema da música que você quer criar? 🎵", type: "select", options: [
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
    { step: "1", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Como essa pessoa se chama? 👤", type: "input", placeholder: "Ex.: Aline (Lili), João (Jô)", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "1.1", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual é a relação com você? 💝", type: "input", placeholder: "Ex.: namorado(a), esposo(a), amigo(a)…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: "1.2", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Como é a sua história com essa pessoa? 📖", type: "textarea", placeholder: "Nos conhecemos na faculdade…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "1.3", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: "1.4", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Conte uma cena real de vocês 🎬", type: "textarea", placeholder: "Concreta, onde estavam, o que aconteceu…", minLength: 20, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: "1.5", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "3 palavras não-clichês para descrever essa pessoa 📝", type: "input", placeholder: "Ex.: teimosa do bem, riso fácil", minLength: 5, metadata: { fieldName: "recipient.personality", required: true } },
    { step: "1.6", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Um detalhe secreto ou piada interna entre vocês 🤫", type: "input", placeholder: "Piada interna, apelido…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: "1.7", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "O que mais você admira nessa pessoa? ⭐", type: "textarea", placeholder: "Específico, não genérico…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: "1.8", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual é seu desejo para o futuro dessa pessoa? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    
    // Step 1.9: Estilo musical (principal)
    { step: "1.9", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 1.9.1: Sub-pergunta condicional (SÓ SE 1.9 === "other")
    { step: "1.9.1", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d["step_1.9"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    // Step 1.10: Impacto (SEMPRE vem depois, com ou sem 1.9.1)
    { step: "1.10", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    
    { step: "1.11", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 1.12: Idioma (principal)
    { step: "1.12", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 1.12.1: Sub-pergunta condicional (SÓ SE 1.12 === "other")
    { step: "1.12.1", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d["step_1.12"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "1.13", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual tipo de voz você prefere ouvir cantando? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    
    { step: "1.14", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar clichês, termos genéricos…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 2: DECLARAÇÃO DE AMOR =====
    { step: "2", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Como essa pessoa entrou na sua vida? 💕", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: "2.1", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "De que ponto de vista você quer fazer essa declaração? 🎤", type: "select", options: [
        { label: "💬 Para ela", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: "2.2", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Quando você percebeu que era amor? ⚡", type: "textarea", placeholder: "Momento do 'clique'…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: "2.3", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que mudou em você desde que essa pessoa chegou? 🌱", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: "2.4", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que você precisa dizer que ainda não disse? 💭", type: "textarea", placeholder: "Sincero e direto…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: "2.5", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Descreva uma cena comum e especial de vocês 🎬", type: "textarea", placeholder: "Momento comum especial…", minLength: 15, metadata: { fieldName: "lyricDetails.simpleScene", required: true } },
    { step: "2.6", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual é um detalhe secreto ou piada interna entre vocês? 🤫", type: "input", placeholder: "Piada interna…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: "2.7", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Complete a frase: 'Com você eu me sinto / consigo / aprendi a...' ❤️", type: "input", placeholder: "Complete a frase…", minLength: 3, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    
    // Step 2.8: Estilo musical (principal)
    { step: "2.8", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual estilo musical combina mais com essa declaração? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 2.8.1: Sub-pergunta condicional
    { step: "2.8.1", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration" && d["step_2.8"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "2.9", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Que tipo de impacto emocional você quer causar com essa declaração? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "2.10", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 2.11: Idioma (principal)
    { step: "2.11", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 2.11.1: Sub-pergunta condicional
    { step: "2.11.1", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration" && d["step_2.11"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "2.12", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "2.13", section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 3: PEDIDO DE CASAMENTO =====
    { step: "3", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Como vocês se conheceram? 💍", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: "3.1", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual será o papel dessa música no pedido? 🎶", type: "select", options: [
        { label: "💍 É o pedido em si", value: "is_proposal" }, { label: "🎶 Abre espaço para o pedido", value: "opens_space" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "lyricDetails.proposalStyle", required: true } },
    { step: "3.2", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual é o momento de certeza de que quer casar com essa pessoa? ⚡", type: "textarea", placeholder: "Pra sempre…", minLength: 15, metadata: { fieldName: "lyricDetails.certaintyCue", required: true } },
    { step: "3.3", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Quais são 2 promessas reais que você quer fazer? 📝", type: "textarea", placeholder: "Uma por linha…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: "3.4", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Existe algum ritual especial que só vocês fazem? 🕯️", type: "input", placeholder: "Só vocês fazem…", minLength: 3, metadata: { fieldName: "lyricDetails.ritual", required: true } },
    { step: "3.5", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Como você imagina o futuro de vocês dois juntos? 🌅", type: "textarea", placeholder: "O que imagina…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    
    // Step 3.6: Estilo musical (principal)
    { step: "3.6", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 3.6.1: Sub-pergunta condicional
    { step: "3.6.1", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d["step_3.6"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "3.7", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "3.8", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 3.9: Idioma (principal)
    { step: "3.9", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 3.9.1: Sub-pergunta condicional
    { step: "3.9.1", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d["step_3.9"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "3.10", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "3.11", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 4: NASCIMENTO DE FILHO =====
    { step: "4", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Como vocês pensam em chamar o(a) filho(a)? 👶", type: "input", placeholder: "Nome ou apelido…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "4.1", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Como vocês imaginam o futuro dessa criança? 🌈", type: "textarea", placeholder: "Esperanças e sonhos…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "4.2", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Que valores vocês querem passar? 💫", type: "textarea", placeholder: "Valores importantes…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: "4.3", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Como a chegada muda sua vida? 🏡", type: "textarea", placeholder: "Transformação familiar…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: "4.4", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Alguma promessa que faz para essa criança? 🤝", type: "textarea", placeholder: "Promessas e compromissos…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    
    { step: "4.5", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "4.5.1", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child" && d["step_4.5"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "4.6", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "4.7", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "4.8", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "4.8.1", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child" && d["step_4.8"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "4.9", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "4.10", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 5: HOMENAGEM =====
    { step: "5", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Quem você quer homenagear? 🌟", type: "input", placeholder: "Nome da pessoa…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "5.1", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Qual é sua relação com essa pessoa? 💝", type: "input", placeholder: "Relação…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: "5.2", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Por que quer homenagear? 💭", type: "textarea", placeholder: "Motivos…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "5.3", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Histórias marcantes? 📖", type: "textarea", placeholder: "Momentos importantes…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: "5.4", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Qualidades admiráveis? ⭐", type: "textarea", placeholder: "Qualidades…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: "5.5", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Legado dessa pessoa? 🎯", type: "textarea", placeholder: "Impacto…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    
    { step: "5.6", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "5.6.1", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute" && d["step_5.6"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "5.7", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "5.8", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "5.9", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "5.9.1", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute" && d["step_5.9"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "5.10", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "5.11", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 6: AMIZADE =====
    { step: "6", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Quem é seu(sua) amigo(a)? 👥", type: "input", placeholder: "Nome…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "6.1", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Como se conheceram? 📖", type: "textarea", placeholder: "História…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: "6.2", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Momentos especiais? ✨", type: "textarea", placeholder: "Memórias…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: "6.3", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "O que essa amizade significa? 💫", type: "textarea", placeholder: "Significado…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "6.4", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Qualidades do amigo? ⭐", type: "textarea", placeholder: "Qualidades…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    
    { step: "6.5", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "6.5.1", section: "AMIZADE", condition: (d) => d.step_0 === "friendship" && d["step_6.5"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "6.6", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "6.7", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "6.8", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "6.8.1", section: "AMIZADE", condition: (d) => d.step_0 === "friendship" && d["step_6.8"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "6.9", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "6.10", section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 7: ANÚNCIO DE GRAVIDEZ =====
    { step: "7", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Para quem é o anúncio? 👨‍👩‍👧", type: "input", placeholder: "Nome…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "7.1", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Como descobriu? 🎉", type: "textarea", placeholder: "Momento da descoberta…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: "7.2", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Como se sente? 💕", type: "textarea", placeholder: "Sentimentos…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "7.3", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Expectativas? 🌈", type: "textarea", placeholder: "Esperanças…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    { step: "7.4", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Mensagem especial? 💌", type: "textarea", placeholder: "Mensagem…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    
    { step: "7.5", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "7.5.1", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement" && d["step_7.5"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "7.6", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "7.7", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "7.8", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "7.8.1", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement" && d["step_7.8"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "7.9", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "7.10", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 8: MÚSICA PARA PET =====
    { step: "8", section: "PET", condition: (d) => d.step_0 === "pet", question: "Nome do seu pet? 🐾", type: "input", placeholder: "Nome…", minLength: 1, metadata: { fieldName: "recipient.name", required: true } },
    { step: "8.1", section: "PET", condition: (d) => d.step_0 === "pet", question: "Que tipo de pet? 🐶", type: "input", placeholder: "Cachorro, gato, etc…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: "8.2", section: "PET", condition: (d) => d.step_0 === "pet", question: "Características especiais? 🎨", type: "textarea", placeholder: "Personalidade…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: "8.3", section: "PET", condition: (d) => d.step_0 === "pet", question: "Memórias marcantes? 📸", type: "textarea", placeholder: "Momentos…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "8.4", section: "PET", condition: (d) => d.step_0 === "pet", question: "Mensagem pro seu pet? 💌", type: "textarea", placeholder: "O que quer dizer…", minLength: 15, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    
    { step: "8.5", section: "PET", condition: (d) => d.step_0 === "pet", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "8.5.1", section: "PET", condition: (d) => d.step_0 === "pet" && d["step_8.5"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "8.6", section: "PET", condition: (d) => d.step_0 === "pet", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "8.7", section: "PET", condition: (d) => d.step_0 === "pet", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "8.8", section: "PET", condition: (d) => d.step_0 === "pet", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "8.8.1", section: "PET", condition: (d) => d.step_0 === "pet" && d["step_8.8"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "8.9", section: "PET", condition: (d) => d.step_0 === "pet", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "8.10", section: "PET", condition: (d) => d.step_0 === "pet", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 9: NASCIMENTO DE NETO =====
    { step: "9", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Nome do(a) neto(a)? 👶", type: "input", placeholder: "Nome…", minLength: 1, metadata: { fieldName: "recipient.name", required: true } },
    { step: "9.1", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Como se sente sendo avó(ó)? 💕", type: "textarea", placeholder: "Sentimentos…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "9.2", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Mudança na sua vida? 🌈", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: "9.3", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Promessas pro neto(a)? 🤝", type: "textarea", placeholder: "Promessas…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: "9.4", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Legado que quer deixar? 🎯", type: "textarea", placeholder: "Legado…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    
    { step: "9.5", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "9.5.1", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild" && d["step_9.5"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "9.6", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "9.7", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "9.8", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "9.8.1", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild" && d["step_9.8"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "9.9", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "9.10", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 10: ORAÇÃO =====
    { step: "10", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Qual tipo de oração? 🙏", type: "input", placeholder: "Tipo…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "10.1", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Intenção da oração? 💫", type: "textarea", placeholder: "Intenção…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "10.2", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Por quem é? 🕯️", type: "input", placeholder: "Pessoa ou causa…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "10.3", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Mensagem espiritual? ✨", type: "textarea", placeholder: "Mensagem…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    
    { step: "10.4", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "10.4.1", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer" && d["step_10.4"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "10.5", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "10.6", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "10.7", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "10.7.1", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer" && d["step_10.7"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "10.8", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "10.9", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 11: CORPORATIVA =====
    { step: "11", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Qual é o tema corporativo? 🏢", type: "input", placeholder: "Tema…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "11.1", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Qual é a empresa? 🏭", type: "input", placeholder: "Nome empresa…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: "11.2", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Missão/Visão? 🎯", type: "textarea", placeholder: "Objetivos…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "11.3", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "História da empresa? 📖", type: "textarea", placeholder: "Contexto…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: "11.4", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Valores principais? ⭐", type: "textarea", placeholder: "Valores…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    
    { step: "11.5", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "11.5.1", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate" && d["step_11.5"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "11.6", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "11.7", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "11.8", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "11.8.1", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate" && d["step_11.8"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "11.9", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "11.10", section: "CORPORATIVA", condition: (d) => d.step_0 === "corporate", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },


    // ===== TEMA 12: OUTRO =====
    { step: "12", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Descreva seu tema? ✨", type: "textarea", placeholder: "Descreva…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: "12.1", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Quem é o destinatário? 👥", type: "input", placeholder: "Para quem…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: "12.2", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Contexto/história? 📖", type: "textarea", placeholder: "Contexto…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: "12.3", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Tom/estilo da mensagem? 🎭", type: "textarea", placeholder: "Tom…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    
    { step: "12.4", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    { step: "12.4.1", section: "OUTRO", condition: (d) => d.step_0 === "other" && d["step_12.4"] === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: "12.5", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: "12.6", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    { step: "12.7", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    { step: "12.7.1", section: "OUTRO", condition: (d) => d.step_0 === "other" && d["step_12.7"] === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: "12.8", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: "12.9", section: "OUTRO", condition: (d) => d.step_0 === "other", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } }
];


// ============================================
// EXPORT
// ============================================

export { elaboratedChatFlow, StepHierarchy };
