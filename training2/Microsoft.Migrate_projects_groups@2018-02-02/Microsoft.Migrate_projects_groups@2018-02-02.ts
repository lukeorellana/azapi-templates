import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateProjectsGroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:projects;

/**
   * For optimistic concurrency control.
   */
readonly eTag?: string;

/**
   * List of machine names that are part of this group.
   */
readonly machines: string[];
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
