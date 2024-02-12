import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicelinkerDryrunsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The parameters of the dryrun
   */
readonly parameters?: DryrunParameters;

/**
   * Set the object type
   */
readonly actionName: createOrUpdate;

/**
   * The name of action for you dryrun job.
   */
readonly actionName: 'createOrUpdate';

/**
   * The authentication type.
   */
readonly authInfo?: AuthInfoBase;

/**
   * The application client type
   */
readonly clientType?: 'django''dotnet''go''java''kafka-springBoot''nodejs''none''php''python''ruby''springBoot';

/**
   * The connection information consumed by applications, including secrets, connection strings.
   */
readonly configurationInfo?: ConfigurationInfo;

/**
   * The network solution.
   */
readonly publicNetworkSolution?: PublicNetworkSolution;

/**
   * connection scope in source service.
   */
readonly scope?: string;

/**
   * An option to store secret value in secure place
   */
readonly secretStore?: SecretStore;

/**
   * The target service properties
   */
readonly targetService?: TargetServiceBase;

/**
   * The VNet solution.
   */
readonly vNetSolution?: VNetSolution;

/**
   * Set the object type
   */
readonly authType: accessKeysecretservicePrincipalCertificateservicePrincipalSecretsystemAssignedIdentityuserAccountuserAssignedIdentity;

/**
   * The authentication type.
   */
readonly authType: 'accessKey';

/**
   * Permissions of the accessKey.ReadandWriteare for Azure Cosmos DB and Azure App Configuration,Listen,SendandManageare for Azure Event Hub and Azure Service Bus.
   */
readonly permissions?: String array containing any of:'Listen''Manage''Read''Send''Write';

/**
   * The authentication type.
   */
readonly authType: 'secret';

/**
   * Password or key vault secret for secret auth.
   */
readonly secretInfo?: SecretInfoBase;

/**
   * Set the object type
   */
readonly secretType: keyVaultSecretReferencekeyVaultSecretUrirawValue;

/**
   * The secret type.
   */
readonly secretType: 'keyVaultSecretReference';

/**
   * Version of the Key Vault secret.
   */
readonly version?: string;

/**
   * The secret type.
   */
readonly secretType: 'keyVaultSecretUri';

/**
   * URI to the keyvault secret
   */
readonly value?: string;

/**
   * The secret type.
   */
readonly secretType: 'rawValue';

/**
   * The actual value of the secret.
   */
readonly value?: string;

/**
   * The authentication type.
   */
readonly authType: 'servicePrincipalCertificate';

/**
   * ServicePrincipal certificate for servicePrincipal auth.
   */
readonly certificate: string;

/**
   * Application clientId for servicePrincipal auth.
   */
readonly clientId: string;

/**
   * Indicates whether to clean up previous operation when Linker is updating or deleting
   */
readonly deleteOrUpdateBehavior?: 'Default''ForcedCleanup';

/**
   * Principal Id for servicePrincipal auth.
   */
readonly principalId: string;

/**
   * Optional, this value specifies the Azure roles to be assigned. Automatically
   */
readonly roles?: string[];

/**
   * The authentication type.
   */
readonly authType: 'servicePrincipalSecret';

/**
   * ServicePrincipal application clientId for servicePrincipal auth.
   */
readonly clientId: string;

/**
   * Indicates whether to clean up previous operation when Linker is updating or deleting
   */
readonly deleteOrUpdateBehavior?: 'Default''ForcedCleanup';

/**
   * Principal Id for servicePrincipal auth.
   */
readonly principalId: string;

/**
   * Optional, this value specifies the Azure roles to be assigned. Automatically
   */
readonly roles?: string[];

/**
   * Secret for servicePrincipal auth.
   */
readonly secret: string;

/**
   * Username created in the database which is mapped to a user in AAD.
   */
readonly userName?: string;

/**
   * The authentication type.
   */
readonly authType: 'systemAssignedIdentity';

/**
   * Indicates whether to clean up previous operation when Linker is updating or deleting
   */
readonly deleteOrUpdateBehavior?: 'Default''ForcedCleanup';

/**
   * Optional, this value specifies the Azure role to be assigned
   */
readonly roles?: string[];

/**
   * Username created in the database which is mapped to a user in AAD.
   */
readonly userName?: string;

/**
   * The authentication type.
   */
readonly authType: 'userAccount';

/**
   * Indicates whether to clean up previous operation when Linker is updating or deleting
   */
readonly deleteOrUpdateBehavior?: 'Default''ForcedCleanup';

