# 🎁 Sorteio Amigo Secreto

> Aplicação web para sortear amigo secreto desenvolvida no curso de Lógica de Programação da Alura
 <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZtdXFieWgyaDdkM2x3bzF1ZzQxdzdrdjh3aHN0NXI2dWxraWJrciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2UIcmK4pn7rYNLRboG/giphy.gif" width="200" alt="gato com fones dançando">

## 📋 Sobre

Sistema interativo para organizar sorteios de amigo secreto com interface moderna e funcionalidades completas de validação.

## ⚡ Funcionalidades

- ➕ **Adicionar participantes** com validação de nomes
- 🚫 **Previne duplicatas** - não permite nomes repetidos  
- 🎲 **Sorteio automático** usando algoritmo Fisher-Yates
- 👥 **Mínimo 4 pessoas** para realizar o sorteio
- 🔄 **Reiniciar** sorteio a qualquer momento
- 📱 **Interface responsiva** e moderna

## 🛠️ Tecnologias

- 🌐 **HTML5** - Estrutura semântica
- 🎨 **CSS3** - Estilização avançada com gradientes e sombras
- ⚡ **JavaScript** - Lógica de sorteio e validações
- 🔤 **Google Fonts** - Tipografias Chakra Petch e Inter

## 🎯 Como Usar

1. Digite o nome de um participante
2. Clique em **Adicionar** (mínimo 4 pessoas)
3. Clique em **Sortear** para gerar os pares
4. Use **Reiniciar** para começar novo sorteio

## 🧮 Algoritmo

Utiliza o **algoritmo Fisher-Yates** para embaralhamento justo e distribuição em círculo, garantindo que cada pessoa tire exatamente uma e seja tirada por uma.

## 📁 Estrutura

```
sorteio-amigo-secreto/
├── assets/
│   └── imagem-presente.png
├── js/
│   └── app.js
├── index.html
├── style.css
└── README.md
```

## 🎓 Conceitos Aplicados

- **Arrays e manipulação** com `push()`, `includes()`, `join()`
- **Validação de entrada** e tratamento de erros
- **Algoritmos de embaralhamento** (Fisher-Yates)
- **Manipulação do DOM** dinâmica
- **Operador módulo** para distribuição circular

## 🚀 Executar

```bash
git clone https://github.com/seu-usuario/sorteio-amigo-secreto.git
cd sorteio-amigo-secreto
# Abrir index.html no navegador
```

---

**Desenvolvido com 💙 durante o curso da Alura**
