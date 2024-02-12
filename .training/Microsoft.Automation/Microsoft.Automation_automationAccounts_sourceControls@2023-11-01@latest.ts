import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsSourcecontrolsProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsSourcecontrols resource
 */
export class AutomationAutomationaccountsSourcecontrols extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsSourcecontrolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/sourceControls@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsSourcecontrolsProps): string {
    return JSON.stringify(
        {properties: {autoSync: "${bool}", branch: "string", description: "string", folderPath: "string", publishRunbook: "${bool}", repoUrl: "string", securityToken: {accessToken: "string", refreshToken: "string", tokenType: "string"}, sourceType: "string"}}
    );
  }
}
