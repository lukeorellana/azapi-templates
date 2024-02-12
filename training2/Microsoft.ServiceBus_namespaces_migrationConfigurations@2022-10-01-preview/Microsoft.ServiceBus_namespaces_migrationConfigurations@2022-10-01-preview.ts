import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesMigrationconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Name to access Standard Namespace after migration
   */
readonly postMigrationName: string;

/**
   * Existing premium Namespace ARM Id name which has no entities, will be used for migration
   */
readonly targetNamespace: string;
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
