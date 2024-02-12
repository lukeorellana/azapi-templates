import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebHostingenvironmentsConfigurationsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hostingEnvironments;

/**
   * The URL referencing the Azure Key Vault certificate secret that should be used as the default SSL/TLS certificate for sites with the custom domain suffix.
   */
readonly certificateUrl?: string;

/**
   * The default custom domain suffix to use for all sites deployed on the ASE.
   */
readonly dnsSuffix?: string;

/**
   * The user-assigned identity to use for resolving the key vault certificate reference. If not specified, the system-assigned ASE identity will be used if available.
   */
readonly keyVaultReferenceIdentity?: string;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hostingEnvironments;

/**
   * Property to enable and disable new private endpoint connection creation on ASE
   */
readonly allowNewPrivateEndpointConnections?: bool;

/**
   * Property to enable and disable FTP on ASEV3
   */
readonly ftpEnabled?: bool;

/**
   * Customer provided Inbound IP Address. Only able to be set on Ase create.
   */
readonly inboundIpAddressOverride?: string;

/**
   * Property to enable and disable Remote Debug on ASEV3
   */
readonly remoteDebugEnabled?: bool;
}

/**
 * WebHostingenvironmentsConfigurations resource
 */
export class WebHostingenvironmentsConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebHostingenvironmentsConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/hostingEnvironments/configurations@2022-09-01";
  }

  protected getResourceBody(props: WebHostingenvironmentsConfigurationsProps): string {
    return JSON.stringify(
        {properties: {certificateUrl: "string", dnsSuffix: "string", keyVaultReferenceIdentity: "string"}, kind: "string"}
    );
  }
}
