import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsRelationshiplinksProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsRelationshiplinks resource
 */
export class CustomerinsightsHubsRelationshiplinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsRelationshiplinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsRelationshiplinksProps): string {
    return JSON.stringify(
        {properties: {description: {}, displayName: {}, interactionType: "string", mappings: [{interactionFieldName: "string", linkType: "string", relationshipFieldName: "string"}], profilePropertyReferences: [{interactionPropertyName: "string", profilePropertyName: "string"}], relatedProfilePropertyReferences: [{interactionPropertyName: "string", profilePropertyName: "string"}], relationshipName: "string"}}
    );
  }
}
