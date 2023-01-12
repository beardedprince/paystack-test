import { Component } from '@angular/core';
declare var PaystackPop: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Paystack = PaystackPop;
  title = 'paystack-test';

  openStack() {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_dc7c232fe6f9d7ff3eaeeda082074ef765244dbf', // Replace with your public key
      reference: new Date().getTime().toString(),
      email: 'ollie@yopmail.com',
      amount: 200000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      onCancel: () => {
        this.onClose();
      },
      onSuccess: (transaction: any) => {
        this.onSuccess(transaction);
      },
    });
   
  
    
  }

  onClose() {
    
  }

  onSuccess(data: any) {
    console.log('data', data)
  }
}
