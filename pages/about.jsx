import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About the person I stole my website from
            </h1>
            <p className="description">
              "Sie fallen in das Haar der großen Dunkelheit, außer denen, die in
              der Übung sind Mit der Arbeit des Geistes ist es leicht, es
              rechtzeitig loszuwerden mit der Arbeit gibt es kein Verzeihen, sie
              sind verdunkelt, es sind die Pflichten, denen ich so ein Haar gebe
              denn es gibt keine Folge in der Art, dass es eilt, außer der
              Bequemlichkeit im Streben nach dem Leiden einiger der Geringsten
              geboren werden Bei Schmerzen, wie es bei Schmerzen der Fall ist,
              geben sie die Übung auf, die stattfindet Sie sind blind, außer
              denen, die verlassen werden Sie sind mühsam, um zur Zeit ihrer
              Arbeit zu fliehen und es ist bequem, es auszuüben, außer dass es
              bis zu dem Punkt weicher wird, wo es nicht mehr der Fall ist die
              Schmerzen der Wehen sind die gleichen Schmerzen, die ich gebe, es
              sei denn, dass Vorteil in und einige, aber jeder von ihnen, es ist
              eine gute Sache für Sie, wer jedoch kann etwas" - Luthfi
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
