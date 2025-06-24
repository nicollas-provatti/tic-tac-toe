# 🕹️ Jogo da Velha com React.js

Este projeto foi desenvolvido com o objetivo de praticar os conceitos fundamentais do React, como **componentes**, **props** e **state**, em um jogo clássico e interativo.

---

## ✨ Funcionalidades
- Dois jogadores com nomes personalizáveis
- Registro do histórico de jogadas
- Verificação automática de vitória ou empate
- Reinício da partida após o fim do jogo
- Interface componentizada e reutilizável

## 🔧 Tecnologias Utilizadas
- React.js (com `useState`)
- JavaScript (ES6+)
- HTML/CSS

---

## 🧠 Lógica do Jogo
- O tabuleiro é representado por uma matriz 3x3.
- Cada jogada atualiza o estado com a posição e o jogador.
- As combinações vencedoras são verificadas após cada jogada.
- Quando há um vencedor ou empate, a partida é finalizada.

---

## 📂 Estrutura dos Componentes
- `App.jsx` – componente principal, gerencia o estado do jogo
- `GameBoard.jsx` – renderiza o tabuleiro interativo
- `Player.jsx` – permite editar o nome dos jogadores
- `Log.jsx` – mostra o histórico de jogadas
- `GameOver.jsx` – exibe o fim da partida
- `winning-combinations.js` – armazena as combinações vencedoras

---

## 📸 Capturas de Tela

![Texto alternativo](src/assets/Tela%201.jpg)

---

![Texto alternativo](src/assets/Tela%202.jpg)

---

## 📌 Observações

A verificação de vitória foi implementada com base em uma lista de combinações possíveis. Apesar de ser uma abordagem simples, é eficiente para este caso. Caso tenha sugestões de melhorias, estou aberto a ideias!

---

## 🔗 Acesse o Projeto Online
Você pode testar a aplicação diretamente no seu navegador clicando no link abaixo:

👉 [Jogue agora o Jogo da Velha](https://tic-tac-toe-iep5.onrender.com/)

---