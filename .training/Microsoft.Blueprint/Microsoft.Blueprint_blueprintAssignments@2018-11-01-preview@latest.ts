import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlueprintBlueprintassignmentsProps extends IAzAPIBaseProps {

}

/**
 * BlueprintBlueprintassignments resource
 */
export class BlueprintBlueprintassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BlueprintBlueprintassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview";
  }

  protected getResourceBody(props: BlueprintBlueprintassignmentsProps): string {
    return JSON.stringify(
        {properties: {blueprintId: "string", description: "string", displayName: "string", locks: {excludedPrincipals: ["string"], mode: "string"}, parameters: {}, resourceGroups: {}, scope: "string"}}
    );
  }
}
