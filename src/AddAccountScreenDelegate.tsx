export default class AddAccountScreenDelegate {
  constructor() {}

  private stateCallbacks: Record<
    string,
    { set: (state: any) => void; get: () => any }
  > = {};

  // Method to set state callbacks
  setValueCallback(
    callbacks: Record<string, { set: (state: any) => void; get: () => any }>,
  ): void {
    this.stateCallbacks = { ...this.stateCallbacks, ...callbacks };
  }

  // Method to update the state
  updateState(key: string, value: any): void {
    this.stateCallbacks[key].set(value); // Directly calling the set method
  }

  // Method to get the current state value
  getStateValue(key: string): any {
    return this.stateCallbacks[key].get();
  }

  // Method to get the value of a specific key in the state
  getValue(state: any, key: string): any {
    if (state.hasOwnProperty(key)) {
      return state[key]; // Return the value of the key if found
    }
    return undefined; // Return undefined if key is not found
  }

     // Example function to demonstrate usage
     handle_btnCmwOk(): void {
      // Update specific states
      this.updateState("txtCusIdState", {
        value: "NewCusId",
        id: "txtCusId",
        showTitle: true,
        title: "CUS-ID updated..",
        captionType: "ShortLabel",
        characterCasing: "Upper",
        stringLength: "8",
        mandatory: true,
      });
  
      this.updateState("txtCusNmState", {
        value: "NewCusNm",
        id: "txtCusNm",
        showTitle: true,
        title: "CUS-NM updated..",
        captionType: "LongLabel",
        stringLength: "15",
        mandatory: true,
      });
  
      // Fetch current state values
      const cusIdState = this.getStateValue("txtCusIdState");
      const cusNmState = this.getStateValue("txtCusNmState");
  
      console.log("Current txtCusIdState:", cusIdState);
      console.log("Current txtCusNmState:", cusNmState);
  
      Object.keys(cusIdState).forEach((key) => {
        console.log(`${key}:`, cusIdState[key]);
      });
  
      // Get specific value
      const id = this.getValue(cusIdState, "title");  // Returns 'CUS-ID'
      const name = this.getValue(cusNmState, "title");  // Returns 'CUS-ID'
  
      alert(id + " - " + name);
  
  
  
      // Get value for a non-existing key
      const nonExistingValue = this.getValue(cusIdState, "nonExistingKey");  // Returns undefined
      console.log("Non Existing Key:", nonExistingValue);
    }
  
    
}
