import { useState } from 'react';
import { TeamCard } from './components/TeamCard';

export default function App() {
  /* STATE (TILA): totalVotes on sovelluksen "muisti". 
     setTotalVotes on työkalu, jolla sitä muutetaan.
  */
  const [totalVotes, setTotalVotes] = useState(0);

  // LOGIIKKA: Funktio, joka kasvattaa yhteistä äänipottia
  const handleVote = () => {
    setTotalVotes(totalVotes + 1);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-12 text-slate-800">Our Project Team</h1>
     
      {/*KOMPONENTIN KÄYTTÖ (Lead):
         Passataan (välitetään) tälle votes-luku, jota se näyttää.
      */}
      <div className="mb-24"> 
        <TeamCard 
          name="Mika Perttu" 
          role="Lead Developer" 
          isLead={true} 
          votes={totalVotes}
        />
      </div> 

      {/* KOMPONENTTIEN LISTAUS:
          Annamme jokaiselle kortille saman onVote-funktion (handleVote).
          Kun kuka tahansa heistä klikkaa nappia, sama totalVotes kasvaa.
      */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-16">
        <TeamCard name="Sara Smith" role="UI Designer" onVote={handleVote} />
        <TeamCard name="Matti Meikäläinen" role="Project Manager" onVote={handleVote} />
        <TeamCard name="Mika Sankari" role="Software Architect" onVote={handleVote} />
      </div>
    </div>
  );
}