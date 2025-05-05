class FilaAtendimento {
constructor() {
    this.fila = []; // Inicializa a fila como um array vazio
    }

adicionarAluno(nome) { // Adiciona um aluno à fila
    this.fila.push(nome);
        console.log(`✔️ Aluno '${nome}' adicionado à fila de atendimento.`);
    }

atenderAluno() { // Remove e retorna o primeiro aluno da fila
    if (this.estaVazia()) {
        console.log('⚠️ Não há alunos na fila para atender.');
        return null;
        }

        const atendido = this.fila.shift();
        console.log(`✅ Aluno '${atendido}' foi atendido.`);
        return atendido;
    }

proximoAluno() { // Retorna o próximo aluno a ser atendido
    if (this.estaVazia()) {
        console.log('⚠️ Não há alunos na fila.');
        return null;
        }

        console.log(`👀 Próximo aluno a ser atendido: ${this.fila[0]}`);
        return this.fila[0];
    }

estaVazia() { // Verifica se a fila está vazia
    return this.fila.length === 0;
    }

imprimirFila() { // Imprime o estado atual da fila
    if (this.estaVazia()) {
        console.log('📋 A fila está vazia.');
    } else {
        console.log('📋 Fila de atendimento:', this.fila.join(' --> '));
    }
    }
}

// Demonstração
const filaAtendimento = new FilaAtendimento();
filaAtendimento.adicionarAluno('Aluno 1');
filaAtendimento.adicionarAluno('Aluno 2');
filaAtendimento.adicionarAluno('Aluno 3');
filaAtendimento.imprimirFila();
filaAtendimento.proximoAluno(); // Visualiza o próximo aluno
filaAtendimento.atenderAluno();
filaAtendimento.proximoAluno(); // Visualiza o próximo aluno após atendimento
filaAtendimento.imprimirFila();
filaAtendimento.atenderAluno();
filaAtendimento.proximoAluno(); 
filaAtendimento.atenderAluno();
filaAtendimento.proximoAluno(); // Tentativa de visualizar quando a fila está vazia
console.log('-------------------------------------');
console.log('-------------------------------------');
console.log('-------------------------------------');

//Pilha de Documentos Prioritarios 

class PilhaDocumentos {
constructor() {
    this.documentos = []; // Inicializa a pilha como um array vazio
    }

empilhar(documento) { // Adiciona um documento urgente à pilha
    this.documentos.push(documento);
        console.log(`✔️ Documento '${documento}' adicionado à pilha de documentos prioritários.`);
    }

resolver() { // Remove o ultimo documeto adicionado da pilha 
    if (this.estaVazia()) {
        console.log('⚠️ Não há documentos na pilha para resolver.');
        return null;
    }

    const resolvido = this.documentos.pop();
    console.log(`✅ Documento '${resolvido}' foi resolvido.`);
    return resolvido;
    }

topoDaPilha() { // Retorna o último documento adicionado à pilha
    if (this.estaVazia()) {
        console.log('⚠️ Não há documentos na pilha.');
        return null;
    }

    console.log(`👀 Documento do topo da pilha: ${this.documentos[this.documentos.length - 1]}`);
    return this.documentos[this.documentos.length - 1];
    }

documentosPendentes(){
    if (this.estaVazia()) {
            console.log('📋 Não há documentos pendentes na pilha.');
    } else {
            console.log('📋 Documentos pendentes:', this.documentos.join(' --> '));
    }
    }
    
estaVazia() { // Verifica se a pilha está vazia
        return this.documentos.length === 0;
    }
}

// Demonstração
const pilhaDocumentos = new PilhaDocumentos();
pilhaDocumentos.empilhar('Documento A');
pilhaDocumentos.empilhar('Documento B');
pilhaDocumentos.empilhar('Documento C');
pilhaDocumentos.documentosPendentes();
pilhaDocumentos.topoDaPilha(); // Visualiza o documento do topo
pilhaDocumentos.resolver();
pilhaDocumentos.topoDaPilha(); // Visualiza o documento do topo após resolver
pilhaDocumentos.documentosPendentes();
pilhaDocumentos.topoDaPilha(); // Visualiza o documento do topo
pilhaDocumentos.resolver();
pilhaDocumentos.documentosPendentes();
pilhaDocumentos.topoDaPilha(); // Visualiza o documento do topo
pilhaDocumentos.resolver();