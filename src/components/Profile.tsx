import { useState } from 'react';

// 1. TypeScript-rajapinta (Interface): Määrittelee, mitä tietoja tämä komponentti tarvitsee ulkopuolelta.
interface ProfileProps {
  name: string; // Käyttäjän nimi
  role: string; // Käyttäjän rooli
}

// 2. Komponentin määrittely: Otetaan vastaan propsit (name ja role).
export function Profile({ name, role }: ProfileProps) {
  
  // 3. Tila (State): Luodaan muuttuja 'likes' ja funktio 'setLikes' sen muuttamiseen. Alkuarvo on 0.
  const [likes, setLikes] = useState(0);

  return (
    // 4. Tailwind CSS: Muotoillaan kortti valkoiseksi, pyöristetyksi ja lisätään varjo.
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm border border-gray-100 text-center">
      
      {/* Näytetään propseina saadut tiedot */}
      <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
      <p className="text-slate-500 font-medium mb-6">{role}</p>     
      
      {/* 5. Painike: Kun tätä klikataan (onClick), kasvatetaan tykkäysten määrää yhdellä. */}
      <button
        onClick={() => setLikes((prev) => prev + 1)}
        className="w-full bg-blue-50 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-100 flex justify-center gap-2 transition-colors"
      >
        <span>Tykkää</span>
        <span>❤️ {likes}</span>
      </button>
    </div>
  );
}