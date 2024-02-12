import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsCredentialsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * Gets or sets the description of the credential.
   */
readonly description?: string;

/**
   * Gets or sets the password of the credential.
   */
readonly password: string;

/**
   * Gets or sets the user name of the credential.
   */
readonly userName: string;
}

/**
 * AutomationAutomationaccountsCredentials resource
 */
export class AutomationAutomationaccountsCredentials extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsCredentialsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/credentials@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsCredentialsProps): string {
    return JSON.stringify(
        {properties: {description: "string", password: "string", userName: "string"}}
    );
  }
}
