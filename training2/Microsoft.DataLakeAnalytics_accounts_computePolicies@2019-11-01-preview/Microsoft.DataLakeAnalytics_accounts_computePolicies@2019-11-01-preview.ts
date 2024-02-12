import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsComputepoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
   */
readonly maxDegreeOfParallelismPerJob?: number;

/**
   * The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
   */
readonly minPriorityPerJob?: number;

/**
   * The AAD object identifier for the entity to create a policy for.
   */
readonly objectId: string;

/**
   * The type of AAD object the object identifier refers to.
   */
readonly objectType: 'Group''ServicePrincipal''User';
}

/**
 * DatalakeanalyticsAccountsComputepolicies resource
 */
export class DatalakeanalyticsAccountsComputepolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakeanalyticsAccountsComputepoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeAnalytics/accounts/computePolicies@2019-11-01-preview";
  }

  protected getResourceBody(props: DatalakeanalyticsAccountsComputepoliciesProps): string {
    return JSON.stringify(
        {properties: {maxDegreeOfParallelismPerJob: "${int}", minPriorityPerJob: "${int}", objectId: "string", objectType: "string"}}
    );
  }
}
