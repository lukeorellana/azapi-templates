import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesconfigurationSourcecontrolconfigurationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Name-value pairs of protected configuration settings for the configuration
   */
readonly configurationProtectedSettings?: object;

/**
   * Option to enable Helm Operator for this git configuration.
   */
readonly enableHelmOperator?: bool;

/**
   * Properties for Helm operator.
   */
readonly helmOperatorProperties?: HelmOperatorProperties;

/**
   * Instance name of the operator - identifying the specific configuration.
   */
readonly operatorInstanceName?: string;

/**
   * The namespace to which this operator is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
   */
readonly operatorNamespace?: string;

/**
   * Any Parameters for the Operator instance in string format.
   */
readonly operatorParams?: string;

/**
   * Scope at which the operator will be installed.
   */
readonly operatorScope?: 'cluster''namespace';

/**
   * Type of the operator
   */
readonly operatorType?: 'Flux';

/**
   * Url of the SourceControl Repository.
   */
readonly repositoryUrl?: string;

/**
   * Base64-encoded known_hosts contents containing public SSH keys required to access private Git instances
   */
readonly sshKnownHostsContents?: string;

/**
   * Values override for the operator Helm chart.
   */
readonly chartValues?: string;

/**
   * Version of the operator Helm chart.
   */
readonly chartVersion?: string;
}

/**
 * KubernetesconfigurationSourcecontrolconfigurations resource
 */
export class KubernetesconfigurationSourcecontrolconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KubernetesconfigurationSourcecontrolconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KubernetesConfiguration/sourceControlConfigurations@2022-11-01";
  }

  protected getResourceBody(props: KubernetesconfigurationSourcecontrolconfigurationsProps): string {
    return JSON.stringify(
        {properties: {configurationProtectedSettings: {}, enableHelmOperator: "${bool}", helmOperatorProperties: {chartValues: "string", chartVersion: "string"}, operatorInstanceName: "string", operatorNamespace: "string", operatorParams: "string", operatorScope: "string", operatorType: "Flux", repositoryUrl: "string", sshKnownHostsContents: "string"}}
    );
  }
}
