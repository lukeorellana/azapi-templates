import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionBackupvaultsBackuppoliciesProps extends IAzAPIBaseProps {

}

/**
 * DataprotectionBackupvaultsBackuppolicies resource
 */
export class DataprotectionBackupvaultsBackuppolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataprotectionBackupvaultsBackuppoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataProtection/backupVaults/backupPolicies@2022-11-01-preview";
  }

  protected getResourceBody(props: DataprotectionBackupvaultsBackuppoliciesProps): string {
    return JSON.stringify(
        {properties: {datasourceTypes: ["string"], objectType: "string"}}
    );
  }
}
