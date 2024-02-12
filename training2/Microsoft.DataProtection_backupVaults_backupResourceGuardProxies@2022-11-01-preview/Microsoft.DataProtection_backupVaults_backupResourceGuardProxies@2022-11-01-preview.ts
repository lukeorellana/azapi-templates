import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionBackupvaultsBackupresourceguardproxiesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:backupVaults;

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
 * DataprotectionBackupvaultsBackupresourceguardproxies resource
 */
export class DataprotectionBackupvaultsBackupresourceguardproxies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataprotectionBackupvaultsBackupresourceguardproxiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataProtection/backupVaults/backupResourceGuardProxies@2022-11-01-preview";
  }

  protected getResourceBody(props: DataprotectionBackupvaultsBackupresourceguardproxiesProps): string {
    return JSON.stringify(
        {properties: {description: "string", lastUpdatedTime: "string", resourceGuardOperationDetails: [{defaultResourceRequest: "string", vaultCriticalOperation: "string"}], resourceGuardResourceId: "string"}}
    );
  }
}
