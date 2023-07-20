"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
    navigator.clipboard.writeText("m_gtech@hotmail.com");
  };

  useEffect(() => {
    console.log("teste");
    setTimeout(() => {
      setShowMessage(false);
      console.log("teste");
    }, 5000);
  }, [showMessage]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Crie seu site personalizado em minutos e atraia mais clientes para o
          seu negócio com facilidade e profissionalismo.
        </p>
      </div>
        <p className={styles.contato}>Contatos:</p>
        <div className={styles.opcoes}>
          <div>
            <Link
              href="https://wa.me/16982259594?text=Olá,%20gostaria%20de%20um%20orçamento"
              target="_blank"
            >
              <div className={styles.botaoWhatsapp}>
                <Image
                  src="/img/whatsapp.png"
                  alt="Next.js Logo"
                  width={40}
                  height={40}
                />
                <p>Whatsapp</p>
              </div>
            </Link>
          </div>
          <div className={styles.img}>
            <div className={styles.botaoCopiar}>
              <Image
                src="/img/email.png"
                alt="Next.js Logo"
                width={40}
                height={40}
              />
              <p onClick={() => handleButtonClick()}>meuemail@meuemail.com</p>
            </div>
            {showMessage ? (
              <div className={styles.done1}>
                <Image src="/img/done.png" alt="Done" width={40} height={40} />
              </div>
            ) : (
              <div className={styles.done2}></div>
            )}
          </div>
      </div>

      <div className={styles.center}>
        <Image src='/img/MGTech.png' alt='MGTech' width={300} height={300} />
      </div>

      <div className={styles.grid}>
        <p className={styles.card}>
          <h2>Tecnologia</h2>
          <p>
            Focados em trazer sempre melhores e mais atuais soluções
            tecnológicas disponíveis no mercado.
          </p>
        </p>

        <p className={styles.card}>
          <h2>Facilidade</h2>
          <p>
            Entre em contato conosco, estamos sempre a disposição para levar a
            melhor experiência aos nossos clientes.
          </p>
        </p>

        <p className={styles.card}>
          <h2>Solução</h2>
          <p>
            Sabemos que cada negócio tem sua demanda por isso procuramos atender
            nossos cliente de maneira acertiva.
          </p>
        </p>

        <p className={styles.card}>
          <h2>Negócios</h2>
          <p>
            Alavanque seus negócios de paginas estaticas para apresentar seu
            negócio até sistemas complexos para gerir suas empresa
          </p>
        </p>
      </div>
    </main>
  );
}
