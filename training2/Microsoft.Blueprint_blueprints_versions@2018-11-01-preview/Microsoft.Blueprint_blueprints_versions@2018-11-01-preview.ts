import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlueprintBlueprintsVersionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:blueprnumbers;

/**
   * Name of the published blueprint definition.
   */
readonly blueprintName?: string;

/**
   * Version-specific change notes.
   */
readonly changeNotes?: string;

/**
   * Multi-line explain this resource.
   */
readonly description?: string;

/**
   * One-liner string explain this resource.
   */
readonly displayName?: string;

/**
   * Parameters required by this blueprint definition.
   */
readonly parameters?: object;

/**
   * Resource group placeholders defined by this blueprint definition.
   */
readonly resourceGroups?: object;

/**
   * The scope where this blueprint definition can be assigned.
   */
readonly targetScope?: 'managementGroup''subscription';
}

/**
 * BlueprintBlueprintsVersions resource
 */
export class BlueprintBlueprintsVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BlueprintBlueprintsVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Blueprint/blueprints/versions@2018-11-01-preview";
  }

  protected getResourceBody(props: BlueprintBlueprintsVersionsProps): string {
    return JSON.stringify(
        {properties: {blueprintName: "string", changeNotes: "string", description: "string", displayName: "string", parameters: {}, resourceGroups: {}, targetScope: "string"}}
    );
  }
}
