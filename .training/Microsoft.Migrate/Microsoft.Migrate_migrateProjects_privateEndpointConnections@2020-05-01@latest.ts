import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateMigrateprojectsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * MigrateMigrateprojectsPrivateendpointconnections resource
 */
export class MigrateMigrateprojectsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateMigrateprojectsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01";
  }

  protected getResourceBody(props: MigrateMigrateprojectsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}, eTag: "string"}
    );
  }
}
