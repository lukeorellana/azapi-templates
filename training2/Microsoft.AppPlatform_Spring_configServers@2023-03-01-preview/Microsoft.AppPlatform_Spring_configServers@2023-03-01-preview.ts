import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringConfigserversProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:Spring;

/**
   * Settings of config server.
   */
readonly configServer?: ConfigServerSettings;

/**
   * Error when apply config server settings.
   */
readonly error?: Error;

/**
   * Property of git environment.
   */
readonly gitProperty?: ConfigServerGitProperty;

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
readonly label?: string;

/**
   * Password of git repository basic auth.
   */
readonly password?: string;

/**
   * Private sshKey algorithm of git repository.
   */
readonly privateKey?: string;

/**
   * Repositories of git.
   */
readonly repositories?: GitPatternRepository[];

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
readonly label?: string;

/**
   * Password of git repository basic auth.
   */
readonly password?: string;

/**
   * Collection of pattern of the repository
   */
readonly pattern?: string[];

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

/**
   * The code of error.
   */
readonly code?: string;

/**
   * The message of error.
   */
readonly message?: string;
}

/**
 * AppplatformSpringConfigservers resource
 */
export class AppplatformSpringConfigservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringConfigserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/configServers@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringConfigserversProps): string {
    return JSON.stringify(
        {properties: {configServer: {gitProperty: {hostKey: "string", hostKeyAlgorithm: "string", label: "string", password: "string", privateKey: "string", repositories: [{hostKey: "string", hostKeyAlgorithm: "string", label: "string", name: "string", password: "string", pattern: ["string"], privateKey: "string", searchPaths: ["string"], strictHostKeyChecking: "${bool}", uri: "string", username: "string"}], searchPaths: ["string"], strictHostKeyChecking: "${bool}", uri: "string", username: "string"}}, error: {code: "string", message: "string"}}}
    );
  }
}
