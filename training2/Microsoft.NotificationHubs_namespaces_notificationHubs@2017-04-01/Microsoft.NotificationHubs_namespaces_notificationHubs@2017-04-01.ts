import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NotificationhubsNamespacesNotificationhubsProps extends IAzAPIBaseProps {
/**
   * The sku of the created namespace
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * The AdmCredential of the created NotificationHub
   */
readonly admCredential?: AdmCredential;

/**
   * The ApnsCredential of the created NotificationHub
   */
readonly apnsCredential?: ApnsCredential;

/**
   * The AuthorizationRules of the created NotificationHub
   */
readonly authorizationRules?: SharedAccessAuthorizationRuleProperties[];

/**
   * The BaiduCredential of the created NotificationHub
   */
readonly baiduCredential?: BaiduCredential;

/**
   * The GcmCredential of the created NotificationHub
   */
readonly gcmCredential?: GcmCredential;

/**
   * The MpnsCredential of the created NotificationHub
   */
readonly mpnsCredential?: MpnsCredential;

/**
   * The RegistrationTtl of the created NotificationHub
   */
readonly registrationTtl?: string;

/**
   * The WnsCredential of the created NotificationHub
   */
readonly wnsCredential?: WnsCredential;

/**
   * The URL of the authorization token.
   */
readonly authTokenUrl?: string;

/**
   * The client identifier.
   */
readonly clientId?: string;

/**
   * The credential secret access key.
   */
readonly clientSecret?: string;

/**
   * The APNS certificate. Specify if using Certificate Authentication Mode.
   */
readonly apnsCertificate?: string;

/**
   * The issuer (iss) registered claim key. The value is a 10-character TeamId, obtained from your developer account. Specify if using Token Authentication Mode.
   */
readonly appId?: string;

/**
   * The name of the application or BundleId. Specify if using Token Authentication Mode.
   */
readonly appName?: string;

/**
   * The APNS certificate password if it exists.
   */
readonly certificateKey?: string;

/**
   * The APNS endpoint of this credential. If using Certificate Authentication Mode and Sandbox specify 'gateway.sandbox.push.apple.com'. If using Certificate Authentication Mode and Production specify 'gateway.push.apple.com'. If using Token Authentication Mode and Sandbox specify 'https://api.development.push.apple.com:443/3/device'. If using Token Authentication Mode and Production specify 'https://api.push.apple.com:443/3/device'.
   */
readonly endpoint?: string;

/**
   * A 10-character key identifier (kid) key, obtained from your developer account. Specify if using Token Authentication Mode.
   */
readonly keyId?: string;

/**
   * The APNS certificate thumbprint. Specify if using Certificate Authentication Mode.
   */
readonly thumbprint?: string;

/**
   * Provider Authentication Token, obtained through your developer account. Specify if using Token Authentication Mode.
   */
readonly token?: string;

/**
   * The rights associated with the rule.
   */
readonly rights?: String array containing any of:'Listen''Manage''Send';

/**
   * Baidu Api Key.
   */
readonly baiduApiKey?: string;

/**
   * Baidu Endpoint.
   */
readonly baiduEndPoint?: string;

/**
   * Baidu Secret Key
   */
readonly baiduSecretKey?: string;

/**
   * The FCM legacy endpoint. Default value is 'https://fcm.googleapis.com/fcm/send'
   */
readonly gcmEndpoint?: string;

/**
   * The Google API key.
   */
readonly googleApiKey?: string;

/**
   * The certificate key for this credential.
   */
readonly certificateKey?: string;

/**
   * The MPNS certificate.
   */
readonly mpnsCertificate?: string;

/**
   * The MPNS certificate Thumbprint
   */
readonly thumbprint?: string;

/**
   * The package ID for this credential.
   */
readonly packageSid?: string;

/**
   * The secret key.
   */
readonly secretKey?: string;

/**
   * The Windows Live endpoint.
   */
readonly windowsLiveEndpoint?: string;

/**
   * The capacity of the resource
   */
readonly capacity?: number;

/**
   * The Sku Family
   */
readonly family?: string;

/**
   * The Sku size
   */
readonly size?: string;

/**
   * The tier of particular sku
   */
readonly tier?: string;
}

/**
 * NotificationhubsNamespacesNotificationhubs resource
 */
export class NotificationhubsNamespacesNotificationhubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NotificationhubsNamespacesNotificationhubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01";
  }

  protected getResourceBody(props: NotificationhubsNamespacesNotificationhubsProps): string {
    return JSON.stringify(
        {properties: {admCredential: {properties: {authTokenUrl: "string", clientId: "string", clientSecret: "string"}}, apnsCredential: {properties: {apnsCertificate: "string", appId: "string", appName: "string", certificateKey: "string", endpoint: "string", keyId: "string", thumbprint: "string", token: "string"}}, authorizationRules: [{rights: ["string"]}], baiduCredential: {properties: {baiduApiKey: "string", baiduEndPoint: "string", baiduSecretKey: "string"}}, gcmCredential: {properties: {gcmEndpoint: "string", googleApiKey: "string"}}, mpnsCredential: {properties: {certificateKey: "string", mpnsCertificate: "string", thumbprint: "string"}}, name: "string", registrationTtl: "string", wnsCredential: {properties: {packageSid: "string", secretKey: "string", windowsLiveEndpoint: "string"}}}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
