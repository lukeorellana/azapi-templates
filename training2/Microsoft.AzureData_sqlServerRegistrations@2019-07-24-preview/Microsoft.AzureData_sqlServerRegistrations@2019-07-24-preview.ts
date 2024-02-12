import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzuredataSqlserverregistrationsProps extends IAzAPIBaseProps {
/**
   * Optional Properties as JSON string
   */
readonly propertyBag?: string;

/**
   * Resource Group Name
   */
readonly resourceGroup?: string;

/**
   * Subscription Id
   */
readonly subscriptionId?: string;
}

/**
 * AzuredataSqlserverregistrations resource
 */
export class AzuredataSqlserverregistrations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzuredataSqlserverregistrationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview";
  }

  protected getResourceBody(props: AzuredataSqlserverregistrationsProps): string {
    return JSON.stringify(
        {properties: {propertyBag: "string", resourceGroup: "string", subscriptionId: "string"}}
    );
  }
}
