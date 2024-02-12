import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlueprintBlueprintsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

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

/**
   * Published versions of this blueprint definition.
   */
readonly versions?: For Bicep, you can use theany()function.;
}

/**
 * BlueprintBlueprints resource
 */
export class BlueprintBlueprints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BlueprintBlueprintsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Blueprint/blueprints@2018-11-01-preview";
  }

  protected getResourceBody(props: BlueprintBlueprintsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", parameters: {}, resourceGroups: {}, targetScope: "string"}}
    );
  }
}
