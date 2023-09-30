function costumizar() {
    var div_escolher = document.getElementById("escolher");
    var bot_costumize = document.getElementById("costumize");
    if (bot_costumize.innerHTML != "Salvar") {
        div_escolher.classList.remove("escolhas");
        div_escolher.classList.remove("escolhas_animacao_voltar");
        div_escolher.classList.add("escolhas_animacao_ir");
        bot_costumize.innerHTML = "Salvar";
    } else {
        bot_costumize.innerHTML = "Costumize";
        div_escolher.classList.remove("escolhas_animacao_ir");
        div_escolher.classList.add("escolhas_animacao_voltar");
    }
}

function mudou() {
    var bot = document.querySelector(".bot_voltar");
    var select = document.getElementById("select_mao");
    var valor = select.value;
    switch (valor) {
        case "1":
            bot.innerHTML = "👆️ Diagrama";
            break;
        case "2":
            bot.innerHTML = "👆🏿 Diagrama";
            break;
        case "3":
            bot.innerHTML = "👆🏾 Diagrama";
            break;
            case "4":
            bot.innerHTML = "👆🏽 Diagrama";
            break;
            case "5":
            bot.innerHTML = "👆🏼 Diagrama";
            break;
            case "6":
            bot.innerHTML = "👆🏻 Diagrama";
            break;
    }
}

function mostrar() {
    var input_mostrar = document.getElementById("input_mostrar");
    var mostrar_atividade = document.getElementById("mostrar_atividade");
    if (input_mostrar.checked) {
        mostrar_atividade.classList.remove("mostrar_atividade");
        mostrar_atividade.classList.remove("mostrar_atividade_voltar");
        mostrar_atividade.classList.add("mostrar_atividade_vir");
    } else {
        mostrar_atividade.classList.remove("mostrar_atividade_vir");
        mostrar_atividade.classList.add("mostrar_atividade_voltar");
    }
}

window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const h1 = section.querySelector("h1");
            if (h1) {
                document.getElementById("mostrar_atividade").innerHTML = h1.textContent.trim();
            }
        }
    }
});
