// ============================================
// CHAT_THEMES_COMPLETO.JS - TODOS OS 12 TEMAS
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
    { step: 108, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Qual seu desejo para o futuro dessa pessoa? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
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
    { step: "109.5", section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday" && d.step_109 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
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
    { step: 112, section: "ANIVERSÁRIO", condition: (d) => d.step_0 === "birthday", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
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
    { step: 212, section: "DECL. AMOR", condition: (d) => d.step_0 === "love_declaration", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, 
        { label: "🇺🇸 EN", value: "en" }, 
        { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
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
    { step: 310, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, 
        { label: "🇺🇸 EN", value: "en" }, 
        { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "310.5", section: "CASAMENTO", condition: (d) => d.step_0 === "proposal" && d.step_310 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 311, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 312, section: "CASAMENTO", condition: (d) => d.step_0 === "proposal", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 4: NASCIMENTO DE FILHO (400-410) =====
    { step: 400, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Como vão chamar o(a) filhão(a)? 👶", type: "input", placeholder: "Nome ou apelido", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 401, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Como vocês imaginam o futuro dessa criança? 🌟", type: "textarea", placeholder: "Esperanças e sonhos…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 402, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Que valores vocês querem passar? 💫", type: "textarea", placeholder: "Valores importantes…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 403, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Como a chegada muda sua vida? 🏡", type: "textarea", placeholder: "Transformação familiar…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 404, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Alguma promessa que faz para essa criança? 🤝", type: "textarea", placeholder: "Promessas e compromissos…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: 405, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "405.5", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child" && d.step_405 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 406, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 407, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 408, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "408.5", section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child" && d.step_408 === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 409, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 410, section: "NASCIMENTO", condition: (d) => d.step_0 === "birth_child", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 5: HOMENAGEM (500-510) =====
    { step: 500, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Quem você quer homenagear? 👤", type: "input", placeholder: "Nome da pessoa", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 501, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Qual sua relação com essa pessoa? 💝", type: "input", placeholder: "Relação…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 502, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Por que quer homenagear? 🎯", type: "textarea", placeholder: "Motivos…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 503, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Histórias marcantes? 📖", type: "textarea", placeholder: "Momentos importantes…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 504, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Qualidades admiráveis? ⭐", type: "textarea", placeholder: "Qualidades…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 505, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Legado dessa pessoa? 🌟", type: "textarea", placeholder: "Impacto…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 506, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "506.5", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute" && d.step_506 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 507, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 508, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 509, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "509.5", section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute" && d.step_509 === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 510, section: "HOMENAGEM", condition: (d) => d.step_0 === "tribute", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 6: AMIZADE (600-610) =====
    { step: 600, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Quem é seu(sua) amigo(a)? 👤", type: "input", placeholder: "Nome…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 601, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Como se conheceram? 📖", type: "textarea", placeholder: "História…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 602, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Momentos especiais? 🎬", type: "textarea", placeholder: "Memórias…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 603, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "O que essa amizade significa? 💝", type: "textarea", placeholder: "Significado…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 604, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Qualidades do(a) amigo(a)? ⭐", type: "textarea", placeholder: "Qualidades…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 605, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "605.5", section: "AMIZADE", condition: (d) => d.step_0 === "friendship" && d.step_605 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 606, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 607, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 608, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "608.5", section: "AMIZADE", condition: (d) => d.step_0 === "friendship" && d.step_608 === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 609, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 610, section: "AMIZADE", condition: (d) => d.step_0 === "friendship", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 7: ANÚNCIO DE GRAVIDEZ (700-709) =====
    { step: 700, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Para quem é o anúncio? 👤", type: "input", placeholder: "Nome…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 701, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Como descobriu? 💫", type: "textarea", placeholder: "Momento da descoberta…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: 702, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Como se sente? 💝", type: "textarea", placeholder: "Sentimentos…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 703, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Expectativas? 🌟", type: "textarea", placeholder: "Esperanças…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    { step: 704, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Mensagem especial? 💬", type: "textarea", placeholder: "Mensagem…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 705, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "705.5", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement" && d.step_705 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 706, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 707, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 708, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "708.5", section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement" && d.step_708 === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 709, section: "GRAVIDEZ", condition: (d) => d.step_0 === "pregnancy_announcement", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 8: PET (800-809) =====
    { step: 800, section: "PET", condition: (d) => d.step_0 === "pet", question: "Nome do seu pet? 🐾", type: "input", placeholder: "Nome…", minLength: 1, metadata: { fieldName: "recipient.name", required: true } },
    { step: 801, section: "PET", condition: (d) => d.step_0 === "pet", question: "Que tipo de pet? 🐶🐱", type: "input", placeholder: "Cachorro, gato, etc…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 802, section: "PET", condition: (d) => d.step_0 === "pet", question: "Características especiais? 🌟", type: "textarea", placeholder: "Personalidade…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 803, section: "PET", condition: (d) => d.step_0 === "pet", question: "Memórias marcantes? 📖", type: "textarea", placeholder: "Momentos…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 804, section: "PET", condition: (d) => d.step_0 === "pet", question: "Mensagem pro seu pet? 💬", type: "textarea", placeholder: "O que quer dizer…", minLength: 15, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    { step: 805, section: "PET", condition: (d) => d.step_0 === "pet", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "805.5", section: "PET", condition: (d) => d.step_0 === "pet" && d.step_805 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 806, section: "PET", condition: (d) => d.step_0 === "pet", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 807, section: "PET", condition: (d) => d.step_0 === "pet", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 808, section: "PET", condition: (d) => d.step_0 === "pet", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "808.5", section: "PET", condition: (d) => d.step_0 === "pet" && d.step_808 === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 809, section: "PET", condition: (d) => d.step_0 === "pet", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 9: NETO (900-909) =====
    { step: 900, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Nome do(a) neto(a)? 👶", type: "input", placeholder: "Nome…", minLength: 1, metadata: { fieldName: "recipient.name", required: true } },
    { step: 901, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Como se sente sendo avó? 💝", type: "textarea", placeholder: "Sentimentos…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 902, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Mudança na sua vida? 🌟", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 903, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Promessas pro neto(a)? 🤝", type: "textarea", placeholder: "Promessas…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: 904, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Legado que quer deixar? 🏆", type: "textarea", placeholder: "Legado…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    { step: 905, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "905.5", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild" && d.step_905 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 906, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 907, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 908, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "908.5", section: "NETO", condition: (d) => d.step_0 === "birth_grandchild" && d.step_908 === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 909, section: "NETO", condition: (d) => d.step_0 === "birth_grandchild", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 10: ORAÇÃO (1000-1008) =====
    { step: 1000, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Qual tipo de oração? 🙏", type: "input", placeholder: "Tipo…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 1001, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Intenção da oração? 💫", type: "textarea", placeholder: "Intenção…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1002, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Por quem é? 👤", type: "input", placeholder: "Pessoa ou causa…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 1003, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Mensagem espiritual? ✨", type: "textarea", placeholder: "Mensagem…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 1004, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "1004.5", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer" && d.step_1004 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 1005, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1006, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1007, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "1007.5", section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer" && d.step_1007 === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 1008, section: "ORAÇÃO", condition: (d) => d.step_0 === "prayer", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 11: CORPORATIVO (1100-1108) =====
    { step: 1100, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Nome da empresa? 🏢", type: "input", placeholder: "Empresa…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 1101, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Segmento / Ramo? 🎯", type: "input", placeholder: "Ramo…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 1102, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Missão / Visão? 🌟", type: "textarea", placeholder: "Missão…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1103, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Valores da empresa? 💎", type: "textarea", placeholder: "Valores…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 1104, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Mensagem para o público? 📢", type: "textarea", placeholder: "Mensagem…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 1105, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "1105.5", section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate" && d.step_1105 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 1106, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1107, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1108, section: "CORPORATIVO", condition: (d) => d.step_0 === "corporate", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 12: OUTRO (1200-1208) =====
    { step: 1200, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Descreva seu tema custom? 🎭", type: "textarea", placeholder: "Qual é a ideia…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1201, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Para quem é a música? 👤", type: "input", placeholder: "Pessoa ou grupo…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 1202, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Detalhes importantes? 📝", type: "textarea", placeholder: "Detalhes…", minLength: 15, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 1203, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Estilo musical? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, 
        { label: "🤠 Sertanejo", value: "sertanejo" }, 
        { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, 
        { label: "🎸 Rock", value: "rock" }, 
        { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, 
        { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: "1203.5", section: "OUTRO", condition: (d) => d.step_0 === "other" && d.step_1203 === "other", question: "Qual outro estilo? 🎸", type: "input", placeholder: "Estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 1204, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Impacto emocional? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, 
        { label: "☮️ Paz", value: "peace" }, 
        { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, 
        { label: "🌅 Esperança", value: "hope" }, 
        { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1205, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Tipo de movimento? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, 
        { label: "⚖️ Equilibrada", value: "balanced" }, 
        { label: "📈 Intensa", value: "intense" }, 
        { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1206, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Idioma? 🌍", type: "select", options: [
        { label: "🇧🇷 Português", value: "pt_br" }, 
        { label: "🇺🇸 Inglês", value: "en" }, 
        { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, 
        { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: "1206.5", section: "OUTRO", condition: (d) => d.step_0 === "other" && d.step_1206 === "other", question: "Qual outro idioma? 🌍", type: "input", placeholder: "Idioma…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 1207, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "Tipo de voz? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, 
        { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, 
        { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, 
        { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 1208, section: "OUTRO", condition: (d) => d.step_0 === "other", question: "O que evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } }
];

console.log('✅ chat_themes_completo.js carregado!');
console.log('✅ Total de steps:', elaboratedChatFlow.length);
console.log('✅ Temas disponíveis: 12 completos');
console.log('✅ Funcionando em seu login.html agora!');
