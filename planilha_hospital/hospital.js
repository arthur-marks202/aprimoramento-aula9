class FilaAtendimento {
    constructor() {
        this.fila = []; // Inicializa a fila com alguns pacientes
    }
    
    adicionarPaciente (nome) { // Adiciona um Passaciente à fila
        this.fila.push(nome);
        console.log(`✔️ Paciente '${nome}' adicionado à fila de atendimento.`);
    }
    
    atenderPaciente() { // Remove e retorna o primeiro paciente da fila
        if (this.estaVazia()) {
            console.log('⚠️ Não há pacientes na fila para atender.');
            return null;
        }
        
        const atendido = this.fila.shift();
        console.log(`✅ Paciente '${atendido}' foi atendido.`);
        return atendido;
    }

    proximoPaciente() { // Retorna o próximo paciente a ser atendido
        if (this.estaVazia()) {
            console.log('⚠️ Não há pacientes na fila.');
            return null;
        }
        
        console.log(`👀 Próximo paciente a ser atendido: ${this.fila[0]}`);
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

class Pilha {
    constructor() { 
        this.prontuario = [];
    }

    adicionarProntuario(nome) {
        this.prontuario.push(nome);
        console.log(`✔️ Prontuário '${nome}' adicionado.`);
    }

    imprimirPilha() { 
        if (this.prontuario.length === 0) {
            console.log('📋 A pilha de prontuários está vazia.');
        } else {
            console.log('📋 Prontuários:', this.prontuario.slice().reverse().join(' <-- '));
        }
    }
}

//Demostração
const filaAtendimento = new FilaAtendimento();
const prontuario = new Pilha();

filaAtendimento.adicionarPaciente('Arthur');
filaAtendimento.adicionarPaciente('Marcela');
filaAtendimento.adicionarPaciente('Caua');
filaAtendimento.adicionarPaciente('Sara');
filaAtendimento.adicionarPaciente('Aira');
console.log('-------------------------------------');
filaAtendimento.proximoPaciente();
console.log('-------------------------------------');
prontuario.adicionarProntuario(filaAtendimento.atenderPaciente());
prontuario.adicionarProntuario(filaAtendimento.atenderPaciente());
console.log('-------------------------------------');
filaAtendimento.imprimirFila();
prontuario.imprimirPilha();
console.log('-------------------------------------');


