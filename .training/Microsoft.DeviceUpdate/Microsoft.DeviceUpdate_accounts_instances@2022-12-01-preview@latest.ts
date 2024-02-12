import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeviceupdateAccountsInstancesProps extends IAzAPIBaseProps {

}

/**
 * DeviceupdateAccountsInstances resource
 */
export class DeviceupdateAccountsInstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeviceupdateAccountsInstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeviceUpdate/accounts/instances@2022-12-01-preview";
  }

  protected getResourceBody(props: DeviceupdateAccountsInstancesProps): string {
    return JSON.stringify(
        {properties: {diagnosticStorageProperties: {authenticationType: "KeyBased", connectionString: "string", resourceId: "string"}, enableDiagnostics: "${bool}", iotHubs: [{resourceId: "string"}]}}
    );
  }
}
