import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridnetworkSitesProps extends IAzAPIBaseProps {
/**
   * List of NFVIs
   */
readonly nfvis?: NFVIs[];

/**
   * Set the object type
   */
readonly nfviType: AzureArcKubernetesAzureCoreAzureOperatorNexus;

/**
   * The NFVI type.
   */
readonly nfviType: 'AzureArcKubernetes';

/**
   * The reference to the custom location.
   */
readonly customLocationReference?: ReferencedResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The NFVI type.
   */
readonly nfviType: 'AzureCore';

/**
   * The NFVI type.
   */
readonly nfviType: 'AzureOperatorNexus';

/**
   * The reference to the custom location.
   */
readonly customLocationReference?: ReferencedResource;
}

/**
 * HybridnetworkSites resource
 */
export class HybridnetworkSites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridnetworkSitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridNetwork/sites@2023-09-01";
  }

  protected getResourceBody(props: HybridnetworkSitesProps): string {
    return JSON.stringify(
        {properties: {nfvis: [{name: "string", nfviType: "string"}]}}
    );
  }
}
