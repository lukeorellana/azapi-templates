import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesMigrationconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * ServicebusNamespacesMigrationconfigurations resource
 */
export class ServicebusNamespacesMigrationconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesMigrationconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/migrationConfigurations@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesMigrationconfigurationsProps): string {
    return JSON.stringify(
        {properties: {postMigrationName: "string", targetNamespace: "string"}}
    );
  }
}
