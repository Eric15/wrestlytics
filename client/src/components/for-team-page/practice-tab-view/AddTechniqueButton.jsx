// This button renders in PracticeSelections2
// When clicked, it renders an additional dropdown list for selecting a technique

import React from 'react';

export default function AddTechniqueButton({ techniqueChoice, setTechniqueChoice }) {
  // This event handler increase techniqueChoice array length by 1
  // This triggers an additional render of ChooseTechniqueButton
  const handleClick = () => {
    // This prevents the user from clicking AddTechniqueButton if they haven't chosen a technique
    if (techniqueChoice[techniqueChoice.length-1] !== 'Choose Technique') {
      setTechniqueChoice((prevChoice) => [...prevChoice, 'Choose Technique']);
                                              /* ^^^ this includes "Choose Technique" to set the
                                              default value of the next dropdown list */
    }
  };

  return (
    <div className="AddTechniqueButton">
      <li><button onClick={handleClick}>Add Technique</button></li>
    </div>
  );
}
