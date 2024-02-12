import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkexperimentprofilesExperimentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:NetworkExperimentProfiles;

/**
   * The description of the details or intents of the Experiment
   */
readonly description?: string;

/**
   * The state of the Experiment
   */
readonly enabledState?: 'Disabled''Enabled';

/**
   * The endpoint A of an experiment
   */
readonly endpointA?: Endponumber;

/**
   * The endpoint B of an experiment
   */
readonly endpointB?: Endponumber;

/**
   * The endpoint URL
   */
readonly endpoint?: string;
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
