import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesStreaminglocatorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mediaServices;

/**
   * Alternative Media ID of this Streaming Locator
   */
readonly alternativeMediaId?: string;

/**
   * Asset Name
   */
readonly assetName: string;

/**
   * The ContentKeys used by this Streaming Locator.
   */
readonly contentKeys?: StreamingLocatorContentKey[];

/**
   * Name of the default ContentKeyPolicy used by this Streaming Locator.
   */
readonly defaultContentKeyPolicyName?: string;

/**
   * The end time of the Streaming Locator.
   */
readonly endTime?: string;

/**
   * A list of asset or account filters which apply to this streaming locator
   */
readonly filters?: string[];

/**
   * The start time of the Streaming Locator.
   */
readonly startTime?: string;

/**
   * The StreamingLocatorId of the Streaming Locator.
   */
readonly streamingLocatorId?: string;

/**
   * Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming'
   */
readonly streamingPolicyName: string;

/**
   * ID of Content Key
   */
readonly id: string;

/**
   * Label of Content Key as specified in the Streaming Policy
   */
readonly labelReferenceInStreamingPolicy?: string;

/**
   * Value of Content Key
   */
readonly value?: string;
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
