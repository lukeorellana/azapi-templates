import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecurityperimetersProfilesAccessrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:profiles;

/**
   * Inbound address prefixes (IPv4/IPv6)
   */
readonly addressPrefixes?: string[];

/**
   * Direction that specifies whether the access rules is inbound/outbound.
   */
readonly direction?: 'Inbound''Outbound';

/**
   * Outbound rules email address format.
   */
readonly emailAddresses?: string[];

/**
   * Outbound rules fully qualified domain name format.
   */
readonly fullyQualifiedDomainNames?: string[];

/**
   * Outbound rules phone number format.
   */
readonly phoneNumbers?: string[];

/**
   * List of subscription ids
   */
readonly subscriptions?: SubscriptionId[];

/**
   * Subscription id in the ARM id format.
   */
readonly id?: string;
}

/**
 * NetworkNetworksecurityperimetersProfilesAccessrules resource
 */
export class NetworkNetworksecurityperimetersProfilesAccessrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecurityperimetersProfilesAccessrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview";
  }

  protected getResourceBody(props: NetworkNetworksecurityperimetersProfilesAccessrulesProps): string {
    return JSON.stringify(
        {properties: {addressPrefixes: ["string"], direction: "string", emailAddresses: ["string"], fullyQualifiedDomainNames: ["string"], phoneNumbers: ["string"], subscriptions: [{id: "string"}]}}
    );
  }
}
