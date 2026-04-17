const dados_login = [
    {
        email: "Gabriel@gmail.com",
        senha: "1234",
    },
    {
        email: "Nicolas@gmail.com",
        senha: "4321",
    },
]

const get_email = document.getElementById("barra-email");
const get_senha = document.getElementById("barra-senha");
const get_login = document.getElementById("botao-login");
const get_aviso = document.getElementById("aviso");

get_login.onclick = function(){
    let encontrado = false;
    get_aviso.textContent = "";

    if(get_email.value === "")
    {
        get_aviso.textContent = "Preencha o E-mail!";
    }
    else if(get_senha.value === "")
    {
        get_aviso.textContent = "Preencha a Senha!";
    }
    else
    {
        for (const add of dados_login) 
        {
            if(get_email.value === add.email && get_senha.value === add.senha)
            {
                encontrado = true;
                break;
            }
        }
        
        if(encontrado === true)
        {
            window.location.href = "entrou.html";
        }
        else
        {
            get_aviso.textContent = "Login Incorreto!";
        }
    }
}