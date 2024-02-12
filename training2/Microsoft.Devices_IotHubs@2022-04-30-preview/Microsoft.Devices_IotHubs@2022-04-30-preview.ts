import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevicesIothubsProps extends IAzAPIBaseProps {
/**
   * IotHub SKU info
   */
readonly sku: IotHubSkuInfo;

/**
   * The Etag field isnotrequired. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
   */
readonly etag?: string;

/**
   * The managed identities for the IotHub.
   */
readonly identity?: ArmIdentity;

/**
   * The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * Dictionary of {ArmUserIdentity}
   */
readonly userAssignedIdentities?: object;

/**
   * List of allowed FQDNs(Fully Qualified Domain Name) for egress from Iot Hub.
   */
readonly allowedFqdnList?: string[];

/**
   * The shared access policies you can use to secure a connection to the IoT hub.
   */
readonly authorizationPolicies?: SharedAccessSignatureAuthorizationRule[];

/**
   * The IoT hub cloud-to-device messaging properties.
   */
readonly cloudToDevice?: CloudToDeviceProperties;

/**
   * IoT hub comments.
   */
readonly comments?: string;

/**
   * The device streams properties of iothub.
   */
readonly deviceStreams?: IotHubPropertiesDeviceStreams;

/**
   * If true, all device(including Edge devices but excluding modules) scoped SAS keys cannot be used for authentication.
   */
readonly disableDeviceSAS?: bool;

/**
   * If true, SAS tokens with Iot hub scoped SAS keys cannot be used for authentication.
   */
readonly disableLocalAuth?: bool;

/**
   * If true, all module scoped SAS keys cannot be used for authentication.
   */
readonly disableModuleSAS?: bool;

/**
   * This property when set to true, will enable data residency, thus, disabling disaster recovery.
   */
readonly enableDataResidency?: bool;

/**
   * If True, file upload notifications are enabled.
   */
readonly enableFileUploadNotifications?: bool;

/**
   * The encryption properties for the IoT hub.
   */
readonly encryption?: EncryptionPropertiesDescription;

/**
   * The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
   */
readonly eventHubEndpoints?: object;

/**
   * The capabilities and features enabled for the IoT hub.
   */
readonly features?: 'DeviceManagement''None';

/**
   * The IP filter rules.
   */
readonly ipFilterRules?: IpFilterRule[];

/**
   * The messaging endpoint properties for the file upload notification queue.
   */
readonly messagingEndpoints?: object;

/**
   * Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected.
   */
readonly minTlsVersion?: string;

/**
   * Network Rule Set Properties of IotHub
   */
readonly networkRuleSets?: NetworkRuleSetProperties;

/**
   * Private endpoint connections created on this IotHub
   */
readonly privateEndpointConnections?: PrivateEndponumberConnection[];

/**
   * Whether requests from Public Network are allowed
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * If true, egress from IotHub will be restricted to only the allowed FQDNs that are configured via allowedFqdnList.
   */
readonly restrictOutboundNetworkAccess?: bool;

/**
   * This property store root certificate related information
   */
readonly rootCertificate?: RootCertificateProperties;

/**
   * The routing related properties of the IoT hub. See: /azure/iot-hub/iot-hub-devguide-messaging
   */
readonly routing?: RoutingProperties;

/**
   * The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.
   */
readonly storageEndpoints?: object;

/**
   * The name of the shared access policy.
   */
readonly keyName: string;

/**
   * The primary key.
   */
readonly primaryKey?: string;

/**
   * The permissions assigned to the shared access policy.
   */
readonly rights: 'DeviceConnect''RegistryRead''RegistryRead, DeviceConnect''RegistryRead, RegistryWrite''RegistryRead, RegistryWrite, DeviceConnect''RegistryRead, RegistryWrite, ServiceConnect''RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect''RegistryRead, ServiceConnect''RegistryRead, ServiceConnect, DeviceConnect''RegistryWrite''RegistryWrite, DeviceConnect''RegistryWrite, ServiceConnect''RegistryWrite, ServiceConnect, DeviceConnect''ServiceConnect''ServiceConnect, DeviceConnect';

/**
   * The secondary key.
   */
readonly secondaryKey?: string;

/**
   * The name of the shared access policy.
   */
readonly keyName: string;

/**
   * The primary key.
   */
readonly primaryKey?: string;

/**
   * The permissions assigned to the shared access policy.
   */
readonly rights: 'DeviceConnect''RegistryRead''RegistryRead, DeviceConnect''RegistryRead, RegistryWrite''RegistryRead, RegistryWrite, DeviceConnect''RegistryRead, RegistryWrite, ServiceConnect''RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect''RegistryRead, ServiceConnect''RegistryRead, ServiceConnect, DeviceConnect''RegistryWrite''RegistryWrite, DeviceConnect''RegistryWrite, ServiceConnect''RegistryWrite, ServiceConnect, DeviceConnect''ServiceConnect''ServiceConnect, DeviceConnect';

/**
   * The secondary key.
   */
readonly secondaryKey?: string;

/**
   * The default time to live for cloud-to-device messages in the device queue. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
   */
readonly defaultTtlAsIso8601?: string;

/**
   * The properties of the feedback queue for cloud-to-device messages.
   */
readonly feedback?: FeedbackProperties;

/**
   * The max delivery count for cloud-to-device messages in the device queue. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
   */
readonly maxDeliveryCount?: number;

/**
   * The lock duration for the feedback queue. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
   */
readonly lockDurationAsIso8601?: string;

/**
   * The number of times the IoT hub attempts to deliver a message on the feedback queue. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
   */
readonly maxDeliveryCount?: number;

/**
   * The period of time for which a message is available to consume before it is expired by the IoT hub. See: /azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
   */
readonly ttlAsIso8601?: string;

/**
   * List of Device Streams Endpoints.
   */
readonly streamingEndpoints?: string[];

/**
   * The source of the key.
   */
readonly keySource?: string;

/**
   * The properties of the KeyVault key.
   */
readonly keyVaultProperties?: KeyVaultKeyProperties[];

/**
   * Managed identity properties of KeyVault Key.
   */
readonly identity?: ManagedIdentity;

/**
   * The identifier of the key.
   */
readonly keyIdentifier?: string;

/**
   * The user assigned identity.
   */
readonly userAssignedIdentity?: string;

/**
   * The desired action for requests captured by this rule.
   */
readonly action: 'Accept''Reject';

/**
   * The name of the IP filter rule.
   */
readonly filterName: string;

/**
   * A string that contains the IP address range in CIDR notation for the rule.
   */
readonly ipMask: string;

/**
   * If True, then Network Rule Set is also applied to BuiltIn EventHub EndPoint of IotHub
   */
readonly applyToBuiltInEventHubEndpoint: bool;

/**
   * Default Action for Network Rule Set
   */
readonly defaultAction?: 'Allow''Deny';

/**
   * List of IP Rules
   */
readonly ipRules: NetworkRuleSetIpRule[];

/**
   * IP Filter Action
   */
readonly action?: 'Allow';

/**
   * Name of the IP filter rule.
   */
readonly filterName: string;

/**
   * A string that contains the IP address range in CIDR notation for the rule.
   */
readonly ipMask: string;

/**
   * The private endpoint property of a private endpoint connection
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * The current state of a private endpoint connection
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * Actions required for a private endpoint connection
   */
readonly actionsRequired?: string;

/**
   * The description for the current state of a private endpoint connection
   */
readonly description: string;

/**
   * The status of a private endpoint connection
   */
readonly status: 'Approved''Disconnected''Pending''Rejected';

/**
   * This property when set to true, hub will use G2 cert; while it's set to false, hub uses Baltimore Cert.
   */
readonly enableRootCertificateV2?: bool;

/**
   * The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs.
   */
readonly endpoints?: RoutingEndponumbers;

/**
   * The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See:https://aka.ms/telemetryoneventgrid
   */
readonly enrichments?: EnrichmentProperties[];

/**
   * The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint.
   */
readonly fallbackRoute?: FallbackRouteProperties;

/**
   * The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.
   */
readonly routes?: RouteProperties[];

/**
   * The list of Cosmos DB collection endpoints that IoT hub routes messages to, based on the routing rules.
   */
readonly cosmosDBSqlCollections?: RoutingCosmosDBSqlApiProperties[];

/**
   * The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
   */
readonly eventHubs?: RoutingEventHubProperties[];

/**
   * The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
   */
readonly serviceBusQueues?: RoutingServiceBusQueueEndponumberProperties[];

/**
   * The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
   */
readonly serviceBusTopics?: RoutingServiceBusTopicEndponumberProperties[];

/**
   * The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.
   */
readonly storageContainers?: RoutingStorageContainerProperties[];

/**
   * Method used to authenticate against the cosmos DB sql collection endpoint
   */
readonly authenticationType?: 'identityBased''keyBased';

/**
   * The name of the cosmos DB sql collection in the cosmos DB database.
   */
readonly collectionName: string;

/**
   * The name of the cosmos DB database in the cosmos DB account.
   */
readonly databaseName: string;

/**
   * The url of the cosmos DB account. It must include the protocolhttps://
   */
readonly endpointUri: string;

/**
   * Id of the cosmos DB sql collection endpoint
   */
readonly id?: string;

/**
   * Managed identity properties of routing cosmos DB collection endpoint.
   */
readonly identity?: ManagedIdentity;

/**
   * The name of the partition key associated with this cosmos DB sql collection if one exists. This is an optional parameter.
   */
readonly partitionKeyName?: string;

/**
   * The template for generating a synthetic partition key value for use with this cosmos DB sql collection. The template must include at least one of the following placeholders: {iothub}, {deviceid}, {DD}, {MM}, and {YYYY}. Any one placeholder may be specified at most once, but order and non-placeholder components are arbitrary. This parameter is only required if PartitionKeyName is specified.
   */
readonly partitionKeyTemplate?: string;

/**
   * The primary key of the cosmos DB account.
   */
readonly primaryKey?: string;

/**
   * The name of the resource group of the cosmos DB account.
   */
readonly resourceGroup?: string;

/**
   * The secondary key of the cosmos DB account.
   */
readonly secondaryKey?: string;

/**
   * The subscription identifier of the cosmos DB account.
   */
readonly subscriptionId?: string;

/**
   * Method used to authenticate against the event hub endpoint
   */
readonly authenticationType?: 'identityBased''keyBased';

/**
   * The connection string of the event hub endpoint.
   */
readonly connectionString?: string;

/**
   * The url of the event hub endpoint. It must include the protocol sb://
   */
readonly endpointUri?: string;

/**
   * Event hub name on the event hub namespace
   */
readonly entityPath?: string;

/**
   * Id of the event hub endpoint
   */
readonly id?: string;

/**
   * Managed identity properties of routing event hub endpoint.
   */
readonly identity?: ManagedIdentity;

/**
   * The name of the resource group of the event hub endpoint.
   */
readonly resourceGroup?: string;

/**
   * The subscription identifier of the event hub endpoint.
   */
readonly subscriptionId?: string;

/**
   * Method used to authenticate against the service bus queue endpoint
   */
readonly authenticationType?: 'identityBased''keyBased';

/**
   * The connection string of the service bus queue endpoint.
   */
readonly connectionString?: string;

/**
   * The url of the service bus queue endpoint. It must include the protocol sb://
   */
readonly endpointUri?: string;

/**
   * Queue name on the service bus namespace
   */
readonly entityPath?: string;

/**
   * Id of the service bus queue endpoint
   */
readonly id?: string;

/**
   * Managed identity properties of routing service bus queue endpoint.
   */
readonly identity?: ManagedIdentity;

/**
   * The name of the resource group of the service bus queue endpoint.
   */
readonly resourceGroup?: string;

/**
   * The subscription identifier of the service bus queue endpoint.
   */
readonly subscriptionId?: string;

/**
   * Method used to authenticate against the service bus topic endpoint
   */
readonly authenticationType?: 'identityBased''keyBased';

/**
   * The connection string of the service bus topic endpoint.
   */
readonly connectionString?: string;

/**
   * The url of the service bus topic endpoint. It must include the protocol sb://
   */
readonly endpointUri?: string;

/**
   * Queue name on the service bus topic
   */
readonly entityPath?: string;

/**
   * Id of the service bus topic endpoint
   */
readonly id?: string;

/**
   * Managed identity properties of routing service bus topic endpoint.
   */
readonly identity?: ManagedIdentity;

/**
   * The name of the resource group of the service bus topic endpoint.
   */
readonly resourceGroup?: string;

/**
   * The subscription identifier of the service bus topic endpoint.
   */
readonly subscriptionId?: string;

/**
   * Method used to authenticate against the storage endpoint
   */
readonly authenticationType?: 'identityBased''keyBased';

/**
   * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
   */
readonly batchFrequencyInSeconds?: number;

/**
   * The connection string of the storage account.
   */
readonly connectionString?: string;

/**
   * The name of storage container in the storage account.
   */
readonly containerName: string;

/**
   * Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'.
   */
readonly encoding?: 'Avro''AvroDeflate''JSON';

/**
   * The url of the storage endpoint. It must include the protocolhttps://
   */
readonly endpointUri?: string;

/**
   * File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered.
   */
readonly fileNameFormat?: string;

/**
   * Id of the storage container endpoint
   */
readonly id?: string;

/**
   * Managed identity properties of routing storage endpoint.
   */
readonly identity?: ManagedIdentity;

/**
   * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
   */
readonly maxChunkSizeInBytes?: number;

/**
   * The name of the resource group of the storage account.
   */
readonly resourceGroup?: string;

/**
   * The subscription identifier of the storage account.
   */
readonly subscriptionId?: string;

/**
   * The list of endpoints for which the enrichment is applied to the message.
   */
readonly endpointNames: string[];

/**
   * The key or name for the enrichment property.
   */
readonly key: string;

/**
   * The value for the enrichment property.
   */
readonly value: string;

/**
   * The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: /azure/iot-hub/iot-hub-devguide-query-language
   */
readonly condition?: string;

/**
   * The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed.
   */
readonly endpointNames: string[];

/**
   * Used to specify whether the fallback route is enabled.
   */
readonly isEnabled: bool;

/**
   * The source to which the routing rule is to be applied to. For example, DeviceMessages
   */
readonly source: 'DeviceConnectionStateEvents''DeviceJobLifecycleEvents''DeviceLifecycleEvents''DeviceMessages''DigitalTwinChangeEvents''Invalid''MqttBrokerMessages''TwinChangeEvents';

/**
   * The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: /azure/iot-hub/iot-hub-devguide-query-language
   */
readonly condition?: string;

/**
   * The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
   */
readonly endpointNames: string[];

/**
   * Used to specify whether a route is enabled.
   */
readonly isEnabled: bool;

/**
   * The source that the routing rule is to be applied to, such as DeviceMessages.
   */
readonly source: 'DeviceConnectionStateEvents''DeviceJobLifecycleEvents''DeviceLifecycleEvents''DeviceMessages''DigitalTwinChangeEvents''Invalid''MqttBrokerMessages''TwinChangeEvents';

/**
   * The number of provisioned IoT Hub units. See: /azure/azure-subscription-service-limits#iot-hub-limits.
   */
readonly capacity?: number;
}

