import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2Props extends IAzAPIBaseProps {

}

/**
 * DbforpostgresqlServergroupsv2 resource
 */
export class DbforpostgresqlServergroupsv2 extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServergroupsv2Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08";
  }

  protected getResourceBody(props: DbforpostgresqlServergroupsv2Props): string {
    return JSON.stringify(
        {properties: {administratorLoginPassword: "string", citusVersion: "string", coordinatorEnablePublicIpAccess: "${bool}", coordinatorServerEdition: "string", coordinatorStorageQuotaInMb: "${int}", coordinatorVCores: "${int}", enableHa: "${bool}", enableShardsOnCoordinator: "${bool}", maintenanceWindow: {customWindow: "string", dayOfWeek: "${int}", startHour: "${int}", startMinute: "${int}"}, nodeCount: "${int}", nodeEnablePublicIpAccess: "${bool}", nodeServerEdition: "string", nodeStorageQuotaInMb: "${int}", nodeVCores: "${int}", pointInTimeUTC: "string", postgresqlVersion: "string", preferredPrimaryZone: "string", sourceLocation: "string", sourceResourceId: "string"}}
    );
  }
}