/**
   * Principal Id for user account.
   */
readonly principalId?: string;

/**
   * Optional, this value specifies the Azure roles to be assigned. Automatically
   */
readonly roles?: string[];

/**
   * Username created in the database which is mapped to a user in AAD.
   */
readonly userName?: string;

/**
   * The authentication type.
   */
readonly authType: 'userAssignedIdentity';

/**
   * Client Id for userAssignedIdentity.
   */
readonly clientId?: string;

/**
   * Indicates whether to clean up previous operation when Linker is updating or deleting
   */
readonly deleteOrUpdateBehavior?: 'Default''ForcedCleanup';

/**
   * Optional, this value specifies the Azure role to be assigned
   */
readonly roles?: string[];

/**
   * Subscription id for userAssignedIdentity.
   */
readonly subscriptionId?: string;

/**
   * Username created in the database which is mapped to a user in AAD.
   */
readonly userName?: string;

/**
   * Optional, indicate whether to apply configurations on source application. If enable, generate configurations and applied to the source application. Default is enable. If optOut, no configuration change will be made on source.
   */
readonly action?: 'Internal''enable''optOut';

/**
   * A dictionary of additional configurations to be added. Service will auto generate a set of basic configurations and this property is to full fill more customized configurations
   */
readonly additionalConfigurations?: object;

/**
   * Optional. A dictionary of default key name and customized key name mapping. If not specified, default key name will be used for generate configurations
   */
readonly customizedKeys?: object;

/**
   * Indicates whether to clean up previous operation when Linker is updating or deleting
   */
readonly deleteOrUpdateBehavior?: 'Default''ForcedCleanup';

/**
   * Optional. Indicates public network solution. If enable, enable public network access of target service with best try. Default is enable. If optOut, opt out public network access configuration.
   */
readonly action?: 'Internal''enable''optOut';

/**
   * Indicates whether to clean up previous operation(such as firewall rules) when Linker is updating or deleting
   */
readonly deleteOrUpdateBehavior?: 'Default''ForcedCleanup';

/**
   * Describe firewall rules of target service to make sure source application could connect to the target.
   */
readonly firewallRules?: FirewallRules;

/**
   * Allow Azure services to access the target service if true.
   */
readonly azureServices?: 'false''true';

/**
   * Allow caller client IP to access the target service if true. the property is used when connecting local application to target service.
   */
readonly callerClientIP?: 'false''true';

/**
   * This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account.
   */
readonly ipRanges?: string[];

/**
   * The key vault id to store secret
   */
readonly keyVaultId?: string;

/**
   * The key vault secret name to store secret, only valid when storing one secret
   */
readonly keyVaultSecretName?: string;

/**
   * Set the object type
   */
readonly type: AzureResourceConfluentBootstrapServerConfluentSchemaRegistrySelfHostedServer;

/**
   * The target service type.
   */
readonly type: 'AzureResource';

/**
   * The Id of azure resource.
   */
readonly id?: string;

/**
   * The azure resource connection related properties.
   */
readonly resourceProperties?: AzureResourcePropertiesBase;

/**
   * Set the object type
   */
readonly type: KeyVault;

/**
   * The azure resource type.
   */
readonly type: 'KeyVault';

/**
   * True if connect via Kubernetes CSI Driver.
   */
readonly connectAsKubernetesCsiDriver?: bool;

/**
   * The target service type.
   */
readonly type: 'ConfluentBootstrapServer';

/**
   * The endpoint of service.
   */
readonly endpoint?: string;

/**
   * The target service type.
   */
readonly type: 'ConfluentSchemaRegistry';

/**
   * The endpoint of service.
   */
readonly endpoint?: string;

/**
   * The target service type.
   */
readonly type: 'SelfHostedServer';

/**
   * The endpoint of service.
   */
readonly endpoint?: string;

/**
   * Indicates whether to clean up previous operation when Linker is updating or deleting
   */
readonly deleteOrUpdateBehavior?: 'Default''ForcedCleanup';

/**
   * Type of VNet solution.
   */
readonly type?: 'privateLink''serviceEndponumber';
}

/**
 * ServicelinkerDryruns resource
 */
export class ServicelinkerDryruns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicelinkerDryrunsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceLinker/dryruns@2022-11-01-preview";
  }

  protected getResourceBody(props: ServicelinkerDryrunsProps): string {
    return JSON.stringify(
        {properties: {parameters: {actionName: "string"}}}
    );
  }
}
