import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesBuildtasksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The alternative updatable name for a build task.
   */
readonly alias: string;

/**
   * The platform properties against which the build has to happen.
   */
readonly platform: PlatformProperties;

/**
   * The properties that describes the source(code) for the build task.
   */
readonly sourceRepository: SourceRepositoryProperties;

/**
   * The current status of build task.
   */
readonly status?: 'Disabled''Enabled';

/**
   * Build timeout in seconds.
   */
readonly timeout?: number;

/**
   * The CPU configuration in terms of number of cores required for the build.
   */
readonly cpu?: number;

/**
   * The operating system type required for the build.
   */
readonly osType: 'Linux''Windows';

/**
   * The value of this property indicates whether the source control commit trigger is enabled or not.
   */
readonly isCommitTriggerEnabled?: bool;

/**
   * The full URL to the source code repository
   */
readonly repositoryUrl: string;

/**
   * The authorization properties for accessing the source code repository.
   */
readonly sourceControlAuthProperties?: SourceControlAuthInfo;

/**
   * The type of source control service.
   */
readonly sourceControlType: 'Github''VisualStudioTeamService';

/**
   * The value of this property indicates whether the source control commit trigger is enabled or not.
   */
readonly isCommitTriggerEnabled?: bool;

/**
   * The full URL to the source code repository
   */
readonly repositoryUrl: string;

/**
   * The authorization properties for accessing the source code repository.
   */
readonly sourceControlAuthProperties?: SourceControlAuthInfo;

/**
   * The type of source control service.
   */
readonly sourceControlType: 'Github''VisualStudioTeamService';

/**
   * Time in seconds that the token remains valid
   */
readonly expiresIn?: number;

/**
   * The refresh token used to refresh the access token.
   */
readonly refreshToken?: string;

/**
   * The scope of the access token.
   */
readonly scope?: string;

/**
   * The access token used to access the source control provider.
   */
readonly token: string;

/**
   * The type of Auth token.
   */
readonly tokenType?: 'OAuth''PAT';
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
