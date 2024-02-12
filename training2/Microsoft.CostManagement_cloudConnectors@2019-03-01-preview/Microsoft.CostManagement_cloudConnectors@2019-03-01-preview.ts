import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementCloudconnectorsProps extends IAzAPIBaseProps {
/**
   * Connector kind (eg aws)
   */
readonly kind?: string;

/**
   * Connector billing model
   */
readonly billingModel?: 'autoUpgrade''expired''premium''trial';

/**
   * Credentials authentication key (eg AWS ARN)
   */
readonly credentialsKey?: string;

/**
   * Credentials secret (eg AWS ExternalId)
   */
readonly credentialsSecret?: string;

/**
   * Default ManagementGroupId
   */
readonly defaultManagementGroupId?: string;

/**
   * Connector DisplayName
   */
readonly displayName?: string;

/**
   * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
   */
readonly reportId?: string;

/**
   * Billing SubscriptionId
   */
readonly subscriptionId?: string;
}

/**
 * CostmanagementCloudconnectors resource
 */
export class CostmanagementCloudconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementCloudconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/cloudConnectors@2019-03-01-preview";
  }

  protected getResourceBody(props: CostmanagementCloudconnectorsProps): string {
    return JSON.stringify(
        {properties: {billingModel: "string", credentialsKey: "string", credentialsSecret: "string", defaultManagementGroupId: "string", displayName: "string", reportId: "string", subscriptionId: "string"}, kind: "string"}
    );
  }
}
