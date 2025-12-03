export class Email {
    remetente: string;
    destinatarios: string[];
    conteudo: string;
    assinatura: string;
    dataEnvio: Date;

    constructor(
        remetente: string,
        destinatarios: string[],
        conteudo: string,
        assinatura: string,
        dataEnvio: Date
    ) {
        this.remetente = remetente;
        this.destinatarios = destinatarios;
        this.conteudo = conteudo;
        this.assinatura = assinatura;
        this.dataEnvio = dataEnvio;
    }

    adicionarDestinatario(destinatario: string) {
        this.destinatarios.push(destinatario);
    }

    removerDestinatario(destinatario: string) {
        this.destinatarios = this.destinatarios.filter(
            (email) => email !== destinatario
        );
    }

    alterarConteudo(novoConteudo: string) {
        this.conteudo = novoConteudo;
    }

    alterarData(novaData: Date) {
        this.dataEnvio = novaData;
    }
}
