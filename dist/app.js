// ==============================================
// APP.JS - VERSÃO MAIS SIMPLES POSSÍVEL
// ==============================================

// 1. Verificar se o React carregou
console.log('📦 React carregado:', typeof React);
console.log('📦 ReactDOM carregado:', typeof ReactDOM);

// 2. Criar o componente App
function App() {
    // Usando hooks diretamente
    const [contador, setContador] = React.useState(0);
    
    // Criar os elementos manualmente
    return React.createElement(
        'div',
        {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#1e3a5f',
                fontFamily: 'Arial, sans-serif'
            }
        },
        React.createElement(
            'div',
            {
                style: {
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    maxWidth: '400px',
                    width: '100%',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }
            },
            React.createElement('h1', {
                style: {
                    color: '#1e40af',
                    fontSize: '32px',
                    marginBottom: '10px'
                }
            }, '🚀 Hometech'),
            
            React.createElement('p', {
                style: {
                    color: '#6b7280',
                    fontSize: '16px',
                    marginBottom: '20px'
                }
            }, 'React está funcionando!'),
            
            React.createElement('div', {
                style: {
                    fontSize: '56px',
                    fontWeight: 'bold',
                    color: '#f97316',
                    margin: '20px 0'
                }
            }, contador),
            
            React.createElement(
                'button',
                {
                    onClick: function() {
                        setContador(contador + 1);
                    },
                    style: {
                        backgroundColor: '#f97316',
                        color: 'white',
                        border: 'none',
                        padding: '14px 40px',
                        borderRadius: '12px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(249,115,22,0.4)',
                        transition: 'all 0.3s'
                    },
                    onMouseEnter: function(e) {
                        e.target.style.backgroundColor = '#ea580c';
                    },
                    onMouseLeave: function(e) {
                        e.target.style.backgroundColor = '#f97316';
                    }
                },
                'Clique aqui'
            ),
            
            React.createElement('p', {
                style: {
                    color: '#9ca3af',
                    fontSize: '14px',
                    marginTop: '20px'
                }
            }, 'Cliques: ' + contador)
        )
    );
}

// 3. Renderizar o App
console.log('🔄 Renderizando App...');
const rootElement = document.getElementById('root');
console.log('📍 Root element:', rootElement);

if (rootElement) {
    try {
        ReactDOM.render(React.createElement(App), rootElement);
        console.log('✅ App renderizado com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao renderizar:', error);
    }
} else {
    console.error('❌ Elemento #root não encontrado no HTML!');
}

// 4. Verificar se o App foi definido
console.log('🔍 typeof App:', typeof App);