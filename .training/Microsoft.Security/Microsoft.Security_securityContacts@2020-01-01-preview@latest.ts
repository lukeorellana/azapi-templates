import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecuritySecuritycontactsProps extends IAzAPIBaseProps {

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
