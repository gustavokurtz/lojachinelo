'use client'; // Isso força o componente a ser renderizado no cliente
import { motion } from 'framer-motion';


export default function Main() {
  return (
    <main className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Imagem do Produto */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center items-center p-5"
          initial={{ opacity: 0, x: -100 }} // Começa fora da tela à esquerda
          animate={{ opacity: 1, x: 0 }} // Anima para a posição original
          transition={{ duration: 1 }} // Duração de 1 segundo
        >
          <img
            className="max-w-full h-auto max-h-93 object-contain"
            src="https://i.ibb.co/bFMKTqB/Design-sem-nome.png"
            alt="Produto"
          />
        </motion.div>

        {/* Texto de Apresentação */}
        <motion.div
          className="lg:w-1/2 w-full mt-8 lg:mt-0 text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }} // Começa fora da tela à direita
          animate={{ opacity: 1, x: 0 }} // Anima para a posição original
          transition={{ duration: 1 }} // Duração de 1 segundo
        >
          <h1 className="text-3xl font-bold text-[#FECB00]">
            Chinelos totalmente personalizados para sua empresa ou eventos
          </h1>
          <p className="mt-4 text-black-500 font-bold">
            Conforto e estilo para seus pés! Você sabia que os chinelos podem
            transformar seu dia? Não são apenas um acessório, mas uma escolha
            inteligente para quem preza pelo conforto sem abrir mão do estilo.
          </p>

          {/* Lista de Benefícios */}
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center">
              <svg
                className="h-6 w-6 text-[#FECB00] mr-2"
                fill="none"
                stroke="yellow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Conforto incomparável!
            </li>
            <li className="flex items-center">
              <svg
                className="h-6 w-6 text-[#FECB00] mr-2"
                fill="none"
                stroke="yellow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Estilo que acompanha você!
            </li>
            <li className="flex items-center">
              <svg
                className="h-6 w-6 text-[#FECB00] mr-2"
                fill="none"
                stroke="yellow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Durabilidade garantida!
            </li>
          </ul>

          {/* Botão de Ação */}
          <button className="mt-6 bg-[#FECB00] font-bold text-black py-2 px-6 rounded-xl">      
            <a href="/contato">SOLICITAR ORÇAMENTO</a>
          </button>
        </motion.div>
      </div>
    </main>
  );
}
