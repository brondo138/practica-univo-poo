import { User } from "./models/user";
import { EmailNotifier } from "./notifiers/emailnotifier";
import { SMSNotifier } from "./notifiers/smsNotifier";
import { UserService } from "./services/userServices";

function main(){
    const emailNotifier = new EmailNotifier();
    const userServiceEmail = new UserService(emailNotifier);
    const user1 = new User("Alex", "lovosalex0@gmail.com", 22);
    userServiceEmail.register(user1);

    console.log("\n--------------------------------------\n");

    const smsNotifer = new SMSNotifier();
    const userServiceSMS = new UserService(smsNotifer);
    const user2 = new User("", "no email.", -312);
    userServiceSMS.register(user2);
}

main();