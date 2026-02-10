import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DemoModal } from '@/components/modals/DemoModal';
import siducLogo from '@/assets/siduc-logo.png';
import heroBg from '@/assets/siduc-hero-bg.png';

const bullets = [
  'Centralização e padronização',
  'Redução de retrabalho',
  'Visão por escola, distrito e rede',
  'Auditoria e rastreabilidade',
  'Perfis de acesso granulares',
];

export const SiducHero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] overflow-hidden flex items-center">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

      <div className="section-container relative z-10 py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <img src={siducLogo} alt="SIDUC" className="h-20 sm:h-24 mb-6" />

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight text-foreground">
            Gestão integrada do ecossistema educacional.
          </h1>

          <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Transporte, escolas, alunos, professores, merenda, pré-matrícula, diário do aluno e módulos complementares — tudo conectado.
          </p>

          <ul className="mt-6 space-y-2.5">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="gradient" size="lg" onClick={() => setModalOpen(true)}>
              Agendar demonstração
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver módulos
              <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
      <DemoModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};
