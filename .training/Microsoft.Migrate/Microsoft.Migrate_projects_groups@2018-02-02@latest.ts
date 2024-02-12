import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateProjectsGroupsProps extends IAzAPIBaseProps {

}

/**
 * MigrateProjectsGroups resource
 */
export class MigrateProjectsGroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateProjectsGroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/projects/groups@2018-02-02";
  }

  protected getResourceBody(props: MigrateProjectsGroupsProps): string {
    return JSON.stringify(
        {properties: {machines: ["string"]}, eTag: "string"}
    );
  }
}
