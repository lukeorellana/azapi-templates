import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesTaskrunsProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesTaskruns resource
 */
export class ContainerregistryRegistriesTaskruns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesTaskrunsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesTaskrunsProps): string {
    return JSON.stringify(
        {properties: {forceUpdateTag: "string", runRequest: {agentPoolName: "string", isArchiveEnabled: "${bool}", logTemplate: "string", type: "string"}}}
    );
  }
}
