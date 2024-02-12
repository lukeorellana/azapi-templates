import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * SKU properties of the API Management service.
   */
readonly sku: ApiManagementServiceSkuProperties;

/**
   * Managed service identity of the Api Management service.
   */
readonly identity?: ApiManagementServiceIdentity;

/**
   * A list of availability zones denoting where the resource needs to come from.
   */
readonly zones?: string[];

/**
   * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.
   */
readonly type: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user identities associated with the resource. The user identitydictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
readonly userAssignedIdentities?: ApiManagementServiceIdentityUserAssignedIdentities;

/**
   * 
   */
readonly {customized property}?: UserIdentityProperties;

/**
   * The client id of user assigned identity.
   */
readonly clientId?: string;

/**
   * The principal id of user assigned identity.
   */
readonly principalId?: string;

/**
   * Additional datacenter locations of the API Management service.
   */
readonly additionalLocations?: AdditionalLocation[];

/**
   * Control Plane Apis version constraint for the API Management service.
   */
readonly apiVersionConstraint?: ApiVersionConstranumber;

/**
   * List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
   */
readonly certificates?: CertificateConfiguration[];

/**
   * Configuration API configuration of the API Management service.
   */
readonly configurationApi?: ConfigurationApi;

/**
   * Custom properties of the API Management service.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11can be used to disable just TLS 1.1.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10can be used to disable TLS 1.0 on an API Management service.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11can be used to disable just TLS 1.1 for communications with backends.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10can be used to disable TLS 1.0 for communications with backends.SettingMicrosoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2can be used to enable HTTP2 protocol on an API Management service.Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value isTrueif the service was created on or before April 1, 2018 andFalseotherwise. Http2 setting's default value isFalse.You can disable any of the following ciphers by using settingsMicrosoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example,Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256:false. The default value istruefor them.Note: The following ciphers can't be disabled since they are required by internal platform components: TLS_AES_256_GCM_SHA384,TLS_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   */
readonly customProperties?: ApiManagementServiceBasePropertiesCustomProperties;

/**
   * Status of developer portal in this API Management service.
   */
readonly developerPortalStatus?: 'Disabled''Enabled';

/**
   * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region.
   */
readonly disableGateway?: bool;

/**
   * Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway.
   */
readonly enableClientCertificate?: bool;

/**
   * Custom hostname configuration of the API Management service.
   */
readonly hostnameConfigurations?: HostnameConfiguration[];

/**
   * Status of legacy portal in the API Management service.
   */
readonly legacyPortalStatus?: 'Disabled''Enabled';

/**
   * Property can be used to enable NAT Gateway for this API Management service.
   */
readonly natGatewayState?: 'Disabled''Enabled';

/**
   * Email address from which the notification will be sent.
   */
readonly notificationSenderEmail?: string;

/**
   * List of Private Endpoint Connections of this service.
   */
readonly privateEndpointConnections?: RemotePrivateEndponumberConnectionWrapper[];

/**
   * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the region. Supported only for Developer and Premium SKU being deployed in Virtual Network.
   */
readonly publicIpAddressId?: string;

/**
   * Whether or not public endpoint access is allowed for this API Management service.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
   */
readonly publicNetworkAccess?: 'Disabled''Enabled';

/**
   * Publisher email.
   */
readonly publisherEmail: string;

/**
   * Publisher name.
   */
readonly publisherName: string;

/**
   * Undelete Api Management Service if it was previously soft-deleted. If this flag is specified and set to True all other properties will be ignored.
   */
readonly restore?: bool;

/**
   * Virtual network configuration of the API Management service.
   */
readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration;

/**
   * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
   */
readonly virtualNetworkType?: 'External''Internal''None';

/**
   * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location.
   */
readonly disableGateway?: bool;

/**
   * Property can be used to enable NAT Gateway for this API Management service.
   */
readonly natGatewayState?: 'Disabled''Enabled';

/**
   * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the location. Supported only for Premium SKU being deployed in Virtual Network.
   */
readonly publicIpAddressId?: string;

