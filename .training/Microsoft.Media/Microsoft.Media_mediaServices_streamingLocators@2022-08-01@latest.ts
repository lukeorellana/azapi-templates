import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesStreaminglocatorsProps extends IAzAPIBaseProps {

}

/**
 * MediaMediaservicesStreaminglocators resource
 */
export class MediaMediaservicesStreaminglocators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesStreaminglocatorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaServices/streamingLocators@2022-08-01";
  }

  protected getResourceBody(props: MediaMediaservicesStreaminglocatorsProps): string {
    return JSON.stringify(
        {properties: {alternativeMediaId: "string", assetName: "string", contentKeys: [{id: "string", labelReferenceInStreamingPolicy: "string", value: "string"}], defaultContentKeyPolicyName: "string", endTime: "string", filters: ["string"], startTime: "string", streamingLocatorId: "string", streamingPolicyName: "string"}}
    );
  }
}
