import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataDatacontrollersActivedirectoryconnectorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataControllers;

/**
   * Username and password for domain service account authentication.
   */
readonly domainServiceAccountLoginInformation?: BasicLoginInformation;

/**
   * null
   */
readonly spec: ActiveDirectoryConnectorSpec;

/**
   * null
   */
readonly status?: ActiveDirectoryConnectorStatus;

/**
   * Login password.
   */
readonly password?: string;

/**
   * Login username.
   */
readonly username?: string;

/**
   * null
   */
readonly activeDirectory: ActiveDirectoryConnectorDomainDetails;

/**
   * null
   */
readonly dns: ActiveDirectoryConnectorDNSDetails;

/**
   * null
   */
readonly domainControllers?: ActiveDirectoryDomainControllers;

/**
   * NETBIOS name of the Active Directory domain.
   */
readonly netbiosDomainName?: string;

/**
   * The distinguished name of the Active Directory Organizational Unit.
   */
readonly ouDistinguishedName?: string;

/**
   * Name (uppercase) of the Active Directory domain that this AD connector will be associated with.
   */
readonly realm: string;

/**
   * The service account provisioning mode for this Active Directory connector.
   */
readonly serviceAccountProvisioning?: 'automatic''manual';

/**
   * Information about the Primary Domain Controller (PDC) in the AD domain.
   */
readonly primaryDomainController?: ActiveDirectoryDomainController;

/**
   * null
   */
readonly secondaryDomainControllers?: ActiveDirectoryDomainController[];

/**
   * Fully-qualified domain name of a domain controller in the AD domain.
   */
readonly hostname: string;

/**
   * DNS domain name for which DNS lookups should be forwarded to the Active Directory DNS servers.
   */
readonly domainName?: string;

/**
   * List of Active Directory DNS server IP addresses.
   */
readonly nameserverIPAddresses: string[];

/**
   * Flag indicating whether to prefer Kubernetes DNS server response over AD DNS server response for IP address lookups.
   */
readonly preferK8sDnsForPtrLookups?: bool;

/**
   * Replica count for DNS proxy service. Default value is 1.
   */
readonly replicas?: number;

/**
   * The time that the custom resource was last updated.
   */
readonly lastUpdateTime?: string;

/**
   * The version of the replicaSet associated with the AD connector custom resource.
   */
readonly observedGeneration?: number;

/**
   * The state of the AD connector custom resource.
   */
readonly state?: string;
}

/**
 * AzurearcdataDatacontrollersActivedirectoryconnectors resource
 */
export class AzurearcdataDatacontrollersActivedirectoryconnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataDatacontrollersActivedirectoryconnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataDatacontrollersActivedirectoryconnectorsProps): string {
    return JSON.stringify(
        {properties: {domainServiceAccountLoginInformation: {password: "string", username: "string"}, spec: {activeDirectory: {domainControllers: {primaryDomainController: {hostname: "string"}, secondaryDomainControllers: [{hostname: "string"}]}, netbiosDomainName: "string", ouDistinguishedName: "string", realm: "string", serviceAccountProvisioning: "string"}, dns: {domainName: "string", nameserverIPAddresses: ["string"], preferK8sDnsForPtrLookups: "${bool}", replicas: "${int}"}}, status: {lastUpdateTime: "string", observedGeneration: "${int}", state: "string"}}}
    );
  }
}
