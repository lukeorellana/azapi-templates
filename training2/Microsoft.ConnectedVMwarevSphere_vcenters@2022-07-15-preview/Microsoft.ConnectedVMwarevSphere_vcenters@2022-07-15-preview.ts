import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVcentersProps extends IAzAPIBaseProps {
/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
   */
readonly kind?: string;

/**
   * Gets or sets the extended location.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The extended location type.
   */
readonly type?: string;

/**
   * Username / Password Credentials to connect to vcenter.
   */
readonly credentials?: VICredential;

/**
   * Gets or sets the FQDN/IPAddress of the vCenter.
   */
readonly fqdn: string;

/**
   * Gets or sets the port of the vCenter.
   */
readonly port?: number;

/**
   * Gets or sets the password to connect with the vCenter.
   */
readonly password?: string;

/**
   * Gets or sets username to connect with the vCenter.
   */
readonly username?: string;
}

/**
 * ConnectedvmwarevsphereVcenters resource
 */
export class ConnectedvmwarevsphereVcenters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConnectedvmwarevsphereVcentersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ConnectedVMwarevSphere/vcenters@2022-07-15-preview";
  }

  protected getResourceBody(props: ConnectedvmwarevsphereVcentersProps): string {
    return JSON.stringify(
        {properties: {credentials: {password: "string", username: "string"}, fqdn: "string", port: "${int}"}, kind: "string", extendedLocation: {name: "string", type: "string"}}
    );
  }
}
