import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlueprintBlueprintsVersionsProps extends IAzAPIBaseProps {

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
