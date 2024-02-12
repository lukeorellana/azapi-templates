import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementConnectorsProps extends IAzAPIBaseProps {
/**
   * Connector kind (eg aws)
   */
readonly kind?: string;

/**
   * Credentials authentication key (eg AWS ARN)
   */
readonly credentialsKey?: string;

/**
   * Credentials secret (eg AWS ExternalId)
   */
readonly credentialsSecret?: string;

/**
   * Connector DisplayName (defaults to Name)
   */
readonly displayName?: string;

/**
   * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
   */
readonly reportId?: string;

/**
   * Connector status
   */
readonly status?: 'active''error''suspended';
}

/**
 * CostmanagementConnectors resource
 */
export class CostmanagementConnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementConnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/connectors@2018-08-01-preview";
  }

  protected getResourceBody(props: CostmanagementConnectorsProps): string {
    return JSON.stringify(
        {properties: {credentialsKey: "string", credentialsSecret: "string", displayName: "string", reportId: "string", status: "string"}, kind: "string"}
    );
  }
}
