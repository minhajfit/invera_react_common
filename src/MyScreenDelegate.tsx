export default class MyScreenDelegate {
    constructor() {
        this.onSave = this.onSave.bind(this);
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
    }
    
}
