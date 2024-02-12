import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsComputepoliciesProps extends IAzAPIBaseProps {

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
