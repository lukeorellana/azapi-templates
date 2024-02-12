import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesTasksProps extends IAzAPIBaseProps {

}

/**
 * ContainerregistryRegistriesTasks resource
 */
export class ContainerregistryRegistriesTasks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesTasksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesTasksProps): string {
    return JSON.stringify(
        {properties: {agentConfiguration: {cpu: "${int}"}, agentPoolName: "string", credentials: {customRegistries: {}, sourceRegistry: {loginMode: "string"}}, isSystemTask: "${bool}", logTemplate: "string", platform: {architecture: "string", os: "string", variant: "string"}, status: "string", step: {contextAccessToken: "string", contextPath: "string", type: "string"}, timeout: "${int}", trigger: {baseImageTrigger: {baseImageTriggerType: "string", name: "string", status: "string", updateTriggerEndpoint: "string", updateTriggerPayloadType: "string"}, sourceTriggers: [{name: "string", sourceRepository: {branch: "string", repositoryUrl: "string", sourceControlAuthProperties: {expiresIn: "${int}", refreshToken: "string", scope: "string", token: "string", tokenType: "string"}, sourceControlType: "string"}, sourceTriggerEvents: ["string"], status: "string"}], timerTriggers: [{name: "string", schedule: "string", status: "string"}]}}}
    );
  }
}
