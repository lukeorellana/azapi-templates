import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:profiles;

/**
   * Resource reference to the Azure DNS zone
   */
readonly azureDnsZone?: ResourceReference;

/**
   * Key-Value pair representing migration properties for domains.
   */
readonly extendedProperties?: AFDDomainPropertiesExtendedProperties;

/**
   * The host name of the domain. Must be a domain name.
   */
readonly hostName: string;

/**
   * Resource reference to the Azure resource where custom domain ownership was prevalidated
   */
readonly preValidatedCustomDomainResourceId?: ResourceReference;

/**
   * The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
   */
readonly tlsSettings?: AFDDomainHttpsParameters;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Defines the source of the SSL certificate.
   */
readonly certificateType: 'AzureFirstPartyManagedCertificate''CustomerCertificate''ManagedCertificate';

/**
   * TLS protocol version that will be used for Https
   */
readonly minimumTlsVersion?: 'TLS10''TLS12';

/**
   * Resource reference to the secret. ie. subs/rg/profile/secret
   */
readonly secret?: ResourceReference;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
