var formulario = document.getElementById('login');

formulario.addEventListener('submit', function (event) {
    // previnir o envio padrão do formulário
    event.preventDefault();

    // buscar inputs pelo id
    var inputEmail = document.getElementById('email');
    var inputSenha = document.getElementById('senha');

    // obter os valores digitados nos inputs
    var inputEmailValor = inputEmail.value;
    var inputSenhaValor = inputSenha.value;

    if (inputEmailValor == '' && inputSenhaValor == '') {
        alert('Preencha os campos vazios.');
        return
    }

    if (inputEmailValor == '' || inputSenhaValor == '') {
        alert('Campo obrigatório não foi preenchido.')
        return
    }

    var usuarios = [
        {
            email: 'pedrohnleal@gmail.com',
            password: '123'
        },
        {
            email: 'joaopmata182@gmail.com',
            password: '3nSY4KmJ58Zu'
        },
        {
            email: 'lagoawb2@gmail.com',
            password: 'h93ZBshJDZa7'
        },
        {
            email: 'augusto.azalim@gmail.com',
            password: 'p33478vWvkEU'
        },
        {
            email: 'vitor.viana2016@gmail.com',
            password: 'EB5wwf38tNX3'
        },
        {
            email: 'lorrainypamela99@gmail.com',
            password: '4ZFVNghj3c2Z'
        }
    ]

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == inputEmailValor && usuarios[i].password == inputSenhaValor) {
            window.location.href = '/home';
            return
        }
    }

    alert('E-mail ou senha inválido.')
})