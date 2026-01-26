<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TuneCraft - Crie Sua Música Personalizada</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            padding: 60px 40px;
            max-width: 600px;
            text-align: center;
        }

        h1 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 2.5em;
        }

        p {
            color: #555;
            margin-bottom: 30px;
            line-height: 1.6;
            font-size: 1.1em;
        }

        .btn-start {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 50px;
            font-size: 1.1em;
            border-radius: 50px;
            cursor: pointer;
            transition: transform 0.3s, box-shadow 0.3s;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .btn-start:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }

        /* Modal Chat */
        #chatModal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        #chatModal.active {
            display: flex;
        }

        .chat-container {
            background: white;
            border-radius: 20px;
            width: 90%;
            max-width: 500px;
            height: 80vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .chat-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 20px 20px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .chat-title {
            font-size: 1.3em;
            font-weight: bold;
        }

        .close-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 1.5em;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .close-btn:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        .progress-bar {
            width: 100%;
            height: 4px;
            background: #e0e0e0;
        }

        #progressFill {
            height: 100%;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            width: 0%;
            transition: width 0.3s ease;
        }

        #chatMessages {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: #f5f5f5;
        }

        .message {
            margin-bottom: 15px;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .bot-message {
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .avatar {
            font-size: 1.5em;
            flex-shrink: 0;
        }

        .bubble {
            background: white;
            padding: 12px 16px;
            border-radius: 12px;
            max-width: 80%;
            text-align: left;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .user-message {
            text-align: right;
            margin-left: auto;
            margin-right: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 16px;
            border-radius: 12px;
            max-width: 80%;
            box-shadow: 0 2px 5px rgba(102, 126, 234, 0.3);
        }

        #inputSection {
            padding: 20px;
            border-top: 1px solid #e0e0e0;
            background: white;
        }

        .input-label {
            font-size: 0.9em;
            color: #999;
            margin-bottom: 10px;
            text-transform: uppercase;
            font-weight: bold;
        }

        .options-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }

        .option-btn {
            background: white;
            border: 2px solid #ddd;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
            text-align: left;
        }

        .option-btn:hover {
            border-color: #667eea;
            background: #f0f0ff;
            transform: translateX(5px);
        }

        .chat-text-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1em;
            margin-bottom: 10px;
            font-family: inherit;
        }

        .chat-text-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        textarea.chat-text-input {
            resize: vertical;
        }

        .btn-chat-action {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s;
        }

        .btn-chat-action:hover {
            transform: translateY(-2px);
        }

        .action-buttons {
            display: flex;
            gap: 10px;
        }

        .btn-back {
            flex: 1;
            padding: 12px;
            background: #f0f0f0;
            color: #666;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
        }

        .btn-back:hover {
            background: #e0e0e0;
        }

        .reference-item {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 10px;
        }

        .reference-artist,
        .reference-song {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-family: inherit;
        }

        .reference-artist:focus,
        .reference-song:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .reg-form-group {
            margin-bottom: 15px;
            text-align: left;
        }

        .reg-label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }

        .reg-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-family: inherit;
        }

        .reg-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎵 TuneCraft</h1>
        <p>Crie uma música personalizada e inesquecível para pessoas especiais na sua vida.</p>
        <button class="btn-start" onclick="openChat()">Começar Agora</button>
    </div>

    <!-- Chat Modal -->
    <div id="chatModal">
        <div class="chat-container">
            <div class="chat-header">
                <div class="chat-title">TuneCraft - Seu Assistente 🎵</div>
                <button class="close-btn" onclick="closeChat()">✕</button>
            </div>
            <div class="progress-bar">
                <div id="progressFill"></div>
            </div>
            <div id="chatMessages"></div>
            <div id="inputSection"></div>
        </div>
    </div>

    <!-- Supabase Client (DEVE CARREGAR PRIMEIRO!) -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    
    <!-- Pequeno delay para garantir Supabase carregado -->
    <script>
        // Espera Supabase estar pronto
        function waitForSupabase() {
            if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
                console.log('✅ Supabase carregado com sucesso!');
                loadChatScript();
            } else {
                console.log('⏳ Aguardando Supabase...');
                setTimeout(waitForSupabase, 100);
            }
        }
        
        function loadChatScript() {
            const script = document.createElement('script');
            script.src = 'chat-stripe.js';
            script.onerror = function() {
                console.error('❌ Erro ao carregar chat-stripe.js');
            };
            document.head.appendChild(script);
        }
        
        // Inicia quando DOM estiver pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', waitForSupabase);
        } else {
            waitForSupabase();
        }
    </script>
</body>
</html>
