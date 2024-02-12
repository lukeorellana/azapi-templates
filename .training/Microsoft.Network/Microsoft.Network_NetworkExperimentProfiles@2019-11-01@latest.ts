import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkexperimentprofilesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkexperimentprofiles resource
 */
export class NetworkNetworkexperimentprofiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkexperimentprofilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/NetworkExperimentProfiles@2019-11-01";
  }

  protected getResourceBody(props: NetworkNetworkexperimentprofilesProps): string {
    return JSON.stringify(
        {properties: {enabledState: "string"}, etag: "string"}
    );
  }
}
