import React, { useEffect, useRef, useState } from 'react';
import TextField from './components/TextField';
import { initializeEventDelegation } from './SampleQuerySelectorDelegate';

function App(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  // State to manage text field values
  const [field1Value, setField1Value] = useState<string>('Initial Value');

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = initializeEventDelegation(containerRef.current);
      return cleanup;
    }
  }, []);

  return (
    <div ref={containerRef}>
    
      <TextField
        data-field="txtCusId"
        id="txtCusId"
        label="CUS-ID"
        value={field1Value}
        onChange={(e) => setField1Value(e.target.value)}
        showTitle={true}
        title="CUS-ID"
        captionType="ColumnHeading"
        showTitleAsLink={false}
        width="0"
        visible={true}
        enabled={true}
        setFilterInputText={false}
        columnSpan="1"
        characterCasing="Upper"
        stringLength="8"
        mandatory={false}
        startRow={false}
        endRow={false}
        showFontIconOnlyInTitle={false}
        fontIconAlignment="Right"
        type="Text"
        focusIn={false}
        onBlurEvent={false}
        addExtraProperties={false}
        disabledStyle="DEFAULT"
        canBeHidden={false}
      />
      
      <button data-action="logValues">Log Values</button>
      <button data-action="setFieldValue">Set Field Value</button>
    </div>
  );
}

export default App;