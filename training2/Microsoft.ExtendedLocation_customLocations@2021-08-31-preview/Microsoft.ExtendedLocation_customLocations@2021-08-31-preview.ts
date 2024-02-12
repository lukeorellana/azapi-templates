import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ExtendedlocationCustomlocationsProps extends IAzAPIBaseProps {
/**
   * Identity for the resource.
   */
readonly identity?: Identity;

/**
   * The identity type.
   */
readonly type?: 'None''SystemAssigned';

/**
   * This is optional input that contains the authentication that should be used to generate the namespace.
   */
readonly authentication?: CustomLocationPropertiesAuthentication;

/**
   * Contains the reference to the add-on that contains charts to deploy CRDs and operators.
   */
readonly clusterExtensionIds?: string[];

/**
   * Display name for the Custom Locations location.
   */
readonly displayName?: string;

/**
   * Connected Cluster or AKS Cluster. The Custom Locations RP will perform a checkAccess API for listAdminCredentials permissions.
   */
readonly hostResourceId?: string;

/**
   * Type of host the Custom Locations is referencing (Kubernetes, etc...).
   */
readonly hostType?: 'Kubernetes';

/**
   * Kubernetes namespace that will be created on the specified cluster.
   */
readonly namespace?: string;

/**
   * Provisioning State for the Custom Location.
   */
readonly provisioningState?: string;

/**
   * The type of the Custom Locations authentication
   */
readonly type?: string;

/**
   * The kubeconfig value.
   */
readonly value?: string;
}

/**
 * ExtendedlocationCustomlocations resource
 */
export class ExtendedlocationCustomlocations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ExtendedlocationCustomlocationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ExtendedLocation/customLocations@2021-08-31-preview";
  }

  protected getResourceBody(props: ExtendedlocationCustomlocationsProps): string {
    return JSON.stringify(
        {properties: {authentication: {type: "string", value: "string"}, clusterExtensionIds: ["string"], displayName: "string", hostResourceId: "string", hostType: "Kubernetes", namespace: "string", provisioningState: "string"}}
    );
  }
}
