import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsMongodbdatabasesThroughputsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mongodbDatabases;

/**
   * The standard JSON format of a resource throughput
   */
readonly resource: ThroughputSettingsResourceOrThroughputSettingsGetPro...;

/**
   * Cosmos DB resource for autoscale settings. Either throughput is required or autoscaleSettings is required, but not both.
   */
readonly autoscaleSettings?: AutoscaleSettingsResource;

/**
   * Value of the Cosmos DB resource throughput. Either throughput is required or autoscaleSettings is required, but not both.
   */
readonly throughput?: number;

/**
   * Cosmos DB resource auto-upgrade policy
   */
readonly autoUpgradePolicy?: AutoUpgradePolicyResource;

/**
   * Represents maximum throughput container can scale up to.
   */
readonly maxThroughput: number;

/**
   * Represents throughput policy which service must adhere to for auto-upgrade
   */
readonly throughputPolicy?: ThroughputPolicyResource;

/**
   * Represents the percentage by which throughput can increase every time throughput policy kicks in.
   */
readonly incrementPercent?: number;

/**
   * Determines whether the ThroughputPolicy is active or not
   */
readonly isEnabled?: bool;
}

/**
 * DocumentdbDatabaseaccountsMongodbdatabasesThroughputsettings resource
 */
export class DocumentdbDatabaseaccountsMongodbdatabasesThroughputsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsMongodbdatabasesThroughputsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2023-04-15";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsMongodbdatabasesThroughputsettingsProps): string {
    return JSON.stringify(
        {properties: {resource: {autoscaleSettings: {autoUpgradePolicy: {throughputPolicy: {incrementPercent: "${int}", isEnabled: "${bool}"}}, maxThroughput: "${int}"}, throughput: "${int}"}}}
    );
  }
}
