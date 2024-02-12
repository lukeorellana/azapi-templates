import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlmanagedinstancesFailovergroupsProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataSqlmanagedinstancesFailovergroups resource
 */
export class AzurearcdataSqlmanagedinstancesFailovergroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlmanagedinstancesFailovergroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlmanagedinstancesFailovergroupsProps): string {
    return JSON.stringify(
        {properties: {partnerManagedInstanceId: "string", spec: {partnerMI: "string", partnerMirroringCert: "string", partnerMirroringURL: "string", partnerSyncMode: "string", role: "string", sharedName: "string", sourceMI: "string"}}}
    );
  }
}
