import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlueprintBlueprintsProps extends IAzAPIBaseProps {

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
