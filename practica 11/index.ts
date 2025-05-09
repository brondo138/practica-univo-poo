import { Channel, NotifierFactory } from "./factories/NotifierFactory";
import { ValidatorFactory } from "./factories/ValidatorFactory";
import { NotificacionService } from "./services/NotificationServices";

const channels: Channel[] = ["email","sms", "push"];

channels.forEach(channel => {
    console.log("------------------------------------------");
    console.log(`Canal: ${channel.toUpperCase()}`);

    const notifier = NotifierFactory.create(channel);
    const validator = ValidatorFactory.create(channel);
    const service = new NotificacionService(notifier, validator);

    const testMessage = channel ==="email" ? "lovosalex0@gmail.com": "Hola desde TypeScript!";
    service.notify(testMessage);
});