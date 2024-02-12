import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateMigrateprojectsProps extends IAzAPIBaseProps {

}

/**
 * MigrateMigrateprojects resource
 */
export class MigrateMigrateprojects extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateMigrateprojectsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/migrateProjects@2020-05-01";
  }

  protected getResourceBody(props: MigrateMigrateprojectsProps): string {
    return JSON.stringify(
        {properties: {publicNetworkAccess: "string", serviceEndpoint: "string", utilityStorageAccountId: "string"}, eTag: "string"}
    );
  }
}
