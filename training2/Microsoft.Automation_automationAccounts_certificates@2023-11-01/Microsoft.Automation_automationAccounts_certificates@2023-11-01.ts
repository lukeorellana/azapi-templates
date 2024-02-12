import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsCertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * Gets or sets the base64 encoded value of the certificate.
   */
readonly base64Value: string;

/**
   * Gets or sets the description of the certificate.
   */
readonly description?: string;

/**
   * Gets or sets the is exportable flag of the certificate.
   */
readonly isExportable?: bool;

/**
   * Gets or sets the thumbprint of the certificate.
   */
readonly thumbprint?: string;
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
