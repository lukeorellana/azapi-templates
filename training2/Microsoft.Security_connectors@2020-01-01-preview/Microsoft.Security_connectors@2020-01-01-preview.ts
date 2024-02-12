import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityConnectorsProps extends IAzAPIBaseProps {
/**
   * Settings for authentication management, these settings are relevant only for the cloud connector.
   */
readonly authenticationDetails?: AuthenticationDetailsProperties;

/**
   * Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
   */
readonly hybridComputeSettings?: HybridComputeSettingsProperties;

/**
   * The permissions detected in the cloud account.
   */
readonly grantedPermissions?: String array containing any of:'AWS::AWSSecurityHubReadOnlyAccess''AWS::AmazonSSMAutomationRole''AWS::SecurityAudit''GCP::Security Center Admin Viewer';

/**
   * Set the object type
   */
readonly authenticationType: awsAssumeRoleawsCredsgcpCredentials;

/**
   * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
   */
readonly authenticationType: 'awsAssumeRole';

/**
   * Assumed role ID is an identifier that you can use to create temporary security credentials.
   */
readonly awsAssumeRoleArn: string;

/**
   * A unique identifier that is required when you assume a role in another account.
   */
readonly awsExternalId: string;

/**
   * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
   */
readonly authenticationType: 'awsCreds';

/**
   * Public key element of the AWS credential object (write only)
   */
readonly awsAccessKeyId: string;

/**
   * Secret key element of the AWS credential object (write only)
   */
readonly awsSecretAccessKey: string;

/**
   * Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
   */
readonly authenticationType: 'gcpCredentials';

/**
   * Auth provider x509 certificate URL field of the API key (write only)
   */
readonly authProviderX509CertUrl: string;

/**
   * Auth URI field of the API key (write only)
   */
readonly authUri: string;

/**
   * Client email field of the API key (write only)
   */
readonly clientEmail: string;

/**
   * Client ID field of the API key (write only)
   */
readonly clientId: string;

/**
   * Client x509 certificate URL field of the API key (write only)
   */
readonly clientX509CertUrl: string;

/**
   * The organization ID of the GCP cloud account
   */
readonly organizationId: string;

/**
   * Private key field of the API key (write only)
   */
readonly privateKey: string;

/**
   * Private key ID field of the API key (write only)
   */
readonly privateKeyId: string;

/**
   * Project ID field of the API key (write only)
   */
readonly projectId: string;

/**
   * Token URI field of the API key (write only)
   */
readonly tokenUri: string;

/**
   * Type field of the API key (write only)
   */
readonly type: string;

/**
   * Whether or not to automatically install Azure Arc (hybrid compute) agents on machines
   */
readonly autoProvision: 'Off''On';

/**
   * For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
   */
readonly proxyServer?: ProxyServerProperties;

/**
   * The location where the metadata of machines will be stored
   */
readonly region?: string;

/**
   * The name of the resource group where Arc (Hybrid Compute) connectors are connected.
   */
readonly resourceGroupName?: string;

/**
   * An object to access resources that are secured by an Azure AD tenant.
   */
readonly servicePrincipal?: ServicePrincipalProperties;

/**
   * Proxy server IP
   */
readonly ip?: string;

/**
   * Proxy server port
   */
readonly port?: string;

/**
   * Application ID of service principal.
   */
readonly applicationId?: string;

/**
   * A secret string that the application uses to prove its identity, also can be referred to as application password (write only).
   */
readonly secret?: string;
}

/**
 * SecurityConnectors resource
 */
export class SecurityConnectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityConnectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/connectors@2020-01-01-preview";
  }

  protected getResourceBody(props: SecurityConnectorsProps): string {
    return JSON.stringify(
        {properties: {authenticationDetails: {grantedPermissions: ["string"], authenticationType: "string"}, hybridComputeSettings: {autoProvision: "string", proxyServer: {ip: "string", port: "string"}, region: "string", resourceGroupName: "string", servicePrincipal: {applicationId: "string", secret: "string"}}}}
    );
  }
}
