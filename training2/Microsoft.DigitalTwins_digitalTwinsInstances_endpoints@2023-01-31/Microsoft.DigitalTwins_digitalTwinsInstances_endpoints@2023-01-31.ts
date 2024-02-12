import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DigitaltwinsDigitaltwinsinstancesEndpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:digitalTwinsInstances;

/**
   * Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified.
   */
readonly authenticationType?: 'IdentityBased''KeyBased';

/**
   * Dead letter storage secret for key-based authentication. Will be obfuscated during read.
   */
readonly deadLetterSecret?: string;

/**
   * Dead letter storage URL for identity-based authentication.
   */
readonly deadLetterUri?: string;

/**
   * Managed identity properties for the endpoint.
   */
readonly identity?: ManagedIdentityReference;

/**
   * Set the object type
   */
readonly endpointType: EventGridEventHubServiceBus;

/**
   * The type of managed identity used.
   */
readonly type?: 'SystemAssigned''UserAssigned';

/**
   * The user identity ARM resource id if the managed identity type is 'UserAssigned'.
   */
readonly userAssignedIdentity?: string;

/**
   * The type of Digital Twins endpoint
   */
readonly endpointType: 'EventGrid';

/**
   * EventGrid secondary accesskey. Will be obfuscated during read.
   */
readonly accessKey1: string;

/**
   * EventGrid secondary accesskey. Will be obfuscated during read.
   */
readonly accessKey2?: string;

/**
   * EventGrid Topic Endpoint.
   */
readonly TopicEndpoint: string;

/**
   * The type of Digital Twins endpoint
   */
readonly endpointType: 'EventHub';

/**
   * PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
   */
readonly connectionStringPrimaryKey?: string;

/**
   * SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
   */
readonly connectionStringSecondaryKey?: string;

/**
   * The URL of the EventHub namespace for identity-based authentication. It must include the protocol 'sb://'.
   */
readonly endpointUri?: string;

/**
   * The EventHub name in the EventHub namespace for identity-based authentication.
   */
readonly entityPath?: string;

/**
   * The type of Digital Twins endpoint
   */
readonly endpointType: 'ServiceBus';

/**
   * The URL of the ServiceBus namespace for identity-based authentication. It must include the protocol 'sb://'.
   */
readonly endpointUri?: string;

/**
   * The ServiceBus Topic name for identity-based authentication.
   */
readonly entityPath?: string;

/**
   * PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
   */
readonly primaryConnectionString?: string;

/**
   * SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
   */
readonly secondaryConnectionString?: string;
}

/**
 * DigitaltwinsDigitaltwinsinstancesEndpoints resource
 */
export class DigitaltwinsDigitaltwinsinstancesEndpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DigitaltwinsDigitaltwinsinstancesEndpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31";
  }

  protected getResourceBody(props: DigitaltwinsDigitaltwinsinstancesEndpointsProps): string {
    return JSON.stringify(
        {properties: {authenticationType: "string", deadLetterSecret: "string", deadLetterUri: "string", identity: {type: "string", userAssignedIdentity: "string"}, endpointType: "string"}}
    );
  }
}
