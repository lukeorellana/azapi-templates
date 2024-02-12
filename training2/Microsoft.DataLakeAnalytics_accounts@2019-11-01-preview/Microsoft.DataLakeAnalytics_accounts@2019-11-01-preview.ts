import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsProps extends IAzAPIBaseProps {
/**
   * The list of compute policies associated with this account.
   */
readonly computePolicies?: CreateComputePolicyWithAccountParametersOrComputePol...[];

/**
   * The list of Data Lake Store accounts associated with this account.
   */
readonly dataLakeStoreAccounts: AddDataLakeStoreWithAccountParametersOrDataLakeStore...[];

/**
   * The default Data Lake Store account associated with this account.
   */
readonly defaultDataLakeStoreAccount: string;

/**
   * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
   */
readonly firewallAllowAzureIps?: 'Disabled''Enabled';

/**
   * The list of firewall rules associated with this account.
   */
readonly firewallRules?: CreateFirewallRuleWithAccountParametersOrFirewallRul...[];

/**
   * The current state of the IP address firewall for this account.
   */
readonly firewallState?: 'Disabled''Enabled';

/**
   * The maximum supported degree of parallelism for this account.
   */
readonly maxDegreeOfParallelism?: number;

/**
   * The maximum supported degree of parallelism per job for this account.
   */
readonly maxDegreeOfParallelismPerJob?: number;

/**
   * The maximum supported jobs running under the account at the same time.
   */
readonly maxJobCount?: number;

/**
   * The minimum supported priority per job for this account.
   */
readonly minPriorityPerJob?: number;

/**
   * The commitment tier for the next month.
   */
readonly newTier?: 'Commitment_100000AUHours''Commitment_10000AUHours''Commitment_1000AUHours''Commitment_100AUHours''Commitment_500000AUHours''Commitment_50000AUHours''Commitment_5000AUHours''Commitment_500AUHours''Consumption';

/**
   * The number of days that job metadata is retained.
   */
readonly queryStoreRetention?: number;

/**
   * The list of Azure Blob Storage accounts associated with this account.
   */
readonly storageAccounts?: AddStorageAccountWithAccountParametersOrStorageAccou...[];

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

/**
   * The optional suffix for the Data Lake Store account.
   */
readonly suffix?: string;

/**
   * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
   */
readonly endIpAddress: string;

/**
   * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
   */
readonly startIpAddress: string;

/**
   * The access key associated with this Azure Storage account that will be used to connect to it.
   */
readonly accessKey: string;

/**
   * The optional suffix for the storage account.
   */
readonly suffix?: string;
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
