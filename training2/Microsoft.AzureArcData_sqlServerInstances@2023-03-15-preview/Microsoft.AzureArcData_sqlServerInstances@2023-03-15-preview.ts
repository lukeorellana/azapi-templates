import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlserverinstancesProps extends IAzAPIBaseProps {
/**
   * Status of Azure Defender.
   */
readonly azureDefenderStatus?: 'Protected''Unknown''Unprotected';

/**
   * Timestamp of last Azure Defender status update.
   */
readonly azureDefenderStatusLastUpdated?: string;

/**
   * SQL Server collation.
   */
readonly collation?: string;

/**
   * ARM Resource id of the container resource (Azure Arc for Servers).
   */
readonly containerResourceId: string;

/**
   * The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance.
   */
readonly cores?: string;

/**
   * SQL Server current version.
   */
readonly currentVersion?: string;

/**
   * SQL Server edition.
   */
readonly edition?: 'Business Intelligence''Developer''Enterprise''Evaluation''Express''Standard''Web';

/**
   * Type of host for Azure Arc SQL Server
   */
readonly hostType?: 'AWS Kubernetes Service''AWS VMWare Virtual Machine''AWS Virtual Machine''Azure Kubernetes Service''Azure VMWare Virtual Machine''Azure Virtual Machine''Container''GCP Kubernetes Service''GCP VMWare Virtual Machine''GCP Virtual Machine''Other''Physical Server''Virtual Machine';

/**
   * SQL Server instance name.
   */
readonly instanceName?: string;

/**
   * SQL Server license type.
   */
readonly licenseType?: 'Free''HADR''LicenseOnly''PAYG''Paid''ServerCAL''Undefined';

/**
   * SQL Server update level.
   */
readonly patchLevel?: string;

/**
   * SQL Server product ID.
   */
readonly productId?: string;

/**
   * The cloud connectivity status.
   */
readonly status: 'Connected''Disconnected''Registered''Unknown';

/**
   * Dynamic TCP ports used by SQL Server.
   */
readonly tcpDynamicPorts?: string;

/**
   * Static TCP ports used by SQL Server.
   */
readonly tcpStaticPorts?: string;

/**
   * The number of logical processors used by the SQL Server instance.
   */
readonly vCore?: string;

/**
   * SQL Server version.
   */
readonly version?: 'SQL Server 2012''SQL Server 2014''SQL Server 2016''SQL Server 2017''SQL Server 2019''SQL Server 2022''Unknown';
}

/**
 * AzurearcdataSqlserverinstances resource
 */
export class AzurearcdataSqlserverinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlserverinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlServerInstances@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlserverinstancesProps): string {
    return JSON.stringify(
        {properties: {azureDefenderStatus: "string", azureDefenderStatusLastUpdated: "string", collation: "string", containerResourceId: "string", cores: "string", currentVersion: "string", edition: "string", hostType: "string", instanceName: "string", licenseType: "string", patchLevel: "string", productId: "string", status: "string", tcpDynamicPorts: "string", tcpStaticPorts: "string", vCore: "string", version: "string"}}
    );
  }
}
