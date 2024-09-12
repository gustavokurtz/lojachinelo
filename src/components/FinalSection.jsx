'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FinalSection() {
  const { ref: card1Ref, inView: card1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card2Ref, inView: card2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card3Ref, inView: card3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card4Ref, inView: card4InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card5Ref, inView: card5InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card6Ref, inView: card6InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section>
      {/* Prioridades da Empresa */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#FECB00] mb-8">A sua empresa é nossa prioridade</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-md"
            ref={card1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={card1InView ? { opacity: 1, y: 0 } : {}} // Anima somente quando estiver na viewport
            transition={{ duration: 0.8 }}
          >
            <img src="https://i.postimg.cc/NjWzKZc8/icones-chinelo-entrega.png" alt="Entrega Ágil" className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Entrega Ágil</h3>
            <p>Receba seus produtos rapidamente, sem atrasos.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-md"
            ref={card2Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={card2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <img src="https://i.postimg.cc/vZRrfy4m/icones-chinelo-pagamento.png" alt="Pagamento Facilitado" className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Pagamento Facilitado</h3>
            <p>Opções de pagamento flexíveis para sua conveniência.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-md"
            ref={card3Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={card3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img src="https://i.postimg.cc/Sxqd291s/icones-chinelo-duravel.png" alt="Durabilidade e Qualidade" className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Durabilidade e Qualidade</h3>
            <p>Produtos que resistem ao tempo com a melhor qualidade.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-md"
            ref={card4Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={card4InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1 }}
          >
            <img src="https://i.postimg.cc/Kj2kqPM3/icones-chinelo-personalizacao.png" alt="Personalização sob Demanda" className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Personalização sob Demanda</h3>
            <p>Produtos feitos sob medida para sua empresa.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-md"
            ref={card5Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={card5InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <img src="https://i.postimg.cc/Fz7q6SXm/icones-chinelo-urgencia.png" alt="Atendimento com Urgências" className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Atendimento com Urgências</h3>
            <p>Atendimento rápido para as suas necessidades urgentes.</p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="p-6 bg-gray-100 rounded-lg shadow-md"
            ref={card6Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={card6InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3 }}
          >
            <img src="https://i.postimg.cc/3wxPGVfd/icones-chinelo-experiencia.png" alt="7 anos atuando no Mercado" className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">7 anos atuando no Mercado</h3>
            <p>Experiência e confiança garantidas no mercado.</p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Perguntas Frequentes (FAQ)</h2>
        <motion.div
          className="space-y-4"
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <details className="p-4 bg-gray-100 rounded-lg shadow-md">
            <summary className="font-bold text-[#FECB00]">Como Funciona?</summary>
            <p className="mt-2">Explicação detalhada sobre como o serviço funciona.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg shadow-md">
            <summary className="font-bold text-[#FECB00]">Quais as Características?</summary>
            <p className="mt-2">Características dos produtos oferecidos.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg shadow-md">
            <summary className="font-bold text-[#FECB00]">Quais os Detalhes do Produto?</summary>
            <p className="mt-2">Mais detalhes sobre os produtos disponíveis.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg shadow-md">
            <summary className="font-bold text-[#FECB00]">Como eu faço para pedir orçamento?</summary>
            <p className="mt-2">Passo a passo para solicitar um orçamento.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg shadow-md">
            <summary className="font-bold text-[#FECB00]">Artes/Layout</summary>
            <p className="mt-2">Informações sobre os layouts disponíveis para personalização.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg shadow-md">
            <summary className="font-bold text-[#FECB00]">Numerações</summary>
            <p className="mt-2">Detalhes sobre as numerações disponíveis.</p>
          </details>
        </motion.div>
      </div>
      <div className="bg-[#FECB00] py-8 text-center mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black">Frete Fixo R$40,00 - Consulte Condições</h2>
        <p className="mt-4 font-bold text-black">
          Fabricamos e entregamos mais de 100 mil pares de chinelos personalizados, com alta durabilidade e qualidade.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <h3 className="font-bold text-black">Horário de atendimento</h3>
            <p className="font-bold text-black">Segunda a sexta 08:00 às 17:00</p>
          </div>
          <div>
            <h3 className="font-bold text-black">Redes Sociais</h3>
            <p className="font-bold text-black">Instagram: @topchinelos</p>
          </div>
          <div>
            <h3 className="font-bold text-black">Contatos</h3>
            <p className="font-bold text-black">Email: contato@topchinelos.com</p>
            <p className="font-bold text-black">Telefone: (31) 98231-6489</p>
            <p className="font-bold text-black">Endereço: Rua dos Cardeais, 78, Nova Vespasiano - MG</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
