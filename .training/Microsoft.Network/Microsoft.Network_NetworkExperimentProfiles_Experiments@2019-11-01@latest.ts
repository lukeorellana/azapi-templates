import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkexperimentprofilesExperimentsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkexperimentprofilesExperiments resource
 */
export class NetworkNetworkexperimentprofilesExperiments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkexperimentprofilesExperimentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01";
  }

  protected getResourceBody(props: NetworkNetworkexperimentprofilesExperimentsProps): string {
    return JSON.stringify(
        {properties: {description: "string", enabledState: "string", endpointA: {endpoint: "string", name: "string"}, endpointB: {endpoint: "string", name: "string"}}}
    );
  }
}
