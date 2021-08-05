// This page is the main athlete dashboard
// Requires a get request for specific athlete practice history

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import athletePageGet from '../api/athletePageGet';
import PracticesTable from '../components/for-athlete-page/PracticesTable';
import BackButton from '../components/for-athlete-page/BackButton';

export default function AthletePage({
  teamId, athleteChoice, setAthleteChoice, techniquesList,
}) {
  // set up state hook
  const [practiceHistory, setPracticeHistory] = useState(null);

  // retreive athlete practice history
  useEffect(() => { athletePageGet(teamId, athleteChoice.id, setPracticeHistory); console.log('athlete data retrieved'); }, []);

  // Render nothing until the async athletePageGet() runs in useEffect
  if (practiceHistory === null) { return null; }
  console.log(practiceHistory);

  return (
    <div className="AthletePage">
      <Header title={athleteChoice.name} />
      <Main>
        <PracticesTable techniquesList={techniquesList} practiceHistory={practiceHistory} />
      </Main>
      <Footer>
        <br />
        <BackButton setAthleteChoice={setAthleteChoice} />
      </Footer>
    </div>
  );
}
