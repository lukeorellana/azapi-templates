import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecuritycontactsProps extends IAzAPIBaseProps {
/**
   * Defines whether to send email notifications about new security alerts
   */
readonly alertNotifications?: SecurityContactPropertiesAlertNotifications;

/**
   * List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact.
   */
readonly emails?: string;

/**
   * Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
   */
readonly notificationsByRole?: SecurityContactPropertiesNotificationsByRole;

/**
   * The security contact's phone number
   */
readonly phone?: string;

/**
   * Defines the minimal alert severity which will be sent as email notifications
   */
readonly minimalSeverity?: 'High''Low''Medium';

/**
   * Defines if email notifications will be sent about new security alerts
   */
readonly state?: 'Off''On';

/**
   * Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles:
   */
readonly roles?: String array containing any of:'AccountAdmin''Contributor''Owner''ServiceAdmin';

/**
   * Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription.
   */
readonly state?: 'Off''On';
}

/**
 * SecuritySecuritycontacts resource
 */
export class SecuritySecuritycontacts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecuritySecuritycontactsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/securityContacts@2020-01-01-preview";
  }

  protected getResourceBody(props: SecuritySecuritycontactsProps): string {
    return JSON.stringify(
        {properties: {alertNotifications: {minimalSeverity: "string", state: "string"}, emails: "string", notificationsByRole: {roles: ["string"], state: "string"}, phone: "string"}}
    );
  }
}
