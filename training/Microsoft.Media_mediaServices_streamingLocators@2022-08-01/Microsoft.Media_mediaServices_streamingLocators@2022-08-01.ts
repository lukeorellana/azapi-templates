import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface MediaMediaservicesStreaminglocatorsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
// | properties | Properties of the Streaming Locator. | StreamingLocatorProperties |

// | Name | Description | Value |
// |-|-|-|
// | alternativeMediaId | Alternative Media ID of this Streaming Locator | string |
// | assetName | Asset Name | string (required) |
// | contentKeys | The ContentKeys used by this Streaming Locator. | StreamingLocatorContentKey[] |
// | defaultContentKeyPolicyName | Name of the default ContentKeyPolicy used by this Streaming Locator. | string |
// | endTime | The end time of the Streaming Locator. | string |
// | filters | A list of asset or account filters which apply to this streaming locator | string[] |
// | startTime | The start time of the Streaming Locator. | string |
// | streamingLocatorId | The StreamingLocatorId of the Streaming Locator. | string |
// | streamingPolicyName | Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming' | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | id | ID of Content Key | string (required) |
// | labelReferenceInStreamingPolicy | Label of Content Key as specified in the Streaming Policy | string |
// | value | Value of Content Key | string |
