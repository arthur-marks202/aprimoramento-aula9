// Define a classe FilaAtendimento para gerenciar uma fila de pacientes
class FilaAtendimento {
    constructor() {
        this.fila = []; // Inicializa a fila como um array vazio
    }
    
    // Adiciona um paciente ao final da fila
    adicionarPaciente (nome) {
        this.fila.push(nome); // Insere o nome do paciente no final do array
        console.log(`✔️ Paciente '${nome}' adicionado à fila de atendimento.`); // Mensagem de confirmação
    }
    
    // Atende (remove) o primeiro paciente da fila
    atenderPaciente() {
        if (this.estaVazia()) { // Verifica se a fila está vazia
            console.log('⚠️ Não há pacientes na fila para atender.'); // Mensagem de aviso
            return null; // Retorna null se não houver pacientes
        }
        
        const atendido = this.fila.shift(); // Remove e armazena o primeiro paciente da fila
        console.log(`✅ Paciente '${atendido}' foi atendido.`); // Mensagem de confirmação
        return atendido; // Retorna o nome do paciente atendido
    }

    // Mostra o próximo paciente a ser atendido sem removê-lo da fila
    proximoPaciente() {
        if (this.estaVazia()) { // Verifica se a fila está vazia
            console.log('⚠️ Não há pacientes na fila.'); // Mensagem de aviso
            return null; // Retorna null se não houver pacientes
        }
        
        console.log(`👀 Próximo paciente a ser atendido: ${this.fila[0]}`); // Mostra o próximo paciente
        return this.fila[0]; // Retorna o nome do próximo paciente
    }

    // Verifica se a fila está vazia
    estaVazia() {
        return this.fila.length === 0; // Retorna true se a fila estiver vazia, senão false
    }
}

class Pilha { // Define uma classe chamada Pilha
    constructor() { // Método construtor chamado ao criar uma nova instância da classe
        this.prontuario = []; // Inicializa um array vazio para armazenar os prontuários
    }

    adicionarProntuario(nome) { // Método para adicionar um novo prontuário à pilha
        this.prontuario.push(nome); // Adiciona o nome ao final do array (topo da pilha)
        console.log(`✔️ Prontuário '${nome}' adicionado.`); // Exibe mensagem de confirmação no console
    }

    imprimirPilha() { // Método para exibir os prontuários na pilha
        if (this.prontuario.length === 0) { // Verifica se a pilha está vazia
            console.log('📋 A pilha de prontuários está vazia.'); // Mensagem se não houver prontuários
        } else {
            // Exibe os prontuários do topo para a base, separados por '<--'
            console.log('📋 Prontuários:', this.prontuario.slice().reverse().join(' <-- '));
        }
    }
}

//Demostração
// Cria uma nova fila de atendimento (estrutura FIFO)
const filaAtendimento = new FilaAtendimento();
// Cria uma nova pilha de prontuários (estrutura LIFO)
const prontuario = new Pilha();

// Adiciona pacientes à fila de atendimento
filaAtendimento.adicionarPaciente('Arthur');
filaAtendimento.adicionarPaciente('Marcela');
filaAtendimento.adicionarPaciente('Caua');
filaAtendimento.adicionarPaciente('Sara');
filaAtendimento.adicionarPaciente('Aira');

// Imprime uma linha separadora no console
console.log('-------------------------------------');

// Mostra quem é o próximo paciente a ser atendido (sem remover da fila)
filaAtendimento.proximoPaciente();

// Imprime outra linha separadora
console.log('-------------------------------------');

// Atende o próximo paciente da fila e adiciona seu nome à pilha de prontuários
prontuario.adicionarProntuario(filaAtendimento.atenderPaciente());
// Atende o próximo paciente da fila e adiciona seu nome à pilha de prontuários
prontuario.adicionarProntuario(filaAtendimento.atenderPaciente());

console.log('-------------------------------------');

// Mostra o estado atual da fila de atendimento
filaAtendimento.imprimirFila();
// Mostra o estado atual da pilha de prontuários
prontuario.imprimirPilha();

console.log('-------------------------------------');