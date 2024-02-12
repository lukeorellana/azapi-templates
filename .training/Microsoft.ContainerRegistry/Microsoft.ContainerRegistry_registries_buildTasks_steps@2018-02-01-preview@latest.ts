import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesBuildtasksStepsProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesBuildtasksSteps resource
 */
export class ContainerregistryRegistriesBuildtasksSteps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesBuildtasksStepsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesBuildtasksStepsProps): string {
    return JSON.stringify(
        {properties: {type: "string"}}
    );
  }
}
