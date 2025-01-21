export default class AddAccountScreenDelegate {
    private stateCallbacks: Record<string, (state: any) => void> = {};
  
    constructor() {
      this.onSave = this.onSave.bind(this);
    }
  
    /**
     * This method will be used by the parent to pass multiple state-updating functions dynamically.
     * @param callbacks - An object where the keys are state names and the values are state-updating functions.
     */
    setValueCallback(callbacks: Record<string, (state: any) => void>): void {
      this.stateCallbacks = { ...this.stateCallbacks, ...callbacks };
    }
  
    /**
     * Updates the state for a specific key using the corresponding callback function.
     * @param key - The state key to update.
     * @param value - The new state value to set.
     */
    updateState(key: string, value: any): void {
      if (this.stateCallbacks[key]) {

        console.log(key);
        console.log(this.stateCallbacks[key]);

        this.stateCallbacks[key](value);
      } else {
        console.warn(`State callback for key "${key}" is not defined.`);
      }
    }
  
    // Example function to demonstrate usage
     onSave(): void {
      // Example: update specific states
      this.updateState("txtCusIdState", {
        value: 'NewCusId',
        id: 'txtCusId',
        showTitle: true,
        title: 'CUS-ID updated..',
        captionType: 'ShortLabel',
        characterCasing: 'Upper',
        stringLength: '8',
        mandatory: true,
    });
      this.updateState("txtCusNmState", {
        value: 'NewCusNm ',
        id: 'txtCusNm',
        showTitle: true,
        title: 'CUS-NM updated..',
        captionType: 'LongLabel',
        stringLength: '15',
        mandatory: true,
    });
    }
  }
  