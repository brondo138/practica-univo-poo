//DIP
interface NotificationSMS{
    sendSMS():void
}
interface NotificationEmail{
    sendEmail(): void;
}

class Notifications implements NotificationSMS, NotificationEmail{
    sendSMS(): void {
        console.log("Enviando SMS...");
    }

    sendEmail(): void {
        console.log("Enviando Email...");
    }
}

class Email{
    constructor(private method: NotificationEmail){}

    sendEmail(){
        this.method.sendEmail();
    }
}

class SMS{
    constructor(private method: NotificationSMS){}

    sendSMS(){
        this.method.sendSMS();
    }
}

const email = new Email(new Notifications())
const sms = new SMS(new Notifications())

email.sendEmail();
sms.sendSMS();