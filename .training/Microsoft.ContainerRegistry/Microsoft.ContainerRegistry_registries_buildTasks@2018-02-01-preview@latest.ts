import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesBuildtasksProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesBuildtasks resource
 */
export class ContainerregistryRegistriesBuildtasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesBuildtasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/buildTasks@2018-02-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesBuildtasksProps): string {
    return JSON.stringify(
        {properties: {alias: "string", platform: {cpu: "${int}", osType: "string"}, sourceRepository: {isCommitTriggerEnabled: "${bool}", repositoryUrl: "string", sourceControlAuthProperties: {expiresIn: "${int}", refreshToken: "string", scope: "string", token: "string", tokenType: "string"}, sourceControlType: "string"}, status: "string", timeout: "${int}"}}
    );
  }
}
