document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadFunc");

    const setores = [
        { id: 1, nome: "Tecnologia da Informação", sigla: "TI" },
        { id: 2, nome: "Recursos Humanos", sigla: "RH" },
        { id: 3, nome: "Financeiro", sigla: "FI" },
        { id: 4, nome: "Marketing e Vendas", sigla: "MK" },
        { id: 5, nome: "Produção e Operações", sigla: "PO" },
    ];

    const cargos = [
        { id: 1, nome: "Analista de Sistemas", salário: "8500" },
        { id: 2, nome: "Assistente Administrativo", salário: "2500" },
        { id: 3, nome: "Secretário", salário: "4300" },
        { id: 4, nome: "Gerente de Vendas", salário: "6500" },
        { id: 5, nome: "Analista de Marketing", salário: "4500" },
    ];

    const convenios = [
        {
            id: 1,
            nome: "UNIMED",
            valor: { titular: 1500, dependente: 750 },
        },
        {
            id: 2,
            nome: "Intermédica",
            valor: { titular: 1400, dependente: 850 },
        },
    ];

    document.getElementById("cargo").addEventListener("change", function () {
        const selected = cargos.find(c => c.nome === this.value);
        if (selected) {
            document.getElementById("salario").textContent = selected.salário;
        }
    });

    document.getElementById("nomeSetor").addEventListener("change", function () {
        const selected = setores.find(s => s.nome === this.value);
        if (selected) {
            document.getElementById("sigla").textContent = selected.sigla;
        }
    });

    document.getElementById("Conv").addEventListener("change", function () {
        const selected = convenios.find(c => c.nome === this.value);
        if (selected) {
            document.getElementById("valTitular").textContent = selected.valor.titular;
            document.getElementById("valDependente").textContent = selected.valor.dependente;
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const requiredFields = ["name", "tel", "email", "cpf", "rg", "cargo", "nomeSetor", "Conv"];
        for (let id of requiredFields) {
            const el = document.getElementById(id);
            if (!el.value || el.value === "Selecione...") {
                alert(`Por favor, preencha corretamente o campo: ${id}`);
                el.focus();
                return;
            }
        }

        const formattedData = {
            dadosPessoais: {
                nome: document.getElementById("name").value,
                telefone: document.getElementById("tel").value,
                email: document.getElementById("email").value,
                cpf: document.getElementById("cpf").value,
                rg: document.getElementById("rg").value
            },
            cargo: {
                nome: document.getElementById("cargo").value,
                salario: document.getElementById("salario").textContent
            },
            setor: {
                nome: document.getElementById("nomeSetor").value,
                sigla: document.getElementById("sigla").textContent
            },
            convenio: {
                nome: document.getElementById("Conv").value,
                valorTitular: document.getElementById("valTitular").textContent,
                valorDependente: document.getElementById("valDependente").textContent
            }
        };

        fetch("https://68115ce03ac96f7119a4564f.mockapi.io/cadastrofuncionario/funcionarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formattedData)
        })
            .then(res => {
                if (res.ok) {
                    alert("Cadastro enviado com sucesso!");
                    form.reset();
                    document.getElementById("salario").textContent = "Preenchimento Automático";
                    document.getElementById("sigla").textContent = "Preenchimento Automático";
                    document.getElementById("valTitular").textContent = "Preenchimento Automático";
                    document.getElementById("valDependente").textContent = "Preenchimento Automático";
                } else {
                    throw new Error("Erro ao enviar dados.");
                }
            })
            .catch(err => {
                alert("Erro: " + err.message);
            });
    });
});
