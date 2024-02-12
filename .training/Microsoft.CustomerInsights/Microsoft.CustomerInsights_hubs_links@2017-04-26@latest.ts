import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsLinksProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsLinks resource
 */
export class CustomerinsightsHubsLinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsLinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/links@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsLinksProps): string {
    return JSON.stringify(
        {properties: {description: {}, displayName: {}, mappings: [{linkType: "string", sourcePropertyName: "string", targetPropertyName: "string"}], operationType: "string", participantPropertyReferences: [{sourcePropertyName: "string", targetPropertyName: "string"}], referenceOnly: "${bool}", sourceEntityType: "string", sourceEntityTypeName: "string", targetEntityType: "string", targetEntityTypeName: "string"}}
    );
  }
}