/**
   * SKU properties of the API Management service.
   */
readonly sku: ApiManagementServiceSkuProperties;

/**
   * Virtual network configuration for the location.
   */
readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration;

/**
   * A list of availability zones denoting where the resource needs to come from.
   */
readonly zones?: string[];

/**
   * Capacity of the SKU (number of deployed units of the SKU). For Consumption SKU capacity must be specified as 0.
   */
readonly capacity: number;

/**
   * The full resource ID of a subnet in a virtual network to deploy the API Management service in.
   */
readonly subnetResourceId?: string;

/**
   * Limit control plane API calls to API Management service with version equal to or newer than this value.
   */
readonly minApiVersion?: string;

/**
   * Certificate information.
   */
readonly certificate?: CertificateInformation;

/**
   * Certificate Password.
   */
readonly certificatePassword?: string;

/**
   * Base64 Encoded certificate.
   */
readonly encodedCertificate?: string;

/**
   * The System.Security.Cryptography.x509certificates.StoreName certificate store location. Only Root and CertificateAuthority are valid locations.
   */
readonly storeName: 'CertificateAuthority''Root';

/**
   * Expiration date of the certificate. The date conforms to the following format:yyyy-MM-ddTHH:mm:ssZas specified by the ISO 8601 standard.
   */
readonly expiry: string;

/**
   * Subject of the certificate.
   */
readonly subject: string;

/**
   * Thumbprint of the certificate.
   */
readonly thumbprint: string;

/**
   * Indication whether or not the legacy Configuration API (v1) should be exposed on the API Management service. Value is optional but must be 'Enabled' or 'Disabled'. If 'Disabled', legacy Configuration API (v1) will not be available for self-hosted gateways. Default value is 'Enabled'
   */
readonly legacyApi?: 'Disabled''Enabled';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * Certificate information.
   */
readonly certificate?: CertificateInformation;

/**
   * Certificate Password.
   */
readonly certificatePassword?: string;

/**
   * Certificate Source.
   */
readonly certificateSource?: 'BuiltIn''Custom''KeyVault''Managed';

/**
   * Certificate Status.
   */
readonly certificateStatus?: 'Completed''Failed''InProgress';

/**
   * Specify true to setup the certificate associated with this Hostname as the Default SSL Certificate. If a client does not send the SNI header, then this will be the certificate that will be challenged. The property is useful if a service has multiple custom hostname enabled and it needs to decide on the default ssl certificate. The setting only applied to gateway Hostname Type.
   */
readonly defaultSslBinding?: bool;

/**
   * Base64 Encoded certificate.
   */
readonly encodedCertificate?: string;

/**
   * Hostname to configure on the Api Management service.
   */
readonly hostName: string;

/**
   * System or User Assigned Managed identity clientId as generated by Azure AD, which has GET access to the keyVault containing the SSL certificate.
   */
readonly identityClientId?: string;

/**
   * Url to the KeyVault Secret containing the Ssl Certificate. If absolute Url containing version is provided, auto-update of ssl certificate will not work. This requires Api Management service to be configured with aka.ms/apimmsi. The secret should be of typeapplication/x-pkcs12
   */
readonly keyVaultId?: string;

/**
   * Specify true to always negotiate client certificate on the hostname. Default Value is false.
   */
readonly negotiateClientCertificate?: bool;

/**
   * Hostname type.
   */
readonly type: 'ConfigurationApi''DeveloperPortal''Management''Portal''Proxy''Scm';

/**
   * Private Endpoint connection resource id
   */
readonly id?: string;

/**
   * Private Endpoint Connection Resource Type
   */
readonly type?: string;

/**
   * The resource of private end point.
   */
readonly privateEndpoint?: ArmIdWrapper;

/**
   * A collection of information about the state of the connection between service consumer and provider.
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
readonly actionsRequired?: string;

/**
   * The reason for approval/rejection of the connection.
   */
readonly description?: string;

/**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   */
readonly status?: 'Approved''Pending''Rejected';
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
