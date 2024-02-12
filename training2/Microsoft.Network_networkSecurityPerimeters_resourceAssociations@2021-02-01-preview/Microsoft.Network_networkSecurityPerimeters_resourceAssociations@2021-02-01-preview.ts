import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecurityperimetersResourceassociationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkSecurityPerimeters;

/**
   * Access mode on the association.
   */
readonly accessMode?: 'Audit''Enforced''Learning';

/**
   * The PaaS resource to be associated.
   */
readonly privateLinkResource?: SubResource;

/**
   * Profile id to which the PaaS resource is associated.
   */
readonly profile?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkNetworksecurityperimetersResourceassociations resource
 */
export class NetworkNetworksecurityperimetersResourceassociations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecurityperimetersResourceassociationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview";
  }

  protected getResourceBody(props: NetworkNetworksecurityperimetersResourceassociationsProps): string {
    return JSON.stringify(
        {properties: {accessMode: "string", privateLinkResource: {id: "string"}, profile: {id: "string"}}}
    );
  }
}