/**
 * DevicesIothubs resource
 */
export class DevicesIothubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevicesIothubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Devices/IotHubs@2022-04-30-preview";
  }

  protected getResourceBody(props: DevicesIothubsProps): string {
    return JSON.stringify(
        {properties: {allowedFqdnList: ["string"], authorizationPolicies: [{keyName: "string", primaryKey: "string", rights: "string", secondaryKey: "string"}], cloudToDevice: {defaultTtlAsIso8601: "string", feedback: {lockDurationAsIso8601: "string", maxDeliveryCount: "${int}", ttlAsIso8601: "string"}, maxDeliveryCount: "${int}"}, comments: "string", deviceStreams: {streamingEndpoints: ["string"]}, disableDeviceSAS: "${bool}", disableLocalAuth: "${bool}", disableModuleSAS: "${bool}", enableDataResidency: "${bool}", enableFileUploadNotifications: "${bool}", encryption: {keySource: "string", keyVaultProperties: [{identity: {userAssignedIdentity: "string"}, keyIdentifier: "string"}]}, eventHubEndpoints: {}, features: "string", ipFilterRules: [{action: "string", filterName: "string", ipMask: "string"}], messagingEndpoints: {}, minTlsVersion: "string", networkRuleSets: {applyToBuiltInEventHubEndpoint: "${bool}", defaultAction: "string", ipRules: [{action: "Allow", filterName: "string", ipMask: "string"}]}, privateEndpointConnections: [{properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}], publicNetworkAccess: "string", restrictOutboundNetworkAccess: "${bool}", rootCertificate: {enableRootCertificateV2: "${bool}"}, routing: {endpoints: {cosmosDBSqlCollections: [{authenticationType: "string", collectionName: "string", databaseName: "string", endpointUri: "string", id: "string", identity: {userAssignedIdentity: "string"}, name: "string", partitionKeyName: "string", partitionKeyTemplate: "string", primaryKey: "string", resourceGroup: "string", secondaryKey: "string", subscriptionId: "string"}], eventHubs: [{authenticationType: "string", connectionString: "string", endpointUri: "string", entityPath: "string", id: "string", identity: {userAssignedIdentity: "string"}, name: "string", resourceGroup: "string", subscriptionId: "string"}], serviceBusQueues: [{authenticationType: "string", connectionString: "string", endpointUri: "string", entityPath: "string", id: "string", identity: {userAssignedIdentity: "string"}, name: "string", resourceGroup: "string", subscriptionId: "string"}], serviceBusTopics: [{authenticationType: "string", connectionString: "string", endpointUri: "string", entityPath: "string", id: "string", identity: {userAssignedIdentity: "string"}, name: "string", resourceGroup: "string", subscriptionId: "string"}], storageContainers: [{authenticationType: "string", batchFrequencyInSeconds: "${int}", connectionString: "string", containerName: "string", encoding: "string", endpointUri: "string", fileNameFormat: "string", id: "string", identity: {userAssignedIdentity: "string"}, maxChunkSizeInBytes: "${int}", name: "string", resourceGroup: "string", subscriptionId: "string"}]}, enrichments: [{endpointNames: ["string"], key: "string", value: "string"}], fallbackRoute: {condition: "string", endpointNames: ["string"], isEnabled: "${bool}", name: "string", source: "string"}, routes: [{condition: "string", endpointNames: ["string"], isEnabled: "${bool}", name: "string", source: "string"}]}, storageEndpoints: {}}, sku: {capacity: "${int}", name: "string"}, etag: "string"}
    );
  }
}
