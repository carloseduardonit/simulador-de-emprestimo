# Simulador de Emprestimo

> [!IMPORTANT]
>
> - Clique nos Titulos abaixo para ver os paragrafos conforme a demostração: :point_down:
> <img src="/.gitbook/assets/demostracao.gif" alt="Demostração de com fazer">

## Dados do projeto

> - URL: [Acesse Aqui](https://simulador-de-emprestimo-two.vercel.app/)
> - Tempo medio de Elaboração: 50 horas :hourglass_flowing_sand:

<img src = "https://github.com/carloseduardonit/simulador-de-emprestimo/blob/master/image/884malT%20-%20Imgur.gif" width ="700" alt ="gf"/>

## Objetivo

> - Mostrar meu conhecimento em HTML, CSS, Javascripts
>   - Utilzação  de Eventos
>   - Maniipulação  de Matriz
>   - Orientação a Objetos
> - Mostrar meus conhecimentos em Matematica Financeira.
>   - Calcular das prestações do tipo de amortização SPC pela formula

$$ \text{PMT} = \frac{\text{PV}}{ \left(\frac{1 - (1 + i)^{-n}}{i}\right)}
$$

## Bugs :lady_beetle:

- [ ] Evento OnMouseEnd do Campo [Numero de Carencia], criar um loop infinito no sistema
- [ ] Evento onMouseEnd nas tabelas, caso os campos não seja informado, criar um loop infinito no sistema.
- [x] Os calculos está com precisão de mais de 4 casas decimais;
- [ ] Não utiliizei SOLID
- [ ] Não utilizei Clean Code em toda Classes, Metodos e Variaveis

## Funcionalidade

> - [ ] Função Basica
>   - [X] Calcular a Media em 2 numeros
>   - [X] Cabeçalho da Tabelas
>   - [X] Rodape da Tabelas
>   - [ ] ...

|SAC sem carência|
|--|
|![Sac se Carenca](https://github.com/carloseduardonit/simulador-de-emprestimo/blob/master/image/SAC/SAC%20sem%20Carencia.png)|

|SAC com Carência  e Pagamento dos Juros|SAC com Carência  e Capitalização dos Juros|SAC com Carência com Juros Capitalizados e Acrescidos ao Saldo Devedor|
|--|--|--|
|![SAC com Carência e Pagamento dos Juros](https://github.com/carloseduardonit/simulador-de-emprestimo/blob/master/image/SAC/SAC%20com%20Car%C3%AAncia%204%20meses%20e%20Pagamento%20dos%20Juros.png)|![SAC com Carência e Capitalização dos Juros](https://github.com/carloseduardonit/simulador-de-emprestimo/blob/ad0284b57a68640fcdc9b73c3dd54fe57bbbad7e/image/SAC/SAC%20com%20Car%C3%AAncia%204%20meses%20e%20Capitaliza%C3%A7%C3%A3o%20dos%20Juros.png)|![SAC com Carência com Juros Capitalizados e Acrescidos ao Saldo Devedor](https://github.com/carloseduardonit/simulador-de-emprestimo/blob/ad0284b57a68640fcdc9b73c3dd54fe57bbbad7e/image/SAC/SAC%20com%20Car%C3%AAncia%204%20meses%20com%20Juros%20Capitalizados%20e%20Acrescidos%20ao%20Saldo%20Devedor.png)|

> - [X] Calculo da tabela SAC - Sistema de Amortização Constante
>   - [x] Calcular a Amortização do SAC
>   - [x] Calcular o Saldo Atual do SAC
>   - [x] Calcular o Juros do SAC
>   - [x] Calcular a Prestação do SAC
>   - [X] Deboche do SAC

|SPC sem carência|SPC com Carência e Pagamento dos Juros|SPC com Carência e Capitalização dos Juros|
|--|--|--|
|![SPC sem carência](https://github.com/carloseduardonit/simulador-de-emprestimo/blob/ad0284b57a68640fcdc9b73c3dd54fe57bbbad7e/image/SPC/SPC%20sem%20car%C3%AAncia.png)|![SPC com Carência e Pagamento dos Juros](https://github.com/carloseduardonit/simulador-de-emprestimo/blob/ad0284b57a68640fcdc9b73c3dd54fe57bbbad7e/image/SPC/SPC%20com%20Car%C3%AAncia%204%20meses%20e%20Pagamento%20dos%20Juros.png)|![SPC com Carência e Capitalização dos Juros](https://github.com/carloseduardonit/simulador-de-emprestimo/blob/ad0284b57a68640fcdc9b73c3dd54fe57bbbad7e/image/SPC/SPC%20com%20Car%C3%AAncia%204%20meses%20e%20Capitaliza%C3%A7%C3%A3o%20dos%20Juros.png)|

> - [X] Calculo da tabela SPC - Sistema de Prestação Constante
>   - [X] Calcular a Prestação do SPC
>   - [x] Calcular o Juros do SPC
>   - [X] Calcular a Amortização do SPC
>   - [x] Calcular o Saldo Atual do SPC
>   - [X] Deboche do SPC

|SAM sem carência|
|--|
|![SAM sem carência](https://github.com/carloseduardonit/simulador-de-emprestimo/blob/afecb71486ed0aa78f822cfe2d72fabd283dd878/image/SAM/SAM%20sem%20carencia.png)|

> - [x] Calculo da tabela SAM - Sistema de Amortização Mista
>   - [x] Calcular a Amortização do SAM
>   - [x] Calcular o Saldo Atual do SAM
>   - [x] Calcular o Juros do SAM
>   - [x] Calcular a Prestação do SAM
>   - [X] Deboche do SAM
> - [x] Adicionado ADSENDE

## :writing_hand: Linguagens utilizadas

>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## :writing_hand:  Este documento e escrito em

> ![Markdown](https://img.shields.io/badge/Markdown-000?style=for-the-badge&logo=markdown)![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<details>

<summary>

## 📬 Entre em contato pelo :point_left:

</summary>

> [![Telegram](https://img.shields.io/badge/Telegram-000?style=for-the-badge&logo=telegram&logoColor=2CA5E0)](https://t.me/Carlaol) [![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?1=pt_BR&phone=5521985745077) [![Gmail](https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red)](mailto:carlostecnico@mail.com) [![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/Carlao_Me_Ajuda) [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/carlao.me.ajuda/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlos-eduardo-dos-s-figueiredo/)  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/carloseduardonit/) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@carloseduardonit/) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

</details>

---

## :coffee: Colabore para o cafezinho :coffee:

<img  src ="https://github.com/carloseduardonit/conector-do-carlos/blob/bbacf217c11df84b7826304709271bf0d854d1ee/Qr%20PIX.jpg" width="200"/>

> [!NOTE]
> "A empatia é certamente um dos mais nobres sentimentos humanos.
> Para entender e ajudar o próximo é necessário se imaginar na condição dele."
[Lázaro de Souza Gomes](https://www.pensador.com/autor/lazaro_de_souza_gomes/)

---

<details>

<summary>

## :books: Material de Suporte :point_left:

</summary>

- [Sites Icons8](https://icons8.com.br/)
- [Iconografia](https://github.com/ikatyang/emoji-cheat-sheet/tree/master?tab=readme-ov-file#activities)
- [Badges Basico](https://github.com/digitalinnovationone/dio-lab-open-source/blob/main/utils/badges/badges.md)
- [Badges Avançado](https://github.com/Ileriayo/markdown-badges?tab=readme-ov-file#markdown-badges)
- [Badges Avançado 1](https://home.aveek.io/GitHub-Profile-Badges/)
- [Cards](https://github.com/digitalinnovationone/dio-lab-open-source/blob/main/utils/cards/github-stats.md)
- [Sintaxe básica de gravação e formatação no GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Trabalhar com formatação avançadano GitHub](https://docs.github.com/pt/get-started/writing-on-github/working-with-advanced-formatting)

</details>

---
