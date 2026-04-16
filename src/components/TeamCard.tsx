// MÄÄRITTELY: Kerrotaan TypeScriptille, mitä tietoja kortti tarvitsee (Propsit)
interface CardProps {
  name: string;        // Kortin omistajan nimi
  role: string;        // Työtehtävä/rooli
  isLead?: boolean;    // Onko tämä johtaja? (? tarkoittaa, että ei ole pakollinen)
  votes?: number;      // Äänimäärä, joka tulee App.tsx:stä
  onVote?: () => void; // Funktio, jota kutsutaan kun nappia painetaan
}

export function TeamCard({ name, role, isLead, votes, onVote }: CardProps) {
  return (
    /* ULKOASUN RUNKO: Käytetään JavaScriptin "Template Stringiä" (` `), 
       jotta voimme vaihtaa tyylejä muuttujien perusteella (${isLead ? ...}).
    */
    <div className={`rounded-2xl shadow-lg p-6 flex flex-col items-center w-64 border-2 transition-all 
      ${isLead 
        ? 'border-t-16 border-green-400 shadow-green-300 bg-white scale-110' // Johtajan tyyli (vihreä yläreuna, isompi koko)
        : 'border-gray-100 bg-gray-300 border-t-8 border-t-amber-500'       // Jäsenen tyyli (amber-yläreuna, harmahtava tausta)
      }`}>
      
      {/* TIETOJEN TULOSTUS: Aaltosulkeet { } tarkoittavat, että tulostetaan JavaScript-muuttuja */}
      <h2 className="text-xl font-bold text-slate-800">{name}</h2>
      <p className="text-indigo-600 font-medium mb-6 uppercase text-sm tracking-widest">{role}</p>
      
      <div className="flex flex-col items-center gap-3 w-full">
        
        {/*EHDOLLINEN RENDERÖINTI (isLead && ...): 
           Tämä tarkoittaa: "Jos isLead on totta, näytä seuraava osa".
        */}
        {isLead && (
          <div className="flex flex-col items-center bg-slate-50 p-4 rounded-xl w-full">
            <span className="text-xl font-bold text-slate-600">Like ❤️</span>
            <span className="text-5xl font-black text-orange-500">{votes}</span>
          </div>
        )}

        {/*KÄÄNTEINEN EHTO (!isLead && ...):
           Tämä tarkoittaa: "Jos EI ole lead, näytä nappi".
        */}
        {!isLead && (
          <button 
            /* TAPAHTUMANKÄSITTELY: Kun nappia painetaan, 
               kutsutaan onVote-funktiota, joka nostaa äänimäärää App.tsx:ssä.
            */
            onClick={onVote}
            className="w-full py-3 rounded-xl font-bold bg-blue-500 text-white hover:bg-green-600 transition-all active:scale-95 shadow-md"
          >
            Vote! 👍
          </button>
        )}
      </div>
    </div>
  );
}