import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Sku of the site network service.
   */
readonly sku?: Sku;

/**
   * The managed identity of the Site network service, if configured.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: UserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserAssignedIdentity;

/**
   * The goal state of the site network service resource. This has references to the configuration group value objects that describe the desired state of the site network service.
   */
readonly desiredStateConfigurationGroupValueReferences?: SiteNetworkServicePropertiesFormatDesiredStateConfig...;

/**
   * Managed resource group configuration.
   */
readonly managedResourceGroupConfiguration?: ManagedResourceGroupConfiguration;

/**
   * The network service design version resource reference.
   */
readonly networkServiceDesignVersionResourceReference?: DeploymentResourceIdReference;

/**
   * The site details
   */
readonly siteReference?: ReferencedResource;

/**
   * 
   */
readonly {customized property}?: ReferencedResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Set the object type
   */
readonly idType: OpenSecret;

/**
   * The resource reference arm id type.
   */
readonly idType: 'Open';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The resource reference arm id type.
   */
readonly idType: 'Secret';

/**
   * Resource ID.
   */
readonly id?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;
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
