import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsProps extends IAzAPIBaseProps {

}

/**
 * DatalakeanalyticsAccounts resource
 */
export class DatalakeanalyticsAccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakeanalyticsAccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeAnalytics/accounts@2019-11-01-preview";
  }

  protected getResourceBody(props: DatalakeanalyticsAccountsProps): string {
    return JSON.stringify(
        {properties: {computePolicies: [{name: "string", properties: {maxDegreeOfParallelismPerJob: "${int}", minPriorityPerJob: "${int}", objectId: "string", objectType: "string"}}], dataLakeStoreAccounts: [{name: "string", properties: {suffix: "string"}}], defaultDataLakeStoreAccount: "string", firewallAllowAzureIps: "string", firewallRules: [{name: "string", properties: {endIpAddress: "string", startIpAddress: "string"}}], firewallState: "string", maxDegreeOfParallelism: "${int}", maxDegreeOfParallelismPerJob: "${int}", maxJobCount: "${int}", minPriorityPerJob: "${int}", newTier: "string", queryStoreRetention: "${int}", storageAccounts: [{name: "string", properties: {accessKey: "string", suffix: "string"}}]}}
    );
  }
}
