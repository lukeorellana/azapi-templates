import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbDatabaseaccountsCassandrakeyspacesViewsThroughputsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:views;

/**
   * Identity for the resource.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: object;

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
 * DocumentdbDatabaseaccountsCassandrakeyspacesViewsThroughputsettings resource
 */
export class DocumentdbDatabaseaccountsCassandrakeyspacesViewsThroughputsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbDatabaseaccountsCassandrakeyspacesViewsThroughputsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2023-03-01-preview";
  }

  protected getResourceBody(props: DocumentdbDatabaseaccountsCassandrakeyspacesViewsThroughputsettingsProps): string {
    return JSON.stringify(
        {properties: {resource: {autoscaleSettings: {autoUpgradePolicy: {throughputPolicy: {incrementPercent: "${int}", isEnabled: "${bool}"}}, maxThroughput: "${int}"}, throughput: "${int}"}}}
    );
  }
}
