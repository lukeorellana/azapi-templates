import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeviceupdateAccountsInstancesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * Customer-initiated diagnostic log collection storage properties
   */
readonly diagnosticStorageProperties?: DiagnosticStorageProperties;

/**
   * Enables or Disables the diagnostic logs collection
   */
readonly enableDiagnostics?: bool;

/**
   * List of IoT Hubs associated with the account.
   */
readonly iotHubs?: IotHubSettings[];

/**
   * Authentication Type
   */
readonly authenticationType: 'KeyBased';

/**
   * ConnectionString of the diagnostic storage account
   */
readonly connectionString?: string;

/**
   * ResourceId of the diagnostic storage account
   */
readonly resourceId: string;

/**
   * IoTHub resource ID
   */
readonly resourceId: string;
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
