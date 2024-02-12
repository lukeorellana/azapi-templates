import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsCertificatesProps extends IAzAPIBaseProps {

}

/**
 * AutomationAutomationaccountsCertificates resource
 */
export class AutomationAutomationaccountsCertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsCertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/certificates@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsCertificatesProps): string {
    return JSON.stringify(
        {properties: {base64Value: "string", description: "string", isExportable: "${bool}", thumbprint: "string"}}
    );
  }
}
