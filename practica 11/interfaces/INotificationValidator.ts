export interface INotificationValidator{
    validate(message: string): string[];
}