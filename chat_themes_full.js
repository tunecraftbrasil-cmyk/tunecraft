// ============================================
// CHAT_THEMES.JS v6 - TODOS OS 12 TEMAS COM "OUTRO" CUSTOMIZADO
// Importar após chat_main.js
// ============================================

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

    // ===== TEMA 1: ANIVERSÁRIO (15 perguntas) =====
    { step: 1, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Como essa pessoa se chama? 👤", type: "input", placeholder: "Ex.: Aline (Lili), João (Jô)", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 1.1, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual é a relação com você? 💝", type: "input", placeholder: "Ex.: namorado(a), esposo(a), amigo(a)…", minLength: 2, metadata: { fieldName: "ai_metadata.relationship", required: true } },
    { step: 1.2, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Como é a sua história com essa pessoa? 📖", type: "textarea", placeholder: "Nos conhecemos na faculdade…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 1.3, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 1.4, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Conte uma cena real de vocês 🎬", type: "textarea", placeholder: "Concreta, onde estavam, o que aconteceu…", minLength: 20, metadata: { fieldName: "lyricDetails.specialMentions", required: true } },
    { step: 1.5, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "3 palavras não-clichês para descrever essa pessoa 📝", type: "input", placeholder: "Ex.: teimosa do bem, riso fácil", minLength: 5, metadata: { fieldName: "recipient.personality", required: true } },
    { step: 1.6, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Um detalhe secreto ou piada interna entre vocês 🤫", type: "input", placeholder: "Piada interna, apelido…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 1.7, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "O que mais você admira nessa pessoa? ⭐", type: "textarea", placeholder: "Específico, não genérico…", minLength: 15, metadata: { fieldName: "recipient.specialCharacteristics", required: true } },
    { step: 1.8, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual é seu desejo para o futuro dessa pessoa? 🌟", type: "textarea", placeholder: "Planos, sonhos…", minLength: 15, metadata: { fieldName: "final.futureWish", required: true } },
    { step: 1.9, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 1.9_outro, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday" && d.step1_9 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 1.10, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 1.11, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 1.12, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 Português (BR)", value: "pt_br" }, { label: "🇺🇸 Inglês", value: "en" }, { label: "🇪🇸 Espanhol", value: "es" },
        { label: "🇮🇹 Italiano", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 1.12_outro, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday" && d.step1_12 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 1.13, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "Qual tipo de voz você prefere ouvir cantando? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 1.14, section: "ANIVERSÁRIO", condition: (d) => d.step0 === "birthday", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar clichês, termos genéricos…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 2: DECLARAÇÃO DE AMOR (13 perguntas) =====
    { step: 2, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Como essa pessoa entrou na sua vida? 💕", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 2.1, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "De que ponto de vista você quer fazer essa declaração? 🎤", type: "select", options: [
        { label: "💬 Para ela", value: "second_person" }, { label: "🌍 Sobre ela", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 2.2, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Quando você percebeu que era amor? ⚡", type: "textarea", placeholder: "Momento do 'clique'…", minLength: 15, metadata: { fieldName: "lyricDetails.turningPoint", required: true } },
    { step: 2.3, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "O que mudou em você desde que essa pessoa chegou? 🌱", type: "textarea", placeholder: "Transformação…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 2.4, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "O que você precisa dizer que ainda não disse? 💭", type: "textarea", placeholder: "Sincero e direto…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 2.5, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Descreva uma cena comum e especial de vocês 🎬", type: "textarea", placeholder: "Momento comum especial…", minLength: 15, metadata: { fieldName: "lyricDetails.simpleScene", required: true } },
    { step: 2.6, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Qual é um detalhe secreto ou piada interna entre vocês? 🤫", type: "input", placeholder: "Piada interna…", minLength: 3, metadata: { fieldName: "lyricDetails.secretDetail", required: true } },
    { step: 2.7, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Complete a frase: 'Com você eu me sinto / consigo / aprendi a...' ❤️", type: "input", placeholder: "Complete a frase…", minLength: 3, metadata: { fieldName: "lyricDetails.withYouI", required: true } },
    { step: 2.8, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Qual estilo musical combina mais com essa declaração? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 2.8_outro, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration" && d.step2_8 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 2.9, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Que tipo de impacto emocional você quer causar com essa declaração? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 2.10, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Qual tipo de movimento você prefere para essa música? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 2.11, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 2.11_outro, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration" && d.step2_11 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 2.12, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 2.13, section: "DECL. AMOR", condition: (d) => d.step0 === "love_declaration", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 3: PEDIDO DE CASAMENTO (11 perguntas) =====
    { step: 3, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Como vocês se conheceram? 💍", type: "textarea", placeholder: "Conte a história…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 3.1, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual será o papel dessa música no pedido? 🎶", type: "select", options: [
        { label: "💍 É o pedido em si", value: "is_proposal" }, { label: "🎶 Abre espaço para o pedido", value: "opens_space" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "lyricDetails.proposalStyle", required: true } },
    { step: 3.2, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual é o momento de certeza de que quer casar com essa pessoa? ⚡", type: "textarea", placeholder: "Pra sempre…", minLength: 15, metadata: { fieldName: "lyricDetails.certaintyCue", required: true } },
    { step: 3.3, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Quais são 2 promessas reais que você quer fazer? 📝", type: "textarea", placeholder: "Uma por linha…", minLength: 15, metadata: { fieldName: "lyricDetails.promises", required: true } },
    { step: 3.4, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Existe algum ritual especial que só vocês fazem? 🕯️", type: "input", placeholder: "Só vocês fazem…", minLength: 3, metadata: { fieldName: "lyricDetails.ritual", required: true } },
    { step: 3.5, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Como você imagina o futuro de vocês dois juntos? 🌅", type: "textarea", placeholder: "O que imagina…", minLength: 15, metadata: { fieldName: "lyricDetails.futureVision", required: true } },
    { step: 3.6, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 3.6_outro, section: "CASAMENTO", condition: (d) => d.step0 === "proposal" && d.step3_6 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 3.7, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 3.8, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 3.9, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 3.9_outro, section: "CASAMENTO", condition: (d) => d.step0 === "proposal" && d.step3_9 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 3.10, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 3.11, section: "CASAMENTO", condition: (d) => d.step0 === "proposal", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 4: NASCIMENTO DE FILHO(A) - MÚSICA PARA A VIDA (16 perguntas) =====
    { step: 4, section: "FILHO", condition: (d) => d.step0 === "birth_child", question: "Que tipo de música você quer criar? 🎵", type: "select", options: [
        { label: "🎶 Música para a vida", value: "life_song" }, { label: "🌙 Canção de ninar", value: "lullaby" }
    ], metadata: { fieldName: "ai_metadata.subThemeId", required: true } },
    { step: 4.1, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Quem está falando? 👥", type: "select", options: [
        { label: "👨 Pai", value: "father" }, { label: "👩 Mãe", value: "mother" }, { label: "👨‍👩‍👧 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.creatorRole", required: true } },
    { step: 4.1_outro, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song" && d.step4_1 === "other", question: "Quem especificamente está falando? 👥", type: "input", placeholder: "Ex.: Avó, padrinho…", minLength: 2, metadata: { fieldName: "ai_metadata.creatorRoleOther", required: true } },
    { step: 4.2, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "O bebê já nasceu? 👶", type: "select", options: [
        { label: "✅ Já nasceu", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 4.3, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Nome ou apelido? 🎤", type: "input", placeholder: "Como chamam?", minLength: 1, metadata: { fieldName: "recipient.babyName", required: true } },
    { step: 4.4, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "O que você sentiu ao descobrir? 💭", type: "textarea", placeholder: "Emoções naquele momento…", minLength: 15, metadata: { fieldName: "lyricDetails.firstFeeling", required: true } },
    { step: 4.5, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Conte uma cena marcante dessa fase (teste, ultrassom, abraço, etc.). 🎬", type: "textarea", placeholder: "Teste, ultrassom, abraço…", minLength: 15, metadata: { fieldName: "lyricDetails.markantScene", required: true } },
    { step: 4.6, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Se fosse uma carta para o futuro dessa criança, o que precisaria dizer? 📜", type: "textarea", placeholder: "O que essa criança deve saber aos 15…", minLength: 20, metadata: { fieldName: "lyricDetails.letterToFuture", required: true } },
    { step: 4.7, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual é o valor principal que você quer transmitir? ✨", type: "input", placeholder: "Coragem, bondade, autenticidade…", minLength: 3, metadata: { fieldName: "lyricDetails.coreValue", required: true } },
    { step: 4.8, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual é um detalhe simbólico importante? 🌟", type: "input", placeholder: "Lugar, frase, objeto, música…", minLength: 3, metadata: { fieldName: "lyricDetails.symbolicDetail", required: true } },
    { step: 4.9, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual estilo musical combina mais com essa música? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 4.9_outro, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song" && d.step4_9 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 4.10, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual impacto emocional você quer que essa música cause? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 4.11, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 4.12, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 4.12_outro, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song" && d.step4_12 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 4.13, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 4.14, section: "FILHO", condition: (d) => d.step0 === "birth_child" && d.step4 === "life_song", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 4B: NASCIMENTO DE FILHO(A) - CANÇÃO DE NINAR =====
    { step: 4.1b, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Quem canta? 👥", type: "select", options: [
        { label: "👨 Pai", value: "father" }, { label: "👩 Mãe", value: "mother" }, { label: "👨‍👩‍👧 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.creatorRole", required: true } },
    { step: 4.1b_outro, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby" && d.step4_1b === "other", question: "Quem especificamente canta? 👥", type: "input", placeholder: "Ex.: Avó, padrinha…", minLength: 2, metadata: { fieldName: "ai_metadata.creatorRoleOther", required: true } },
    { step: 4.2b, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Já nasceu? 👶", type: "select", options: [
        { label: "✅ Já", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 4.3b, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Nome do bebê? 🎤", type: "input", placeholder: "Como chamam?", minLength: 1, metadata: { fieldName: "recipient.babyName", required: true } },
    { step: 4.15, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Apelido carinhoso? 💕", type: "input", placeholder: "Bebê, neném, filho(a)…", minLength: 1, metadata: { fieldName: "recipient.babyNickname", required: true } },
    { step: 4.16, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual sensação você quer que predomine? 🛡️", type: "select", options: [
        { label: "🛡️ Segurança", value: "security" }, { label: "☮️ Paz", value: "peace" }, { label: "🤗 Aconchego", value: "warmth" }
    ], metadata: { fieldName: "lyricDetails.sensation", required: true } },
    { step: 4.17, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Que sensação essa música deve trazer na hora de dormir? 😴", type: "textarea", placeholder: "Protegida, tudo bem, amada…", minLength: 15, metadata: { fieldName: "lyricDetails.sleepPurpose", required: true } },
    { step: 4.18, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual palavra-chave pode ser um mantra de calma na música? 🔄", type: "input", placeholder: "Paz, luz, sonho, amor…", minLength: 2, metadata: { fieldName: "lyricDetails.anchorWord", required: true } },
    { step: 4.19, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual estilo musical combina mais? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 4.19_outro, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby" && d.step4_19 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 4.20, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 4.21, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 4.22, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 4.22_outro, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby" && d.step4_22 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 4.23, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 4.24, section: "NINAR", condition: (d) => d.step0 === "birth_child" && d.step4 === "lullaby", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 5: HOMENAGEM (14 perguntas) =====
    { step: 5, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Quem você quer homenagear? 👤", type: "input", placeholder: "Meu pai João, minha mãe…", minLength: 3, metadata: { fieldName: "recipient.name", required: true } },
    { step: 5.1, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Conte a história da relação de vocês 📖", type: "textarea", placeholder: "Como era? O que representou…", minLength: 20, metadata: { fieldName: "lyricDetails.relationshipHistory", required: true } },
    { step: 5.2, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "De que ponto de vista você quer contar essa homenagem? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre essa pessoa", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 5.3, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual foi a maior lição que essa pessoa te deixou? 💡", type: "textarea", placeholder: "Ensinamento que mudou a vida…", minLength: 15, metadata: { fieldName: "lyricDetails.biggestLesson", required: true } },
    { step: 5.4, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual é um sacrifício invisível que essa pessoa fez? 💔", type: "textarea", placeholder: "Algo que talvez ninguém veja…", minLength: 15, metadata: { fieldName: "lyricDetails.invisibleSacrifice", required: true } },
    { step: 5.5, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Descreva uma cena cotidiana especial 🎬", type: "textarea", placeholder: "Gesto, hábito, cheiro, frase…", minLength: 15, metadata: { fieldName: "lyricDetails.dailyScene", required: true } },
    { step: 5.6, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Obrigado por… (seja específico) 🙏", type: "textarea", placeholder: "Seja específico…", minLength: 15, metadata: { fieldName: "lyricDetails.gratitude", required: true } },
    { step: 5.7, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Essa homenagem é para alguém em vida ou em memória? 💫", type: "select", options: [
        { label: "💚 Em vida", value: "alive" }, { label: "💫 Em memória", value: "memory" }
    ], metadata: { fieldName: "ai_metadata.lifeStatus", required: true } },
    { step: 5.8, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 5.8_outro, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute" && d.step5_8 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 5.9, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 5.10, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 5.11, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 5.11_outro, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute" && d.step5_11 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 5.12, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 5.13, section: "HOMENAGEM", condition: (d) => d.step0 === "tribute", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 6: AMIZADE (13 perguntas) =====
    { step: 6, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Como se chama essa pessoa? 👤", type: "input", placeholder: "Bruno (Bru), Mariana (Mari)…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 6.1, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Como essa amizade começou? 📖", type: "textarea", placeholder: "Onde, por que conectaram…", minLength: 15, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 6.2, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre essa pessoa", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 6.3, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual foi o momento que provou a amizade entre vocês? 💎", type: "textarea", placeholder: "Pensou: essa pessoa é família…", minLength: 15, metadata: { fieldName: "lyricDetails.proofMoment", required: true } },
    { step: 6.4, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual foi um desafio que vocês venceram juntos? 💪", type: "textarea", placeholder: "Pequeno ou grande, significativo…", minLength: 15, metadata: { fieldName: "lyricDetails.sharedChallenge", required: true } },
    { step: 6.5, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual é a piada interna entre vocês? 😄", type: "input", placeholder: "Só vocês entendem…", minLength: 3, metadata: { fieldName: "lyricDetails.insideJoke", required: true } },
    { step: 6.6, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual qualidade dessa pessoa você mais admira? ⭐", type: "input", placeholder: "Lealdade, coragem, humor…", minLength: 3, metadata: { fieldName: "lyricDetails.admiredQuality", required: true } },
    { step: 6.7, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Pelo que exatamente vocês estariam brindando nessa amizade? 🥂", type: "textarea", placeholder: "Pelo riso, parceria, recomeços…", minLength: 15, metadata: { fieldName: "lyricDetails.toast", required: true } },
    { step: 6.8, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 6.8_outro, section: "AMIZADE", condition: (d) => d.step0 === "friendship" && d.step6_8 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 6.9, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 6.10, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 6.11, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 6.11_outro, section: "AMIZADE", condition: (d) => d.step0 === "friendship" && d.step6_11 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 6.12, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 6.13, section: "AMIZADE", condition: (d) => d.step0 === "friendship", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 7: ANÚNCIO DE GRAVIDEZ (15 perguntas) =====
    { step: 7, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Para quem você quer fazer esse anúncio? 👥", type: "select", options: [
        { label: "Esposo(a)/parceiro(a)", value: "spouse" }, { label: "Meus pais", value: "parents" }, { label: "Sogros", value: "in_laws" },
        { label: "Família toda", value: "family" }, { label: "Amigos(as)", value: "friends" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.audience", required: true } },
    { step: 7.1, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement" && d.step7 === "other", question: "Para quem especificamente? 🎯", type: "input", placeholder: "Irmãos, chefe, grupo…", minLength: 3, metadata: { fieldName: "ai_metadata.audienceOther", required: true } },
    { step: 7.2, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Quem fala nessa música? 🎤", type: "select", options: [
        { label: "Gestante", value: "pregnant" }, { label: "Parceiro(a)", value: "partner" }, { label: "Casal", value: "couple" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.narratorRole", required: true } },
    { step: 7.2_outro, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement" && d.step7_2 === "other", question: "Quem especificamente fala? 🎤", type: "input", placeholder: "Ex.: Mãe, melhor amiga…", minLength: 2, metadata: { fieldName: "ai_metadata.narratorRoleOther", required: true } },
    { step: 7.3, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Em qual momento vocês estão? 🤰", type: "select", options: [
        { label: "Descobrimos há pouco", value: "just_discovered" }, { label: "Já contamos pra alguns", value: "told_some" }, { label: "Ainda ninguém sabe", value: "secret" }, { label: "Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.pregnancyStage", required: true } },
    { step: 7.3_outro, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement" && d.step7_3 === "other", question: "Em qual outro momento vocês estão? 🤰", type: "input", placeholder: "Descreva…", minLength: 2, metadata: { fieldName: "ai_metadata.pregnancyStageOther", required: true } },
    { step: 7.4, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Conte a história dessa gravidez até aqui (planejado, surpresa, tentativas, etc.). 📖", type: "textarea", placeholder: "Planejado, surpresa, tentativa longa…", minLength: 15, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 7.5, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Descreva a cena em que descobriram 🎬", type: "textarea", placeholder: "Cena concreta…", minLength: 15, metadata: { fieldName: "lyricDetails.scene", required: true } },
    { step: 7.6, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual reação emocional você quer que a pessoa tenha? 💖", type: "textarea", placeholder: "Surpresa, choro, alegria…", minLength: 15, metadata: { fieldName: "lyricDetails.desiredImpact", required: true } },
    { step: 7.7, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Existe um detalhe simbólico importante? 🌟", type: "input", placeholder: "Apelido, data, objeto…", minLength: 3, metadata: { fieldName: "lyricDetails.symbolicDetail", required: true } },
    { step: 7.8, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual frase você imagina usando na música para anunciar a gravidez? 💬", type: "input", placeholder: "Em breve seremos três…", minLength: 3, metadata: { fieldName: "lyricDetails.announcementLine", required: true } },
    { step: 7.9, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Piadas, religião, exagero…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },
    { step: 7.10, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 7.10_outro, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement" && d.step7_10 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 7.11, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 7.12, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 7.13, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 7.13_outro, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement" && d.step7_13 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 7.14, section: "GRAVIDEZ", condition: (d) => d.step0 === "pregnancy_announcement", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 8: MÚSICA PARA SEU PET (14 perguntas) =====
    { step: 8, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é o tipo do seu pet? 🐾", type: "select", options: [
        { label: "🐶 Cachorro", value: "dog" }, { label: "🐱 Gato", value: "cat" }, { label: "🐦 Pássaro", value: "bird" },
        { label: "🐰 Coelho", value: "rabbit" }, { label: "🐹 Hamster/Roedor", value: "rodent" }, { label: "🐠 Peixe", value: "fish" },
        { label: "🐢 Tartaruga", value: "turtle" }, { label: "🦎 Réptil", value: "reptile" }, { label: "🐴 Cavalo", value: "horse" },
        { label: "🦜 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.petType", required: true } },
    { step: 8.1_outro, section: "PET", condition: (d) => d.step0 === "pet" && d.step8 === "other", question: "Qual outro tipo de pet você tem? 🐾", type: "input", placeholder: "Ex.: Iguana, Cobra, Tartaruga…", minLength: 2, metadata: { fieldName: "ai_metadata.petTypeOther", required: true } },
    { step: 8.1, section: "PET", condition: (d) => d.step0 === "pet", question: "Como se chama seu pet? 🐾", type: "input", placeholder: "Ex.: Max, Luna, Fluffy…", minLength: 1, metadata: { fieldName: "recipient.name", required: true } },
    { step: 8.2, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é a idade ou tempo que tem com você? 📅", type: "input", placeholder: "Ex.: 2 anos, desde filhote, 6 meses…", minLength: 2, metadata: { fieldName: "recipient.petAge", required: true } },
    { step: 8.3, section: "PET", condition: (d) => d.step0 === "pet", question: "Como é a personalidade do seu pet? 🎭", type: "textarea", placeholder: "Brincalhão, calmo, carinhoso, aventureiro…", minLength: 10, metadata: { fieldName: "recipient.petPersonality", required: true } },
    { step: 8.4, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é o maneirismo favorito do seu pet? 😄", type: "textarea", placeholder: "Pular, dormir, brincar, fazer algo engraçado…", minLength: 10, metadata: { fieldName: "lyricDetails.favoriteBehavior", required: true } },
    { step: 8.5, section: "PET", condition: (d) => d.step0 === "pet", question: "Descreva uma cena típica do dia a dia com seu pet 🎬", type: "textarea", placeholder: "De manhã, quando volta pra casa, na hora da brincadeira…", minLength: 15, metadata: { fieldName: "lyricDetails.dailyScene", required: true } },
    { step: 8.6, section: "PET", condition: (d) => d.step0 === "pet", question: "O que o seu pet significa para você? 💕", type: "textarea", placeholder: "Companhia, amor incondicional, terapia…", minLength: 15, metadata: { fieldName: "lyricDetails.petMeaning", required: true } },
    { step: 8.7, section: "PET", condition: (d) => d.step0 === "pet", question: "O que você mais ama nele? ⭐", type: "textarea", placeholder: "O jeito dele, o carinho, a lealdade…", minLength: 10, metadata: { fieldName: "lyricDetails.mostLove", required: true } },
    { step: 8.8, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual é o som/vocalização favorita do pet? 🎵", type: "input", placeholder: "Au au, miau, piado, latido especial…", minLength: 2, metadata: { fieldName: "lyricDetails.petSound", required: true } },
    { step: 8.9, section: "PET", condition: (d) => d.step0 === "pet", question: "Para qual momento você quer essa música? 🕐", type: "select", options: [
        { label: "😴 Para acalmar/dormir", value: "calm" }, { label: "🎉 Para brincar/energia", value: "playful" }, { label: "💕 Para conexão emocional", value: "emotional" },
        { label: "🎂 Aniversário do pet", value: "birthday" }, { label: "🌟 Homenagem geral", value: "tribute" }, { label: "🔄 Múltiplos momentos", value: "various" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.petMusicPurpose", required: true } },
    { step: 8.9_outro, section: "PET", condition: (d) => d.step0 === "pet" && d.step8_9 === "other", question: "Para qual outro momento você quer essa música? 🕐", type: "input", placeholder: "Descreva…", minLength: 2, metadata: { fieldName: "ai_metadata.petMusicPurposeOther", required: true } },
    { step: 8.10, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual estilo musical combina mais com seu pet? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌊 Ambient/Relaxante", value: "ambient" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 8.10_outro, section: "PET", condition: (d) => d.step0 === "pet" && d.step8_10 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 8.11, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual impacto emocional a música deve ter? 💖", type: "select", options: [
        { label: "😭 Emocionar (você)", value: "emotional" }, { label: "☮️ Paz/Calma", value: "peace" }, { label: "✨ Arrepio de amor", value: "goosebumps" },
        { label: "😊 Alegria/Diversão", value: "smile" }, { label: "💪 Energia/Movimento", value: "strength" }, { label: "🔗 Conexão pet-tutor", value: "connection" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 8.12, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual tipo de voz você prefere? 🎙️", type: "select", options: [
        { label: "🎙️ Voz masculina suave", value: "male_soft" }, { label: "🎙️ Voz masculina animada", value: "male_strong" },
        { label: "🎤 Voz feminina delicada", value: "female_soft" }, { label: "🎤 Voz feminina energética", value: "female_strong" },
        { label: "🎵 Dueto (tutor + som)", value: "duo" }, { label: "👥 Múltiplas vozes", value: "choir" }, { label: "🎶 Só instrumental", value: "instrumental" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 8.13, section: "PET", condition: (d) => d.step0 === "pet", question: "Qual tipo de movimento musical você prefere? ⚡", type: "select", options: [
        { label: "🌊 Muito calma (relaxante)", value: "very_calm" }, { label: "☮️ Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" },
        { label: "📈 Intensa", value: "intense" }, { label: "🎉 Muito animada", value: "very_intense" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 8.14, section: "PET", condition: (d) => d.step0 === "pet", question: "O que você prefere evitar na música? 🚫", type: "textarea", placeholder: "Barulhos altos, sons assustadores…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 9: NASCIMENTO DE NETO(A) (14 perguntas) =====
    { step: 9, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Quem vai falar nessa música? 👥", type: "select", options: [
        { label: "👴 Avô", value: "grandfather" }, { label: "👵 Avó", value: "grandmother" }, { label: "👴👵 Ambos", value: "both" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.speakerRole", required: true } },
    { step: 9.1_outro, section: "NETO", condition: (d) => d.step0 === "birth_grandchild" && d.step9 === "other", question: "Quem especificamente vai falar? 👥", type: "input", placeholder: "Ex.: Bisavó, padrinho…", minLength: 2, metadata: { fieldName: "ai_metadata.speakerRoleOther", required: true } },
    { step: 9.1, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Para quem você quer falar principalmente? 👶", type: "select", options: [
        { label: "👶 Para o neto(a)", value: "grandchild" }, { label: "👨‍👧 Para o filho(a)", value: "child" }, { label: "🔄 Para os dois", value: "both" }
    ], metadata: { fieldName: "ai_metadata.primaryAddressee", required: true } },
    { step: 9.2, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Já nasceu? 👶", type: "select", options: [
        { label: "✅ Já", value: "born" }, { label: "⏳ Ainda não", value: "not_born" }
    ], metadata: { fieldName: "ai_metadata.birthStatus", required: true } },
    { step: 9.3, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "O que mudou em você com a chegada dessa criança? 🌟", type: "textarea", placeholder: "Orgulho, ternura, recomeço…", minLength: 15, metadata: { fieldName: "lyricDetails.transformation", required: true } },
    { step: 9.4, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Como é ver seu filho(a) virar pai/mãe? 👨‍👩‍👧", type: "textarea", placeholder: "Como é ver essa nova fase…", minLength: 15, metadata: { fieldName: "lyricDetails.childBecomingParent", required: true } },
    { step: 9.5, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual mensagem você quer deixar para o futuro? 📜", type: "textarea", placeholder: "O que quer que lembre…", minLength: 15, metadata: { fieldName: "lyricDetails.messageToGrandchild", required: true } },
    { step: 9.6, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Descreva uma cena que você sonha viver com esse neto(a). 🎬", type: "textarea", placeholder: "Histórias, passear, brincar…", minLength: 15, metadata: { fieldName: "lyricDetails.dreaming", required: true } },
    { step: 9.7, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual tradição familiar você quer passar? 👨‍👩‍👧‍👦", type: "input", placeholder: "Valores, histórias, hábitos…", minLength: 3, metadata: { fieldName: "lyricDetails.familyTradition", required: true } },
    { step: 9.8, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 9.8_outro, section: "NETO", condition: (d) => d.step0 === "birth_grandchild" && d.step9_8 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 9.9, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 9.10, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 9.11, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 9.11_outro, section: "NETO", condition: (d) => d.step0 === "birth_grandchild" && d.step9_11 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 9.12, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 9.13, section: "NETO", condition: (d) => d.step0 === "birth_grandchild", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },

    // ===== TEMA 10: ORAÇÃO EM FORMA DE MÚSICA (15 perguntas) =====
    { step: 10, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual é sua religião ou tradição espiritual? 🙏", type: "input", placeholder: "Católica, Evangélica, Espírita…", minLength: 2, metadata: { fieldName: "ai_metadata.tradition", required: true } },
    { step: 10.1, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Como você se refere ao divino? 🌟", type: "input", placeholder: "Deus, Senhor, Universo…", minLength: 2, metadata: { fieldName: "lyricDetails.divineReference", required: true } },
    { step: 10.2, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual é a principal intenção dessa oração em forma de música? 💭", type: "select", options: [
        { label: "🙏 Gratidão", value: "gratitude" }, { label: "🌟 Pedido", value: "request" }, { label: "✨ Entrega", value: "surrender" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.prayerIntention", required: true } },
    { step: 10.2_outro, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer" && d.step10_2 === "other", question: "Qual outra intenção você tem? 💭", type: "input", placeholder: "Descreva…", minLength: 2, metadata: { fieldName: "ai_metadata.prayerIntentionOther", required: true } },
    { step: 10.3, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Em qual momento de vida você está quando sente essa necessidade? 📖", type: "textarea", placeholder: "Fase, perda, recomeço…", minLength: 15, metadata: { fieldName: "lyricDetails.lifeContext", required: true } },
    { step: 10.4, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Se resumisse essa oração em uma ideia central, qual seria? ✨", type: "input", placeholder: "Perdão, luz, cura…", minLength: 2, metadata: { fieldName: "lyricDetails.centralIdea", required: true } },
    { step: 10.5, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Existe alguma referência espiritual que te inspira? (opcional) 📖", type: "textarea", placeholder: "Passagem, salmo, ensinamento…", minLength: 5, metadata: { fieldName: "lyricDetails.spiritualReference", required: false } },
    { step: 10.6, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual sensação você quer que predomine? 💖", type: "select", options: [
        { label: "☮️ Paz", value: "peace" }, { label: "💪 Força", value: "strength" }, { label: "🌅 Esperança", value: "hope" }, { label: "🔗 Conexão", value: "connection" }
    ], metadata: { fieldName: "lyricDetails.desiredFeeling", required: true } },
    { step: 10.7, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Suave", value: "calm" }, { label: "📈 Crescente", value: "intense" }, { label: "🔥 Intensa", value: "strong" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 10.8, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "O que evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } },
    { step: 10.9, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 10.9_outro, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer" && d.step10_9 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 10.10, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 10.11, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 10.11_outro, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer" && d.step10_11 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 10.12, section: "ORAÇÃO", condition: (d) => d.step0 === "prayer", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 11: MÚSICA CORPORATIVA (13 perguntas) =====
    { step: 11, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Para quem é essa música? 👥", type: "select", options: [
        { label: "👥 Time", value: "team" }, { label: "🎤 Público/Clientes", value: "public" }, { label: "🎉 Evento", value: "event" }, { label: "👔 Liderança", value: "leadership" }
    ], metadata: { fieldName: "ai_metadata.audience", required: true } },
    { step: 11.1, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Quem fala nessa música? 🎤", type: "select", options: [
        { label: "🌱 Fundador(a)", value: "founder" }, { label: "👔 Liderança", value: "leadership" }, { label: "👥 Time", value: "team" }, { label: "🏢 Institucional", value: "institutional" }, { label: "🎭 Outro", value: "other" }
    ], metadata: { fieldName: "ai_metadata.narratorRole", required: true } },
    { step: 11.1_outro, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate" && d.step11_1 === "other", question: "Quem especificamente fala? 🎤", type: "input", placeholder: "Ex.: Cliente, Parceiro…", minLength: 2, metadata: { fieldName: "ai_metadata.narratorRoleOther", required: true } },
    { step: 11.2, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Como a empresa nasceu? 🌱", type: "textarea", placeholder: "Qual problema, sonho, momento…", minLength: 20, metadata: { fieldName: "lyricDetails.origin", required: true } },
    { step: 11.3, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual foi o maior desafio? 💪", type: "textarea", placeholder: "O que quase fez desistir…", minLength: 15, metadata: { fieldName: "lyricDetails.mainChallenge", required: true } },
    { step: 11.4, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Conte uma cena de bastidor que represente bem a cultura da empresa. 🎬", type: "textarea", placeholder: "Momento autêntico real…", minLength: 15, metadata: { fieldName: "lyricDetails.backstageScene", required: true } },
    { step: 11.5, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Descreva a cultura em 3 palavras 📝", type: "input", placeholder: "Criatividade, resiliência…", minLength: 3, metadata: { fieldName: "lyricDetails.cultureKeywords", required: true } },
    { step: 11.6, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual é o principal objetivo dessa música na empresa? 🎯", type: "textarea", placeholder: "Inspirar, celebrar, reforçar…", minLength: 15, metadata: { fieldName: "lyricDetails.desiredImpact", required: true } },
    { step: 11.7, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "O que você prefere evitar? 🚫", type: "textarea", placeholder: "Propaganda, jingle, falsidade…", minLength: 15, metadata: { fieldName: "lyricDetails.avoid", required: true } },
    { step: 11.8, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 11.8_outro, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate" && d.step11_8 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 11.9, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 11.10, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 11.11, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 11.11_outro, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate" && d.step11_11 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 11.12, section: "CORPORATIVO", condition: (d) => d.step0 === "corporate", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },

    // ===== TEMA 12: OUTRO - TEMA ABERTO (17 perguntas) =====
    { step: 12, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que aconteceu? Conte em poucas linhas o que quer expressar em forma de música 💭", type: "textarea", placeholder: "Situação e o que quer expressar…", minLength: 20, metadata: { fieldName: "lyricDetails.mainMessage", required: true } },
    { step: 12.1, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Existe uma pessoa central nessa história? 👤", type: "select", options: [
        { label: "✅ Sim", value: "yes" }, { label: "❌ Não", value: "no" }
    ], metadata: { fieldName: "ai_metadata.hasCentralPerson", required: true } },
    { step: 12.2, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step12_1 === "yes", question: "Conte a história da relação com essa pessoa 📖", type: "textarea", placeholder: "Como se conheceram…", minLength: 15, metadata: { fieldName: "lyricDetails.relationshipHistory", required: true } },
    { step: 12.3, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step12_1 === "yes", question: "Como você a chama? 👤", type: "input", placeholder: "Como chama…", minLength: 2, metadata: { fieldName: "recipient.name", required: true } },
    { step: 12.4, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step12_1 === "yes", question: "De que ponto de vista você quer contar essa história? 🎤", type: "select", options: [
        { label: "💬 Para essa pessoa", value: "second_person" }, { label: "🌍 Sobre essa pessoa", value: "third_person" }, { label: "🔄 Misto", value: "mixed" }
    ], metadata: { fieldName: "ai_metadata.pov", required: true } },
    { step: 12.5, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Descreva uma cena real que represente bem essa situação. 🎬", type: "textarea", placeholder: "Momento importante…", minLength: 15, metadata: { fieldName: "lyricDetails.scene", required: true } },
    { step: 12.6, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que você sentiu? 💭", type: "textarea", placeholder: "Medo e coragem, tristeza e esperança…", minLength: 15, metadata: { fieldName: "lyricDetails.feelings", required: true } },
    { step: 12.7, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que você nunca conseguiu dizer? 💬", type: "textarea", placeholder: "Sua verdade sem filtro…", minLength: 15, metadata: { fieldName: "lyricDetails.unsaid", required: true } },
    { step: 12.8, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual é um detalhe único que não pode faltar nessa música? 🌟", type: "input", placeholder: "Lugar, frase, cheiro…", minLength: 3, metadata: { fieldName: "lyricDetails.uniqueDetail", required: true } },
    { step: 12.9, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual estilo musical combina? 🎸", type: "select", options: [
        { label: "🎸 MPB", value: "mpb" }, { label: "🤠 Sertanejo", value: "sertanejo" }, { label: "🎤 Pop", value: "pop" },
        { label: "🎺 Acústico", value: "acoustic" }, { label: "🎸 Rock", value: "rock" }, { label: "✨ Gospel", value: "gospel" },
        { label: "🎙️ Rap", value: "rap" }, { label: "🌌 Outro", value: "other" }
    ], metadata: { fieldName: "musicStyle.primaryGenre", required: true } },
    { step: 12.9_outro, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step12_9 === "other", question: "Qual outro estilo musical você tem em mente? 🎸", type: "input", placeholder: "Descreva o estilo…", minLength: 2, metadata: { fieldName: "musicStyle.primaryGenreOther", required: true } },
    { step: 12.10, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual impacto emocional você quer? 💖", type: "select", options: [
        { label: "😭 Emocionar", value: "emotional" }, { label: "☮️ Paz", value: "peace" }, { label: "✨ Arrepio", value: "goosebumps" },
        { label: "😊 Sorriso", value: "smile" }, { label: "🌅 Esperança", value: "hope" }, { label: "💪 Força", value: "strength" }
    ], metadata: { fieldName: "musicStyle.mood", required: true } },
    { step: 12.11, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual tipo de movimento você prefere? ⚡", type: "select", options: [
        { label: "🌊 Calma", value: "calm" }, { label: "⚖️ Equilibrada", value: "balanced" }, { label: "📈 Intensa", value: "intense" }, { label: "🧘 Meditativa", value: "meditative" }
    ], metadata: { fieldName: "musicStyle.tempo", required: true } },
    { step: 12.12, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Em qual idioma você prefere a letra? 🌍", type: "select", options: [
        { label: "🇧🇷 PT-BR", value: "pt_br" }, { label: "🇺🇸 EN", value: "en" }, { label: "🇪🇸 ES", value: "es" },
        { label: "🇮🇹 IT", value: "it" }, { label: "🌍 Outro", value: "other" }
    ], metadata: { fieldName: "lyricDetails.language", required: true } },
    { step: 12.12_outro, section: "OUTRO", condition: (d) => d.step0 === "other" && d.step12_12 === "other", question: "Qual outro idioma você prefere? 🌍", type: "input", placeholder: "Ex.: Francês, Alemão…", minLength: 2, metadata: { fieldName: "lyricDetails.languageOther", required: true } },
    { step: 12.13, section: "OUTRO", condition: (d) => d.step0 === "other", question: "Qual tipo de voz você prefere ouvir? 🎙️", type: "select", options: [
        { label: "🎙️ Masc. suave", value: "male_soft" }, { label: "🎙️ Masc. intensa", value: "male_strong" },
        { label: "🎤 Fem. delicada", value: "female_soft" }, { label: "🎤 Fem. poderosa", value: "female_strong" },
        { label: "🎵 Dueto", value: "duo" }, { label: "👥 Coral", value: "choir" }
    ], metadata: { fieldName: "productionDetails.vocalApproach", required: true } },
    { step: 12.14, section: "OUTRO", condition: (d) => d.step0 === "other", question: "O que você prefere evitar nessa música? 🚫", type: "textarea", placeholder: "Evitar…", minLength: 5, metadata: { fieldName: "lyricDetails.avoid", required: false } }
];
