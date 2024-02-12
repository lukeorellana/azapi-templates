import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzuredataSqlserverregistrationsSqlserversProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlServerRegistrations;

/**
   * Cores of the Sql Server.
   */
readonly cores?: number;

/**
   * Sql Server Edition.
   */
readonly edition?: string;

/**
   * Sql Server Json Property Bag.
   */
readonly propertyBag?: string;

/**
   * ID for Parent Sql Server Registration.
   */
readonly registrationID?: string;

/**
   * Version of the Sql Server.
   */
readonly version?: string;
}

/**
 * AzuredataSqlserverregistrationsSqlservers resource
 */
export class AzuredataSqlserverregistrationsSqlservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzuredataSqlserverregistrationsSqlserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview";
  }

  protected getResourceBody(props: AzuredataSqlserverregistrationsSqlserversProps): string {
    return JSON.stringify(
        {properties: {cores: "${int}", edition: "string", propertyBag: "string", registrationID: "string", version: "string"}}
    );
  }
}
