import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionBackupvaultsBackupresourceguardproxiesProps extends IAzAPIBaseProps {

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
