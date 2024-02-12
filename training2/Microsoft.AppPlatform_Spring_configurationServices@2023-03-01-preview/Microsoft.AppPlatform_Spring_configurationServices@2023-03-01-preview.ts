import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringConfigurationservicesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * The settings of Application Configuration Service.
   */
readonly settings?: ConfigurationServiceSettings;

/**
   * Property of git environment.
   */
readonly gitProperty?: ConfigurationServiceGitProperty;

/**
   * Repositories of Application Configuration Service git property.
   */
readonly repositories?: ConfigurationServiceGitRepository[];

/**
   * Public sshKey of git repository.
   */
readonly hostKey?: string;

/**
   * SshKey algorithm of git repository.
   */
readonly hostKeyAlgorithm?: string;

/**
   * Label of the repository
   */
readonly label: string;

/**
   * Password of git repository basic auth.
   */
readonly password?: string;

/**
   * Collection of patterns of the repository
   */
readonly patterns: string[];

/**
   * Private sshKey algorithm of git repository.
   */
readonly privateKey?: string;

/**
   * Searching path of the repository
   */
readonly searchPaths?: string[];

/**
   * Strict host key checking or not.
   */
readonly strictHostKeyChecking?: bool;

/**
   * URI of the repository
   */
readonly uri: string;

/**
   * Username of git repository basic auth.
   */
readonly username?: string;
}

/**
 * AppplatformSpringConfigurationservices resource
 */
export class AppplatformSpringConfigurationservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringConfigurationservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/configurationServices@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringConfigurationservicesProps): string {
    return JSON.stringify(
        {properties: {settings: {gitProperty: {repositories: [{hostKey: "string", hostKeyAlgorithm: "string", label: "string", name: "string", password: "string", patterns: ["string"], privateKey: "string", searchPaths: ["string"], strictHostKeyChecking: "${bool}", uri: "string", username: "string"}]}}}}
    );
  }
}
