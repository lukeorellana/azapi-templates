import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsAssembliesProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationaccountsAssemblies resource
 */
export class LogicIntegrationaccountsAssemblies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsAssembliesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/assemblies@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsAssembliesProps): string {
    return JSON.stringify(
        {properties: {assemblyCulture: "string", assemblyName: "string", assemblyPublicKeyToken: "string", assemblyVersion: "string", changedTime: "string", contentLink: {uri: "string"}, contentType: "string", createdTime: "string"}}
    );
  }
}
