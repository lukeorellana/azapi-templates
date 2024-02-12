import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BlueprintBlueprintsArtifactsProps extends IAzAPIBaseProps {

}

/**
 * BlueprintBlueprintsArtifacts resource
 */
export class BlueprintBlueprintsArtifacts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BlueprintBlueprintsArtifactsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview";
  }

  protected getResourceBody(props: BlueprintBlueprintsArtifactsProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
