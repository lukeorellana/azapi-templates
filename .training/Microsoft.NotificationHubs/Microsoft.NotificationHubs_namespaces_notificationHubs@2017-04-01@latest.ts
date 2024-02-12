import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NotificationhubsNamespacesNotificationhubsProps extends IAzAPIBaseProps {

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
