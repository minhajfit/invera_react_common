export default class MyScreenDelegate {
    private setCusIdState: (state: any) => void = () => {};
    private setCusNmState: (state: any) => void = () => {};

    constructor() {
        this.onSave = this.onSave.bind(this);
    }

    // This method will be used by the parent to pass the state-updating functions
    setValueCallback(callbacks: { setCusIdState: (state: any) => void, setCusNmState: (state: any) => void }) {
        this.setCusIdState = callbacks.setCusIdState;
        this.setCusNmState = callbacks.setCusNmState;
    }

    // Method that the parent can call to update the values from the delegate
    updateValues(cusIdState: any, cusNmState: any): void {
        // Delegate can change the input values by calling the setter functions
        if (this.setCusIdState) this.setCusIdState(cusIdState);
        if (this.setCusNmState) this.setCusNmState(cusNmState);
    }

    onSave(cusId: string, cusNm: string): void {
        if (!cusId || !cusNm) {
            console.error('CUS-ID and CUS-NM are required.');
            return;
        }
    
        const requestData = {
            customerId: cusId,
            customerName: cusNm,
        };
    
        this.callService(requestData);
    }
    
    callService(data: { customerId: string; customerName: string }): void {
        console.log('Calling service with data:', data);
        // Replace with actual service call logic

        this.updateDelegateValues();
    }


     updateDelegateValues = () => {
        this.updateValues({
            value: 'NewCusId',
            id: 'txtCusId',
            showTitle: true,
            title: 'CUS-ID updated..',
            captionType: 'ShortLabel',
            characterCasing: 'Upper',
            stringLength: '8',
            mandatory: true,
        }, {
            value: 'NewCusNm ',
            id: 'txtCusNm',
            showTitle: true,
            title: 'CUS-NM updated..',
            captionType: 'LongLabel',
            stringLength: '15',
            mandatory: true,
        });
    };
}
// -----------------------------------