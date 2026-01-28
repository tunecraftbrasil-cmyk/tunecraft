// ============================================
// CHAT_THEMES.JS v7 - DECIMAL HIERÁRQUICO
// Versão corrigida com nomenclatura 1.9 → 1.9.1 → 1.10
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
    { step: 1.1, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual é a relação com você? 💝", type: "input", placeholder: "Ex.: namorado(a), esposo(a), amigo(a)…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 1.2, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Como é a sua história com essa pessoa? 📖", type: "textarea", placeholder: "Nos conhecemos na faculdade…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1.3, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 1.4, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Conte uma cena real de vocês 🎬", type: "textarea", placeholder: "Concreta, onde estavam, o que aconteceu…", minLength: 20, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 1.5, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "3 palavras não-clichês para descrever essa pessoa 📝", type: "input", placeholder: "Ex.: teimosa do bem, riso fácil", minLength: 5, metadata: { fieldName: "recipient.personality", required: true } },
    { step: 1.6, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Um detalhe secreto ou piada interna entre vocês 🤫", type: "input", placeholder: "Piada interna, apelido…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 1.7, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "O que mais você admira nessa pessoa? ⭐", type: "textarea", placeholder: "Específico, não genérico…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 1.8, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual é seu desejo para o futuro dessa pessoa? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    
    // Step 1.9: Estilo musical (principal)
    { step: 1.9, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 1.9.1: Sub-pergunta condicional (SÓ SE 1.9 === "other")
    { step: 1.9.1, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d["step_1.9"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    // Step 1.10: Impacto (SEMPRE vem depois, com ou sem 1.9.1)
    { step: 1.10, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    
    { step: 1.11, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 1.12: Idioma (principal)
    { step: 1.12, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 1.12.1: Sub-pergunta condicional (SÓ SE 1.12 === "other")
    { step: 1.12.1, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d["step_1.12"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 1.13, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual tipo de voz você prefere ouvir cantando? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    
    { step: 1.14, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar clichês, termos genéricos…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 2: DECLARAÇÃO DE AMOR =====
    { step: 2, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Como essa pessoa entrou na sua vida? 💕", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 2.1, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "De que ponto de vista você quer fazer essa declaração? 🎤", type: "select", options: [
        { label: "💬 Para ela", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 2.2, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Quando você percebeu que era amor? ⚡", type: "textarea", placeholder: "Momento do 'clique'…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: 2.3, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que mudou em você desde que essa pessoa chegou? 🌱", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 2.4, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que você precisa dizer que ainda não disse? 💭", type: "textarea", placeholder: "Sincero e direto…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 2.5, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Descreva uma cena comum e especial de vocês 🎬", type: "textarea", placeholder: "Momento comum especial…", minLength: 15, metadata: { fieldName: "lyricDetails.simpleScene", required: true } },
    { step: 2.6, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual é um detalhe secreto ou piada interna entre vocês? 🤫", type: "input", placeholder: "Piada interna…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 2.7, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Complete a frase: 'Com você eu me sinto / consigo / aprendi a...' ❤️", type: "input", placeholder: "Complete a frase…", minLength: 3, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    
    // Step 2.8: Estilo musical (principal)
    { step: 2.8, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual estilo musical combina mais com essa declaração? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 2.8.1: Sub-pergunta condicional
    { step: 2.8.1, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration" && d["step_2.8"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: 2.9, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Que tipo de impacto emocional você quer causar com essa declaração? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 2.10, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 2.11: Idioma (principal)
    { step: 2.11, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 2.11.1: Sub-pergunta condicional
    { step: 2.11.1, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration" && d["step_2.11"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 2.12, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 2.13, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 3: PEDIDO DE CASAMENTO =====
    { step: 3, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Como vocês se conheceram? 💍", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 3.1, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual será o papel dessa música no pedido? 🎶", type: "select", options: [
        { label: "💍 É o pedido em si", value: "is_proposal" }, { label: "🎶 Abre espaço para o pedido", value: "opens_space" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "lyricDetails.proposalStyle", required: true } },
    { step: 3.2, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual é o momento de certeza de que quer casar com essa pessoa? ⚡", type: "textarea", placeholder: "Pra sempre…", minLength: 15, metadata: { fieldName: "lyricDetails.certaintyCue", required: true } },
    { step: 3.3, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Quais são 2 promessas reais que você quer fazer? 📝", type: "textarea", placeholder: "Uma por linha…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: 3.4, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Existe algum ritual especial que só vocês fazem? 🕯️", type: "input", placeholder: "Só vocês fazem…", minLength: 3, metadata: { fieldName: "lyricDetails.ritual", required: true } },
    { step: 3.5, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Como você imagina o futuro de vocês dois juntos? 🌅", type: "textarea", placeholder: "O que imagina…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    
    // Step 3.6: Estilo musical (principal)
    { step: 3.6, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    
    // ✅ Step 3.6.1: Sub-pergunta condicional
    { step: 3.6.1, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d["step_3.6"] === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    
    { step: 3.7, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 3.8, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    
    // Step 3.9: Idioma (principal)
    { step: 3.9, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    
    // ✅ Step 3.9.1: Sub-pergunta condicional
    { step: 3.9.1, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d["step_3.9"] === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    
    { step: 3.10, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 3.11, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } }
];

// ============================================
// PADRÃO PARA OUTROS TEMAS
// ============================================

/*
APLIQUE O MESMO PADRÃO PARA OS OUTROS TEMAS:

Quando tiver um step com opção "Outro":
- Step principal: { step: X.Y, condition: ..., type: "select", options: [..., "Outro"] }
- Step condicional: { step: X.Y.1, condition: (d) => d["step_X.Y"] === "other", ... }
- Próximo step: { step: X.Z (não X.Y.2!), condition: ... }

EXEMPLO:
{ step: 2.8, options: ["MPB", "Outro"] }        ← Principal
{ step: 2.8.1, condition: d["step_2.8"] === "other" }  ← Condicional
{ step: 2.9, ... }                               ← Próximo (não 2.8.2!)
*/

// ============================================
// EXPORT
// ============================================

export { elaboratedChatFlow, StepHierarchy };
