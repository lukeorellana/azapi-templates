import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsRuntimeenvironmentsPackagesProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsRuntimeenvironmentsPackages resource
 */
export class AutomationAutomationaccountsRuntimeenvironmentsPackages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsRuntimeenvironmentsPackagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview";
  }

  protected getResourceBody(props: AutomationAutomationaccountsRuntimeenvironmentsPackagesProps): string {
    return JSON.stringify(
        {properties: {contentLink: {contentHash: {algorithm: "string", value: "string"}, uri: "string", version: "string"}}, allOf: {location: "string", tags: {}}}
    );
  }
}
