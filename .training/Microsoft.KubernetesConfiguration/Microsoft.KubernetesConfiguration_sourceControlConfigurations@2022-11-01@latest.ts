import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesconfigurationSourcecontrolconfigurationsProps extends IAzAPIBaseProps {

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
