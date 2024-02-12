import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupresourceguardproxiesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * 
   */
readonly description?: string;

/**
   * 
   */
readonly lastUpdatedTime?: string;

/**
   * 
   */
readonly resourceGuardOperationDetails?: ResourceGuardOperationDetail[];

/**
   * 
   */
readonly resourceGuardResourceId?: string;

/**
   * 
   */
readonly defaultResourceRequest?: string;

/**
   * 
   */
readonly vaultCriticalOperation?: string;
}

/**
 * RecoveryservicesVaultsBackupresourceguardproxies resource
 */
export class RecoveryservicesVaultsBackupresourceguardproxies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupresourceguardproxiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupresourceguardproxiesProps): string {
    return JSON.stringify(
        {properties: {description: "string", lastUpdatedTime: "string", resourceGuardOperationDetails: [{defaultResourceRequest: "string", vaultCriticalOperation: "string"}], resourceGuardResourceId: "string"}, eTag: "string"}
    );
  }
}
