import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesIntegrationruntimesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Integration runtime description.
   */
readonly description?: string;

/**
   * Set the object type
   */
readonly type: ManagedSelfHosted;

/**
   * Type of integration runtime.
   */
readonly type: 'Managed';

/**
   * Managed integration runtime managed virtual network.
   */
readonly managedVirtualNetwork?: ManagedIntegrationRuntimeManagedVirtualNetworkRefere...;

/**
   * Managed integration runtime properties.
   */
readonly typeProperties: ManagedIntegrationRuntimeTypeProperties;

/**
   * The id of the managed virtual network.
   */
readonly id?: string;

/**
   * The reference name of the managed virtual network
   */
readonly referenceName?: string;

/**
   * The type of the managed virtual network.
   */
readonly type?: string;

/**
   * The compute resource for managed integration runtime.
   */
readonly computeProperties?: IntegrationRuntimeComputeProperties;

/**
   * The name of virtual network to which Azure-SSIS integration runtime will join
   */
readonly customerVirtualNetwork?: IntegrationRuntimeCustomerVirtualNetwork;

/**
   * SSIS properties for managed integration runtime.
   */
readonly ssisProperties?: IntegrationRuntimeSsisProperties;

/**
   * Data flow properties for managed integration runtime.
   */
readonly dataFlowProperties?: IntegrationRuntimeDataFlowProperties;

/**
   * Maximum parallel executions count per node for managed integration runtime.
   */
readonly maxParallelExecutionsPerNode?: number;

/**
   * The node size requirement to managed integration runtime.
   */
readonly nodeSize?: string;

/**
   * The required number of nodes for managed integration runtime.
   */
readonly numberOfNodes?: number;

/**
   * VNet properties for managed integration runtime.
   */
readonly vNetProperties?: IntegrationRuntimeVNetProperties;

/**
   * Compute type of the cluster which will execute data flow job.
   */
readonly computeType?: 'ComputeOptimized''General''MemoryOptimized';

/**
   * Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
   */
readonly coreCount?: number;

/**
   * Time to live (in minutes) setting of the cluster which will execute data flow job.
   */
readonly timeToLive?: number;

/**
   * Resource IDs of the public IP addresses that this integration runtime will use.
   */
readonly publicIPs?: string[];

/**
   * The name of the subnet this integration runtime will join.
   */
readonly subnet?: string;

/**
   * The ID of subnet, to which this Azure-SSIS integration runtime will be joined.
   */
readonly subnetId?: string;

/**
   * The ID of the VNet that this integration runtime will join.
   */
readonly vNetId?: string;

/**
   * The ID of subnet to which Azure-SSIS integration runtime will join.
   */
readonly subnetId?: string;

/**
   * Catalog information for managed dedicated integration runtime.
   */
readonly catalogInfo?: IntegrationRuntimeSsisCatalogInfo;

/**
   * Custom setup script properties for a managed dedicated integration runtime.
   */
readonly customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties;

/**
   * Data proxy properties for a managed dedicated integration runtime.
   */
readonly dataProxyProperties?: IntegrationRuntimeDataProxyProperties;

/**
   * The edition for the SSIS Integration Runtime
   */
readonly edition?: 'Enterprise''Standard';

/**
   * Custom setup without script properties for a SSIS integration runtime.
   */
readonly expressCustomSetupProperties?: CustomSetupBase[];

/**
   * License type for bringing your own license scenario.
   */
readonly licenseType?: 'BasePrice''LicenseIncluded';

/**
   * The password of the administrator user account of the catalog database.
   */
readonly catalogAdminPassword?: SecureString;

/**
   * The administrator user name of catalog database.
   */
readonly catalogAdminUserName?: string;

/**
   * The pricing tier for the catalog database. The valid values could be found inhttps://azure.microsoft.com/pricing/details/sql-database/
   */
readonly catalogPricingTier?: 'Basic''Premium''PremiumRS''Standard';

/**
   * The catalog database server URL.
   */
readonly catalogServerEndpoint?: string;

/**
   * Type of the secret.
   */
readonly type: string;

/**
   * Value of secure string.
   */
readonly value: string;

/**
   * The URI of the Azure blob container that contains the custom setup script.
   */
readonly blobContainerUri?: string;

/**
   * The SAS token of the Azure blob container.
   */
readonly sasToken?: SecureString;

/**
   * The self-hosted integration runtime reference.
   */
readonly connectVia?: EntityReference;

/**
   * The path to contain the staged data in the Blob storage.
   */
readonly path?: string;

/**
   * The staging linked service reference.
   */
readonly stagingLinkedService?: EntityReference;

/**
   * The name of this referenced entity.
   */
readonly referenceName?: string;

/**
   * The type of this referenced entity.
   */
readonly type?: 'IntegrationRuntimeReference''LinkedServiceReference';

/**
   * Set the object type
   */
readonly type: CmdkeySetupComponentSetupEnvironmentVariableSetup;

/**
   * The type of custom setup.
   */
readonly type: 'CmdkeySetup';

/**
   * Cmdkey command custom setup type properties.
   */
readonly typeProperties: CmdkeySetupTypeProperties;

/**
   * The password of data source access.
   */
readonly password: SecretBase;

/**
   * The server name of data source access.
   */
readonly targetName: For Bicep, you can use theany()function.;

/**
   * The user name of data source access.
   */
readonly userName: For Bicep, you can use theany()function.;

/**
   * Set the object type
   */
readonly type: SecureString;

/**
   * The type of custom setup.
   */
readonly type: 'ComponentSetup';

/**
   * Install 3rd party component type properties.
   */
readonly typeProperties: LicensedComponentSetupTypeProperties;

/**
   * The name of the 3rd party component.
   */
readonly componentName: string;

/**
   * The license key to activate the component.
   */
readonly licenseKey?: SecretBase;

/**
   * The type of custom setup.
   */
readonly type: 'EnvironmentVariableSetup';

/**
   * Add environment variable type properties.
   */
readonly typeProperties: EnvironmentVariableSetupTypeProperties;

/**
   * The name of the environment variable.
   */
readonly variableName: string;

/**
   * The value of the environment variable.
   */
readonly variableValue: string;

/**
   * Type of integration runtime.
   */
readonly type: 'SelfHosted';

/**
   * When this property is not null, means this is a linked integration runtime. The property is used to access original integration runtime.
   */
readonly typeProperties?: SelfHostedIntegrationRuntimeTypeProperties;

/**
   * Linked integration runtime type from data factory
   */
readonly linkedInfo?: LinkedIntegrationRuntimeType;

/**
   * Set the object type
   */
readonly authorizationType: KeyRBAC;

/**
   * The authorization type for integration runtime sharing.
   */
readonly authorizationType: 'Key';

/**
   * The key used for authorization.
   */
readonly key: SecureString;

/**
   * The authorization type for integration runtime sharing.
   */
readonly authorizationType: 'RBAC';

/**
   * The resource identifier of the integration runtime to be shared.
   */
readonly resourceId: string;
}

/**
 * SynapseWorkspacesIntegrationruntimes resource
 */
export class SynapseWorkspacesIntegrationruntimes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesIntegrationruntimesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/integrationRuntimes@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesIntegrationruntimesProps): string {
    return JSON.stringify(
        {properties: {description: "string", type: "string"}}
    );
  }
}
