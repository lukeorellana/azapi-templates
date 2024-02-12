import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConnectedvmwarevsphereVcentersProps extends IAzAPIBaseProps {

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
