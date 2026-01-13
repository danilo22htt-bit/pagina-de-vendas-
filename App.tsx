
import React from 'react';
import { 
  ChevronDown, 
  Target, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  XCircle, 
  CheckCircle2, 
  Lock
} from 'lucide-react';

// --- Components ---

// Added optional children type to resolve TS errors regarding missing children in JSX usage
const Section = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <section className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

// Added optional children type to resolve TS errors regarding missing children in JSX usage
const Button = ({ children, variant = 'primary', className = "" }: { children?: React.ReactNode, variant?: 'primary' | 'outline', className?: string }) => {
  const baseStyles = "px-10 py-5 text-sm font-medium tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center";
  const variants = {
    primary: "bg-zinc-100 text-zinc-950 hover:bg-zinc-300",
    outline: "border border-zinc-700 text-zinc-300 hover:border-zinc-100 hover:text-zinc-100"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Page Sections ---

const Hero = () => (
  <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-700 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="z-10 fade-in">
      <p className="text-zinc-500 tracking-[0.4em] uppercase text-xs mb-8">Arben Evolution</p>
      <h1 className="serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight max-w-4xl">
        Sua vontade não é o problema. <br />
        <span className="italic">Sua estrutura é.</span>
      </h1>
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
        O Arben Evolution não é sobre motivação passageira. É sobre a arquitetura de uma rotina de alta performance e a construção de uma identidade inabalável.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button>Acessar o Sistema</Button>
      </div>
    </div>
    
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce">
      <ChevronDown size={24} />
    </div>
  </header>
);

const RealityIdentification = () => (
  <Section className="border-t border-zinc-900">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <h2 className="serif text-3xl md:text-4xl mb-8">A estagnação é o <br />sintoma, não a causa.</h2>
        <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
          <p>Você acorda com a intenção de ser produtivo, mas termina o dia com a sensação de que correu em círculos. O peso do potencial não explorado gera uma frustração silenciosa.</p>
          <p>O excesso de informação criou uma paralisia. Você sabe <i>o que</i> deveria fazer, mas não sabe <i>como</i> sustentar isso quando o entusiasmo inicial desaparece.</p>
        </div>
      </div>
      <div className="bg-zinc-900/50 p-8 md:p-12 border border-zinc-800">
        <ul className="space-y-6">
          {[
            "Rotina refém de urgências alheias.",
            "Falta de clareza sobre o próximo passo estratégico.",
            "A sensação de estar vivendo abaixo do próprio nível.",
            "Ciclos intermináveis de 'começar e parar'."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-4 items-start">
              <span className="text-zinc-600 font-mono text-sm mt-1">0{idx + 1}</span>
              <p className="text-zinc-300">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

const IllusionBreak = () => (
  <Section className="bg-zinc-100 text-zinc-950">
    <div className="max-w-3xl">
      <h2 className="serif text-3xl md:text-5xl mb-10 leading-tight">Por que a força de vontade sozinha está te falhando.</h2>
      <div className="space-y-8 text-zinc-700 text-lg font-light leading-relaxed">
        <p>A maioria das pessoas tenta mudar através da intensidade. Elas buscam vídeos motivacionais e dicas soltas para um 'hack' milagroso. Isso é um erro logístico.</p>
        <p>Mudança real não é um evento emocional. É uma questão de engenharia comportamental. Se você não tem um sistema que sustenta suas decisões quando você está cansado, você voltará ao seu estado anterior. Sempre.</p>
        <p className="font-medium text-zinc-950 italic">O Arben Evolution substitui o esforço caótico pela execução estruturada.</p>
      </div>
    </div>
  </Section>
);

const SystemPresentation = () => (
  <Section>
    <div className="text-center mb-20">
      <p className="text-zinc-500 tracking-[0.3em] uppercase text-xs mb-4">A Fundação</p>
      <h2 className="serif text-3xl md:text-5xl">O Sistema Arben Evolution</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-10 border border-zinc-800 hover:border-zinc-600 transition-colors">
        <Target className="mb-6 text-zinc-100" size={32} />
        <h3 className="serif text-xl mb-4 text-zinc-100">Clareza Estratégica</h3>
        <p className="text-zinc-400 font-light leading-relaxed">Elimine o ruído. Defina suas prioridades inegociáveis e saiba exatamente o que ignorar para manter o foco no que move o ponteiro.</p>
      </div>
      <div className="p-10 border border-zinc-800 hover:border-zinc-600 transition-colors">
        <Layers className="mb-6 text-zinc-100" size={32} />
        <h3 className="serif text-xl mb-4 text-zinc-100">Arquitetura de Rotina</h3>
        <p className="text-zinc-400 font-light leading-relaxed">Construa um cronograma que trabalha para você, não contra você. Implemente blocos de tempo e protocolos de recuperação de energia.</p>
      </div>
      <div className="p-10 border border-zinc-800 hover:border-zinc-600 transition-colors">
        <ShieldCheck className="mb-6 text-zinc-100" size={32} />
        <h3 className="serif text-xl mb-4 text-zinc-100">Consolidação de Identidade</h3>
        <p className="text-zinc-400 font-light leading-relaxed">Deixe de ser alguém que "está tentando" para se tornar alguém que "executa". A disciplina deixa de ser um esforço e se torna quem você é.</p>
      </div>
    </div>
  </Section>
);

const Outcomes = () => (
  <Section className="border-t border-zinc-900">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1">
        <h2 className="serif text-3xl md:text-4xl mb-8">A mudança tangível.</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <CheckCircle2 className="text-zinc-100 shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-zinc-100">Mente Descomprimida</h4>
              <p className="text-zinc-500 font-light">O fim da ansiedade por tarefas pendentes. Tudo tem seu lugar e seu tempo.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="text-zinc-100 shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-zinc-100">Disciplina Silenciosa</h4>
              <p className="text-zinc-500 font-light">Você não precisa mais "se convencer" a fazer o que precisa ser feito.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="text-zinc-100 shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-zinc-100">Ritmo de Progresso</h4>
              <p className="text-zinc-500 font-light">Resultados mensuráveis acumulados através de semanas de execução consistente.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 relative group overflow-hidden">
          <img 
            src="https://picsum.photos/seed/evolution/800/1000" 
            alt="Foco e Estrutura" 
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="border border-zinc-100/20 p-8 backdrop-blur-sm">
                <span className="serif text-2xl italic">Evolução é uma decisão.</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const FilterSection = () => (
  <Section className="bg-zinc-950 border-y border-zinc-900">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-8 md:p-12 bg-zinc-900/30">
        <h3 className="serif text-2xl mb-8 text-zinc-100 italic">O Arben Evolution é para você se:</h3>
        <ul className="space-y-4">
          {[
            "Busca um método lógico e direto, sem distrações.",
            "Está disposto a reconstruir seus hábitos do zero.",
            "Valoriza o tempo e a eficiência acima da motivação.",
            "Deseja assumir o controle total da sua trajetória pessoal."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 text-zinc-400 font-light">
              <CheckCircle2 size={18} className="text-zinc-500 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 md:p-12">
        <h3 className="serif text-2xl mb-8 text-zinc-400">Não é para você se:</h3>
        <ul className="space-y-4">
          {[
            "Busca atalhos mágicos ou soluções sem esforço.",
            "Não está disposto a seguir um sistema estruturado.",
            "Prefere o conforto da estagnação à dor do crescimento.",
            "Espera por motivação externa para agir."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 text-zinc-600 font-light">
              <XCircle size={18} className="text-zinc-700 mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

const CallToAction = () => (
  <Section className="text-center py-32">
    <div className="max-w-2xl mx-auto">
      <h2 className="serif text-4xl md:text-5xl mb-6">A fundação para sua próxima fase.</h2>
      <p className="text-zinc-500 mb-12 font-light">Acesso imediato ao sistema completo Arben Evolution.</p>
      
      <div className="mb-12 inline-block text-left p-8 border border-zinc-800 bg-zinc-900/20">
        <div className="flex items-center gap-2 mb-2 text-zinc-500 text-xs tracking-widest uppercase">
          <Lock size={12} /> Pagamento Único
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-zinc-500 text-lg">R$</span>
          <span className="text-5xl font-light tracking-tighter text-zinc-100">39,90</span>
        </div>
      </div>
      
      <div>
        <Button className="w-full sm:w-auto">
          Entrar no Arben Evolution <ArrowRight size={18} className="ml-3" />
        </Button>
      </div>
      
      <p className="mt-8 text-zinc-600 text-sm italic">O tempo de agir é quando a clareza se apresenta.</p>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-zinc-900 text-center text-zinc-700 text-xs tracking-widest uppercase">
    <p>© Arben Evolution. Todos os direitos reservados.</p>
  </footer>
);

export default function App() {
  return (
    <div className="antialiased selection:bg-zinc-100 selection:text-zinc-950">
      <Hero />
      <RealityIdentification />
      <IllusionBreak />
      <SystemPresentation />
      <Outcomes />
      <FilterSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
